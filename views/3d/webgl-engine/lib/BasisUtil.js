/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../libs/basisu/BasisU","../../../webgl/Texture","../../../webgl/Util"],(function(e,t,n,r,s,i){"use strict";let a=null,o=null;function l(){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(){return n.isNone(o)&&(o=r.getBasisTranscoder(),a=yield o),o}))).apply(this,arguments)}function c(e,t){if(n.isNone(a))return e.byteLength;const r=new a.BasisFile(new Uint8Array(e)),s=h(r)?p(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),s}function g(e,t){if(n.isNone(a))return e.byteLength;const r=new a.KTX2File(new Uint8Array(e)),s=d(r)?p(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),s}function p(e,t,n,r,s){const a=i.getBytesPerElementFormat(t?37496:37492),o=s&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*r*a*o)}function h(e){return e.getNumImages()>=1&&!e.isUASTC()}function d(e){return e.getFaces()>=1&&e.isETC1S()}function m(e,t,n){return y.apply(this,arguments)}function y(){return(y=t._asyncToGenerator((function*(e,t,r){n.isNone(a)&&(a=yield l());const s=new a.BasisFile(new Uint8Array(r));if(!h(s))return null;s.startTranscoding();const i=w(e,t,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),i}))).apply(this,arguments)}function f(e,t,n){return T.apply(this,arguments)}function T(){return(T=t._asyncToGenerator((function*(e,t,r){n.isNone(a)&&(a=yield l());const s=new a.KTX2File(new Uint8Array(r));if(!d(s))return null;s.startTranscoding();const i=w(e,t,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),i}))).apply(this,arguments)}function w(e,t,n,r,i,a,o,l){const{compressedTextureETC:u,compressedTextureS3TC:c}=e.capabilities,[g,p]=u?r?[1,37496]:[0,37492]:c?r?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?n:Math.min(1,n),d=[];for(let s=0;s<h;s++)d.push(new Uint8Array(o(s,g))),l(s,g,d[s]);const m=d.length>1,y=m?9987:9729,f={...t,samplingMode:y,hasMipmap:m,internalFormat:p,width:i,height:a};return new s(e,f,{type:"compressed",levels:d})}e.createTextureBasis=m,e.createTextureKTX2=f,e.estimateMemoryBasis=c,e.estimateMemoryKTX2=g,e.loadBasis=l,Object.defineProperty(e,"__esModule",{value:!0})}));
