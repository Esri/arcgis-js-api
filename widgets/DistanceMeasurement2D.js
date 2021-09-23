/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/promiseUtils","../core/unitUtils","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./DistanceMeasurement2D/DistanceMeasurement2DViewModel","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/jsxFactory","./support/widgetUtils"],(function(e,t,s,i,n,a,r,o,l,u,c,d,p,m,_,v){"use strict";const b="esri-distance-measurement-2d",y={buttonDisabled:"esri-button--disabled",widgetIcon:"esri-icon-measure-line",base:`${b} esri-widget esri-widget--panel`,container:`${b}__container`,hint:`${b}__hint`,hintText:`${b}__hint-text`,panelError:`${b}__panel--error`,measurement:`${b}__measurement`,measurementItem:`${b}__measurement-item`,measurementItemDisabled:`${b}__measurement-item--disabled`,measurementItemTitle:`${b}__measurement-item-title`,measurementItemValue:`${b}__measurement-item-value`,settings:`${b}__settings`,units:`${b}__units`,unitsLabel:`${b}__units-label`,unitsSelect:`${b}__units-select esri-select`,unitsSelectWrapper:`${b}__units-select-wrapper`,actionSection:`${b}__actions`,newMeasurementButton:`${b}__clear-button esri-button esri-button--primary`};let g=function(t){function n(e,s){var i;return(i=t.call(this,e,s)||this).iconClass=y.widgetIcon,i.label=void 0,i.messages=null,i.messagesUnits=null,i.unit=null,i.unitOptions=null,i.view=null,i.viewModel=new d,i}e._inheritsLoose(n,t);var a=n.prototype;return a.render=function(){const{id:e,messages:t,messagesUnits:s,viewModel:n,visible:a}=this,{active:r,supported:o,measurementLabel:l,state:u,unit:c,unitOptions:d}=n,p="disabled"===u,m="measuring"===u||"measured"===u,v=r&&"ready"===u?_.tsx("section",{key:"hint",class:y.hint},_.tsx("p",{class:y.hintText},t.hint)):null,b=o?null:_.tsx("section",{key:"unsupported",class:y.panelError},_.tsx("p",null,t.unsupported)),g=(e,t,s)=>t?_.tsx("div",{key:`${s}-enabled`,class:y.measurementItem},_.tsx("span",{class:y.measurementItemTitle},e),_.tsx("span",{class:y.measurementItemValue},t)):_.tsx("div",{key:`${s}-disabled`,class:this.classes(y.measurementItem,y.measurementItemDisabled),"aria-disabled":"true"},_.tsx("span",{class:y.measurementItemTitle},e)),w=m?_.tsx("section",{key:"measurement",class:y.measurement},g(t.distance,l,"distance")):null,h=`${e}-units`,x=m?_.tsx("section",{key:"units",class:y.units},_.tsx("label",{class:y.unitsLabel,for:h},t.unit),_.tsx("div",{class:y.unitsSelectWrapper},_.tsx("select",{class:y.unitsSelect,id:h,onchange:this._changeUnit,bind:this,value:c},d.map((e=>{var t;return _.tsx("option",{key:e,value:e},i.isMeasurementSystem(e)?s.systems[e]:null==(t=s.units[e])?void 0:t.pluralCapitalized)}))))):null,M=m?_.tsx("div",{key:"settings",class:y.settings},x):null,$=!o||r&&!m?null:_.tsx("div",{class:y.actionSection},_.tsx("button",{disabled:p,class:this.classes(y.newMeasurementButton,p&&y.buttonDisabled),bind:this,onclick:this._newMeasurement,title:t.newMeasurement,"aria-label":t.newMeasurement,type:"button"},t.newMeasurement)),f=a?_.tsx("div",{class:y.container},b,v,M,w,$):null;return _.tsx("div",{class:y.base},f)},a._newMeasurement=function(){s.ignoreAbortErrors(this.viewModel.start())},a._changeUnit=function(e){const t=e.target,s=t.options[t.selectedIndex];s&&(this.viewModel.unit=s.value)},n}(c);return t.__decorate([n.aliasOf("viewModel.active")],g.prototype,"active",void 0),t.__decorate([l.property()],g.prototype,"iconClass",void 0),t.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],g.prototype,"label",void 0),t.__decorate([l.property()],g.prototype,"uiStrings",void 0),t.__decorate([l.property(),m.messageBundle("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],g.prototype,"messages",void 0),t.__decorate([l.property(),m.messageBundle("esri/core/t9n/Units")],g.prototype,"messagesUnits",void 0),t.__decorate([n.aliasOf("viewModel.unit")],g.prototype,"unit",void 0),t.__decorate([n.aliasOf("viewModel.unitOptions")],g.prototype,"unitOptions",void 0),t.__decorate([n.aliasOf("viewModel.view")],g.prototype,"view",void 0),t.__decorate([l.property({type:d})],g.prototype,"viewModel",void 0),t.__decorate([n.aliasOf("viewModel.visible")],g.prototype,"visible",void 0),t.__decorate([p.accessibleHandler()],g.prototype,"_newMeasurement",null),t.__decorate([p.accessibleHandler()],g.prototype,"_changeUnit",null),g=t.__decorate([u.subclass("esri.widgets.DistanceMeasurement2D")],g),g}));
