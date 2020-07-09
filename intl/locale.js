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

define(["require","exports","tslib","../core/global"],(function(e,n,o,l){var r,a,i,u;Object.defineProperty(n,"__esModule",{value:!0});var c=void 0,t=void 0,v=null!==(a=null===(r=l.esriConfig)||void 0===r?void 0:r.locale)&&void 0!==a?a:null===(i=l.dojoConfig)||void 0===i?void 0:i.locale;function d(){var e,n;return null!==(n=null!=v?v:null===(e=l.navigator)||void 0===e?void 0:e.language)&&void 0!==n?n:"en"}function f(){return void 0===t&&(t=d()),t}n.getDefaultLocale=d,n.getLocale=f,n.setLocale=function(e){c=e||void 0,h()};var s={he:!0,ar:!0};n.prefersRTL=function(e){void 0===e&&(e=f());var n=/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(e),o=null==n?void 0:n[1].toLowerCase();return s[o]||!1};var g=[];n.onLocaleChange=function(e){return g.push(e),{remove:function(){g.splice(g.indexOf(e),1)}}};var p=[];function h(){var e=null!=c?c:d();t!==e&&(t=e,o.__spreadArrays(p).forEach((function(n){n.call(null,e)})),o.__spreadArrays(g).forEach((function(n){n.call(null,e)})))}n.beforeLocaleChange=function(e){return p.push(e),{remove:function(){g.splice(p.indexOf(e),1)}}},null===(u=l.addEventListener)||void 0===u||u.call(l,"languagechange",h)}));