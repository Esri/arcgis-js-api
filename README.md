![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

# arcgis-js-api

A minified, unbuilt version of the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/).

## Features
A minified, unbuilt version of the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/).
You can install this repo via [npm](http://npmjs.org/) and create your own custom builds with [Webpack](https://webpackjs.org) or the [Dojo Toolkit](http://dojotoolkit.org/).

## Instructions

Building an ArcGIS API for JavaScript application requires signing up for an [ArcGIS account](https://developers.arcgis.com).

```
npm install arcgis-js-api
```

## Requirements

Please see our guide: [Using npm for Custom Builds](https://developers.arcgis.com/javascript/latest/guide/using-npm/index.html)

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

## Resources

* [ArcGIS for JavaScript](https://developers.arcgis.com/javascript/)
* [http://blogs.esri.com/esri/arcgis/tag/javascript/](http://blogs.esri.com/esri/arcgis/tag/javascript/)
* [twitter@ArcGISJSAPI](https://twitter.com/ArcGISJSAPI)

## Issues

Find a bug or want to request a new feature?  Please refer to [support.esri.com](http://support.esri.com/) or visit [GeoNet](https://geonet.esri.com/community/developers/web-developers/arcgis-api-for-javascript).

## Support
For assistance, please refer to [support.esri.com](http://support.esri.com/).

## Licensing
COPYRIGHT © 2020 Esri

All rights reserved under the copyright laws of the United States
and applicable international laws, treaties, and conventions.

This material is licensed for use under the Esri Master License
Agreement (MLA), and is bound by the terms of that agreement.
You may redistribute and use this code without modification,
provided you adhere to the terms of the MLA and include this
copyright notice.

See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english

For additional information, contact:
Environmental Systems Research Institute, Inc.
Attn: Contracts and Legal Services Department
380 New York Street
Redlands, California, USA 92373
USA

email: contracts@esri.com

See [copyright.txt](copyright.txt) for details.
