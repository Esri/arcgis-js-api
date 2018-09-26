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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-style","dojo/sniff","esri/dijit/geoenrichment/utils/animation/Animator"],function(o,n,e,t){function i(o){if(o.__zoomInfo&&1!==o.__zoomInfo.scale){var e=o.__zoomInfo;return e.isFitPageScale=e.scale===g._getFitPageScale(e.originalW,e.originalH,o),e.isFitPageWidthScale=e.scale===g._getFitPageWidthScale(e.originalW,o),e}return o.__zoomInfo={scale:1,originalW:n.get(o.getScrollableContainer(),"width"),originalH:n.get(o.getScrollableContainer(),"height"),isFitPageScale:!1,isFitPageWidthScale:!1}}function a(o,n,e,i){if(!n)return o.__zoomInfo=null,void r(o,1,!0);var i=i||g.getZoomInfo(o).scale,a=Math.max(l,Math.min(m,n.scale))||1;o.__zoomInfo=n,o.__zoomAnimation&&o.__zoomAnimation.stop(),e&&e.showAnimation?o.__zoomAnimation=t.animateProperty({duration:c,properties:{p:{start:i,end:a,easing:"linear"}},progressFunction:function(n,e,t){r(o,e,1===t)},endFunction:function(){delete o.__zoomAnimation}}):r(o,a,!0)}function r(o,n,t){var i=o.scalableContainer.style,a=1!==n?"0% 0%":"",r=1!==n?"scale("+n+")":"",g=e("webkit")?"webkitTransformOrigin":"transformOrigin",l=e("webkit")?"webkitTransform":"transform";i[g]=a,i[l]=r,o.__zoomInfo&&(o.__zoomInfo.scale=n),o._syncFillerContainer(),t&&o.onZoomChanged()}var g={},l=.2,m=10,c=200;return g.getZoomInfo=function(n){return o.mixin({},i(n))},g.setZoomInfo=function(o,n,e){a(o,n,e)},g.zoomIn=function(o,n){var e=g.getZoomInfo(o);e.scale+=.2,a(o,e,n)},g.zoomOut=function(o,n){var e=g.getZoomInfo(o);e.scale-=.2,a(o,e,n)},g.zoomToFitPage=function(o,n){var e=g.getZoomInfo(o).scale;g.reset(o);var t=g.getZoomInfo(o);t.scale=g._getFitPageScale(t.originalW,t.originalH,o),a(o,t,n,e)},g.zoomToFitPageWidth=function(o,n){var e=g.getZoomInfo(o).scale;g.reset(o);var t=g.getZoomInfo(o);t.scale=g._getFitPageWidthScale(t.originalW,o),a(o,t,n,e)},g._getFitPageScale=function(o,n,e){var t=e.getCurrentPageDim(),i=o/(t.w+30),a=n/(t.h+30);return Math.min(i,a)},g._getFitPageWidthScale=function(o,n){return o/(n.getCurrentPageDim().w+30)},g.setZoomPercent=function(o,n,e){var t=g.getZoomInfo(o);t.scale=n/100,a(o,t,e)},g.setBestZoom=function(o){var n=g.getZoomInfo(o),e=o.getCurrentPageDim();(n.originalW<e.w||n.originalH<e.h)&&g.zoomToFitPage(o)},g.reset=function(o){a(o,null)},g});