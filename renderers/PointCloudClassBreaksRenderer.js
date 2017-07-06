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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/lang","../core/accessorSupport/ensureType","../Color","./PointCloudRenderer"],function(r,e,o,l,s,a,n,t,i,p){var c=u=function(r){function e(e){var o=r.call(this)||this;return o.type="pointCloudClassBreaksRenderer",o.field=null,o.fieldTransformType=null,o.colorClassBreakInfos=null,o}return o(e,r),e.prototype.readColorClassBreakInfos=function(r,e,o){if(!Array.isArray(r))return null;for(var l=[],s=0,a=r;s<a.length;s++){var n=a[s];n&&"object"==typeof n&&l.push({minValue:n.classMinValue,maxValue:n.classMaxValue,label:n.label,description:n.description,color:i.fromJSON(n.color)})}return l},e.prototype.castColorClassBreakInfos=function(r,e,o){if(!Array.isArray(r))return null;for(var l=[],s=0,a=r;s<a.length;s++){var n=a[s];n&&"object"==typeof n&&l.push({minValue:t.ensureNumber(n.minValue)||0,maxValue:t.ensureNumber(n.maxValue)||0,label:t.ensureString(n.label),description:t.ensureString(n.description),color:t.ensureType(i,n.color)})}return l},e.prototype.writeColorClassBreakInfos=function(r,e,o,l){this.colorClassBreakInfos&&(e.colorClassBreakInfos=this.colorClassBreakInfos.map(function(r){return{classMinValue:r.minValue,classMaxValue:r.maxValue,color:r.color&&r.color.toJSON(),label:r.label,description:r.description}}))},e.prototype.clone=function(){return new u(a.mixin(this.cloneProperties(),{field:n.clone(this.field),fieldTransformType:n.clone(this.fieldTransformType),colorClassBreakInfos:n.clone(this.colorClassBreakInfos)}))},e}(s.declared(p));l([s.property()],c.prototype,"type",void 0),l([s.property({json:{write:!0},type:String})],c.prototype,"field",void 0),l([s.property({json:{read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write},type:String})],c.prototype,"fieldTransformType",void 0),l([s.property({json:{write:!0}})],c.prototype,"colorClassBreakInfos",void 0),l([s.reader("colorClassBreakInfos")],c.prototype,"readColorClassBreakInfos",null),l([s.cast("colorClassBreakInfos")],c.prototype,"castColorClassBreakInfos",null),l([s.writer("colorClassBreakInfos")],c.prototype,"writeColorClassBreakInfos",null),c=u=l([s.subclass("esri.renderers.PointCloudClassBreaksRenderer")],c);var u;return c});