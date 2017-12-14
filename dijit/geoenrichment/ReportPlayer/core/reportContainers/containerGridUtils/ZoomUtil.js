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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-geometry","dojo/dom-style","dojo/sniff"],function(e,i,o,n){function t(e){if(e.__zoomInfo&&1!==e.__zoomInfo.scale){var i=e.__zoomInfo;return i.isFitPageScale=i.scale===r._getFitPageScale(i.originalW,i.originalH,e),i.isFitPageWidthScale=i.scale===r._getFitPageWidthScale(i.originalW,e),i}return e.__zoomInfo={scale:1,originalW:o.get(e.mainContainer,"width"),originalH:o.get(e.mainContainer,"height"),isFitPageScale:!1,isFitPageWidthScale:!1}}function a(e,i){e.__zoomInfo=i;var o=e.scalableContainer.style;i&&(i.scale=Math.max(l,Math.min(c,i.scale)));var t=i&&i.scale||1,a=1!==t?"0% 0%":"",r=1!==t?"scale("+t+")":"",g=n("webkit")?"webkitTransformOrigin":"transformOrigin",s=n("webkit")?"webkitTransform":"transform";o[g]=a,o[s]=r,e._syncFillerContainer(),e.onZoomChanged()}var r={},g=.2,l=.2,c=2,s=30;return r.getZoomInfo=function(i){return e.mixin({},t(i))},r.setZoomInfo=function(e,i){a(e,i)},r.zoomIn=function(e){var i=t(e);i.scale+=g,a(e,i)},r.zoomOut=function(e){var i=t(e);i.scale-=g,a(e,i)},r.zoomToFitPage=function(e){r.reset(e);var i=t(e);i.scale=r._getFitPageScale(i.originalW,i.originalH,e),a(e,i)},r.zoomToFitPageWidth=function(e){r.reset(e);var i=t(e);i.scale=r._getFitPageWidthScale(i.originalW,e),a(e,i)},r._getFitPageScale=function(e,i,o){var n=o.getCurrentPageDim(),t=e/(n.w+s),a=i/(n.h+s);return Math.min(t,a)},r._getFitPageWidthScale=function(e,i){return e/(i.getCurrentPageDim().w+s)},r.setZoomPercent=function(e,i){var o=t(e);o.scale=i/100,a(e,o)},r.setBestZoom=function(e){var i=t(e),o=e.getCurrentPageDim();(i.originalW<o.w||i.originalH<o.h)&&r.zoomToFitPage(e)},r.reset=function(e){a(e,null)},r});