import { renderToString } from "react-dom/server"
import React from "react"
import { Html } from "./html"
import fs from "fs"
import path from "path"
import * as os from "os"
if (!fs.existsSync(path.join(__dirname, "../build"))) {
    fs.mkdirSync(path.join(__dirname, "../build"))
}
const html = "<!DOCTYPE html>" + renderToString(React.createElement(Html))
fs.writeFileSync(path.join(__dirname, "../build/index.html"), html, { encoding: "utf8" })
console.log("file " + path.join(__dirname, "../build/index.html") + " create success")