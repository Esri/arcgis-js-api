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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,t,r,i,o){return function(e){function t(t){var r=e.call(this,t)||this;return r.respectsDaylightSaving=!1,r.timezone=null,r}var i;return r.__extends(t,e),i=t,t.prototype.readRespectsDaylightSaving=function(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving},t.prototype.clone=function(){var e=this.respectsDaylightSaving,t=this.timezone;return new i({respectsDaylightSaving:e,timezone:t})},r.__decorate([o.property({type:Boolean,json:{write:!0}})],t.prototype,"respectsDaylightSaving",void 0),r.__decorate([o.reader("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],t.prototype,"readRespectsDaylightSaving",null),r.__decorate([o.property({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],t.prototype,"timezone",void 0),t=i=r.__decorate([o.subclass("esri.layers.support.TimeReference")],t)}(i.JSONSupport)}));