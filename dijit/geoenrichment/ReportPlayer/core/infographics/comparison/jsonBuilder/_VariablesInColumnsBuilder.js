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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","./_Util","../../../sections/SectionTypes","../../../grid/coreUtils/sorting/GridRowStyler"],(function(a,e,t,r){var s={buildForVariablesInColumns:function(s,n,i){var l=n.thisAreas,o=n.shownGeographiesInGroup,u=[],d=n.groups,h=[],f=[],c=[],p=[],m=[],v=!1,g=s.data.data.slice();g.shift();var b=r.getStyleInfo(g,s.data.columns);m.push(s.data.data.shift());for(var I=s.data.data.length-i.numLevels,A=[],S=0;S<I;S++)A.push(s.data.data.shift());if(l.forEach((function(e,t){if(e){var r=A[t%A.length];if(u.push(e),0===t)m.push(r),r.currentFeatureIndex=t;else{var s=a.clone(r);m.push(s),s.currentFeatureIndex=t,v=!0}}})),s.data.data.forEach((function(e,t){var r=o[t];if(r){u.push(r),p.push(r);var s=r.StdGeographyLevel,n=i.additionalColumnsCache[s],l=d[s];h.push(l),m.push(e),n&&n.forEach((function(t){var r=l.cache[t];if(r){u.push(r.attributes),p.push(r.attributes),h.push({label:l.label,levelId:l.levelId,isRemovable:!0,additionalFeatureId:t,features:[r]});var s=a.clone(e);m.push(s),v=!0}}))}})),s.data.data=m,1===m.length)return null;if(v&&b){var G=s.data.data.slice();G.shift(),r.setAlternatingColors(G,s.data.columns,b,{forceOverrideOriginal:!0})}return s.data.data.forEach((function(a,t){if(0!==t){var r=u[t-1];a.__attributes=r,s.data.columns.forEach((function(t,s){0!==s&&f[s-1].points.push({label:r.StdGeographyName,value:e.setValueToGridData(r,a,t.field)})}))}else{var n=s.data.data[1];s.data.columns.forEach((function(t,r){if(0!==r){f.push({label:a[t.field],points:[]});var s=n.fieldInfos[t.field];c.push({label:a[t.field],name:s.name,decimals:s.decimals,formatFunction:function(a){return e.valueFormatFunction(a,s)}})}}))}})),{sectionJson:{type:t.DETAILS,stack:[s]},groups:h,chartSeriesItems:f,fields:c,ranges:n.ranges,numThisAreas:n.numThisAreas,numAreasTotal:n.numAreasTotal,numAreasShown:n.numAreasShown,geographiesInTable:p,allGeographies:n.allGeographies}}};return s}));