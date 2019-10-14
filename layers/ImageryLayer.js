// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

/**
 *
 * Represents an [image service resource](https://developers.arcgis.com/rest/services-reference/image-service.htm)
 * as a layer. An ImageryLayer retrieves and displays data from image services.
 * An image service supports accessing the mosaicked image, its catalog, and the individual
 * rasters in the catalog. An image service supports dynamic access and tiled access. Dynamic access provides more functionalities,
 * and tiled access provides faster and more scalable access to precooked tiles.
 *
 * [![layers-imagery](../../assets/img/apiref/layers/layers-imagery.png)](../sample-code/layers-imagery-pixelvalues/index.html)
 *
 * If the image service is requested from a different domain, a [CORS enabled server](../guide/cors/index.html) or a
 * [proxy](../guide/proxies/index.html) is required.
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * ### ImageryLayer rendering
 *
 * ImageryLayer can be rendered on the server or on the client. This section talks about different approaches you can take when rendering
 * an ImageryLayer in your application.
 *
 * #### Applying renderingRule
 *
 * Image service supports dynamic processing which can be applied through the layer’s [renderingRule](#renderingRule) property.
 * A rendering rule defines how the requested image should be rendered or processed. You can process images using raster functions
 * published with the image service. You can also use well-known raster functions, such as the
 * [hillshade function](https://developers.arcgis.com/documentation/common-data-types/raster-function-objects.htm) for elevation data,
 * the [stretch function](https://developers.arcgis.com/documentation/common-data-types/raster-function-objects.htm) for multispectral
 * data, and the [colormap function](https://developers.arcgis.com/documentation/common-data-types/raster-function-objects.htm)
 * for thematic data. When renderingRule is applied to the layer, the network request is made to the server for the image to be processed.
 *
 * #### Applying renderer
 *
 * ImageryLayer supports various [renderers](#renderer). By default, an ImageryLayer uses server side rendering. ImageryLayer
 * parses a renderer specified by a user and leverages a [renderingRule](#renderingRule) specified by the server or the user to achieve the
 * expected rendering for the images. The server processes and renders the ImageryLayer and returns a ready-to-draw `jpg` or `png` image
 * to the client.
 *
 * When an ImageryLayer is created with `lerc` [format](#format), the client gets access to the raw data which
 * can be used for client-side analysis and rendering. A default renderer that leverages available imagery information
 * is applied to an ImageryLayer with `lerc` format if the [pixelFilter](#pixelFilter) function is not specified.
 * The user can change this default renderer on the client-side by applying a [renderer](#renderer) or [pixelFilter](#pixelFilter).
 * The [pixelFilter](#pixelFilter) is a good alternative if the existing renderers do not meet your requirements. If both
 * `renderer` and `pixelFilter` are applied to the layer then the `pixelFilter` will take priority and its logic will be applied.
 *
 * #### Applying pixelFilter
 *
 * The [pixelFilter](#pixelFilter) can be used to colorize raw image pixels when ImageryLayer's [format](#format) is set to `lerc`.
 * It is a function that processes the {@link module:esri/views/layers/ImageryLayerView#pixelData pixelData}.
 * The `pixelData` object contains a {@link module:esri/layers/support/PixelBlock pixelBlock} property that gives
 * you access to all of the pixels in the raster on the client. Inside the `pixelFilter` you may loop through all the pixels
 * and process them. This function is a useful alternative if the existing renderers do not meet your requirements, because it gives you
 * control over how to color image pixels. If both a [renderer](#renderer) and `pixelFilter` are applied to the layer then the
 * `pixelFilter` will take priority and its logic will be applied.
 *
 * @module esri/layers/ImageryLayer
 * @since 4.0
 * @see module:esri/views/layers/ImageryLayerView
 * @see [Sample - Add an ImageryLayer to a map](../sample-code/layers-imagerylayer/index.html)
 * @see [Sample - Work with pixelFilter in an ImageryLayer](../sample-code/layers-imagery-pixelvalues/index.html)
 * @see [Sample - Set a server side raster function](../sample-code/layers-imagery-popup/index.html)
 * @see [Sample - Set a client side raster function](../sample-code/layers-imagery-renderingrule/index.html)
 * @see [Sample - Raster attribute table](../sample-code/layers-imagery-attribute-table/index.html)
 * @see [Sample - Image coordinate system](../sample-code/layers-imagery-coordinatesystem/index.html)
 */

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../PopupTemplate","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISImageService","./mixins/ArcGISService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/commonProperties","../support/popupUtils"],function(e,r,t,o,i,a,p,n,s,l,c,u,d,y,m,f,v,g,h,S,L,b){return function(r){function l(e,t){var o=r.call(this)||this;return o.legendEnabled=!0,o.isReference=null,o.operationalLayerType="ArcGISImageServiceLayer",o.popupEnabled=!0,o.popupTemplate=null,o.type="imagery",o}return t(l,r),l.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?i({url:e},r):e},l.prototype.load=function(e){var r=this,t=s.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)})),this.when()},Object.defineProperty(l.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),l.prototype.createPopupTemplate=function(e){var r=this.rasterFields,t=this.title,o=new Set,i=!1,a=!1;this.capabilities&&(i=this.capabilities&&this.capabilities.some(function(e){return"catalog"===e.toLowerCase()})||this.fields&&this.fields.length>0,a=i&&("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType));var p=new Set;i&&(p.add("raster.itempixelvalue"),a&&p.add("raster.magnitude").add("raster.direction"));for(var n=0,s=r;n<s.length;n++){var l=s[n],c=l.name.toLowerCase();p.has(c)||c.indexOf("raster.servicepixelvalue.")>-1||o.add(l.name)}return b.createPopupTemplate({fields:r,title:t,visibleFieldNames:o},e)},l.prototype.redraw=function(){this.emit("redraw")},l.prototype.importLayerViewModule=function(r){return p(this,void 0,void 0,function(){return a(this,function(t){switch(r.type){case"2d":return[2,c.create(function(r){return e(["../views/2d/layers/ImageryLayerView2D"],r)})];case"3d":return[2,c.create(function(r){return e(["../views/3d/layers/ImageryLayerView3D"],r)})]}return[2]})})},o([u.property(L.legendEnabled)],l.prototype,"legendEnabled",void 0),o([u.property({type:["show","hide"]})],l.prototype,"listMode",void 0),o([u.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],l.prototype,"isReference",void 0),o([u.property({type:["ArcGISImageServiceLayer"]})],l.prototype,"operationalLayerType",void 0),o([u.property(L.popupEnabled)],l.prototype,"popupEnabled",void 0),o([u.property({type:n,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],l.prototype,"popupTemplate",void 0),o([u.property({readOnly:!0,dependsOn:["fields","title"]})],l.prototype,"defaultPopupTemplate",null),o([u.property({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=o([u.subclass("esri.layers.ImageryLayer")],l)}(u.declared(S.TemporalLayer(g.RefreshableLayer(h.ScaleRangeLayer(f.OperationalLayer(v.PortalLayer(y.ArcGISImageService(m.ArcGISService(l.MultiOriginJSONMixin(d))))))))))});