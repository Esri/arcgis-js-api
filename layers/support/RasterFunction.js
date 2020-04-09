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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/SetUtils","../../core/accessorSupport/decorators"],(function(t,n,e,r,o,i,u,a){var p,c=u.createSetFromValues(["Raster","Raster2","DEM","FillRaster"]),s=u.createSetFromValues(["Rasters"]),l=function(t){return t&&t.rasterFunction?y.fromJSON(t):t},f=function(t){return t&&t instanceof y?t.toJSON():t};!function(t){t[t.MOSAIC=0]="MOSAIC",t[t.GROUP=1]="GROUP",t[t.ITEM=2]="ITEM"}(p||(p={}));var y=function(t){function n(n){var e=t.call(this,n)||this;return e.functionArguments=null,e.functionName=null,e.outputPixelType="unknown",e.variableName=null,e.description=null,e.functionDefinition=null,e.thumbnail=null,e}var o;return e(n,t),o=n,n.prototype.readFunctionArguments=function(t,n){return function(t){if(null==t)return null;for(var n={},e=0,r=Object.keys(t);e<r.length;e++){var o=r[e];c.has(o)?n[o]=l(t[o]):s.has(o)&&Array.isArray(t[o])?n[o]=t[o].map(l):n[o]=t[o]}return n}(n.arguments||n.rasterFunctionArguments)},n.prototype.writeFunctionArguments=function(t,n,e){for(var r={},o=0,i=Object.keys(t);o<i.length;o++){var u=i[o];c.has(u)?r[u]=f(t[u]):s.has(u)&&Array.isArray(t[u])?r[u]=t[u].map(f):r[u]=f(t[u])}this.functionDefinition?n.arguments=r:n[e]=r},n.prototype.readFunctionName=function(t,n){var e=n.rasterFunctionInfos,r=n.name;return r||(e&&e.length&&"None"!==e[0].name?e[0].name:n.rasterFunction)},n.prototype.writeFunctionName=function(t,n,e){this.functionDefinition?n.name=t:n[e]=t},n.prototype.readFunctionType=function(t){return p[t]},n.prototype.writeFunctionType=function(t,n,e){n[e]=p[t]},n.prototype.clone=function(){return new o({functionName:this.functionName,functionArguments:i.clone(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,name:this.functionName,description:this.description,functionType:this.functionType,functionDefinition:this.functionDefinition,thumbnail:this.thumbnail})},r([a.property({json:{type:Object,write:{target:"rasterFunctionArguments"}}})],n.prototype,"functionArguments",void 0),r([a.reader("functionArguments",["rasterFunctionArguments","arguments"])],n.prototype,"readFunctionArguments",null),r([a.writer("functionArguments")],n.prototype,"writeFunctionArguments",null),r([a.property({json:{type:String,write:{target:"rasterFunction"}}})],n.prototype,"functionName",void 0),r([a.reader("functionName",["rasterFunction","rasterFunctionInfos","name"])],n.prototype,"readFunctionName",null),r([a.writer("functionName")],n.prototype,"writeFunctionName",null),r([a.enumeration.serializable()({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),a.property({json:{default:"unknown"}})],n.prototype,"outputPixelType",void 0),r([a.property({type:String,json:{read:!0,write:!0}})],n.prototype,"variableName",void 0),r([a.property({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"description",void 0),r([a.property({json:{origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"functionType",void 0),r([a.reader("functionType")],n.prototype,"readFunctionType",null),r([a.writer("functionType")],n.prototype,"writeFunctionType",null),r([a.property({type:Object,json:{read:{source:"function"},write:{target:"function"},origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"functionDefinition",void 0),r([a.property({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"thumbnail",void 0),n=o=r([a.subclass("esri.layers.support.RasterFunction")],n)}(a.declared(o.JSONSupport));return y}));