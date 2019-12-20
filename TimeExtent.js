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

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/accessorSupport/decorators","./layers/support/timeUtils"],function(t,e,r,n,o,l,a){return function(t){function e(e){var r=t.call(this,e)||this;return r.end=null,r.start=null,r}r(e,t),o=e,e.prototype.readEnd=function(t,e){return null!=e.end?new Date(e.end):null},e.prototype.writeEnd=function(t,e,r){e.end=t?t.getTime():null},e.prototype.readStart=function(t,e){return null!=e.start?new Date(e.start):null},e.prototype.writeStart=function(t,e,r){e.start=t?t.getTime():null},e.prototype.clone=function(){return new o({end:this.end,start:this.start})},e.prototype.intersection=function(t){if(!t)return null;var e,r,n=this.start?this.start.getTime():-1/0,l=this.end?this.end.getTime():1/0,a=t.start?t.start.getTime():-1/0,i=t.end?t.end.getTime():1/0;if(a>=n&&a<=l?e=a:n>=a&&n<=i&&(e=n),l>=a&&l<=i?r=l:i>=n&&i<=l&&(r=i),!isNaN(e)&&!isNaN(r)){var s=new o;return s.start=e===-1/0?null:new Date(e),s.end=r===1/0?null:new Date(r),s}return null},e.prototype.offset=function(t,e){var r=new o,n=this,l=n.start,i=n.end;return l&&(r.start=a.offsetDate(l,t,e)),i&&(r.end=a.offsetDate(i,t,e)),r},e.prototype.equals=function(t){if(!t)return!1;var e=this.start?this.start.getTime():null,r=this.end?this.end.getTime():null,n=t.start?t.start.getTime():null,o=t.end?t.end.getTime():null;return e===n&&r===o};var o;return n([l.property({type:Date,json:{write:{allowNull:!0}}})],e.prototype,"end",void 0),n([l.reader("end")],e.prototype,"readEnd",null),n([l.writer("end")],e.prototype,"writeEnd",null),n([l.property({type:Date,json:{write:{allowNull:!0}}})],e.prototype,"start",void 0),n([l.reader("start")],e.prototype,"readStart",null),n([l.writer("start")],e.prototype,"writeStart",null),e=o=n([l.subclass("esri.TimeExtent")],e)}(l.declared(o.JSONSupport))});