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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","@dojo/framework/shim/Set","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],function(t,e,r,n,o,u,a,i){var s=new o.default(["Raster","Raster2","DEM","FillRaster"]),c=new o.default(["Rasters"]),p=function(t){return t&&t.rasterFunction?m.fromJSON(t):t},l=function(t){return t&&t instanceof m?t.toJSON():t},f=function(t){if(null==t)return null;for(var e={},r=0,n=Object.keys(t);r<n.length;r++){var o=n[r];s.has(o)?e[o]=p(t[o]):c.has(o)&&Array.isArray(t[o])?e[o]=t[o].map(p):e[o]=t[o]}return e},m=function(t){function e(e){var r=t.call(this)||this;return r.functionArguments=null,r.functionName=null,r.outputPixelType="unknown",r.variableName=null,r}r(e,t),o=e,e.prototype.readFunctionArguments=function(t,e){return f(t)},e.prototype.writeFunctionArguments=function(t,e,r){for(var n={},o=0,u=Object.keys(t);o<u.length;o++){var a=u[o];s.has(a)?n[a]=l(t[a]):c.has(a)&&Array.isArray(t[a])?n[a]=t[a].map(l):n[a]=l(t[a])}e[r]=n},e.prototype.readFunctionName=function(t,e){var r=e.rasterFunctionInfos;return r&&r.length&&"None"!==r[0].name?r[0].name:e.rasterFunction},e.prototype.clone=function(){return new o({functionName:this.functionName,functionArguments:a.clone(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName})};var o;return n([i.property({json:{type:Object,read:{source:"rasterFunctionArguments"},write:{target:"rasterFunctionArguments"}}})],e.prototype,"functionArguments",void 0),n([i.reader("functionArguments")],e.prototype,"readFunctionArguments",null),n([i.writer("functionArguments")],e.prototype,"writeFunctionArguments",null),n([i.property({json:{type:String,write:{target:"rasterFunction"}}})],e.prototype,"functionName",void 0),n([i.reader("functionName",["rasterFunction","rasterFunctionInfos"])],e.prototype,"readFunctionName",null),n([i.enumeration.serializable()({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),i.property({json:{default:"unknown"}})],e.prototype,"outputPixelType",void 0),n([i.property({type:String,json:{read:!0,write:!0}})],e.prototype,"variableName",void 0),e=o=n([i.subclass("esri.layers.support.RasterFunction")],e)}(i.declared(u));return m});