// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Layer","./mixins/SceneService","../core/Error","dojo/_base/lang"],function(e,r,t,o,i,s,n,p,a){var y=function(e){function r(r,t){var o=e.call(this)||this;return o.geometryType="mesh",o.operationalLayerType="IntegratedMeshLayer",o.type="integrated-mesh",o}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?a.mixin({},{url:e},r):e},r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()}).then(function(){return e._verifyRootNodeAndUpdateExtent()});return this.addResolvingPromise(r),this},r.prototype._validateLayer=function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new p("integratedmeshlayer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},r}(i.declared(s,n));return o([i.shared("esri.layers.IntegratedMeshLayer")],y.prototype,"declaredClass",void 0),o([i.shared({"3d":"../views/3d/layers/SceneLayerView3D"})],y.prototype,"viewModulePaths",void 0),o([i.property({type:String,readOnly:!0})],y.prototype,"geometryType",void 0),o([i.property()],y.prototype,"operationalLayerType",void 0),o([i.property({json:{read:!1}})],y.prototype,"type",void 0),y=o([i.subclass()],y)});