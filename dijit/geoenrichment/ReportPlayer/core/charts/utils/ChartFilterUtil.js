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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ObjectUtil","./ChartTypes","./builder/utils/ChartDataUtil"],function(e,t,n,i){var r={};return r.collectStatsForVariables=function(e,n,r){var o=0,a={min:1/0,max:-1/0,decimals:0,dataArray:[]};return e.forEach(function(e){e.points.forEach(function(e){var s=i.getPointValue({point:e,viewModel:n,currentFeatureIndex:r});a.min=Math.min(a.min,s),a.max=Math.max(a.max,s),a.decimals=Math.max(a.decimals,t.getPlaces(s)),a.dataArray.push(s),o++})}),{filterRanges:[a],numVariablesTotal:o}},r.filterSeriesItems=function(e,t,n,i,o,a){return a?r._filterAreas(e,t,n,i):r._filterVariables(e,t,n,i,o)},r._filterAreas=function(t,r,o,a){var s,f=0,u={};if(o.forEach(function(e){u[e.fieldName]=e}),n.isLineLike(t))s=r.filter(function(e,t){return!e.points.some(function(e){var n=i.getPointValue({point:e,viewModel:a,currentFeatureIndex:t}),r=u[e.fieldInfo.name];return n<r.min||n>r.max})}),f=s.length,s.length||(s.__firstSeriesItem=r[0]);else{var l={};r.forEach(function(e){e.points.forEach(function(e,t){if(!l[t]){var n=i.getPointValue({point:e,viewModel:a,currentFeatureIndex:t}),r=u[e.fieldInfo.name];(n<r.min||n>r.max)&&(l[t]=!0)}})}),s=r.map(function(t){return t=e.mixin({},t),t.__firstPoint=t.points[0],t.points=t.points.filter(function(e,t){return!l[t]}),f=t.points.length,t})}return{seriesItems:s,numShownElements:f}},r._filterVariables=function(t,n,r,o,a){var s,f=0,u=r[0],s=[],l=n.length>1;if(n.forEach(function(t){seriesItemCopy=e.mixin({},t),seriesItemCopy.points=[],t.points.forEach(function(t){var n=i.getPointValue({point:t,viewModel:o,currentFeatureIndex:a});if(n<u.min||n>u.max){if(l){var r=e.mixin({},t);r.hidden=!0,seriesItemCopy.points.push(r)}}else seriesItemCopy.points.push(t)}),l?s.push(seriesItemCopy):seriesItemCopy.points.length&&s.push(seriesItemCopy)}),l){var c=0;s.forEach(function(e){c=Math.max(c,e.points.length)});for(var m=0;m<c;m++){s.every(function(e){var t=e.points[m];return!t||t.hidden})&&s.forEach(function(e){var t=e.points[m];t&&(t._toRemove=!0)})}s=s.filter(function(e){return e.points=e.points.filter(function(e){return!e._toRemove}),e.points.length})}return s.forEach(function(e){e.points.forEach(function(e){e.hidden||f++})}),{seriesItems:s,numShownElements:f}},r.getFirstSeriesPoint=function(e){return e.__firstPoint},r.getFirstSeriesItem=function(e){return e.__firstSeriesItem},r});