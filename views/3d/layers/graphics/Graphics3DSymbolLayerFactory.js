// COPYRIGHT © 2018 Esri
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

define(["require","exports","../../../../core/Logger","./Graphics3DExtrudeSymbolLayer","./Graphics3DIconSymbolLayer","./Graphics3DLineSymbolLayer","./Graphics3DMeshFillSymbolLayer","./Graphics3DObjectSymbolLayer","./Graphics3DPathSymbolLayer","./Graphics3DPolygonFillSymbolLayer","./Graphics3DTextSymbolLayer"],function(e,r,a,y,o,i,l,t,c,p,s){function n(e,r,a,y){var o=m[e.type]&&m[e.type][r.type]||b[r.type];return o?new o(e,r,a,y):(h.error("GraphicsLayerFactory#make","unknown symbol type "+r.type),null)}Object.defineProperty(r,"__esModule",{value:!0});var h=a.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory");r.make=n;var b={icon:o,object:t,line:i,path:c,fill:p,extrude:y,text:s},m={"mesh-3d":{fill:l}}});