/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./Expand/ExpandViewModel","./support/widget","./support/decorators/messageBundle","./support/decorators/accessibleHandler","./support/jsxFactory"],(function(e,n,t,o,r,s,a,d,i,p,c,l,u,x){"use strict";const _={base:"esri-expand esri-widget",modeAuto:"esri-expand--auto",modeDrawer:"esri-expand--drawer",modeFloating:"esri-expand--floating",container:"esri-expand__container",containerExpanded:"esri-expand__container--expanded",panel:"esri-expand__panel",button:"esri-widget--button",text:"esri-icon-font-fallback-text",icon:"esri-collapse__icon",iconExpanded:"esri-expand__icon--expanded",iconNumber:"esri-expand__icon-number",iconNumberExpanded:"esri-expand__icon-number--expanded",expandIcon:"esri-icon-expand",collapseIcon:"esri-icon-collapse",content:"esri-expand__content",contentExpanded:"esri-expand__content--expanded",expandMask:"esri-expand__mask",expandMaskExpanded:"esri-expand__mask--expanded"};let h=function(n){function t(t,o){var r;return(r=n.call(this,t,o)||this).autoCollapse=null,r.closeOnEsc=!0,r.collapseTooltip="",r.content="",r.expanded=null,r.expandTooltip="",r.group=null,r.iconNumber=0,r.label=void 0,r.messages=null,r.messagesCommon=null,r.mode="auto",r.view=null,r.viewModel=new p,r._handleKeyDown=n=>{const{closeOnEsc:t,_toggleButtonEl:o,expanded:s}=e._assertThisInitialized(r);if(!s||!t||n.target===o||"Escape"!==n.key)return;("function"==typeof t?t(n):t)&&(r.expanded=!1,null==o||o.focus())},r}e._inheritsLoose(t,n);var o=t.prototype;return o.expand=function(){this.viewModel.expanded=!0},o.collapse=function(){this.viewModel.expanded=!1},o.toggle=function(){this.viewModel.expanded=!this.viewModel.expanded},o.render=function(){const{mode:e}=this,n={[_.modeAuto]:"auto"===e,[_.modeDrawer]:"drawer"===e,[_.modeFloating]:"floating"===e};return x.tsx("div",{class:this.classes(_.base,n),onkeydown:this._handleKeyDown},this.renderMask(),this.renderContainer())},o.renderContainer=function(){const{expanded:e}=this,n={[_.containerExpanded]:e};return x.tsx("div",{class:this.classes(_.container,n)},this.renderPanel(),this.renderContent())},o.renderMask=function(){const{expanded:e}=this,n={[_.expandMaskExpanded]:e};return x.tsx("div",{bind:this,onclick:this._toggle,class:this.classes(_.expandMask,n)})},o.renderBadgeNumber=function(){const{expanded:e,iconNumber:n}=this;return n&&!e?x.tsx("span",{key:"expand__icon-number",class:_.iconNumber},n):null},o.renderPanelNumber=function(){const{iconNumber:e,expanded:n}=this;return e&&n?x.tsx("span",{key:"expand__expand-icon-number",class:this.classes(_.iconNumber,_.iconNumberExpanded)},e):null},o.renderIcon=function(){const{collapseIconClass:e,expandIconClass:n,expanded:t}=this,o={[_.iconExpanded]:t,[e]:t,[n]:!t};return e===n&&(o[e]=!0),x.tsx("span",{"aria-hidden":"true",class:this.classes(_.icon,o)})},o.renderTitle=function(){return x.tsx("span",{class:_.text},this.expandTitle)},o.renderExpandButton=function(){const{expanded:e,expandTitle:n,contentId:t}=this;return x.tsx("div",{afterCreate:this._storeToggleButtonEl,"aria-controls":t,"aria-expanded":e?"true":"false",bind:this,class:_.button,onclick:this._toggle,onkeydown:this._toggle,role:"button",tabindex:"0",title:n},this.renderBadgeNumber(),this.renderIcon(),this.renderTitle())},o.renderPanel=function(){return x.tsx("div",{class:_.panel},this.renderExpandButton(),this.renderPanelNumber())},o.renderContent=function(){const{expanded:e,contentId:n}=this,t={[_.contentExpanded]:e};return x.tsx("div",{id:n,role:"region",class:this.classes(_.content,t)},this.renderContentContainer())},o.renderContentContainer=function(){const e=this.content;return"string"==typeof e?x.tsx("div",{innerHTML:e}):c.isWidget(e)?e.render():e instanceof HTMLElement?x.tsx("div",{bind:e,afterCreate:this._attachToNode}):c.hasDomNode(e)?x.tsx("div",{bind:e.domNode,afterCreate:this._attachToNode}):null},o._toggle=function(){this.toggle()},o._attachToNode=function(e){const n=this;e.appendChild(n)},o._storeToggleButtonEl=function(e){this._toggleButtonEl=e},e._createClass(t,[{key:"contentId",get:function(){return`${this.id}_controls_content`}},{key:"expandTitle",get:function(){const{expanded:e,messagesCommon:n,collapseTooltip:t,expandTooltip:o}=this;return e?t||n.collapse:o||n.expand}},{key:"collapseIconClass",get:function(){return _.collapseIcon},set:function(e){e?this._override("collapseIconClass",e):this._clearOverride("collapseIconClass")}},{key:"expandIconClass",get:function(){return c.isWidget(this.content)?this.content.iconClass:_.expandIcon},set:function(e){e?this._override("expandIconClass",e):this._clearOverride("expandIconClass")}}]),t}(i);return n.__decorate([a.property({readOnly:!0})],h.prototype,"contentId",null),n.__decorate([a.property({readOnly:!0})],h.prototype,"expandTitle",null),n.__decorate([t.aliasOf("viewModel.autoCollapse")],h.prototype,"autoCollapse",void 0),n.__decorate([a.property()],h.prototype,"closeOnEsc",void 0),n.__decorate([a.property()],h.prototype,"collapseIconClass",null),n.__decorate([a.property()],h.prototype,"collapseTooltip",void 0),n.__decorate([a.property()],h.prototype,"content",void 0),n.__decorate([t.aliasOf("viewModel.expanded")],h.prototype,"expanded",void 0),n.__decorate([a.property()],h.prototype,"expandIconClass",null),n.__decorate([a.property()],h.prototype,"expandTooltip",void 0),n.__decorate([t.aliasOf("viewModel.group")],h.prototype,"group",void 0),n.__decorate([a.property()],h.prototype,"iconNumber",void 0),n.__decorate([a.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],h.prototype,"label",void 0),n.__decorate([a.property(),l.messageBundle("esri/widgets/Expand/t9n/Expand")],h.prototype,"messages",void 0),n.__decorate([a.property(),l.messageBundle("esri/t9n/common")],h.prototype,"messagesCommon",void 0),n.__decorate([a.property()],h.prototype,"mode",void 0),n.__decorate([t.aliasOf("viewModel.view")],h.prototype,"view",void 0),n.__decorate([a.property({type:p})],h.prototype,"viewModel",void 0),n.__decorate([u.accessibleHandler()],h.prototype,"_toggle",null),h=n.__decorate([d.subclass("esri.widgets.Expand")],h),h}));
