// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define([],function(){function r(r,n,o,f){for(var i=n,t=n,v=o>>>1,e=r[i-1];v>=t;){t=i<<1,o>t&&f(r[t-1],r[t])<0&&++t;var u=r[t-1];if(f(u,e)<=0)break;r[i-1]=u,i=t}r[i-1]=e}function n(r,n){return n>r?-1:r>n?1:0}return{sort:function(o,f,i,t){void 0===f&&(f=0),void 0===i&&(i=o.length),void 0===t&&(t=n);for(var v=i>>>1;v>f;v--)r(o,v,i,t);var e=f+1;for(v=i-1;v>f;v--){var u=o[f];o[f]=o[v],o[v]=u,r(o,e,v,t)}return o}}});