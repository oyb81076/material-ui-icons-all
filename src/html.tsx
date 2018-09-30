import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import fs = require("fs")
import path = require("path")
import icons = require("@material-ui/icons")
const components = fs.readdirSync(path.join(__dirname, "../node_modules/@material-ui/icons/"))
    .filter(x => /^[A-Z].*\.js$/.test(x))
    .map((x) => x.replace(/\.js$/, ""))
    .filter(x => (icons as any)[x])
const Icons: { [key: string]: React.ComponentType<SvgIconProps> } = icons
export const Html = () =>
    <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico" />
            <title>Material-Ui Icons</title>
        </head>
        <body style={{ fontSize: 14 }}>
            {components.map((name) => {
                const Svg = Icons[name]
                return (
                    <a href={"#" + name}
                        key={name}
                        style={{ display: "inline-block", padding: 5 }}>
                        <Svg style={{ width: 40 }} fontSize="small" />
                    </a>
                )
            })}
        </body>
    </html>