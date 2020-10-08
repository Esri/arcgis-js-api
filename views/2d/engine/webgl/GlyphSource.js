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

define(["require","exports","tslib","../../../../request","../../../../core/pbf","../../../../core/promiseUtils"],(function(t,e,r,n,a,i){"use strict";var s=function(){function t(t){for(this._metrics=[],this._bitmaps=[];t.next();)switch(t.tag()){case 1:for(var e=t.getMessage();e.next();)switch(e.tag()){case 3:for(var r=e.getMessage(),n=void 0,a=void 0,i=void 0,s=void 0,o=void 0,c=void 0,g=void 0;r.next();)switch(r.tag()){case 1:n=r.getUInt32();break;case 2:a=r.getBytes();break;case 3:i=r.getUInt32();break;case 4:s=r.getUInt32();break;case 5:o=r.getSInt32();break;case 6:c=r.getSInt32();break;case 7:g=r.getUInt32();break;default:r.skip()}r.release(),n&&(this._metrics[n]={width:i,height:s,left:o,top:c,advance:g},this._bitmaps[n]=a);break;default:e.skip()}e.release();break;default:t.skip()}}return t.prototype.getMetrics=function(t){return this._metrics[t]},t.prototype.getBitmap=function(t){return this._bitmaps[t]},t}(),o=function(){function t(){this._ranges=[]}return t.prototype.getRange=function(t){return this._ranges[t]},t.prototype.addRange=function(t,e){this._ranges[t]=e},t}();return function(){function t(t){this._glyphInfo={},this._baseURL=t}return t.prototype.getRange=function(t,e,o){var c=this._getFontStack(t);if(c.getRange(e))return i.resolve();var g=256*e,f=g+255,p=this._baseURL.replace("{fontstack}",t).replace("{range}",g+"-"+f);return n(p,r.__assign({responseType:"array-buffer"},o)).then((function(t){c.addRange(e,new s(new a(new Uint8Array(t.data),new DataView(t.data))))}))},t.prototype.getGlyph=function(t,e){var r=this._getFontStack(t);if(r){var n=Math.floor(e/256);if(!(n>256)){var a=r.getRange(n);if(a)return{metrics:a.getMetrics(e),bitmap:a.getBitmap(e)}}}},t.prototype._getFontStack=function(t){var e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new o),e},t}()}));