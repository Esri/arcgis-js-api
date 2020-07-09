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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators","../../renderers/support/clickToleranceUtils","../../support/arcadeOnDemand","./support/popupUtils"],(function(e,r,t,a,n,o,s,i,u,c){Object.defineProperty(r,"__esModule",{value:!0}),r.MapImageLayerView=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.fetchPopupFeatures=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var s,u,l,p,d,y,m=this;return t.__generator(this,(function(_){switch(_.label){case 0:return s=this.layer,e?(u=this.get("view.scale"),l=[],p=function(e){return t.__awaiter(m,void 0,void 0,(function(){var a,o,s;return t.__generator(this,(function(i){return a=0===e.minScale||u<=e.minScale,o=0===e.maxScale||u>=e.maxScale,e.visible&&a&&o&&(e.sublayers?e.sublayers.forEach(p):e.popupEnabled&&(s=c.getFetchPopupTemplate(e,t.__assign(t.__assign({},r),{defaultPopupTemplateEnabled:!1})),n.isSome(s)&&l.push({sublayer:e,popupTemplate:s}))),[2]}))}))},d=s.sublayers.toArray().map(p),[4,o.all(d)]):[2,o.reject(new a("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s}))];case 1:return _.sent(),y=l.map((function(a){var o=a.sublayer,s=a.popupTemplate;return t.__awaiter(m,void 0,void 0,(function(){var a,u,l,p,d,y;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,o.load().catch((function(){}))];case 1:return t.sent(),a=o.createQuery(),u=n.isSome(r)?r.event:null,l=i.calculateTolerance({renderer:o.renderer,event:u}),p=this.createFetchPopupFeaturesQueryGeometry(e,l),a.geometry=p,d=a,[4,c.getRequiredFields(o,s)];case 2:return d.outFields=t.sent(),[4,this._loadArcadeModules(s)];case 3:return y=t.sent(),y&&y.arcadeUtils.hasGeometryOperations(s)||(a.maxAllowableOffset=p.width/l),[4,o.queryFeatures(a)];case 4:return[2,t.sent().features]}}))}))})),[4,o.eachAlways(y)];case 2:return[2,_.sent().reduce((function(e,r){return r.value?t.__spreadArrays(e,r.value):e}),[]).filter((function(e){return null!=e}))]}}))}))},r.prototype.canResume=function(){var r,t;return!!e.prototype.canResume.call(this)&&(null===(t=null===(r=this.imageParameters)||void 0===r?void 0:r.timeExtent)||void 0===t?!0:!t.isEmpty)},r.prototype._loadArcadeModules=function(e){if(e.get("expressionInfos.length"))return u.loadArcade()},t.__decorate([s.property()],r.prototype,"imageParameters",void 0),t.__decorate([s.property()],r.prototype,"layer",void 0),t.__decorate([s.property({dependsOn:["imageParameters.timeExtent"]})],r.prototype,"suspended",void 0),r=t.__decorate([s.subclass("esri.views.layers.MapImageLayerView")],r)}(e)}}));