// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports"],function(e,r){r.SerializablePropertyExtension={processPrototypePropertyMetadata:function(e,r){if(r.type){var o=Array.isArray(r.type),t=o?r.type[0]:r.type;if(t.fromJSON&&(!r.json||!r.json.read))if(r.json||(r.json={}),o)r.json.read=function(e){return null==e?e:Array.isArray(e)?e.map(t.fromJSON):[t.fromJSON(e)]};else if(t.prototype.declaredClass&&0===t.prototype.declaredClass.indexOf("esri.core.Collection<")&&t.prototype.itemType.fromJSON){var n=t.prototype.itemType;r.json.read=function(e){return null==e?e:new t(Array.isArray(e)?e.map(n.fromJSON):[n.fromJSON(e)])}}else r.json.read=t.fromJSON}}},Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=r.SerializablePropertyExtension});