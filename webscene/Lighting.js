// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators"],function(e,t,r,d,o,i){var a=function(e){function t(t){e.call(this,t),this.date=null,this.directShadowsEnabled=!1,this.displayUTCOffset=null}return r(t,e),t.prototype.readDate=function(e,t){return null!=t.datetime&&new Date(t.datetime)||null},t.prototype.writeDate=function(e,t){null!=e&&(t.datetime=e.getTime())},t.prototype.readDirectShadowsEnabled=function(e,t){return!!t.directShadows},t.prototype.writedirectShadowsEnabled=function(e,t){e&&(t.directShadows=!0)},t.prototype.writeDisplayUTCOffset=function(e,t){null!=e&&(t.displayUTCOffset=e)},t.prototype.clone=function(){return new t({date:null!=this.date?new Date(this.date.getTime()):null,directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null})},t.sanitizeJSON=function(e){var t={datetime:e.datetime};return void 0!==e.directShadows&&(t.directShadows=!!e.directShadows),void 0!==e.displayUTCOffset&&(t.displayUTCOffset=e.displayUTCOffset),t},d([i.property({type:Date})],t.prototype,"date",void 0),d([i.read("date",["datetime"])],t.prototype,"readDate",null),d([i.write("date")],t.prototype,"writeDate",null),d([i.property({type:Boolean})],t.prototype,"directShadowsEnabled",void 0),d([i.read("directShadowsEnabled",["directShadows"])],t.prototype,"readDirectShadowsEnabled",null),d([i.write("directShadowsEnabled")],t.prototype,"writedirectShadowsEnabled",null),d([i.property({type:Number,json:{writable:!0}})],t.prototype,"displayUTCOffset",void 0),d([i.write("displayUTCOffset")],t.prototype,"writeDisplayUTCOffset",null),t=d([i.subclass("esri.webscene.Lighting")],t)}(i.declared(o));return a});