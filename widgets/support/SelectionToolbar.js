/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/handleUtils","../../core/maybe","../../core/accessorSupport/decorators/aliasOf","../../core/has","../../core/accessorSupport/decorators/cast","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../Widget","./widgetUtils","./decorators/messageBundle","./jsxFactory","./SelectionToolbar/SelectionToolbarViewModel"],(function(e,o,t,l,s,i,n,a,c,r,d,u,p,v,f,g){"use strict";const h={lassoTool:!0,rectangleTool:!0},_={createTool:"polygon",createOptions:{mode:"freehand"}},T={createTool:"rectangle"},m={base:"esri-selection-toolbar",container:"esri-selection-toolbar__container",toolButton:"esri-selection-toolbar__tool-button",disabled:"esri-disabled",esriWidget:"esri-widget",widgetIcon:"esri-icon-vertex-gps"};let b=function(t){function i(e,o){var s;return(s=t.call(this,e,o)||this)._viewModelHandlesGroup=null,s.activeToolInfo=null,s.label=void 0,s.layers=[],s.messages=null,s.toolConfigs=[],s.view=null,s.viewModel=new g,s.visibleElements={...h},s._viewModelHandlesGroup=l.handlesGroup([s.viewModel.on("selection-change",(e=>s.emit("selection-change",e))),s.viewModel.on("complete",(e=>{s._set("activeToolInfo",null),s.emit("complete",e)}))]),s}o._inheritsLoose(i,t);var n=i.prototype;return n.destroy=function(){this._viewModelHandlesGroup=s.removeMaybe(this._viewModelHandlesGroup)},n.loadDependencies=function(){return new Promise((function(o,t){e(["../../chunks/action"],o,t)}))},n.castVisibleElements=function(e){return{...h,...e}},n.activate=function(e){switch(this.cancel(),e){case"lasso":this._activateTool("lasso");case"rectangle":this._activateTool("rectangle");default:this._activateTool(e)}},n.cancel=function(){this.viewModel.cancel(),this._set("activeToolInfo",null)},n.render=function(){return f.tsx("div",{"aria-label":this.label,class:this.classes(m.base,m.esriWidget)},f.tsx("div",{class:m.container},this.renderDefaultTools(),this.renderCustomTools()))},n.renderDefaultTools=function(){var e;if("2d"===(null==(e=this.view)?void 0:e.type))return[this.renderRectangleTool(),this.renderLassoTool()]},n.renderCustomTools=function(){if(this.toolConfigs&&this.toolConfigs.length)return this.toolConfigs.map((e=>{var o;return f.tsx("calcite-action",{active:(null==(o=this.activeToolInfo)?void 0:o.toolName)===e.toolName,bind:this,class:m.toolButton,icon:e.icon||"selection",label:e.toolName,onclick:()=>this._onCustomToolClick(e.toolName),scale:"s",text:e.toolName,title:e.toolName})}))},n.renderLassoTool=function(){const{activeToolInfo:e,messages:o,visibleElements:t}=this;if(t.lassoTool)return f.tsx("calcite-action",{active:"lasso"===(null==e?void 0:e.toolName),bind:this,icon:"lasso",label:o.selectByLasso,onclick:this._onLassoToolClick,scale:"s",text:o.selectByLasso,title:o.selectByLasso})},n.renderRectangleTool=function(){const{activeToolInfo:e,messages:o,visibleElements:t}=this;if(t.rectangleTool)return f.tsx("calcite-action",{active:"rectangle"===(null==e?void 0:e.toolName),bind:this,icon:"cursor-marquee",label:o.selectByRectangle,onclick:this._onRectangleToolClick,scale:"s",text:o.selectByRectangle,title:o.selectByRectangle})},n._onCustomToolClick=function(e){this._toggleTool(e)},n._onLassoToolClick=function(){this._toggleTool("lasso")},n._onRectangleToolClick=function(){this._toggleTool("rectangle")},n._activateTool=function(e){const o=this._getToolOptions(e);if(!o)return;const t=this.viewModel.activate(o);this._set("activeToolInfo",{toolName:e,operation:t})},n._toggleTool=function(e){if(this.activeToolInfo){const o=this.activeToolInfo.toolName;if(this.cancel(),o===e)return}this._activateTool(e)},n._getToolOptions=function(e){if("lasso"===e)return _;if("rectangle"===e)return T;const o=this.toolConfigs.find((o=>o.toolName===e));if(!o)return;const{createTool:t,createOptions:l,selectionOptions:s}=o;return{createTool:t,createOptions:l,selectionOptions:s}},i}(u);return t.__decorate([r.property({readOnly:!0})],b.prototype,"activeToolInfo",void 0),t.__decorate([r.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0),t.__decorate([i.aliasOf("viewModel.layers")],b.prototype,"layers",void 0),t.__decorate([r.property(),v.messageBundle("esri/widgets/support/SelectionToolbar/t9n/SelectionToolbar")],b.prototype,"messages",void 0),t.__decorate([r.property()],b.prototype,"toolConfigs",void 0),t.__decorate([i.aliasOf("viewModel.view")],b.prototype,"view",void 0),t.__decorate([r.property()],b.prototype,"viewModel",void 0),t.__decorate([r.property()],b.prototype,"visibleElements",void 0),t.__decorate([a.cast("visibleElements")],b.prototype,"castVisibleElements",null),b=t.__decorate([d.subclass("esri.widgets.support.SelectionToolbar")],b),b}));
