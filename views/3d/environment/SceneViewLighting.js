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

define(["../../../core/Evented","../../../webscene/Lighting"],function(e,t){var i=new Date("March 15, 2015 12:00:00 UTC"),n=new Date,o={target:null,date:null},s={target:null,timezoneOffset:0},a=t.createSubclass([e],{declaredClass:"esri.views.3d.environment.SceneViewLighting",classMetadata:{properties:{cameraTrackingEnabled:{value:!0},date:{copy:function(e,t){e.setTime(t.getTime())},setter:function(e,t){return null==e?this.date:(t||(t=new Date),t.setTime("number"==typeof e?e:e.getTime()),e!==i&&e!==this._autoUpdateDate&&(this.positionTimezoneInfo.autoUpdated=!1),o.target=this,t?(n.setTime(t.getTime()),o.date=n):o.date=null,this.emit("date-will-change",o),t)}}}},constructor:function(){this.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0},this._autoUpdateDate=null},getDefaults:function(){return{date:i}},_calculateTimezoneOffset:function(e){return Math.round(e.hours+e.minutes/60+e.seconds/3600)},autoUpdate:function(e,t){var i=this._calculateTimezoneOffset(this.positionTimezoneInfo);if(this.positionTimezoneInfo.hours=t.hours,this.positionTimezoneInfo.minutes=t.minutes,this.positionTimezoneInfo.seconds=t.seconds,this.positionTimezoneInfo.autoUpdated=!0,null!=e){var n=this.date&&this.date.getTime();this._autoUpdateDate=e,this.date=e,this._autoUpdateDate=null}var o=this._calculateTimezoneOffset(this.positionTimezoneInfo);return i!==o&&(s.target=this,s.timezoneOffset=o,this.emit("timezone-will-change",s)),null!=e?n!==e.getTime():void 0}});return a});