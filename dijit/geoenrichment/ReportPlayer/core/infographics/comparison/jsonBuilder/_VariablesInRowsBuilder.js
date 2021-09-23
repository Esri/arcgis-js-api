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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","./_Util","../../../sections/SectionTypes"],(function(e,s,n){var a={};function l(s,n,a,l){var o=e.clone(a);return o.field+="_"+l,n.push(o),s.style.width+=o.style.width,s.rows.forEach((function(s,n){s.style.fields[o.field]=e.clone(s.style.fields[a.field]);var l=s.fieldInfos[a.field];l&&(s.fieldInfos[o.field]=e.clone(l))})),o}return a.buildForVariablesInRows=function(e,a,o){var r=a.thisAreas,i=a.shownGeographiesInGroup,t=[],u=a.groups,f=[],h=[],c=[],d=[],p=[];e.columns.forEach((function(s,n){n>0&&delete e.rows[0][s.field]})),p.push(e.columns.shift());for(var m=e.columns.length-o.numLevels,v=[],g=0;g<m;g++)v.push(e.columns.shift());return r.forEach((function(s,n){if(s){var a=v[n%v.length];if(t.push(s),0===n)p.push(a),a.currentFeatureIndex=n;else l(e,p,a,"thisArea"+n).currentFeatureIndex=n}})),e.columns.forEach((function(s,n){var a=i[n];if(a){t.push(a),d.push(a);var r=a.StdGeographyLevel,h=o.additionalColumnsCache[r],c=u[r];f.push(c),p.push(s),h&&h.forEach((function(n){var a=c.cache[n];a&&(t.push(a.attributes),d.push(a.attributes),f.push({label:c.label,levelId:c.levelId,isRemovable:!0,additionalFeatureId:n,features:[a]}),l(e,p,s,n))}))}})),e.columns=p,1===p.length?null:(e.columns.forEach((function(n,a){if(0!==a){var l=t[a-1];n.__attributes=l,e.rows.forEach((function(e,a){0!==a&&h[a-1].points.push({label:l.StdGeographyName,value:s.setValueToGridData(l,e,n.field)})}))}else{var o=e.columns[1];e.rows.forEach((function(e,a){if(0!==a){h.push({label:e[n.field],points:[]});var l=e.fieldInfos[o.field];c.push({label:e[n.field],name:l.name,decimals:l.decimals,formatFunction:function(e){return s.valueFormatFunction(e,l)}})}}))}})),{sectionJson:{type:n.DETAILS,stack:[e]},groups:f,chartSeriesItems:h,fields:c,ranges:a.ranges,numThisAreas:a.numThisAreas,numAreasTotal:a.numAreasTotal,numAreasShown:a.numAreasShown,geographiesInTable:d,allGeographies:a.allGeographies})},a}));