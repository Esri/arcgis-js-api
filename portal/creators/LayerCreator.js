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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","dojo/_base/lang","dojo/has","../../core/Accessoire","../../core/promiseUtils","../../PopupTemplate","../../layers/support/LabelClass","../../renderers/support/jsonUtils","../../core/urlUtils","../../renderers/support/layerTemplates"],function(e,r,o,t,i,n,a,l,p,s,d,u,c,f){var y=a("dojo-debug-messages"),v=function(e){function r(){e.call(this)}return o(r,e),r.prototype.create=function(){var e=this,r=this.type;return this.layerProperties(this.layer).then(function(o){return e.layer.itemId&&(o.portalItem={id:e.layer.itemId,portal:e.portal}),p.resolve(new r(o))})},r.prototype.layerProperties=function(e){var r=this,o={};null!=e.title&&(o.title=e.title),void 0!==e.url&&(o.url=c.normalize(e.url));var t=function(e){return e},i=n.clone,a=function(e,r,o){for(var t in o){var i=r[t];void 0!==i&&(e[t]=o[t](i))}return e};a(o,e,{id:t,opacity:t,minScale:t,maxScale:t,listMode:t});var l=e.layerDefinition;if(void 0!==l){a(o,l,{minScale:t,maxScale:t,elevationInfo:i,definitionExpression:t});var p=e.layerDefinition.drawingInfo;if(void 0!==p){var u=p.labelingInfo;void 0!==u&&Array.isArray(u)&&u.length>0&&(o.labelingInfo=u.map(function(e){return d.fromJSON(e)}))}}return void 0!==e.showLabels&&(o.labelsVisible=e.showLabels),void 0!==e.visibility&&(o.visible=!!e.visibility),void 0!==e.disablePopup&&(o.popupEnabled=!e.disablePopup),void 0!==e.popupInfo&&(o.popupTemplate=s.fromJSON(e.popupInfo)),void 0!==e.showLegend&&(o.legendEnabled=e.showLegend),this.createRenderer(e,o).then(function(t){if(t&&(o.renderer=t),r.propertyFilter){var i=r.propertyFilter(e,o);void 0!==i&&(o=i)}return o}).otherwise(function(e){return y&&console.warn("Failed to create renderer:",e.toString?e.toString():e),o})},r.prototype.createRenderer=function(e,r){if(!e.layerDefinition||!e.layerDefinition.drawingInfo||!e.layerDefinition.drawingInfo.renderer)return p.resolve(null);var o=e.layerDefinition.drawingInfo.renderer;return f.hasContentByReference(o)?f.createRenderer(o,this.portal).then(function(e){return r.legendEnabled=!1,e}).otherwise(function(e){return y&&console.warn("Failed to create by reference renderer:",e.toString?e.toString():e),u.fromJSON(o)}):p.resolve(u.fromJSON(o))},t([i.shared("esri.portal.creators.LayerCreator")],r.prototype,"declaredClass",void 0),t([i.shared(null)],r.prototype,"type",void 0),t([i.property()],r.prototype,"layer",void 0),t([i.property()],r.prototype,"portal",void 0),t([i.property()],r.prototype,"propertyFilter",void 0),r=t([i.subclass()],r)}(l);return v});