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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","../../../dataProvider/commands/mapToImage/MapToImageUtil","esri/dijit/geoenrichment/utils/FileUtil","dojo/i18n!esri/nls/jsapi"],(function(e,a,n,t,r){r=r.geoenrichment.dijit.ReportPlayer.LocatorTableInfographic;var o={},i=function(e){return e.columns.map((function(a,n){var t,r=[];return e.rows.forEach((function(e,n){var o={value:e[a.field]||"",alignment:{horizontal:e.style.fields[a.field].horizontalAlign||"center"}};0===n?t=o:r.push(o)})),{header:t,values:r}}))};return o.prepareExportParameters=function(a){var n=r.locatorExportTitle,s={documentName:t.validateName((a.areaName?a.areaName+", ":"")+(a.layerName||n)),shortName:t.validateName((a.areaShortName?a.areaShortName+", ":"")+(a.layerName||n)),sheets:[{name:a.layerName||n,columns:i(a.sectionJson.stack[0]),floatingImages:[]}],sourceInfos:[]};return a.layerID&&s.sourceInfos.push({layerID:a.layerID,numFeatures:s.sheets[0].columns[0].values.length-1}),e(a.exportMaps&&o._exportMaps(s,a.mapInfos),(function(){return s}))},o._exportMaps=function(e,t){var r={},o=0;return a(t.map((function(a,t){return r[t]=Math.round(o/18),o+=a.node.clientHeight+50,n.mapInfoToDataUrl(a,{saveImagesAsDataUrl:!0}).then((function(n){e.sheets[0].floatingImages.push({fromColumnIndex:e.sheets[0].columns.length+2,fromRowIndex:1+r[t],width:a.node.clientWidth,height:a.node.clientHeight,dataUrl:n})}))})))},o}));