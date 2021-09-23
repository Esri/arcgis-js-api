/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer"],(function(e,t,r,n,o,i,u,s,a,c,p,l){"use strict";var f;const d=new Set(["raster","raster2","dem","fillraster"]),y=new Set(["rasters"]),m=e=>e&&e.rasterFunction?F.fromJSON(e):e,w=e=>e&&e instanceof F?e.toJSON():e,g=e=>(null==e?void 0:e.functionName)&&!e.declaredClass,_=e=>g(e)?new F(e):e;var h;!function(e){e[e.MOSAIC=0]="MOSAIC",e[e.GROUP=1]="GROUP",e[e.ITEM=2]="ITEM"}(h||(h={}));const A=e=>{if(null==e)return null;e=n.clone(e);const t={};for(const r of Object.keys(e))d.has(r.toLowerCase())?t[r]=m(e[r]):y.has(r.toLowerCase())&&Array.isArray(e[r])?t[r]=e[r].map(m):t[r]=e[r];return t};let F=f=function(t){function r(e){var r;return(r=t.call(this,e)||this).functionName=null,r.outputPixelType="unknown",r.variableName=null,r.description=null,r.functionDefinition=null,r.thumbnail=null,r}e._inheritsLoose(r,t);var o=r.prototype;return o.readFunctionArguments=function(e,t){return e=t.arguments||t.rasterFunctionArguments,A(e)},o.writeFunctionArguments=function(e,t,r){const n={};for(const o of Object.keys(e))d.has(o.toLowerCase())?n[o]=w(e[o]):y.has(o.toLowerCase())&&Array.isArray(e[o])?n[o]=e[o].map(w):n[o]=w(e[o]);this.functionDefinition?t.arguments=n:t[r]=n},o.readFunctionName=function(e,t){const r=t.rasterFunctionInfos,n=t.name;return n||(r&&r.length&&"None"!==r[0].name?r[0].name:t.rasterFunction)},o.writeFunctionName=function(e,t,r){this.functionDefinition?t.name=e:t[r]=e},o.readFunctionType=function(e){return h[e]},o.writeFunctionType=function(e,t,r){t[r]=h[e]},o.clone=function(){return new f({functionName:this.functionName,functionArguments:n.clone(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,description:this.description,functionType:this.functionType,functionDefinition:this.functionDefinition,thumbnail:this.thumbnail})},e._createClass(r,[{key:"functionArguments",set:function(e){if(e){const t=Object.keys(e);if(t.some((t=>d.has(t.toLowerCase())&&g(e[t])))||t.some((t=>y.has(t.toLowerCase())&&Array.isArray(e[t])&&e[t].some((e=>g(e)))))){e=n.clone(e);for(const r of t)d.has(r.toLowerCase())?e[r]=_(e[r]):y.has(r.toLowerCase())&&Array.isArray(e[r])&&(e[r]=e[r].map((e=>_(e))))}}this._set("functionArguments",e)}}]),r}(r.JSONSupport);return t.__decorate([o.property({json:{type:Object,write:{target:"rasterFunctionArguments"}}})],F.prototype,"functionArguments",null),t.__decorate([c.reader("functionArguments",["rasterFunctionArguments","arguments"])],F.prototype,"readFunctionArguments",null),t.__decorate([l.writer("functionArguments")],F.prototype,"writeFunctionArguments",null),t.__decorate([o.property({json:{type:String,write:{target:"rasterFunction"}}})],F.prototype,"functionName",void 0),t.__decorate([c.reader("functionName",["rasterFunction","rasterFunctionInfos","name"])],F.prototype,"readFunctionName",null),t.__decorate([l.writer("functionName")],F.prototype,"writeFunctionName",null),t.__decorate([a.enumeration({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),o.property({json:{default:"unknown"}})],F.prototype,"outputPixelType",void 0),t.__decorate([o.property({type:String,json:{read:!0,write:!0}})],F.prototype,"variableName",void 0),t.__decorate([o.property({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],F.prototype,"description",void 0),t.__decorate([o.property({json:{origins:{"web-document":{read:!1,write:!1}}}})],F.prototype,"functionType",void 0),t.__decorate([c.reader("functionType")],F.prototype,"readFunctionType",null),t.__decorate([l.writer("functionType")],F.prototype,"writeFunctionType",null),t.__decorate([o.property({type:Object,json:{read:{source:"function"},write:{target:"function"},origins:{"web-document":{read:!1,write:!1}}}})],F.prototype,"functionDefinition",void 0),t.__decorate([o.property({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],F.prototype,"thumbnail",void 0),F=f=t.__decorate([p.subclass("esri.layers.support.RasterFunction")],F),F}));
