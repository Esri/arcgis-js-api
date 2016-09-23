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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/_base/lang","../../core/accessorSupport/decorators","../../core/JSONSupport","../../core/kebabDictionary","../../core/lang","../../geometry/SpatialReference","../../geometry/Point","./LOD"],function(e,t,o,r,i,s,n,p,a,l,c,u){var f=p({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc"}),d=function(e){function t(t){e.call(this),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}return o(t,e),Object.defineProperty(t.prototype,"lods",{set:function(e){var t=0,o=0,r=[];e&&(t=-(1/0),o=1/0,e.forEach(function(e){r.push(e.scale),t=e.scale>t?e.scale:t,o=e.scale<o?e.scale:o},this)),this._set("scales",r),this._set("minScale",t),this._set("maxScale",o),this._set("lods",e)},enumerable:!0,configurable:!0}),t.prototype.zoomToScale=function(e){var t=this.scales;if(0>=e)return t[0];if(e>=t.length)return t[t.length-1];var o=Math.round(e-.5),r=Math.round(e);return t[r]+(r-e)*(t[o]-t[r])},t.prototype.scaleToZoom=function(e){for(var t=this.scales,o=t.length-1,r=0;o>r;r++){var i=t[r],s=t[r+1];if(e>=i)return r;if(s===e)return r+1;if(i>e&&e>s)return r+1-(e-s)/(i-s)}return r},t.prototype.snapScale=function(e,t){void 0===t&&(t=.95);var o=this.scaleToZoom(e),r=o%Math.floor(o);return r>=t?this.zoomToScale(Math.ceil(o)):this.zoomToScale(Math.floor(o))},t.prototype.clone=function(){return t.fromJSON(this.toJSON())},t.prototype.toJSON=function(){return a.fixJson({rows:this.size[0],cols:this.size[1],dpi:this.dpi,format:f.toJSON(this.format),compressionQuality:this.compressionQuality,origin:this.origin&&this.origin.toJSON(),spatialReference:this.spatialReference&&this.spatialReference.toJSON(),lods:this.lods&&this.lods.map(function(e){return e.toJSON()})})},r([s.property()],t.prototype,"compressionQuality",void 0),r([s.property()],t.prototype,"dpi",void 0),r([s.property({json:{read:f.fromJSON}})],t.prototype,"format",void 0),r([s.property({type:c,json:{read:function(e,t){return c.fromJSON(i.mixin({spatialReference:t.spatialReference},e))}}})],t.prototype,"origin",void 0),r([s.property({type:[u],value:null})],t.prototype,"lods",null),r([s.property({readOnly:!0})],t.prototype,"minScale",void 0),r([s.property({readOnly:!0})],t.prototype,"maxScale",void 0),r([s.property({readOnly:!0})],t.prototype,"scales",void 0),r([s.property({cast:function(e){return Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]},json:{readFrom:["rows","cols"],read:function(e,t){return[t.cols,t.rows]}}})],t.prototype,"size",void 0),r([s.property({type:l})],t.prototype,"spatialReference",void 0),t=r([s.subclass("esri.layers.support.TileInfo")],t)}(s.declared(n));return d});