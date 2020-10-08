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

define(["require","exports","tslib"],(function(e,r,t){"use strict";var n;return function(e){function r(e,r,t,n){for(var a=r,i=r,o=t>>>1,c=e[a-1];i<=o;){(i=a<<1)<t&&n(e[i-1],e[i])<0&&++i;var s=e[i-1];if(n(s,c)<=0)break;e[a-1]=s,a=i}e[a-1]=c}function n(e,r){return e<r?-1:e>r?1:0}e.sort=function(e,t,a,i){void 0===t&&(t=0),void 0===a&&(a=e.length),void 0===i&&(i=n);for(var o=a>>>1;o>t;o--)r(e,o,a,i);var c=t+1;for(o=a-1;o>t;o--){var s=e[t];e[t]=e[o],e[o]=s,r(e,c,o,i)}},e.iterableSort=function(e,a,i,o){var c,s,u;return t.__generator(this,(function(t){switch(t.label){case 0:void 0===a&&(a=0),void 0===i&&(i=e.length),void 0===o&&(o=n),s=i>>>1,t.label=1;case 1:return s>a?(r(e,s,i,o),[4]):[3,4];case 2:t.sent(),t.label=3;case 3:return s--,[3,1];case 4:c=a+1,s=i-1,t.label=5;case 5:return s>a?(u=e[a],e[a]=e[s],e[s]=u,r(e,c,s,o),[4]):[3,8];case 6:t.sent(),t.label=7;case 7:return s--,[3,5];case 8:return[2]}}))}}(n||(n={})),n}));