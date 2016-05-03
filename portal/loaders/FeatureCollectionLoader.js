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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","./support/jsonUtils","./LayerLoader","../../core/Collection","../../geometry/support/jsonUtils","../../Graphic"],function(e,t,r,o,a,n,i,s,p,u){var l=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.updateSublayerId=function(){var e=this.instance;return null!=e.layerId?this.sublayerId=e.layerId:null==this.sublayerId&&(this.sublayerId=0),this.inherited(arguments)},t.prototype.loadLayer=function(){var e=this;return this.fetchData().then(function(t){if(t){var r=t;r.featureCollection&&(t=r.featureCollection);var o=new s(t.layers),a=o.getItemAt(e.sublayerId);a&&(a.popupInfo&&(a.layerDefinition.popupInfo=a.popupInfo),e.instance.layerId=e.sublayerId,n.readIfDefined(e.instance,"opacity",t.opacity,{opacity:t.opacity}),e.instance.source=a.featureSet.features.map(function(e){return new u({geometry:p.fromJSON(e.geometry),attributes:e.attributes})}),e.instance.source.layerDefinition=a.layerDefinition)}})},o([a.shared("esri.portal.loaders.FeatureCollectionLoader")],t.prototype,"declaredClass",void 0),o([a.shared(["Feature Collection"])],t.prototype,"supportedItemTypes",void 0),t=o([a.subclass()],t)}(i);return l});