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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(i,t){function n(i){return void 0===i&&(i=!0),{isVisibleBit:!i,data:new Uint32Array(0)}}function e(i){return 8*i.BYTES_PER_ELEMENT}Object.defineProperty(t,"__esModule",{value:!0}),t.updateVisibilityWithCount=function(i,t,r,u){if(r>=t)return i;null==i&&(i=n());var a=i.isVisibleBit,l=i.data,s=e(l),f=r/s|0,o=r-s*f,c=(t-1)/s|0,d=l,h=u===a;if(!(r<d.length*s)&&h){var b=f+1,v=Math.ceil(1.5*d.length),V=c+1,M=Math.max(b,v);M=Math.min(M,V),(l=new Uint32Array(M)).set(d)}return f<l.length&&(l[f]=function(i,t,n){return i&~(1<<t)|(n?1:0)<<t}(l[f],o,h)),i.data=l,i},t.getVisibility=function(i,t){if(null==i)return!0;var n=i.isVisibleBit,r=i.data,u=e(r);return t<r.length*u?function(i,t,n,e){var r=n/e|0,u=n-r*e;return function(i,t){return 0!=(i&1<<t)}(t[r],u)===i}(n,r,t,u):!i.isVisibleBit},t.defaultVisibilities=n;for(var r=[],u=0;u<65;u++)r.push(Math.pow(2,u)-1)}));