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

define([],function(){var t=function(o,r){this.coords=o,this.id=t.getId(o),this.lodInfo=r};return t.prototype={clone:function(){return new t(this.coords,this.lodInfo)},intersects:function(t){{var o=this.coords,r=t.coords,n=this.lodInfo;t.lodInfo}if(o[2]===r[2])return o[3]===r[3]&&o[1]===r[1];var e=o[2]<r[2]?o:r,n=(e===o?this:t).lodInfo,i=n.getIntersectingTile(e===o?t:this).coords;return e[2]===i[2]&&e[1]===i[1]&&e[3]===i[3]}},Object.defineProperties(t.prototype,{level:{get:function(){return this.coords[2]}},row:{get:function(){return this.coords[1]}},col:{get:function(){return this.coords[0]}},world:{get:function(){return this.coords[3]},set:function(o){var r=this.coords;r[3]=o,r[0]=this.lodInfo.getXForWorld(r[0],o),this.id=t.getId(r)}}}),t.getId=function(t,o,r,n){return(Array.isArray(t)?t:null!=n?[t,o,r,n]:[t,o,r]).join("/")},t});