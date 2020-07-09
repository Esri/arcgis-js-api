// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var e=function(){function t(){this.setIdentity()}return t.prototype.getAngle=function(){return(null==this.rz||0===this.rz&&1!==this.rz_c&&0!==this.rz_s)&&(this.rz=Math.atan2(this.rz_s,this.rz_c)),this.rz},t.prototype.setIdentity=function(){this.tx=0,this.ty=0,this.tz=0,this.s=1,this.rx=0,this.ry=0,this.rz=0,this.rz_c=1,this.rz_s=0},t.prototype.setTranslate=function(t,i){this.tx=t,this.ty=i},t.prototype.setTranslateZ=function(t){this.tz=t},t.prototype.setRotateCS=function(t,i){this.rz=void 0,this.rz_c=t,this.rz_s=i},t.prototype.setRotate=function(t){this.rz=t,this.rz_c=void 0,this.rz_s=void 0},t.prototype.setRotateY=function(t){this.ry=t},t.prototype.setScale=function(t){this.s=t},t.prototype.setMeasure=function(t){this.m=t},t}();i.Placement=e;var s=function(){function t(){}return t.prototype.next=function(){return null},t}();i.EmptyPlacementCursor=s}));