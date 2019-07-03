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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Accessor","../../core/Error","../../core/Logger","../../core/promiseUtils","../../core/urlUtils","../../core/accessorSupport/decorators","../../portal/Portal","../../portal/PortalItem"],function(t,e,r,o,a,s,i,l,p,n,u,c,d,h){var m=p.getLogger("esri.layers.mixins.PortalLayer");return function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return r(i,e),Object.defineProperty(i.prototype,"portalItem",{set:function(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))},enumerable:!0,configurable:!0}),i.prototype.readPortalItem=function(t,e,r){if(e.itemId)return new h({id:e.itemId,portal:r&&r.portal})},i.prototype.writePortalItem=function(t,e,r){t&&t.id&&(e.itemId=t.id)},i.prototype.loadFromPortal=function(e,r){return s(this,void 0,void 0,function(){var o,s;return a(this,function(a){switch(a.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];a.label=1;case 1:return a.trys.push([1,4,,5]),[4,n.create(function(e){return t(["../../portal/support/layersLoader"],e)})];case 2:return o=a.sent(),n.throwIfAborted(r),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},r)];case 3:return[2,a.sent()];case 4:throw s=a.sent(),m.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+s),s;case 5:return[2]}})})},i.prototype.read=function(t,e){var r=arguments;e&&(e.layer=this),this.inherited(r)},i.prototype.write=function(t,e){var r=e&&e.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||d.getDefault());return r&&o&&!u.hasSamePortal(o.restUrl,r.restUrl)?(e.messages&&e.messages.push(new l("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([c.property({type:h})],i.prototype,"portalItem",null),o([c.reader("web-document","portalItem",["itemId"])],i.prototype,"readPortalItem",null),o([c.writer("portalItem",{itemId:{type:String}})],i.prototype,"writePortalItem",null),i=o([c.subclass("esri.layers.mixins.PortalLayer")],i)}(c.declared(i))});