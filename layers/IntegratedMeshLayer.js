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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/Error","../core/maybe","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/ScaleRangeLayer","./mixins/SceneService","./support/commonProperties","./support/I3SLayerDefinitions"],function(e,r,t,o,i,n,p,s,a,y,d,l,u,c,v,h){return function(r){function l(e,t){var o=r.call(this)||this;return o.geometryType="mesh",o.operationalLayerType="IntegratedMeshLayer",o.type="integrated-mesh",o.nodePages=null,o.materialDefinitions=null,o.textureSetDefinitions=null,o.geometryDefinitions=null,o.profile="mesh-pyramids",o.elevationInfo=null,o.path=null,o}return o(l,r),l.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},l.prototype.load=function(e){var r=this,t=a.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)}).then(function(){return r._verifyRootNodeAndUpdateExtent(t)});return this.addResolvingPromise(o),this.when()},l.prototype.importLayerViewModule=function(r){return p(this,void 0,void 0,function(){return n(this,function(t){switch(r.type){case"2d":return[2,y.reject(new s("integrated-mesh-layer:view-not-supported","IntegratedMeshLayer is only supported in 3D"))];case"3d":return[2,y.create(function(r){return e(["../views/3d/layers/IntegratedMeshLayerView3D"],r)})]}return[2]})})},l.prototype._validateLayer=function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},i([d.shared("esri.layers.IntegratedMeshLayer")],l.prototype,"declaredClass",void 0),i([d.property({type:String,readOnly:!0})],l.prototype,"geometryType",void 0),i([d.property({type:["show","hide"]})],l.prototype,"listMode",void 0),i([d.property({type:["IntegratedMeshLayer"]})],l.prototype,"operationalLayerType",void 0),i([d.property({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),i([d.property({type:h.I3SNodePageDefinition,readOnly:!0})],l.prototype,"nodePages",void 0),i([d.property({type:[h.I3SMaterialDefinition],readOnly:!0})],l.prototype,"materialDefinitions",void 0),i([d.property({type:[h.I3STextureSetDefinition],readOnly:!0})],l.prototype,"textureSetDefinitions",void 0),i([d.property({type:[h.I3SGeometryDefinition],readOnly:!0})],l.prototype,"geometryDefinitions",void 0),i([d.property(v.elevationInfo)],l.prototype,"elevationInfo",void 0),i([d.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),l=i([d.subclass("esri.layers.IntegratedMeshLayer")],l)}(d.declared(l,c,u))});