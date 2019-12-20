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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","./_Util","../../../sections/SectionTypes"],function(a,e,t){function n(e,t,n,s){var l=a.clone(n);return l.field+="_"+s,t.push(l),e.style.width+=l.style.width,e.data.data.forEach(function(e,t){e.style.fields[l.field]=a.clone(e.style.fields[n.field]);var s=e.fieldInfos[n.field];s&&(e.fieldInfos[l.field]=a.clone(s))}),l}var s={};return s.buildForVariablesInRows=function(a,s,l){var i=s.thisAreas,o=s.shownGeographiesInGroup,r=[],u=s.groups,d=[],f=[],h=[],c=[],p=[];a.data.columns.forEach(function(e,t){t>0&&delete a.data.data[0][e.field]}),p.push(a.data.columns.shift());for(var m=a.data.columns.length-l.numLevels,v=[],g=0;g<m;g++)v.push(a.data.columns.shift());return i.forEach(function(e,t){if(e){var s=v[t%v.length];if(r.push(e),0===t)p.push(s),s.currentFeatureIndex=t;else{n(a,p,s,"thisArea"+t).currentFeatureIndex=t}}}),a.data.columns.forEach(function(e,t){var s=o[t];if(s){r.push(s),c.push(s);var i=s.StdGeographyLevel,f=l.additionalColumnsCache[i],h=u[i];d.push(h),p.push(e),f&&f.forEach(function(t){var s=h.cache[t];s&&(r.push(s.attributes),c.push(s.attributes),d.push({label:h.label,levelId:h.levelId,isRemovable:!0,additionalFeatureId:t,features:[s]}),n(a,p,e,t))})}}),a.data.columns=p,1===p.length?null:(a.data.columns.forEach(function(t,n){if(0===n){var s=a.data.columns[1];return void a.data.data.forEach(function(a,n){if(0!==n){f.push({label:a[t.field],points:[]});var l=a.fieldInfos[s.field];h.push({label:a[t.field],name:l.name,decimals:l.decimals,formatFunction:function(a){return e.valueFormatFunction(a,l)}})}})}var l=r[n-1];t.__attributes=l,a.data.data.forEach(function(a,n){0!==n&&f[n-1].points.push({label:l.StdGeographyName,value:e.setValueToGridData(l,a,t.field)})})}),{sectionJson:{type:t.DETAILS,stack:[a]},groups:d,chartSeriesItems:f,fields:h,ranges:s.ranges,numThisAreas:s.numThisAreas,numAreasTotal:s.numAreasTotal,numAreasShown:s.numAreasShown,geographiesInTable:c,allGeographies:s.allGeographies})},s});