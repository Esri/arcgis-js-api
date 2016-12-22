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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../2d/layers/support/TileKey"],function(e,r,t){var o=function(){function e(e){if(!("index"in e))throw new Error("The tilemap is missing the 'index' property.");this._tilemap=e.index}return e.prototype.dataKey=function(e){var r=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return null;for(var o=e;0!==o.level;)o=new t(o.level-1,o.row>>1,o.col>>1,o.world),r.push(o);var i,l,n=this._tilemap,a=r.pop();if(1===n)return a;for(;r.length;){i=r.pop();var f=a.level+1,h=2*a.row,c=2*a.col,p=[t.getId(f,h,c,i.world),t.getId(f,h,c+1,i.world),t.getId(f,h+1,c,i.world),t.getId(f,h+1,c+1,i.world)];if(l=p.indexOf(i.id),n){if(0===n[l]){a=null;break}if(1===n[l]){a=i;break}a=i,n=n[l]}}return a},e.prototype.forEach=function(e,r,t,o,i){this._callback=i,this._maxLevel=r+e,this._forEach(this._tilemap,r,t,o)},e.prototype._forEach=function(e,r,t,o){0!==e&&(this._callback(r,t,o),r!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],r+1,2*t,2*o),this._forEach(e[1],r+1,2*t,2*o+1),this._forEach(e[2],r+1,2*t+1,2*o),this._forEach(e[3],r+1,2*t+1,2*o+1)))},e}();return o});