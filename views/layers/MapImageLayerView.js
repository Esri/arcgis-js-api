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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators","../../renderers/support/clickToleranceUtils","../../support/arcadeOnDemand","./support/popupUtils"],(function(e,r,t,a,o,n,u,s,c,i,l,p,d,f){Object.defineProperty(r,"__esModule",{value:!0}),r.MapImageLayerView=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e,r){return n(this,void 0,void 0,(function(){var t,a,l,d,h,y,m=this;return o(this,(function(v){switch(v.label){case 0:return t=this.layer,e?(a=this.get("view.scale"),l=[],d=function(e){return n(m,void 0,void 0,(function(){var t,n,s;return o(this,(function(o){return t=0===e.minScale||a<=e.minScale,n=0===e.maxScale||a>=e.maxScale,e.visible&&t&&n&&(e.sublayers?e.sublayers.forEach(d):e.popupEnabled&&(s=f.getFetchPopupTemplate(e,u({},r,{defaultPopupTemplateEnabled:!1})),c.isSome(s)&&l.push({sublayer:e,popupTemplate:s}))),[2]}))}))},h=t.sublayers.toArray().map(d),[4,i.all(h)]):[2,i.reject(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];case 1:return v.sent(),y=l.map((function(t){var a=t.sublayer,u=t.popupTemplate;return n(m,void 0,void 0,(function(){var t,n,s,i,l,d;return o(this,(function(o){switch(o.label){case 0:return[4,a.load().catch((function(){}))];case 1:return o.sent(),t=a.createQuery(),n=c.isSome(r)?r.event:null,s=p.calculateTolerance({renderer:a.renderer,event:n}),i=this.createFetchPopupFeaturesQueryGeometry(e,s),t.geometry=i,l=t,[4,f.getRequiredFields(a,u)];case 2:return l.outFields=o.sent(),[4,this._loadArcadeModules(u)];case 3:return d=o.sent(),d&&d.arcadeUtils.hasGeometryOperations(u)||(t.maxAllowableOffset=i.width/s),[4,a.queryFeatures(t)];case 4:return[2,o.sent().features]}}))}))})),[4,i.eachAlways(y)];case 2:return[2,v.sent().reduce((function(e,r){return e.concat(r.value)}),[]).filter((function(e){return null!=e}))]}}))}))},r.prototype._loadArcadeModules=function(e){if(e.get("expressionInfos.length"))return d.loadArcade()},a([l.property()],r.prototype,"layer",void 0),r=a([l.subclass("esri.views.layers.MapImageLayerView")],r)}(l.declared(e))}}));