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

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators"],(function(e,t,r,o,a){return function(e){function t(t){var r=e.call(this,t)||this;return r.date=null,r.directShadowsEnabled=!1,r.displayUTCOffset=null,r}var o;return r.__extends(t,e),o=t,t.prototype.readDate=function(e,t){return null!=t.datetime&&new Date(t.datetime)||null},t.prototype.writeDate=function(e,t,r){t[r]=e.getTime()},t.prototype.readDirectShadowsEnabled=function(e,t){return!!t.directShadows},t.prototype.writedirectShadowsEnabled=function(e,t,r){e&&(t[r]=e)},t.prototype.writeDisplayUTCOffset=function(e,t){null!=e&&(t.displayUTCOffset=e)},t.prototype.clone=function(){return new o(this.cloneConstructProperties())},t.prototype.cloneConstructProperties=function(){var e={directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null};return null!=this.date&&(e.date=new Date(this.date.getTime())),e},r.__decorate([a.property({type:Date,json:{type:Number,write:{target:"datetime"}}})],t.prototype,"date",void 0),r.__decorate([a.reader("date",["datetime"])],t.prototype,"readDate",null),r.__decorate([a.writer("date")],t.prototype,"writeDate",null),r.__decorate([a.property({type:Boolean,json:{default:!1,write:{target:"directShadows"}}})],t.prototype,"directShadowsEnabled",void 0),r.__decorate([a.reader("directShadowsEnabled",["directShadows"])],t.prototype,"readDirectShadowsEnabled",null),r.__decorate([a.writer("directShadowsEnabled")],t.prototype,"writedirectShadowsEnabled",null),r.__decorate([a.property({type:Number,json:{write:!0}})],t.prototype,"displayUTCOffset",void 0),r.__decorate([a.writer("displayUTCOffset")],t.prototype,"writeDisplayUTCOffset",null),t=o=r.__decorate([a.subclass("esri.webscene.Lighting")],t)}(o.JSONSupport)}));