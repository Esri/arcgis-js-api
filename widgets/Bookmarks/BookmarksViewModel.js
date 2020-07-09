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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Collection","../../core/Error","../../core/Evented","../../core/Logger","../../core/promiseUtils","../../core/accessorSupport/decorators","../../webmap/Bookmark","../support/GoTo"],(function(e,t,o,r,n,i,a,s,c,u,k){var p="esri.widgets.Bookmarks.BookmarksViewModel",v=a.getLogger(p),l=r.ofType(u),d={width:128,height:128},m={takeScreenshot:!0,captureExtent:!0};return function(e){function t(t){var o=e.call(this,t)||this;return o.activeBookmark=null,o}return o.__extends(t,e),t.prototype.destroy=function(){this.view=null,this._set("activeBookmark",null)},Object.defineProperty(t.prototype,"bookmarks",{get:function(){return this.get("view.map.bookmarks")},set:function(e){void 0!==e?this._override("bookmarks",e):this._clearOverride("bookmarks")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this.get("view");return e&&!e.ready?"loading":"ready"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{get:function(){return this._get("view")},set:function(e){e&&"2d"!==e.type&&v.error(new n("view:invalid-view","SceneView is not supported",{view:e})),this._set("view",e)},enumerable:!0,configurable:!0}),t.prototype.createBookmark=function(e){var t=this.view,r=o.__assign(o.__assign({},m),e),i=r.takeScreenshot,a=r.screenshotSettings,c=r.captureExtent;if(i&&!t){var k=new n("create-bookmark:invalid-view","Cannot create a bookmark without a view.",{view:t});return v.error(k),s.reject(k)}var p=i?t.takeScreenshot(o.__assign(o.__assign({},d),a)).then((function(e){return e.dataUrl})):s.resolve(),l=c?t.extent.clone():void 0;return p.then((function(e){return new u({extent:l,thumbnail:e})}))},t.prototype.goTo=function(e){var t=this,o=this.view;if(!o||!e||!e.extent){var r=new n("go-to:invalid-bookmark-or-view","Cannot go to a bookmark without a view and a bookmark containing an extent.",{bookmark:e,view:o});return v.error(r),s.reject(r)}this._set("activeBookmark",e);var i={target:{target:e.extent}},a=this.callGoTo(i);return this.emit("select-bookmark",{bookmark:e}),a.catch((function(){})).then((function(){return t._set("activeBookmark",null)})),a},o.__decorate([c.property({readOnly:!0})],t.prototype,"activeBookmark",void 0),o.__decorate([c.property({type:l,dependsOn:["view.map.bookmarks"]})],t.prototype,"bookmarks",null),o.__decorate([c.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),o.__decorate([c.property({value:null})],t.prototype,"view",null),t=o.__decorate([c.subclass(p)],t)}(k.GoToMixin(i.EventedAccessor))}));