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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/has","../wire","../utils","../get","../set"],function(e,r,a,t,s,o,i){function n(e,r,a){var o=s.getProperties(e);return t.wire(e,a.aliasOf,function(){o.propertyInvalidated(r)})}var l=a("dojo-debug-messages");r.AliasedPropertyExtension={processClassPropertyMetadata:function(e,r,a,t){var s=r.aliasOf;if(s){var n=s.split(".")[0];if(null==a[n])return void(l&&console.error("[accessor] class '"+t+"' - property '"+e+"' is alias of aliased of '"+s+"', but '"+n+"' isn't declared as property. This can be fix by adding '"+n+"' to the metadata for example."));if(r.set)return void(l&&console.error("[accessor] class '"+t+"' - property '"+e+"' is alias of aliased of '"+s+"', so it cannot have a setter defined"));if(r.get)return void(l&&console.error("[accessor] class '"+t+"' - property '"+e+"' is alias of aliased of '"+s+"', so it cannot have a getter defined"));r.get=function(){return o["default"](this,s)},r.readOnly||(r.set=function(e){return i["default"](this,s,e)})}},instanceCreated:function(e,r,a){for(var t=0,s=a;t<s.length;t++){var o=s[t],i=r[o];i.aliasOf&&n(e,o,i)}}},Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=r.AliasedPropertyExtension});