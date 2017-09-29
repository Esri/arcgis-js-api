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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/lang","../core/accessorSupport/ensureType","../Color","./PointCloudRenderer"],function(r,e,o,l,s,t,a,n,i,p){var c=function(r){function e(e){var o=r.call(this)||this;return o.type="point-cloud-class-breaks",o.field=null,o.fieldTransformType=null,o.colorClassBreakInfos=null,o}return o(e,r),c=e,e.prototype.writeType=function(r,e,o,l){e.type="pointCloudClassBreaksRenderer"},e.prototype.readColorClassBreakInfos=function(r,e,o){if(!Array.isArray(r))return null;for(var l=[],s=0,t=r;s<t.length;s++){var a=t[s];a&&"object"==typeof a&&l.push({minValue:a.classMinValue,maxValue:a.classMaxValue,label:a.label,description:a.description,color:i.fromJSON(a.color)})}return l},e.prototype.castColorClassBreakInfos=function(r,e,o){if(!Array.isArray(r))return null;for(var l=[],s=0,t=r;s<t.length;s++){var a=t[s];a&&"object"==typeof a&&l.push({minValue:n.ensureNumber(a.minValue)||0,maxValue:n.ensureNumber(a.maxValue)||0,label:n.ensureString(a.label),description:n.ensureString(a.description),color:n.ensureType(i,a.color)})}return l},e.prototype.writeColorClassBreakInfos=function(r,e,o,l){this.colorClassBreakInfos&&(e.colorClassBreakInfos=this.colorClassBreakInfos.map(function(r){return{classMinValue:r.minValue,classMaxValue:r.maxValue,color:r.color&&r.color.toJSON(),label:r.label,description:r.description}}))},e.prototype.clone=function(){return new c(t.mixin(this.cloneProperties(),{field:a.clone(this.field),fieldTransformType:a.clone(this.fieldTransformType),colorClassBreakInfos:a.clone(this.colorClassBreakInfos)}))},l([s.property()],e.prototype,"type",void 0),l([s.writer("type")],e.prototype,"writeType",null),l([s.property({json:{write:!0},type:String})],e.prototype,"field",void 0),l([s.property({json:{read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write},type:String})],e.prototype,"fieldTransformType",void 0),l([s.property({json:{write:!0}})],e.prototype,"colorClassBreakInfos",void 0),l([s.reader("colorClassBreakInfos")],e.prototype,"readColorClassBreakInfos",null),l([s.cast("colorClassBreakInfos")],e.prototype,"castColorClassBreakInfos",null),l([s.writer("colorClassBreakInfos")],e.prototype,"writeColorClassBreakInfos",null),e=c=l([s.subclass("esri.renderers.PointCloudClassBreaksRenderer")],e);var c}(s.declared(p));return c});