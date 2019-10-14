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

define(["require","exports","../../has","../../Logger","../utils","../wire"],function(e,n,r,t,o,s){Object.defineProperty(n,"__esModule",{value:!0});var i=r("dojo-debug-messages"),a=t.getLogger("esri.core.accessorSupport.extensions.computedProperty");n.ComputedPropertyExtension={processClassPropertyMetadata:function(e,n,r,t){if(i){var d=n.dependsOn;d&&d.length&&d.map(function(e){return e.split(".")[0]}).forEach(function(n){"?"!==n[n.length-1]&&null==r[n]&&a.error("[accessor] class '"+t+"' - property '"+e+"' depends on unknown property '"+n+"' which hasn't been found during introspection. This can be fix by adding '"+n+"' to the metadata for example.")})}n.dependsOn&&n.dependsOn.length&&(n.wire=s.create(n.dependsOn,function(n){return o.getProperties(n).propertyInvalidated(e)}))},instanceCreated:function(e,n,r){for(var t=0,o=r;t<o.length;t++){var s=o[t],i=n[s];i.wire&&i.wire(e)}}},n.default=n.ComputedPropertyExtension});