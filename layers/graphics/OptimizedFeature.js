/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";return function(){function t(e=null,t={},s,h){this.displayId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),s&&(this.centroid=s),null!=h&&(this.objectId=h)}return t.prototype.weakClone=function(){const e=new t(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashIndexed=this.geohashIndexed,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e},e._createClass(t,[{key:"hasGeometry",get:function(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}}]),t}()}));
