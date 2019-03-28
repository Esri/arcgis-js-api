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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/Evented","../../../core/accessorSupport/decorators","../../../webscene/Lighting"],function(e,t,n,o,i,a,s,r){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(t){var n=e.call(this,t)||this;n.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0},n.cameraTrackingEnabled=!0,n.ambientOcclusionEnabled=!1;var o=(new Date).getFullYear(),i=new Date("March 15, "+o+" 12:00:00 UTC");return n._set("defaultDate",i),n._set("date",i),n}n(t,e),a=t,t.fromWebsceneLighting=function(e){return new a(i({},e.cloneConstructProperties()))},Object.defineProperty(t.prototype,"defaultDate",{get:function(){return new Date(this._get("defaultDate").getTime())},set:function(e){var t=this._get("date")===this._get("defaultDate");e=new Date(e.getTime()),this._set("defaultDate",e),t&&this._set("date",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"date",{set:function(e){null!=e&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(e.getTime())))},enumerable:!0,configurable:!0}),t.prototype.autoUpdate=function(e,t){var n=this._calculateTimezoneOffset(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=t.hours,this.positionTimezoneInfo.minutes=t.minutes,this.positionTimezoneInfo.seconds=t.seconds;var o=null;null!=e&&(this.positionTimezoneInfo.autoUpdated=!0,o=this.date&&this.date.getTime(),this._set("date",new Date(e.getTime())));var i=this._calculateTimezoneOffset(this.positionTimezoneInfo);if(n!==i&&(d.target=this,d.timezoneOffset=i,this.emit("timezone-will-change",d)),null!=e)return o!==e.getTime()},t.prototype.clone=function(){var e=this._get("date")===this._get("defaultDate"),t=new a(i({},this.cloneConstructProperties(),{defaultDate:this.defaultDate,cameraTrackingEnabled:this.cameraTrackingEnabled,ambientOcclusionEnabled:this.ambientOcclusionEnabled}));return e&&t._set("date",t._get("defaultDate")),t.positionTimezoneInfo.autoUpdated=this.positionTimezoneInfo.autoUpdated,t.positionTimezoneInfo.hours=this.positionTimezoneInfo.hours,t.positionTimezoneInfo.minutes=this.positionTimezoneInfo.minutes,t.positionTimezoneInfo.seconds=this.positionTimezoneInfo.seconds,t},t.prototype.cloneWithWebsceneLighting=function(e){var t=this.clone();return null!=e.date&&(t.date=e.date),t.directShadowsEnabled=e.directShadowsEnabled,t.displayUTCOffset=e.displayUTCOffset,t},t.prototype._calculateTimezoneOffset=function(e){return Math.round(e.hours+e.minutes/60+e.seconds/3600)};var a;return o([s.property({type:Boolean})],t.prototype,"cameraTrackingEnabled",void 0),o([s.property({type:Boolean})],t.prototype,"ambientOcclusionEnabled",void 0),o([s.property({type:Date})],t.prototype,"defaultDate",null),o([s.property({type:Date})],t.prototype,"date",null),t=a=o([s.subclass("esri.views.3d.environment.SceneViewLighting")],t)}(s.declared(r,a));t.SceneViewLighting=u;var d={target:null,timezoneOffset:0};t.default=u});