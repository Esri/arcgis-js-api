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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./PointCloudRenderer"],function(r,e,o,l,s,a){var t=function(r){function e(e){r.call(this),this.type="pointCloudClassBreaksRenderer",this.field=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}return o(e,r),e.prototype.readColorClassBreakInfos=function(r,e,o){if(!Array.isArray(r))return null;for(var l=[],s=0,a=r;s<a.length;s++){var t=a[s];if(t&&"object"==typeof t){var n=null!=t.classMinValue?parseFloat(t.classMinValue):0,i=null!=t.classMaxValue?parseFloat(t.classMaxValue):0,p=null!=t.label?String(t.label):null,c=null!=t.description?String(t.description):null,u=Array.isArray(t.color)&&t.color.length>=3&&t.color.length<=4&&t.color.every(function(r){return"number"==typeof r})?t.color.slice():null;l.push({minValue:n,maxValue:i,label:p,description:c,color:u})}}return l},e.prototype.writeColorClassBreakInfos=function(r,e,o){this.colorClassBreakInfos&&(e.colorClassBreakInfos=this.colorClassBreakInfos.map(function(r){return{classMinValue:r.minValue,classMaxValue:r.maxValue,color:r.color&&r.color.slice(),label:r.label,description:r.description}}))},l([s.property()],e.prototype,"type",void 0),l([s.property({json:{writable:!0},type:String})],e.prototype,"field",void 0),l([s.property({json:{writable:!0},type:String})],e.prototype,"fieldTransformType",void 0),l([s.property({json:{writable:!0}})],e.prototype,"colorClassBreakInfos",void 0),l([s.read("colorClassBreakInfos")],e.prototype,"readColorClassBreakInfos",null),l([s.write("colorClassBreakInfos")],e.prototype,"writeColorClassBreakInfos",null),e=l([s.subclass("esri.renderer.PointCloudClassBreaksRenderer")],e)}(s.declared(a));return t});