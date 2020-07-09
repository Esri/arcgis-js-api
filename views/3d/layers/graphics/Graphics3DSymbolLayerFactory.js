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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/Logger","./Graphics3DExtrudeSymbolLayer","./Graphics3DIconSymbolLayer","./Graphics3DLineSymbolLayer","./Graphics3DMeshFillSymbolLayer","./Graphics3DObjectSymbolLayer","./Graphics3DPathSymbolLayer","./Graphics3DPolygonFillSymbolLayer","./Graphics3DTextSymbolLayer","./Graphics3DWaterSymbolLayer"],(function(e,r,a,l,t,y,o,i,c,s,p,u){Object.defineProperty(r,"__esModule",{value:!0});var n=a.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory");r.make=function(e,r,a,l){var t=f[e.type]&&f[e.type][r.type]||d[r.type];return t?new t(e,r,a,l):(n.error("GraphicsLayerFactory#make","unknown symbol type "+r.type),null)};var d={icon:t.default,object:i.default,line:y.default,path:c.default,fill:s.default,extrude:l.default,text:p.default,water:u.default};r.setSymbolClass=function(e,r){d[e]=r};var f={"mesh-3d":{fill:o.default}}}));