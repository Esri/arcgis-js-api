// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Basemap","../../../core/Collection","../../../core/Error","../../../core/Handles","../../../core/Loadable","../../../core/Logger","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../portal/Portal","./LocalBasemapsSource"],function(t,e,a,r,o,s,n,l,p,i,u,c,d,h){var y=s.ofType(o),f="esri.widgets.BasemapGallery.support.PortalBasemapsSource",m=i.getLogger(f);return function(t){function e(e){var a=t.call(this)||this;return a._handles=new l,a.basemaps=new y,a.filterFunction=null,a.portal=d.getDefault(),a.query=null,a.updateBasemapsCallback=null,a}return a(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([u.init(this,["filterFunction","loadStatus","portal.basemapGalleryGroupQuery","portal.user","query","updateBasemapsCallback"],function(){return t.refresh()})])},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.filterFunction=null,this.portal=null},Object.defineProperty(e.prototype,"state",{get:function(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetch?"loading":"ready"},enumerable:!0,configurable:!0}),e.prototype.load=function(){return this.addResolvingPromise(this.portal.load()),this.notifyChange("state"),this.when()},e.prototype.refresh=function(){var t=this;if("ready"===this.state){this._lastPortalBasemapFetch&&(this._lastPortalBasemapFetch.cancel(),this._lastPortalBasemapFetch=null);var e=this.portal,a=!1,r=function(){return a=!0};this._lastPortalBasemapFetch={cancel:function(){r()}},e.fetchBasemaps(this._toQueryString(this.query)).then(function(e){a||t._updateBasemaps(e)}).catch(function(e){a||(m.warn(new n("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:e})),t._updateBasemaps())}).then(function(){a||(t._lastPortalBasemapFetch=null,t.notifyChange("state"))}),this.notifyChange("state")}},e.prototype._toQueryString=function(t){return t&&"string"!=typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(" AND "):t},e.prototype._updateBasemaps=function(t){void 0===t&&(t=[]);var e=this.filterFunction?t.filter(this.filterFunction):t;e=this.updateBasemapsCallback?this.updateBasemapsCallback(e):e,this.basemaps.removeAll(),this.basemaps.addMany(e)},r([c.property({readOnly:!0,type:y})],e.prototype,"basemaps",void 0),r([c.property()],e.prototype,"filterFunction",void 0),r([c.property({type:d})],e.prototype,"portal",void 0),r([c.property()],e.prototype,"query",void 0),r([c.property({dependsOn:["loadStatus"],readOnly:!0})],e.prototype,"state",null),r([c.property()],e.prototype,"updateBasemapsCallback",void 0),e=r([c.subclass(f)],e)}(c.declared(h,p))});