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

define(["../../../core/Evented","../../../webscene/Lighting"],function(e,t){var i=new Date,n={target:null,date:null},a={target:null,timezoneOffset:0},s=t.createSubclass([e],{declaredClass:"esri.views.3d.environment.SceneViewLighting",properties:{cameraTrackingEnabled:{value:!0},ambientOcclusionEnabled:{value:!1},defaultDate:{get:function(){return new Date(this._get("defaultDate"))},set:function(e){var t=this._get("date")===this._get("defaultDate");e=new Date(e),this._set("defaultDate",e),t&&this._set("date",e)}},date:{cast:function(e){return e},set:function(e){null!=e&&(this._set("date",new Date(e)),this.positionTimezoneInfo.autoUpdated=!1,this._emitDateWillChange())}}},constructor:function(){this.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0},this._autoUpdateDate=null;var e=(new Date).getFullYear(),t=new Date("March 15, "+e+" 12:00:00 UTC");this._set("defaultDate",t),this._set("date",t)},autoUpdate:function(e,t){var i=this._calculateTimezoneOffset(this.positionTimezoneInfo);if(this.positionTimezoneInfo.hours=t.hours,this.positionTimezoneInfo.minutes=t.minutes,this.positionTimezoneInfo.seconds=t.seconds,null!=e){this.positionTimezoneInfo.autoUpdated=!0;var n=this.date&&this.date.getTime();this._set("date",new Date(e)),this._emitDateWillChange()}var s=this._calculateTimezoneOffset(this.positionTimezoneInfo);return i!==s&&(a.target=this,a.timezoneOffset=s,this.emit("timezone-will-change",a)),null!=e?n!==e.getTime():void 0},_calculateTimezoneOffset:function(e){return Math.round(e.hours+e.minutes/60+e.seconds/3600)},_emitDateWillChange:function(){n.target=this,i.setTime(this._get("date").getTime()),n.date=i,this.emit("date-will-change",n)}});return s});