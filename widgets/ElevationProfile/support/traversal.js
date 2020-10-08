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

define(["require","exports","tslib","@dojo/framework/shim/Promise"],(function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getIndices=void 0,r.getIndices=function(e,r,t){if(void 0===t&&(t=[]),e>=r)return t;if(t.push(e),r-e<2)return t;var s=r-1;t.push(s);for(var a=function e(r,t){var s,a,u,o,i;return n.__generator(this,(function(n){switch(n.label){case 0:return r>=t?[2]:[4,s=r+Math.floor((t-r)/2)];case 1:n.sent(),a=e(r,s),u=e(s+1,t),n.label=2;case 2:return o=a.next(),i=u.next(),o.done&&i.done?[3,7]:o.done?[3,4]:[4,o.value];case 3:n.sent(),n.label=4;case 4:return i.done?[3,6]:[4,i.value];case 5:n.sent(),n.label=6;case 6:return[3,2];case 7:return[2]}}))}(e+1,s);;){var u=a.next();if(u.done)break;t.push(u.value)}return t}}));