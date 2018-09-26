// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/spatialReferenceUtils","./TileKey"],function(t,o,r,i){function e(t,o){return[t,o]}function n(t,o,r){return t[0]=o,t[1]=r,t}function s(t,o,r,i,e){return t[0]=o,t[1]=r,t[2]=i,t[3]=e,t}var l=new i("0/0/0/0");return function(){function t(t,o,r,i,e,n,s,l,h,u,a,p){this.level=t,this.resolution=o,this.scale=r,this.origin=i,this.first=e,this.last=n,this.size=s,this.norm=l,this.worldStart=h,this.worldEnd=u,this.worldSize=a,this.wrap=p}return t.create=function(o,i,s){var l=r.getInfo(o.spatialReference),h=e(o.origin.x,o.origin.y),u=e(o.size[0]*i.resolution,o.size[1]*i.resolution),a=e(-1/0,-1/0),p=e(1/0,1/0),f=e(1/0,1/0);s&&(n(a,Math.max(0,Math.floor((s.xmin-h[0])/u[0])),Math.max(0,Math.floor((h[1]-s.ymax)/u[1]))),n(p,Math.max(0,Math.floor((s.xmax-h[0])/u[0])),Math.max(0,Math.floor((h[1]-s.ymin)/u[1]))),n(f,p[0]-a[0]+1,p[1]-a[1]+1));var c,g,m,w;return o.isWrappable?(c=e(Math.ceil(Math.round(2*l.origin[1]/i.resolution)/o.size[0]),f[1]),g=e(Math.floor((l.origin[0]-h[0])/u[0]),a[1]),m=e(c[0]+g[0]-1,p[1]),w=!0):(g=a,m=p,c=f,w=!1),new t(i.level,i.resolution,i.scale,h,a,p,f,u,g,m,c,w)},t.prototype.normalizeCol=function(t){if(!this.wrap)return t;var o=this.worldSize[0];return t<0?o-1-Math.abs((t+1)%o):t%o},t.prototype.denormalizeCol=function(t,o){return this.wrap?this.worldSize[0]*o+t:t},t.prototype.getWorldForColumn=function(t){return this.wrap?Math.floor(t/this.worldSize[0]):0},t.prototype.getFirstColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]},t.prototype.getLastColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1},t.prototype.getColumnForX=function(t){return(t-this.origin[0])/this.norm[0]},t.prototype.getXForColumn=function(t){return this.origin[0]+t*this.norm[0]},t.prototype.getRowForY=function(t){return(this.origin[1]-t)/this.norm[1]},t.prototype.getYForRow=function(t){return this.origin[1]-t*this.norm[1]},t.prototype.getTileBounds=function(t,o,r){void 0===r&&(r=!1),l.set(o);var i=r?l.col:this.denormalizeCol(l.col,l.world),e=l.row;return s(t,this.getXForColumn(i),this.getYForRow(e+1),this.getXForColumn(i+1),this.getYForRow(e)),t},t.prototype.getTileCoords=function(t,o,r){void 0===r&&(r=!1),l.set(o);var i=r?l.col:this.denormalizeCol(l.col,l.world);return Array.isArray(t)?n(t,this.getXForColumn(i),this.getYForRow(l.row)):(t.x=this.getXForColumn(i),t.y=this.getYForRow(l.row)),t},t}()});