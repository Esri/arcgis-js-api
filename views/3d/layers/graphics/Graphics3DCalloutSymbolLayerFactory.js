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

define(["require","exports","../../../../core/Logger","../../../../symbols/callouts/calloutUtils","./Graphics3DLineCalloutSymbolLayer"],function(e,l,r,o,t){function a(e,l){if(!o.isCalloutSupport(e))return u.error("Graphics3DCalloutSymbolLayerFactory#make","symbol of type '"+e.type+"' does not support callouts"),null;if(!e.callout)return null;var r=n[e.callout.type];return r?new r(e,l):(u.error("Graphics3DCalloutSymbolLayerFactory#make","unknown or unsupported callout type "+e.callout.type),null)}Object.defineProperty(l,"__esModule",{value:!0});var u=r.getLogger("esri.views.3d.layers.graphics.Graphics3DCalloutSymbolLayerFactory");l.make=a;var n={line:t}});