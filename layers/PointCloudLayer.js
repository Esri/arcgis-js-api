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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Layer","./mixins/SceneService","./support/Field","../renderers/support/pointCloudJsonUtils","../core/Error","../core/Logger","dojo/_base/lang"],function(e,r,o,t,i,n,p,s,d,a,y,l){var u=y.getLogger("esri.layers.PointCloudLayer"),c=function(e){function r(r,o){var t=e.call(this)||this;return t.operationalLayerType="PointCloudLayer",t.opacity=1,t.fields=null,t.renderer=null,t.type="point-cloud",t}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?l.mixin({},{url:e},r):e},r.prototype.readRenderer=function(e,r,o){return this._readRenderer(e,r.layerDefinition,o)},r.prototype.readServiceRenderer=function(e,r,o){return this._readRenderer(e,r,o)},r.prototype._readRenderer=function(e,r,o){return e=r.drawingInfo.renderer||void 0,e&&(e=d.read(e,r,o)||void 0,e||u.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o})),e},r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()});return this.addResolvingPromise(r),this},r.prototype._validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new a("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},r}(i.declared(n,p));return t([i.shared({"3d":"../views/3d/layers/PointCloudLayerView3D"})],c.prototype,"viewModulePaths",void 0),t([i.property({readOnly:!0})],c.prototype,"operationalLayerType",void 0),t([i.property({json:{write:{ignoreOrigin:!1}}})],c.prototype,"opacity",void 0),t([i.property({type:[s]})],c.prototype,"fields",void 0),t([i.property({readOnly:!0})],c.prototype,"attributeStorageInfo",void 0),t([i.property({json:{write:{target:"layerDefinition.drawingInfo.renderer"}}})],c.prototype,"renderer",void 0),t([i.reader("renderer",["layerDefinition.drawingInfo.renderer"])],c.prototype,"readRenderer",null),t([i.reader("service","renderer",["drawingInfo.renderer"])],c.prototype,"readServiceRenderer",null),t([i.property({json:{read:!1}})],c.prototype,"type",void 0),c=t([i.subclass("esri.layers.PointCloudLayer")],c)});