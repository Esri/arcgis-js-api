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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./SearchLayer"],function(e,r,t,o,a,d,n,s,p){var l=a.ofType(p);return function(e){function r(r){var t=e.call(this,r)||this;return t.addressSearchEnabled=!0,t.enabled=!0,t.hintText=null,t.layers=new l,t}t(r,e),a=r,r.prototype.readAddressSearchEnabled=function(e,r){return!e},r.prototype.writeAddressSearchEnabled=function(e,r,t){r[t]=!e},r.prototype.clone=function(){return new a(n.clone({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers}))};var a;return o([s.property({type:Boolean,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder"},default:!0,origins:{"web-scene":{read:!1,write:!1}}}})],r.prototype,"addressSearchEnabled",void 0),o([s.reader("addressSearchEnabled")],r.prototype,"readAddressSearchEnabled",null),o([s.writer("addressSearchEnabled")],r.prototype,"writeAddressSearchEnabled",null),o([s.property({type:Boolean,json:{write:!0,default:!0}})],r.prototype,"enabled",void 0),o([s.property({type:String,json:{write:!0}})],r.prototype,"hintText",void 0),o([s.property({type:l,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"layers",void 0),r=a=o([s.subclass("esri.webdoc.applicationProperties.Search")],r)}(s.declared(d.JSONSupport))});