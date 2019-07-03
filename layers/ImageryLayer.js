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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

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
 * @module esri/layers/ImageryLayer
 * @since 4.0
 * @see {@link module:esri/Map#layers Map.layers}
 * @see [Sample - Add an ImageryLayer to a map](../sample-code/layers-imagerylayer/index.html)
 * @see [Sample - Work with pixelFilter in an ImageryLayer](../sample-code/layers-imagery-pixelvalues/index.html)
 * @see [Sample - Set a server side raster function](../sample-code/layers-imagery-popup/index.html)
 * @see [Sample - Set a client side raster function](../sample-code/layers-imagery-renderingrule/index.html)
 * @see [Sample - Raster attribute table](../sample-code/layers-imagery-attribute-table/index.html)
 */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../PopupTemplate","../core/maybe","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISImageService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/commonProperties","../support/popupUtils"],function(e,r,t,o,p,n,a,i,u,l,s,y,d,c,m,f,v,g,h,w){return function(r){function y(e,t){var o=r.call(this)||this;return o.drawMode=!0,o.drawType="2d",o.legendEnabled=!0,o.isReference=null,o.operationalLayerType="ArcGISImageServiceLayer",o.popupEnabled=!0,o.popupTemplate=null,o.type="imagery",o}return t(y,r),y.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?p({url:e},r):e},y.prototype.load=function(e){var r=this,t=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)})),this.when()},Object.defineProperty(y.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),y.prototype.createPopupTemplate=function(e){return w.createPopupTemplate(this,e)},y.prototype.redraw=function(){this.emit("redraw")},y.prototype.importLayerViewModule=function(r){return a(this,void 0,void 0,function(){return n(this,function(t){switch(r.type){case"2d":return[2,l.create(function(r){return e(["../views/2d/layers/ImageryLayerView2D"],r)})];case"3d":return[2,l.create(function(r){return e(["../views/3d/layers/ImageryLayerView3D"],r)})]}return[2]})})},o([s.property()],y.prototype,"drawMode",void 0),o([s.property()],y.prototype,"drawType",void 0),o([s.property(h.legendEnabled)],y.prototype,"legendEnabled",void 0),o([s.property({type:["show","hide"]})],y.prototype,"listMode",void 0),o([s.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],y.prototype,"isReference",void 0),o([s.property({type:["ArcGISImageServiceLayer"]})],y.prototype,"operationalLayerType",void 0),o([s.property(h.popupEnabled)],y.prototype,"popupEnabled",void 0),o([s.property({type:i,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],y.prototype,"popupTemplate",void 0),o([s.property({readOnly:!0,dependsOn:["fields","title"]})],y.prototype,"defaultPopupTemplate",null),o([s.property({readOnly:!0,json:{read:!1}})],y.prototype,"type",void 0),y=o([s.subclass("esri.layers.ImageryLayer")],y)}(s.declared(y,d,c,m,f,v,g))});