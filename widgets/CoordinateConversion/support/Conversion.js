/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import r from"../../../core/Accessor.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";let e=class extends r{constructor(o){super(o),this.format=null,this.position={coordinate:null,location:null}}get displayCoordinate(){const o=this.get("format");return o&&o.getDisplayCoordinate(this.get("position.coordinate"))}};o([t({readOnly:!0})],e.prototype,"displayCoordinate",null),o([t()],e.prototype,"format",void 0),o([t()],e.prototype,"position",void 0),e=o([s("esri.widgets.CoordinateConversion.support.Conversion")],e);const i=e;export{i as default};
