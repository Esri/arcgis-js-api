/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let s=function(){function e(e){this.notify=e,this._accessed=new Set,this._handles=[]}var s=e.prototype;return s.destroy=function(){this._accessed.clear(),this.clear()},s.onObservableAccessed=function(e){this._accessed.add(e)},s.onTrackingEnd=function(){for(const e of this._accessed)this._handles.push(e.observe(this));this._accessed.clear()},s.clear=function(){for(const e of this._handles)e.remove();this._handles.length=0},e}();e.SimpleTrackingTarget=s,Object.defineProperty(e,"__esModule",{value:!0})}));
