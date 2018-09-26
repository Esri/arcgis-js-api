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

define(["esri/dijit/geoenrichment/utils/SortUtil"],function(n){"use strict";function r(n,r){var t={};return(r||[]).forEach(function(r){var a=0,i=0;n.forEach(function(n){var t=null==n[r]?NaN:+n[r];isNaN(t)||(a++,i+=t)}),t[r]=a?i/a:NaN}),t}function t(r,t){var a={};return(t||[]).forEach(function(t){var i=[];if(r.forEach(function(n){var r=null==n[t]?NaN:+n[t];!isNaN(r)&&i.push(r)}),i.length){i.sort(n.compareNumeric);var e=Math.floor(i.length/2);a[t]=i.length!==2*e?i[e]:(i[e-1]+i[e])/2}else a[t]=NaN}),a}var a={USE_AVERAGE_VALUES:"averageOfSites",USE_MEDIAN_VALUES:"medianOfSites",calculateStatisticalComparison:function(n,i,e){return(e===a.USE_MEDIAN_VALUES?t:r)(n,i)}};return a});