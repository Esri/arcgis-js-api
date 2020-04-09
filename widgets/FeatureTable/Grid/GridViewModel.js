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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators","./Column"],(function(e,t,r,o,n,s,i,p,u,l,a){return function(e){function t(t){var r=e.call(this,t)||this;return r.cellClassNameGenerator=null,r.columnReorderingEnabled=!0,r.columns=new u,r.dataProvider=function(e,t){var o=e.page,n=e.pageSize;return i(r,void 0,void 0,(function(){var e,r;return s(this,(function(s){switch(s.label){case 0:return e=this.store,t?e?[4,e.query({start:o*n,num:n})]:(t&&t([]),[2]):[2];case 1:return r=s.sent(),t(r),[2]}}))}))},r.pageSize=50,r.rowDetailsRenderer=null,r.store=null,r}return r(t,e),Object.defineProperty(t.prototype,"size",{get:function(){return this.store&&this.store.count||0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this.store;return e&&"disabled"!==e.state?"loading"===e.state?"loading":"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.sortColumn=function(e,t){var r=this.findColumn(e);r&&(r.direction=t)},t.prototype.createColumnsFromParams=function(e){this.columns.removeAll(),e&&e.length&&this.columns.addMany(e.map((function(e){return new a(e)})))},t.prototype.showAllColumns=function(){this.columns.forEach((function(e){return e.hidden=!1}))},t.prototype.findColumn=function(e){return this.columns.find((function(t){return t.path===e}))},t.prototype.hideColumn=function(e){var t=this.findColumn(e);t&&(t.hidden=!0)},t.prototype.showColumn=function(e){var t=this.findColumn(e);t&&(t.hidden=!1)},t.prototype.getRowItemAt=function(e){return this.store&&this.store.getItemAt(e)},t.prototype.refresh=function(){this.store&&(this.store.reset(),this.store.load())},o([l.property()],t.prototype,"cellClassNameGenerator",void 0),o([l.property()],t.prototype,"columnReorderingEnabled",void 0),o([l.property()],t.prototype,"columns",void 0),o([l.property()],t.prototype,"dataProvider",void 0),o([l.property()],t.prototype,"pageSize",void 0),o([l.property()],t.prototype,"rowDetailsRenderer",void 0),o([l.property({readOnly:!0,dependsOn:["store.count"]})],t.prototype,"size",null),o([l.property()],t.prototype,"store",void 0),o([l.property({dependsOn:["store","store.querying","store.state","store.syncing"],readOnly:!0})],t.prototype,"state",null),t=o([l.subclass("esri.widgets.FeatureTable.Grid.GridViewModel")],t)}(l.declared(p))}));