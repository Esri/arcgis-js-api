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

define(["../../../core/Evented","../../inputs/Handler"],function(t,e){var s=e.createSubclass([t],{declaredClass:"esri.views.2d.handlers.ZoomBox",constructor:function(){this._event={x:0,y:0,width:0,height:0}},_panStarted:!1,_startCoords:{},view:null,enabled:!1,drag:function(t){var e=this._event,s=t.eventType,i=t.screenPoint.x,n=t.screenPoint.y,r=this._startCoords.x||null,h=this._startCoords.y||null;return t.srcEvent.shiftKey===!0&&this._panStarted===!1&&4!==s&&(this._panStarted=!0,s=this._phaseDict.START),s===this._phaseDict.START&&t.srcEvent.shiftKey===!0?(t.preventDefault(),this.enabled=!0,this._startCoords={x:i,y:n},e.x=i,e.y=n,e.width=0,e.height=0,this.emit("start",e),!1):(i>r?(e.x=r,e.width=i-r):(e.x=i,e.width=r-i),n>h?(e.y=h,e.height=n-h):(e.y=n,e.height=h-n),this.enabled?(t.preventDefault(),s>=this._phaseDict.END?(this.enabled=!1,this._startCoords={},this._panStarted=!1,e.direction=t.srcEvent.ctrlKey?-1:1,this.emit("end",e),!1):(this.emit("update",e),!1)):void 0)}});return s});