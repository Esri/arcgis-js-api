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

define(["require","exports","tslib","../../core/Accessor","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../layers/BuildingSceneLayer","../../layers/support/BuildingFilter","./BuildingDisciplinesViewModel","./BuildingLevel","./BuildingPhase","./support/buildingLayerUtils","./support/filterUtils","./support/layerUtils"],(function(e,t,r,s,i,l,o,n,a,p,d,y,c,u,h,_,g,f,v,w){"use strict";var b=n.getLogger("esri.widgets.BuildingExplorer.BuildingExplorerViewModel");return function(e){function t(t){var r=e.call(this,t)||this;return r.view=null,r.state="disabled",r.level=new _,r.phase=new g,r.disciplines=new h,r._handles=new o,r._loadLayers=w.createLoadLayersFunction(),r.layers=new i,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([this.layers.on("change",(function(){return e._onLayersChange()})),d.init(this,"_filter",(function(){return v.setFilterOnLayers(e.layers,e._filter)}))]),this._onLayersChange()},t.prototype.destroy=function(){this._handles.destroy(),this.level.destroyed||this.level.destroy(),this.phase.destroyed||this.phase.destroy(),this.disciplines.destroyed||this.disciplines.destroy()},Object.defineProperty(t.prototype,"isSupported",{get:function(){var e;return"3d"===(null===(e=this.view)||void 0===e?void 0:e.type)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"layers",{set:function(e){var t=e.filter((function(e){return e instanceof c}));t.length!==e.length&&b.error("Some layers are not BuildingSceneLayers but only BuildingSceneLayers can be passed to the widget."),this._set("layers",l.referenceSetter(t,this._get("layers")))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_filter",{get:function(){var e=this.level.filterExpressions,t=this.phase.filterExpressions,r=[],s=v.getFilterBlockSolid([e.solid,t.solid]);a.isSome(s)&&r.push(s);var i=v.getFilterBlockXRay([e.xRay,t.xRay]);return a.isSome(i)&&r.push(i),0===r.length?null:new u({id:v.generateFilterId(),name:"Building Explorer Filter",filterBlocks:r})},enumerable:!1,configurable:!0}),t.prototype._onLayersChange=function(){return r.__awaiter(this,void 0,void 0,(function(){var e;return r.__generator(this,(function(t){switch(t.label){case 0:if(this.level.layers=this.layers,this.phase.layers=this.layers,this.disciplines.layers=this.layers,0===this.layers.length)return this._set("state","disabled"),[2];this._set("state","loading"),t.label=1;case 1:return t.trys.push([1,4,,5]),[4,this._loadLayers(this.layers)];case 2:return t.sent(),[4,p.all([d.whenEqualOnce(this.level,"state","ready"),d.whenEqualOnce(this.phase,"state","ready"),d.whenEqualOnce(this.disciplines,"state","ready")])];case 3:return t.sent(),this.layers.forEach(f.showFullModel),this._set("state","ready"),[3,5];case 4:return e=t.sent(),p.isAbortError(e)||this._set("state","failed"),[3,5];case 5:return[2]}}))}))},r.__decorate([y.property({value:null})],t.prototype,"view",void 0),r.__decorate([y.property({dependsOn:["view.type"]})],t.prototype,"isSupported",null),r.__decorate([y.property({type:i,nonNullable:!0})],t.prototype,"layers",null),r.__decorate([y.property({readOnly:!0})],t.prototype,"state",void 0),r.__decorate([y.property({readOnly:!0,type:_})],t.prototype,"level",void 0),r.__decorate([y.property({readOnly:!0,type:g})],t.prototype,"phase",void 0),r.__decorate([y.property({readOnly:!0,type:h})],t.prototype,"disciplines",void 0),r.__decorate([y.property({readOnly:!0,dependsOn:["level.filterExpressions","phase.filterExpressions"]})],t.prototype,"_filter",null),t=r.__decorate([y.subclass("esri.widgets.BuildingExplorer.BuildingExplorerViewModel")],t)}(s)}));