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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/sniff","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,t,o,i,n){function a(e){if(e.__zoomInfo&&1!==e.__zoomInfo.scale){var t=e.__zoomInfo;return t.isFitPageScale=n.compareEqual(t.scale,c._getFitPageScale(t,e),2),t.isFitPageWidthScale=n.compareEqual(t.scale,c._getFitPageWidthScale(t,e),2),t.isFitPageHeightScale=n.compareEqual(t.scale,c._getFitPageHeightScale(t,e),2),t}return e.__zoomInfo={scale:1,originalW:e.getScrollableContainer().offsetWidth,originalH:e.getScrollableContainer().offsetHeight,isFitPageScale:!1,isFitPageWidthScale:!1,isFitPageHeightScale:!1}}function r(e){var t=e.__zoomInfo;return!!t&&(!n.compareEqual(t.originalW,e.getScrollableContainer().offsetWidth,2)||!n.compareEqual(t.originalH,e.getScrollableContainer().offsetHeight,2))}function g(e,t,i,n){if(!t)return e.__zoomInfo=null,void l(e,1,!0);var n=n||c.getZoomInfo(e).scale,a=Math.max(f,Math.min(m,t.scale))||1;if(e.__zoomInfo=t,e.__zoomAnimation&&e.__zoomAnimation.stop(),i&&i.showAnimation)return e.__zoomAnimation=o.animateProperty({duration:s,properties:{p:{start:n,end:a,easing:"linear"}},progressFunction:function(t,o,i){l(e,o,1===i)},endFunction:function(){delete e.__zoomAnimation}}),e.__zoomAnimation.promise;l(e,a,!0)}function l(e,o,i){var n=e.scalableContainer.style,a=1!==o?"0% 0%":"",r=1!==o?"scale("+o+")":"",g=t("webkit")?"webkitTransformOrigin":"transformOrigin",l=t("webkit")?"webkitTransform":"transform";n[g]=a,n[l]=r,e.__zoomInfo&&(e.__zoomInfo.scale=o),e._syncFillerContainer(),i&&e.emitZoomChangedEvent()}var c={},f=.2,m=10,s=200;return c.getZoomInfo=function(t){return e.mixin({},a(t))},c.setZoomInfo=function(e,t,o){return g(e,t,o)},c.zoomIn=function(e,t){var o=c.getZoomInfo(e);return o.scale+=.2,g(e,o,t)},c.zoomOut=function(e,t){var o=c.getZoomInfo(e);return o.scale-=.2,g(e,o,t)},c.zoomToFitPage=function(e,t){var o=c.getZoomInfo(e);if(r(e)||!o.isFitPageScale){var i=o.scale;c.reset(e);var n=c.getZoomInfo(e);return n.scale=c._getFitPageScale(n,e),g(e,n,t,i)}},c.zoomToFitPageWidth=function(e,t){var o=c.getZoomInfo(e);if(r(e)||!o.isFitPageWidthScale){var i=o.scale;c.reset(e);var n=c.getZoomInfo(e);return n.scale=c._getFitPageWidthScale(n,e),g(e,n,t,i)}},c.zoomToFitPageHeight=function(e,t){var o=c.getZoomInfo(e);if(r(e)||!o.isFitPageHeightScale){var i=o.scale;c.reset(e);var n=c.getZoomInfo(e);return n.scale=c._getFitPageHeightScale(n,e),g(e,n,t,i)}},c._getFitPageScale=function(e,t){var o=t.getCurrentPageDim(),i=(e.originalW-c._getPrettyOffset(t).w)/o.w,n=(e.originalH-c._getPrettyOffset(t).h)/o.h;return Math.min(i,n)},c._getFitPageWidthScale=function(e,t){return(e.originalW-c._getPrettyOffset(t).w-i.getScrollbarSize().w)/t.getCurrentPageDim().w},c._getFitPageHeightScale=function(e,t){return(e.originalH-c._getPrettyOffset(t).h-i.getScrollbarSize().h)/t.getCurrentPageDim().h},c.setZoomPercent=function(e,t,o){var i=c.getZoomInfo(e);return i.scale=t/100,g(e,i,o)},c.setBestZoom=function(e){var t=c.getZoomInfo(e),o=e.getCurrentPageDim();(t.originalW<o.w||t.originalH<o.h)&&c.zoomToFitPage(e)},c._getPrettyOffset=function(e){return{w:30+e.renderOptions.minLeft+e.renderOptions.minRight,h:30+e.renderOptions.minTop+e.renderOptions.minBottom}},c.reset=function(e){g(e,null)},c});