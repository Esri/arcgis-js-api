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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/Accessor","../../core/Handles","../../core/scheduling","../../core/watchUtils","../../core/accessorSupport/decorators","../../core/accessorSupport/wire"],(function(e,t,n,a,r,d,i,o,s,c){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.updating=!1,t.handleId=0,t.handles=new d,t.scheduleHandleId=0,t.pendingPromises=new Set,t}return a(t,e),t.prototype.destroy=function(){this.removeAll(),this.handles.destroy()},t.prototype.add=function(e,t,n,a){var r=this;void 0===a&&(a=0);var d=0!=(1&a),i=++this.handleId;d||this.installSyncUpdatingWatch(e,t,i);var s=0!=(2&a)?o.init(e,t,n,d):e.watch(t,n,d);return this.handles.add(s,i),{remove:function(){r.handles.remove(i)}}},t.prototype.addOnCollectionPropertyChange=function(e,t,n,a){var r=this;void 0===a&&(a=0);var d=0!=(2&a),i=++this.handleId;return this.handles.add([o.on(e,t,"after-changes",this.createSyncUpdatingCallback()),o.on(e,t,"change",n,d?function(e){n({added:e.items,removed:[],moved:[],target:e})}:null)],i),{remove:function(){r.handles.remove(i)}}},t.prototype.addOnCollectionChange=function(e,t,n){var a=this;void 0===n&&(n=0);var r=0!=(2&n),d=++this.handleId;return this.handles.add([e.on("after-changes",this.createSyncUpdatingCallback()),e.on("change",t)],d),r&&t({added:e.items,removed:[],moved:[],target:e}),{remove:function(){a.handles.remove(d)}}},t.prototype.addPromise=function(e){var t=this;if(!e)return e;var n=++this.handleId;this.handles.add({remove:function(){t.pendingPromises.delete(e)&&(0!==t.pendingPromises.size||t.handles.has(h)||t._set("updating",!1))}},n),this.pendingPromises.add(e),this._set("updating",!0);var a=function(){return t.handles.remove(n)};return e.then(a,a),e},t.prototype.removeAll=function(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)},t.prototype.installSyncUpdatingWatch=function(e,t,n){var a=c.default(e,t,this.createSyncUpdatingCallback());return this.handles.add(a,n),a},t.prototype.createSyncUpdatingCallback=function(){var e=this;return function(){e.handles.remove(h),++e.scheduleHandleId;var t=e.scheduleHandleId;e._get("updating")||e._set("updating",!0),e.handles.add(i.schedule((function(){t===e.scheduleHandleId&&(e._set("updating",e.pendingPromises.size>0),e.handles.remove(h))})),h)}},n([s.property({readOnly:!0})],t.prototype,"updating",void 0),t=n([s.subclass("esri.views.support.WatchUpdatingTracking")],t)}(s.declared(r));t.WatchUpdatingTracking=l;var h=-42}));