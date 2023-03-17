/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe"],(function(t,e,i){"use strict";let o=function(){function t(t=null,e={},i,o){this.geometry=t,this.attributes=e,this.centroid=i,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}return t.prototype.weakClone=function(){const e=new t(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e},t}();function s(t){return!(i.isNone(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)}let r=function(t){function i(){return t.apply(this,arguments)||this}return e._inheritsLoose(i,t),i}(o);t.OptimizedFeature=o,t.OptimizedFeatureWithGeometry=r,t.hasGeometry=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
