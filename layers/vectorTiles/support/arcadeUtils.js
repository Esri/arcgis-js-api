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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","esri/renderers/arcadeUtils","esri/arcade/Dictionary"],(function(e,n,t,r){Object.defineProperty(n,"__esModule",{value:!0}),n.createSyntaxTree=function(e){return t.createSyntaxTree(e)},n.createFunction=function(e,n){return t.createFunction(e,n)},n.createExecContext=function(e,n){return t.createExecContext(e,n)},n.executeFunction=function(e,n){return t.executeFunction(e,n)},n.extractFieldNames=function(e){return t.extractFieldNames(e)},n.getViewInfo=function(e){if(e&&e.viewingMode&&null!=e.scale&&e.spatialReference)return{view:new r({viewingMode:e.viewingMode,scale:e.scale}),sr:e.spatialReference}}}));