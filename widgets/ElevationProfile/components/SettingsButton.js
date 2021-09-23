/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/events","../../../core/maybe","../../../core/unitUtils","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../Widget","../css","../../support/Popover","../../support/widgetUtils","../../support/decorators/messageBundle","../../support/jsxFactory"],(function(e,t,o,n,s,i,r,a,l,c,u,p,h,_,S,g,f){"use strict";function d(e){e.preventDefault()}e.SettingsButton=function(e){function o(t,o){var n;return(n=e.call(this,t,o)||this)._messagesUnits=null,n._popover=null,n._buttonElement=null,n._focusOutElement=null,n._requestFocusOnCreate=!1,n}t._inheritsLoose(o,e);var r=o.prototype;return r.destroy=function(){this._destroyPopover()},r.render=function(){const{unitSelector:e,uniformChartScalingToggle:t}=this.visibleElements;if(!e&&!t)return f.tsx("div",{key:`${this.id}-empty`});const o=s.isSome(this._popover)&&this._popover.open?this._messages.hideSettings:this._messages.showSettings;return f.tsx("button",{class:h.SETTINGS_CSS.base,title:o,bind:this,afterCreate:this._initializePopover,onclick:this._togglePopover,"aria-label":o})},r._initializePopover=function(e){this._destroyPopover(),this._buttonElement=e,this._popover=new _({owner:this,placement:"bottom-end",offset:[0,0],anchorElement:e,renderContentFunction:()=>this._renderPopoverContent()})},r._destroyPopover=function(){this._focusOutElement=s.removeMaybe(this._focusOutElement),this._popover=s.destroyMaybe(this._popover)},r._renderPopoverContent=function(){const{unitSelector:e,uniformChartScalingToggle:t}=this.visibleElements;return f.tsx("div",{class:h.SETTINGS_CSS.popoverContent,dir:S.getDir(s.unwrap(this._buttonElement)),bind:this,afterCreate:this._onPopoverContentAfterCreate},e&&this._renderUnitSelector(),t&&this._renderUniformChartScalingToggle())},r._renderUnitSelector=function(){const{unit:e,unitOptions:t}=this.viewModel,o=this._messagesUnits;return f.tsx("label",{key:"unit-selector-label",class:h.SETTINGS_CSS.selectLabel},this._messages.unitSelectLabel,f.tsx("select",{class:h.SETTINGS_CSS.select,value:e,bind:this,onchange:this._onUnitChange,afterCreate:this._onUnitSelectAfterCreate},t.map((e=>f.tsx("option",{key:e,value:e},i.isMeasurementSystem(e)?o.systems[e]:o.units[e].pluralCapitalized)))))},r._onUnitChange=function(e){this.viewModel.unit=e.target.value},r._onUnitSelectAfterCreate=function(e){this._requestFocusOnCreate&&(this._requestFocusOnCreate=!1,e.focus())},r._renderUniformChartScalingToggle=function(){const e=this._messages,t=this.viewModel.uniformChartScaling,o=t?e.uniformChartScalingDisable:e.uniformChartScalingEnable;return f.tsx("label",{key:"uniform-chart-scaling-label",class:h.SETTINGS_CSS.checkboxLabel,onmousedown:d},f.tsx("input",{class:this.classes(h.SETTINGS_CSS.checkbox,h.SETTINGS_CSS.uniformChartScalingCheckbox),type:"checkbox",checked:t,title:o,"aria-label":o,bind:this,onchange:this._onUniformChartScalingChange}),e.uniformChartScalingLabel)},r._onUniformChartScalingChange=function(e){this.viewModel.uniformChartScaling=e.target.checked},r._togglePopover=function(e){s.isSome(this._popover)&&this._popover.open?this._closePopover():this._openPopover()},r._openPopover=function(){s.applySome(this._popover,(e=>e.open=!0)),this._requestFocusOnCreate=!0},r._closePopover=function({focusOnButton:e=!0}={}){s.applySome(this._popover,(e=>e.open=!1)),e&&s.applySome(this._buttonElement,(e=>e.focus()))},r._onPopoverContentAfterCreate=function(e){s.removeMaybe(this._focusOutElement),this._focusOutElement=n.on(e,"focusout",(({relatedTarget:t})=>{const o=e.contains(t),n=t===this._buttonElement;o||n||this._closePopover({focusOnButton:!1})}))},o}(p),o.__decorate([r.property()],e.SettingsButton.prototype,"viewModel",void 0),o.__decorate([r.property()],e.SettingsButton.prototype,"visibleElements",void 0),o.__decorate([r.property(),g.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],e.SettingsButton.prototype,"_messages",void 0),o.__decorate([r.property(),g.messageBundle("esri/core/t9n/Units")],e.SettingsButton.prototype,"_messagesUnits",void 0),e.SettingsButton=o.__decorate([u.subclass("esri.widgets.ElevationProfile.SettingsButton")],e.SettingsButton),Object.defineProperty(e,"__esModule",{value:!0})}));
