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

define(["require","exports","tslib","../core/global"],(function(e,o,n,l){"use strict";var a,r,i,u;Object.defineProperty(o,"__esModule",{value:!0}),o.beforeLocaleChange=o.onLocaleChange=o.prefersRTL=o.setLocale=o.getLocale=o.getDefaultLocale=void 0;var c=void 0,t=void 0,v=null!==(r=null===(a=l.esriConfig)||void 0===a?void 0:a.locale)&&void 0!==r?r:null===(i=l.dojoConfig)||void 0===i?void 0:i.locale;function d(){var e,o;return null!==(o=null!=v?v:null===(e=l.navigator)||void 0===e?void 0:e.language)&&void 0!==o?o:"en"}function f(){return void 0===t&&(t=d()),t}o.getDefaultLocale=d,o.getLocale=f,o.setLocale=function(e){c=e||void 0,h()};var s={he:!0,ar:!0};o.prefersRTL=function(e){void 0===e&&(e=f());var o=/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(e),n=null==o?void 0:o[1].toLowerCase();return void 0!==n&&(s[n]||!1)};var g=[];o.onLocaleChange=function(e){return g.push(e),{remove:function(){g.splice(g.indexOf(e),1)}}};var L=[];function h(){var e=null!=c?c:d();t!==e&&(t=e,n.__spreadArrays(L).forEach((function(o){o.call(null,e)})),n.__spreadArrays(g).forEach((function(o){o.call(null,e)})))}o.beforeLocaleChange=function(e){return L.push(e),{remove:function(){g.splice(L.indexOf(e),1)}}},null===(u=l.addEventListener)||void 0===u||u.call(l,"languagechange",h)}));