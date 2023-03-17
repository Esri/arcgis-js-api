/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","./BufferRange"],(function(e,t,i,s){"use strict";let n=function(e){function s(t,i,s){var n;return(n=e.call(this,i,s)||this).geometry=t,n}return t._inheritsLoose(s,e),t._createClass(s,[{key:"isVisible",get:function(){return this.geometry.visible}},{key:"hasHighlights",get:function(){return i.isSome(this.geometry.highlights)&&this.isVisible}},{key:"hasOccludees",get:function(){return i.isSome(this.geometry.occludees)}}]),s}(s.BufferRange);e.Instance=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
