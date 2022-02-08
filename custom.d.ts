/// <reference types="optimized-images-loader" />
// prettier-ignore
declare module "*.png?webp" { const value: ImgSrc; export default value; }

/// <reference path="@redux-devtools/extension/lib/types/logOnlyInProduction" />
declare module "@redux-devtools/extension/lib/cjs/logOnlyInProduction";
