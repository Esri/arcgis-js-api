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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-geometry","dojo/dom-style"],function(e,o,i){function n(e){if(e.__zoomInfo&&1!==e.__zoomInfo.scale){var o=e.__zoomInfo;return o.isFitPageScale=o.scale===t._getFitPageScale(o.originalW,o.originalH,e),o.isFitPageWidthScale=o.scale===t._getFitPageWidthScale(o.originalW,e),o}return e.__zoomInfo={scale:1,originalW:i.get(e.mainContainer,"width"),originalH:i.get(e.mainContainer,"height"),isFitPageScale:!1,isFitPageWidthScale:!1}}function a(e,o){e.__zoomInfo=o;var i=e.scalableContainer.style;o&&(o.scale=Math.max(g,Math.min(l,o.scale)));var n=o&&o.scale||1,a=1!=n?"0% 0%":"",t=1!=n?"scale("+n+")":"";i.transformOrigin=a,i.webkitTransformOrigin=a,i.transform=t,i.webkitTransform=t,e._syncFillerContainer(),e.onZoomChanged()}var t={},r=.2,g=.4,l=2,c=20;return t.getZoomInfo=function(o){return e.mixin({},n(o))},t.setZoomInfo=function(e,o){a(e,o)},t.zoomIn=function(e){var o=n(e);o.scale+=r,a(e,o)},t.zoomOut=function(e){var o=n(e);o.scale-=r,a(e,o)},t.zoomToFitPage=function(e){t.reset(e);var o=n(e);o.scale=t._getFitPageScale(o.originalW,o.originalH,e),a(e,o)},t.zoomToFitPageWidth=function(e){t.reset(e);var o=n(e);o.scale=t._getFitPageWidthScale(o.originalW,e),a(e,o)},t._getFitPageScale=function(e,o,i){var n=i.getCurrentPageDim(),a=e/(n.w+c),t=o/(n.h+c);return Math.min(a,t)},t._getFitPageWidthScale=function(e,o){return e/(o.getCurrentPageDim().w+c)},t.setZoomPercent=function(e,o){var i=n(e);i.scale=o/100,a(e,i)},t.setBestZoom=function(e){var o=n(e),i=e.getCurrentPageDim();(o.originalW<i.w||o.originalH<i.h)&&t.zoomToFitPage(e)},t.reset=function(e){a(e,null)},t});