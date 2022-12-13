// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/config","dojo/i18n"],(function(o,n){return{load:function(i,e,a){var c=function(o,n){for(var i in o)"object"==typeof n[i]?c(o[i],n[i]):void 0===n[i]&&(n[i]=o[i])};o.locale?n.load("esri/nls/en/jsapi",e,(function(i){n.load("esri/nls/"+o.locale+"/jsapi",e,(function(o){c(i,o),a&&a()}))})):a&&a()}}}));