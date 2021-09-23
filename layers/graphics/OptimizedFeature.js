/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe"],(function(e,t,i){"use strict";let o=function(){function e(e=null,t={},i,o){this.geometry=e,this.attributes=t,this.centroid=i,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}return e.prototype.weakClone=function(){const t=new e(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t},e}();function s(e){return!(i.isNone(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}let h=function(e){function i(){return e.apply(this,arguments)||this}return t._inheritsLoose(i,e),i}(o);e.OptimizedFeatureWithGeometry=h,e.default=o,e.hasGeometry=s,Object.defineProperty(e,"__esModule",{value:!0})}));
