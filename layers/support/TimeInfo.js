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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../TimeExtent","../../TimeSpan","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./TimeReference","./timeUtils"],function(e,t,r,i,o,n,l,p,a,s,u){return function(e){function t(t){var r=e.call(this)||this;return r.cumulative=!1,r.endField=null,r.hasLiveData=!1,r.interval=null,r.offset=null,r.startField=null,r.timeReference=null,r.timeExtent=null,r.trackIdField=null,r.useTime=void 0,r}r(t,e),l=t,t.prototype.readInterval=function(e,t){var r=t.timeInterval,i=u.timeUnitKebabDictionary.fromJSON(t.timeIntervalUnits);return r&&i?new n({value:r,unit:i}):null},t.prototype.writeInterval=function(e,t){if(e){var r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null},t.prototype.readOffset=function(e,t){var r=t.exportOptions.timeOffset,i=u.timeUnitKebabDictionary.fromJSON(t.exportOptions.timeOffsetUnits);return r&&i?new n({value:r,unit:i}):null},t.prototype.writeOffset=function(e,t){if(t.exportOptions||(t.exportOptions={}),e){var r=e.toJSON();t.exportOptions.timeOffset=r.value,t.exportOptions.timeOffsetUnits=r.unit}else t.exportOptions.timeOffset=null,t.exportOptions.timeOffsetUnits=null},t.prototype.readTimeExtent=function(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;var r=t.timeExtent[0],i=t.timeExtent[1];return new o({start:r,end:i})},t.prototype.writeTimeExtent=function(e,t,r){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null},t.prototype.clone=function(){var e=this,t=e.cumulative,r=e.endField,i=e.hasLiveData,o=e.interval,n=e.offset,a=e.startField,s=e.timeReference,u=e.timeExtent,m=e.trackIdField,d=e.useTime;return new l({cumulative:t,endField:r,hasLiveData:i,interval:o,offset:n,startField:a,timeReference:p.clone(s),timeExtent:p.clone(u),trackIdField:m,useTime:d})};var l;return i([a.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],t.prototype,"cumulative",void 0),i([a.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],t.prototype,"endField",void 0),i([a.property({type:Boolean,json:{write:!0}})],t.prototype,"hasLiveData",void 0),i([a.property({type:n,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"interval",void 0),i([a.reader("interval",["timeInterval","timeIntervalUnits"])],t.prototype,"readInterval",null),i([a.writer("interval")],t.prototype,"writeInterval",null),i([a.property({type:n,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"offset",void 0),i([a.reader("offset",["exportOptions.timeOffset","exportOptions.timeOffset"])],t.prototype,"readOffset",null),i([a.writer("offset")],t.prototype,"writeOffset",null),i([a.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],t.prototype,"startField",void 0),i([a.property({type:s,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"timeReference",void 0),i([a.property({type:o,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"timeExtent",void 0),i([a.reader("timeExtent")],t.prototype,"readTimeExtent",null),i([a.writer("timeExtent")],t.prototype,"writeTimeExtent",null),i([a.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"trackIdField",void 0),i([a.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],t.prototype,"useTime",void 0),t=l=i([a.subclass("esri.layers.support.TimeInfo")],t)}(a.declared(l))});