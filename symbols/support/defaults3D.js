// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../../core/maybe","../FillSymbol3DLayer","../LineSymbol3D","../MeshSymbol3D","../PointSymbol3D","../PolygonSymbol3D","./defaults","./defaultsJSON"],function(e,l,o,r,t,n,i,a,m,u,y){function s(e){if(r.isNone(e))return null;switch(e.type){case"mesh":return b;case"point":case"multipoint":return f;case"polyline":return c;case"polygon":case"extent":return S;default:o.neverReached(e)}return null}Object.defineProperty(l,"__esModule",{value:!0});var f=a.fromSimpleMarkerSymbol(u.defaultPointSymbol2D),c=n.fromSimpleLineSymbol(u.defaultPolylineSymbol2D),S=m.fromSimpleFillSymbol(u.defaultPolygonSymbol2D),b=new i({symbolLayers:[new t({material:{color:y.defaultColor},edges:{type:"solid",size:"1px",color:y.defaultOutlineColor}})]});l.getDefaultSymbol3D=s});