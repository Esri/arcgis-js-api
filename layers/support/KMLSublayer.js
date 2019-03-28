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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../core/Collection","../../core/JSONSupport","../../core/Loadable","../../core/watchUtils","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./kmlUtils"],function(e,r,t,n,l,o,i,s,a,u,p,y){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._sublayersHandles=null,r.description=null,r.id=null,r.networkLink=null,r.title=null,r}t(r,e),l=r,r.prototype.initialize=function(){var e=this;a.whenOnce(this,"networkLink").then(function(r){return a.whenTrueOnce(e,"visible")}).then(function(){return e.load()})},r.prototype.load=function(){var e=this;if(!this.networkLink)return this.when();var r=this._fetchService(this._get("networkLink").href).then(function(r){var t=p.default(o.ofType(l),y.sublayersFromJSON(l,r));e.sublayers?e.sublayers.addMany(t):e.sublayers=t,e.layer&&e.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),this.when()},Object.defineProperty(r.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(function(r){return r.layer=e})},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"sublayers",{set:function(e){var r=this,t=this._get("sublayers");t&&(t.forEach(function(e){e.parent=null,e.layer=null}),this._sublayersHandles.forEach(function(e){return e.remove()}),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=r,e.layer=r.layer}),this._sublayersHandles=[e.on("after-add",function(e){var t=e.item;t.parent=r,t.layer=r.layer}),e.on("after-remove",function(e){var r=e.item;r.parent=null,r.layer=null})]),this._set("sublayers",e)},enumerable:!0,configurable:!0}),r.prototype.castSublayers=function(e){return p.default(o.ofType(l),e)},Object.defineProperty(r.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))},enumerable:!0,configurable:!0}),r.prototype.readVisible=function(e,r){return!!r.visibility},r.prototype._fetchService=function(e){return y.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval).then(function(e){return y.parseKML(e.data)})};var l;return n([u.property()],r.prototype,"description",void 0),n([u.property()],r.prototype,"id",void 0),n([u.property({value:null})],r.prototype,"layer",null),n([u.property({readOnly:!0,value:null})],r.prototype,"networkLink",void 0),n([u.property({json:{write:{allowNull:!0}}})],r.prototype,"parent",void 0),n([u.property({value:null,json:{write:{allowNull:!0}}})],r.prototype,"sublayers",null),n([u.cast("sublayers")],r.prototype,"castSublayers",null),n([u.property({value:null,json:{read:{source:"name"}}})],r.prototype,"title",void 0),n([u.property({value:!0})],r.prototype,"visible",null),n([u.reader("visible",["visibility"])],r.prototype,"readVisible",null),r=l=n([u.subclass("esri.layers.support.KMLSublayer")],r)}(u.declared(i,s))});