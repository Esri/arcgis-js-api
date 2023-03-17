# arcgis-js-api

A minified, unbuilt version of the [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/) AMD modules.

| :warning:  Repository Archive Notice   |
| :-----------------------------------------|
| This repository will be archived at 4.26 (Early 2023) and then removed in a future release. All versions will continue to be available for install on NPM: https://www.npmjs.com/package/arcgis-js-api |

If you are starting a new project, we recommend using [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules. 

## Features

You can install these modules with [npm](https://npmjs.org/) and create your own custom builds, for example you can use [RequireJS](https://requirejs.org/) or the [Dojo Toolkit](https://dojotoolkit.org/).

## Instructions

Additional instructions and examples are available in the SDK's [Build with AMD modules](https://developers.arcgis.com/javascript/latest/amd-build/) Guide page.

```
npm install arcgis-js-api
```

## TypeScript Typings

The TypeScript type definitions are included with the install and there are two ways to include them. The first way is to include a `///` directive in your main TypeScript file:

*main.ts*

```ts
/// <reference types="arcgis-js-api" />
```

Or, add a reference to the declaration file in the `include` of your `tsconfig.json`:

*tsconfig.json*

```json
{
  "include": [
    "node_modules/arcgis-js-api/index.d.ts",
    "src/**/*.ts",
    "src/**/*.tsx"
  ]
}
```

## Requirements

Use of the ArcGIS Maps SDK for JavaScript is subject to the terms described in the product-specific [terms of use.](https://www.esri.com/en-us/legal/terms/product-specific-scope-of-use) Learn more about licensing [here](https://developers.arcgis.com/javascript/latest/licensing/).


## Resources

* [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/)
* [http://blogs.esri.com/esri/arcgis/tag/javascript/](https://blogs.esri.com/esri/arcgis/tag/javascript/)

## Issues

- General questions about using these modules or the ArcGIS Maps SDK for JavaScript? See the [Esri developer community](https://community.esri.com/t5/arcgis-api-for-javascript/ct-p/arcgis-api-for-javascript).
- [Technical support](https://support.esri.com/).

## Licensing

COPYRIGHT © 2023 Esri

All rights reserved under the copyright laws of the United States
and applicable international laws, treaties, and conventions.

This material is licensed for use under the [Esri Master License
Agreement (MLA)](https://www.esri.com/content/dam/esrisites/en-us/media/legal/ma-full/ma-full.pdf), and is bound by the terms of that agreement.
You may redistribute and use this code without modification,
provided you adhere to the terms of the MLA and include this
copyright notice.

For additional information, contact:
Environmental Systems Research Institute, Inc.
Attn: Contracts and Legal Services Department
380 New York Street
Redlands, California, USA 92373
USA

email: contracts@esri.com
