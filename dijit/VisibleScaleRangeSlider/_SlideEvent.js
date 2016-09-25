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

define(["dojo/_base/array","dojo/_base/declare"],function(e,t){return t(null,{declaredClass:"esri.dijit.VisibleScaleRangeSlider._SlideEvent",_events:["onMouseMove","onFirstMove",{name:"onMoveStop",hookTo:"destroy"}],postCreate:function(){this.inherited(arguments),this._extendMover(this._movable),this._extendMover(this._movableBar,"rangebar"),this._extendMover(this._movableMax,"max")},_extendMover:function(t,o){if(t){var n=t.mover,i=this._events,a={};e.forEach(i,function(e){var i,r,s,d,l,v,h;"object"==typeof e?(r=e.name,i=e.hookTo):r=e,s=n.prototype[r]||function(){},d=o||"",l="slide"+d+"-"+r.toLowerCase(),v=function(){s.apply(this,arguments),this.widget.emit(l,{movable:t})},i&&(h=n.prototype[i],a[i]=function(){h.apply(this,arguments),v.apply(this,arguments)}),a[r]=v}),n.extend(a)}}})});