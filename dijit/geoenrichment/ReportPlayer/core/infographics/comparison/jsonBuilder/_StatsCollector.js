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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/lang","../../../comparison/ComparisonListUtil","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/stdGeographies/StdGeographiesUtil"],function(e,a,r){var t={};return t.getStats=function(a,r,n,o,i){var u=[],s=[],f=[],c=0,l=0,h=r.length>1?"shortName":"name";r.forEach(function(r,t){var n=e.mixin({},r.data);a&&(u.push(n),n.StdGeographyName=o&&o[t][h],n.__thisAreaIndex=t),s=s.concat(r.comparisonLevels)});var d=t._comparisonLevelsToGroups(s),m=d.groups;c+=u.length,m.forEach(function(e){c+=e.features.length});var p=t._collectRangesAndFilterAttributes(u,m,i),g=u.filter(function(e){return!!e}).length;l+=g,m.forEach(function(e){l+=e.features.length});var v={};return m.forEach(function(e){e.cache={},e.features.forEach(function(a){e.cache[a.attributes.StdGeographyID]=a});var a=e.cache[n[e.levelId]]||e.features[0];f.push(a&&a.attributes),a&&(v[e.levelId]=e)}),m=v,{ranges:p,thisAreas:u,shownGeographiesInGroup:f,groups:m,numThisAreas:g,numAreasTotal:c,numAreasShown:l,allGeographies:d.features.map(function(e){return e.attributes})}},t._comparisonLevelsToGroups=function(e){var t=[],n=[];return e.forEach(function(e){if(!e.StdGeographyID)return void console.log("Error: Can't add a feature to a group.");var a=e.StdGeographyID+";"+e.StdGeographyLevel+";"+e.StdGeographyName+";";if(!t[a]){if(t[a]=!0,e.StdGeographyName){var o=r.getAreaName(e);o!==e.StdGeographyName&&(e.StdGeographyName=o)}n.push({attributes:e})}}),{features:n,groups:a.getFeatureGroups(n)}},t._collectRangesAndFilterAttributes=function(e,a,r){function t(e){u.forEach(function(a){var r=e[a.fieldName];isNaN(r)||(a.min=Math.min(a.min,r),a.max=Math.max(a.max,r),a.dataArray.push(r))})}function n(e){return!u.some(function(a){var t=r[a.fieldName],n=e[a.fieldName];return t&&(n<t.min||n>t.max)})}var o;r&&(o={},r.forEach(function(e){o[e.fieldName]=e}),r=o);var i=e[0]||a[0]&&a[0].features[0]&&a[0].features[0].attributes,u=[];for(var s in i)if("__thisAreaIndex"!==s){var f=i[s];"number"!=typeof f||isNaN(f)||u.push({fieldName:s,min:1/0,max:-1/0,dataArray:[]})}return e.forEach(function(a,o){t(a),r&&!n(a)&&(e[o]=void 0)}),a.forEach(function(e){e.features=e.features.filter(function(e){return t(e.attributes),!r||n(e.attributes)})}),u},t.applyFieldsToRanges=function(e,a){var r={};return e.forEach(function(e){r[e.name]=e}),a.filter(function(e){return field=r[e.fieldName],!!field&&(e.alias=field.label,e.decimals=field.decimals,!0)})},t});