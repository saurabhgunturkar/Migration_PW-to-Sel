import { readFileSync, writeFileSync } from "fs";
import * as glob from "glob";
import * as path from "path";
import { commandMap } from "./mappings/commandMap";

const files = glob.sync("input/**/*.ts");

files.forEach((file) => {
    console.log(`Processing file: ${file}`);
    const content = readFileSync(file, "utf-8");
    const testName = path.basename(file, ".ts").replace(/\./g, "_");
    let testSteps = "";

    const lines = content.split("\n");
    lines.forEach((line) => {
        const trimmedLine = line.trim().replace(";", "");
        const match = trimmedLine.match(/await page\.(.*?)\((.*)\)/);
        if (match) {
            const [, command, args] = match;
            if (commandMap[command]) {
                console.log(`Found command: ${command}`);
                let javaLine = commandMap[command];
                javaLine = javaLine.replace("$1", args);
                testSteps += `\n        ${javaLine};`;
            }
        }
    });

    const template = readFileSync("templates/testTemplate.java", "utf-8");
    const javaCode = template
        .replace("{{testName}}", testName)
        .replace("{{testSteps}}", testSteps);

    const outputPath = path.join("output", `${testName}.java`);
    writeFileSync(outputPath, javaCode);
    console.log(`Generated file: ${outputPath}`);
});