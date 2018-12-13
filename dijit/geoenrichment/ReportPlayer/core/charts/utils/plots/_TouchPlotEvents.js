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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/MouseUtil"],function(e,t,n,s){var o=30,i=0,a={};return e(null,{_connectSingleEvent:function(e,c){function u(n){Math.abs(n.clientX-d.clientX)>o||Math.abs(n.clientY-d.clientY)>o||(e.type="onmouseover",v.raiseEvent(e),a[e.eventMask._maskId]=e,e.eventMask._touchOutsideHandle&&e.eventMask._touchOutsideHandle.remove(),e.eventMask._touchOutsideHandle=t(document.body,"touchstart",function(t){s.isMouseOver(e.eventMask.rawNode,{event:t})||(e.eventMask._touchOutsideHandle&&e.eventMask._touchOutsideHandle.remove(),e.type="onmouseout",v.raiseEvent(e),delete a[e.eventMask._maskId])}))}if(!n.isMobileDevice())return void this.inherited(arguments);var v=this;switch(e.eventMask._maskId=i++,c){case"onmouseover":var d;this._shapeEvents.push({shape:e.eventMask,handle:e.eventMask.connect("touchstart",this,function(e){Object.keys(a).forEach(function(e){var t=a[e];t.eventMask._touchOutsideHandle&&t.eventMask._touchOutsideHandle.remove(),t.type="onmouseout",v.raiseEvent(t),delete a[e]}),d=e})}),e.eventMask.connect("touchend",this,u),e.eventMask.connect("touchcancel",this,u)}}})});