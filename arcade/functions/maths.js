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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["require","exports","../languageUtils"],function(n,t,r){function e(n,t,r){return"undefined"==typeof r||0===+r?Math[n](t):(t=+t,r=+r,isNaN(t)||"number"!=typeof r||r%1!==0?0/0:(t=t.toString().split("e"),t=Math[n](+(t[0]+"e"+(t[1]?+t[1]-r:-r))),t=t.toString().split("e"),+(t[0]+"e"+(t[1]?+t[1]+r:r))))}function u(n,t){n.number=function(n,e){return t(n,e,function(n,t,e){r.pcCheck(e,1,1);var u=Number(e[0]);return u})},n.abs=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.abs(r.toNumber(e[0]))})},n.acos=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.acos(r.toNumber(e[0]))})},n.asin=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.asin(r.toNumber(e[0]))})},n.atan=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.atan(r.toNumber(e[0]))})},n.atan2=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,2,2),Math.atan2(r.toNumber(e[0]),r.toNumber(e[1]))})},n.ceil=function(n,u){return t(n,u,function(n,t,u){if(r.pcCheck(u,1,2),2===u.length){var c=r.toNumber(u[1]);return isNaN(c)&&(c=0),e("ceil",r.toNumber(u[0]),-1*c)}return Math.ceil(r.toNumber(u[0]))})},n.round=function(n,u){return t(n,u,function(n,t,u){if(r.pcCheck(u,1,2),2===u.length){var c=r.toNumber(u[1]);return isNaN(c)&&(c=0),e("round",r.toNumber(u[0]),-1*c)}return Math.round(r.toNumber(u[0]))})},n.floor=function(n,u){return t(n,u,function(n,t,u){if(r.pcCheck(u,1,2),2===u.length){var c=r.toNumber(u[1]);return isNaN(c)&&(c=0),e("floor",r.toNumber(u[0]),-1*c)}return Math.floor(r.toNumber(u[0]))})},n.cos=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.cos(r.toNumber(e[0]))})},n.isnan=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),"number"==typeof e[0]&&isNaN(e[0])})},n.exp=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.exp(r.toNumber(e[0]))})},n.log=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.log(r.toNumber(e[0]))})},n.pow=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,2,2),Math.pow(r.toNumber(e[0]),r.toNumber(e[1]))})},n.random=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,0,0),Math.random()})},n.sin=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.sin(r.toNumber(e[0]))})},n.sqrt=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.sqrt(r.toNumber(e[0]))})},n.tan=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.tan(r.toNumber(e[0]))})},n.defaultvalue=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,2,2),null===e[0]?e[1]:""===e[0]?e[1]:void 0===e[0]?e[1]:e[0]})},n.isempty=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),null===e[0]?!0:""===e[0]?!0:void 0===e[0]?!0:!1})},n["boolean"]=function(n,e){return t(n,e,function(n,t,e){r.pcCheck(e,1,1);var u=e[0];switch(r.isString(u)&&(u=u.toLowerCase()),u){case!0:case"true":case 1:case"1":case"on":case"yes":return!0;default:return!1}})}}t.registerFunctions=u});