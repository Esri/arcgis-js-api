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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["../../core/declare"],function(e){return e(null,{declaredClass:"esri.dijit.ScaleRangeSlider._SlideEvent",_events:["onMouseMove","onFirstMove",{name:"onMoveStop",hookTo:"destroy"}],postCreate:function(){this.inherited(arguments),this._extendMover(this._movable),this._extendMover(this._movableBar,"rangebar"),this._extendMover(this._movableMax,"max")},_extendMover:function(e,t){if(e){var o=e.mover,n=this._events,i={};n.forEach(function(n){var r,a,s,v,d,h,l;"object"==typeof n?(a=n.name,r=n.hookTo):a=n,s=o.prototype[a]||function(){},v=t||"",d="slide"+v+"-"+a.toLowerCase(),h=function(){s.apply(this,arguments),this.widget.emit(d,{movable:e})},r&&(l=o.prototype[r],i[r]=function(){l.apply(this,arguments),h.apply(this,arguments)}),i[a]=h}),o.extend(i)}}})});