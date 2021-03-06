# cli-set
This is the SET plugin for [CLI project](https://github.com/Amir-61/cli).

- **NPM:** [@amir-cli/cli-set](https://www.npmjs.com/package/@amir-cli/cli-set), **GITHUB:** [cli-set](https://github.com/Amir-61/cli-set)

![image](https://user-images.githubusercontent.com/10672146/168502071-85fe7815-63ed-4f14-b4ee-8168d8d4f8e0.png)


# Usages:
 - #### `SET propertyname=newValue` :
    will change the target object’s member named “propertyname” to have a value equal to “newValue”. If the input value is incompatible (i.e. an int being set to a string), print out an appropriate error message.


# Connector structore:
- `test` Folder: Each usage is unit tested using mocha
- `set.js` file: It's like Data Access Object (DAO) of the connector where it exposes the newly implemented commands
- `setHandlers.js` file: It's the handler for each exposed usages

# Unit tests:
- This connector comes with it's own unit tests written in [mocha](https://mochajs.org/), you can run unit tests for each module sperataly using `npm test` command.
