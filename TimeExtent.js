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

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/accessorSupport/decorators"],function(t,e,r,n,s,l){var i={milliseconds:{getter:"getUTCMilliseconds",setter:"setUTCMilliseconds",multiplier:1},seconds:{getter:"getUTCSeconds",setter:"setUTCSeconds",multiplier:1},minutes:{getter:"getUTCMinutes",setter:"setUTCMinutes",multiplier:1},hours:{getter:"getUTCHours",setter:"setUTCHours",multiplier:1},days:{getter:"getUTCDate",setter:"setUTCDate",multiplier:1},weeks:{getter:"getUTCDate",setter:"setUTCDate",multiplier:7},months:{getter:"getUTCMonth",setter:"setUTCMonth",multiplier:1},years:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:1},decades:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:10},centuries:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:100}};return function(t){function e(e){var r=t.call(this)||this;return r.end=null,r.start=null,r}r(e,t),s=e,e.prototype.readEnd=function(t,e){return null!=e.end?new Date(e.end):null},e.prototype.writeEnd=function(t,e,r){e.end=t?t.getTime():null},e.prototype.readStart=function(t,e){return null!=e.start?new Date(e.start):null},e.prototype.writeStart=function(t,e,r){e.start=t?t.getTime():null},e.prototype.clone=function(){return new s({end:this.end,start:this.start})},e.prototype.intersection=function(t){if(!t)return null;var e,r,n=this.start?this.start.getTime():-1/0,l=this.end?this.end.getTime():1/0,i=t.start?t.start.getTime():-1/0,o=t.end?t.end.getTime():1/0;if(i>=n&&i<=l?e=i:n>=i&&n<=o&&(e=n),l>=i&&l<=o?r=l:o>=n&&o<=l&&(r=o),!isNaN(e)&&!isNaN(r)){var u=new s;return u.start=e===-1/0?null:new Date(e),u.end=r===1/0?null:new Date(r),u}return null},e.prototype.offset=function(t,e){var r=new s,n=this,l=n.start,i=n.end;return l&&(r.start=this._offsetDate(l,t,e)),i&&(r.end=this._offsetDate(i,t,e)),r},e.prototype._offsetDate=function(t,e,r){var n=new Date(t.getTime());if(e&&r){var s=i[r];n[s.setter](n[s.getter]()+e*s.multiplier)}return n};var s;return n([l.property({type:Date,json:{write:{allowNull:!0}}})],e.prototype,"end",void 0),n([l.reader("end")],e.prototype,"readEnd",null),n([l.writer("end")],e.prototype,"writeEnd",null),n([l.property({type:Date,json:{write:{allowNull:!0}}})],e.prototype,"start",void 0),n([l.reader("start")],e.prototype,"readStart",null),n([l.writer("start")],e.prototype,"writeStart",null),e=s=n([l.subclass("esri.TimeExtent")],e)}(l.declared(s))});