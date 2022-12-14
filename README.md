# arcgis-js-api

A minified, unbuilt version of the [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/) AMD modules.

| :warning:  Repository Archive Notice   |
| :-----------------------------------------|
| This repository will be archived at 4.26 (Early 2023) and then removed in a future release. All versions will continue to be available for install on NPM: https://www.npmjs.com/package/arcgis-js-api |

## Features

For an overview of the SDK, visit the [developer documentation](https://developers.arcgis.com/javascript/latest/key-features/) site.

You can install these modules with [npm](https://npmjs.org/) and then use them directly in a framework such as [React](https://reactjs.org/), [Vue.js](https://vuejs.org) or [Angular](https://cli.angular.io/). Or, you can also create your own custom builds with [Webpack](https://webpackjs.org) or [rollup.js](https://rollupjs.org/guide/en/). 

The SDK includes [TypeScript](https://www.typescriptlang.org/) type definitions. The `.d.ts` declaration files are bundled with the install.

Sample applications can be found at [github.com/jsapi-resources/](https://github.com/Esri/jsapi-resources/tree/master/esm-samples).

## Get started

Install the modules into your project:

```
npm install @arcgis/core
```

## Configure CSS

Set the CSS to the same version as the installed SDK modules. You can verify the installed SDK version by running `npm list @arcgis/core`.  If you are working with local assets skip to the *Manage assets locally* section.

The first example shows importing CSS for production SDK version `4.25.0`:

*index.css* 

```css
@import "https://js.arcgis.com/4.25/@arcgis/core/assets/esri/themes/light/main.css";
```

The second example shows importing CSS for `next` SDK version `4.19.0-next.20210324`:

*index.css*

```css
@import "https://cdn.jsdelivr.net/npm/@arcgis/core@4.25.0-next.20220921/assets/esri/themes/light/main.css";
```

## Working with assets

The default configuration for local builds is for the SDK to automatically pull assets from a CDN at runtime, there is no need for additional configuration. The assets include styles, images, web workers, wasm and localization files. Production versions of the SDK's assets are hosted on the ArcGIS CDN, and `next` builds (e.g. `4.25.0-next.20220921`) use assets hosted on the jsDelivr CDN.

### Manage assets locally

If you need to manage the assets locally, copy them into your project from `/node_modules/@arcgis/core/assets`, and then set `config.assetsPath` to insure requests for assets are resolved correctly. A simple way to accomplish this is to configure an npm script that runs during your build process. For example, use npm to install `ncp` and configure a script in package.json to copy the folder. 

**Important:** Every time you upgrade the SDK, be sure to recopy the new version of the assets to your project. This ensures the assets stay synchronized.

Here’s a React example:
=======
A minified, unbuilt version of the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) AMD modules.

If you are starting a new project, we recommend using [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules. 

## Features

You can install these modules with [npm](https://npmjs.org/) and create your own custom builds, for example you can use [RequireJS](https://requirejs.org/) or the [Dojo Toolkit](https://dojotoolkit.org/).

## Instructions

Additional instructions and examples are available in the SDK's [Build with AMD modules](https://developers.arcgis.com/javascript/latest/amd-build/) Guide page.

```
npm install arcgis-js-api
```

## TypeScript Typings

You can use the typings included with `arcgis-js-api` two ways. The first way is to include a `///` directive in your main TypeScript file:

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

- [ArcGIS Maps SDK JavaScript](https://developers.arcgis.com/javascript/)
- [http://blogs.esri.com/esri/arcgis/tag/javascript/](https://blogs.esri.com/esri/arcgis/tag/javascript/)
- [twitter@ArcGISJSAPI](https://twitter.com/ArcGISJSAPI)

## Issues

- General questions about using these modules or the ArcGIS Maps SDK for JavaScript? See the [Esri developer community](https://community.esri.com/t5/arcgis-api-for-javascript/ct-p/arcgis-api-for-javascript).
- [Technical support](https://support.esri.com/).

## Licensing

COPYRIGHT © 2022 Esri

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