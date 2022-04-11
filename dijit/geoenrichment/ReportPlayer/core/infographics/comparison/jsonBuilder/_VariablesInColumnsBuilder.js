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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/lang","./_Util","../../../sections/SectionTypes","../../../grid/coreUtils/sorting/GridRowStyler"],(function(e,r,s,a){var n={buildForVariablesInColumns:function(n,o,i){var t=o.thisAreas,l=o.shownGeographiesInGroup,u=[],h=o.groups,f=[],c=[],p=[],d=[],m=[],v=!1,g=n.rows.slice();g.shift();var b=a.getStyleInfo(g,n.columns);m.push(n.rows.shift());for(var w=n.rows.length-i.numLevels,I=[],A=0;A<w;A++)I.push(n.rows.shift());if(t.forEach((function(r,s){if(r){var a=I[s%I.length];if(u.push(r),0===s)m.push(a),a.currentFeatureIndex=s;else{var n=e.clone(a);m.push(n),n.currentFeatureIndex=s,v=!0}}})),n.rows.forEach((function(r,s){var a=l[s];if(a){u.push(a),d.push(a);var n=a.StdGeographyLevel,o=i.additionalColumnsCache[n],t=h[n];f.push(t),m.push(r),o&&o.forEach((function(s){var a=t.cache[s];if(a){u.push(a.attributes),d.push(a.attributes),f.push({label:t.label,levelId:t.levelId,isRemovable:!0,additionalFeatureId:s,features:[a]});var n=e.clone(r);m.push(n),v=!0}}))}})),n.rows=m,1===m.length)return null;if(v&&b){var S=n.rows.slice();S.shift(),a.setAlternatingColors(S,n.columns,b,{forceOverrideOriginal:!0})}return n.rows.forEach((function(e,s){if(0!==s){var a=u[s-1];e.__attributes=a,n.columns.forEach((function(s,n){0!==n&&c[n-1].points.push({label:a.StdGeographyName,value:r.setValueToGridData(a,e,s.field)})}))}else{var o=n.rows[1];n.columns.forEach((function(s,a){if(0!==a){c.push({label:e[s.field],points:[]});var n=o.fieldInfos[s.field];p.push({label:e[s.field],name:n.name,decimals:n.decimals,formatFunction:function(e){return r.valueFormatFunction(e,n)}})}}))}})),{sectionJson:{type:s.DETAILS,stack:[n]},groups:f,chartSeriesItems:c,fields:p,ranges:o.ranges,numThisAreas:o.numThisAreas,numAreasTotal:o.numAreasTotal,numAreasShown:o.numAreasShown,geographiesInTable:d,allGeographies:o.allGeographies}}};return n}));