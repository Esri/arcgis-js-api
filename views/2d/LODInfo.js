// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["./math/vec2","./Tile"],function(t,r){var i=function(r,i,o){this.z=i.level,this.scale=i.scale;var e=r.spatialReference._getInfo(),s=t.fromValues(r.origin.x,r.origin.y),n=t.fromValues(r.size[0]*i.resolution,r.size[1]*i.resolution),h=t.fromValues(-(1/0),-(1/0)),l=t.fromValues(+(1/0),+(1/0)),a=t.fromValues(+(1/0),+(1/0));o&&(t.set(h,Math.max(0,Math.floor((o.xmin-s[0])/n[0])),Math.max(0,Math.floor((s[1]-o.ymax)/n[1]))),t.set(l,Math.max(0,Math.floor((o.xmax-s[0])/n[0])),Math.max(0,Math.floor((s[1]-o.ymin)/n[1]))),t.set(a,l[0]-h[0]+1,l[1]-h[1]+1)),this.origin=s,this.norm=n,this.start=h,this.end=l,this.size=a,this.resolution=i.resolution,e?(this.worldSize=t.set(t.create(),Math.ceil(Math.round(2*e.origin[1]/i.resolution)/r.size[0]),a[1]),this.worldStart=t.set(t.create(),Math.floor((e.origin[0]-s[0])/n[0]),h[1]),this.worldEnd=t.set(t.create(),this.worldSize[0]-this.worldStart[0]-1,l[1]),this.wrap=!0):(this.worldStart=h,this.wldEnd=l,this.worldSize=a,this.wrap=!1)};return i.prototype={normalizeX:function(t){if(!this.wrap)return t;var r=this.worldSize[0];return 0>t?r-1-Math.abs((t+1)%r):t%r},getXForWorld:function(t,r){return this.wrap?this.worldSize[0]*r+t:t},getWorldForX:function(t){return this.wrap?Math.floor(t/this.worldSize[0]):t},getWorldStartCol:function(t){return t*this.worldSize[0]+this.start[0]},getWorldEndCol:function(t){return t*this.worldSize[0]+this.start[0]+this.size[0]-1},toGridCol:function(t){return(t-this.origin[0])/this.norm[0]},toGridRow:function(t){return(this.origin[1]-t)/this.norm[1]},getTileOrigin:function(r,i){var o=this.origin,e=this.norm;return t.set(r,o[0]+this.getXForWorld(i[0],i[3])*e[0],o[1]-i[1]*e[1])},getIntersectingTile:function(t){var i=this.resolution,o=t.lodInfo.resolution,e=t.world;if(t.coords[2]<this.z)return null;var s=[Math.floor(t.coords[0]*o/i+.01),Math.floor(t.row*o/i+.01),this.z,0];return s[3]=this.getXForWorld(s[0],e),new r(s,this)}},i});