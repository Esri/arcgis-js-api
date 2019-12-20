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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../TimeExtent","../../TimeInterval","../../core/JSONSupport","../../core/lang","../../core/object","../../core/accessorSupport/decorators"],function(e,t,r,n,o,p,i,u,l,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.currentTimeExtent=null,r.fullTimeExtent=null,r.numStops=null,r.numThumbs=null,r.stopDelay=null,r.stopInterval=null,r}r(t,e),i=t,t.prototype.readCurrentTimeExtent=function(e){if(e){var t=null!=e[0]?new Date(e[0]):null,r=null!=e[1]?new Date(e[1]):null;return new o({start:t,end:r})}},t.prototype.writeCurrentTimeExtent=function(e,t,r){e&&l.setDeepValue(r,[e.start?e.start.getTime():null,e.end?e.end.getTime():null],t)},t.prototype.readFullTimeExtent=function(e,t){var r=t.properties;if(r){var n=null!=r.endTime?new Date(r.endTime):null,p=null!=r.startTime?new Date(r.startTime):null;return new o({start:p,end:n})}},t.prototype.writeFullTimeExtent=function(e,t){if(e){var r=t.properties=t.properties||{},n=e.end,o=e.start;n&&(r.endTime=n?n.getTime():null),o&&(r.startTime=o?o.getTime():null)}},t.prototype.readStopInterval=function(e,t,r){return e?p.fromJSON({value:e.interval,unit:e.units},r):null},t.prototype.writeStopInterval=function(e,t,r,n){if(e){var o=e.toJSON(n);l.setDeepValue(r,{interval:o.value,units:o.unit},t)}},t.prototype.clone=function(){return new i(u.clone({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval}))};var i;return n([s.property({type:o,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],t.prototype,"currentTimeExtent",void 0),n([s.reader("currentTimeExtent")],t.prototype,"readCurrentTimeExtent",null),n([s.writer("currentTimeExtent")],t.prototype,"writeCurrentTimeExtent",null),n([s.property({type:o,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],t.prototype,"fullTimeExtent",void 0),n([s.reader("fullTimeExtent")],t.prototype,"readFullTimeExtent",null),n([s.writer("fullTimeExtent")],t.prototype,"writeFullTimeExtent",null),n([s.property({type:Number,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy:function(){var e=!!this.stopInterval;return{enabled:!e,isRequired:!e}}}}})],t.prototype,"numStops",void 0),n([s.property({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],t.prototype,"numThumbs",void 0),n([s.property({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],t.prototype,"stopDelay",void 0),n([s.property({type:p,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy:function(){return{isRequired:null==this.numStops}}}}})],t.prototype,"stopInterval",void 0),n([s.reader("stopInterval")],t.prototype,"readStopInterval",null),n([s.writer("stopInterval")],t.prototype,"writeStopInterval",null),t=i=n([s.subclass("esri.webdoc.widgets.TimeSlider")],t)}(s.declared(i.JSONSupport))});