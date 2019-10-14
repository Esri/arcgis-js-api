// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./I3SMeshView3D","./LayerView3D","./support/layerViewUpdatingProperties","../../layers/LayerView"],function(e,r,t,o,p,i,n,a,s,d){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.lodFactor=1,r._elevationContext="im",r._isIntegratedMesh=!0,r}return o(r,e),Object.defineProperty(r.prototype,"progressiveLoadFactor",{get:function(){return this.lodFactor>=1?.2:1},enumerable:!0,configurable:!0}),r.prototype.initialize=function(){},r.prototype.destroy=function(){},r.prototype._createLayerGraphic=function(e){return null},r.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)},r.prototype.isUpdating=function(){return this.updatingMeshView3D},p([i.property()],r.prototype,"layer",void 0),p([i.property({dependsOn:["updatingMeshView3D"]})],r.prototype,"updating",void 0),p([i.property({dependsOn:["_controller.rootNodeVisible"]})],r.prototype,"suspended",void 0),p([i.property(s.updatingPercentage)],r.prototype,"updatingPercentage",void 0),p([i.property({readOnly:!0,aliasOf:"_controller.updatingPercentage"})],r.prototype,"updatingPercentageValue",void 0),p([i.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.integratedMesh.lodFactor"})],r.prototype,"lodFactor",void 0),p([i.property({readOnly:!0,dependsOn:["lodFactor"]})],r.prototype,"progressiveLoadFactor",null),r=p([i.subclass("esri.views.3d.layers.SceneLayerView3D")],r)}(i.declared(n.I3SMeshView3D(a.LayerView3D(d))))});