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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/compilerUtils","./previewSymbol2D","./previewSymbol3D","./previewWebStyleSymbol","./utils"],function(e,r,l,t,i,o,s,a,c){function n(e,r){switch(e.type){case"web-style":return a.previewWebStyleSymbol(e,n,r);case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return s.previewSymbol3D(e,r);case"simple-marker":case"simple-line":case"simple-fill":case"picture-marker":case"picture-fill":case"text":case"cim":return o.previewSymbol2D(e,r);default:i.neverReached(e)}}function p(e,r){return t(this,void 0,void 0,function(){var t,i,o;return l(this,function(l){return e?(t=e.get("layer.opacity")||e.get("sourceLayer.opacity"),e.symbol?(i=e.symbol.clone(),c.applyColorToSymbol(i,null,t),[2,i]):(o=e.get("layer.renderer")||e.get("sourceLayer.renderer"),o&&"getDisplayedSymbol"in o?[2,o.getDisplayedSymbol(e,r)]:[2])):[2]})})}Object.defineProperty(r,"__esModule",{value:!0}),r.renderPreviewHTML=n,r.getDisplayedSymbol=p});