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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/decorateHelper","../core/tsSupport/declareExtendsHelper","../Graphic","../core/Collection","../core/collectionUtils","../core/accessorSupport/decorators","../core/accessorSupport/ensureType"],function(e,t,r,o,n,i,c,s,l){function u(e){var t=l.default(p,e);return t&&(t.owner=this),t}Object.defineProperty(t,"__esModule",{value:!0});var a=i.ofType(n),p=function(e){function t(t){var r=e.call(this,t)||this;return r.on("before-add",function(e){e.item||e.preventDefault()}),r.on("after-add",function(e){return r._own(e.item)}),r.on("after-remove",function(e){e.item.layer=null}),r}return o(t,e),t.prototype.destroy=function(){this._unownAll()},Object.defineProperty(t.prototype,"owner",{get:function(){return this._get("owner")},set:function(e){e!==this._get("owner")&&(this._unownAll(),this._set("owner",e),this._ownAll())},enumerable:!0,configurable:!0}),t.prototype._createNewInstance=function(e){return new a(e)},t.prototype._ownAll=function(){var e=this;this.items.forEach(function(t){return e._own(t)})},t.prototype._own=function(e){e.layer&&"group"!==e.layer.type&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner},t.prototype._unownAll=function(){var e=this;this.items.forEach(function(t){return e._unown(t)})},t.prototype._unown=function(e){e.layer===this.owner&&(e.layer=null)},r([s.property()],t.prototype,"owner",null),t=r([s.subclass("esri.support.GraphicsCollection")],t)}(s.declared(a));t.GraphicsCollection=p,t.castGraphicsCollection=u,t.graphicsCollectionProperty={type:p,cast:c.castForReferenceSetter,set:function(e){var t=c.referenceSetter(e,this._get("graphics"),p);t.owner=this,this._set("graphics",t)}},t.default=p});