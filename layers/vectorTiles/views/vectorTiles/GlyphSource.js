// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports","../../request","../../core/pbf","../../core/promiseUtils"],(function(t,e,a,n,r){var i=function(){function t(t){if(this._metrics=[],this._bitmaps=[],t)for(;t.next();)switch(t.tag()){case 1:for(var e=t.getMessage();e.next();)switch(e.tag()){case 3:for(var a=e.getMessage(),n=void 0,r=void 0,i=void 0,s=void 0,o=void 0,c=void 0,g=void 0;a.next();)switch(a.tag()){case 1:n=a.getUInt32();break;case 2:r=a.getBytes();break;case 3:i=a.getUInt32();break;case 4:s=a.getUInt32();break;case 5:o=a.getSInt32();break;case 6:c=a.getSInt32();break;case 7:g=a.getUInt32();break;default:a.skip()}n&&(this._metrics[n]={width:i,height:s,left:o,top:c,advance:g},this._bitmaps[n]=r);break;default:e.skip()}break;default:t.skip()}}return t.prototype.getMetrics=function(t){return this._metrics[t]},t.prototype.getBitmap=function(t){return this._bitmaps[t]},t}(),s=function(){function t(){this._ranges=[]}return t.prototype.getRange=function(t){return this._ranges[t]},t.prototype.addRange=function(t,e){this._ranges[t]=e},t}();return function(){function t(t){this._glyphInfo={},this._baseURL=t}return t.prototype.getRange=function(t,e){var s=this._getFontStack(t);if(s.getRange(e))return r.resolve();var o=256*e,c=o+255,g=this._baseURL.replace("{fontstack}",t).replace("{range}",o+"-"+c);return a(g,{callbackParamName:"callback",responseType:"array-buffer"}).then((function(t){s.addRange(e,new i(new n(new Uint8Array(t.data),new DataView(t.data))))})).catch((function(){s.addRange(e,new i)}))},t.prototype.getGlyph=function(t,e){var a=this._getFontStack(t);if(a){var n=Math.floor(e/256);if(!(n>256)){var r=a.getRange(n);if(r)return{metrics:r.getMetrics(e),bitmap:r.getBitmap(e)}}}},t.prototype._getFontStack=function(t){var e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new s),e},t}()}));