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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojox/gfx","dojox/dgauges/ScaleIndicatorBase","dojo/_base/event"],function(i,e,t,a){return i("esri.dijit.ObliqueViewer.OVCircularValueIndicator",t,{indicatorShapeFunc:function(i,e){return i.createLine({x1:0,y1:0,x2:40,y2:0}).setStroke({color:"black",width:1})},refreshRendering:function(){this.inherited(arguments);var i=isNaN(this._transitionValue)?this.value:this._transitionValue,t=this.scale.positionForValue(i);this._gfxGroup.setTransform([{dx:this.scale.originX,dy:this.scale.originY},e.matrix.rotateg(t)])},_onMouseDown:function(i){this.inherited(arguments);var e=this.scale._gauge._gaugeToPage(this.scale.originX,this.scale.originY),t=180*Math.atan2(i.pageY-e.y,i.pageX-e.x)/Math.PI+this.azimuthAngle;this.set("value",this.scale.valueForPosition(t)),a.stop(i)},_onMouseMove:function(i){this.inherited(arguments);var e=this.scale._gauge._gaugeToPage(this.scale.originX,this.scale.originY),t=180*Math.atan2(i.pageY-e.y,i.pageX-e.x)/Math.PI+this.azimuthAngle;this.set("value",this.scale.valueForPosition(t))}})});