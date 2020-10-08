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

define(["require","exports","tslib","../../core/Error","../../core/Logger","../../core/promiseUtils","../../core/urlUtils","../../core/accessorSupport/decorators","../../portal/Portal","../../portal/PortalItem","@dojo/framework/shim/Promise"],(function(t,e,r,o,a,s,i,l,n,p){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PortalLayer=void 0;var u=a.getLogger("esri.layers.mixins.PortalLayer");e.PortalLayer=function(e){return function(e){function a(){var t=null!==e&&e.apply(this,arguments)||this;return t.resourceReferences={portalItem:null,paths:[]},t}return r.__extends(a,e),a.prototype.destroy=function(){var t;null===(t=this.portalItem)||void 0===t||t.destroy(),this.portalItem=null},Object.defineProperty(a.prototype,"portalItem",{set:function(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))},enumerable:!1,configurable:!0}),a.prototype.readPortalItem=function(t,e,r){if(e.itemId)return new p({id:e.itemId,portal:r&&r.portal})},a.prototype.writePortalItem=function(t,e){t&&t.id&&(e.itemId=t.id)},a.prototype.loadFromPortal=function(e,o){return r.__awaiter(this,void 0,void 0,(function(){var a,i;return r.__generator(this,(function(r){switch(r.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];r.label=1;case 1:return r.trys.push([1,4,,5]),[4,new Promise((function(e,r){t(["../../portal/support/layersLoader"],e,r)}))];case 2:return a=r.sent(),s.throwIfAborted(o),[4,a.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},o)];case 3:return[2,r.sent()];case 4:throw i=r.sent(),u.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+i),i;case 5:return[2]}}))}))},a.prototype.read=function(t,r){r&&(r.layer=this),e.prototype.read.call(this,t,r)},a.prototype.write=function(t,a){var s=a&&a.portal,l=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||n.getDefault());return s&&l&&!i.hasSamePortal(l.restUrl,s.restUrl)?(a.messages&&a.messages.push(new o("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):e.prototype.write.call(this,t,r.__assign(r.__assign({},a),{layer:this}))},r.__decorate([l.property({type:p})],a.prototype,"portalItem",null),r.__decorate([l.reader("web-document","portalItem",["itemId"])],a.prototype,"readPortalItem",null),r.__decorate([l.writer("web-document","portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null),r.__decorate([l.property()],a.prototype,"resourceReferences",void 0),a=r.__decorate([l.subclass("esri.layers.mixins.PortalLayer")],a)}(e)}}));