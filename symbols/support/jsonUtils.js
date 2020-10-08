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

define(["require","exports","../../symbols","../../core/Error","../Symbol3D","../WebStyleSymbol","./symbolConversion"],(function(e,s,o,n,r,t,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.fromJSON=s.write=void 0,s.write=function(e,s,o,l){var m=function(e,s,o){if(!e)return null;if(o&&"web-scene"===o.origin&&!(e instanceof r)&&!(e instanceof t)){var l="cim"!==e.type?i.to3D(e):{symbol:null,error:new n("symbol-conversion:unsupported-cim-symbol","CIM symbol is unsupported in web scenes",{symbol:e})};return l.symbol?l.symbol.write(s,o):(o.messages&&o.messages.push(new n("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:e,context:o,error:l.error})),null)}if(o&&"web-map"===o.origin&&"web-style"===e.type)return o.messages&&o.messages.push(new n("symbol:unsupported","Symbols of type '"+e.declaredClass+"' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.",{symbol:e,context:o})),null;return e.write(s,o)}(e,{},l);m&&(s[o]=m)},s.fromJSON=function(e,s){return o.readSymbol(e,null,s)}}));