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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Layer","./mixins/SceneService","./support/Field","../renderers/support/pointCloudJsonUtils","../core/Error","../core/Logger","dojo/_base/lang"],function(e,r,o,t,i,n,s,p,a,d,y,l){function u(){return n}var c=y.getLogger("esri.layers.PointCloudLayer"),v=function(e){function r(r,o){e.call(this),this.operationalLayerType="PointCloudLayer",this.opacity=1,this.fields=null,this.renderer=null,this.type="point-cloud"}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?l.mixin({},{url:e},r):e},r.prototype.readRenderer=function(e,r,o){return e=r.drawingInfo.renderer||void 0,e&&(e=a.read(e,r,o)||void 0,e||c.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o})),e},r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()});return this.addResolvingPromise(r),this},r.prototype.read=function(e,r){return this.inherited(arguments,[e,r]),e.layerDefinition&&this.inherited(arguments,[e.layerDefinition,r]),this},r.prototype._validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new d("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},t([i.shared({"3d":"../views/3d/layers/PointCloudLayerView3D"})],r.prototype,"viewModulePaths",void 0),t([i.property({readOnly:!0})],r.prototype,"operationalLayerType",void 0),t([i.property({json:{writeAlways:!1}})],r.prototype,"opacity",void 0),t([i.property({type:[p]})],r.prototype,"fields",void 0),t([i.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),t([i.property({json:{writeTo:"layerDefinition.drawingInfo.renderer"}})],r.prototype,"renderer",void 0),t([i.read("renderer",["drawingInfo.renderer"])],r.prototype,"readRenderer",null),t([i.property({json:{readable:!1}})],r.prototype,"type",void 0),r=t([i.subclass("esri.layers.PointCloudLayer")],r)}(i.declared(u(),s));return v});