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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./core/accessorSupport/ensureType","./symbols/CIMSymbol","./symbols/ExtrudeSymbol3DLayer","./symbols/FillSymbol","./symbols/FillSymbol3DLayer","./symbols/Font","./symbols/IconSymbol3DLayer","./symbols/LabelSymbol3D","./symbols/LineSymbol3D","./symbols/LineSymbol3DLayer","./symbols/MarkerSymbol","./symbols/MeshSymbol3D","./symbols/ObjectSymbol3DLayer","./symbols/PathSymbol3DLayer","./symbols/PictureFillSymbol","./symbols/PictureMarkerSymbol","./symbols/PointSymbol3D","./symbols/PolygonSymbol3D","./symbols/SimpleFillSymbol","./symbols/SimpleLineSymbol","./symbols/SimpleMarkerSymbol","./symbols/Symbol","./symbols/Symbol3D","./symbols/Symbol3DLayer","./symbols/TextSymbol","./symbols/TextSymbol3DLayer","./symbols/WaterSymbol3DLayer","./symbols/WebStyleSymbol","./symbols/callouts/LineCallout3D","./symbols/callouts/LineCallout3DBorder","./symbols/support/Symbol3DVerticalOffset","./symbols/support/jsonUtils"],function(l,e,y,o,m,b,s,S,i,t,r,a,n,p,D,c,u,L,d,M,f,P,k,T,h,x,B,F,g,O,C,W,w,I){function j(l){return l instanceof e.BaseSymbol}function V(l){if(!l)return!1;switch(l.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return!0;default:return!1}}function E(l){if(!l)return!1;switch(l.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return!0;default:return!1}}Object.defineProperty(e,"__esModule",{value:!0}),e.CIMSymbol=o,e.ExtrudeSymbol3DLayer=m,e.BaseFillSymbol=b,e.FillSymbol3DLayer=s,e.Font=S,e.IconSymbol3DLayer=i,e.LabelSymbol3D=t,e.LineSymbol3D=r,e.LineSymbol3DLayer=a,e.BaseMarkerSymbol=n,e.MeshSymbol3D=p,e.ObjectSymbol3DLayer=D,e.PathSymbol3DLayer=c,e.PictureFillSymbol=u,e.PictureMarkerSymbol=L,e.PointSymbol3D=d,e.PolygonSymbol3D=M,e.SimpleFillSymbol=f,e.SimpleLineSymbol=P,e.SimpleMarkerSymbol=k,e.BaseSymbol=T,e.BaseSymbol3D=h,e.BaseSymbol3DLayer=x,e.TextSymbol=B,e.TextSymbol3DLayer=F,e.WaterSymbol3DLayer=g,e.WebStyleSymbol=O,e.LineCallout3D=C,e.LineCallout3DBorder=W,e.Symbol3DVerticalOffset=w.Symbol3DVerticalOffset,e.fromJSON=I.fromJSON,e.isSymbol=j,e.isSymbol2D=V,e.isSymbol3D=E,e.symbolTypes={base:e.BaseSymbol,key:"type",typeMap:{"simple-fill":e.SimpleFillSymbol,"picture-fill":e.PictureFillSymbol,"picture-marker":e.PictureMarkerSymbol,"simple-line":e.SimpleLineSymbol,"simple-marker":e.SimpleMarkerSymbol,text:e.TextSymbol,"label-3d":e.LabelSymbol3D,"line-3d":e.LineSymbol3D,"mesh-3d":e.MeshSymbol3D,"point-3d":e.PointSymbol3D,"polygon-3d":e.PolygonSymbol3D,"web-style":e.WebStyleSymbol,cim:e.CIMSymbol}},e.symbolTypesRenderer={base:e.BaseSymbol,key:"type",typeMap:{"simple-fill":e.SimpleFillSymbol,"picture-fill":e.PictureFillSymbol,"picture-marker":e.PictureMarkerSymbol,"simple-line":e.SimpleLineSymbol,"simple-marker":e.SimpleMarkerSymbol,text:e.TextSymbol,"line-3d":e.LineSymbol3D,"mesh-3d":e.MeshSymbol3D,"point-3d":e.PointSymbol3D,"polygon-3d":e.PolygonSymbol3D,"web-style":e.WebStyleSymbol,cim:e.CIMSymbol}},e.symbolTypesLabel={base:e.BaseSymbol,key:"type",typeMap:{text:e.TextSymbol,"label-3d":e.LabelSymbol3D}},e.symbolTypes3D={base:e.BaseSymbol,key:"type",typeMap:{"label-3d":e.LabelSymbol3D,"line-3d":e.LineSymbol3D,"mesh-3d":e.MeshSymbol3D,"point-3d":e.PointSymbol3D,"polygon-3d":e.PolygonSymbol3D,"web-style":e.WebStyleSymbol}},e.symbolTypesRenderer3D={base:e.BaseSymbol,key:"type",typeMap:{"line-3d":e.LineSymbol3D,"mesh-3d":e.MeshSymbol3D,"point-3d":e.PointSymbol3D,"polygon-3d":e.PolygonSymbol3D,"web-style":e.WebStyleSymbol}},e.symbolTypesLabel3D={base:e.BaseSymbol,key:"type",typeMap:{"label-3d":e.LabelSymbol3D}},e.ensureType=y.ensureOneOfType(e.symbolTypes)});