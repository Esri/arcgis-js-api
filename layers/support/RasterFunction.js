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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","@dojo/framework/shim/Set","../../core/JSONSupport","../../core/kebabDictionary","../../core/lang","../../core/accessorSupport/decorators"],function(t,e,r,n,o,u,a,i,p){var s=new a.KebabDictionary({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"}),c=new o.default(["Raster","Raster2","DEM","FillRaster"]),l=new o.default(["Rasters"]),y=function(t){return t&&t.rasterFunction?m.fromJSON(t):t},f=function(t){return t&&t instanceof m?t.toJSON():t},m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.functionArguments=null,e.functionName=null,e.outputPixelType="unknown",e.variableName=null,e}r(e,t),o=e,e.prototype.readFunctionArguments=function(t,e){for(var r={},n=0,o=Object.keys(t);n<o.length;n++){var u=o[n];c.has(u)?r[u]=y(t[u]):l.has(u)&&Array.isArray(t[u])?r[u]=t[u].map(y):r[u]=t[u]}return r},e.prototype.writeFunctionArguments=function(t,e,r){for(var n={},o=0,u=Object.keys(t);o<u.length;o++){var a=u[o];c.has(a)?n[a]=f(t[a]):l.has(a)&&Array.isArray(t[a])?n[a]=t[a].map(f):n[a]=f(t[a])}e[r]=n},e.prototype.readFunctionName=function(t,e){var r=e.rasterFunctionInfos;return r&&r.length&&"None"!==r[0].name?r[0].name:e.rasterFunction},e.prototype.writeOutputPixelType=function(t,e,r){e[r]="unknown"!==t?s.toJSON(t):void 0},e.prototype.clone=function(){return new o({functionName:this.functionName,functionArguments:i.clone(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName})};var o;return n([p.property({json:{read:{source:"rasterFunctionArguments"},write:{target:"rasterFunctionArguments"}}})],e.prototype,"functionArguments",void 0),n([p.reader("functionArguments")],e.prototype,"readFunctionArguments",null),n([p.writer("functionArguments")],e.prototype,"writeFunctionArguments",null),n([p.property({json:{type:String,write:{target:"rasterFunction"}}})],e.prototype,"functionName",void 0),n([p.reader("functionName",["rasterFunction","rasterFunctionInfos"])],e.prototype,"readFunctionName",null),n([p.property({type:String,json:{read:{reader:s.read}}})],e.prototype,"outputPixelType",void 0),n([p.writer("outputPixelType")],e.prototype,"writeOutputPixelType",null),n([p.property({type:String,json:{read:!0,write:!0}})],e.prototype,"variableName",void 0),e=o=n([p.subclass("esri.layers.support.RasterFunction")],e)}(p.declared(u));return m});