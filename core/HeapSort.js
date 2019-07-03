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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper"],function(e,r,n){var t;return function(e){function r(e,r,n,t){for(var a=r,o=r,i=n>>>1,c=e[a-1];o<=i;){o=a<<1,o<n&&t(e[o-1],e[o])<0&&++o;var u=e[o-1];if(t(u,c)<=0)break;e[a-1]=u,a=o}e[a-1]=c}function t(e,r){return e<r?-1:e>r?1:0}function a(e,n,a,o){void 0===n&&(n=0),void 0===a&&(a=e.length),void 0===o&&(o=t);for(var i=a>>>1;i>n;i--)r(e,i,a,o);for(var c=n+1,i=a-1;i>n;i--){var u=e[n];e[n]=e[i],e[i]=u,r(e,c,i,o)}}function o(e,a,o,i,c){var u,s,u,l;return n(this,function(n){switch(n.label){case 0:void 0===a&&(a=0),void 0===o&&(o=e.length),void 0===i&&(i=t),u=o>>>1,n.label=1;case 1:return u>a?(r(e,u,o,i),c&&c()?[4]:[3,3]):[3,4];case 2:n.sent(),n.label=3;case 3:return u--,[3,1];case 4:s=a+1,u=o-1,n.label=5;case 5:return u>a?(l=e[a],e[a]=e[u],e[u]=l,r(e,s,u,i),c&&c()?[4]:[3,7]):[3,8];case 6:n.sent(),n.label=7;case 7:return u--,[3,5];case 8:return[2]}})}e.sort=a,e.iterableSort=o}(t||(t={})),t});