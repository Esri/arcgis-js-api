// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../has","../../Logger","../utils","../wire"],function(e,r,n,t,o,i){Object.defineProperty(r,"__esModule",{value:!0});var s=n("dojo-debug-messages"),a=t.getLogger("esri.core.accessorSupport.extensions.computedProperty");r.ComputedPropertyExtension={processClassPropertyMetadata:function(e,r,n,t){if(s){var d=r.dependsOn;d&&d.length&&d.map(function(e){return e.split(".")[0]}).forEach(function(r){null==n[r]&&a.error("[accessor] class '"+t+"' - property '"+e+"' depends on unknown property '"+r+"' which hasn't been found during introspection. This can be fix by adding '"+r+"' to the metadata for example.")})}if(r.dependsOn){var p=void 0;p=r.dependsOn.slice(),p&&(r.wire=i.create(p,function(r){return o.getProperties(r).propertyInvalidated(e)}))}},instanceCreated:function(e,r,n){for(var t=0,o=n;t<o.length;t++){var i=o[t],s=r[i];s.wire&&s.wire(e)}}},r.default=r.ComputedPropertyExtension});