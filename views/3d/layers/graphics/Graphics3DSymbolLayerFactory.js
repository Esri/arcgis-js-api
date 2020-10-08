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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/Logger","./Graphics3DExtrudeSymbolLayer","./Graphics3DIconSymbolLayer","./Graphics3DLineSymbolLayer","./Graphics3DMeshFillSymbolLayer","./Graphics3DObjectSymbolLayer","./Graphics3DPathSymbolLayer","./Graphics3DPolygonFillSymbolLayer","./Graphics3DTextSymbolLayer","./Graphics3DWaterSymbolLayer"],(function(e,a,r,t,l,y,o,i,s,c,p,u){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.setSymbolClass=a.make=void 0;var n=r.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory");a.make=function(e,a,r,t){var l=m[e.type]&&m[e.type][a.type]||d[a.type];return l?new l(e,a,r,t):(n.error("GraphicsLayerFactory#make","unknown symbol type "+a.type),null)};var d={icon:l.default,object:i.default,line:y.default,path:s.default,fill:c.default,extrude:t.default,text:p.default,water:u.default};a.setSymbolClass=function(e,a){d[e]=a};var m={"mesh-3d":{fill:o.default}}}));