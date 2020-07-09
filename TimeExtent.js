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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","./core/JSONSupport","./core/accessorSupport/decorators","./layers/support/timeUtils"],(function(t,e,r,n,i,o){var l=function(t){function e(e){var r=t.call(this,e)||this;return r.end=null,r.start=null,r}var n;return r.__extends(e,t),n=e,Object.defineProperty(e,"allTime",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"empty",{get:function(){return s},enumerable:!0,configurable:!0}),e.prototype.readEnd=function(t,e){return null!=e.end?new Date(e.end):null},e.prototype.writeEnd=function(t,e){e.end=t?t.getTime():null},Object.defineProperty(e.prototype,"isAllTime",{get:function(){return this.equals(n.allTime)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEmpty",{get:function(){return this.equals(n.empty)},enumerable:!0,configurable:!0}),e.prototype.readStart=function(t,e){return null!=e.start?new Date(e.start):null},e.prototype.writeStart=function(t,e){e.start=t?t.getTime():null},e.prototype.clone=function(){return new n({end:this.end,start:this.start})},e.prototype.intersection=function(t){var e,r,i,o,l,a,s,u;if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return n.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();var d,p,c=null!==(r=null===(e=this.start)||void 0===e?void 0:e.getTime())&&void 0!==r?r:-1/0,y=null!==(o=null===(i=this.end)||void 0===i?void 0:i.getTime())&&void 0!==o?o:1/0,f=null!==(a=null===(l=t.start)||void 0===l?void 0:l.getTime())&&void 0!==a?a:-1/0,m=null!==(u=null===(s=t.end)||void 0===s?void 0:s.getTime())&&void 0!==u?u:1/0;if(f>=c&&f<=y?d=f:c>=f&&c<=m&&(d=c),y>=f&&y<=m?p=y:m>=c&&m<=y&&(p=m),!isNaN(d)&&!isNaN(p)){var v=new n;return v.start=d===-1/0?null:new Date(d),v.end=p===1/0?null:new Date(p),v}return n.empty},e.prototype.offset=function(t,e){if(this.isEmpty||this.isAllTime)return this.clone();var r=new n,i=this.start,l=this.end;return i&&(r.start=o.offsetDate(i,t,e)),l&&(r.end=o.offsetDate(l,t,e)),r},e.prototype.equals=function(t){if(!t)return!1;var e=this.start?this.start.getTime():this.start,r=this.end?this.end.getTime():this.end,n=t.start?t.start.getTime():t.start,i=t.end?t.end.getTime():t.end;return e===n&&r===i},r.__decorate([i.property({type:Date,json:{write:{allowNull:!0}}})],e.prototype,"end",void 0),r.__decorate([i.reader("end")],e.prototype,"readEnd",null),r.__decorate([i.writer("end")],e.prototype,"writeEnd",null),r.__decorate([i.property({dependsOn:["start","end"],readOnly:!0,json:{read:!1}})],e.prototype,"isAllTime",null),r.__decorate([i.property({dependsOn:["start","end"],readOnly:!0,json:{read:!1}})],e.prototype,"isEmpty",null),r.__decorate([i.property({type:Date,json:{write:{allowNull:!0}}})],e.prototype,"start",void 0),r.__decorate([i.reader("start")],e.prototype,"readStart",null),r.__decorate([i.writer("start")],e.prototype,"writeStart",null),e=n=r.__decorate([i.subclass("esri.TimeExtent")],e)}(n.JSONSupport),a=new l,s=new l({start:void 0,end:void 0});return l}));