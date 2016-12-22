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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./PointCloudRenderer"],function(e,r,o,l,n,t){var i=function(e){function r(r){e.call(this),this.type="pointCloudUniqueValueRenderer",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null}return o(r,e),r.prototype.readColorUniqueValueInfos=function(e,r,o){if(!Array.isArray(e))return null;for(var l=[],n=0,t=e;n<t.length;n++){var i=t[n];if(i&&"object"==typeof i){var u=Array.isArray(i.values)&&i.values.every(function(e){return"string"==typeof e})?i.values:null,s=null!=i.label?String(i.label):null,a=null!=i.description?String(i.description):null,p=Array.isArray(i.color)&&i.color.length>=3&&i.color.length<=4&&i.color.every(function(e){return"number"==typeof e})?i.color.slice():null;l.push({values:u,label:s,description:a,color:p})}}return l},r.prototype.writeColorUniqueValueInfos=function(e,r,o){this.colorUniqueValueInfos&&(r.colorUniqueValueInfos=this.colorUniqueValueInfos.map(function(e){return{values:e.values,color:e.color&&e.color.slice(),label:e.label,description:e.description}}))},l([n.property()],r.prototype,"type",void 0),l([n.property({json:{writable:!0},type:String})],r.prototype,"field",void 0),l([n.property({json:{writable:!0},type:String})],r.prototype,"fieldTransformType",void 0),l([n.property({json:{writable:!0}})],r.prototype,"colorUniqueValueInfos",void 0),l([n.read("colorUniqueValueInfos")],r.prototype,"readColorUniqueValueInfos",null),l([n.write("colorUniqueValueInfos")],r.prototype,"writeColorUniqueValueInfos",null),r=l([n.subclass("esri.renderer.PointCloudUniqueValueRenderer")],r)}(n.declared(t));return i});