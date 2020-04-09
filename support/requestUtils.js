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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/has","../core/maybe","../core/promiseUtils"],(function(e,r,n,o,t){function i(){try{return new DOMException("Aborted","AbortError")}catch(r){var e=new Error;return e.name="AbortError",e}}Object.defineProperty(r,"__esModule",{value:!0}),r.loadImageAsync=function(e,r,a,c){return void 0===a&&(a=!1),t.create((function(d,s){if(t.isAborted(c))s(i());else{var u=function(){f(),s(new Error("Unable to load "+r))},l=function(){var r=e;f(),d(r)},v=function(){if(e){var r=e;f(),r.src="",s(i())}},f=function(){n("esri-image-decode")||(e.removeEventListener("error",u),e.removeEventListener("load",l)),u=null,l=null,e=null,o.isSome(c)&&c.removeEventListener("abort",v),v=null,a&&URL.revokeObjectURL(r)};o.isSome(c)&&c.addEventListener("abort",v),n("esri-image-decode")?e.decode().then(l,u):(e.addEventListener("error",u),e.addEventListener("load",l))}}))}}));