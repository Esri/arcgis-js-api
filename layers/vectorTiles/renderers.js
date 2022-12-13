// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./renderers/ClassBreaksRenderer","./renderers/HeatmapRenderer","./renderers/Renderer","./renderers/SimpleRenderer","./renderers/UniqueValueRenderer","./renderers/support/jsonUtils"],(function(e,r,n,d,s,a,i,R){Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=n,r.HeatmapRenderer=d,r.BaseRenderer=s,r.SimpleRenderer=a,r.UniqueValueRenderer=i,r.isRenderer=function(e){return e instanceof r.BaseRenderer},r.fromJSON=R.fromJSON}));