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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","@dojo/framework/shim/AbortController","../../../Basemap","../../../core/Collection","../../../core/Error","../../../core/Handles","../../../core/Loadable","../../../core/Logger","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../portal/Portal","./LocalBasemapsSource"],function(t,e,r,o,a,s,l,n,p,i,u,c,d,h,y,f){var m=l.ofType(s),b="esri.widgets.BasemapGallery.support.PortalBasemapsSource",B=u.getLogger(b);return function(t){function e(e){var r=t.call(this)||this;return r._handles=new p,r.basemaps=new m,r.filterFunction=null,r.portal=y.getDefault(),r.query=null,r.updateBasemapsCallback=null,r}return r(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([d.init(this,["filterFunction","loadStatus","portal.basemapGalleryGroupQuery","portal.user","query","updateBasemapsCallback"],function(){return t.refresh()})])},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.filterFunction=null,this.portal=null},Object.defineProperty(e.prototype,"state",{get:function(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"},enumerable:!0,configurable:!0}),e.prototype.load=function(t){return this.addResolvingPromise(this.portal.load(t)),this.notifyChange("state"),this.when()},e.prototype.refresh=function(){var t=this;if("ready"===this.state){this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);var e=this.portal,r=new a.default;this._lastPortalBasemapFetchController=r,e.fetchBasemaps(this._toQueryString(this.query),r).then(function(e){return t._updateBasemaps(e)}).catch(function(e){if(c.isAbortError(e))throw e;B.warn(new n("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:e})),t._updateBasemaps()}).then(function(){t._lastPortalBasemapFetchController=null,t.notifyChange("state")}),this.notifyChange("state")}},e.prototype._toQueryString=function(t){return t&&"string"!=typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(" AND "):t},e.prototype._updateBasemaps=function(t){void 0===t&&(t=[]);var e=this.filterFunction?t.filter(this.filterFunction):t;e=this.updateBasemapsCallback?this.updateBasemapsCallback(e):e,this.basemaps.removeAll(),this.basemaps.addMany(e)},o([h.property({readOnly:!0,type:m})],e.prototype,"basemaps",void 0),o([h.property()],e.prototype,"filterFunction",void 0),o([h.property({type:y})],e.prototype,"portal",void 0),o([h.property()],e.prototype,"query",void 0),o([h.property({dependsOn:["loadStatus"],readOnly:!0})],e.prototype,"state",null),o([h.property()],e.prototype,"updateBasemapsCallback",void 0),e=o([h.subclass(b)],e)}(h.declared(f,i))});