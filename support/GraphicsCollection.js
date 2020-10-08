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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../Graphic","../core/Collection","../core/collectionUtils","../core/accessorSupport/decorators","../core/accessorSupport/ensureType"],(function(e,t,o,r,n,i,c,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.graphicsCollectionProperty=t.castGraphicsCollection=t.GraphicsCollection=void 0;var l=n.ofType(r),a=function(e){function t(t){var o=e.call(this,t)||this;return o.on("before-add",(function(e){e.item||e.preventDefault()})),o.on("after-add",(function(e){return o._own(e.item)})),o.on("after-remove",(function(e){e.item.layer=null})),o}return o.__extends(t,e),t.prototype.destroy=function(){this._unownAll()},Object.defineProperty(t.prototype,"owner",{get:function(){return this._get("owner")},set:function(e){e!==this._get("owner")&&(this._unownAll(),this._set("owner",e),this._ownAll())},enumerable:!1,configurable:!0}),t.prototype._createNewInstance=function(e){return new l(e)},t.prototype._ownAll=function(){var e=this;this.items.forEach((function(t){return e._own(t)}))},t.prototype._own=function(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner},t.prototype._unownAll=function(){var e=this;this.items.forEach((function(t){return e._unown(t)}))},t.prototype._unown=function(e){e.layer===this.owner&&(e.layer=null)},o.__decorate([c.property()],t.prototype,"owner",null),t=o.__decorate([c.subclass("esri.support.GraphicsCollection")],t)}(l);t.GraphicsCollection=a,t.castGraphicsCollection=function(e){var t=s.default(a,e);return t&&(t.owner=this),t},t.graphicsCollectionProperty={type:a,cast:i.castForReferenceSetter,set:function(e){var t=i.referenceSetter(e,this._get("graphics"),a);t.owner=this,this._set("graphics",t)}},t.default=a}));