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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../TimeExtent","../../TimeInterval","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./TimeReference","./timeUtils"],(function(e,t,r,i,l,n,a,o,u,p){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.cumulative=!1,r.endField=null,r.fullTimeExtent=null,r.hasLiveData=!1,r.interval=null,r.startField=null,r.timeReference=null,r.trackIdField=null,r.useTime=!0,r}var n;return r.__extends(t,e),n=t,t.prototype.readFullTimeExtent=function(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;var r=new Date(t.timeExtent[0]),l=new Date(t.timeExtent[1]);return new i({start:r,end:l})},t.prototype.writeFullTimeExtent=function(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null},t.prototype.readInterval=function(e,t){return t.timeInterval&&t.timeIntervalUnits?new l({value:t.timeInterval,unit:p.timeUnitKebabDictionary.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new l({value:t.defaultTimeInterval,unit:p.timeUnitKebabDictionary.fromJSON(t.defaultTimeIntervalUnits)}):null},t.prototype.writeInterval=function(e,t){if(e){var r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null},t.prototype.clone=function(){var e=this,t=e.cumulative,r=e.endField,i=e.hasLiveData,l=e.interval,o=e.startField,u=e.timeReference,p=e.fullTimeExtent,d=e.trackIdField,m=e.useTime;return new n({cumulative:t,endField:r,hasLiveData:i,interval:l,startField:o,timeReference:a.clone(u),fullTimeExtent:a.clone(p),trackIdField:d,useTime:m})},r.__decorate([o.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],t.prototype,"cumulative",void 0),r.__decorate([o.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],t.prototype,"endField",void 0),r.__decorate([o.property({type:i,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"fullTimeExtent",void 0),r.__decorate([o.reader("fullTimeExtent",["timeExtent"])],t.prototype,"readFullTimeExtent",null),r.__decorate([o.writer("fullTimeExtent")],t.prototype,"writeFullTimeExtent",null),r.__decorate([o.property({type:Boolean,json:{write:!0}})],t.prototype,"hasLiveData",void 0),r.__decorate([o.property({type:l,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"interval",void 0),r.__decorate([o.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],t.prototype,"readInterval",null),r.__decorate([o.writer("interval")],t.prototype,"writeInterval",null),r.__decorate([o.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],t.prototype,"startField",void 0),r.__decorate([o.property({type:u,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"timeReference",void 0),r.__decorate([o.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"trackIdField",void 0),r.__decorate([o.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],t.prototype,"useTime",void 0),t=n=r.__decorate([o.subclass("esri.layers.support.TimeInfo")],t)}(n.JSONSupport)}));