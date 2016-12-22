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

define(["require","exports","./functions"],function(n,o,e){function a(n,o){var a,s=i(n,o),t={ascensionFactor:null!=o.ascensionFactor?o.ascensionFactor:.5,descensionFactor:null!=o.descensionFactor?o.descensionFactor:.5},c=0===t.ascensionFactor,m=0===t.descensionFactor,r=c?e.tAscensionZoomOnly:e.tAscensionZoomPan,u=c?e.dtAscensionZoomOnly:e.dtAscensionZoomPan,d=c?e.ddtAscensionZoomOnly:e.ddtAscensionZoomPan,l=m?e.tDescensionZoomOnly:e.tDescensionZoomPan,Z=m?e.dtDescensionZoomOnly:e.dtDescensionZoomPan,f=m?e.ddtDescensionZoomOnly:e.ddtDescensionZoomPan,D=function(o){return r(n,t,o)+e.tPanion(n,t,o)+l(n,t,o)},P=function(o){return u(n,t,o)+e.dtPanion(n,t,o)+Z(n,t,o)},x=function(o){return d(n,t,o)+e.ddtPanion(n,t,o)+f(n,t,o)},p=D(s),F=e.tBaseLine(n),A=o.maximumIterations||20,y=null!=o.maximumDistance?o.maximumDistance:1/0;for(a=0;A>a;a++){var O=1e-6,v=(P(s)+O)/x(s);if(isNaN(v)||s>=y&&0>v){if(!isFinite(y))return null;s=y,p=D(s);break}if(s-=v,s<n.compared.sourceZoom||s<n.compared.targetZoom)return null;var b=D(s);if(Math.abs(b-p)/p<=.005)break;p=b}var g=.3;return p>F*(1-g)?null:s<n.compared.sourceZoom||s<n.compared.targetZoom?null:s}function i(n,o){var e=Math.max(n.compared.sourceZoom,n.compared.targetZoom),a=n.source.zoomAtPixelsPerPan(n.desiredPixelFlow/n.compared.pan)/2;return e>a?null!=o.maximumDistance?e+(o.maximumDistance-e)/2:1.5*e:o.maximumDistance?Math.min(o.maximumDistance,a):a}o.optimalDistance=a});