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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/accessorSupport/decorators"],function(e,t,r,i,n,s){var l={milliseconds:{getter:"getUTCMilliseconds",setter:"setUTCMilliseconds",multiplier:1},seconds:{getter:"getUTCSeconds",setter:"setUTCSeconds",multiplier:1},minutes:{getter:"getUTCMinutes",setter:"setUTCMinutes",multiplier:1},hours:{getter:"getUTCHours",setter:"setUTCHours",multiplier:1},days:{getter:"getUTCDate",setter:"setUTCDate",multiplier:1},weeks:{getter:"getUTCDate",setter:"setUTCDate",multiplier:7},months:{getter:"getUTCMonth",setter:"setUTCMonth",multiplier:1},years:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:1},decades:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:10},centuries:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:100}};return function(e){function t(t,r){var i=e.call(this)||this;return i.endTime=null,i.startTime=null,i}r(t,e),n=t,t.prototype.normalizeCtorArgs=function(e,t){return!e||e instanceof Date?{startTime:e,endTime:t}:e},t.prototype.readEndTime=function(e,t){return null!=t.endTime?new Date(t.endTime):null},t.prototype.writeEndTime=function(e,t,r){t.endTime=e?e.getTime():null},t.prototype.readStartTime=function(e,t){return null!=t.startTime?new Date(t.startTime):null},t.prototype.writeStartTime=function(e,t,r){t.startTime=e?e.getTime():null},t.prototype.clone=function(){return new n({endTime:this.endTime,startTime:this.startTime})},t.prototype.intersection=function(e){if(!e)return null;var t,r,i=this.startTime?this.startTime.getTime():-1/0,s=this.endTime?this.endTime.getTime():1/0,l=e.startTime?e.startTime.getTime():-1/0,o=e.endTime?e.endTime.getTime():1/0;if(l>=i&&l<=s?t=l:i>=l&&i<=o&&(t=i),s>=l&&s<=o?r=s:o>=i&&o<=s&&(r=o),isNaN(t)||isNaN(r))return null;var a=new n;return a.startTime=t===-1/0?null:new Date(t),a.endTime=r===1/0?null:new Date(r),a},t.prototype.offset=function(e,t){var r=new n,i=this,s=i.startTime,l=i.endTime;return s&&(r.startTime=this._offsetDate(s,e,t)),l&&(r.endTime=this._offsetDate(l,e,t)),r},t.prototype._offsetDate=function(e,t,r){var i=new Date(e.getTime());if(t&&r){var n=l[r];i[n.setter](i[n.getter]()+t*n.multiplier)}return i};var n;return i([s.property({type:Date,json:{write:{allowNull:!0}}})],t.prototype,"endTime",void 0),i([s.reader("endTime")],t.prototype,"readEndTime",null),i([s.writer("endTime")],t.prototype,"writeEndTime",null),i([s.property({type:Date,json:{write:{allowNull:!0}}})],t.prototype,"startTime",void 0),i([s.reader("startTime")],t.prototype,"readStartTime",null),i([s.writer("startTime")],t.prototype,"writeStartTime",null),t=n=i([s.subclass("esri.TimeExtent")],t)}(s.declared(n))});