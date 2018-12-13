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

define(["dojo/_base/lang","dojo/sniff","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,t,o,n,i){function r(e){if(e.__zoomInfo&&1!==e.__zoomInfo.scale){var t=e.__zoomInfo;return t.isFitPageScale=i.compareEqual(t.scale,l._getFitPageScale(t.originalW,t.originalH,e),2),t.isFitPageWidthScale=i.compareEqual(t.scale,l._getFitPageWidthScale(t.originalW,e),2),t.isFitPageHeightScale=i.compareEqual(t.scale,l._getFitPageHeightScale(t.originalH,e),2),t}return e.__zoomInfo={scale:1,originalW:e.getScrollableContainer().offsetWidth,originalH:e.getScrollableContainer().offsetHeight,isFitPageScale:!1,isFitPageWidthScale:!1,isFitPageHeightScale:!1}}function a(e,t,n,i){if(!t)return e.__zoomInfo=null,void g(e,1,!0);var i=i||l.getZoomInfo(e).scale,r=Math.max(m,Math.min(c,t.scale))||1;if(e.__zoomInfo=t,e.__zoomAnimation&&e.__zoomAnimation.stop(),n&&n.showAnimation)return e.__zoomAnimation=o.animateProperty({duration:f,properties:{p:{start:i,end:r,easing:"linear"}},progressFunction:function(t,o,n){g(e,o,1===n)},endFunction:function(){delete e.__zoomAnimation}}),e.__zoomAnimation.promise;g(e,r,!0)}function g(e,o,n){var i=e.scalableContainer.style,r=1!==o?"0% 0%":"",a=1!==o?"scale("+o+")":"",g=t("webkit")?"webkitTransformOrigin":"transformOrigin",l=t("webkit")?"webkitTransform":"transform";i[g]=r,i[l]=a,e.__zoomInfo&&(e.__zoomInfo.scale=o),e._syncFillerContainer(),n&&e.emitZoomChangedEvent()}var l={},m=.2,c=10,f=200;return l.getZoomInfo=function(t){return e.mixin({},r(t))},l.setZoomInfo=function(e,t,o){return a(e,t,o)},l.zoomIn=function(e,t){var o=l.getZoomInfo(e);return o.scale+=.2,a(e,o,t)},l.zoomOut=function(e,t){var o=l.getZoomInfo(e);return o.scale-=.2,a(e,o,t)},l.zoomToFitPage=function(e,t){var o=l.getZoomInfo(e).scale;l.reset(e);var n=l.getZoomInfo(e);return n.scale=l._getFitPageScale(n.originalW,n.originalH,e),a(e,n,t,o)},l.zoomToFitPageWidth=function(e,t){var o=l.getZoomInfo(e).scale;l.reset(e);var n=l.getZoomInfo(e);return n.scale=l._getFitPageWidthScale(n.originalW,e),a(e,n,t,o)},l.zoomToFitPageHeight=function(e,t){var o=l.getZoomInfo(e).scale;l.reset(e);var n=l.getZoomInfo(e);return n.scale=l._getFitPageHeightScale(n.originalH,e),a(e,n,t,o)},l._getFitPageScale=function(e,t,o){var n=o.getCurrentPageDim(),i=(e-l._getPrettyOffset(o).w)/n.w,r=(t-l._getPrettyOffset(o).h)/n.h;return Math.min(i,r)},l._getFitPageWidthScale=function(e,t){return(e-l._getPrettyOffset(t).w-n.getScrollbarSize().w)/t.getCurrentPageDim().w},l._getFitPageHeightScale=function(e,t){return(e-l._getPrettyOffset(t).h-n.getScrollbarSize().h)/t.getCurrentPageDim().h},l.setZoomPercent=function(e,t,o){var n=l.getZoomInfo(e);return n.scale=t/100,a(e,n,o)},l.setBestZoom=function(e){var t=l.getZoomInfo(e),o=e.getCurrentPageDim();(t.originalW<o.w||t.originalH<o.h)&&l.zoomToFitPage(e)},l._getPrettyOffset=function(e){return{w:30+e.renderOptions.minLeft+e.renderOptions.minRight,h:30+e.renderOptions.minTop+e.renderOptions.minBottom}},l.reset=function(e){a(e,null)},l});