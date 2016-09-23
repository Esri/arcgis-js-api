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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/LinkedList","../../core/declare"],function(e,t){var s=t([e],{classMetadata:{properties:{view:{dependsOn:["gestureManager.view"]}}},constructor:function(){this.on("add, remove",this._collectEvents.bind(this))},removers:null,_gestureManager:null,_gestureManagerSetter:function(e){return this._addCustomGestures(),e},_gestures:null,_eventsGetter:function(){return this._gestures},_customGestures:null,_customGesturesSetter:function(e){return this._addCustomGestures(),e},_viewGetter:function(){return this.get("gestureManager.view")},_gestureConfig:null,_phaseDict:{1:"start",2:"move",4:"end",8:"cancel",START:1,MOVE:2,END:4,CANCEL:8},processEvent:function(e){var t=e&&(e.type||e.name||e.eventType);e.lastEvent=this._lastEvt,"hammer.input"===t&&(t="input");var s,r=this.first,n=!0;if(!e.screenPoint){var i=this.view.pageToContainer(e.center.x,e.center.y);e.screenPoint={x:i[0],y:i[1]}}for(;r;){var u=r[t];u&&(s=u.call(r,e),n=s!==!1&&e.canceled!==!0),r=n&&this.next()}e.eventType<this._phaseDict.END&&"scroll"!==t?this._lastEvt=e:this._lastEvt=null,n&&this.view.emit(t,e)},_collectEvents:function(){var e=this.first,t=[];for(this._gestureConfig=this._collectCustoms();e;)t=t.concat(e.get("events")),e=this.next();return this._gestures=t,t},_collectCustoms:function(){for(var e,t=this.first,s=null;t;){if(e=t.customGestures)if(s)for(var r=Object.keys(e),n=r.length-1;n>=0;n--){var i=r[n];s[i]||(s[i]=e[i])}else s=e;t=this.next()}if(null!=s&&this.gestureManager){this._gestureConfig=s;var u=this.gestureManager;s.forEach(function(e){u.addGesture(e)})}return s},_addCustomGestures:function(){if(this._gestureManager&&this._customGestures){var e=this._gestureManager;this.customGestures.forEach(function(t){e.addGesture(t)})}}});return s});