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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ObjectUtil","./ChartTypes","./builder/utils/ChartDataUtil"],(function(n,e,t,i){var r={collectStatsForVariables:function(n,t,r,o,a){var s=0,u={min:1/0,max:-1/0,decimals:0,dataArray:[]};return t.forEach((function(t,f){t.points.forEach((function(l,c){var m=i.getPointValue({point:l,viewModel:o,currentFeatureIndex:a,index:c,seriesIndex:f,chartType:n,visualProperties:r,numPoints:t.points.length});u.min=Math.min(u.min,m),u.max=Math.max(u.max,m),u.decimals=Math.max(u.decimals,e.getPlaces(m)),u.dataArray.push(m),s++}))})),{filterRanges:[u],numVariablesTotal:s}},filterSeriesItems:function(n,e,t,i,o,a,s){return s?r._filterAreas(n,e,i,o):r._filterVariables(n,e,t,i,o,a)},_filterAreas:function(e,r,o,a){var s,u=0,f={};if(o.forEach((function(n){f[n.fieldName]=n})),t.isLineLike(e))s=r.filter((function(n,e){return!n.points.some((function(n){var t=i.getPointValue({point:n,viewModel:a,currentFeatureIndex:e}),r=f[n.fieldInfo.name];return t<r.min||t>r.max}))})),u=s.length,s.length||(s.__firstSeriesItem=r[0]);else{var l={};r.forEach((function(n){n.points.forEach((function(n,e){if(!l[e]){var t=i.getPointValue({point:n,viewModel:a,currentFeatureIndex:e}),r=f[n.fieldInfo.name];(t<r.min||t>r.max)&&(l[e]=!0)}}))})),s=r.map((function(e){return(e=n.mixin({},e)).__firstPoint=e.points[0],e.points=e.points.filter((function(n,e){return!l[e]})),u=e.points.length,e}))}return{seriesItems:s,numShownElements:u}},_filterVariables:function(e,t,r,o,a,s){var u=0,f=o[0],l=[],c=t.length>1;if(t.forEach((function(t,o){var u=n.mixin({},t);u.points=[],t.points.forEach((function(l,m){l.originalIndex=m;var h=i.getPointValue({point:l,viewModel:a,currentFeatureIndex:s,index:m,seriesIndex:o,chartType:e,visualProperties:r,numPoints:t.points.length});if(h<f.min||h>f.max){if(c){var p=n.mixin({},l);p.hidden=!0,u.points.push(p)}}else u.points.push(l)})),c?l.push(u):u.points.length&&l.push(u)})),c){var m=0;l.forEach((function(n){m=Math.max(m,n.points.length)}));for(var h=0;h<m;h++){l.every((function(n){var e=n.points[h];return!e||e.hidden}))&&l.forEach((function(n){var e=n.points[h];e&&(e._toRemove=!0)}))}l=l.filter((function(n){return n.points=n.points.filter((function(n){return!n._toRemove})),n.points.length}))}return l.forEach((function(n){n.points.forEach((function(n){n.hidden||u++}))})),{seriesItems:l,numShownElements:u}},getFirstSeriesPoint:function(n){return n.__firstPoint},getFirstSeriesItem:function(n){return n.__firstSeriesItem}};return r}));