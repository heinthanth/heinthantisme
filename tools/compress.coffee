{ resolve } = require "path"
{ writeFileSync, readFileSync } = require "fs"
{ parse } = require "json5"
{ minify } = require "terser"

root = resolve __dirname, ".."

compressJson = (...ps) ->
    (ps.map (p) -> resolve root, p).forEach (p) ->
        content = readFileSync p, encoding: "utf-8"
        writeFileSync p, JSON.stringify parse content

compressJavaScript = (...ps) ->
    (ps.map (p) -> resolve root, p).forEach (p) ->
        content = readFileSync p, encoding: "utf-8"
        writeFileSync p, (await minify content, format: comments: "all").code

compressJavaScript "astro.config.mjs", ".prettierrc.js"
compressJson "package.json", "package-lock.json", "tsconfig.json"
compressJson ".vscode/extensions.json", ".vscode/launch.json"