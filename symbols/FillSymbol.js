/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import t from"./SimpleLineSymbol.js";import r from"./Symbol.js";let l=class extends r{constructor(e){super(e),this.outline=null,this.type=null}hash(){return`${this.type}.${this.outline&&this.outline.hash()}`}};e([s({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":t}},json:{default:null,write:!0}})],l.prototype,"outline",void 0),e([s({type:["simple-fill","picture-fill"],readOnly:!0})],l.prototype,"type",void 0),l=e([o("esri.symbols.FillSymbol")],l);const p=l;export{p as default};
