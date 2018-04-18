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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/SceneService","../symbols/support/ElevationInfo"],function(e,r,t,o,n,i,s,a,p,y,d){return function(r){function p(e,t){var o=r.call(this)||this;return o.geometryType="mesh",o.operationalLayerType="IntegratedMeshLayer",o.type="integrated-mesh",o.profile="mesh-pyramids",o.elevationInfo=null,o}return t(p,r),p.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?n.mixin({},{url:e},r):e},p.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()}).then(function(){return e._verifyRootNodeAndUpdateExtent()});return this.addResolvingPromise(r),this.when()},p.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return s.reject(new i("integrated-mesh-layer:view-not-supported","IntegratedMeshLayer is only supported in 3D"));case"3d":return s.create(function(r){return e(["../views/3d/layers/SceneLayerView3D"],r)})}},p.prototype._validateLayer=function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new i("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new i("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new i("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},o([a.shared("esri.layers.IntegratedMeshLayer")],p.prototype,"declaredClass",void 0),o([a.property({type:String,readOnly:!0})],p.prototype,"geometryType",void 0),o([a.property()],p.prototype,"operationalLayerType",void 0),o([a.property({json:{read:!1},readOnly:!0})],p.prototype,"type",void 0),o([a.property({type:d,json:{origins:{service:{read:{source:"elevationInfo"}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],p.prototype,"elevationInfo",void 0),p=o([a.subclass()],p)}(a.declared(p,y))});