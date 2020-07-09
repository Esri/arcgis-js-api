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

define(["require","exports","tslib","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./SearchLayer"],(function(e,r,t,a,o,d,n,s){var i=a.ofType(s);return function(e){function r(r){var t=e.call(this,r)||this;return t.addressSearchEnabled=!0,t.enabled=!0,t.hintText=null,t.layers=new i,t}var a;return t.__extends(r,e),a=r,r.prototype.readAddressSearchEnabled=function(e){return!e},r.prototype.writeAddressSearchEnabled=function(e,r,t){r[t]=!e},r.prototype.clone=function(){return new a(d.clone({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers}))},t.__decorate([n.property({type:Boolean,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder"},default:!0,origins:{"web-scene":{read:!1,write:!1}}}})],r.prototype,"addressSearchEnabled",void 0),t.__decorate([n.reader("addressSearchEnabled")],r.prototype,"readAddressSearchEnabled",null),t.__decorate([n.writer("addressSearchEnabled")],r.prototype,"writeAddressSearchEnabled",null),t.__decorate([n.property({type:Boolean,json:{write:!0,default:!0}})],r.prototype,"enabled",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"hintText",void 0),t.__decorate([n.property({type:i,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"layers",void 0),r=a=t.__decorate([n.subclass("esri.webdoc.applicationProperties.Search")],r)}(o.JSONSupport)}));