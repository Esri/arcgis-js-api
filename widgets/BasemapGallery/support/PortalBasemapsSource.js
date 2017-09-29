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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/watchUtils","./LocalBasemapsSource","../../../Basemap","../../../core/Collection","../../../core/HandleRegistry","../../../portal/Portal"],function(t,e,r,o,a,n,s,i,l,p,u){var c=l.ofType(i),y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._handles=new p,e.basemaps=new c,e.filterFunction=null,e.portal=null,e.query=null,e}return r(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([n.init(this,["filterFunction","portal.basemapGalleryGroupQuery","portal.user","query"],function(){return t.refresh()})])},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.filterFunction=null,this.portal=null},Object.defineProperty(e.prototype,"state",{get:function(){return this._get("state")},enumerable:!0,configurable:!0}),e.prototype.refresh=function(){var t=this;this._set("state","loading"),this._lastPortalBasemapFetch&&(this._lastPortalBasemapFetch.cancel(),this._lastPortalBasemapFetch=null);var e=this.portal;if(!e)return this.basemaps.removeAll(),void this._set("state","ready");var r=!1,o=function(){return r=!0};this._lastPortalBasemapFetch={cancel:function(){o()}},e.load().then(function(){return r?void 0:e.fetchBasemaps(t._toQueryString(t.query))}).then(function(e){if(!r){var o=t.filterFunction?e.filter(t.filterFunction):e;t.basemaps.removeAll(),t.basemaps.addMany(o)}}).otherwise(function(){r||t.basemaps.removeAll()}).then(function(){r||t._set("state","ready")})},e.prototype._toQueryString=function(t){return t&&"string"!=typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(" AND "):t},o([a.property({readOnly:!0,type:c})],e.prototype,"basemaps",void 0),o([a.property()],e.prototype,"filterFunction",void 0),o([a.property({type:u})],e.prototype,"portal",void 0),o([a.property()],e.prototype,"query",void 0),o([a.property({readOnly:!0,value:"loading"})],e.prototype,"state",null),e=o([a.subclass("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],e)}(a.declared(s));return y});