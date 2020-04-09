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

define(["require","exports","../../../../../core/arrayUtils"],(function(t,e,u){Object.defineProperty(e,"__esModule",{value:!0}),e.ShaderOutputTypes=[{output:0,name:"color"},{output:1,name:"depth"},{output:2,name:"normal"},{output:3,name:"depthShadowMap"},{output:4,name:"highlight"},{output:5,name:"draped"},{output:6,name:"occlusion"}],e.getShaderOutputID=function(t,n){return t+"_"+u.find(e.ShaderOutputTypes,(function(t){return t.output===n})).name}}));