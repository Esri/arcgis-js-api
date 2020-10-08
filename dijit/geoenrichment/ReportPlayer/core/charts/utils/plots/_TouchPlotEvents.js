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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/MouseUtil"],(function(e,t,n,s){var o=0,i={};return e(null,{_connectSingleEvent:function(e,a){if(n.isMobileDevice()){var c=this;switch(e.eventMask._maskId=o++,a){case"onmouseover":var u;function v(n){Math.abs(n.clientX-u.clientX)>30||Math.abs(n.clientY-u.clientY)>30||(e.type="onmouseover",c.raiseEvent(e),i[e.eventMask._maskId]=e,e.eventMask._touchOutsideHandle&&e.eventMask._touchOutsideHandle.remove(),e.eventMask._touchOutsideHandle=t(document.body,"touchstart",(function(t){s.isMouseOver(e.eventMask.rawNode,{event:t})||(e.eventMask._touchOutsideHandle&&e.eventMask._touchOutsideHandle.remove(),e.type="onmouseout",c.raiseEvent(e),delete i[e.eventMask._maskId])})))}this._shapeEvents.push({shape:e.eventMask,handle:e.eventMask.connect("touchstart",this,(function(e){Object.keys(i).forEach((function(e){var t=i[e];t.eventMask._touchOutsideHandle&&t.eventMask._touchOutsideHandle.remove(),t.type="onmouseout",c.raiseEvent(t),delete i[e]})),u=e}))}),e.eventMask.connect("touchend",this,v),e.eventMask.connect("touchcancel",this,v)}}else this.inherited(arguments)}})}));