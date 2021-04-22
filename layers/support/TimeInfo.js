/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","./timeUtils","../../TimeExtent","../../TimeInterval","./TimeReference"],(function(e,t,r,i,l,n,o,a,u,s,p,c,d,m,v,y,T,f){"use strict";var _;let w=_=function(t){function r(e){var r;return(r=t.call(this,e)||this).cumulative=!1,r.endField=null,r.fullTimeExtent=null,r.hasLiveData=!1,r.interval=null,r.startField=null,r.timeReference=null,r.trackIdField=null,r.useTime=!0,r}e._inheritsLoose(r,t);var l=r.prototype;return l.readFullTimeExtent=function(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const r=new Date(t.timeExtent[0]),i=new Date(t.timeExtent[1]);return new y({start:r,end:i})},l.writeFullTimeExtent=function(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null},l.readInterval=function(e,t){return t.timeInterval&&t.timeIntervalUnits?new T({value:t.timeInterval,unit:v.timeUnitKebabDictionary.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new T({value:t.defaultTimeInterval,unit:v.timeUnitKebabDictionary.fromJSON(t.defaultTimeIntervalUnits)}):null},l.writeInterval=function(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null},l.clone=function(){const{cumulative:e,endField:t,hasLiveData:r,interval:l,startField:n,timeReference:o,fullTimeExtent:a,trackIdField:u,useTime:s}=this;return new _({cumulative:e,endField:t,hasLiveData:r,interval:l,startField:n,timeReference:i.clone(o),fullTimeExtent:i.clone(a),trackIdField:u,useTime:s})},r}(m.JSONSupport);return t.__decorate([o.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],w.prototype,"cumulative",void 0),t.__decorate([o.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],w.prototype,"endField",void 0),t.__decorate([o.property({type:y,json:{write:{enabled:!0,allowNull:!0}}})],w.prototype,"fullTimeExtent",void 0),t.__decorate([a.reader("fullTimeExtent",["timeExtent"])],w.prototype,"readFullTimeExtent",null),t.__decorate([s.writer("fullTimeExtent")],w.prototype,"writeFullTimeExtent",null),t.__decorate([o.property({type:Boolean,json:{write:!0}})],w.prototype,"hasLiveData",void 0),t.__decorate([o.property({type:T,json:{write:{enabled:!0,allowNull:!0}}})],w.prototype,"interval",void 0),t.__decorate([a.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],w.prototype,"readInterval",null),t.__decorate([s.writer("interval")],w.prototype,"writeInterval",null),t.__decorate([o.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],w.prototype,"startField",void 0),t.__decorate([o.property({type:f,json:{write:{enabled:!0,allowNull:!0}}})],w.prototype,"timeReference",void 0),t.__decorate([o.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],w.prototype,"trackIdField",void 0),t.__decorate([o.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],w.prototype,"useTime",void 0),w=_=t.__decorate([u.subclass("esri.layers.support.TimeInfo")],w),w}));
