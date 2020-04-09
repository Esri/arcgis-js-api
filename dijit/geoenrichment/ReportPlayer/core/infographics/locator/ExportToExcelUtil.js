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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","../../../dataProvider/commands/mapToImage/MapToImageUtil","esri/dijit/geoenrichment/utils/FileUtil","dojo/i18n!esri/nls/jsapi"],(function(e,a,t,n,r){r=r.geoenrichment.dijit.ReportPlayer.LocatorTableInfographic;var o={},i=function(e){return e.data.columns.map((function(a,t){var n,r=[];return e.data.data.forEach((function(e,t){var o={value:e[a.field]||"",alignment:{horizontal:e.style.fields[a.field].horizontalAlign||"center"}};0===t?n=o:r.push(o)})),{header:n,values:r}}))};return o.prepareExportParameters=function(a){var t=r.locatorExportTitle,s={documentName:n.validateName((a.areaName?a.areaName+", ":"")+(a.layerName||t)),shortName:n.validateName((a.areaShortName?a.areaShortName+", ":"")+(a.layerName||t)),sheets:[{name:a.layerName||t,columns:i(a.sectionJson.stack[0]),floatingImages:[]}],sourceInfos:[]};return a.layerID&&s.sourceInfos.push({layerID:a.layerID,numFeatures:s.sheets[0].columns[0].values.length-1}),e(a.exportMaps&&o._exportMaps(s,a.mapInfos),(function(){return s}))},o._exportMaps=function(e,n){var r={},o=0;return a(n.map((function(a,n){return r[n]=Math.round(o/18),o+=a.node.clientHeight+50,t.mapInfoToDataUrl(a,{saveImagesAsDataUrl:!0}).then((function(t){e.sheets[0].floatingImages.push({fromColumnIndex:e.sheets[0].columns.length+2,fromRowIndex:1+r[n],width:a.node.clientWidth,height:a.node.clientHeight,dataUrl:t})}))})))},o}));