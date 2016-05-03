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

define(["require","exports","dojo/has","../whenMayChange","../utils","../get","../set"],function(e,a,r,t,s,o,i){function n(e,a,r){var o=s.getProperties(e);return t.whenMayChange(e,r.aliasOf,function(){o.propertyInvalidated(a)})}var d=r("dojo-debug-messages");a.AliasedPropertyExtension={processClassPropertyMetadata:function(e,a,r,t){var s=a.aliasOf;if(s){var n=s.split(".")[0];if(null==r[n])return void(d&&console.error("[accessor] class '"+t+"' - property '"+e+"' is alias of aliased of '"+s+"', but '"+n+"' isn't declared as property. This can be fix by adding '"+n+"' to the metadata for example."));if(a.set)return void(d&&console.error("[accessor] class '"+t+"' - property '"+e+"' is alias of aliased of '"+s+"', so it cannot have a setter defined"));if(a.get)return void(d&&console.error("[accessor] class '"+t+"' - property '"+e+"' is alias of aliased of '"+s+"', so it cannot have a getter defined"));a.get=function(){return o["default"](this,s)},a.readOnly||(a.set=function(e){return i["default"](this,s,e)})}},defineProperty:function(e,a,r){r.aliasOf&&n(e,a,r)}},Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=a.AliasedPropertyExtension});