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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/JSONSupport","../core/accessorSupport/decorators","./support/ColormapInfo","./support/colorRampUtils"],function(r,o,e,t,n,p,a,c,l){return function(r){function o(o){var e=r.call(this)||this;return e.type="raster-colormap",e}e(o,r),n=o,o.createFromColormap=function(r){if(!r)return null;var o=5===r[0].length,e=r.sort(function(r){return r[0]-r[1]}),t=o?e.map(function(r){return c.fromJSON({value:r[0],color:r.slice(1,5),label:String(r[0])})}):e.map(function(r){return c.fromJSON({value:r[0],color:r.slice(1,4).concat([255]),label:String(r[0])})});return new n({colormapInfos:t})},o.createFromColorramp=function(r){var o=l.convertColorRampToColormap(r,256);return n.createFromColormap(o)},o.prototype.clone=function(){return new n({colormapInfos:this.colormapInfos.map(function(r){return r.toJSON()})})},o.prototype.extractColormap=function(){return this.colormapInfos.map(function(r){return[r.value,r.color.r,r.color.g,r.color.b,r.color.a>1?r.color.a:255*r.color.a&255]}).sort(function(r,o){return r[0]-o[0]})};var n;return t([a.property({type:[c],json:{write:!0}})],o.prototype,"colormapInfos",void 0),t([a.enumeration.serializable()({rasterColormap:"raster-colormap"})],o.prototype,"type",void 0),o=n=t([a.subclass("esri.renderers.RasterColormapRenderer")],o)}(a.declared(p.JSONSupport))});