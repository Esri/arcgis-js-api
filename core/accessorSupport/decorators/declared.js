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

define(["require","exports","../../declare"],(function(e,t,r){function o(e){var t=Object.getPrototypeOf(e.prototype),r=e._meta&&e._meta.bases,o=e._meta&&e._meta.parents;if(t&&r&&o&&!(o.length<=1))for(var n=1;n<r.length;n++){var i=r[n],c=i.__accessorMetadata__&&i.__accessorMetadata__.properties,s=t;if(t=Object.getPrototypeOf(t),-1!==o.indexOf(i))for(var f=0,p=Object.getOwnPropertyNames(i.prototype);f<p.length;f++){var _=p[f];if("initialized"!==_&&"constructed"!==_&&"destroyed"!==_&&!(c&&_ in c)){var d=Object.getOwnPropertyDescriptor(i.prototype,_);a(d)&&Object.defineProperty(s,_,d)}}}}function a(e){return e&&!(!e.get&&!e.set)}Object.defineProperty(t,"__esModule",{value:!0}),t.declared=function(e){var t=function(){return this||{}};if(arguments.length>1){for(var a=[],n=0;n<arguments.length;n++)a.push(arguments[n]);o(e=r(a))}return t.__bases__=[e],t}}));