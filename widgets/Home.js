/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./Home/HomeViewModel","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/decorators/vmEvent","./support/jsxFactory","./support/widgetUtils"],(function(e,o,t,s,r,i,n,a,l,c,d,p,u,g,v){"use strict";const m={base:"esri-home esri-widget--button esri-widget",text:"esri-icon-font-fallback-text",homeIcon:"esri-icon esri-icon-home",loadingIcon:"esri-icon-loading-indicator",rotatingIcon:"esri-rotating",widgetIcon:"esri-icon-home",disabled:"esri-disabled"};let h=function(o){function t(e,t){var s;return(s=o.call(this,e,t)||this).goToOverride=null,s.iconClass=m.widgetIcon,s.label=void 0,s.messages=null,s.messagesCommon=null,s.view=null,s.viewModel=new c,s.viewpoint=null,s}e._inheritsLoose(t,o);var s=t.prototype;return s.cancelGo=function(){return null},s.go=function(){return null},s.render=function(){var e;const o=null==(e=this.viewModel)?void 0:e.state,{homeTitle:t}=this,s={[m.disabled]:"disabled"===o};return g.tsx("div",{bind:this,class:this.classes(m.base,s),role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":t,title:t},this.renderIcon(),this.renderText())},s.renderIcon=function(){var e;const o=null==(e=this.viewModel)?void 0:e.state,t={[m.loadingIcon]:"going-home"===o,[m.rotatingIcon]:"going-home"===o};return g.tsx("span",{"aria-hidden":"true",class:this.classes(m.homeIcon,t)})},s.renderText=function(){const{messages:e}=this;return g.tsx("span",{class:m.text},e.button)},s._go=function(){const{viewModel:e}=this;"going-home"===e.state?e.cancelGo():e.go()},e._createClass(t,[{key:"homeTitle",get:function(){var e;const o=null==(e=this.viewModel)?void 0:e.state,{messagesCommon:t,messages:s}=this;return"going-home"===o?t.cancel:s.title}}]),t}(l);return o.__decorate([t.aliasOf("viewModel.goToOverride")],h.prototype,"goToOverride",void 0),o.__decorate([n.property({readOnly:!0})],h.prototype,"homeTitle",null),o.__decorate([n.property()],h.prototype,"iconClass",void 0),o.__decorate([n.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],h.prototype,"label",void 0),o.__decorate([n.property(),p.messageBundle("esri/widgets/Home/t9n/Home")],h.prototype,"messages",void 0),o.__decorate([n.property(),p.messageBundle("esri/t9n/common")],h.prototype,"messagesCommon",void 0),o.__decorate([t.aliasOf("viewModel.view")],h.prototype,"view",void 0),o.__decorate([n.property({type:c}),u.vmEvent("go")],h.prototype,"viewModel",void 0),o.__decorate([t.aliasOf("viewModel.viewpoint")],h.prototype,"viewpoint",void 0),o.__decorate([t.aliasOf("viewModel.cancelGo")],h.prototype,"cancelGo",null),o.__decorate([t.aliasOf("viewModel.go")],h.prototype,"go",null),o.__decorate([d.accessibleHandler()],h.prototype,"_go",null),h=o.__decorate([a.subclass("esri.widgets.Home")],h),h}));
