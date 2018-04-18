// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports"],function(o,e){function n(o,e,n){var a=n-o.compared.sourceZoom,i=o.halfWindowPanAtZoom(a);return-o.halfWindowSize*(e.ascensionFactor*Math.LN2*o.compared.pan+i)*Math.log(o.compared.sourceZoom/n)/(o.desiredPixelFlow*Math.LN2*i)}function a(o,e,n){var a=1/n,i=Math.log(o.compared.sourceZoom*a),t=1/o.desiredPixelFlow,d=1/Math.LN2,r=n-o.compared.sourceZoom,c=1/r,l=(e.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(r))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*a*t*d*c*l-o.halfWindowSize*i*t*d*c+o.halfWindowSize*i*t*d*l/(r*r)}function i(o,e,n){var a=n-o.compared.sourceZoom,i=1/a,t=1/n,d=Math.log(o.compared.sourceZoom*t),r=(e.ascensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(a))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*i*(-2*i*t*r+2*i*d+2*t-2*d*r/(a*a)-r/(n*n))/(o.desiredPixelFlow*Math.LN2)}function t(o,e,n){return-o.halfWindowSize*Math.log(o.compared.sourceZoom/n)/(o.desiredPixelFlow*Math.LN2)}function d(o,e,n){return o.halfWindowSize/(n*o.desiredPixelFlow*Math.LN2)}function r(o,e,n){return-o.halfWindowSize/(n*n*o.desiredPixelFlow*Math.LN2)}function c(o,e,n){return-o.compared.pan*o.halfWindowSize*(e.ascensionFactor+e.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(n))}function l(o,e,n){return o.compared.pan*o.halfWindowSize*(e.ascensionFactor+e.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(n*n))}function m(o,e,n){return-2*o.compared.pan*o.halfWindowSize*(e.ascensionFactor+e.descensionFactor-1)/(o.desiredPixelFlow*o.halfWindowPanAtZoom(n*n*n))}function s(o,e,n){return o.halfWindowSize*(-o.halfWindowPanAtZoom(n)-e.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))*Math.log(n/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*o.halfWindowPanAtZoom(-n+o.compared.targetZoom))}function h(o,e,n){var a=Math.log(n/o.compared.targetZoom),i=1/o.desiredPixelFlow,t=1/Math.LN2,d=-n+o.compared.targetZoom,r=1/d,c=(-o.halfWindowPanAtZoom(n)-e.descensionFactor*Math.LN2*o.compared.pan+o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return-o.halfWindowSize*a*i*t*r+o.halfWindowSize*a*i*t*c/(d*d)+o.halfWindowSize*i*t*r*c/n}function f(o,e,n){var a=n-o.compared.targetZoom,i=1/a,t=1/n,d=Math.log(n/o.compared.targetZoom),r=(o.halfWindowPanAtZoom(n)+e.descensionFactor*Math.LN2*o.compared.pan-o.halfWindowPanAtZoom(o.compared.targetZoom))/o.halfWindowPanAtZoom(1);return o.halfWindowSize*i*(-2*i*t*r-2*i*d+2*t+2*d*r/(a*a)-r/(n*n))/(o.desiredPixelFlow*Math.LN2)}function w(o,e,n){return o.halfWindowSize*Math.log(n/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2)}function Z(o,e,n){return o.halfWindowSize/(n*o.desiredPixelFlow*Math.LN2)}function u(o,e,n){return-o.halfWindowSize/(n*n*o.desiredPixelFlow*Math.LN2)}function p(o){var e=Math.LN2*o.compared.pan,n=o.compared.sourceZoom-o.compared.targetZoom,a=o.halfWindowPanAtZoom(n),i=o.halfWindowSize*Math.log(o.compared.sourceZoom/o.compared.targetZoom)/(o.desiredPixelFlow*Math.LN2*a);return o.compared.sourceZoom<=o.compared.targetZoom?i*(e-a):i*(e+a)}Object.defineProperty(e,"__esModule",{value:!0}),e.tAscensionZoomPan=n,e.dtAscensionZoomPan=a,e.ddtAscensionZoomPan=i,e.tAscensionZoomOnly=t,e.dtAscensionZoomOnly=d,e.ddtAscensionZoomOnly=r,e.tPanion=c,e.dtPanion=l,e.ddtPanion=m,e.tDescensionZoomPan=s,e.dtDescensionZoomPan=h,e.ddtDescensionZoomPan=f,e.tDescensionZoomOnly=w,e.dtDescensionZoomOnly=Z,e.ddtDescensionZoomOnly=u,e.tBaseLine=p});