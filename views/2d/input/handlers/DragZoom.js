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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(t,e,n,i,r){var s=function(t){function e(e,n,i){var r=this;t.call(this,"esri.views.2d.input.handlers.DragZoom - "+n,!0),this.view=e,this.pointerType=n,this.event={x:0,y:0,width:0,height:0,direction:1},this.registerIncoming("drag",i,function(t){return r._handleDrag(t,i)}),this.registerIncoming("key-up",function(t){return r._handleKeyUp(t)})}return n(e,t),e.prototype._handleKeyUp=function(t){JSON.stringify(this.event)===JSON.stringify(this.view.zoomBox._event)&&this.view.zoomBox.interacting&&(this.view.zoomBox.end(this.event),t.stopPropagation())},e.prototype._handleDrag=function(t,e){var n=t.data;if(!(n.pointers.length>1)){var i=n.pointers[0];if(r.eventMatchesPointerType(i.startEvent["native"],this.pointerType)){var s=i.currentEvent.x,h=i.currentEvent.y,o=i.startEvent.x,a=i.startEvent.y;s>o?(this.event.x=o,this.event.width=s-o):(this.event.x=s,this.event.width=o-s),h>a?(this.event.y=a,this.event.height=h-a):(this.event.y=h,this.event.height=a-h),this.event.direction=e.length>1?-1:1;var v=this.view.zoomBox;switch(n.action){case"start":v.start(this.event);break;case"update":v.update(this.event);break;case"end":v.end(this.event)}t.stopPropagation()}}},e}(i.InputHandler);return s});