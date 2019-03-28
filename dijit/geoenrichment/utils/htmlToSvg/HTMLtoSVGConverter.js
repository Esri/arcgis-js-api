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

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","./supportClasses/imageUtils/ImageReplacer","./supportClasses/imageUtils/ImageOptimizer","./supportClasses/NodeProcessor","./supportClasses/SVGBuilder","./supportClasses/DomProcessor","./supportClasses/text/TextMeasurer"],function(e,n,s,t,i,r,o,a){var u=e(null,{htmlToSvg:function(e,o){return o=o||{},o.definitions=o.definitions||[],o.fitParams=o.fitParams||{},n(s.replaceImagesWithDataURL(e),function(){return n(i.processNode(e,o),function(s){var i=r.buildSVG(s,e,o);return n(t.optimizeSize([i],o.sizeLimit),function(e){return e[0]})})})}}),l={_numRunningTasks:0,htmlToSvg:function(e,n){var s=(new Date).getTime();return l._numRunningTasks++,(new u).htmlToSvg(e,n).then(function(e){return console.log("HTMLtoSVGConverter: conversion time: "+Number(((new Date).getTime()-s)/1e3).toFixed(3)+" s."),--l._numRunningTasks&&(o.cleanUp(),a.cleanUp()),e})}};return l});