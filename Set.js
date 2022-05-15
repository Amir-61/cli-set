import cli from "commander";
import setHandler from "./setHandlers.js"

const SET = () => {
    return(cli
        .command("SET")
        .argument("<field>", "field")
        .description(
          "Setting properties of the object (eg. fieldName=myValue)"
        )
        .action(setHandler))
}

export default SET
