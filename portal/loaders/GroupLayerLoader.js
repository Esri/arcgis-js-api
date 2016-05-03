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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","./LayerLoader","../../layers/FeatureLayer","../../layers/SceneLayer","./FeatureLayerLoader","./FeatureCollectionLoader","./SceneLayerLoader","../../request","../../core/urlUtils","../../core/promiseUtils"],function(e,r,t,a,o,s,l,n,i,c,u,p,y,d){var L=function(e){function r(){e.apply(this,arguments)}return t(r,e),r.prototype.loadLayer=function(){var e=this;switch(this.portalItem.type){case"Feature Service":this.LayerClass=l,this.LayerLoaderClass=i;break;case"Feature Collection":this.LayerClass=l,this.LayerLoaderClass=c;break;case"Scene Service":this.LayerClass=n,this.LayerLoaderClass=u}return this.portalItem.fetchData().then(function(r){var t=r;return r&&(r.layers||t.featureCollection&&t.featureCollection.layers)?e.loadLayers(t.featureCollection||r):e.loadAllLayers()})},r.prototype.loadAllLayers=function(){var e=this;return this.fetchServiceInfo().then(function(r){var t=r.map(function(e){return{id:e.id}});return t.reverse(),e.loadLayers({layers:t})})},r.prototype.fetchServiceInfo=function(){var e=this.portalItem.url;return p(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data.layers})},r.prototype.loadLayers=function(e){var r,t=this;return r=e.layers,d.eachAlways(r.map(function(e,a){var o,s={portalItem:t.portalItem};if(t.portalItem.url){var n=void 0;o=e.id,n="Scene Service"===t.portalItem.type?y.join(t.portalItem.url,"layers",o.toString()):y.join(t.portalItem.url,o.toString()),s.url=n}else o=a;t.LayerClass===l&&(s.returnZ=!0,s.outFields=["*"]),s.titleIncludesUrl=!1;var i=new t.LayerClass(s);t.instance.add(i);var c=new t.LayerLoaderClass({instance:i,itemData:{layers:r},sublayerId:o,portalItem:t.portalItem});return c.load()})).then(function(){})},a([o.shared("esri.portal.loaders.GroupLayerLoader")],r.prototype,"declaredClass",void 0),a([o.shared(["Feature Service","Feature Collection","Scene Service"])],r.prototype,"supportedItemTypes",void 0),r=a([o.subclass()],r)}(s);return L});