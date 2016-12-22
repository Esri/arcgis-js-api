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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/has","../wire","../utils","../get","../set"],function(e,r,t,a,s,i,o){function n(e,r,t){var i=s.getProperties(e);return a.wire(e,t.aliasOf,function(){i.propertyInvalidated(r)})}function f(e){return"function"==typeof e}var l=t("dojo-debug-messages");r.AliasedPropertyExtension={processClassPropertyMetadata:function(e,r,t,a){var s=r.aliasOf;if(s){var n=s.split(".")[0];if(null==t[n])return void(l&&console.error("[accessor] class '"+a+"' - property '"+e+"' is alias of aliased of '"+s+"', but '"+n+"' isn't declared as property. This can be fix by adding '"+n+"' to the metadata for example."));if(r.set)return void(l&&console.error("[accessor] class '"+a+"' - property '"+e+"' is alias of aliased of '"+s+"', so it cannot have a setter defined"));if(r.get)return void(l&&console.error("[accessor] class '"+a+"' - property '"+e+"' is alias of aliased of '"+s+"', so it cannot have a getter defined"));var d;r.get=function(){var e=i["default"](this,s);if(f(e)){d||(d=s.split(".").slice(0,-1).join("."));var r=i["default"](this,d);r&&(e=e.bind(r))}return e},r.readOnly||(r.set=function(e){return o["default"](this,s,e)})}},instanceCreated:function(e,r,t){for(var a=0,s=t;a<s.length;a++){var i=s[a],o=r[i];o.aliasOf&&n(e,i,o)}}},Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=r.AliasedPropertyExtension});