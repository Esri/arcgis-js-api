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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../request"],(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0}),t.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),r=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),o=new Uint8Array(n),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);return new Blob([n],{type:r})},t.requestImage=function(e,t){return n(e,r({responseType:"image"},t)).then((function(e){return e.data}))}}));