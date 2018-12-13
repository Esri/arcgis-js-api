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

define(["dojo/_base/lang","./ChartTypes","./builder/utils/ChartDataUtil"],function(e,n,t){var i={};return i.filterSeriesItems=function(i,r,o,f){var s,u=0,a={};if(o.forEach(function(e){a[e.fieldName]=e}),n.isLineLike(i))s=r.filter(function(e,n){return!e.points.some(function(e){var i=t.getPointValue({point:e,viewModel:f,currentFeatureIndex:n}),r=a[e.fieldInfo.name];return i<r.min||i>r.max})}),u=s.length,s.length||(s.__firstSeriesItem=r[0]);else{var l={};r.forEach(function(e){e.points.forEach(function(e,n){if(!l[n]){var i=t.getPointValue({point:e,viewModel:f,currentFeatureIndex:n}),r=a[e.fieldInfo.name];(i<r.min||i>r.max)&&(l[n]=!0)}})}),s=r.map(function(n){return n=e.mixin({},n),n.__firstPoint=n.points[0],n.points=n.points.filter(function(e,n){return!l[n]}),u=n.points.length,n})}return{seriesItems:s,numShownAreas:u}},i.getFirstSeriesPoint=function(e){return e.__firstPoint},i.getFirstSeriesItem=function(e){return e.__firstSeriesItem},i});