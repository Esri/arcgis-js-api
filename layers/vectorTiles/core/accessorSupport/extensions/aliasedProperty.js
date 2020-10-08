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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","dojo/has","../get","../set","../utils","../wire"],(function(e,t,r,a,s,i,o){Object.defineProperty(t,"__esModule",{value:!0});var n=r("dojo-debug-messages");function f(e,t,r){var a=i.getProperties(e);return o.wire(e,r.aliasOf,(function(){a.propertyInvalidated(t)}))}t.AliasedPropertyExtension={processClassPropertyMetadata:function(e,t,r,i){var o=t.aliasOf;if(o){var f,l=o.split(".")[0];if(null==r[l])return void(n&&console.error("[accessor] class '"+i+"' - property '"+e+"' is alias of aliased of '"+o+"', but '"+l+"' isn't declared as property. This can be fix by adding '"+l+"' to the metadata for example."));if(t.set)return void(n&&console.error("[accessor] class '"+i+"' - property '"+e+"' is alias of aliased of '"+o+"', so it cannot have a setter defined"));if(t.get)return void(n&&console.error("[accessor] class '"+i+"' - property '"+e+"' is alias of aliased of '"+o+"', so it cannot have a getter defined"));t.get=function(){var e=a.default(this,o);if(function(e){return"function"==typeof e}(e)){f||(f=o.split(".").slice(0,-1).join("."));var t=a.default(this,f);t&&(e=e.bind(t))}return e},t.readOnly||(t.set=function(e){return s.default(this,o,e)})}},instanceCreated:function(e,t,r){for(var a=0,s=r;a<s.length;a++){var i=s[a],o=t[i];o.aliasOf&&f(e,i,o)}}},t.default=t.AliasedPropertyExtension}));