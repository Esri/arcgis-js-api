![Current version](https://img.shields.io/github/package-json/v/Esri/arcgis-js-api/4master?label=Current%20version)

# arcgis-js-api

A minified, unbuilt version of the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/).

## Features

You can install these modules via [npm](http://npmjs.org/) and create your own custom builds, for example, with [Webpack](https://webpackjs.org), [RequireJS](https://requirejs.org/) or the [Dojo Toolkit](http://dojotoolkit.org/).

## Instructions

Additional instructions are available in the [jsapi-resources repoistory](https://github.com/Esri/jsapi-resources/tree/master/4.x/npm).

```
npm install arcgis-js-api
```

## TypeScript Typings

You can use the typings included with `arcgis-js-api` two ways.

### Include a `///` directive in your main TypeScript file.
```ts
// main.ts
/// <reference types="arcgis-js-api" />
```

### Or add to the `include` of your `tsconfig.json`.
```json
// tsconfig.json
{
  "compilerOptions": {},
  "include": [
    "node_modules/arcgis-js-api/index.d.ts",
    "src/**/*.ts",
    "src/**/*.tsx"
  ]
}
```

## Requirements

Building apps with the ArcGIS API for JavaScript requires signing up for a [ArcGIS Developer Subscription](https://developers.arcgis.com/sign-up/).


## Resources

* [ArcGIS for JavaScript](https://developers.arcgis.com/javascript/)
* [http://blogs.esri.com/esri/arcgis/tag/javascript/](http://blogs.esri.com/esri/arcgis/tag/javascript/)
* [twitter@ArcGISJSAPI](https://twitter.com/ArcGISJSAPI)

## Issues

- General questions about using these modules or the ArcGIS API for JavaScript? See the [GeoNet developer community](https://community.esri.com/t5/arcgis-api-for-javascript/bd-p/arcgis-api-for-javascript-questions).
- [Technical support](http://support.esri.com/).

## Licensing

COPYRIGHT © 2020 Esri

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