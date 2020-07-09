// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Evented","../../../core/accessorSupport/decorators","../../../webscene/Lighting"],(function(e,t,n,o,i,a){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var n=e.call(this,t)||this;n.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0},n.cameraTrackingEnabled=!0,n.ambientOcclusionEnabled=!1,n.waterReflectionEnabled=!1;var o=(new Date).getFullYear(),i=new Date("March 15, "+o+" 12:00:00 UTC");return n._set("defaultDate",i),n._set("date",i),n}var o;return n.__extends(t,e),o=t,t.fromWebsceneLighting=function(e){return new o(n.__assign({},e.cloneConstructProperties()))},Object.defineProperty(t.prototype,"defaultDate",{get:function(){return new Date(this._get("defaultDate").getTime())},set:function(e){var t=this._get("date")===this._get("defaultDate");e=new Date(e.getTime()),this._set("defaultDate",e),t&&this._set("date",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"date",{set:function(e){null!=e&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(e.getTime())))},enumerable:!0,configurable:!0}),t.prototype.autoUpdate=function(e,t){var n=r(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=t.hours,this.positionTimezoneInfo.minutes=t.minutes,this.positionTimezoneInfo.seconds=t.seconds;var o=null;null!=e&&(this.positionTimezoneInfo.autoUpdated=!0,o=this.date&&this.date.getTime(),this._set("date",new Date(e.getTime())));var i=r(this.positionTimezoneInfo);if(n!==i&&(d.target=this,d.timezoneOffset=i,this.emit("timezone-will-change",d)),null!=e)return o!==e.getTime()},t.prototype.clone=function(){var e=this._get("date")===this._get("defaultDate"),t=new o(n.__assign(n.__assign({},this.cloneConstructProperties()),{defaultDate:this.defaultDate,cameraTrackingEnabled:this.cameraTrackingEnabled,ambientOcclusionEnabled:this.ambientOcclusionEnabled,waterReflectionEnabled:this.waterReflectionEnabled}));return e&&t._set("date",t._get("defaultDate")),t.positionTimezoneInfo.autoUpdated=this.positionTimezoneInfo.autoUpdated,t.positionTimezoneInfo.hours=this.positionTimezoneInfo.hours,t.positionTimezoneInfo.minutes=this.positionTimezoneInfo.minutes,t.positionTimezoneInfo.seconds=this.positionTimezoneInfo.seconds,t},t.prototype.cloneWithWebsceneLighting=function(e){var t=this.clone();return null!=e.date&&(t.date=e.date),t.directShadowsEnabled=e.directShadowsEnabled,t.displayUTCOffset=e.displayUTCOffset,t},n.__decorate([i.property({type:Boolean})],t.prototype,"cameraTrackingEnabled",void 0),n.__decorate([i.property({type:Boolean})],t.prototype,"ambientOcclusionEnabled",void 0),n.__decorate([i.property({type:Boolean})],t.prototype,"waterReflectionEnabled",void 0),n.__decorate([i.property({type:Date})],t.prototype,"defaultDate",null),n.__decorate([i.property({type:Date})],t.prototype,"date",null),t=o=n.__decorate([i.subclass("esri.views.3d.environment.SceneViewLighting")],t)}(o.EventedMixin(a));function r(e){var t=e.hours,n=e.minutes,o=e.seconds;return Math.round(t+n/60+o/3600)}t.SceneViewLighting=s,t.calculateTimezoneOffset=r;var d={target:null,timezoneOffset:0};t.default=s}));