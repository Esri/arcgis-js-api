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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,t,r,i,o,n){return function(e){function t(t){var r=e.call(this)||this;return r.respectsDaylightSaving=!1,r.timezone=null,r}r(t,e),o=t,t.prototype.readRespectsDaylightSaving=function(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving},t.prototype.clone=function(){var e=this,t=e.respectsDaylightSaving,r=e.timezone;return new o({respectsDaylightSaving:t,timezone:r})};var o;return i([n.property({type:Boolean,json:{write:!0}})],t.prototype,"respectsDaylightSaving",void 0),i([n.reader("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],t.prototype,"readRespectsDaylightSaving",null),i([n.property({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],t.prototype,"timezone",void 0),t=o=i([n.subclass("esri.layers.support.TimeReference")],t)}(n.declared(o.JSONSupport))});