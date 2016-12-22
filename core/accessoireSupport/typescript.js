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

define(["../declare","../typescript","../JSONSupporter","dojo/_base/lang"],function(e,a,r,t){function s(e,a){if(!e)return a;if(!a)return e;for(var r in a){var t=e[r],n=a[r];Array.isArray(n)&&Array.isArray(t)?e[r]=t.concat(n):"object"==typeof n&&"object"==typeof t?e[r]=s(t,n):e[r]=n}return e}var n={subclass:function(n,i){return function(c){var o=a.declareDefinition(c,n);i&&(o.instanceMembers.classMetadata=s(i,o.instanceMembers.classMetadata));var p=o.instanceMembers.classMetadata;if(p&&p.properties)for(var u in p.properties){var f=p.properties[u];f&&!f.reader&&f.type&&(f.type===Date?f.reader=function(e){return null!=e?new Date(e):null}:-1!==f.type._meta.bases.indexOf(r)&&(f.reader=function(e){return function(a){return e.fromJSON(a)}}(f.type)))}return t.mixin(e(o.bases,o.instanceMembers),o.classMembers)}},shared:a.shared,property:function(e){return function(a,r){var t=Object.getPrototypeOf(a),s=t&&t.classMetadata;a.classMetadata&&a.classMetadata!==s||(a.classMetadata={}),a.classMetadata.properties=a.classMetadata.properties||{},a.classMetadata.properties[r]=e||{}}}};return n});