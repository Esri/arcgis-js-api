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

define(["require","exports","./functions"],(function(n,o,e){Object.defineProperty(o,"__esModule",{value:!0}),o.optimalDistance=function(n,o){var i,t=function(n,o){var e=Math.max(n.compared.sourceZoom,n.compared.targetZoom),i=n.source.zoomAtPixelsPerPan(n.desiredPixelFlow/n.compared.pan)/2;if(i<e)return null!=o.maximumDistance?e+(o.maximumDistance-e)/2:1.5*e;if(o.maximumDistance)return Math.min(o.maximumDistance,i);return i}(n,o),a={ascensionFactor:null!=o.ascensionFactor?o.ascensionFactor:.5,descensionFactor:null!=o.descensionFactor?o.descensionFactor:.5},s=0===a.ascensionFactor,r=0===a.descensionFactor,c=s?e.tAscensionZoomOnly:e.tAscensionZoomPan,m=s?e.dtAscensionZoomOnly:e.dtAscensionZoomPan,u=s?e.ddtAscensionZoomOnly:e.ddtAscensionZoomPan,d=r?e.tDescensionZoomOnly:e.tDescensionZoomPan,l=r?e.dtDescensionZoomOnly:e.dtDescensionZoomPan,Z=r?e.ddtDescensionZoomOnly:e.ddtDescensionZoomPan,f=function(o){return c(n,o,a)+e.tPanion(n,o,a)+d(n,o,a)},P=function(o){return m(n,o,a)+e.dtPanion(n,o,a)+l(n,o,a)},D=function(o){return u(n,o,a)+e.ddtPanion(n,o,a)+Z(n,o,a)},p=f(t),x=e.tBaseLine(n),F=o.maximumIterations||20,y=null!=o.maximumDistance?o.maximumDistance:1/0;for(i=0;i<F;i++){var A=(P(t)+1e-6)/D(t);if(isNaN(A)||t>=y&&A<0){if(!isFinite(y))return null;p=f(t=y);break}if((t-=A)<n.compared.sourceZoom||t<n.compared.targetZoom)return null;var O=f(t);if(Math.abs(O-p)/p<=.005)break;p=O}return p>.7*x?null:t<n.compared.sourceZoom||t<n.compared.targetZoom?null:t}}));