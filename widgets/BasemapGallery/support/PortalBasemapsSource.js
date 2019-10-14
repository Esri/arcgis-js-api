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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","@dojo/framework/shim/AbortController","../../../Basemap","../../../core/Collection","../../../core/Error","../../../core/Handles","../../../core/Loadable","../../../core/Logger","../../../core/Promise","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../portal/Portal","./LocalBasemapsSource"],function(t,e,r,o,a,s,l,n,i,p,u,c,d,h,y,f,m,b,g){var B=i.ofType(n),C="esri.widgets.BasemapGallery.support.PortalBasemapsSource",v=d.getLogger(C);return function(t){function e(e){var r=t.call(this)||this;return r._handles=new u,r.basemaps=new B,r.filterFunction=null,r.portal=b.getDefault(),r.query=null,r.updateBasemapsCallback=null,r}return r(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([f.init(this,["filterFunction","loadStatus","portal.basemapGalleryGroupQuery","portal.user","query","updateBasemapsCallback"],function(){return t.refresh()})])},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.filterFunction=null,this.portal=null},Object.defineProperty(e.prototype,"state",{get:function(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"},enumerable:!0,configurable:!0}),e.prototype.load=function(t){return this.addResolvingPromise(this.portal.load(t)),this.notifyChange("state"),this.when()},e.prototype.refresh=function(){return s(this,void 0,void 0,function(){var t,e,r,o;return a(this,function(a){switch(a.label){case 0:if("ready"!==this.state)return[2];this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null),t=this.portal,e=new l.default,this._lastPortalBasemapFetchController=e,this.notifyChange("state"),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,t.fetchBasemaps(this._toQueryString(this.query),e)];case 2:return r=a.sent(),this._updateBasemaps(r),[3,4];case 3:if(o=a.sent(),y.isAbortError(o))throw o;return v.warn(new p("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:o})),this._updateBasemaps(),[3,4];case 4:return this._lastPortalBasemapFetchController=null,this.notifyChange("state"),[2]}})})},e.prototype._toQueryString=function(t){return t&&"string"!=typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(" AND "):t},e.prototype._updateBasemaps=function(t){void 0===t&&(t=[]);var e=this.filterFunction?t.filter(this.filterFunction):t;e=this.updateBasemapsCallback?this.updateBasemapsCallback(e):e,this.basemaps.removeAll(),this.basemaps.addMany(e)},o([m.property({readOnly:!0,type:B})],e.prototype,"basemaps",void 0),o([m.property()],e.prototype,"filterFunction",void 0),o([m.property({type:b})],e.prototype,"portal",void 0),o([m.property()],e.prototype,"query",void 0),o([m.property({dependsOn:["loadStatus"],readOnly:!0})],e.prototype,"state",null),o([m.property()],e.prototype,"updateBasemapsCallback",void 0),e=o([m.subclass(C)],e)}(m.declared(c.LoadableMixin(h.EsriPromiseMixin(g))))});