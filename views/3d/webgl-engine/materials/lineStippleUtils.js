/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../../../core/maybe","../../../../chunks/builtins","../../../webgl/checkWebGLError","../../../webgl/Texture","../../../webgl/FramebufferObject"],(function(e,t,r,n,i,u,o){"use strict";let c=function(){function e(){this.cache=new Map}var t=e.prototype;return t.dispose=function(){this.cache.forEach((e=>{r.isSome(e.texture)&&(e.texture.dispose(),e.texture=null)})),this.cache.clear()},t.acquire=function(e){if(r.isNone(e))return null;const t=this.patternId(e),n=this.cache.get(t);if(n)return n.refCount++,n.bind;const i=2,o=this.patternToTextureData(e,2),c=o.length/i,s={refCount:1,texture:null,bind:(e,t)=>(r.isNone(s.texture)&&(s.texture=new u(e,{width:o.length,height:1,internalFormat:6406,pixelFormat:6406,dataType:5121,wrapMode:33071},o)),e.bindTexture(s.texture,t),c)};return this.cache.set(t,s),s.bind},t.release=function(e){if(r.isNone(e))return;const t=this.patternId(e),n=this.cache.get(t);n&&(n.refCount--,0===n.refCount&&(r.isSome(n.texture)&&n.texture.dispose(),this.cache.delete(t)))},t.swap=function(e,t){const r=this.acquire(t);return this.release(e),r},t.patternId=function(e){return e.join(",")},t.patternToTextureData=function(e,t){const r=e.reduce(((e,t)=>e+t))*t,n=new Uint8Array(r);let i=!0,u=0;for(const o of e){for(let e=0;e<o*t;e++)n[u++]=i?255:0;i=!i}return n},e}();function s(e){return r.isNone(e)?e:e.slice()}function a(e){return[e,e]}e.StippleTextureRepository=c,e.createStipplePattern=s,e.createStipplePatternSimple=a,Object.defineProperty(e,"__esModule",{value:!0})}));
