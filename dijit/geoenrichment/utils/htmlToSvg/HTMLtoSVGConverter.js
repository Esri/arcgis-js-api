// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/when","./supportClasses/imageUtils/ImageReplacer","./supportClasses/imageUtils/ImageOptimizer","./supportClasses/NodeProcessor","./supportClasses/SVGBuilder"],function(e,i,t,s,r){var o={htmlToSvg:function(o,n){var a=(new Date).getTime();return n=n||{},n.definitions=n.definitions||[],n.fitParams=n.fitParams||{},e(i.replaceImagesWithDataURL(o),function(){return e(s.processNode(o,n),function(i){var s=r.buildSVG(i,o,n);return e(t.optimizeSize([s],n.sizeLimit),function(e){return console.log("HTMLtoSVGConverter: conversion time: "+Number(((new Date).getTime()-a)/1e3).toFixed(3)+" s."),e[0]})})})}};return o});