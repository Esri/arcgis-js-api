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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../request","./Layer","./mixins/SceneService","./support/Field","../symbols/support/ElevationInfo","../renderers/support/pointCloudJsonUtils","../renderers/support/pointCloudTypeUtils","../core/promiseUtils","../core/urlUtils","../core/Error","../core/Logger","dojo/_base/lang"],function(e,r,t,o,i,n,s,a,p,d,l,y,u,c,v,f,h){function g(e,r,t){return e&&(e=l.read(e,r,t)||void 0,e||w.error("Failed to create renderer",{rendererDefinition:e,layer:this,context:t})),e}var w=f.getLogger("esri.layers.PointCloudLayer"),S=function(e){function r(r,t){var o=e.call(this)||this;return o.operationalLayerType="PointCloudLayer",o.opacity=1,o.fields=null,o.elevationInfo=null,o.legendEnabled=!0,o.renderer=null,o.type="point-cloud",o}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?h.mixin({},{url:e},r):e},r.prototype.readServiceFields=function(e,r,t){return Array.isArray(e)?e.map(function(e){var r=new p;return"FieldTypeInteger"===e.type&&(e=h.clone(e),e.type="esriFieldTypeInteger"),r.read(e,t),r}):null},r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()});return this.addResolvingPromise(r),this},r.prototype._validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new v("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new v("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new v("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},r.prototype.hasCachedStatistics=function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(function(r){return r.name===e})},r.prototype.queryCachedStatistics=function(e){if(!this.hasCachedStatistics(e))return u.reject(new v("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available"));for(var r=0,t=this.attributeStorageInfo;r<t.length;r++){var o=t[r];if(o.name===e){var i=c.join(this.parsedUrl.path,"./statistics/"+o.key);return n(i,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data})}}},o([i.shared({"3d":"../views/3d/layers/PointCloudLayerView3D"})],r.prototype,"viewModulePaths",void 0),o([i.property({readOnly:!0})],r.prototype,"operationalLayerType",void 0),o([i.property({readOnly:!0,json:{write:!1,read:!1}})],r.prototype,"opacity",void 0),o([i.property({type:[p]})],r.prototype,"fields",void 0),o([i.reader("service","fields")],r.prototype,"readServiceFields",null),o([i.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),o([i.property({type:d,json:{origins:{service:{read:{source:"elevationInfo"}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],r.prototype,"elevationInfo",void 0),o([i.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),o([i.property({types:y.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:g}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:g},write:{target:"layerDefinition.drawingInfo.renderer"}}})],r.prototype,"renderer",void 0),o([i.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),r=o([i.subclass("esri.layers.PointCloudLayer")],r)}(i.declared(s,a));return S});