// COPYRIGHT © 2020 Esri
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

define(["dojo/_base/lang","./_Util","../../../sections/SectionTypes"],(function(e,a,t){var n={};function s(a,t,n,s){var l=e.clone(n);return l.field+="_"+s,t.push(l),a.style.width+=l.style.width,a.data.data.forEach((function(a,t){a.style.fields[l.field]=e.clone(a.style.fields[n.field]);var s=a.fieldInfos[n.field];s&&(a.fieldInfos[l.field]=e.clone(s))})),l}return n.buildForVariablesInRows=function(e,n,l){var i=n.thisAreas,o=n.shownGeographiesInGroup,r=[],u=n.groups,d=[],f=[],h=[],c=[],p=[];e.data.columns.forEach((function(a,t){t>0&&delete e.data.data[0][a.field]})),p.push(e.data.columns.shift());for(var m=e.data.columns.length-l.numLevels,v=[],g=0;g<m;g++)v.push(e.data.columns.shift());return i.forEach((function(a,t){if(a){var n=v[t%v.length];if(r.push(a),0===t)p.push(n),n.currentFeatureIndex=t;else s(e,p,n,"thisArea"+t).currentFeatureIndex=t}})),e.data.columns.forEach((function(a,t){var n=o[t];if(n){r.push(n),c.push(n);var i=n.StdGeographyLevel,f=l.additionalColumnsCache[i],h=u[i];d.push(h),p.push(a),f&&f.forEach((function(t){var n=h.cache[t];n&&(r.push(n.attributes),c.push(n.attributes),d.push({label:h.label,levelId:h.levelId,isRemovable:!0,additionalFeatureId:t,features:[n]}),s(e,p,a,t))}))}})),e.data.columns=p,1===p.length?null:(e.data.columns.forEach((function(t,n){if(0!==n){var s=r[n-1];t.__attributes=s,e.data.data.forEach((function(e,n){0!==n&&f[n-1].points.push({label:s.StdGeographyName,value:a.setValueToGridData(s,e,t.field)})}))}else{var l=e.data.columns[1];e.data.data.forEach((function(e,n){if(0!==n){f.push({label:e[t.field],points:[]});var s=e.fieldInfos[l.field];h.push({label:e[t.field],name:s.name,decimals:s.decimals,formatFunction:function(e){return a.valueFormatFunction(e,s)}})}}))}})),{sectionJson:{type:t.DETAILS,stack:[e]},groups:d,chartSeriesItems:f,fields:h,ranges:n.ranges,numThisAreas:n.numThisAreas,numAreasTotal:n.numAreasTotal,numAreasShown:n.numAreasShown,geographiesInTable:c,allGeographies:n.allGeographies})},n}));
