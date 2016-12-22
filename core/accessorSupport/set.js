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

define(["require","exports","./get"],function(e,t,r){function f(e,t,i){if(e&&t)if("object"==typeof t)for(var n=0,o=Object.getOwnPropertyNames(t);n<o.length;n++){var l=o[n];f(e,l,t[l])}else{if("_"===t[0])return;if(-1!==t.indexOf(".")){var u=t.split("."),l=u.splice(u.length-1,1)[0];return void f(r["default"](e,u),l,i)}e[t]=i}}t.set=f,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=f});