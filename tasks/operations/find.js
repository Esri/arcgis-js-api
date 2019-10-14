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

define(["require","exports","../../layers/support/layerSourceUtils","../../layers/support/layerUtils"],function(e,r,i,n){function s(e){var r=e.toJSON(),s=r.contains,o=r.dynamicLayers,t=r.geometryPrecision,a=r.layerDefinitions,l=r.layerIds,f=r.maxAllowableOffset,u=r.outSR,y=r.returnGeometry,c=r.searchFields,d=r.searchText,p={contains:s,returnGeometry:y,geometryPrecision:t,maxAllowableOffset:f,searchText:d};if(l&&(p.layers=l.join(",")),c&&(p.searchFields=c.join(",")),u&&(p.sr=u.wkid||JSON.stringify(u)),a){for(var v=[],h=0;h<a.length;h++){var m=a[h];v[m.id]=m.definitionExpression}p.layerDefs=n.serializeLayerDefinitions(v)}if(o&&o.length){for(var x=[],h=0;h<o.length;h++)!function(e){var r=o[e],n=r.id;if(!r.subLayerIds&&l&&-1!==l.indexOf(n)){var s={id:n};s.source=r.source&&i.sourceToJSON(r.source);var t=null;if(a&&a.length){var f=a.filter(function(e){return e.id===n})[0];t=f&&f.definitionExpression}t&&(s.definitionExpression=t),x.push(s)}}(h);var g=JSON.stringify(x);"[]"===g&&(g="[{}]"),p.dynamicLayers=g}return p}Object.defineProperty(r,"__esModule",{value:!0}),r.findToFindRESTParameters=s});