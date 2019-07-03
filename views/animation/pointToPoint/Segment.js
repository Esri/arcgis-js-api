// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t){t&&this.update(t)}return t.prototype.update=function(t){t&&(this.definition?this.definition.copyFrom(t):this.definition=t.clone()),this._updatePrecomputedVariables(),this._updatePixelFlow()},t.prototype._updatePrecomputedVariables=function(){var t=this.definition,i=t.compared,o=i.sourceZoom,e=i.targetZoom;this._zoomSign=o>e?1:-1,this._panPixelsAtSource=i.pan*t.source.pixelsPerPanAtZoom(o);var n=(t.source.pixelsPerRotateAtZoom(o)+t.target.pixelsPerRotateAtZoom(e))/2;this._rotatePixels=i.rotate*n},t.prototype._updatePixelFlow=function(){var t=this.definition.compared.sourceZoom,i=this.definition.compared.targetZoom,o=this.definition,e=o.hasZoom,n=o.hasPan,a=o.hasRotate,r=0,s=0;e&&(n&&(r=(i/t-1)/(-1/(this._zoomSign*this.definition.halfWindowSize)*Math.LN2*this._panPixelsAtSource)),a&&(s=this._zoomSign*(Math.log(t/i)/Math.LN2)*this.definition.halfWindowSize/this._rotatePixels)),this._zoomPixelFlow=0,this._panPixelFlow=0,this._rotatePixelFlow=0;var h=this.definition.desiredPixelFlow;if(e&&n&&a){var l=r+s+r*s;this._zoomPixelFlow=r*s/l*h,this._panPixelFlow=s/l*h,this._rotatePixelFlow=r/l*h}else if(e&&n){var l=1+r;this._zoomPixelFlow=r/l*h,this._panPixelFlow=1/l*h}else if(e&&a){var l=1+s;this._zoomPixelFlow=s/l*h,this._rotatePixelFlow=1/l*h}else if(n&&a){var p=this._panPixelsAtSource/this._rotatePixels,l=1+p;this._panPixelFlow=p/l*h,this._rotatePixelFlow=1/l*h}else n?this._panPixelFlow=h:e?this._zoomPixelFlow=h:a&&(this._rotatePixelFlow=h);this.time=a?this.rotateTime:e?this.zoomTime:n?this.panTime:0},Object.defineProperty(t.prototype,"zoomTime",{get:function(){return this.definition.hasZoom?this._zoomSign*(Math.log(this.definition.compared.sourceZoom/this.definition.compared.targetZoom)/Math.LN2)*this.definition.halfWindowSize/this._zoomPixelFlow:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"panTime",{get:function(){if(this.definition.hasPan){if(this.definition.hasZoom){var t=-1/(this._zoomSign*this.definition.halfWindowSize)*Math.LN2,i=t*this._panPixelsAtSource;return Math.log(i*(this._zoomPixelFlow/this._panPixelFlow)+1)/(t*this._zoomPixelFlow)}return this._panPixelsAtSource/this._panPixelFlow}return 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rotateTime",{get:function(){return this.definition.hasRotate?this._rotatePixels/this._rotatePixelFlow:0},enumerable:!0,configurable:!0}),t.prototype._interpolateComponentsZoom=function(t){if(0===t||1===t)return t;if(this.definition.hasZoom){var i=this.definition.compared.sourceZoom,o=this.definition.compared.targetZoom;return(i*Math.pow(i/o,-t)-i)/(o-i)}return t},t.prototype._interpolateComponentsPan=function(t){if(0===t||1===t)return t;if(this.definition.hasPan&&this.definition.hasZoom){var i=-1/(this._zoomSign*this.definition.halfWindowSize)*this._zoomPixelFlow;return 1/this._panPixelsAtSource*(this._panPixelFlow*(Math.pow(2,i*t*this.time)-1))/(i*Math.LN2)}return t},t.prototype._interpolateComponentsRotate=function(t){return t},t.prototype.interpolateComponentsAt=function(t,i){t=Math.min(Math.max(t,0),1);var o=this._interpolateComponentsZoom(t),e=this._interpolateComponentsPan(t),n=this._interpolateComponentsRotate(t);return i?(i.zoom=o,i.pan=e,i.rotate=n):i={zoom:o,pan:e,rotate:n},i},t}();i.Segment=o,i.default=o});