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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports"],function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.callbacks=t,this.currentCount=0,this.callbacks.condition||(this.callbacks.condition=function(){return!0})}return t.prototype.handle=function(t){var e=t.data,i=e.pointers.size;switch(e.action){case"start":this.currentCount=i,this.emitStart(t);break;case"added":this.emitEnd(this.previousEvent),this.currentCount=i,this.emitStart(t);break;case"update":this.emitUpdate(t);break;case"removed":this.startEvent&&this.emitEnd(this.previousEvent),this.currentCount=i,this.emitStart(t);break;case"end":this.emitEnd(t),this.currentCount=0}this.previousEvent=t},t.prototype.emitStart=function(t){this.startEvent=t,this.callbacks.condition(this.currentCount,t)&&this.callbacks.start(this.currentCount,t,this.startEvent)},t.prototype.emitUpdate=function(t){this.callbacks.condition(this.currentCount,t)&&this.callbacks.update(this.currentCount,t,this.startEvent)},t.prototype.emitEnd=function(t){this.callbacks.condition(this.currentCount,t)&&this.callbacks.end(this.currentCount,t,this.startEvent),this.startEvent=null},t}();e.DragEventSeparator=i});