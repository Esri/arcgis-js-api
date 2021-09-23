/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../TimeExtent","../../TimeInterval","../../core/JSONSupport","../../core/lang","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./TimeReference","../../portal/timeUnitKebabDictionary"],(function(e,t,r,i,n,l,o,a,u,s,p,c,d,m,v,y){"use strict";var T;let f=T=function(t){function n(e){var r;return(r=t.call(this,e)||this).cumulative=!1,r.endField=null,r.fullTimeExtent=null,r.hasLiveData=!1,r.interval=null,r.startField=null,r.timeReference=null,r.trackIdField=null,r.useTime=!0,r}e._inheritsLoose(n,t);var a=n.prototype;return a.readFullTimeExtent=function(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const i=new Date(t.timeExtent[0]),n=new Date(t.timeExtent[1]);return new r({start:i,end:n})},a.writeFullTimeExtent=function(e,t){e&&o.isSome(e.start)&&o.isSome(e.end)?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null},a.readInterval=function(e,t){return t.timeInterval&&t.timeIntervalUnits?new i({value:t.timeInterval,unit:y.timeUnitKebabDictionary.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new i({value:t.defaultTimeInterval,unit:y.timeUnitKebabDictionary.fromJSON(t.defaultTimeIntervalUnits)}):null},a.writeInterval=function(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null},a.clone=function(){const{cumulative:e,endField:t,hasLiveData:r,interval:i,startField:n,timeReference:o,fullTimeExtent:a,trackIdField:u,useTime:s}=this;return new T({cumulative:e,endField:t,hasLiveData:r,interval:i,startField:n,timeReference:l.clone(o),fullTimeExtent:l.clone(a),trackIdField:u,useTime:s})},n}(n.JSONSupport);return t.__decorate([a.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],f.prototype,"cumulative",void 0),t.__decorate([a.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],f.prototype,"endField",void 0),t.__decorate([a.property({type:r,json:{write:{enabled:!0,allowNull:!0}}})],f.prototype,"fullTimeExtent",void 0),t.__decorate([c.reader("fullTimeExtent",["timeExtent"])],f.prototype,"readFullTimeExtent",null),t.__decorate([m.writer("fullTimeExtent")],f.prototype,"writeFullTimeExtent",null),t.__decorate([a.property({type:Boolean,json:{write:!0}})],f.prototype,"hasLiveData",void 0),t.__decorate([a.property({type:i,json:{write:{enabled:!0,allowNull:!0}}})],f.prototype,"interval",void 0),t.__decorate([c.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],f.prototype,"readInterval",null),t.__decorate([m.writer("interval")],f.prototype,"writeInterval",null),t.__decorate([a.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],f.prototype,"startField",void 0),t.__decorate([a.property({type:v,json:{write:{enabled:!0,allowNull:!0}}})],f.prototype,"timeReference",void 0),t.__decorate([a.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],f.prototype,"trackIdField",void 0),t.__decorate([a.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],f.prototype,"useTime",void 0),f=T=t.__decorate([d.subclass("esri.layers.support.TimeInfo")],f),f}));
