/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../geometry.js";import t from"../../Graphic.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{isSome as o}from"../../core/maybe.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{reader as p}from"../../core/accessorSupport/decorators/reader.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{writer as a}from"../../core/accessorSupport/decorators/writer.js";import{typeKebabDictionary as u}from"../../geometry/support/typeUtils.js";let m=class extends e{constructor(r){super(r),this.displayFieldName=null,this.feature=null,this.foundFieldName=null,this.layerId=null,this.layerName=null,this.value=void 0}readFeature(r,e){const o={attributes:{}};return e.attributes&&(o.attributes=e.attributes),e.geometry&&(o.geometry=e.geometry),t.fromJSON(o)}writeFeature(r,t){if(!r)return;const{attributes:e,geometry:s}=r;e&&(t.attributes={...e}),o(s)&&(t.geometry=s.toJSON(),t.geometryType=u.toJSON(s.type))}};r([s({type:String,json:{write:!0}})],m.prototype,"displayFieldName",void 0),r([s({type:t})],m.prototype,"feature",void 0),r([p("feature",["attributes","geometry"])],m.prototype,"readFeature",null),r([a("feature")],m.prototype,"writeFeature",null),r([s({type:String,json:{write:!0}})],m.prototype,"foundFieldName",void 0),r([s({type:Number,json:{write:!0}})],m.prototype,"layerId",void 0),r([s({type:String,json:{write:!0}})],m.prototype,"layerName",void 0),r([s({json:{write:!0}})],m.prototype,"value",void 0),m=r([i("esri.rest.support.FindResult")],m);const y=m;export{y as default};