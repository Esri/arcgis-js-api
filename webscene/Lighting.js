// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators"],function(e,t,r,d,o,a){var i=n=function(e){function t(t){var r=e.call(this,t)||this;return r.date=null,r.directShadowsEnabled=!1,r.displayUTCOffset=null,r}return r(t,e),t.prototype.readDate=function(e,t){return null!=t.datetime&&new Date(t.datetime)||null},t.prototype.writeDate=function(e,t){null!=e&&(t.datetime=e.getTime())},t.prototype.readDirectShadowsEnabled=function(e,t){return!!t.directShadows},t.prototype.writedirectShadowsEnabled=function(e,t){e&&(t.directShadows=!0)},t.prototype.writeDisplayUTCOffset=function(e,t){null!=e&&(t.displayUTCOffset=e)},t.prototype.clone=function(){return new n({date:null!=this.date?new Date(this.date.getTime()):null,directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null})},t.sanitizeJSON=function(e){var t={datetime:e.datetime};return void 0!==e.directShadows&&(t.directShadows=!!e.directShadows),void 0!==e.displayUTCOffset&&(t.displayUTCOffset=e.displayUTCOffset),t},t}(a.declared(o));d([a.property({type:Date})],i.prototype,"date",void 0),d([a.reader("date",["datetime"])],i.prototype,"readDate",null),d([a.writer("date")],i.prototype,"writeDate",null),d([a.property({type:Boolean})],i.prototype,"directShadowsEnabled",void 0),d([a.reader("directShadowsEnabled",["directShadows"])],i.prototype,"readDirectShadowsEnabled",null),d([a.writer("directShadowsEnabled")],i.prototype,"writedirectShadowsEnabled",null),d([a.property({type:Number,json:{write:!0}})],i.prototype,"displayUTCOffset",void 0),d([a.writer("displayUTCOffset")],i.prototype,"writeDisplayUTCOffset",null),i=n=d([a.subclass("esri.webscene.Lighting")],i);var n;return i});