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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function i(e,r){if(null===r)return void e.writeInt32(0);e.writeInt32(r.length);for(var i=0,n=r;i<n.length;i++){n[i].serialize(e)}return e}function n(e,r,i){for(var n=e.readInt32(),t=new Array(n),l=0;l<t.length;l++)t[l]=r.deserialize(e,i);return t}Object.defineProperty(r,"__esModule",{value:!0}),r.serializeList=i,r.deserializeList=n});