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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../PopupTemplate","../../request","../../core/Loadable","../../core/accessorSupport/decorators","../../geometry/Extent","../../geometry/SpatialReference","./BuildingSublayer","../support/commonProperties","../support/Field","../../renderers/support/jsonUtils","../../renderers/support/typeUtils","../../symbols/support/ElevationInfo"],function(e,r,t,o,p,n,i,a,l,s,d,y,u,f,c,v,g){return function(e){function r(r){var t=e.call(this)||this;return t.type="building-component",t.fields=[],t.renderer=null,t.definitionExpression=null,t.popupEnabled=!0,t.popupTemplate=null,t.geometryType="mesh",t.profile="mesh-pyramids",t}return o(r,e),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var e=0,r=this.fields;e<r.length;e++){var t=r[e];if("oid"===t.type)return t.name}return null},enumerable:!0,configurable:!0}),r.prototype.load=function(){return this.addResolvingPromise(this._fetchService()),this.when()},r.prototype._fetchService=function(){var e=this;return i(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(r){var t=r.data;e.read(t,{origin:"service",url:e.parsedUrl})})},p([l.property({readOnly:!0,dependsOn:["layer","id"]})],r.prototype,"parsedUrl",null),p([l.property({readOnly:!0})],r.prototype,"store",void 0),p([l.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),p([l.property({readOnly:!0,type:[f]})],r.prototype,"fields",void 0),p([l.property({type:String,dependsOn:["fields"],readOnly:!0})],r.prototype,"objectIdField",null),p([l.property({readOnly:!0,type:s,aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),p([l.property({readOnly:!0,type:d,aliasOf:"layer.spatialReference"})],r.prototype,"spatialReference",void 0),p([l.property({readOnly:!0,aliasOf:"layer.version"})],r.prototype,"version",void 0),p([l.property({readOnly:!0,type:g,aliasOf:"layer.elevationInfo"})],r.prototype,"elevationInfo",void 0),p([l.property({types:v.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:c.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:c.read},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],r.prototype,"renderer",void 0),p([l.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],r.prototype,"definitionExpression",void 0),p([l.property(u.popupEnabled)],r.prototype,"popupEnabled",void 0),p([l.property({type:n,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),p([l.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],r.prototype,"normalReferenceFrame",void 0),r=p([l.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],r)}(l.declared(y,a))});