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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./math/vec2","./Tile"],function(t,r){var o=function(r,o,i){this.z=o.level,this.scale=o.scale;var e=r.spatialReference._getInfo(),s=t.fromValues(r.origin.x,r.origin.y),n=t.fromValues(r.cols*o.resolution,r.rows*o.resolution),l=t.fromValues(-1/0,-1/0),h=t.fromValues(+1/0,+1/0),a=t.fromValues(+1/0,+1/0);i&&(t.set(l,Math.max(0,Math.floor((i.xmin-s[0])/n[0])),Math.max(0,Math.floor((s[1]-i.ymax)/n[1]))),t.set(h,Math.max(0,Math.floor((i.xmax-s[0])/n[0])),Math.max(0,Math.floor((s[1]-i.ymin)/n[1]))),t.set(a,h[0]-l[0]+1,h[1]-l[1]+1)),this.origin=s,this.norm=n,this.start=l,this.end=h,this.size=a,this.resolution=o.resolution,e?(this.worldSize=t.set(t.create(),Math.ceil(Math.round(2*e.origin[1]/o.resolution)/r.cols),a[1]),this.worldStart=t.set(t.create(),Math.floor((e.origin[0]-s[0])/n[0]),l[1]),this.worldEnd=t.set(t.create(),this.worldSize[0]-this.worldStart[0]-1,h[1]),this.wrap=!0):(this.worldStart=l,this.wldEnd=h,this.worldSize=a,this.wrap=!1)};return o.prototype={normalizeX:function(t){if(!this.wrap)return t;var r=this.worldSize[0];return 0>t?r-1-Math.abs((t+1)%r):t%r},getXForWorld:function(t,r){return this.wrap?this.worldSize[0]*r+t:t},getWorldForX:function(t){return this.wrap?Math.floor(t/this.worldSize[0]):t},getWorldStartCol:function(t){return t*this.worldSize[0]+this.start[0]},getWorldEndCol:function(t){return t*this.worldSize[0]+this.start[0]+this.size[0]-1},toGridCol:function(t){return(t-this.origin[0])/this.norm[0]},toGridRow:function(t){return(this.origin[1]-t)/this.norm[1]},getTileOrigin:function(r,o){var i=this.origin,e=this.norm;return t.set(r,i[0]+this.getXForWorld(o[0],o[3])*e[0],i[1]-o[1]*e[1])},getIntersectingTile:function(t){var o=this.resolution,i=t.lodInfo.resolution,e=t.world;if(t.coords[2]<this.z)return null;var s=[Math.floor(t.coords[0]*i/o+.01),Math.floor(t.row*i/o+.01),this.z,0];return s[3]=this.getXForWorld(s[0],e),new r(s,this)}},o});