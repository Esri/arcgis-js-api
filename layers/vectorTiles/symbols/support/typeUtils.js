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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports","../../core/accessorSupport/ensureType","../LabelSymbol3D","../LineSymbol3D","../MeshSymbol3D","../PictureFillSymbol","../PictureMarkerSymbol","../PointSymbol3D","../PolygonSymbol3D","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../Symbol","../TextSymbol","../WebStyleSymbol"],(function(e,l,p,y,t,i,o,r,s,b,m,n,a,d,S,u){Object.defineProperty(l,"__esModule",{value:!0}),l.types={base:d,key:"type",typeMap:{"simple-fill":m,"picture-fill":o,"picture-marker":r,"simple-line":n,"simple-marker":a,text:S,"label-3d":y,"line-3d":t,"mesh-3d":i,"point-3d":s,"polygon-3d":b,"web-style":u}},l.rendererTypes={base:d,key:"type",typeMap:{"simple-fill":m,"picture-fill":o,"picture-marker":r,"simple-line":n,"simple-marker":a,text:S,"line-3d":t,"mesh-3d":i,"point-3d":s,"polygon-3d":b,"web-style":u}},l.labelTypes={base:d,key:"type",typeMap:{text:S,"label-3d":y}},l.types3D={base:d,key:"type",typeMap:{"label-3d":y,"line-3d":t,"mesh-3d":i,"point-3d":s,"polygon-3d":b,"web-style":u}},l.rendererTypes3D={base:d,key:"type",typeMap:{"line-3d":t,"mesh-3d":i,"point-3d":s,"polygon-3d":b,"web-style":u}},l.labelTypes3D={base:d,key:"type",typeMap:{"label-3d":y}},l.ensureType=p.ensureOneOfType(l.types)}));