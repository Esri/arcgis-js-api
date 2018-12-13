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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(n,e){function r(n){var e=/[:;]/,r=[],i=!1;if(n&&(n.forEach(function(n,t){r.push([t,n]),!i&&e.test(n)&&(i=!0)}),r.length>0)){var t=void 0;if(i){var a={};r.forEach(function(n){a[n[0]]=n[1]}),t=JSON.stringify(a)}else{var f=[];r.forEach(function(n){f.push(n[0]+":"+n[1])}),t=f.join(";")}return t}return null}function i(n){if(n){var e=[];return n.forEach(function(n,r){e.push('"'+r+'":'+JSON.stringify(n))}),e.length?"{"+e.join(",")+"}":void 0}}function t(n,e){var r=[];if(n>0&&e)for(var i=0;i<e.length;i++)!function(i){if(e[i].parentLayerId>=0&&-1===r.indexOf(e[i].parentLayerId)&&e.some(function(n){return n.id===e[i].parentLayerId}))return"continue";if(e[i].id>=0){var t=!0,a=e[i].maxScale,f=e[i].minScale;(a>0||f>0)&&(a>0&&f>0?t=a<=n&&n<=f:a>0?t=a<=n:f>0&&(t=n<=f)),t&&r.push(e[i].id)}}(i);return r}Object.defineProperty(e,"__esModule",{value:!0}),e.serializeLayerDefinitions=r,e.serializeTimeOptions=i,e.getLayersForScale=t});