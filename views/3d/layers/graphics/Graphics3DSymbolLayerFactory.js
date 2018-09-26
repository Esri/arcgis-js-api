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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/has","../../../../core/Logger","./Graphics3DExtrudeSymbolLayer","./Graphics3DIconSymbolLayer","./Graphics3DLineSymbolLayer","./Graphics3DMeshFillSymbolLayer","./Graphics3DObjectSymbolLayer","./Graphics3DObjectSymbolLayerLod","./Graphics3DPathSymbolLayer","./Graphics3DPolygonFillSymbolLayer","./Graphics3DTextSymbolLayer"],function(e,r,a,y,o,l,i,t,c,s,p,n,h){function b(e,r,a,y){var o=u[e.type]&&u[e.type][r.type]||m[r.type];return o?new o(e,r,a,y):(L.error("GraphicsLayerFactory#make","unknown symbol type "+r.type),null)}Object.defineProperty(r,"__esModule",{value:!0});var L=y.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory");r.make=b;var m={icon:l,object:a("enable-feature:skallweit/lod-rendering")?s:c,line:i,path:p,fill:n,extrude:o,text:h},u={"mesh-3d":{fill:t}}});