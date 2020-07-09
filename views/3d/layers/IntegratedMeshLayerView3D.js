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

define(["require","exports","tslib","../../../Graphic","../../../core/maybe","../../../core/accessorSupport/decorators","../../../core/libs/gl-matrix-2/vec4f64","../../../geometry/support/aaBoundingRect","./I3SMeshView3D","./LayerView3D","./support/layerViewUpdatingProperties","../../layers/LayerView"],(function(e,t,r,o,i,a,l,s,n,y,p,d){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lodFactor=1,t._elevationContext="im",t._isIntegratedMesh=!0,t._supportsLabeling=!1,t.drapeTargetType=1,t._overlayTexOffset=l.vec4f64.fromValues(-1,-1,-1,-1),t._overlayTexScale=l.vec4f64.create(),t._overlayTextures=[null,null],t._overlayHighlights=[null,null],t._overlayNormals=[null,null],t}return r.__extends(t,e),Object.defineProperty(t.prototype,"progressiveLoadFactor",{get:function(){return this.lodFactor>=1?.2:1},enumerable:!0,configurable:!0}),t.prototype.setDrapingTextures=function(e,t,r,o,a){var l=this;i.isSome(r)&&s.area(t)>0?(this._overlayTextures[e]=r,this._overlayHighlights[e]=o,this._overlayNormals[e]=a,this._overlayTexOffset[2*e]=-t[0]/s.width(t),this._overlayTexOffset[2*e+1]=-t[1]/s.height(t),this._overlayTexScale[2*e]=1/s.width(t),this._overlayTexScale[2*e+1]=1/s.height(t)):(this._overlayTextures[e]=null,this._overlayHighlights[e]=null,this._overlayNormals[e]=null,this._overlayTexOffset[2*e]=-1,this._overlayTexOffset[2*e+1]=-1,this._overlayTexScale[2*e]=0,this._overlayTexScale[2*e+1]=0),this._forAllNodes((function(e){return i.isSome(e)&&l._collection.updateMaterial(e.objectHandle,(function(e){return l._updateMaterialOverlay(e)}))}))},t.prototype._updateMaterialOverlay=function(e){e.overlayColorInner=this._overlayTextures[0],e.overlayColorOuter=this._overlayTextures[1],e.overlayHighlightInner=this._overlayHighlights[0],e.overlayHighlightOuter=this._overlayHighlights[1],e.overlayNormalInner=this._overlayNormals[0],e.overlayNormalOuter=this._overlayNormals[1],e.overlayTexOffset=this._overlayTexOffset,e.overlayTexScale=this._overlayTexScale},t.prototype.initialize=function(){var e=this;this.updatingHandles.add(this.layer,"modifications",(function(){return e._loadModifications()}),2)},t.prototype.destroy=function(){},t.prototype._createLayerGraphic=function(){var e=new o;return e.layer=this.layer,e.sourceLayer=this.layer,e},t.prototype.canResume=function(){return e.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)},t.prototype.isUpdating=function(){return this.updatingMeshView3D},t.prototype._loadModifications=function(){var e=this;if(this.handles.remove("modifications"),i.isNone(this.layer.modifications))this._modifications=[];else{var t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(t,(function(){return e._modifications=t.toArray()}),2),"modifications")}},r.__decorate([a.property()],t.prototype,"layer",void 0),r.__decorate([a.property({dependsOn:["updatingMeshView3D"]})],t.prototype,"updating",void 0),r.__decorate([a.property({dependsOn:["_controller.rootNodeVisible"]})],t.prototype,"suspended",void 0),r.__decorate([a.property(p.updatingProgress)],t.prototype,"updatingProgress",void 0),r.__decorate([a.property({readOnly:!0,aliasOf:"_controller.updatingProgress"})],t.prototype,"updatingProgressValue",void 0),r.__decorate([a.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.integratedMesh.lodFactor"})],t.prototype,"lodFactor",void 0),r.__decorate([a.property({readOnly:!0,dependsOn:["lodFactor"]})],t.prototype,"progressiveLoadFactor",null),t=r.__decorate([a.subclass("esri.views.3d.layers.SceneLayerView3D")],t)}(n.I3SMeshView3D(y.LayerView3D(d)))}));