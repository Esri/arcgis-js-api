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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/Accessor","../../core/Collection","../../core/Error","../../core/Evented","../../core/Logger","../../core/promiseUtils","../../core/accessorSupport/decorators","../../webmap/Bookmark","../support/GoTo"],function(e,t,r,o,n,i,a,c,p,s,u,l,k,v){var d="esri.widgets.Bookmarks.BookmarksViewModel",m=s.getLogger(d),w=a.ofType(k),y={width:128,height:128};return function(e){function t(t){var r=e.call(this)||this;return r.activeBookmark=null,r}return r(t,e),t.prototype.destroy=function(){this.view=null,this._set("activeBookmark",null)},Object.defineProperty(t.prototype,"bookmarks",{get:function(){return this.get("view.map.bookmarks")},set:function(e){if(void 0===e)return void this._clearOverride("bookmarks");this._override("bookmarks",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this.get("view");return e&&"2d"===e.type?e.ready?"ready":"loading":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{get:function(){return this._get("view")},set:function(e){e&&"2d"!==e.type&&m.error(new c("view:invalid-view","SceneView is not supported",{view:e})),this._set("view",e)},enumerable:!0,configurable:!0}),t.prototype.createBookmark=function(e){var t=this.view;if(!t){var r=new c("create-bookmark:invalid-view","Cannot create a bookmark without a view.",{view:t});return m.error(r),u.reject(r)}var o=t.takeScreenshot(n({},y,e)).then(function(e){return e.dataUrl}),i=t.extent.clone();return o.then(function(e){return new k({extent:i,thumbnail:e})})},t.prototype.goTo=function(e){var t=this,r=this.view;if(!r||!e||!e.extent){var o=new c("go-to:invalid-bookmark-or-view","Cannot go to a bookmark without a view and a bookmark containing an extent.",{bookmark:e,view:r});return m.error(o),u.reject(o)}this._set("activeBookmark",e);var n={target:{target:e.extent}},i=this.callGoTo(n);return this.emit("select-bookmark",{bookmark:e}),i.catch(function(){}).then(function(){return t._set("activeBookmark",null)}),i},o([l.property({readOnly:!0})],t.prototype,"activeBookmark",void 0),o([l.property({type:w,dependsOn:["view.map.bookmarks"]})],t.prototype,"bookmarks",null),o([l.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),o([l.property({value:null})],t.prototype,"view",null),o([l.property()],t.prototype,"goTo",null),t=o([l.subclass(d)],t)}(l.declared(i,v,p))});