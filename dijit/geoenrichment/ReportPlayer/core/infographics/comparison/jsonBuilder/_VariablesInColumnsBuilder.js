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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","./_Util","../../../sections/SectionTypes","../../../grid/coreUtils/sorting/GridRowStyler"],function(a,e,t,r){var n={};return n.buildForVariablesInColumns=function(n,s,i){var o=s.thisAreas,l=s.shownGeographiesInGroup,u=[],d=s.groups,h=[],f=[],c=[],p=[],v=[],m=!1,g=n.data.data.slice();g.shift();var b=r.getStyleInfo(g,n.data.columns);v.push(n.data.data.shift());for(var I=n.data.data.length-i.numLevels,A=[],S=0;S<I;S++)A.push(n.data.data.shift());if(o.forEach(function(e,t){if(e){var r=A[t%A.length];if(u.push(e),0===t)v.push(r),r.currentFeatureIndex=t;else{var n=a.clone(r);v.push(n),n.currentFeatureIndex=t,m=!0}}}),n.data.data.forEach(function(e,t){var r=l[t];if(r){u.push(r),p.push(r);var n=r.StdGeographyLevel,s=i.additionalColumnsCache[n],o=d[n];h.push(o),v.push(e),s&&s.forEach(function(t){var r=o.cache[t];if(r){u.push(r.attributes),p.push(r.attributes),h.push({label:o.label,levelId:o.levelId,isRemovable:!0,additionalFeatureId:t,features:[r]});var n=a.clone(e);v.push(n),m=!0}})}}),n.data.data=v,1===v.length)return null;if(m&&b){var G=n.data.data.slice();G.shift(),r.setAlternatingColors(G,n.data.columns,b,{forceOverrideOriginal:!0})}return n.data.data.forEach(function(a,t){if(0===t){var r=n.data.data[1];return void n.data.columns.forEach(function(t,n){if(0!==n){f.push({label:a[t.field],points:[]});var s=r.fieldInfos[t.field];c.push({label:a[t.field],name:s.name,decimals:s.decimals,formatFunction:function(a){return e.valueFormatFunction(a,s)}})}})}var s=u[t-1];a.__attributes=s,n.data.columns.forEach(function(t,r){0!==r&&f[r-1].points.push({label:s.StdGeographyName,value:e.setValueToGridData(s,a,t.field)})})}),{sectionJson:{type:t.DETAILS,stack:[n]},groups:h,chartSeriesItems:f,fields:c,ranges:s.ranges,numThisAreas:s.numThisAreas,numAreasTotal:s.numAreasTotal,numAreasShown:s.numAreasShown,geographiesInTable:p,allGeographies:s.allGeographies}},n});