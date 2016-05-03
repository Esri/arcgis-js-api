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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","./support/graphicsUtils","./LayerLoader","../../core/Error","../../request"],function(e,r,t,a,s,o,i,n,u){var l=function(e){function r(){e.apply(this,arguments)}return t(r,e),r.prototype.loadLayer=function(){var e=this;return this.fetchData().then(function(r){return r?o.readItemOverrides(e.portalItem,e.instance,r,e.sublayerId):void 0})},r.prototype.validateItem=function(){if(this.inherited(arguments),null==this.sublayerId)throw new n("portal:incompatible-service","Feature layer portal items should refer to a specific feature service sublayer")},r.prototype.updateSublayerId=function(){var e=this,r=this.instance,t=r.url;return null==r.layerId?u(t,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(t){var a=t.data;a&&a.layers&&a.layers[0]&&(e.sublayerId=a.layers[0].id,r.layerId=e.sublayerId)}):(this.sublayerId=r.layerId,this.inherited(arguments))},a([s.shared("esri.portal.loaders.FeatureLayerLoader")],r.prototype,"declaredClass",void 0),a([s.shared(["Feature Service"])],r.prototype,"supportedItemTypes",void 0),r=a([s.subclass()],r)}(i);return l});