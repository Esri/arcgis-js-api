/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{generateUUID as s}from"../../../core/uuid.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import r from"../../Widget.js";import{DURATION_CONFIGURATOR_CSS as i}from"../css.js";import{DurationMode as c}from"../DurationMode.js";import{Label as l}from"./Label.js";import{LabeledColorPicker as a}from"./LabeledColorPicker.js";import"../../support/widgetUtils.js";import{messageBundle as n}from"../../support/decorators/messageBundle.js";import{tsx as p}from"../../support/jsxFactory.js";let m=class extends r{constructor(o){super(o),this.colorPickerVisible=!0,this._modeSelectorId=`mode-selector-${s()}`,this._colorPickerId=`color-picker-${s()}`,this._onColorChange=o=>{this.options.color=o},this._setContinuous=()=>{this.options.mode=c.Continuous},this._setHourly=()=>{this.options.mode=c.Hourly}}loadDependencies(){return Promise.all([import("@esri/calcite-components/dist/components/calcite-button.js"),import("@esri/calcite-components/dist/components/calcite-label.js")])}render(){const o=this._messages.duration,{color:s,mode:e}=this.options;return p("div",{class:i.base},p(l,{for:this._modeSelectorId,label:o.modeLabel},p("div",{class:i.radioGroup},p(u,{active:e===c.Continuous,label:o.continuousLabel,onclick:this._setContinuous}),p(u,{active:e===c.Hourly,label:o.hourlyLabel,onclick:this._setHourly}))),this.colorPickerVisible&&p(a,{id:this._colorPickerId,label:o.colorLabel,value:s,onChange:this._onColorChange}))}};function u({active:o,label:s,...e}){return p("calcite-button",{alignment:"center",appearance:o?"solid":"outline",scale:"s",width:"half",...e},s)}o([e()],m.prototype,"options",void 0),o([e()],m.prototype,"colorPickerVisible",void 0),o([e(),n("esri/widgets/ShadowCast/t9n/ShadowCast")],m.prototype,"_messages",void 0),m=o([t("esri.widgets.ShadowCast.components.DurationConfigurator")],m);export{m as DurationConfigurator};