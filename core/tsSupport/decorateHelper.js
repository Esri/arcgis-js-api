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

define(["../Logger","../deprecate"],(function(e,r){return r.deprecated(e.getLogger("esri.core.tsSupport.decorateHelper"),"helpers from esri.core.tsSupport are no longer required",{replacement:"use helpers from TSLib by enabling the TypeScript compiler importHelpers option",version:"4.16",see:"https://github.com/Microsoft/tslib#readme"}),function(e,r,t,o){var c,p=arguments.length,n=p<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,t,o);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(n=(p<3?c(n):p>3?c(r,t,n):c(r,t))||n);return p>3&&n&&Object.defineProperty(r,t,n),n}}));