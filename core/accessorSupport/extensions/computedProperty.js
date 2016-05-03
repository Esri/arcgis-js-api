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

define(["require","exports","dojo/has","../utils","../whenMayChange"],function(e,n,o,t,r){var a=o("dojo-debug-messages");n.ComputedPropertyExtension={processClassPropertyMetadata:function(e,n,o,t){if(a){var r=n.dependsOn;r&&r.length&&r.map(function(e){return e.split(".")[0]}).forEach(function(n){null==o[n]&&console.error("[accessor] class '"+t+"' - property '"+e+"' depends on unknown property '"+n+"' which hasn't been found during introspection. This can be fix by adding '"+n+"' to the metadata for example.")})}},defineProperty:function(e,n,o){return o.dependsOn?r.whenMayChange(e,o.dependsOn,function(){return t.getProperties(e).propertyInvalidated(n)}):void 0}},Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=n.ComputedPropertyExtension});