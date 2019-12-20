// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../TimeExtent","../../TimeInterval","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./TimeReference","./timeUtils"],function(e,t,r,i,l,n,o,a,u,p,m){return function(e){function t(t){var r=e.call(this,t)||this;return r.cumulative=!1,r.endField=null,r.fullTimeExtent=null,r.hasLiveData=!1,r.interval=null,r.startField=null,r.timeReference=null,r.trackIdField=null,r.useTime=!0,r}r(t,e),o=t,t.prototype.readFullTimeExtent=function(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;var r=t.timeExtent[0],i=t.timeExtent[1];return new l({start:r,end:i})},t.prototype.writeFullTimeExtent=function(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null},t.prototype.readInterval=function(e,t){return t.timeInterval&&t.timeIntervalUnits?new n({value:t.timeInterval,unit:m.timeUnitKebabDictionary.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new n({value:t.defaultTimeInterval,unit:m.timeUnitKebabDictionary.fromJSON(t.defaultTimeIntervalUnits)}):null},t.prototype.writeInterval=function(e,t){if(e){var r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null},t.prototype.clone=function(){var e=this,t=e.cumulative,r=e.endField,i=e.hasLiveData,l=e.interval,n=e.startField,u=e.timeReference,p=e.fullTimeExtent,m=e.trackIdField,d=e.useTime;return new o({cumulative:t,endField:r,hasLiveData:i,interval:l,startField:n,timeReference:a.clone(u),fullTimeExtent:a.clone(p),trackIdField:m,useTime:d})};var o;return i([u.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],t.prototype,"cumulative",void 0),i([u.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],t.prototype,"endField",void 0),i([u.property({type:l,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"fullTimeExtent",void 0),i([u.reader("fullTimeExtent",["timeExtent"])],t.prototype,"readFullTimeExtent",null),i([u.writer("fullTimeExtent")],t.prototype,"writeFullTimeExtent",null),i([u.property({type:Boolean,json:{write:!0}})],t.prototype,"hasLiveData",void 0),i([u.property({type:n,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"interval",void 0),i([u.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],t.prototype,"readInterval",null),i([u.writer("interval")],t.prototype,"writeInterval",null),i([u.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],t.prototype,"startField",void 0),i([u.property({type:p,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"timeReference",void 0),i([u.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"trackIdField",void 0),i([u.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],t.prototype,"useTime",void 0),t=o=i([u.subclass("esri.layers.support.TimeInfo")],t)}(u.declared(o.JSONSupport))});