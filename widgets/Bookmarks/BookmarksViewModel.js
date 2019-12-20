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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/Collection","../../core/Error","../../core/Evented","../../core/Logger","../../core/promiseUtils","../../core/accessorSupport/decorators","../../webmap/Bookmark","../support/GoTo"],function(e,t,r,o,n,i,a,c,s,p,u,k,l){var v="esri.widgets.Bookmarks.BookmarksViewModel",d=s.getLogger(v),m=i.ofType(k),w={width:128,height:128},h={takeScreenshot:!0,captureExtent:!0};return function(e){function t(t){var r=e.call(this,t)||this;return r.activeBookmark=null,r}return r(t,e),t.prototype.destroy=function(){this.view=null,this._set("activeBookmark",null)},Object.defineProperty(t.prototype,"bookmarks",{get:function(){return this.get("view.map.bookmarks")},set:function(e){if(void 0===e)return void this._clearOverride("bookmarks");this._override("bookmarks",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this.get("view");return e&&!e.ready?"loading":"ready"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{get:function(){return this._get("view")},set:function(e){e&&"2d"!==e.type&&d.error(new a("view:invalid-view","SceneView is not supported",{view:e})),this._set("view",e)},enumerable:!0,configurable:!0}),t.prototype.createBookmark=function(e){var t=this.view,r=n({},h,e),o=r.takeScreenshot,i=r.screenshotSettings,c=r.captureExtent;if(o&&!t){var s=new a("create-bookmark:invalid-view","Cannot create a bookmark without a view.",{view:t});return d.error(s),p.reject(s)}var u=o?t.takeScreenshot(n({},w,i)).then(function(e){return e.dataUrl}):p.resolve(),l=c?t.extent.clone():void 0;return u.then(function(e){return new k({extent:l,thumbnail:e})})},t.prototype.goTo=function(e){var t=this,r=this.view;if(!r||!e||!e.extent){var o=new a("go-to:invalid-bookmark-or-view","Cannot go to a bookmark without a view and a bookmark containing an extent.",{bookmark:e,view:r});return d.error(o),p.reject(o)}this._set("activeBookmark",e);var n={target:{target:e.extent}},i=this.callGoTo(n);return this.emit("select-bookmark",{bookmark:e}),i.catch(function(){}).then(function(){return t._set("activeBookmark",null)}),i},o([u.property({readOnly:!0})],t.prototype,"activeBookmark",void 0),o([u.property({type:m,dependsOn:["view.map.bookmarks"]})],t.prototype,"bookmarks",null),o([u.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),o([u.property({value:null})],t.prototype,"view",null),t=o([u.subclass(v)],t)}(u.declared(l.GoToMixin(c.EventedAccessor)))});