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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/Collection","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators"],(function(t,e,r,o,n,i,u){"use strict";return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.itemCache=new n,e.state="ready",e}return r.__extends(e,t),e.prototype.destroy=function(){this.itemCache.destroy(),this._set("itemCache",null)},Object.defineProperty(e.prototype,"count",{get:function(){var t;return(null===(t=this.itemCache)||void 0===t?void 0:t.length)||0},enumerable:!1,configurable:!0}),e.prototype.addItems=function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.itemCache.addMany(null==t?void 0:t.items),[2]}))}))},e.prototype.fetchItems=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,o,n;return r.__generator(this,(function(r){return e=t.page,o=t.pageSize,n=e*o,[2,this.itemCache.items.slice(n,n+o)]}))}))},e.prototype.getLocalItemAt=function(t){return this.itemCache.getItemAt(t)},e.prototype.getItemAt=function(t){return i.resolve(this.itemCache.getItemAt(t))},e.prototype.load=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){return[2]}))}))},e.prototype.query=function(t){return this.fetchItems(t)},e.prototype.removeItemAt=function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.itemCache.removeAt(t),[2]}))}))},e.prototype.reset=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){return this.itemCache.removeAll(),[2]}))}))},e.prototype.updateItem=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,o,n,i;return r.__generator(this,(function(r){return e=t.index,o=t.name,n=t.value,(i=this.itemCache.getItemAt(e))&&o&&i[o]&&(i[o]=n),[2]}))}))},r.__decorate([u.property({readOnly:!0,dependsOn:["itemCache.length"]})],e.prototype,"count",null),r.__decorate([u.property()],e.prototype,"itemCache",void 0),r.__decorate([u.property({readOnly:!0})],e.prototype,"state",void 0),e=r.__decorate([u.subclass("esri.widgets.FeatureTable.Grid.support.LocalStore")],e)}(o)}));