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

define(["require","exports","../../request","../../core/pbf","../../core/promiseUtils"],function(t,e,n,r,a){var i=function(){function t(t){if(this._metrics=[],this._bitmaps=[],t)for(;t.next();)switch(t.tag()){case 1:for(var e=t.getMessage();e.next();)switch(e.tag()){case 3:for(var n=e.getMessage(),r=void 0,a=void 0,i=void 0,s=void 0,o=void 0,c=void 0,g=void 0;n.next();)switch(n.tag()){case 1:r=n.getUInt32();break;case 2:a=n.getBytes();break;case 3:i=n.getUInt32();break;case 4:s=n.getUInt32();break;case 5:o=n.getSInt32();break;case 6:c=n.getSInt32();break;case 7:g=n.getUInt32();break;default:n.skip()}r&&(this._metrics[r]={width:i,height:s,left:o,top:c,advance:g},this._bitmaps[r]=a);break;default:e.skip()}break;default:t.skip()}}return t.prototype.getMetrics=function(t){return this._metrics[t]},t.prototype.getBitmap=function(t){return this._bitmaps[t]},t}(),s=function(){function t(){this._ranges=[]}return t.prototype.getRange=function(t){return this._ranges[t]},t.prototype.addRange=function(t,e){this._ranges[t]=e},t}();return function(){function t(t){this._glyphInfo={},this._baseURL=t}return t.prototype.getRange=function(t,e){var s=this._getFontStack(t);if(s.getRange(e))return a.resolve();var o=256*e,c=o+255,g=this._baseURL.replace("{fontstack}",t).replace("{range}",o+"-"+c);return n(g,{responseType:"array-buffer"}).then(function(t){s.addRange(e,new i(new r(new Uint8Array(t.data),new DataView(t.data))))}).catch(function(){s.addRange(e,new i)})},t.prototype.getGlyph=function(t,e){var n=this._getFontStack(t);if(n){var r=Math.floor(e/256);if(!(r>256)){var a=n.getRange(r);if(a)return{metrics:a.getMetrics(e),bitmap:a.getBitmap(e)}}}},t.prototype._getFontStack=function(t){var e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new s),e},t}()});