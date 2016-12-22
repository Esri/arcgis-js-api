// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

/**
 * Represents an image service resource as a layer. An ImageryLayer retrieves and displays
 * data from image services. ImageryLayer allows you to and apply client side [pixel filtering](#pixelFilter),
 * server defined or client-defined [rendering rules](#renderingRule) (e.g. remap, colormap), and
 * [mosaic rules](#mosaicRule). This layer is particularly useful when you need to interactively change pixel
 * manipulation criteria and get an immediate response on the client.
 *
 * [![layers-imagery](../assets/img/apiref/layers/layers-imagery.png)](../sample-code/layers-imagery-pixelvalues/index.html)
 *
 * If the image service is requested from a different domain, a [CORS enabled server](http://enable-cors.org/server.html) or a proxy is
 * required. If CORS is enabled on the server add the image service domain to {@link module:esri/config/request#corsEnabledServers 
 * esriConfig.request.corsEnabledServers}. Alternatively, if CORS cannot be enabled on ArcGIS Server you can set up a proxy on your web 
 * server and then add it to the proxy rules list in {@link module:esri/config esriConfig} using 
 * {@link module:esri/core/urlUtils#addProxyRule addProxyRule()}.
 * 
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
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

define(["dojo/_base/lang","./Layer","./mixins/ArcGISImageService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer"],function(e,a,r,i,n,l){var t={canvas2D:"2d",webGL:"webgl",expWebGL:"experimental-webgl",webGL2:"webgl2",expWebGL2:"experimental-webgl2"},s=a.createSubclass([r,i,n,l],{declaredClass:"esri.layers.ImageryLayer",viewModulePaths:{"2d":"../views/2d/layers/ImageryLayerView2D","3d":"../views/3d/layers/ImageLayerView3D"},normalizeCtorArgs:function(a,r){return"string"==typeof a?e.mixin({},{url:a},r):a},load:function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]}).always(this._fetchService.bind(this)))},properties:{drawMode:!0,drawType:{value:t.canvas2D,cast:function(e){return e in t?e:t.canvas2D}},legendEnabled:{json:{readFrom:["showLegend"],read:function(e,a){return null!=a.showLegend?a.showLegend:!0}}},operationalLayerType:"ArcGISImageServiceLayer",popupEnabled:{json:{readFrom:["disablePopup"],read:function(e,a){return null!=a.disablePopup?!a.disablePopup:!0}}},pixelFilter:null,type:{value:"imagery",json:{readable:!1}}},redraw:function(){this.emit("redraw")},fetchImage:function(e){return this._fetchImage(e)},applyFilter:function(e){return this._applyFilter(e)}});return s});