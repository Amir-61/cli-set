import fs from 'fs';
import chalk from 'chalk'

const set  = (field) => {
  let data 
  try {
    data = fs.readFileSync("./data.json", "utf8")
  } catch(err) {
    return console.log(chalk("File read failed: %e"), err);
  }
  
    let parsedJson = JSON.parse(data)
    const parts = field.split('=')

    try {
      parsedJson = validateInputAndConstructNewObj(parts[1], parsedJson, parts[0])
    } catch(e) {
        console.error(chalk(e.message))
        return
    }

    try {
      fs.writeFileSync("data.json", JSON.stringify(parsedJson))
    } catch(e) {
      console.log(chalk.red(e));
    }

}

const validateInputAndConstructNewObj = (newValue, currentObject,fieldName) => {
  const exitsintValue = currentObject[fieldName]
  // If new value is an Integer
  if (!isNaN(newValue)) {
    if (exitsintValue !== undefined && typeof exitsintValue !== 'number') {

      throw Error(generateValidationError(typeof exitsintValue, 'number'))
    }
    return {...currentObject, [fieldName]: parseInt(newValue)}
  }
  // If new value is a Boolean 
  else if (['true', 'false'].includes(newValue)) {
    if (exitsintValue !== undefined && typeof exitsintValue !== 'boolean') {        
      throw Error(generateValidationError(typeof exitsintValue, 'boolean'))
    }

    return {...currentObject, [fieldName]: newValue === 'true'}
  } else if (
      exitsintValue !== undefined && 
      typeof exitsintValue === 'boolean'
    ) {
          throw Error(generateValidationError('boolean', 'string'))
    } else if (
        exitsintValue !== undefined && 
        !isNaN(exitsintValue)
      ) {
          throw Error(generateValidationError('number', 'string'))
    } else {
      return {...currentObject, [fieldName]: newValue}
    }
}

const generateValidationError = (currentType, targetType) => {
  throw Error(`the value you are passing is type ${targetType}; but the pre-set value is type ${currentType}`)
}

export default set