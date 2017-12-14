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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./functions"],function(n,o,e){function a(n,o){var a,t=i(n,o),s={ascensionFactor:null!=o.ascensionFactor?o.ascensionFactor:.5,descensionFactor:null!=o.descensionFactor?o.descensionFactor:.5},c=0===s.ascensionFactor,r=0===s.descensionFactor,m=c?e.tAscensionZoomOnly:e.tAscensionZoomPan,u=c?e.dtAscensionZoomOnly:e.dtAscensionZoomPan,d=c?e.ddtAscensionZoomOnly:e.ddtAscensionZoomPan,l=r?e.tDescensionZoomOnly:e.tDescensionZoomPan,Z=r?e.dtDescensionZoomOnly:e.dtDescensionZoomPan,f=r?e.ddtDescensionZoomOnly:e.ddtDescensionZoomPan,P=function(o){return m(n,s,o)+e.tPanion(n,s,o)+l(n,s,o)},D=function(o){return u(n,s,o)+e.dtPanion(n,s,o)+Z(n,s,o)},p=function(o){return d(n,s,o)+e.ddtPanion(n,s,o)+f(n,s,o)},x=P(t),F=e.tBaseLine(n),y=o.maximumIterations||20,A=null!=o.maximumDistance?o.maximumDistance:1/0;for(a=0;y>a;a++){var O=1e-6,v=(D(t)+O)/p(t);if(isNaN(v)||t>=A&&0>v){if(!isFinite(A))return null;t=A,x=P(t);break}if(t-=v,t<n.compared.sourceZoom||t<n.compared.targetZoom)return null;var b=P(t);if(Math.abs(b-x)/x<=.005)break;x=b}var M=.3;return x>F*(1-M)?null:t<n.compared.sourceZoom||t<n.compared.targetZoom?null:t}function i(n,o){var e=Math.max(n.compared.sourceZoom,n.compared.targetZoom),a=n.source.zoomAtPixelsPerPan(n.desiredPixelFlow/n.compared.pan)/2;return e>a?null!=o.maximumDistance?e+(o.maximumDistance-e)/2:1.5*e:o.maximumDistance?Math.min(o.maximumDistance,a):a}Object.defineProperty(o,"__esModule",{value:!0}),o.optimalDistance=a});