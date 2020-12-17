/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function i(t=0,i=0,h=0,s=0){this.x=t,this.y=i,this.width=h,this.height=s}return i.prototype.union=function(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)},t._createClass(i,[{key:"isEmpty",get:function(){return this.width<=0||this.height<=0}}]),i}()}));
