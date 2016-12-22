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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Layer","./mixins/SceneService","../core/Error","dojo/_base/lang"],function(e,r,t,o,i,n,s,a,p){function y(){return n}var d=function(e){function r(r,t){e.call(this),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh"}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?p.mixin({},{url:e},r):e},r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()}).then(function(){return e._verifyRootNodeAndUpdateExtent()});return this.addResolvingPromise(r),this},r.prototype.read=function(e,r){return this.inherited(arguments,[e,r]),e.layerDefinition&&this.inherited(arguments,[e.layerDefinition,r]),this},r.prototype._validateLayer=function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new a("integratedmeshlayer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},o([i.shared("esri.layers.IntegratedMeshLayer")],r.prototype,"declaredClass",void 0),o([i.shared({"3d":"../views/3d/layers/SceneLayerView3D"})],r.prototype,"viewModulePaths",void 0),o([i.property({type:String,readOnly:!0})],r.prototype,"geometryType",void 0),o([i.property()],r.prototype,"operationalLayerType",void 0),o([i.property({json:{readable:!1}})],r.prototype,"type",void 0),r=o([i.subclass()],r)}(i.declared(y(),s));return d});