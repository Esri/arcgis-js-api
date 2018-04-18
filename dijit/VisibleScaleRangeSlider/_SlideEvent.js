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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/declare"],function(e,o){return o(null,{declaredClass:"esri.dijit.VisibleScaleRangeSlider._SlideEvent",_events:["onMouseMove","onFirstMove",{name:"onMoveStop",hookTo:"destroy"}],postCreate:function(){this.inherited(arguments),this._extendMover(this._movable),this._extendMover(this._movableBar,"rangebar"),this._extendMover(this._movableMax,"max")},_extendMover:function(o,t){if(o){var i=o.mover,n=this._events,a={};e.forEach(n,function(e){var n,r,s,d,l,v,h;"object"==typeof e?(r=e.name,n=e.hookTo):r=e,s=i.prototype[r]||function(){},d=t||"",l="slide"+d+"-"+r.toLowerCase(),v=function(){s.apply(this,arguments),this.widget.emit(l,{movable:o})},n&&(h=i.prototype[n],a[n]=function(){h.apply(this,arguments),v.apply(this,arguments)}),a[r]=v}),i.extend(a)}}})});