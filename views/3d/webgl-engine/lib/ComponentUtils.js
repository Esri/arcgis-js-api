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

define(["require","exports"],(function(i,t){"use strict";function e(i){return void 0===i&&(i=!0),{isVisibleBit:!i,data:new Uint32Array(0)}}function n(i){return 8*i.BYTES_PER_ELEMENT}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultVisibilities=t.getVisibility=t.updateVisibilityWithCount=void 0,t.updateVisibilityWithCount=function(i,t,r,u){if(r>=t)return i;null==i&&(i=e());var a=i.isVisibleBit,l=i.data,s=n(l),o=r/s|0,f=r-s*o,d=(t-1)/s|0,b=l,c=u===a;if(!(r<b.length*s)&&c){var h=o+1,V=Math.ceil(1.5*b.length),v=d+1,y=Math.max(h,V);y=Math.min(y,v),(l=new Uint32Array(y)).set(b)}return o<l.length&&(l[o]=function(i,t,e){return i&~(1<<t)|(e?1:0)<<t}(l[o],f,c)),i.data=l,i},t.getVisibility=function(i,t){if(null==i)return!0;var e=i.isVisibleBit,r=i.data,u=n(r);return t<r.length*u?function(i,t,e,n){var r=e/n|0,u=e-r*n;return function(i,t){return 0!=(i&1<<t)}(t[r],u)===i}(e,r,t,u):!i.isVisibleBit},t.defaultVisibilities=e;for(var r=[],u=0;u<65;u++)r.push(Math.pow(2,u)-1)}));