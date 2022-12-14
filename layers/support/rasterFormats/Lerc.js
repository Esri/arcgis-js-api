/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getAssetUrl as e}from"../../../assets.js";const t=[{pixelType:"S8",size:1,ctor:Int8Array,range:[-128,128]},{pixelType:"U8",size:1,ctor:Uint8Array,range:[0,255]},{pixelType:"S16",size:2,ctor:Int16Array,range:[-32768,32767]},{pixelType:"U16",size:2,ctor:Uint16Array,range:[0,65536]},{pixelType:"S32",size:4,ctor:Int32Array,range:[-2147483648,2147483647]},{pixelType:"U32",size:4,ctor:Uint32Array,range:[0,4294967296]},{pixelType:"F32",size:4,ctor:Float32Array,range:[-34027999387901484e22,34027999387901484e22]},{pixelType:"F64",size:8,ctor:Float64Array,range:[-17976931348623157e292,17976931348623157e292]}];let n=null,r=!1;function a(){return n||(n=import("../../../chunks/lerc-wasm.js").then((e=>e.l)).then((({default:t})=>t({locateFile:t=>e(`esri/layers/support/rasterFormats/${t}`)}))).then((e=>{u(e),r=!0})),n)}function l(){return r}const i={getBlobInfo:null,decode:null};function o(e){return 16+(e>>3<<3)}function s(e,t,n){n.set(e.slice(t,t+n.length))}function u(e){const{_malloc:n,_free:r,_lerc_getBlobInfo:a,_lerc_getDataRanges:l,_lerc_decode_4D:u,asm:f}=e;let c;const y=Object.values(f).find((t=>t&&"buffer"in t&&t.buffer===e.HEAPU8.buffer)),p=e=>{const t=e.map((e=>o(e))),r=t.reduce(((e,t)=>e+t)),a=n(r);c=new Uint8Array(y.buffer);let l=t[0];t[0]=a;for(let n=1;n<t.length;n++){const e=t[n];t[n]=t[n-1]+l,l=e}return t};i.getBlobInfo=e=>{const t=12,n=3,i=new Uint8Array(4*t),o=new Uint8Array(8*n),[u,f,h]=p([e.length,i.length,o.length]);c.set(e,u),c.set(i,f),c.set(o,h);let g=a(u,e.length,f,h,t,n);if(g)throw r(u),`lerc-getBlobInfo: error code is ${g}`;c=new Uint8Array(y.buffer),s(c,f,i),s(c,h,o);const d=new Uint32Array(i.buffer),b=new Float64Array(o.buffer),[m,A,w,U,x,T,C,V,z,,D]=d,F={version:m,dimCount:w,width:U,height:x,validPixelCount:C,bandCount:T,blobSize:V,maskCount:z,dataType:A,minValue:b[0],maxValue:b[1],maxZerror:b[2],statistics:[],bandCountWithNoData:D};if(D)return F;if(1===w&&1===T)return r(u),F.statistics.push({minValue:b[0],maxValue:b[1]}),F;const I=w*T*8,_=new Uint8Array(I),k=new Uint8Array(I);let B=u,v=0,S=0,O=!1;if(c.byteLength<u+2*I?(r(u),O=!0,[B,v,S]=p([e.length,I,I]),c.set(e,B)):[v,S]=p([I,I]),c.set(_,v),c.set(k,S),g=l(B,e.length,w,T,v,S),g)throw r(B),O||r(v),`lerc-getDataRanges: error code is ${g}`;c=new Uint8Array(y.buffer),s(c,v,_),s(c,S,k);const $=new Float64Array(_.buffer),j=new Float64Array(k.buffer),M=F.statistics;for(let r=0;r<T;r++)if(w>1){const e=$.slice(r*w,(r+1)*w),t=j.slice(r*w,(r+1)*w),n=Math.min.apply(null,e),a=Math.max.apply(null,t);M.push({minValue:n,maxValue:a,dimStats:{minValues:e,maxValues:t}})}else M.push({minValue:$[r],maxValue:j[r]});return r(B),O||r(v),F},i.decode=(e,n)=>{const{maskCount:a,dimCount:l,bandCount:i,width:o,height:f,dataType:h,bandCountWithNoData:g}=n,d=t[h],b=o*f,m=new Uint8Array(b*i),A=b*l*i*d.size,w=new Uint8Array(A),U=new Uint8Array(i),x=new Uint8Array(8*i),[T,C,V,z,D]=p([e.length,m.length,w.length,U.length,x.length]);c.set(e,T),c.set(m,C),c.set(w,V),c.set(U,z),c.set(x,D);const F=u(T,e.length,a,C,l,o,f,i,h,V,z,D);if(F)throw r(T),`lerc-decode: error code is ${F}`;c=new Uint8Array(y.buffer),s(c,V,w),s(c,C,m);let I=null;if(g){s(c,z,U),s(c,D,x),I=[];const e=new Float64Array(x.buffer);for(let t=0;t<U.length;t++)I.push(U[t]?e[t]:null)}return r(T),{data:w,maskData:m,noDataValues:I}}}function f(e,t,n,r,a){if(n<2)return e;const l=new r(t*n);if(a)for(let i=0,o=0;i<t;i++)for(let r=0,a=i;r<n;r++,a+=t)l[a]=e[o++];else for(let i=0,o=0;i<t;i++)for(let r=0,a=i;r<n;r++,a+=t)l[o++]=e[a];return l}function c(e,n={}){const r=n.inputOffset??0,a=e instanceof Uint8Array?e.subarray(r):new Uint8Array(e,r),l=i.getBlobInfo(a),{data:o,maskData:s}=i.decode(a,l),{width:u,height:c,bandCount:y,dimCount:p,dataType:h,maskCount:g,statistics:d}=l,b=t[h],m=new b.ctor(o.buffer),A=[],w=[],U=u*c,x=U*p;for(let t=0;t<y;t++){const e=m.subarray(t*x,(t+1)*x);if(n.returnPixelInterleavedDims)A.push(e);else{const t=f(e,U,p,b.ctor,!0);A.push(t)}w.push(s.subarray(t*x,(t+1)*x))}const T=0===g?null:1===g?w[0]:new Uint8Array(U);if(g>1){T.set(w[0]);for(let e=1;e<w.length;e++){const t=w[e];for(let e=0;e<U;e++)T[e]=T[e]&t[e]}}const{noDataValue:C}=n,V=null!=C&&b.range[0]<=C&&b.range[1]>=C;if(g>0&&V)for(let t=0;t<y;t++){const e=A[t],n=w[t]||T;for(let t=0;t<U;t++)0===n[t]&&(e[t]=C)}const z=g===y&&y>1?w:null;return{width:u,height:c,bandCount:y,pixelType:n.pixelType&&0===l.version?n.pixelType:b.pixelType,dimCount:p,statistics:d,pixels:A,mask:T,bandMasks:z}}function y(e,t={}){const n=e instanceof Uint8Array?e.subarray(t.inputOffset??0):new Uint8Array(e,t.inputOffset??0);return i.getBlobInfo(n)}export{c as decode,y as getBlobInfo,l as isLoaded,a as load};