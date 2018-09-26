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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Evented","../../../core/accessorSupport/decorators","../../../webscene/Lighting"],function(e,t,i,n,o,a,s){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(t){var i=e.call(this)||this;i.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0},i.cameraTrackingEnabled=!0,i.ambientOcclusionEnabled=!1;var n=(new Date).getFullYear(),o=new Date("March 15, "+n+" 12:00:00 UTC");return i._set("defaultDate",o),i._set("date",o),i}return i(t,e),Object.defineProperty(t.prototype,"defaultDate",{get:function(){return new Date(this._get("defaultDate").getTime())},set:function(e){var t=this._get("date")===this._get("defaultDate");e=new Date(e.getTime()),this._set("defaultDate",e),t&&this._set("date",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"date",{set:function(e){null!=e&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(e.getTime())),this._emitDateWillChange())},enumerable:!0,configurable:!0}),t.prototype.autoUpdate=function(e,t){var i=this._calculateTimezoneOffset(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=t.hours,this.positionTimezoneInfo.minutes=t.minutes,this.positionTimezoneInfo.seconds=t.seconds;var n=null;null!=e&&(this.positionTimezoneInfo.autoUpdated=!0,n=this.date&&this.date.getTime(),this._set("date",new Date(e.getTime())),this._emitDateWillChange());var o=this._calculateTimezoneOffset(this.positionTimezoneInfo);if(i!==o&&(p.target=this,p.timezoneOffset=o,this.emit("timezone-will-change",p)),null!=e)return n!==e.getTime()},t.prototype._calculateTimezoneOffset=function(e){return Math.round(e.hours+e.minutes/60+e.seconds/3600)},t.prototype._emitDateWillChange=function(){u.target=this,l.setTime(this._get("date").getTime()),u.date=l,this.emit("date-will-change",u)},n([a.property({type:Boolean})],t.prototype,"cameraTrackingEnabled",void 0),n([a.property({type:Boolean})],t.prototype,"ambientOcclusionEnabled",void 0),n([a.property({type:Date})],t.prototype,"defaultDate",null),n([a.property({type:Date})],t.prototype,"date",null),t=n([a.subclass("esri.views.3d.environment.SceneViewLighting")],t)}(a.declared(s,o));t.SceneViewLighting=r;var l=new Date,u={target:null,date:null},p={target:null,timezoneOffset:0};t.default=r});