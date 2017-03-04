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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","../Color","./PointCloudRenderer"],function(r,e,o,l,s,a,t,n){var i=function(r){function e(e){var o=r.call(this)||this;return o.type="pointCloudClassBreaksRenderer",o.field=null,o.fieldTransformType=null,o.colorClassBreakInfos=null,o}return o(e,r),e.prototype.readColorClassBreakInfos=function(r,e,o){if(!Array.isArray(r))return null;for(var l=[],s=0,a=r;s<a.length;s++){var n=a[s];n&&"object"==typeof n&&l.push({minValue:n.classMinValue,maxValue:n.classMaxValue,label:n.label,description:n.description,color:t.fromJSON(n.color)})}return l},e.prototype.castColorClassBreakInfos=function(r,e,o){if(!Array.isArray(r))return null;for(var l=[],s=0,n=r;s<n.length;s++){var i=n[s];i&&"object"==typeof i&&l.push({minValue:a.ensureNumber(i.minValue)||0,maxValue:a.ensureNumber(i.maxValue)||0,label:a.ensureString(i.label),description:a.ensureString(i.description),color:a.ensureType(t,i.color)})}return l},e.prototype.writeColorClassBreakInfos=function(r,e,o,l){this.colorClassBreakInfos&&(e.colorClassBreakInfos=this.colorClassBreakInfos.map(function(r){return{classMinValue:r.minValue,classMaxValue:r.maxValue,color:r.color&&r.color.toJSON(),label:r.label,description:r.description}}))},e}(s.declared(n));return l([s.property()],i.prototype,"type",void 0),l([s.property({json:{write:!0},type:String})],i.prototype,"field",void 0),l([s.property({json:{read:n.fieldTransformTypeKebabDict.read,write:n.fieldTransformTypeKebabDict.write},type:String})],i.prototype,"fieldTransformType",void 0),l([s.property({json:{write:!0}})],i.prototype,"colorClassBreakInfos",void 0),l([s.reader("colorClassBreakInfos")],i.prototype,"readColorClassBreakInfos",null),l([s.cast("colorClassBreakInfos")],i.prototype,"castColorClassBreakInfos",null),l([s.writer("colorClassBreakInfos")],i.prototype,"writeColorClassBreakInfos",null),i=l([s.subclass("esri.renderers.PointCloudClassBreaksRenderer")],i)});