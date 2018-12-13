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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./I3SMeshView3D","./LayerView3D","./support/layerViewUpdatingProperties"],function(e,t,r,o,n,p,i,a,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._elevationContext="im",t._isIntegratedMesh=!0,t}return o(t,e),Object.defineProperty(t.prototype,"lodFactor",{get:function(){return this.get("view.qualitySettings.sceneService.integratedMesh.lodFactor")||1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"progressiveLoadFactor",{get:function(){return this.lodFactor>=1?.2:1},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){},t.prototype.destroy=function(){},t.prototype._createLayerGraphic=function(e){return null},t.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)},t.prototype.isUpdating=function(){return!(!this._controller||!this._controller.updating)},n([p.property()],t.prototype,"layer",void 0),n([p.property({dependsOn:["_controller.updating"]})],t.prototype,"updating",void 0),n([p.property({dependsOn:["_controller.rootNodeVisible"]})],t.prototype,"suspended",void 0),n([p.property(l.updatingPercentage)],t.prototype,"updatingPercentage",void 0),n([p.property({readOnly:!0,aliasOf:"_controller.updatingPercentage"})],t.prototype,"updatingPercentageValue",void 0),n([p.property({readOnly:!0})],t.prototype,"lodFactor",null),n([p.property({readOnly:!0,dependsOn:["lodFactor"]})],t.prototype,"progressiveLoadFactor",null),t=n([p.subclass("esri.views.3d.layers.SceneLayerView3D")],t)}(p.declared(a,i))});