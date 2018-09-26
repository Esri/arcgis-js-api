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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","./_Util","../../../sections/SectionTypes"],function(e,a,n){function t(a,n,t,s){var l=e.clone(t);return l.field+="_"+s,n.push(l),a.style.width+=l.style.width,a.data.data.forEach(function(a,n){a.style.fields[l.field]=e.clone(a.style.fields[t.field]);var s=a.fieldInfos[t.field];s&&(a.fieldInfos[l.field]=e.clone(s))}),l}var s={};return s.buildForVariablesInRows=function(e,s,l){var i=s.thisAreas,r=s.shownGeographiesInGroup,o=[],u=s.groups,d=[],f=[],h=[],c=[],p=[];p.push(e.data.columns.shift());for(var m=e.data.columns.length-l.numLevels,v=[],g=0;g<m;g++)v.push(e.data.columns.shift());return i.forEach(function(a,n){if(a){var s=v[n%v.length];if(o.push(a),0===n)p.push(s),s.currentFeatureIndex=n;else{t(e,p,s,"thisArea"+n).currentFeatureIndex=n}}}),e.data.columns.forEach(function(a,n){var s=r[n];if(s){o.push(s),c.push(s);var i=s.StdGeographyLevel,f=l.additionalColumnsCache[i],h=u[i];d.push(h),p.push(a),f&&f.forEach(function(n){var s=h.cache[n];s&&(o.push(s.attributes),c.push(s.attributes),d.push({label:h.label,levelId:h.levelId,isRemovable:!0,additionalFeatureId:n,features:[s]}),t(e,p,a,n))})}}),e.data.columns=p,1===p.length?null:(e.data.columns.forEach(function(n,t){if(0===t){var s=e.data.columns[1];return void e.data.data.forEach(function(e,t){if(0!==t){f.push({label:e[n.field],points:[]});var l=e.fieldInfos[s.field];h.push({label:e[n.field],name:l.name,decimals:l.decimals,formatFunction:function(e){return a.valueFormatFunction(e,l)}})}})}var l=o[t-1];n.__attributes=l,e.data.data.forEach(function(e,t){0!==t&&f[t-1].points.push({label:l.StdGeographyName,value:a.setValueToGridData(l,e,n.field)})})}),{sectionJson:{type:n.DETAILS,stack:[e]},groups:d,chartSeriesItems:f,fields:h,ranges:s.ranges,numThisAreas:s.numThisAreas,numAreasTotal:s.numAreasTotal,numAreasShown:s.numAreasShown,geographiesInTable:c,allGeographies:s.allGeographies})},s});