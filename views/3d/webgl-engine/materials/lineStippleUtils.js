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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../webgl"],(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.cache=new Map}return e.prototype.dispose=function(){this.cache.forEach((function(e){r.isSome(e.texture)&&(e.texture.dispose(),e.texture=null)})),this.cache.clear()},e.prototype.acquire=function(e){if(r.isNone(e))return null;var t=this.patternId(e),i=this.cache.get(t);if(i)return i.refCount++,i.bind;var o=this.patternToTextureData(e,2),u=o.length/2,a={refCount:1,texture:null,bind:function(e,t){return r.isNone(a.texture)&&(a.texture=new n.Texture(e,{width:o.length,height:1,internalFormat:6406,pixelFormat:6406,dataType:5121,wrapMode:33071},o)),e.bindTexture(a.texture,t),u}};return this.cache.set(t,a),a.bind},e.prototype.release=function(e){if(!r.isNone(e)){var t=this.patternId(e),n=this.cache.get(t);n&&(n.refCount--,0===n.refCount&&(r.isSome(n.texture)&&n.texture.dispose(),this.cache.delete(t)))}},e.prototype.swap=function(e,t){var r=this.acquire(t);return this.release(e),r},e.prototype.bind=function(e,t,n,i,o){var u=r.isSome(i)?i(e,o)*t.pixelRatio:1;n.setUniform1i("stipplePatternTexture",o),n.setUniform1f("stipplePatternPixelSizeInv",1/u)},e.prototype.patternId=function(e){return e.join(",")},e.prototype.patternToTextureData=function(e,t){for(var r=e.reduce((function(e,t){return e+t}))*t,n=new Uint8Array(r),i=!0,o=0,u=0,a=e;u<a.length;u++){for(var p=a[u],c=0;c<p*t;c++)n[o++]=i?255:0;i=!i}return n},e}();t.StippleTextureRepository=i,t.createStipplePattern=function(e){return r.isNone(e)?e:e.slice()},t.createStipplePatternSimple=function(e){return[e,e]}}));