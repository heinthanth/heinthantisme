const jsonFiles=["package.json","package-lock.json","tsconfig.json",".eslintrc.json",".babelrc.json"],jsFiles=["next.config.js","postcss.config.js","tailwind.config.js","images.config.js"],{minify:minify}=require("terser"),{resolve:resolve}=require("path"),root=resolve(__dirname),{readFileSync:readFileSync,writeFileSync:writeFileSync}=require("fs");jsonFiles.map((e=>resolve(root,e))).forEach((e=>writeFileSync(e,JSON.stringify(require(e))))),jsFiles.map((e=>resolve(root,e))).forEach((e=>{let i=readFileSync(e,{encoding:"utf-8"});minify(i).then((i=>{writeFileSync(e,i.code)}))}));