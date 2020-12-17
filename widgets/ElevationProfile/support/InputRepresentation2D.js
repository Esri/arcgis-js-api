/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe"],(function(e,t){"use strict";let i=function(){function e(e){this._params=e,this._visualElementHandle=null,this._graphic=null}var i=e.prototype;return i.destroy=function(){this.remove()},i.remove=function(){this._visualElementHandle=t.removeMaybe(this._visualElementHandle)},i.update=function(e){this.remove(),t.isNone(e)||function(e){return t.isSome(e.geometry)&&"polyline"===e.geometry.type}(e)&&this._highlightedGraphic(e)},i._highlightedGraphic=async function(e){this._graphic=e;const t=e.layer;if("feature"!==t.type)return;const i=this._params.view,n=await i.whenLayerView(t);this._graphic===e&&(this._visualElementHandle=n.highlight(e))},e}();e.InputRepresentation2D=i,Object.defineProperty(e,"__esModule",{value:!0})}));
