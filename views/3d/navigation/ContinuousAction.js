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

define(["../../../core/Accessor","../lib/glMatrix"],function(t,i){var e=i.vec3d,s=t.createSubclass({properties:{active:{get:function(){return 0!==this.velocity},dependsOn:["velocity"],readOnly:!0},velocity:{}},constructor:function(){this.direction=e.create(),this.velocity=0,this.timer=0,this.status=0},stop:function(){this.status=this.velocity=this.timer=0,e.set3(0,0,0,this.direction)},step:function(t){var i;return t*=.001,this.timer>0?(t=Math.min(t,this.timer),i=this.velocity*t*(1-t/(2*this.timer)),this.velocity*=1-t/this.timer,this.timer-=t):i=this.velocity*t,i}});return s});