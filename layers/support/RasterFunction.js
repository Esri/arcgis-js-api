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

define(["require","exports","tslib","../../core/JSONSupport","../../core/lang","../../core/SetUtils","../../core/accessorSupport/decorators"],(function(t,e,n,r,o,i,u){"use strict";var a,c=i.SetFromValues(["Raster","Raster2","DEM","FillRaster"]),p=i.SetFromValues(["Rasters"]),s=function(t){return t&&t.rasterFunction?f.fromJSON(t):t},l=function(t){return t&&t instanceof f?t.toJSON():t};!function(t){t[t.MOSAIC=0]="MOSAIC",t[t.GROUP=1]="GROUP",t[t.ITEM=2]="ITEM"}(a||(a={}));var f=function(t){function e(e){var n=t.call(this,e)||this;return n.functionArguments=null,n.functionName=null,n.outputPixelType="unknown",n.variableName=null,n.description=null,n.functionDefinition=null,n.thumbnail=null,n}var r;return n.__extends(e,t),r=e,e.prototype.readFunctionArguments=function(t,e){return function(t){if(null==t)return null;for(var e={},n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];c.has(o)?e[o]=s(t[o]):p.has(o)&&Array.isArray(t[o])?e[o]=t[o].map(s):e[o]=t[o]}return e}(e.arguments||e.rasterFunctionArguments)},e.prototype.writeFunctionArguments=function(t,e,n){for(var r={},o=0,i=Object.keys(t);o<i.length;o++){var u=i[o];c.has(u)?r[u]=l(t[u]):p.has(u)&&Array.isArray(t[u])?r[u]=t[u].map(l):r[u]=l(t[u])}this.functionDefinition?e.arguments=r:e[n]=r},e.prototype.readFunctionName=function(t,e){var n=e.rasterFunctionInfos,r=e.name;return r||(n&&n.length&&"None"!==n[0].name?n[0].name:e.rasterFunction)},e.prototype.writeFunctionName=function(t,e,n){this.functionDefinition?e.name=t:e[n]=t},e.prototype.readFunctionType=function(t){return a[t]},e.prototype.writeFunctionType=function(t,e,n){e[n]=a[t]},e.prototype.clone=function(){return new r({functionName:this.functionName,functionArguments:o.clone(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,description:this.description,functionType:this.functionType,functionDefinition:this.functionDefinition,thumbnail:this.thumbnail})},n.__decorate([u.property({json:{type:Object,write:{target:"rasterFunctionArguments"}}})],e.prototype,"functionArguments",void 0),n.__decorate([u.reader("functionArguments",["rasterFunctionArguments","arguments"])],e.prototype,"readFunctionArguments",null),n.__decorate([u.writer("functionArguments")],e.prototype,"writeFunctionArguments",null),n.__decorate([u.property({json:{type:String,write:{target:"rasterFunction"}}})],e.prototype,"functionName",void 0),n.__decorate([u.reader("functionName",["rasterFunction","rasterFunctionInfos","name"])],e.prototype,"readFunctionName",null),n.__decorate([u.writer("functionName")],e.prototype,"writeFunctionName",null),n.__decorate([u.enumeration({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),u.property({json:{default:"unknown"}})],e.prototype,"outputPixelType",void 0),n.__decorate([u.property({type:String,json:{read:!0,write:!0}})],e.prototype,"variableName",void 0),n.__decorate([u.property({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],e.prototype,"description",void 0),n.__decorate([u.property({json:{origins:{"web-document":{read:!1,write:!1}}}})],e.prototype,"functionType",void 0),n.__decorate([u.reader("functionType")],e.prototype,"readFunctionType",null),n.__decorate([u.writer("functionType")],e.prototype,"writeFunctionType",null),n.__decorate([u.property({type:Object,json:{read:{source:"function"},write:{target:"function"},origins:{"web-document":{read:!1,write:!1}}}})],e.prototype,"functionDefinition",void 0),n.__decorate([u.property({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],e.prototype,"thumbnail",void 0),e=r=n.__decorate([u.subclass("esri.layers.support.RasterFunction")],e)}(r.JSONSupport);return f}));