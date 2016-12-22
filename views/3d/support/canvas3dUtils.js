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

define([],function(){var t={dataURItoBlob:function(t){for(var n=atob(t.split(",")[1]),r=t.split(",")[0].split(":")[1].split(";")[0],e=new ArrayBuffer(n.length),a=new Uint8Array(e),i=0;i<n.length;i++)a[i]=n.charCodeAt(i);return new Blob([e],{type:r})}};return t});