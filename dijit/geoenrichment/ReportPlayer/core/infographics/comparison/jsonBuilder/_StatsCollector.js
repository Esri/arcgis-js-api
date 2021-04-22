// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","../../../comparison/ComparisonListUtil","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/stdGeographies/StdGeographiesUtil"],(function(e,a,r){var t={getStats:function(a,r,n,o,i){var s=[],u=[],f=[],c=0,h=0,l=r.length>1?"shortName":"name";r.forEach((function(r,t){var n=e.mixin({},r.data);a&&(s.push(n),n.StdGeographyName=o&&o[t][l],n.__thisAreaIndex=t),u=u.concat(r.comparisonLevels)}));var m=t._comparisonLevelsToGroups(u),p=m.groups;c+=s.length,p.forEach((function(e){c+=e.features.length}));var d=t._collectRangesAndFilterAttributes(s,p,i),g=s.filter((function(e){return!!e})).length;h+=g,p.forEach((function(e){h+=e.features.length}));var v={};return p.forEach((function(e){e.cache={},e.features.forEach((function(a){e.cache[a.attributes.StdGeographyID]=a}));var a=e.cache[n[e.levelId]]||e.features[0];f.push(a&&a.attributes),a&&(v[e.levelId]=e)})),{ranges:d,thisAreas:s,shownGeographiesInGroup:f,groups:p=v,numThisAreas:g,numAreasTotal:c,numAreasShown:h,allGeographies:m.features.map((function(e){return e.attributes}))}},_comparisonLevelsToGroups:function(e){var t=[],n=[];return e.forEach((function(e){if(e.StdGeographyID){var a=e.StdGeographyID+";"+e.StdGeographyLevel+";"+e.StdGeographyName+";";if(!t[a]){if(t[a]=!0,e.StdGeographyName){var o=r.getAreaName(e);o!==e.StdGeographyName&&(e.StdGeographyName=o)}n.push({attributes:e})}}else console.log("Error: Can't add a feature to a group.")})),{features:n,groups:a.getFeatureGroups(n)}},_collectRangesAndFilterAttributes:function(e,a,r){var t;r&&(t={},r.forEach((function(e){t[e.fieldName]=e})),r=t);var n=e[0]||a[0]&&a[0].features[0]&&a[0].features[0].attributes,o=[];for(var i in n)if("__thisAreaIndex"!==i){var s=n[i];"number"!=typeof s||isNaN(s)||o.push({fieldName:i,min:1/0,max:-1/0,dataArray:[]})}function u(e){o.forEach((function(a){var r=e[a.fieldName];isNaN(r)||(a.min=Math.min(a.min,r),a.max=Math.max(a.max,r),a.dataArray.push(r))}))}function f(e){return!o.some((function(a){var t=r[a.fieldName],n=e[a.fieldName];return t&&(n<t.min||n>t.max)}))}return e.forEach((function(a,t){u(a),r&&!f(a)&&(e[t]=void 0)})),a.forEach((function(e){e.features=e.features.filter((function(e){return u(e.attributes),!r||f(e.attributes)}))})),o},applyFieldsToRanges:function(e,a){var r={};return e.forEach((function(e){r[e.name]=e})),a.filter((function(e){var a=r[e.fieldName];return!!a&&(e.alias=a.label,e.decimals=a.decimals,!0)}))}};return t}));