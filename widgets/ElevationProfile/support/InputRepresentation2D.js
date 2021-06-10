/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/promiseUtils","../../../views/support/layerViewUtils"],(function(e,t,i,h){"use strict";let s=function(){function e(e){this._params=e,this._highlightTask=null,this._highlightHandle=null}var s=e.prototype;return s.destroy=function(){this.remove()},s.remove=function(){this._highlightTask=t.abortMaybe(this._highlightTask),this._highlightHandle=t.removeMaybe(this._highlightHandle)},s.update=function(e){if(this.remove(),t.isNone(e)||!n(e))return;const s=e.layer;this._highlightTask=i.createTask((async t=>{const n=await this._params.view.whenLayerView(s);i.throwIfAborted(t),h.highlightsSupported(n)&&(this._highlightHandle=n.highlight(e))}))},e}();function n(e){return t.isSome(e.geometry)&&"polyline"===e.geometry.type}e.InputRepresentation2D=s,Object.defineProperty(e,"__esModule",{value:!0})}));
