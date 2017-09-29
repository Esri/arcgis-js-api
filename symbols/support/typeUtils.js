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

define(["require","exports","../../core/accessorSupport/ensureType","../Symbol","../PictureFillSymbol","../PictureMarkerSymbol","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../TextSymbol","../WebStyleSymbol","../LabelSymbol3D","../LineSymbol3D","../MeshSymbol3D","../PointSymbol3D","../PolygonSymbol3D"],function(e,l,o,y,i,r,m,p,t,b,S,n,s,u,a,c){Object.defineProperty(l,"__esModule",{value:!0}),l.types={base:y,key:"type",typeMap:{"simple-fill":m,"picture-fill":i,"picture-marker":r,"simple-line":p,"simple-marker":t,text:b,"label-3d":n,"line-3d":s,"mesh-3d":u,"point-3d":a,"polygon-3d":c,"web-style":S}},l.ensureType=o.ensureOneOfType(l.types)});