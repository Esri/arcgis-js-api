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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),e.tAscensionZoomPan=function(o,e,n){var a=e-o.compared.sourceZoom,i=o.halfWindowPanAtZoom(a);return-o.halfWindowSize*(n.ascensionFactor*Math.LN2*o.compared.pan+i)*Math.log(o.compared.sourceZoom/e)/(o.desiredPixelFlow*Math.LN2*i)},e.dtAscensionZoomPan=function(o,e,n){var a=1/e,i=Math.log(o.compared.sourceZoom*a),t=1/o.desiredPixelFlow,d=1/Math.LN2,r=e-o.compared.sourceZoom,c=1/r,l=(n.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(r))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*a*t*d*c*l-o.halfWindowSize*i*t*d*c+o.halfWindowSize*i*t*d*l/(r*r)},e.ddtAscensionZoomPan=function(o,e,n){var a=e-o.compared.sourceZoom,i=1/a,t=1/e,d=Math.log(o.compared.sourceZoom*t),r=(n.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(a))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*i*(-2*i*t*r+2*i*d+2*t-2*d*r/(a*a)-r/(e*e))/(o.desiredPixelFlow*Math.LN2)},e.tAscensionZoomOnly=function(o,e){return-o.halfWindowSize*Math.log(o.compared.sourceZoom/e)/(o.desiredPixelFlow*Math.LN2)},e.dtAscensionZoomOnly=function(o,e){return o.halfWindowSize/(e*o.desiredPixelFlow*Math.LN2)},e.ddtAscensionZoomOnly=function(o,e){return-o.halfWindowSize/(e*e*o.desiredPixelFlow*Math.LN2)},e.tPanion=function(o,e,n){return-o.compared.pan*o.halfWindowSize*(n.ascensionFactor+n.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(e))},e.dtPanion=function(o,e,n){return o.compared.pan*o.halfWindowSize*(n.ascensionFactor+n.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(e*e))},e.ddtPanion=function(o,e,n){return-2*o.compared.pan*o.halfWindowSize*(n.ascensionFactor+n.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(e*e*e))},e.tDescensionZoomPan=function(o,e,n){return o.halfWindowSize*(-o.halfWindowPanAtZoom(e)-n.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))*Math.log(e/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*o.halfWindowPanAtZoom(-e+o.compared.targetZoom))},e.dtDescensionZoomPan=function(o,e,n){var a=Math.log(e/o.compared.targetZoom),i=1/o.desiredPixelFlow,t=1/Math.LN2,d=-e+o.compared.targetZoom,r=1/d,c=(-o.halfWindowPanAtZoom(e)-n.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return-o.halfWindowSize*a*i*t*r+o.halfWindowSize*a*i*t*c/(d*d)+o.halfWindowSize*i*t*r*c/e},e.ddtDescensionZoomPan=function(o,e,n){var a=e-o.compared.targetZoom,i=1/a,t=1/e,d=Math.log(e/o.compared.targetZoom),r=(o.halfWindowPanAtZoom(e)+n.descensionFactor*Math.LN2*o.compared.pan-o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*i*(-2*i*t*r-2*i*d+2*t+2*d*r/(a*a)-r/(e*e))/(o.desiredPixelFlow*Math.LN2)},e.tDescensionZoomOnly=function(o,e){return o.halfWindowSize*Math.log(e/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2)},e.dtDescensionZoomOnly=function(o,e){return o.halfWindowSize/(e*o.desiredPixelFlow*Math.LN2)},e.ddtDescensionZoomOnly=function(o,e){return-o.halfWindowSize/(e*e*o.desiredPixelFlow*Math.LN2)},e.tBaseLine=function(o){var e=Math.LN2*o.compared.pan,n=o.compared.sourceZoom-o.compared.targetZoom,a=o.halfWindowPanAtZoom(n),i=o.halfWindowSize*Math.log(o.compared.sourceZoom/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*a);return o.compared.sourceZoom<=o.compared.targetZoom?i*(e-a):i*(e+a)}}));