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

define(["require","exports"],function(t,i){var e=function(){function t(t){t&&this.update(t)}return t.prototype.update=function(t){t&&(this.definition?this.definition.copyFrom(t):this.definition=t.clone()),this._updatePrecomputedVariables(),this._updatePixelFlow()},t.prototype._updatePrecomputedVariables=function(){var t=this.definition,i=t.compared,e=i.sourceZoom,o=i.targetZoom;this._sl=e>o?1:-1,this._panPixelsAtSource=i.pan*t.source.pixelsPerPanAtZoom(e);var n=(t.source.pixelsPerRotateAtZoom(e)+t.target.pixelsPerRotateAtZoom(o))/2;this._rotatePixels=i.rotate*n},t.prototype._updatePixelFlow=function(){var t,i,e=this.definition.compared.sourceZoom,o=this.definition.compared.targetZoom,n=this.definition.hasZoom,s=this.definition.hasPan,a=this.definition.hasRotate;t=s&&n?(o/e-1)/(-1/(this._sl*this.definition.halfWindowSize)*Math.LN2*this._panPixelsAtSource):0,i=n&&a?this._sl*(Math.log(e/o)/Math.LN2)*this.definition.halfWindowSize/this._rotatePixels:0,this._zoomPixelFlow=0,this._panPixelFlow=0,this._rotatePixelFlow=0;var r=this.definition.desiredPixelFlow;if(n&&s&&a){var h=t+i+t*i;this._zoomPixelFlow=t*i/h*r,this._panPixelFlow=i/h*r,this._rotatePixelFlow=t/h*r}else if(n&&s){var h=1+t;this._zoomPixelFlow=t/h*r,this._panPixelFlow=1/h*r}else if(n&&a){var h=1+i;this._zoomPixelFlow=i/h*r,this._rotatePixelFlow=1/h*r}else if(s&&a){var l=this._panPixelsAtSource/this._rotatePixels,h=1+l;this._panPixelFlow=l/h*r,this._rotatePixelFlow=1/h*r}else s?this._panPixelFlow=r:n?this._zoomPixelFlow=r:a&&(this._rotatePixelFlow=r);a?this.time=this.rotateTime:n?this.time=this.zoomTime:s?this.time=this.panTime:this.time=0},Object.defineProperty(t.prototype,"zoomTime",{get:function(){return this.definition.hasZoom?this._sl*(Math.log(this.definition.compared.sourceZoom/this.definition.compared.targetZoom)/Math.LN2)*this.definition.halfWindowSize/this._zoomPixelFlow:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"panTime",{get:function(){if(this.definition.hasPan){if(this.definition.hasZoom){var t=-1/(this._sl*this.definition.halfWindowSize)*Math.LN2,i=t*this._panPixelsAtSource;return Math.log(i*(this._zoomPixelFlow/this._panPixelFlow)+1)/(t*this._zoomPixelFlow)}return this._panPixelsAtSource/this._panPixelFlow}return 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rotateTime",{get:function(){return this.definition.hasRotate?this._rotatePixels/this._rotatePixelFlow:0},enumerable:!0,configurable:!0}),t.prototype._interpolateComponentsZoom=function(t){if(this.definition.hasZoom){var i=this.definition.compared.sourceZoom,e=this.definition.compared.targetZoom;return(i*Math.pow(i/e,-t)-i)/(e-i)}return t},t.prototype._interpolateComponentsPan=function(t){if(this.definition.hasPan){if(this.definition.hasZoom){var i=-1/(this._sl*this.definition.halfWindowSize)*this._zoomPixelFlow;return 1/this._panPixelsAtSource*(this._panPixelFlow*(Math.pow(2,i*t*this.time)-1))/(i*Math.LN2)}return t}return t},t.prototype._interpolateComponentsRotate=function(t){return t},t.prototype.interpolateComponentsAt=function(t,i){t=Math.min(Math.max(t,0),1);var e=this._interpolateComponentsZoom(t),o=this._interpolateComponentsPan(t),n=this._interpolateComponentsRotate(t);return i?(i.zoom=e,i.pan=o,i.rotate=n):i={zoom:e,pan:o,rotate:n},i},t}();i.Segment=e,Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=e});