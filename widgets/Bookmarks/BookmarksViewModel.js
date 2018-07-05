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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Collection","../../core/Error","../../core/Evented","../../core/Handles","../../core/Logger","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","./Bookmark","../support/GoTo"],function(e,t,o,r,n,i,a,s,p,c,l,d,u,v,k){var h="esri.widgets.Bookmarks.BookmarksViewModel",m=c.getLogger(h),y=i.ofType(v);return function(e){function t(t){var o=e.call(this)||this;return o._handles=new p,o.bookmarks=new y,o}return o(t,e),t.prototype.initialize=function(){var e=this;this._handles.add(d.init(this,"view",function(t){return e._viewUpdated(t)}))},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null,this.bookmarks.removeAll()},Object.defineProperty(t.prototype,"state",{get:function(){var e=this.get("view");return e&&"2d"===e.type?e.ready?"ready":"loading":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{get:function(){return this._get("view")},set:function(e){e&&"2d"!==e.type&&m.error(new a("view:invalid-view","SceneView is not supported",{view:e})),this._set("view",e)},enumerable:!0,configurable:!0}),t.prototype.goTo=function(e){var t=this.view;if(!t||!e||!e.extent){var o=new a("go-to:invalid-bookmark-or-view","Cannot go to a bookmark without a view and a bookmark containing an extent.",{bookmark:e,view:t});return m.error(o),l.reject(o)}e.active=!0;var r={target:{target:e.extent}},n=this.callGoTo(r);return this.emit("select-bookmark",{bookmark:e}),n.then(function(){e.active=!1}).catch(function(){e.active=!1}),n},t.prototype._viewUpdated=function(e){var t=this,o=this._handles;o.remove("map"),e&&e.when(function(){o.add(d.init(e,["map","map.bookmarks"],function(){return t._bookmarksChange(e)}),"map")})},t.prototype._bookmarksChange=function(e){if(e){var t=e.get("map.bookmarks"),o=this.bookmarks;o.removeAll(),o.addMany(t)}},r([u.property({type:y})],t.prototype,"bookmarks",void 0),r([u.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),r([u.property({value:null})],t.prototype,"view",null),r([u.property()],t.prototype,"goTo",null),t=r([u.subclass(h)],t)}(u.declared(n,k,s))});