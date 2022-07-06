/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as t}from"../../core/maybe.js";class s{constructor(t=null,s={},e,o){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const t=new s(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function e(s){return!(t(s.geometry)||!s.geometry.coords||!s.geometry.coords.length)}class o extends s{}export{s as OptimizedFeature,o as OptimizedFeatureWithGeometry,e as hasGeometry};
