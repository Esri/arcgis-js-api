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

define(["require","exports","tslib","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators"],(function(e,t,o,r,n,i){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.cellClassNameGenerator=null,r.columnReorderingEnabled=!0,r.columns=new n,r.dataProvider=function(e,t){var n=e.page,i=e.pageSize;return o.__awaiter(r,void 0,void 0,(function(){var e,r;return o.__generator(this,(function(o){switch(o.label){case 0:return e=this.store,t?e?(r=t,[4,e.fetchItems({page:n,pageSize:i})]):(t&&t([]),[2]):[2];case 1:return r.apply(void 0,[o.sent()]),[2]}}))}))},r.pageSize=50,r.rowDetailsRenderer=null,r.store=null,r}return o.__extends(t,e),Object.defineProperty(t.prototype,"size",{get:function(){return this.store&&this.store.count||0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this.store;return e&&"disabled"!==e.state?"loading"===e.state?"loading":"ready":"disabled"},enumerable:!1,configurable:!0}),t.prototype.closeColumnMenus=function(){var e;null===(e=this.columns)||void 0===e||e.forEach((function(e){var t;return null===(t=e.menu)||void 0===t?void 0:t.set("open",!1)}))},t.prototype.sortColumn=function(e,t){var o=this.findColumn(e);o&&(o.direction=t)},t.prototype.hideColumn=function(e){var t=this.findColumn(e);t&&(t.hidden=!0)},t.prototype.showColumn=function(e){var t=this.findColumn(e);t&&(t.hidden=!1)},t.prototype.showAllColumns=function(){this.columns.forEach((function(e){return e.hidden=!1}))},t.prototype.findColumn=function(e){return this.columns.find((function(t){return t.path===e}))},t.prototype.getRowItemAt=function(e){return this.store&&this.store.getLocalItemAt(e)},t.prototype.refresh=function(){this.store&&(this.store.reset(),this.store.load())},o.__decorate([i.property()],t.prototype,"cellClassNameGenerator",void 0),o.__decorate([i.property()],t.prototype,"columnReorderingEnabled",void 0),o.__decorate([i.property()],t.prototype,"columns",void 0),o.__decorate([i.property()],t.prototype,"dataProvider",void 0),o.__decorate([i.property()],t.prototype,"pageSize",void 0),o.__decorate([i.property()],t.prototype,"rowDetailsRenderer",void 0),o.__decorate([i.property({readOnly:!0,dependsOn:["store.count"]})],t.prototype,"size",null),o.__decorate([i.property()],t.prototype,"store",void 0),o.__decorate([i.property({dependsOn:["store","store.querying","store.state","store.syncing"],readOnly:!0})],t.prototype,"state",null),t=o.__decorate([i.subclass("esri.widgets.FeatureTable.Grid.GridViewModel")],t)}(r)}));