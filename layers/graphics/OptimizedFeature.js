/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function e(t=null,e={},s,h){this.displayId=0,this.geohashX=0,this.geohashY=0,this.geometry=t,e&&(this.attributes=e),s&&(this.centroid=s),null!=h&&(this.objectId=h)}return e.prototype.weakClone=function(){const t=new e(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t},t._createClass(e,[{key:"hasGeometry",get:function(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}}]),e}()}));
