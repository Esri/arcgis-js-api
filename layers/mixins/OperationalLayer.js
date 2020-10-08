// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Error","../../core/accessorSupport/decorators","../../core/accessorSupport/read","../../core/accessorSupport/write","./operationalLayers","../support/commonProperties","@dojo/framework/shim/Promise"],(function(e,r,t,i,o,a,n,p,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=void 0,r.OperationalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return t.__extends(r,e),r.prototype.writeListMode=function(e,r,t,i){i&&"ground"===i.layerContainerType?r[t]=e:e&&n.willPropertyWrite(this,t,{},i)&&(r[t]=e)},r.prototype.writeOperationalLayerType=function(e,r,t,i){!e||i&&"tables"===i.layerContainerType||(r.layerType=e)},r.prototype.writeTitle=function(e,r){r.title=e||"Layer"},r.prototype.read=function(r,t){var i=this;t&&(t.layer=this),a.readLoadable(this,r,(function(t){return e.prototype.read.call(i,r,t)}),t)},r.prototype.write=function(r,o){if(o&&o.origin){var a=o.origin+"/"+(o.layerContainerType||"operational-layers"),n=p.supportedTypes[a],s=n&&n[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===a&&(s=!1),!s)return o.messages&&o.messages.push(new i("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+a+"'",{layer:this})),null}var l=e.prototype.write.call(this,r,t.__assign(t.__assign({},o),{layer:this})),y=!!o&&!!o.messages&&!!o.messages.filter((function(e){return e instanceof i&&"web-document-write:property-required"===e.name})).length;return!this.url&&y?null:l},r.prototype.beforeSave=function(){},t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),t.__decorate([o.property({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],r.prototype,"listMode",void 0),t.__decorate([o.writer("listMode")],r.prototype,"writeListMode",null),t.__decorate([o.property({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],r.prototype,"operationalLayerType",void 0),t.__decorate([o.writer("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),t.__decorate([o.property(s.opacity)],r.prototype,"opacity",void 0),t.__decorate([o.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}}})],r.prototype,"title",void 0),t.__decorate([o.writer("title")],r.prototype,"writeTitle",null),t.__decorate([o.property({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],r.prototype,"visible",void 0),r=t.__decorate([o.subclass("esri.layers.mixins.OperationalLayer")],r)}(e)}}));