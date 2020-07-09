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

define(["require","exports","tslib","../../geometry","../../core/Collection","../../core/Evented","../../core/JSONSupport","../../core/Loadable","../../core/maybe","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./kmlUtils"],(function(e,t,r,o,l,n,i,a,s,u,p,y,c,d){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._sublayersHandles=null,t.description=null,t.id=null,t.networkLink=null,t.title=null,t.sourceJSON=null,t.fullExtent=null,t}var n;return r.__extends(t,e),n=t,t.prototype.initialize=function(){var e=this;p.whenOnce(this,"networkLink").then((function(){return p.whenTrueOnce(e,"visible")})).then((function(){return e.load()}))},t.prototype.load=function(e){var t=this;if(this.networkLink){var r=s.isSome(e)?e.signal:null,i=this._fetchService(this._get("networkLink").href,r).then((function(e){var r=d.computeExtent(e.sublayers);t.fullExtent=o.Extent.fromJSON(r),t.sourceJSON=e;var i=c.default(l.ofType(n),d.sublayersFromJSON(n,e));t.sublayers?t.sublayers.addMany(i):t.sublayers=i,t.layer.emit("sublayer-update"),t.layer&&t.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(i),u.resolve(this)}},Object.defineProperty(t.prototype,"sublayers",{set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))]),this._set("sublayers",e)},enumerable:!0,configurable:!0}),t.prototype.castSublayers=function(e){return c.default(l.ofType(n),e)},Object.defineProperty(t.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))},enumerable:!0,configurable:!0}),t.prototype.readVisible=function(e,t){return!!t.visibility},Object.defineProperty(t.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))},enumerable:!0,configurable:!0}),t.prototype._fetchService=function(e,t){return d.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((function(e){return d.parseKML(e.data)}))},r.__decorate([y.property()],t.prototype,"description",void 0),r.__decorate([y.property()],t.prototype,"id",void 0),r.__decorate([y.property({readOnly:!0,value:null})],t.prototype,"networkLink",void 0),r.__decorate([y.property({json:{write:{allowNull:!0}}})],t.prototype,"parent",void 0),r.__decorate([y.property({value:null,json:{write:{allowNull:!0}}})],t.prototype,"sublayers",null),r.__decorate([y.cast("sublayers")],t.prototype,"castSublayers",null),r.__decorate([y.property({value:null,json:{read:{source:"name"}}})],t.prototype,"title",void 0),r.__decorate([y.property({value:!0})],t.prototype,"visible",null),r.__decorate([y.reader("visible",["visibility"])],t.prototype,"readVisible",null),r.__decorate([y.property()],t.prototype,"sourceJSON",void 0),r.__decorate([y.property({value:null})],t.prototype,"layer",null),r.__decorate([y.property({type:o.Extent})],t.prototype,"fullExtent",void 0),t=n=r.__decorate([y.subclass("esri.layers.support.KMLSublayer")],t)}(n.EventedMixin(i.JSONSupportMixin(a)))}));