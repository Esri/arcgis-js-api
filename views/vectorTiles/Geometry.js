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

define(["require","exports"],function(t,i){var n=function(){function t(t,i){this.x=t,this.y=i}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.equals=function(t,i){return t===this.x&&i===this.y},t.prototype.isEqual=function(t){return t.x===this.x&&t.y===this.y},t.prototype.setCoords=function(t,i){this.x=t,this.y=i},t.prototype.normalize=function(){var t=this.x,i=this.y,n=Math.sqrt(t*t+i*i);this.x/=n,this.y/=n},t.prototype.rightPerpendicular=function(){var t=this.x;this.x=this.y,this.y=-t},t.prototype.move=function(t,i){this.x+=t,this.y+=i},t.prototype.assign=function(t){this.x=t.x,this.y=t.y},t.prototype.assignAdd=function(t,i){this.x=t.x+i.x,this.y=t.y+i.y},t.prototype.assignSub=function(t,i){this.x=t.x-i.x,this.y=t.y-i.y},t.prototype.rotate=function(t,i){var n=this.x,o=this.y;this.x=n*t-o*i,this.y=n*i+o*t},t.prototype.scale=function(t){this.x*=t,this.y*=t},t.prototype.length=function(){var t=this.x,i=this.y;return Math.sqrt(t*t+i*i)},t.distance=function(t,i){var n=i.x-t.x,o=i.y-t.y;return Math.sqrt(n*n+o*o)},t.add=function(i,n){return new t(i.x+n.x,i.y+n.y)},t.sub=function(i,n){return new t(i.x-n.x,i.y-n.y)},t}();i.Point=n});