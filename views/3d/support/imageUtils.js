// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../../../core/urlUtils","../../../request"],function(e,r,t,n,o){function a(e){for(var r=atob(e.split(",")[1]),t=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(r.length),o=new Uint8Array(n),a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return new Blob([n],{type:t})}function i(e){var r=!1,n=new Image,o=new t(function(){r=!0,n.src=""}),a=function(){r||o.resolve(n)},i=function(){r||o.reject()};return n.onload=a,n.onerror=i,n.onabort=i,n.src=e,o.promise}function u(e){return n.isDataProtocol(e)?i(e):o(e,{responseType:"image",allowImageDataAccess:!0}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.dataURItoBlob=a,r.dataUriToImage=i,r.requestImage=u});