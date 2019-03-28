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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["../../declare","../../units","./StudyAreaOptions"],function(i,t,r){return i("esri.tasks.geoenrichment.RingBuffer",[r],{radii:null,units:null,constructor:function(i){i&&(i.bufferRadii?this.radii=i.bufferRadii:i.radius?this.radii=[i.radius]:i.radii&&(this.radii=i.radii),this.units=i.bufferUnits||i.units),this.radii||(this.radii=[1]),this.units||(this.units=t.MILES)},toJson:function(){return{areaType:"RingBuffer",bufferUnits:this.units,bufferRadii:this.radii}}})});