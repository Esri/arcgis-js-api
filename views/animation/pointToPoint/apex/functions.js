// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(o,n){function e(o,n,e){var a=e-o.compared.sourceZoom,i=o.halfWindowPanAtZoom(a);return-o.halfWindowSize*(n.ascensionFactor*Math.LN2*o.compared.pan+i)*Math.log(o.compared.sourceZoom/e)/(o.desiredPixelFlow*Math.LN2*i)}function a(o,n,e){var a=1/e,i=Math.log(o.compared.sourceZoom*a),t=1/o.desiredPixelFlow,d=1/Math.LN2,r=e-o.compared.sourceZoom,c=1/r,m=(n.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(r))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*a*t*d*c*m-o.halfWindowSize*i*t*d*c+o.halfWindowSize*i*t*d*m/(r*r)}function i(o,n,e){var a=e-o.compared.sourceZoom,i=1/a,t=1/e,d=Math.log(o.compared.sourceZoom*t),r=(n.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(a))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*i*(-2*i*t*r+2*i*d+2*t-2*d*r/(a*a)-r/(e*e))/(o.desiredPixelFlow*Math.LN2)}function t(o,n,e){return-o.halfWindowSize*Math.log(o.compared.sourceZoom/e)/(o.desiredPixelFlow*Math.LN2)}function d(o,n,e){return o.halfWindowSize/(e*o.desiredPixelFlow*Math.LN2)}function r(o,n,e){return-o.halfWindowSize/(e*e*o.desiredPixelFlow*Math.LN2)}function c(o,n,e){return-o.compared.pan*o.halfWindowSize*(n.ascensionFactor+n.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(e))}function m(o,n,e){return o.compared.pan*o.halfWindowSize*(n.ascensionFactor+n.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(e*e))}function l(o,n,e){return-2*o.compared.pan*o.halfWindowSize*(n.ascensionFactor+n.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(e*e*e))}function s(o,n,e){return o.halfWindowSize*(-o.halfWindowPanAtZoom(e)-n.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))*Math.log(e/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*o.halfWindowPanAtZoom(-e+o.compared.targetZoom))}function h(o,n,e){var a=Math.log(e/o.compared.targetZoom),i=1/o.desiredPixelFlow,t=1/Math.LN2,d=-e+o.compared.targetZoom,r=1/d,c=(-o.halfWindowPanAtZoom(e)-n.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return-o.halfWindowSize*a*i*t*r+o.halfWindowSize*a*i*t*c/(d*d)+o.halfWindowSize*i*t*r*c/e}function f(o,n,e){var a=e-o.compared.targetZoom,i=1/a,t=1/e,d=Math.log(e/o.compared.targetZoom),r=(o.halfWindowPanAtZoom(e)+n.descensionFactor*Math.LN2*o.compared.pan-o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*i*(-2*i*t*r-2*i*d+2*t+2*d*r/(a*a)-r/(e*e))/(o.desiredPixelFlow*Math.LN2)}function w(o,n,e){return o.halfWindowSize*Math.log(e/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2)}function Z(o,n,e){return o.halfWindowSize/(e*o.desiredPixelFlow*Math.LN2)}function p(o,n,e){return-o.halfWindowSize/(e*e*o.desiredPixelFlow*Math.LN2)}function u(o){var n=Math.LN2*o.compared.pan,e=o.compared.sourceZoom-o.compared.targetZoom,a=o.halfWindowPanAtZoom(e),i=o.halfWindowSize*Math.log(o.compared.sourceZoom/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*a);return o.compared.sourceZoom<=o.compared.targetZoom?i*(n-a):i*(n+a)}n.tAscensionZoomPan=e,n.dtAscensionZoomPan=a,n.ddtAscensionZoomPan=i,n.tAscensionZoomOnly=t,n.dtAscensionZoomOnly=d,n.ddtAscensionZoomOnly=r,n.tPanion=c,n.dtPanion=m,n.ddtPanion=l,n.tDescensionZoomPan=s,n.dtDescensionZoomPan=h,n.ddtDescensionZoomPan=f,n.tDescensionZoomOnly=w,n.dtDescensionZoomOnly=Z,n.ddtDescensionZoomOnly=p,n.tBaseLine=u});