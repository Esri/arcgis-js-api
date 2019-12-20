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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/lang","../../core/maybe","../../core/object"],function(e,r,n,t,i,a){function l(e){return"basemap"===e.layerContainerType?p:"operational-layers"===e.layerContainerType?m:null}function o(e){return!("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function u(e,r){if(r.restrictedWebMapWriting){var n=l(r);return!i.isSome(n)||n.has(e.type)&&!o(e)}return!0}function c(e,r){if(o(e)){var n=a.getDeepValue("featureCollection.layers",r),t=n&&n[0]&&n[0].layerDefinition;t&&("maxScale"in e&&(t.maxScale=e.maxScale),"minScale"in e&&(t.minScale=e.minScale))}else"group"!==e.type&&("maxScale"in e&&(r.maxScale=e.maxScale),"minScale"in e&&(r.minScale=e.minScale));r.opacity=e.opacity,r.title=e.title,r.visibility=e.visible}function s(e,r,a){if(!("write"in e&&e.write))return a&&a.messages&&a.messages.push(new n("layer:unsupported","Layers ("+e.title+", "+e.id+") of type '"+e.declaredClass+"' cannot be persisted",{layer:e})),null;if(u(e,a)){var l={};return e.write(l,a)?l:null}return i.isSome(r)&&(r=t.clone(r),c(e,r)),r}Object.defineProperty(r,"__esModule",{value:!0});var p=new Set;["bing-maps","open-street-map","tile","unknown","unsupported","vector-tile","web-tile"].forEach(function(e){return p.add(e)});var m=new Set;["feature","tile","unknown","unsupported","vector-tile","web-tile"].forEach(function(e){return m.add(e)}),r.getLayerJSON=s});