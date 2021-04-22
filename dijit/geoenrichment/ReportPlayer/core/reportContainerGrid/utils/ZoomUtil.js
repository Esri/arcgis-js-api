// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/sniff","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],(function(e,t,o,i,n){var a={};function r(e){var t=e.__zoomInfo;return!!t&&(!n.compareEqual(t.originalW,e.getScrollableContainer().offsetWidth,2)||!n.compareEqual(t.originalH,e.getScrollableContainer().offsetHeight,2))}function g(e,t,i,n){if(!t)return e.__zoomInfo=null,void l(e,1,!0);n=n||a.getZoomInfo(e).scale;var r=Math.max(.05,Math.min(10,t.scale))||1;if(e.__zoomInfo=t,e.__zoomAnimation&&e.__zoomAnimation.stop(),i&&i.showAnimation)return e.__zoomAnimation=o.animateProperty({duration:200,properties:{p:{start:n,end:r,easing:"linear"}},progressFunction:function(t,o,i){l(e,o,1===i)},endFunction:function(){delete e.__zoomAnimation}}),e.__zoomAnimation.promise;l(e,r,!0)}function l(e,o,i){var n=e.scalableContainer.style,a=1!==o?"0% 0%":"",r=1!==o?"scale("+o+")":"",g=t("webkit")?"webkitTransformOrigin":"transformOrigin",l=t("webkit")?"webkitTransform":"transform";n[g]=a,n[l]=r,e.__zoomInfo&&(e.__zoomInfo.scale=o),e.syncFillerContainer(),i&&e.emitZoomChangedEvent()}return a.getZoomInfo=function(t){return e.mixin({},function(e){if(e.__zoomInfo&&1!==e.__zoomInfo.scale){var t=e.__zoomInfo;return t.isFitPageScale=n.compareEqual(t.scale,a._getFitPageScale(t,e),2),t.isFitPageWidthScale=n.compareEqual(t.scale,a._getFitPageWidthScale(t,e),2),t.isFitPageHeightScale=n.compareEqual(t.scale,a._getFitPageHeightScale(t,e),2),t}return e.__zoomInfo={scale:1,originalW:e.getScrollableContainer().offsetWidth,originalH:e.getScrollableContainer().offsetHeight,isFitPageScale:!1,isFitPageWidthScale:!1,isFitPageHeightScale:!1}}(t))},a.setZoomInfo=function(e,t,o){return g(e,t,o)},a.zoomIn=function(e,t){var o=a.getZoomInfo(e);return o.scale+=.2,g(e,o,t)},a.zoomOut=function(e,t){var o=a.getZoomInfo(e);return o.scale-=.2,g(e,o,t)},a.zoomToFitPage=function(e,t){var o=a.getZoomInfo(e);if(r(e)||!o.isFitPageScale){var i=o.scale;a.reset(e);var n=a.getZoomInfo(e);return n.scale=a._getFitPageScale(n,e),g(e,n,t,i)}},a.zoomToFitPageWidth=function(e,t){var o=a.getZoomInfo(e);if(r(e)||!o.isFitPageWidthScale){var i=o.scale;a.reset(e);var n=a.getZoomInfo(e);return n.scale=a._getFitPageWidthScale(n,e),g(e,n,t,i)}},a.zoomToFitPageHeight=function(e,t){var o=a.getZoomInfo(e);if(r(e)||!o.isFitPageHeightScale){var i=o.scale;a.reset(e);var n=a.getZoomInfo(e);return n.scale=a._getFitPageHeightScale(n,e),g(e,n,t,i)}},a._getFitPageScale=function(e,t){var o=t.getCurrentPageDim(),i=(e.originalW-a._getPrettyOffset(t).w)/o.w,n=(e.originalH-a._getPrettyOffset(t).h)/o.h;return Math.min(i,n)},a._getFitPageWidthScale=function(e,t){return(e.originalW-a._getPrettyOffset(t).w-i.getScrollbarSize().w)/t.getCurrentPageDim().w},a._getFitPageHeightScale=function(e,t){return(e.originalH-a._getPrettyOffset(t).h-i.getScrollbarSize().h)/t.getCurrentPageDim().h},a.setZoomPercent=function(e,t,o){var i=a.getZoomInfo(e);return i.scale=t/100,g(e,i,o)},a.setBestZoom=function(e){var t=a.getZoomInfo(e),o=e.getCurrentPageDim();(t.originalW<o.w||t.originalH<o.h)&&a.zoomToFitPage(e)},a._getPrettyOffset=function(e){return{w:e.renderOptions.minLeft+e.renderOptions.minRight,h:e.renderOptions.minTop+e.renderOptions.minBottom}},a.reset=function(e){g(e,null)},a}));