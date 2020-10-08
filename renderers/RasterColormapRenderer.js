// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators","./support/ColormapInfo","./support/colorRampUtils"],(function(r,o,t,e,n,c,a){"use strict";return function(r){function o(o){var t=r.call(this,o)||this;return t.colormapInfos=null,t.type="raster-colormap",t}var e;return t.__extends(o,r),e=o,o.createFromColormap=function(r,o){if(!r)return null;function t(r){return o?o[r]||"":String(r[0])}var n=5===r[0].length,a=r.sort((function(r){return r[0][0]-r[1][0]})),l=n?a.map((function(r){return c.fromJSON({value:r[0],color:r.slice(1,5),label:t(r[0])})})):a.map((function(r){return c.fromJSON({value:r[0],color:r.slice(1,4).concat([255]),label:t(r[0])})}));return new e({colormapInfos:l})},o.createFromColorramp=function(r){var o=a.convertColorRampToColormap(r,256);return e.createFromColormap(o)},o.prototype.clone=function(){return new e({colormapInfos:this.colormapInfos.map((function(r){return r.toJSON()}))})},o.prototype.extractColormap=function(){return this.colormapInfos.map((function(r){return[r.value,r.color.r,r.color.g,r.color.b,r.color.a>1?r.color.a:255*r.color.a&255]})).sort((function(r,o){return r[0]-o[0]}))},t.__decorate([n.property({type:[c],json:{write:!0}})],o.prototype,"colormapInfos",void 0),t.__decorate([n.enumeration({rasterColormap:"raster-colormap"})],o.prototype,"type",void 0),o=e=t.__decorate([n.subclass("esri.renderers.RasterColormapRenderer")],o)}(e.JSONSupport)}));