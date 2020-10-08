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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../../core/maybe","../FillSymbol3DLayer","../LineSymbol3D","../MeshSymbol3D","../PointSymbol3D","../PolygonSymbol3D","./defaults","./defaultsJSON"],(function(e,l,o,t,r,n,i,u,a,m,y){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.getDefaultSymbol3D=void 0;var s=u.fromSimpleMarkerSymbol(m.defaultPointSymbol2D),f=n.fromSimpleLineSymbol(m.defaultPolylineSymbol2D),c=a.fromSimpleFillSymbol(m.defaultPolygonSymbol2D),S=new i({symbolLayers:[new r({material:{color:y.defaultColor},edges:{type:"solid",size:"1px",color:y.defaultOutlineColor}})]});l.getDefaultSymbol3D=function(e){if(t.isNone(e))return null;switch(e.type){case"mesh":return S;case"point":case"multipoint":return s;case"polyline":return f;case"polygon":case"extent":return c;default:o.neverReached(e)}return null}}));