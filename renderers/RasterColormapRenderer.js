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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators","./support/ColormapInfo","./support/colorRampUtils"],(function(o,r,t,e,n,a,c){return function(o){function r(r){var t=o.call(this,r)||this;return t.colormapInfos=null,t.type="raster-colormap",t}var e;return t.__extends(r,o),e=r,r.createFromColormap=function(o,r){if(!o)return null;function t(o){return r?r[o]||"":String(o[0])}var n=5===o[0].length,c=o.sort((function(o){return o[0][0]-o[1][0]})),l=n?c.map((function(o){return a.fromJSON({value:o[0],color:o.slice(1,5),label:t(o[0])})})):c.map((function(o){return a.fromJSON({value:o[0],color:o.slice(1,4).concat([255]),label:t(o[0])})}));return new e({colormapInfos:l})},r.createFromColorramp=function(o){var r=c.convertColorRampToColormap(o,256);return e.createFromColormap(r)},r.prototype.clone=function(){return new e({colormapInfos:this.colormapInfos.map((function(o){return o.toJSON()}))})},r.prototype.extractColormap=function(){return this.colormapInfos.map((function(o){return[o.value,o.color.r,o.color.g,o.color.b,o.color.a>1?o.color.a:255*o.color.a&255]})).sort((function(o,r){return o[0]-r[0]}))},t.__decorate([n.property({type:[a],json:{write:!0}})],r.prototype,"colormapInfos",void 0),t.__decorate([n.enumeration({rasterColormap:"raster-colormap"})],r.prototype,"type",void 0),r=e=t.__decorate([n.subclass("esri.renderers.RasterColormapRenderer")],r)}(e.JSONSupport)}));