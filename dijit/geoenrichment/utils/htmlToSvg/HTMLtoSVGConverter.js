// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/FitUtil","./supportClasses/imageUtils/ImageReplacer","./supportClasses/imageUtils/ImageOptimizer","./supportClasses/NodeProcessor","./supportClasses/SVGBuilder","./supportClasses/text/TextMeasurer"],(function(e,t,i,r,s,n,o,a,l){var m=e(null,{htmlToSvg:function(e,l){(l=l||{}).definitions=l.definitions||[],l.fitParams=l.fitParams||{};var m={x:i.getStyle(e,"left")||0,y:i.getStyle(e,"top")||0,w:e.offsetWidth,h:e.offsetHeight};return l.fitScale=r.fitBox(m,{w:l.fitParams&&l.fitParams.w||m.w,h:l.fitParams&&l.fitParams.h||m.h}).ratio,t(s.replaceImagesWithDataURL(e,{convertUrlImages:l.convertUrlImages,hideUrlImages:l.hideUrlImages,getItemResourceUrl:l.getItemResourceUrl}),(function(){return t(o.processNode(e,l),(function(i){var r=a.buildSVG(i,e,l);return t(n.optimizeSize([r],l.sizeLimit),(function(e){return e[0]}))}))}))}}),u={_numRunningTasks:0,htmlToSvg:function(e,t){var i=(new Date).getTime();return u._numRunningTasks++,(new m).htmlToSvg(e,t).then((function(e){return console.log("HTMLtoSVGConverter: conversion time: "+Number(((new Date).getTime()-i)/1e3).toFixed(3)+" s."),--u._numRunningTasks||l.cleanUp(),e}))}};return u}));