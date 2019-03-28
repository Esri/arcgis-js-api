// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function n(t,i){this.x=t,this.y=i}return n.prototype.clone=function(){return new n(this.x,this.y)},n.prototype.equals=function(t,i){return t===this.x&&i===this.y},n.prototype.isEqual=function(t){return t.x===this.x&&t.y===this.y},n.prototype.setCoords=function(t,i){this.x=t,this.y=i},n.prototype.normalize=function(){var t=this.x,i=this.y,n=Math.sqrt(t*t+i*i);this.x/=n,this.y/=n},n.prototype.rightPerpendicular=function(){var t=this.x;this.x=this.y,this.y=-t},n.prototype.move=function(t,i){this.x+=t,this.y+=i},n.prototype.assign=function(t){this.x=t.x,this.y=t.y},n.prototype.assignAdd=function(t,i){this.x=t.x+i.x,this.y=t.y+i.y},n.prototype.assignSub=function(t,i){this.x=t.x-i.x,this.y=t.y-i.y},n.prototype.rotate=function(t,i){var n=this.x,o=this.y;this.x=n*t-o*i,this.y=n*i+o*t},n.prototype.scale=function(t){this.x*=t,this.y*=t},n.prototype.length=function(){var t=this.x,i=this.y;return Math.sqrt(t*t+i*i)},n.distance=function(t,i){var n=i.x-t.x,o=i.y-t.y;return Math.sqrt(n*n+o*o)},n.add=function(t,i){return new n(t.x+i.x,t.y+i.y)},n.sub=function(t,i){return new n(t.x-i.x,t.y-i.y)},n}();i.Point=n});