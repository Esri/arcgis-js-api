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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/accessorSupport/ensureType","../Geometry","../Extent","../Multipoint","../Point","../Polyline","../Polygon"],function(e,t,n,o,p,y,i,r,l){Object.defineProperty(t,"__esModule",{value:!0}),t.types={base:o,key:"type",typeMap:{extent:p,multipoint:y,point:i,polyline:r,polygon:l}},t.ensureType=n.ensureOneOfType(t.types)});