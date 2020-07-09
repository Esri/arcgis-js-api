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

define(["require","exports","tslib","../core/Accessor","../core/Error","../core/Logger","../core/maybe","../core/urlUtils","../core/accessorSupport/decorators","@dojo/framework/shim/Promise"],(function(e,t,r,o,a,i,p,n,s){var l=i.getLogger("esri.portal.PortalItemResource");return function(t){function o(e){var r=t.call(this,e)||this;return r.portalItem=null,r}return r.__extends(o,t),o.prototype.normalizeCtorArgs=function(e){return e&&e.portalItem&&e.path?r.__assign(r.__assign({},e),{path:this.normalizePath(e.path,e.portalItem)}):e},Object.defineProperty(o.prototype,"path",{set:function(e){p.isSome(e)&&n.isAbsolute(e)?l.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)},enumerable:!0,configurable:!0}),o.prototype._castPath=function(e){return this.normalizePath(e,this.portalItem)},Object.defineProperty(o.prototype,"url",{get:function(){return this.portalItem&&this.path?this.portalItem.itemUrl+"/resources/"+this.path:null},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"itemRelativeUrl",{get:function(){return this.portalItem&&this.path?"./resources/"+this.path:null},enumerable:!0,configurable:!0}),o.prototype.fetch=function(e,t){void 0===e&&(e="json");var r=this.url;if(p.isNone(r))throw new a("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(r,{responseType:e,signal:p.get(t,"signal")})},o.prototype.update=function(t,o){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,new Promise((function(t,r){e(["./support/resourceUtils"],t,r)}))];case 1:return[2,r.sent().addOrUpdateResource(this,"update",t,o)]}}))}))},o.prototype.hasPath=function(){return p.isSome(this.path)},o.prototype.normalizePath=function(e,t){return p.isNone(e)?e:(e=e.replace(/^\/+/,""),p.isSome(t)&&n.isAbsolute(e)&&(e=n.makeRelative(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))},r.__decorate([s.property()],o.prototype,"portalItem",void 0),r.__decorate([s.property({type:String,value:null})],o.prototype,"path",null),r.__decorate([s.cast("path")],o.prototype,"_castPath",null),r.__decorate([s.property({type:String,readOnly:!0,dependsOn:["portalItem","path"]})],o.prototype,"url",null),r.__decorate([s.property({type:String,readOnly:!0,dependsOn:["portalItem","path"]})],o.prototype,"itemRelativeUrl",null),o=r.__decorate([s.subclass("esri.portal.PortalItemResource")],o)}(o)}));