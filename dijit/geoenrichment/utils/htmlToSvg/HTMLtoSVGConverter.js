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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/when","./supportClasses/imageUtils/ImageReplacer","./supportClasses/imageUtils/ImageOptimizer","./supportClasses/NodeProcessor","./supportClasses/SVGBuilder","./supportClasses/_Logger"],function(e,t,i,s,o,r){return{htmlToSvg:function(n,a){var u=(new Date).getTime();return r.setLogFunction(a.log),a=a||{},a.definitions=a.definitions||[],a.fitParams=a.fitParams||{},e(t.replaceImagesWithDataURL(n),function(){return e(s.processNode(n,a),function(t){var s=o.buildSVG(t,n,a);return e(i.optimizeSize([s],a.sizeLimit),function(e){return r.log("HTMLtoSVGConverter: conversion time: "+Number(((new Date).getTime()-u)/1e3).toFixed(3)+" s."),e[0]})})})}}});