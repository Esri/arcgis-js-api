/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import o from"../../../core/Accessor.js";import r from"../../../core/Collection.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import p from"./GamepadInputDevice.js";let c=class extends o{constructor(...e){super(...e),this.devices=new r,this.enabledFocusMode="document"}};e([s({type:r.ofType(p),readOnly:!0})],c.prototype,"devices",void 0),e([s({type:["document","view","none"]})],c.prototype,"enabledFocusMode",void 0),c=e([t("esri.views.input.gamepad.GamepadSettings")],c);const i=c;export{i as default};
