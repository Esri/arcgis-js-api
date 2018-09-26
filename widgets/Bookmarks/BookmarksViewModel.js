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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Collection","../../core/Error","../../core/Evented","../../core/Handles","../../core/Logger","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../webmap/Bookmark","../support/GoTo"],function(e,o,t,r,n,i,a,s,p,c,l,d,u,k,v){var m="esri.widgets.Bookmarks.BookmarksViewModel",h=c.getLogger(m),y=i.ofType(k);return function(e){function o(o){var t=e.call(this)||this;return t._handles=new p,t.activeBookmark=null,t.bookmarks=new y,t}return t(o,e),o.prototype.initialize=function(){var e=this;this._handles.add(d.init(this,"view",function(o){return e._viewUpdated(o)}))},o.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null,this.bookmarks.removeAll()},Object.defineProperty(o.prototype,"state",{get:function(){var e=this.get("view");return e&&"2d"===e.type?e.ready?"ready":"loading":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"view",{get:function(){return this._get("view")},set:function(e){e&&"2d"!==e.type&&h.error(new a("view:invalid-view","SceneView is not supported",{view:e})),this._set("view",e)},enumerable:!0,configurable:!0}),o.prototype.goTo=function(e){var o=this,t=this.view;if(!t||!e||!e.extent){var r=new a("go-to:invalid-bookmark-or-view","Cannot go to a bookmark without a view and a bookmark containing an extent.",{bookmark:e,view:t});return h.error(r),l.reject(r)}this._set("activeBookmark",e);var n={target:{target:e.extent}},i=this.callGoTo(n);return this.emit("select-bookmark",{bookmark:e}),i.catch(function(){}).then(function(){return o._set("activeBookmark",null)}),i},o.prototype._viewUpdated=function(e){var o=this,t=this._handles;t.remove("map"),e&&e.when(function(){t.add(d.init(e,["map","map.bookmarks"],function(){return o._bookmarksChange(e)}),"map")})},o.prototype._bookmarksChange=function(e){if(e){var o=e.get("map.bookmarks"),t=this.bookmarks;t.removeAll(),t.addMany(o)}},r([u.property({readOnly:!0})],o.prototype,"activeBookmark",void 0),r([u.property({type:y})],o.prototype,"bookmarks",void 0),r([u.property({dependsOn:["view.ready"],readOnly:!0})],o.prototype,"state",null),r([u.property({value:null})],o.prototype,"view",null),r([u.property()],o.prototype,"goTo",null),o=r([u.subclass(m)],o)}(u.declared(n,v,s))});