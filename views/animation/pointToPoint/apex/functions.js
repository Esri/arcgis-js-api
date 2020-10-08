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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.tBaseLine=n.ddtDescensionZoomOnly=n.dtDescensionZoomOnly=n.tDescensionZoomOnly=n.ddtDescensionZoomPan=n.dtDescensionZoomPan=n.tDescensionZoomPan=n.ddtPanion=n.dtPanion=n.tPanion=n.ddtAscensionZoomOnly=n.dtAscensionZoomOnly=n.tAscensionZoomOnly=n.ddtAscensionZoomPan=n.dtAscensionZoomPan=n.tAscensionZoomPan=void 0,n.tAscensionZoomPan=function(o,n,e){var a=n-o.compared.sourceZoom,i=o.halfWindowPanAtZoom(a);return-o.halfWindowSize*(e.ascensionFactor*Math.LN2*o.compared.pan+i)*Math.log(o.compared.sourceZoom/n)/(o.desiredPixelFlow*Math.LN2*i)},n.dtAscensionZoomPan=function(o,n,e){var a=1/n,i=Math.log(o.compared.sourceZoom*a),t=1/o.desiredPixelFlow,d=1/Math.LN2,r=n-o.compared.sourceZoom,c=1/r,s=(e.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(r))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*a*t*d*c*s-o.halfWindowSize*i*t*d*c+o.halfWindowSize*i*t*d*s/(r*r)},n.ddtAscensionZoomPan=function(o,n,e){var a=n-o.compared.sourceZoom,i=1/a,t=1/n,d=Math.log(o.compared.sourceZoom*t),r=(e.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(a))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*i*(-2*i*t*r+2*i*d+2*t-2*d*r/(a*a)-r/(n*n))/(o.desiredPixelFlow*Math.LN2)},n.tAscensionZoomOnly=function(o,n){return-o.halfWindowSize*Math.log(o.compared.sourceZoom/n)/(o.desiredPixelFlow*Math.LN2)},n.dtAscensionZoomOnly=function(o,n){return o.halfWindowSize/(n*o.desiredPixelFlow*Math.LN2)},n.ddtAscensionZoomOnly=function(o,n){return-o.halfWindowSize/(n*n*o.desiredPixelFlow*Math.LN2)},n.tPanion=function(o,n,e){return-o.compared.pan*o.halfWindowSize*(e.ascensionFactor+e.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(n))},n.dtPanion=function(o,n,e){return o.compared.pan*o.halfWindowSize*(e.ascensionFactor+e.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(n*n))},n.ddtPanion=function(o,n,e){return-2*o.compared.pan*o.halfWindowSize*(e.ascensionFactor+e.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(n*n*n))},n.tDescensionZoomPan=function(o,n,e){return o.halfWindowSize*(-o.halfWindowPanAtZoom(n)-e.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))*Math.log(n/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*o.halfWindowPanAtZoom(-n+o.compared.targetZoom))},n.dtDescensionZoomPan=function(o,n,e){var a=Math.log(n/o.compared.targetZoom),i=1/o.desiredPixelFlow,t=1/Math.LN2,d=-n+o.compared.targetZoom,r=1/d,c=(-o.halfWindowPanAtZoom(n)-e.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return-o.halfWindowSize*a*i*t*r+o.halfWindowSize*a*i*t*c/(d*d)+o.halfWindowSize*i*t*r*c/n},n.ddtDescensionZoomPan=function(o,n,e){var a=n-o.compared.targetZoom,i=1/a,t=1/n,d=Math.log(n/o.compared.targetZoom),r=(o.halfWindowPanAtZoom(n)+e.descensionFactor*Math.LN2*o.compared.pan-o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*i*(-2*i*t*r-2*i*d+2*t+2*d*r/(a*a)-r/(n*n))/(o.desiredPixelFlow*Math.LN2)},n.tDescensionZoomOnly=function(o,n){return o.halfWindowSize*Math.log(n/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2)},n.dtDescensionZoomOnly=function(o,n){return o.halfWindowSize/(n*o.desiredPixelFlow*Math.LN2)},n.ddtDescensionZoomOnly=function(o,n){return-o.halfWindowSize/(n*n*o.desiredPixelFlow*Math.LN2)},n.tBaseLine=function(o){var n=Math.LN2*o.compared.pan,e=o.compared.sourceZoom-o.compared.targetZoom,a=o.halfWindowPanAtZoom(e),i=o.halfWindowSize*Math.log(o.compared.sourceZoom/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*a);return o.compared.sourceZoom<=o.compared.targetZoom?i*(n-a):i*(n+a)}}));