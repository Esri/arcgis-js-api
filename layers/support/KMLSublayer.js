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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../geometry","../../core/Collection","../../core/Evented","../../core/JSONSupport","../../core/Loadable","../../core/maybe","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./kmlUtils"],(function(e,r,t,l,o,n,i,s,a,u,p,y,c,f,b,d){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._sublayersHandles=null,r.description=null,r.id=null,r.networkLink=null,r.title=null,r.sourceJSON=null,r.fullExtent=null,r}var o;return t(r,e),o=r,r.prototype.initialize=function(){var e=this;c.whenOnce(this,"networkLink").then((function(){return c.whenTrueOnce(e,"visible")})).then((function(){return e.load()}))},r.prototype.load=function(e){var r=this;if(this.networkLink){var t=p.isSome(e)?e.signal:null,l=this._fetchService(this._get("networkLink").href,t).then((function(e){var t=d.computeExtent(e.sublayers);r.fullExtent=n.Extent.fromJSON(t),r.sourceJSON=e;var l=b.default(i.ofType(o),d.sublayersFromJSON(o,e));r.sublayers?r.sublayers.addMany(l):r.sublayers=l,r.layer.emit("sublayer-update"),r.layer&&r.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(l),y.resolve(this)}},Object.defineProperty(r.prototype,"sublayers",{set:function(e){var r=this,t=this._get("sublayers");t&&(t.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=r,e.layer=r.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var t=e.item;t.parent=r,t.layer=r.layer})),e.on("after-remove",(function(e){var r=e.item;r.parent=null,r.layer=null}))]),this._set("sublayers",e)},enumerable:!0,configurable:!0}),r.prototype.castSublayers=function(e){return b.default(i.ofType(o),e)},Object.defineProperty(r.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))},enumerable:!0,configurable:!0}),r.prototype.readVisible=function(e,r){return!!r.visibility},Object.defineProperty(r.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(r){return r.layer=e}))},enumerable:!0,configurable:!0}),r.prototype._fetchService=function(e,r){return d.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((function(e){return d.parseKML(e.data)}))},l([f.property()],r.prototype,"description",void 0),l([f.property()],r.prototype,"id",void 0),l([f.property({readOnly:!0,value:null})],r.prototype,"networkLink",void 0),l([f.property({json:{write:{allowNull:!0}}})],r.prototype,"parent",void 0),l([f.property({value:null,json:{write:{allowNull:!0}}})],r.prototype,"sublayers",null),l([f.cast("sublayers")],r.prototype,"castSublayers",null),l([f.property({value:null,json:{read:{source:"name"}}})],r.prototype,"title",void 0),l([f.property({value:!0})],r.prototype,"visible",null),l([f.reader("visible",["visibility"])],r.prototype,"readVisible",null),l([f.property()],r.prototype,"sourceJSON",void 0),l([f.property({value:null})],r.prototype,"layer",null),l([f.property({type:n.Extent})],r.prototype,"fullExtent",void 0),r=o=l([f.subclass("esri.layers.support.KMLSublayer")],r)}(f.declared(s.EventedMixin(a.JSONSupportMixin(u))))}));