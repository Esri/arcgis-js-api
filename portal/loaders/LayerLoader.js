// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","../../core/Accessoire","../../portal/PortalItem","../../core/Error","../../core/promiseUtils","./support/setUtils"],function(t,e,r,o,i,p,n,a,s,l){var u=function(t){function e(){t.apply(this,arguments)}return r(e,t),e.prototype.load=function(){var t=this;return this.loadItem().then(function(e){return e&&t.validateItem()}).then(function(){return t.loadService()}).then(function(){return t.loadTitle()}).then(function(){return t.loadLayer()}).then(function(){return s.resolve(t.instance)})},e.prototype.loadTitle=function(){this.portalItem.title&&this.instance.titleIncludesUrl!==!1&&l.setAsDefaultIfDefined(this.instance,"title",this.portalItem.title)},e.prototype.loadService=function(){return this.loadFromService?this.loadFromService():void 0},e.prototype.loadItem=function(){var t=this;return this.portalItem.id?this.portalItem.load().then(function(){return t.loadItemProperties()}):s.resolve(null)},e.prototype.loadItemProperties=function(){var t=this;return this.portalItem.url&&!this.instance.url&&(this.instance.url=this.portalItem.url),this.updateSublayerId().then(function(){return t.portalItem})},e.prototype.fetchData=function(t){return void 0===t&&(t="json"),this.itemData?s.resolve(this.itemData):this.portalItem.fetchData(t)},e.prototype.validateItem=function(){if(-1===this.supportedItemTypes.indexOf(this.portalItem.type))throw new a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:this.portalItem.type,expectedType:this.supportedItemTypes.join(", ")})},e.prototype.updateSublayerId=function(){var t=this.instance,e=t.url;if(e&&null==this.sublayerId){var r=e.lastIndexOf("/");if(-1!==r){var o=parseInt(e.slice(r+1),10);isNaN(o)||(this.sublayerId=o,t.layerId=o)}}return s.resolve(null)},o([i.shared("esri.portal.loaders.LayerLoader")],e.prototype,"declaredClass",void 0),o([i.shared(null)],e.prototype,"supportedItemTypes",void 0),o([i.property()],e.prototype,"instance",void 0),o([i.property({type:n})],e.prototype,"portalItem",void 0),o([i.property()],e.prototype,"itemData",void 0),o([i.property()],e.prototype,"loadFromService",void 0),o([i.property()],e.prototype,"sublayerId",void 0),e=o([i.subclass()],e)}(p);return u});