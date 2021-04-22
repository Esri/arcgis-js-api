/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Logger","../../../../core/mathUtils","../../../webgl/Texture"],(function(e,t,r,n){"use strict";const o=t.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),a=542327876,i=131072,s=4;function u(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function c(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const l=u("DXT1"),d=u("DXT3"),h=u("DXT5"),m=31,g=0,p=1,f=2,w=3,D=4,x=7,C=20,b=21;function T(e,t,r,o){const{textureData:a,internalFormat:i,width:s,height:u}=v(r,o);t.samplingMode=a.levels.length>1?9987:9729,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=s,t.height=u;const c=new n(e,t,a);return e.bindTexture(c,0),c}function v(e,t){const n=new Int32Array(e,0,m);if(n[g]!==a)return o.error("Invalid magic number in DDS header"),null;if(!(n[C]&s))return o.error("Unsupported format, must contain a FourCC code"),null;const u=n[b];let T,v;switch(u){case l:T=8,v=33776;break;case d:T=16,v=33778;break;case h:T=16,v=33779;break;default:return o.error("Unsupported FourCC code:",c(u)),null}let A=1,M=n[D],F=n[w];0==(3&M)&&0==(3&F)||(o.warn("Rounding up compressed texture size to nearest multiple of 4."),M=M+3&-4,F=F+3&-4);const S=M,U=F;let y,k;n[f]&i&&!1!==t&&(A=Math.max(1,n[x])),1===A||r.isPowerOfTwo(M)&&r.isPowerOfTwo(F)||(o.warn("Ignoring mipmaps of non power of two sized compressed texture."),A=1);let I=n[p]+4;const O=[];for(let r=0;r<A;++r)k=(M+3>>2)*(F+3>>2)*T,y=new Uint8Array(e,I,k),O.push(y),I+=k,M=Math.max(1,M>>1),F=Math.max(1,F>>1);return{textureData:{type:"compressed",levels:O},internalFormat:v,width:S,height:U}}e.createDDSTexture=T,e.createDDSTextureData=v,Object.defineProperty(e,"__esModule",{value:!0})}));
