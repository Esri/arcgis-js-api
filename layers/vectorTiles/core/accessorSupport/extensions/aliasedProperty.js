// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports","dojo/has","../get","../set","../utils","../wire"],function(e,r,t,a,s,i,o){function n(e,r,t){var a=i.getProperties(e);return o.wire(e,t.aliasOf,function(){a.propertyInvalidated(r)})}function f(e){return"function"==typeof e}Object.defineProperty(r,"__esModule",{value:!0});var l=t("dojo-debug-messages");r.AliasedPropertyExtension={processClassPropertyMetadata:function(e,r,t,i){var o=r.aliasOf;if(o){var n=o.split(".")[0];if(null==t[n])return void(l&&console.error("[accessor] class '"+i+"' - property '"+e+"' is alias of aliased of '"+o+"', but '"+n+"' isn't declared as property. This can be fix by adding '"+n+"' to the metadata for example."));if(r.set)return void(l&&console.error("[accessor] class '"+i+"' - property '"+e+"' is alias of aliased of '"+o+"', so it cannot have a setter defined"));if(r.get)return void(l&&console.error("[accessor] class '"+i+"' - property '"+e+"' is alias of aliased of '"+o+"', so it cannot have a getter defined"));var d;r.get=function(){var e=a.default(this,o);if(f(e)){d||(d=o.split(".").slice(0,-1).join("."));var r=a.default(this,d);r&&(e=e.bind(r))}return e},r.readOnly||(r.set=function(e){return s.default(this,o,e)})}},instanceCreated:function(e,r,t){for(var a=0,s=t;a<s.length;a++){var i=s[a],o=r[i];o.aliasOf&&n(e,i,o)}}},r.default=r.AliasedPropertyExtension});