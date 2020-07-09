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

define(["require","exports","../../layers/support/layerSourceUtils","../../layers/support/layerUtils"],(function(e,r,i,n){Object.defineProperty(r,"__esModule",{value:!0}),r.findToFindRESTParameters=function(e){var r=e.toJSON(),s=r.contains,o=r.dynamicLayers,t=r.geometryPrecision,a=r.layerDefinitions,l=r.layerIds,f=r.maxAllowableOffset,u=r.outSR,y=r.returnGeometry,c=r.searchFields,d={contains:s,returnGeometry:y,geometryPrecision:t,maxAllowableOffset:f,searchText:r.searchText};if(l&&(d.layers=l.join(",")),c&&(d.searchFields=c.join(",")),u&&(d.sr=u.wkid||JSON.stringify(u)),a){for(var p=[],v=0;v<a.length;v++){var h=a[v];p[h.id]=h.definitionExpression}d.layerDefs=n.serializeLayerDefinitions(p)}if(o&&o.length){var m=[],x=function(e){var r=o[e],n=r.id;if(!r.subLayerIds&&l&&-1!==l.indexOf(n)){var s={id:n};s.source=r.source&&i.sourceToJSON(r.source);var t=null;if(a&&a.length){var f=a.filter((function(e){return e.id===n}))[0];t=f&&f.definitionExpression}t&&(s.definitionExpression=t),m.push(s)}};for(v=0;v<o.length;v++)x(v);var g=JSON.stringify(m);"[]"===g&&(g="[{}]"),d.dynamicLayers=g}return d}}));