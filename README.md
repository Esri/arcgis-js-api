# @arcgis/core

A minified, unbuilt version of the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) ES modules.

## Features

You can install these modules via [npm](https://npmjs.org/) and then use them directly in a framework such as [React](https://reactjs.org/), [Vue.js](https://vuejs.org) or [Angular](https://cli.angular.io/). Or, you can also create your own custom builds with [Webpack](https://webpackjs.org) or [rollup.js](https://rollupjs.org/guide/en/).

Sample applications can be found at [github.com/jsapi-resources/](https://github.com/Esri/jsapi-resources/tree/master/esm-samples).

## Get started

Install the modules into your project:

```
npm install @arcgis/core
```

## Configure CSS

Set the CSS to the same version as the installed API modules. You can verify the installed API version by running `npm list @arcgis/core`.  If you are working with local assets skip to the *Manage assets locally* section.

The first example shows importing CSS for production API version `4.19.0`:

*index.css* 

```css
@import "https://js.arcgis.com/4.19/@arcgis/core/assets/esri/themes/light/main.css";
```

The second example shows importing CSS for `next` API version `4.19.0-next.20210324`:

*index.css*

```css
@import "https://cdn.jsdelivr.net/npm/@arcgis/core@4.19.0-next.20210324/assets/esri/themes/light/main.css";
```

## Working with assets

For most local builds, the API's assets are automatically pulled from a CDN at runtime and there is no need for additional configuration. The assets include styles, images, web workers, wasm and localization files. Production versions of the API use the ArcGIS CDN, and `next` builds (e.g. `4.19.0-next.20210324`) use jsDelivr, similar to the CSS example above. 

### Manage assets locally

If you need to manage the assets locally, copy them into your project from `/node_modules/@arcgis/core/assets`, and then set `config.assetsPath` to insure requests for assets are resolved correctly. A simple way to accomplish this is to configure an npm script that runs during your build process. For example, use npm to install `ncp` and configure a script in package.json to copy the folder. 

Here’s a React example:

*package.json*

```json
{
  "scripts": {
    "start": "ncp ./node_modules/@arcgis/core/assets ./public/assets && react-scripts start",
    "build": "ncp ./node_modules/@arcgis/core/assets ./public/assets && react-scripts build",
  }
}
```

*App.js*

```js
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets"; 
```

*index.css*

```css
@import "@arcgis/core/assets/esri/themes/light/main.css";
```

For Angular, copy the asset files by configuring the `architect/build/options/assets` section of `angular.json`, for example:

*angular.json*

```json
{
  "assets": [
    {
      "glob": "**/*",
      "input": "node_modules/@arcgis/core/assets",
      "output": "/assets/"
    }
  ]
}
```

*app.component.ts*

```ts
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets"; 
```

*app.component.css*

```css
@import "@arcgis/core/assets/esri/themes/light/main.css";
```

For other installations, consider using this npm script as a starting point:

*package.json*

```json
{
  "script": {
    "copy": "cp -R ./node_modules/@arcgis/core/assets ./dist/assets"
  }
}
```

Windows users can use [`xcopy`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/xcopy) or [`ncp`](https://www.npmjs.com/package/ncp) for any platform.

## Requirements

Use of the ArcGIS API for JavaScript is subject to the terms described in the product-specific [terms of use.](https://www.esri.com/en-us/legal/terms/product-specific-scope-of-use) Learn more about licensing [here](https://developers.arcgis.com/javascript/latest/licensing/).

## Resources

- [ArcGIS for JavaScript](https://developers.arcgis.com/javascript/)
- [http://blogs.esri.com/esri/arcgis/tag/javascript/](https://blogs.esri.com/esri/arcgis/tag/javascript/)
- [twitter@ArcGISJSAPI](https://twitter.com/ArcGISJSAPI)

## Issues

- General questions about using these modules or the ArcGIS API for JavaScript? See the [Esri developer community](https://community.esri.com/t5/arcgis-api-for-javascript/ct-p/arcgis-api-for-javascript).
- [Technical support](https://support.esri.com/).

## Licensing

COPYRIGHT © 2021 Esri

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