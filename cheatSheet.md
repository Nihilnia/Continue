## _NodeJS Cheatsheet_

## General, core

| Code                 | Purpose                                | Example Usage                                |
| -------------------- | -------------------------------------- | -------------------------------------------- |
| node -v              | version control of node                | `node -v`                                    |
| npm -v               | version controlof npm                  | `npm -v`                                     |
| require              | importing modules                      | `const util = require('util')`               |
| process.argv         | all the arguments coming from terminal | `console.log(process.argv)`                  |
| process.stdout.on    | waiting to terminal                    | `process.stdout.on("data", (data) => {})`    |
| process.stdout.write | output write                           | `process.stdout.write('Broken Phone Blues')` |
| setTimeout           | to create timeout                      | `setTimeout(() => {}, 5000)`                 |
| setInterval          | to create interval                     | `setInterval(() => {}, 5000)`                |
| clearInterval        | to create interval                     | `clearInterval(interval)`                    |

## Modules

| Module         | Purpose                                  | Example Usage                               |
| -------------- | ---------------------------------------- | ------------------------------------------- |
| path           | to get paths, directories, folders       | `const util = require('path')`              |
| util           | to get detailed outputs like time        | `const util = require('util')`              |
| v8             | to get detailed outputs of the app usage | `const util = require('v8')`                |
| events         | to create event/ s like emitter          | `const util = require('events')`            |
| module.exports | to export module/ s                      | `module.exports = { module, anotherModule}` |

## File Management and Streams

| Code                       | Purpose                                 | Example Usage                                                           |
| -------------------------- | --------------------------------------- | ----------------------------------------------------------------------- |
| readdir, readdirSync       | to read directories                     | `fs.readdir('pathOfDir', () => {})`                                     |
| readFile, readFileSync     | to read files                           | `fs.readFile('file.extension', 'UTF-8'() => {})`                        |
| appendFile, appendFileSync | to append data                          | `fs.appendFile('file.extension', 'Hello world.' () => {})`              |
| mkdir, mkdirSync           | to create directories                   | `fs.mkdir('pathOfDir', () => {})`                                       |
| rename, renameSync         | to rename and moving files/ directories | `fs.rename('oldFileName.extension', 'newFileName.extension', () => {})` |
| unlink, unlinkSync         | to remove files/ directories            | `fs.unlink('fileToRemove.extension', () => {})`                         |
| createReadStream           | to create reading stream                | `fs.createReadStream('fileName.extension', 'UTF-8')`                    |
| createWriteStream          | to create writing stream                | `fs.createWriteStream('fileName.extension');`                           |
