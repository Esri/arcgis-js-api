// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../global"],function(e,r,t,o){function n(e,r){void 0===r&&(r={});var n=r.responseType;return n?"json"!==n&&"text"!==n&&"blob"!==n&&"array-buffer"!==n&&(n="text"):n="json",o.invokeStaticMessage("request",{url:e,options:r}).then(function(o){var a,l,i,u=o.data;if(u&&("json"===n||"text"===n||"blob"===n)&&(a=new Blob([u]),("json"===n||"text"===n)&&(s||(s=new FileReaderSync),l=s.readAsText(a),"json"===n&&(i=JSON.parse(l||null),i.error))))throw t.mixin(new Error,i.error);var b;switch(n){case"json":b=i;break;case"text":b=l;break;case"blob":b=a;break;default:b=u}return{data:b,requestOptions:r,ssl:o.ssl,url:e}})}Object.defineProperty(r,"__esModule",{value:!0});var s;r.execute=n});