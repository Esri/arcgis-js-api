/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{isMeasurementSystem as s}from"../core/unitUtils.js";import{aliasOf as i}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import a from"./Widget.js";import o from"./DistanceMeasurement2D/DistanceMeasurement2DViewModel.js";import{accessibleHandler as l}from"./support/decorators/accessibleHandler.js";import{messageBundle as u}from"./support/decorators/messageBundle.js";import{tsx as m}from"./support/jsxFactory.js";import"./support/widgetUtils.js";const c="esri-distance-measurement-2d",p={buttonDisabled:"esri-button--disabled",widgetIcon:"esri-icon-measure-line",base:`${c} esri-widget esri-widget--panel`,container:`${c}__container`,hint:`${c}__hint`,hintText:`${c}__hint-text`,panelError:`${c}__panel--error`,measurement:`${c}__measurement`,measurementItem:`${c}__measurement-item`,measurementItemDisabled:`${c}__measurement-item--disabled`,measurementItemTitle:`${c}__measurement-item-title`,measurementItemValue:`${c}__measurement-item-value`,settings:`${c}__settings`,units:`${c}__units`,unitsLabel:`${c}__units-label`,unitsSelect:`${c}__units-select esri-select`,unitsSelectWrapper:`${c}__units-select-wrapper`,actionSection:`${c}__actions`,newMeasurementButton:`${c}__clear-button esri-button esri-button--primary`};let d=class extends a{constructor(e,t){super(e,t),this.iconClass=p.widgetIcon,this.label=void 0,this.messages=null,this.messagesUnits=null,this.unit=null,this.unitOptions=null,this.view=null,this.viewModel=new o}render(){const{id:e,messages:t,messagesUnits:i,viewModel:n,visible:r}=this,{active:a,supported:o,measurementLabel:l,state:u,unit:c,unitOptions:d}=n,v="disabled"===u,b="measuring"===u||"measured"===u,_=a&&"ready"===u?m("section",{key:"hint",class:p.hint},m("p",{class:p.hintText},t.hint)):null,w=o?null:m("section",{key:"unsupported",class:p.panelError},m("p",null,t.unsupported)),h=(e,t,s)=>t?m("div",{key:`${s}-enabled`,class:p.measurementItem},m("span",{class:p.measurementItemTitle},e),m("span",{class:p.measurementItemValue},t)):m("div",{key:`${s}-disabled`,class:this.classes(p.measurementItem,p.measurementItemDisabled),"aria-disabled":"true"},m("span",{class:p.measurementItemTitle},e)),y=b?m("section",{key:"measurement",class:p.measurement},h(t.distance,l,"distance")):null,g=`${e}-units`,M=b?m("section",{key:"units",class:p.units},m("label",{class:p.unitsLabel,for:g},t.unit),m("div",{class:p.unitsSelectWrapper},m("select",{class:p.unitsSelect,id:g,onchange:this._changeUnit,bind:this,value:c},d.map((e=>m("option",{key:e,value:e},s(e)?i.systems[e]:i.units[e]?.pluralCapitalized)))))):null,$=b?m("div",{key:"settings",class:p.settings},M):null,j=!o||a&&!b?null:m("div",{class:p.actionSection},m("button",{disabled:v,class:this.classes(p.newMeasurementButton,v&&p.buttonDisabled),bind:this,onclick:this._newMeasurement,title:t.newMeasurement,"aria-label":t.newMeasurement,type:"button"},t.newMeasurement)),f=r?m("div",{class:p.container},w,_,$,y,j):null;return m("div",{class:p.base},f)}_newMeasurement(){t(this.viewModel.start())}_changeUnit(e){const t=e.target,s=t.options[t.selectedIndex];s&&(this.viewModel.unit=s.value)}};e([i("viewModel.active")],d.prototype,"active",void 0),e([n()],d.prototype,"iconClass",void 0),e([n({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],d.prototype,"label",void 0),e([n()],d.prototype,"uiStrings",void 0),e([n(),u("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],d.prototype,"messages",void 0),e([n(),u("esri/core/t9n/Units")],d.prototype,"messagesUnits",void 0),e([i("viewModel.unit")],d.prototype,"unit",void 0),e([i("viewModel.unitOptions")],d.prototype,"unitOptions",void 0),e([i("viewModel.view")],d.prototype,"view",void 0),e([n({type:o})],d.prototype,"viewModel",void 0),e([i("viewModel.visible")],d.prototype,"visible",void 0),e([l()],d.prototype,"_newMeasurement",null),e([l()],d.prototype,"_changeUnit",null),d=e([r("esri.widgets.DistanceMeasurement2D")],d);const v=d;export{v as default};