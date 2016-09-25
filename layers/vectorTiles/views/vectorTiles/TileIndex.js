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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","exports","../2d/layers/support/TileKey"],function(e,t,r){var o=function(){function e(e){this._tilemap=e.index}return e.prototype.dataKey=function(e){for(var t=[e],o=e;0!==o.level;)o=new r(o.level-1,o.row>>1,o.col>>1,o.world),t.push(o);var i,l,a=this._tilemap,f=t.pop();if(1===a)return f;for(;t.length;){i=t.pop();var n=f.level+1,h=2*f.row,c=2*f.col,p=[r.getId(n,h,c,i.world),r.getId(n,h,c+1,i.world),r.getId(n,h+1,c,i.world),r.getId(n,h+1,c+1,i.world)];if(l=p.indexOf(i.id),a){if(0===a[l]){f=null;break}if(1===a[l]){f=i;break}f=i,a=a[l]}}return f},e.prototype.forEach=function(e,t,r,o,i){this._callback=i,this._maxLevel=t+e,this._forEach(this._tilemap,t,r,o)},e.prototype._forEach=function(e,t,r,o){0!==e&&(this._callback(t,r,o),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*r,2*o),this._forEach(e[1],t+1,2*r,2*o+1),this._forEach(e[2],t+1,2*r+1,2*o),this._forEach(e[3],t+1,2*r+1,2*o+1)))},e}();return o});