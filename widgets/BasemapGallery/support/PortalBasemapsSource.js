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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","@dojo/framework/shim/AbortController","../../../Basemap","../../../core/Collection","../../../core/Error","../../../core/Handles","../../../core/Loadable","../../../core/Logger","../../../core/Promise","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../portal/Portal","./LocalBasemapsSource"],(function(t,e,r,a,o,s,l,n,i,p,u,c,d,h,y,f){"use strict";var m=s.ofType(o),_="esri.widgets.BasemapGallery.support.PortalBasemapsSource",b=p.getLogger(_);return function(t){function e(e){var r=t.call(this,e)||this;return r._handles=new n,r.basemaps=new m,r.filterFunction=null,r.portal=y.getDefault(),r.query=null,r.updateBasemapsCallback=null,r}return r.__extends(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([d.init(this,["filterFunction","loadStatus","portal.basemapGalleryGroupQuery","portal.user","query","updateBasemapsCallback"],(function(){return t.refresh()}))])},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.filterFunction=null,this.portal=null},Object.defineProperty(e.prototype,"state",{get:function(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"},enumerable:!1,configurable:!0}),e.prototype.load=function(t){return this.addResolvingPromise(this.portal.load(t)),this.notifyChange("state"),c.resolve(this)},e.prototype.refresh=function(){return r.__awaiter(this,void 0,void 0,(function(){var t,e,o,s;return r.__generator(this,(function(r){switch(r.label){case 0:if("ready"!==this.state)return[2];this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null),t=this.portal,e=new a.default,this._lastPortalBasemapFetchController=e,this.notifyChange("state"),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.fetchBasemaps(this._toQueryString(this.query),e)];case 2:return o=r.sent(),this._updateBasemaps(o),[3,4];case 3:if(s=r.sent(),c.isAbortError(s))throw s;return b.warn(new l("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:s})),this._updateBasemaps(),[3,4];case 4:return this._lastPortalBasemapFetchController=null,this.notifyChange("state"),[2]}}))}))},e.prototype._toQueryString=function(t){return t&&"string"!=typeof t?Object.keys(t).map((function(e){return e+":"+t[e]})).join(" AND "):t},e.prototype._updateBasemaps=function(t){void 0===t&&(t=[]);var e=this.filterFunction?t.filter(this.filterFunction):t;e=this.updateBasemapsCallback?this.updateBasemapsCallback(e):e,this.basemaps.removeAll(),this.basemaps.addMany(e)},r.__decorate([h.property({readOnly:!0,type:m})],e.prototype,"basemaps",void 0),r.__decorate([h.property()],e.prototype,"filterFunction",void 0),r.__decorate([h.property({type:y})],e.prototype,"portal",void 0),r.__decorate([h.property()],e.prototype,"query",void 0),r.__decorate([h.property({dependsOn:["loadStatus"],readOnly:!0})],e.prototype,"state",null),r.__decorate([h.property()],e.prototype,"updateBasemapsCallback",void 0),e=r.__decorate([h.subclass(_)],e)}(i.LoadableMixin(u.EsriPromiseMixin(f)))}));