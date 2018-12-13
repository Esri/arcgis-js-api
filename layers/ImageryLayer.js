// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

/**
 * Represents an image service resource as a layer. An ImageryLayer retrieves and displays
 * data from image services. ImageryLayer allows you to and apply client side [pixel filtering](#pixelFilter),
 * server defined or client-defined [rendering rules](#renderingRule) (e.g. remap, colormap), and
 * [mosaic rules](#mosaicRule). This layer is particularly useful when you need to interactively change pixel
 * manipulation criteria and get an immediate response on the client.
 *
 * [![layers-imagery](../../assets/img/apiref/layers/layers-imagery.png)](../sample-code/layers-imagery-pixelvalues/index.html)
 *
 * If the image service is requested from a different domain, a [CORS enabled server](https://enable-cors.org/server.html) or a proxy is
 * required.
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * ImageryLayers with Stretched, Unique value or Classify renderers defined on the layer item fall back to the rendering style defined on the service.
 * These renderers will be supported in future versions of the API.
 *
 * :::
 *
 * @module esri/layers/ImageryLayer
 * @since 4.0
 * @see {@link module:esri/Map#layers Map.layers}
 * @see [Sample - Add an ImageryLayer to a map](../sample-code/layers-imagerylayer/index.html)
 * @see [Sample - Work with pixelFilter in an ImageryLayer](../sample-code/layers-imagery-pixelvalues/index.html)
 * @see [Sample - Set a server side raster function](../sample-code/layers-imagery-popup/index.html)
 * @see [Sample - Set a client side raster function](../sample-code/layers-imagery-renderingrule/index.html)
 * @see [Sample - Raster attribute table](../sample-code/layers-imagery-attribute-table/index.html)
 */

define(["require","../core/lang","../core/promiseUtils","./Layer","./mixins/ArcGISImageService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./mixins/RefreshableLayer","./support/commonProperties"],function(e,r,a,i,n,t,s,l,o,c){var p={canvas2D:"2d",webGL:"webgl",expWebGL:"experimental-webgl",webGL2:"webgl2",expWebGL2:"experimental-webgl2"};return i.createSubclass([n,t,s,l,o],{declaredClass:"esri.layers.ImageryLayer",normalizeCtorArgs:function(e,a){return"string"==typeof e?r.mixin({},{url:e},a):e},load:function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]}).then(this._fetchService.bind(this),this._fetchService.bind(this)))},properties:{url:c.url,drawMode:!0,drawType:{value:p.canvas2D,cast:function(e){return e in p?e:p.canvas2D}},legendEnabled:c.legendEnabled,operationalLayerType:{type:["ArcGISImageServiceLayer"],value:"ArcGISImageServiceLayer"},popupEnabled:c.popupEnabled,pixelFilter:null,type:{value:"imagery",json:{read:!1}}},redraw:function(){this.emit("redraw")},importLayerViewModule:function(r){switch(r.type){case"2d":return a.create(function(r){e(["../views/2d/layers/ImageryLayerView2D"],r)});case"3d":return a.create(function(r){e(["../views/3d/layers/ImageryLayerView3D"],r)})}}})});