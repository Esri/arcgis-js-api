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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/accessorSupport/decorators","./layers/support/timeUtils"],function(t,e,r,n,o,a,i){return function(t){function e(e){var r=t.call(this)||this;return r.end=null,r.start=null,r}r(e,t),o=e,e.prototype.readEnd=function(t,e){return null!=e.end?new Date(e.end):null},e.prototype.writeEnd=function(t,e,r){e.end=t?t.getTime():null},e.prototype.readStart=function(t,e){return null!=e.start?new Date(e.start):null},e.prototype.writeStart=function(t,e,r){e.start=t?t.getTime():null},e.prototype.clone=function(){return new o({end:this.end,start:this.start})},e.prototype.intersection=function(t){if(!t)return null;var e,r,n=this.start?this.start.getTime():-1/0,a=this.end?this.end.getTime():1/0,i=t.start?t.start.getTime():-1/0,s=t.end?t.end.getTime():1/0;if(i>=n&&i<=a?e=i:n>=i&&n<=s&&(e=n),a>=i&&a<=s?r=a:s>=n&&s<=a&&(r=s),!isNaN(e)&&!isNaN(r)){var l=new o;return l.start=e===-1/0?null:new Date(e),l.end=r===1/0?null:new Date(r),l}return null},e.prototype.offset=function(t,e){var r=new o,n=this,a=n.start,s=n.end;return a&&(r.start=i.offsetDate(a,t,e)),s&&(r.end=i.offsetDate(s,t,e)),r},e.prototype.equals=function(t){return!!t&&(this.start.getTime()===t.start.getTime()&&this.end.getTime()===t.end.getTime())};var o;return n([a.property({type:Date,json:{write:{allowNull:!0}}})],e.prototype,"end",void 0),n([a.reader("end")],e.prototype,"readEnd",null),n([a.writer("end")],e.prototype,"writeEnd",null),n([a.property({type:Date,json:{write:{allowNull:!0}}})],e.prototype,"start",void 0),n([a.reader("start")],e.prototype,"readStart",null),n([a.writer("start")],e.prototype,"writeStart",null),e=o=n([a.subclass("esri.TimeExtent")],e)}(a.declared(o))});