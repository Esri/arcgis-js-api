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

define(["require","exports","../../core/Error","../../core/lang","../../core/maybe","../../core/object","../../core/accessorSupport/extensions/serializableProperty/writer"],(function(e,n,r,t,i,a,l){Object.defineProperty(n,"__esModule",{value:!0});var o=new Set;["bing-maps","open-street-map","tile","unknown","unsupported","vector-tile","web-tile"].forEach((function(e){return o.add(e)}));var u=new Set;function c(e){return!("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function d(e,n){if(n.restrictedWebMapWriting){var r=function(e){return"basemap"===e.layerContainerType?o:"operational-layers"===e.layerContainerType?u:null}(n);return!i.isSome(r)||r.has(e.type)&&!c(e)}return!0}function s(e,n){if(function(e,n){if(c(e)){var r=a.getDeepValue("featureCollection.layers",n),t=r&&r[0]&&r[0].layerDefinition;t&&("maxScale"in e&&(t.maxScale=l.numberToJSON(e.maxScale)),"minScale"in e&&(t.minScale=l.numberToJSON(e.minScale)))}else"group"!==e.type&&("maxScale"in e&&(n.maxScale=l.numberToJSON(e.maxScale)),"minScale"in e&&(n.minScale=l.numberToJSON(e.minScale)))}(e,n),"blendMode"in e&&(n.blendMode=e.blendMode,"normal"===n.blendMode&&delete n.blendMode),n.opacity=l.numberToJSON(e.opacity),n.title=e.title||"Layer",n.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(c(e)){var r=n.featureCollection;r&&(r.showLegend=e.legendEnabled)}else n.showLegend=e.legendEnabled}["feature","group","tile","unknown","unsupported","vector-tile","web-tile"].forEach((function(e){return u.add(e)})),n.enableRestrictedWriting=function(e){o.delete(e),u.delete(e)},n.disableRestrictedWriting=function(e){o.add(e),u.add(e)},n.getLayerJSON=function(e,n,a){if(!("write"in e&&e.write))return a&&a.messages&&a.messages.push(new r("layer:unsupported","Layers ("+e.title+", "+e.id+") of type '"+e.declaredClass+"' cannot be persisted",{layer:e})),null;if(d(e,a)){var l={};return e.write(l,a)?l:null}return i.isSome(n)&&s(e,n=t.clone(n)),n}}));