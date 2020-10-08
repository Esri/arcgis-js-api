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

define(["require","exports","../../core/Error","../../core/lang","../../core/maybe","../../core/object","../../core/SetUtils","../../core/accessorSupport/extensions/serializableProperty/writer"],(function(e,n,r,t,i,l,a,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getLayerJSON=n.disableRestrictedWriting=n.enableRestrictedWriting=void 0;var s=a.SetFromValues(["bing-maps","open-street-map","tile","unknown","unsupported","vector-tile","web-tile"]),u=a.SetFromValues(["feature","group","tile","unknown","unsupported","vector-tile","web-tile"]);function c(e){return!("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function d(e,n){if(n.restrictedWebMapWriting){var r=function(e){return"basemap"===e.layerContainerType?s:"operational-layers"===e.layerContainerType?u:null}(n);return!i.isSome(r)||r.has(e.type)&&!c(e)}return!0}function p(e,n){if(function(e,n){if(c(e)){var r=l.getDeepValue("featureCollection.layers",n),t=r&&r[0]&&r[0].layerDefinition;t&&("maxScale"in e&&(t.maxScale=o.numberToJSON(e.maxScale)),"minScale"in e&&(t.minScale=o.numberToJSON(e.minScale)))}else"group"!==e.type&&("maxScale"in e&&(n.maxScale=o.numberToJSON(e.maxScale)),"minScale"in e&&(n.minScale=o.numberToJSON(e.minScale)))}(e,n),"blendMode"in e&&(n.blendMode=e.blendMode,"normal"===n.blendMode&&delete n.blendMode),n.opacity=o.numberToJSON(e.opacity),n.title=e.title||"Layer",n.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(c(e)){var r=n.featureCollection;r&&(r.showLegend=e.legendEnabled)}else n.showLegend=e.legendEnabled}n.enableRestrictedWriting=function(e){s.delete(e),u.delete(e)},n.disableRestrictedWriting=function(e){s.add(e),u.add(e)},n.getLayerJSON=function(e,n,l){if(!("write"in e&&e.write))return l&&l.messages&&l.messages.push(new r("layer:unsupported","Layers ("+e.title+", "+e.id+") of type '"+e.declaredClass+"' cannot be persisted",{layer:e})),null;if(d(e,l)){var a={};return e.write(a,l)?a:null}return i.isSome(n)&&p(e,n=t.clone(n)),n}}));