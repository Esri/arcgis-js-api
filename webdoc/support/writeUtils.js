// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/lang","../../core/maybe"],function(e,t,r,n,i){function a(e){return"basemap"===e.layerContainerType?s:"operational-layers"===e.layerContainerType?p:null}function l(e){return"unknown"===e.type||"unsupported"===e.type}function o(e,t){if(t.restrictedWebMapWriting){var r=a(t);return!i.isSome(r)||(r.has(e.type)||l(e))}return!0}function u(e,t){"maxScale"in e&&(t.maxScale=e.maxScale),"minScale"in e&&(t.minScale=e.minScale),t.opacity=e.opacity,t.title=e.title,t.visibility=e.visible}function c(e,t,a){if(!("write"in e&&e.write))return a&&a.messages&&a.messages.push(new r("layer:unsupported","Layers ("+e.title+", "+e.id+") of type '"+e.declaredClass+"' cannot be persisted",{layer:e})),null;if(o(e,a)){var l={};return e.write(l,a)?l:null}return i.isSome(t)&&(t=n.clone(t),u(e,t)),t}Object.defineProperty(t,"__esModule",{value:!0});var s=new Set;["bing-maps","open-street-map","tile","vector-tile","web-tile"].forEach(function(e){return s.add(e)});var p=new Set;["feature","tile","vector-tile","web-tile"].forEach(function(e){return p.add(e)}),t.getLayerJSON=c});