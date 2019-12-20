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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ObjectUtil","./ChartTypes","./builder/utils/ChartDataUtil"],function(e,t,n,i){var r={};return r.collectStatsForVariables=function(e,n,r,o,s){var a=0,u={min:1/0,max:-1/0,decimals:0,dataArray:[]};return n.forEach(function(n,f){n.points.forEach(function(l,c){var m=i.getPointValue({point:l,viewModel:o,currentFeatureIndex:s,index:c,seriesIndex:f,chartType:e,visualProperties:r,numPoints:n.points.length});u.min=Math.min(u.min,m),u.max=Math.max(u.max,m),u.decimals=Math.max(u.decimals,t.getPlaces(m)),u.dataArray.push(m),a++})}),{filterRanges:[u],numVariablesTotal:a}},r.filterSeriesItems=function(e,t,n,i,o,s,a){return a?r._filterAreas(e,t,i,o):r._filterVariables(e,t,n,i,o,s)},r._filterAreas=function(t,r,o,s){var a,u=0,f={};if(o.forEach(function(e){f[e.fieldName]=e}),n.isLineLike(t))a=r.filter(function(e,t){return!e.points.some(function(e){var n=i.getPointValue({point:e,viewModel:s,currentFeatureIndex:t}),r=f[e.fieldInfo.name];return n<r.min||n>r.max})}),u=a.length,a.length||(a.__firstSeriesItem=r[0]);else{var l={};r.forEach(function(e){e.points.forEach(function(e,t){if(!l[t]){var n=i.getPointValue({point:e,viewModel:s,currentFeatureIndex:t}),r=f[e.fieldInfo.name];(n<r.min||n>r.max)&&(l[t]=!0)}})}),a=r.map(function(t){return t=e.mixin({},t),t.__firstPoint=t.points[0],t.points=t.points.filter(function(e,t){return!l[t]}),u=t.points.length,t})}return{seriesItems:a,numShownElements:u}},r._filterVariables=function(t,n,r,o,s,a){var u,f=0,l=o[0],u=[],c=n.length>1;if(n.forEach(function(n,o){seriesItemCopy=e.mixin({},n),seriesItemCopy.points=[],n.points.forEach(function(u,f){u.originalIndex=f;var m=i.getPointValue({point:u,viewModel:s,currentFeatureIndex:a,index:f,seriesIndex:o,chartType:t,visualProperties:r,numPoints:n.points.length});if(m<l.min||m>l.max){if(c){var p=e.mixin({},u);p.hidden=!0,seriesItemCopy.points.push(p)}}else seriesItemCopy.points.push(u)}),c?u.push(seriesItemCopy):seriesItemCopy.points.length&&u.push(seriesItemCopy)}),c){var m=0;u.forEach(function(e){m=Math.max(m,e.points.length)});for(var p=0;p<m;p++){u.every(function(e){var t=e.points[p];return!t||t.hidden})&&u.forEach(function(e){var t=e.points[p];t&&(t._toRemove=!0)})}u=u.filter(function(e){return e.points=e.points.filter(function(e){return!e._toRemove}),e.points.length})}return u.forEach(function(e){e.points.forEach(function(e){e.hidden||f++})}),{seriesItems:u,numShownElements:f}},r.getFirstSeriesPoint=function(e){return e.__firstPoint},r.getFirstSeriesItem=function(e){return e.__firstSeriesItem},r});