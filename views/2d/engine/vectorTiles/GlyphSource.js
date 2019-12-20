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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../request","../../../../core/has","../../../../core/pbf","../../../../core/promiseUtils"],function(e,t,n,r,a,i){var s=function(){function e(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:for(var t=e.getMessage();t.next();)switch(t.tag()){case 3:for(var n=t.getMessage(),r=void 0,a=void 0,i=void 0,s=void 0,o=void 0,c=void 0,g=void 0;n.next();)switch(n.tag()){case 1:r=n.getUInt32();break;case 2:a=n.getBytes();break;case 3:i=n.getUInt32();break;case 4:s=n.getUInt32();break;case 5:o=n.getSInt32();break;case 6:c=n.getSInt32();break;case 7:g=n.getUInt32();break;default:n.skip()}n.release(),r&&(this._metrics[r]={width:i,height:s,left:o,top:c,advance:g},this._bitmaps[r]=a);break;default:t.skip()}t.release();break;default:e.skip()}}return e.prototype.getMetrics=function(e){return this._metrics[e]},e.prototype.getBitmap=function(e){return this._bitmaps[e]},e}(),o=function(){function e(){this._ranges=[]}return e.prototype.getRange=function(e){return this._ranges[e]},e.prototype.addRange=function(e,t){this._ranges[e]=t},e}();return function(){function e(e){this._glyphInfo={},this._baseURL=e}return e.prototype.getRange=function(e,t){var o=this._getFontStack(e);if(r("stable-symbol-rendering")&&t>0)return o.addRange(t,new s),i.resolve();if(o.getRange(t))return i.resolve();var c=256*t,g=c+255,f=this._baseURL.replace("{fontstack}",e).replace("{range}",c+"-"+g);return n(f,{responseType:"array-buffer"}).then(function(e){o.addRange(t,new s(new a(new Uint8Array(e.data),new DataView(e.data))))}).catch(function(){o.addRange(t,new s)})},e.prototype.getGlyph=function(e,t){var n=this._getFontStack(e);if(n){var r=Math.floor(t/256);if(!(r>256)){var a=n.getRange(r);if(a)return{metrics:a.getMetrics(t),bitmap:a.getBitmap(t)}}}},e.prototype._getFontStack=function(e){var t=this._glyphInfo[e];return t||(t=this._glyphInfo[e]=new o),t},e}()});