/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";let i=0;return function(){function e(t){this.uid=i++,t?(this._wkt=null!=t.wkt?t.wkt:null,this._wkid=null!=t.wkid?t.wkid:-1,this._isInverse=null!=t.isInverse&&!0===t.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}return e.fromGE=function(t){const i=new e;return i._wkt=t.wkt,i._wkid=t.wkid,i._isInverse=t.isInverse,i},e.prototype.getInverse=function(){const t=new e;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t},t._createClass(e,[{key:"wkt",get:function(){return this._wkt},set:function(t){this._wkt=t,this.uid=i++}},{key:"wkid",get:function(){return this._wkid},set:function(t){this._wkid=t,this.uid=i++}},{key:"isInverse",get:function(){return this._isInverse},set:function(t){this._isInverse=t,this.uid=i++}}]),e}()}));
