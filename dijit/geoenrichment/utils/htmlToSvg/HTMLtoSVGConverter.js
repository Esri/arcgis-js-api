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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","./supportClasses/imageUtils/ImageReplacer","./supportClasses/imageUtils/ImageOptimizer","./supportClasses/NodeProcessor","./supportClasses/SVGBuilder","./supportClasses/text/TextMeasurer"],(function(e,n,t,r,s,i,o){var a=e(null,{htmlToSvg:function(e,o){return(o=o||{}).definitions=o.definitions||[],o.fitParams=o.fitParams||{},n(t.replaceImagesWithDataURL(e,{convertUrlImages:o.convertUrlImages,hideUrlImages:o.hideUrlImages,getItemResourceUrl:o.getItemResourceUrl}),(function(){return n(s.processNode(e,o),(function(t){var s=i.buildSVG(t,e,o);return n(r.optimizeSize([s],o.sizeLimit),(function(e){return e[0]}))}))}))}}),u={_numRunningTasks:0,htmlToSvg:function(e,n){var t=(new Date).getTime();return u._numRunningTasks++,(new a).htmlToSvg(e,n).then((function(e){return console.log("HTMLtoSVGConverter: conversion time: "+Number(((new Date).getTime()-t)/1e3).toFixed(3)+" s."),--u._numRunningTasks||o.cleanUp(),e}))}};return u}));
