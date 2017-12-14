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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/accessorSupport/ensureType","../Symbol","../PictureFillSymbol","../PictureMarkerSymbol","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../TextSymbol","../WebStyleSymbol","../LabelSymbol3D","../LineSymbol3D","../MeshSymbol3D","../PointSymbol3D","../PolygonSymbol3D"],function(e,l,y,o,p,i,t,m,r,b,s,n,S,a,d,u){Object.defineProperty(l,"__esModule",{value:!0}),l.types={base:o,key:"type",typeMap:{"simple-fill":t,"picture-fill":p,"picture-marker":i,"simple-line":m,"simple-marker":r,text:b,"label-3d":n,"line-3d":S,"mesh-3d":a,"point-3d":d,"polygon-3d":u,"web-style":s}},l.types3D={base:o,key:"type",typeMap:{"label-3d":n,"line-3d":S,"mesh-3d":a,"point-3d":d,"polygon-3d":u,"web-style":s}},l.ensureType=y.ensureOneOfType(l.types)});