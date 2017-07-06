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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Layer","./mixins/SceneService","./support/Field","../symbols/support/ElevationInfo","../renderers/support/pointCloudJsonUtils","../core/Error","../core/Logger","dojo/_base/lang"],function(e,r,o,t,n,i,a,p,s,d,l,y,u){var v=y.getLogger("esri.layers.PointCloudLayer"),c=function(e){function r(r,o){var t=e.call(this)||this;return t.operationalLayerType="PointCloudLayer",t.opacity=1,t.fields=null,t.elevationInfo=null,t.renderer=null,t.type="point-cloud",t}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?u.mixin({},{url:e},r):e},r.prototype.readRenderer=function(e,r,o){return this._readRenderer(e,r.layerDefinition,o)},r.prototype.readServiceRenderer=function(e,r,o){return this._readRenderer(e,r,o)},r.prototype._readRenderer=function(e,r,o){return e=r.drawingInfo.renderer||void 0,e&&(e=d.read(e,r,o)||void 0,e||v.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o})),e},r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()});return this.addResolvingPromise(r),this},r.prototype._validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},r}(n.declared(i,a));return t([n.shared({"3d":"../views/3d/layers/PointCloudLayerView3D"})],c.prototype,"viewModulePaths",void 0),t([n.property({readOnly:!0})],c.prototype,"operationalLayerType",void 0),t([n.property({json:{write:{ignoreOrigin:!1}}})],c.prototype,"opacity",void 0),t([n.property({type:[p]})],c.prototype,"fields",void 0),t([n.property({readOnly:!0})],c.prototype,"attributeStorageInfo",void 0),t([n.property({type:s,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],c.prototype,"elevationInfo",void 0),t([n.property({json:{write:{target:"layerDefinition.drawingInfo.renderer"}}})],c.prototype,"renderer",void 0),t([n.reader("renderer",["layerDefinition.drawingInfo.renderer"])],c.prototype,"readRenderer",null),t([n.reader("service","renderer",["drawingInfo.renderer"])],c.prototype,"readServiceRenderer",null),t([n.property({json:{read:!1},readOnly:!0,value:"point-cloud"})],c.prototype,"type",void 0),c=t([n.subclass("esri.layers.PointCloudLayer")],c)});