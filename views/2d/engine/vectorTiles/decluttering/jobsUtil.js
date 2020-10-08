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

define(["require","exports","./core","./jobs","./SymbolDeclutterer","./SymbolRepository","./util"],(function(e,t,r,i,o,n,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.declutterSingleTile=void 0,t.declutterSingleTile=function(e){var t=new s.TileForest,l=new n.SymbolRepository(4096,t,(function(){var e=new r.VTLUniqueSymbol;return e.show=!1,e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e})),u=new o.SymbolDeclutterer(t,l,(function(t,r,o){return new i.CollisionJob(t,r,o,e.styleLayers.layers,e.key.level,0)}),(function(e,t){s.writeOpacityToBuffers(e,t,!1)}));t.add(e),l.addTile(e),u.setScreenSize(512,512),u.continue(1/0)}}));