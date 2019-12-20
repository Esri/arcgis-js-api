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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/Error","../core/maybe","../core/MultiOriginJSONSupport","../core/accessorSupport/decorators","./Layer","./mixins/ArcGISService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./mixins/SceneService","./support/commonProperties","./support/I3SLayerDefinitions"],function(e,r,t,o,i,n,p,s,a,y,l,d,c,u,v,S,h,f,m){return function(e){function r(r,t){var o=e.call(this,r)||this;return o.geometryType="mesh",o.operationalLayerType="IntegratedMeshLayer",o.type="integrated-mesh",o.nodePages=null,o.materialDefinitions=null,o.textureSetDefinitions=null,o.geometryDefinitions=null,o.serviceUpdateTimeStamp=null,o.profile="mesh-pyramids",o.elevationInfo=null,o.path=null,o}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.load=function(e){var r=this,t=a.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)}).then(function(){return r._verifyRootNodeAndUpdateExtent(r.nodePages,t)});return this.addResolvingPromise(o),this.when()},r.prototype.validateLayer=function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},i([l.property({type:String,readOnly:!0})],r.prototype,"geometryType",void 0),i([l.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([l.property({type:["IntegratedMeshLayer"]})],r.prototype,"operationalLayerType",void 0),i([l.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([l.property({type:m.I3SNodePageDefinition,readOnly:!0})],r.prototype,"nodePages",void 0),i([l.property({type:[m.I3SMaterialDefinition],readOnly:!0})],r.prototype,"materialDefinitions",void 0),i([l.property({type:[m.I3STextureSetDefinition],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),i([l.property({type:[m.I3SGeometryDefinition],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),i([l.property({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),i([l.property(f.elevationInfo)],r.prototype,"elevationInfo",void 0),i([l.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),r=i([l.subclass("esri.layers.IntegratedMeshLayer")],r)}(l.declared(S.ScaleRangeLayer(h.SceneService(c.ArcGISService(u.OperationalLayer(v.PortalLayer(y.MultiOriginJSONMixin(d))))))))});