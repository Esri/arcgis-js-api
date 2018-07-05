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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-geometry","dojo/dom-style","dojo/sniff","esri/dijit/geoenrichment/utils/animation/Animator"],function(o,n,e,t,i){function a(o){if(o.__zoomInfo&&1!==o.__zoomInfo.scale){var n=o.__zoomInfo;return n.isFitPageScale=n.scale===l._getFitPageScale(n.originalW,n.originalH,o),n.isFitPageWidthScale=n.scale===l._getFitPageWidthScale(n.originalW,o),n}return o.__zoomInfo={scale:1,originalW:e.get(o.getScrollableContainer(),"width"),originalH:e.get(o.getScrollableContainer(),"height"),isFitPageScale:!1,isFitPageWidthScale:!1}}function r(o,n,e,t){if(!n)return o.__zoomInfo=null,void g(o,1,!0);var t=t||l.getZoomInfo(o).scale,a=Math.max(m,Math.min(c,n.scale))||1;o.__zoomInfo=n,o.__zoomAnimation&&o.__zoomAnimation.stop(),e&&e.showAnimation?o.__zoomAnimation=i.animateProperty({duration:f,properties:{p:{start:t,end:a,easing:"linear"}},progressFunction:function(n,e,t){g(o,e,1===t)},endFunction:function(){delete o.__zoomAnimation}}):g(o,a,!0)}function g(o,n,e){var i=o.scalableContainer.style,a=1!==n?"0% 0%":"",r=1!==n?"scale("+n+")":"",g=t("webkit")?"webkitTransformOrigin":"transformOrigin",l=t("webkit")?"webkitTransform":"transform";i[g]=a,i[l]=r,o.__zoomInfo&&(o.__zoomInfo.scale=n),o._syncFillerContainer(),e&&o.onZoomChanged()}var l={},m=.2,c=10,f=200;return l.getZoomInfo=function(n){return o.mixin({},a(n))},l.setZoomInfo=function(o,n,e){r(o,n,e)},l.zoomIn=function(o,n){var e=l.getZoomInfo(o);e.scale+=.2,r(o,e,n)},l.zoomOut=function(o,n){var e=l.getZoomInfo(o);e.scale-=.2,r(o,e,n)},l.zoomToFitPage=function(o,n){var e=l.getZoomInfo(o).scale;l.reset(o);var t=l.getZoomInfo(o);t.scale=l._getFitPageScale(t.originalW,t.originalH,o),r(o,t,n,e)},l.zoomToFitPageWidth=function(o,n){var e=l.getZoomInfo(o).scale;l.reset(o);var t=l.getZoomInfo(o);t.scale=l._getFitPageWidthScale(t.originalW,o),r(o,t,n,e)},l._getFitPageScale=function(o,n,e){var t=e.getCurrentPageDim(),i=o/(t.w+30),a=n/(t.h+30);return Math.min(i,a)},l._getFitPageWidthScale=function(o,n){return o/(n.getCurrentPageDim().w+30)},l.setZoomPercent=function(o,n,e){var t=l.getZoomInfo(o);t.scale=n/100,r(o,t,e)},l.setBestZoom=function(o){var n=l.getZoomInfo(o),e=o.getCurrentPageDim();(n.originalW<e.w||n.originalH<e.h)&&l.zoomToFitPage(o)},l.reset=function(o){r(o,null)},l});