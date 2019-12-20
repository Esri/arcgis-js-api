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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","./symbols/ExtrudeSymbol3DLayer","./symbols/FillSymbol","./symbols/FillSymbol3DLayer","./symbols/Font","./symbols/IconSymbol3DLayer","./symbols/LabelSymbol3D","./symbols/LineSymbol3D","./symbols/LineSymbol3DLayer","./symbols/MarkerSymbol","./symbols/MeshSymbol3D","./symbols/ObjectSymbol3DLayer","./symbols/PathSymbol3DLayer","./symbols/PictureFillSymbol","./symbols/PictureMarkerSymbol","./symbols/PointSymbol3D","./symbols/PolygonSymbol3D","./symbols/SimpleFillSymbol","./symbols/SimpleLineSymbol","./symbols/SimpleMarkerSymbol","./symbols/Symbol","./symbols/Symbol3D","./symbols/Symbol3DLayer","./symbols/TextSymbol","./symbols/TextSymbol3DLayer","./symbols/WebStyleSymbol","./symbols/support/jsonUtils"],function(l,e,o,y,m,b,s,r,S,i,a,t,n,D,c,u,L,p,f,d,P,F,M,k,x,h,B,O){function j(l){return l instanceof e.BaseSymbol}function T(l){if(!l)return!1;switch(l.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":return!0;default:return!1}}function g(l){if(!l)return!1;switch(l.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return!0;default:return!1}}Object.defineProperty(e,"__esModule",{value:!0}),e.ExtrudeSymbol3DLayer=o,e.BaseFillSymbol=y,e.FillSymbol3DLayer=m,e.Font=b,e.IconSymbol3DLayer=s,e.LabelSymbol3D=r,e.LineSymbol3D=S,e.LineSymbol3DLayer=i,e.BaseMarkerSymbol=a,e.MeshSymbol3D=t,e.ObjectSymbol3DLayer=n,e.PathSymbol3DLayer=D,e.PictureFillSymbol=c,e.PictureMarkerSymbol=u,e.PointSymbol3D=L,e.PolygonSymbol3D=p,e.SimpleFillSymbol=f,e.SimpleLineSymbol=d,e.SimpleMarkerSymbol=P,e.BaseSymbol=F,e.BaseSymbol3D=M,e.BaseSymbol3DLayer=k,e.TextSymbol=x,e.TextSymbol3DLayer=h,e.WebStyleSymbol=B,e.fromJSON=O.fromJSON,e.isSymbol=j,e.isSymbol2D=T,e.isSymbol3D=g});