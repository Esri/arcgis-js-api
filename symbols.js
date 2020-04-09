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

define(["require","exports","./core/accessorSupport/ensureType","./symbols/CIMSymbol","./symbols/ExtrudeSymbol3DLayer","./symbols/FillSymbol","./symbols/FillSymbol3DLayer","./symbols/Font","./symbols/IconSymbol3DLayer","./symbols/LabelSymbol3D","./symbols/LineSymbol3D","./symbols/LineSymbol3DLayer","./symbols/MarkerSymbol","./symbols/MeshSymbol3D","./symbols/ObjectSymbol3DLayer","./symbols/PathSymbol3DLayer","./symbols/PictureFillSymbol","./symbols/PictureMarkerSymbol","./symbols/PointSymbol3D","./symbols/PolygonSymbol3D","./symbols/SimpleFillSymbol","./symbols/SimpleLineSymbol","./symbols/SimpleMarkerSymbol","./symbols/Symbol","./symbols/Symbol3D","./symbols/Symbol3DLayer","./symbols/TextSymbol","./symbols/TextSymbol3DLayer","./symbols/WaterSymbol3DLayer","./symbols/WebStyleSymbol","./symbols/callouts/LineCallout3D","./symbols/callouts/LineCallout3DBorder","./symbols/support/Symbol3DVerticalOffset","./symbols/support/jsonUtils"],(function(e,l,y,o,s,m,b,r,t,a,i,p,S,n,c,D,u,d,L,f,k,M,T,h,x,P,F,O,g,B,w,C,j,I){Object.defineProperty(l,"__esModule",{value:!0}),l.CIMSymbol=o,l.ExtrudeSymbol3DLayer=s,l.BaseFillSymbol=m,l.FillSymbol3DLayer=b,l.Font=r,l.IconSymbol3DLayer=t,l.LabelSymbol3D=a,l.LineSymbol3D=i,l.LineSymbol3DLayer=p,l.BaseMarkerSymbol=S,l.MeshSymbol3D=n,l.ObjectSymbol3DLayer=c,l.PathSymbol3DLayer=D,l.PictureFillSymbol=u,l.PictureMarkerSymbol=d,l.PointSymbol3D=L,l.PolygonSymbol3D=f,l.SimpleFillSymbol=k,l.SimpleLineSymbol=M,l.SimpleMarkerSymbol=T,l.BaseSymbol=h,l.BaseSymbol3D=x,l.BaseSymbol3DLayer=P,l.TextSymbol=F,l.TextSymbol3DLayer=O,l.WaterSymbol3DLayer=g,l.WebStyleSymbol=B,l.LineCallout3D=w,l.LineCallout3DBorder=C,l.Symbol3DVerticalOffset=j.Symbol3DVerticalOffset,l.fromJSON=I.fromJSON,l.isSymbol=function(e){return e instanceof h},l.isSymbol2D=function(e){if(!e)return!1;switch(e.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return!0;default:return!1}},l.isSymbol3D=function(e){if(!e)return!1;switch(e.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return!0;default:return!1}},l.symbolTypes={base:h,key:"type",typeMap:{"simple-fill":k,"picture-fill":u,"picture-marker":d,"simple-line":M,"simple-marker":T,text:F,"label-3d":a,"line-3d":i,"mesh-3d":n,"point-3d":L,"polygon-3d":f,"web-style":B,cim:o}},l.symbolTypesRenderer={base:h,key:"type",typeMap:{"simple-fill":k,"picture-fill":u,"picture-marker":d,"simple-line":M,"simple-marker":T,text:F,"line-3d":i,"mesh-3d":n,"point-3d":L,"polygon-3d":f,"web-style":B,cim:o}},l.symbolTypesLabel={base:h,key:"type",typeMap:{text:F,"label-3d":a}},l.symbolTypes3D={base:h,key:"type",typeMap:{"label-3d":a,"line-3d":i,"mesh-3d":n,"point-3d":L,"polygon-3d":f,"web-style":B}},l.symbolTypesRenderer3D={base:h,key:"type",typeMap:{"line-3d":i,"mesh-3d":n,"point-3d":L,"polygon-3d":f,"web-style":B}},l.symbolTypesLabel3D={base:h,key:"type",typeMap:{"label-3d":a}},l.ensureType=y.ensureOneOfType(l.symbolTypes)}));