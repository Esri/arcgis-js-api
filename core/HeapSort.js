// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper"],function(e,r,a){var n;return function(e){function r(e,r,a,n){for(var t=r,o=r,c=a>>>1,i=e[t-1];o<=c;){o=t<<1,o<a&&n(e[o-1],e[o])<0&&++o;var l=e[o-1];if(n(l,i)<=0)break;e[t-1]=l,t=o}e[t-1]=i}function n(e,r){return e<r?-1:e>r?1:0}function t(e,a,t,o){void 0===a&&(a=0),void 0===t&&(t=e.length),void 0===o&&(o=n);for(var c=t>>>1;c>a;c--)r(e,c,t,o);for(var i=a+1,c=t-1;c>a;c--){var l=e[a];e[a]=e[c],e[c]=l,r(e,i,c,o)}}function o(e,t,o,c,i){var l,s,l,u;return a(this,function(a){switch(a.label){case 0:void 0===t&&(t=0),void 0===o&&(o=e.length),void 0===c&&(c=n),l=o>>>1,a.label=1;case 1:return l>t?i&&i()?[4]:[3,3]:[3,5];case 2:a.sent(),a.label=3;case 3:r(e,l,o,c),a.label=4;case 4:return l--,[3,1];case 5:s=t+1,l=o-1,a.label=6;case 6:return l>t?i&&i()?[4]:[3,8]:[3,10];case 7:a.sent(),a.label=8;case 8:u=e[t],e[t]=e[l],e[l]=u,r(e,s,l,c),a.label=9;case 9:return l--,[3,6];case 10:return[2]}})}e.sort=t,e.iterableSort=o}(n||(n={})),n});