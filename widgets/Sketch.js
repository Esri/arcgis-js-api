/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/aliasOf","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/events","../core/Collection","../intl/substitute","../intl","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/vmEvent","../chunks/index","./Widget","../views/interactive/snapping/SnappingOptions","./Sketch/SketchViewModel","./support/Selector"],(function(e,t,n,o,i,s,l,a,c,r,u,d,p,h,g,v,_,f,b,m,y,S,w){"use strict";const k={base:"esri-sketch",verticalLayout:"esri-sketch--vertical",panel:"esri-sketch__panel",infoPanel:"esri-sketch__info-panel",section:"esri-sketch__section",toolSection:"esri-sketch__tool-section",infoSection:"esri-sketch__info-section",infoCountSection:"esri-sketch__info-count-section",menuContainer:"esri-sketch__menu-container",menuHeader:"esri-sketch__menu-header",menuTitle:"esri-sketch__menu-title",menuContent:"esri-sketch__menu-content",menuItem:"esri-sketch__menu-item",menuItemWrapper:"esri-sketch__menu-item-wrapper",featureCountBadge:"esri-sketch__feature-count-badge",featureCountText:"esri-sketch__feature-count-text",featureCountNumber:"esri-sketch__feature-count-number",button:"esri-sketch__button",selectedButton:"esri-sketch__button--selected",pointIcon:"esri-icon-map-pin",polygonIcon:"esri-icon-polygon",polylineIcon:"esri-icon-polyline",circleIcon:"esri-icon-radio-unchecked",rectangleIcon:"esri-icon-checkbox-unchecked",cursorIcon:"esri-icon-cursor",resetIcon:"esri-icon-trash",undoIcon:"esri-icon-undo",redoIcon:"esri-icon-redo",settingsIcon:"esri-icon-settings",actionToggle:"esri-sketch__action-toggle",actionToggleOn:"esri-sketch__action-toggle--on",actionTitle:"esri-sketch__item-action-title",actionIcon:"esri-sketch__item-action-icon",rectangleSelectIcon:"esri-icon-cursor-marquee",lassoSelectIcon:"esri-icon-lasso",disabled:"esri-disabled",esriWidget:"esri-widget",rotating:"esri-rotating",widgetIcon:"esri-icon-edit"},T={createTools:{point:!0,polyline:!0,polygon:!0,rectangle:!0,circle:!0},selectionTools:{"rectangle-selection":!0,"lasso-selection":!0},undoRedoMenu:!0,settingsMenu:!0};let C=function(t){function n(n,o){var i;return(i=t.call(this,n,o)||this)._activeCreateOptions=null,i._activeSelectionInfo=null,i._menuOpen=!1,i._selector=new w,i.availableCreateTools=["point","polyline","polygon","rectangle","circle"],i.createGraphic=null,i.creationMode="continuous",i.defaultCreateOptions=null,i.defaultUpdateOptions=null,i.iconClass=k.widgetIcon,i.label=void 0,i.layer=null,i.messages=null,i.snappingOptions=new y,i.updateGraphics=new p,i.view=null,i.viewModel=new S,i.visibleElements={...T},i._activateCreateTool=i._activateCreateTool.bind(e._assertThisInitialized(i)),i}e._inheritsLoose(n,t);var o=n.prototype;return o.initialize=function(){const{view:e}=this;this._selector.view=e,this.own([this.viewModel.on("create",(()=>this.scheduleRender())),this.viewModel.on("update",(()=>this.scheduleRender())),this.viewModel.on("create",(e=>this._onCreateOperation(e))),this.viewModel.on("delete",(e=>this.emit("delete",e))),this.viewModel.on("undo",(()=>this.scheduleRender())),this.viewModel.on("redo",(()=>this.scheduleRender())),this.viewModel.watch("view",(e=>this._selector.set({view:e}))),this.viewModel.watch("state",(()=>this.notifyChange("state")))])},o.castVisibleElements=function(e){return{...T,...e,createTools:{...T.createTools,...null==e?void 0:e.createTools},selectionTools:{...T.selectionTools,...null==e?void 0:e.selectionTools}}},o.create=function(e,t){this._activeCreateOptions=t||null,this.viewModel.create(e,t)},o.update=function(e,t){return this.viewModel.update(e,t)},o.complete=function(){},o.cancel=function(){this._cancelSelectionOperation(),this.viewModel.cancel()},o.undo=function(){},o.redo=function(){},o.delete=function(){},o.render=function(){const{label:e,layout:t,viewModel:{state:n}}=this;return b.jsx("div",{"aria-label":e,class:this.classes(k.base,k.esriWidget,{[k.disabled]:"disabled"===n,[k.verticalLayout]:"vertical"===t})},b.jsx("div",{role:"toolbar",class:k.panel},this.renderTopPanelContents()),b.jsx("div",{class:this.classes(k.panel,k.infoPanel)},this.renderInfoPanelContents()))},o.renderTopPanelContents=function(){const e=this.classes(k.section,k.toolSection),{availableCreateTools:t,visibleElements:n}=this;return[b.jsx("div",{role:"menu",key:"selection-button-container",class:e},this.renderSelectionTools()),t&&t.length?b.jsx("div",{role:"menu",class:e},this.renderDrawButtons()):null,n.undoRedoMenu?b.jsx("div",{role:"menu",key:"undo-redo-menu-button-container",class:e},this.renderUndoRedoMenuButtons()):null,n.settingsMenu?b.jsx("div",{key:"settings-menu-button-container",class:k.section},this.renderSettingsMenuButton()):null]},o.renderInfoPanelContents=function(){return this._menuOpen?this.renderSettingsMenu():this.updateGraphics.length?[b.jsx("div",{class:this.classes(k.section,k.infoSection,k.infoCountSection),key:"feature-count-container"},this.renderFeatureCount()),b.jsx("div",{class:this.classes(k.section,k.infoSection),key:"delete-button-container"},this.renderDeleteButton())]:void 0},o.renderSettingsMenu=function(){const{settings:e}=this.messages;return[b.jsx("div",{role:"menu",class:k.menuContainer,key:"settings-menu-container"},b.jsx("header",{class:k.menuHeader,key:"settings-menu-header"},b.jsx("span",{class:k.menuTitle},e)),b.jsx("div",{class:k.menuContent,key:"settings-menu-content","aria-label":e},b.jsx("div",{class:k.menuItemWrapper},this.renderSnappingToggleMenuItem())))]},o.renderSnappingToggleMenuItem=function(){var e;return b.jsx("div",{class:k.menuItem,"aria-label":null==(e=this.messages)?void 0:e.snappingEnabled,key:"sketch-snapping-action-toggle",role:"menuitem"},this.renderSnappingToggle())},o.renderSnappingToggle=function(){const{messages:{snappingEnabled:e},viewModel:{snappingOptions:{enabled:t}}}=this,n=this.classes(k.actionToggle,{[k.actionToggleOn]:t});return b.jsx("div",{bind:this,role:"button",onclick:this._onSnappingToggleClick,onkeydown:this._onSnappingToggleKeyDown,class:n,tabindex:"0",title:e,"aria-label":e},this.renderActionIcon(),b.jsx("span",{class:k.actionTitle},e))},o._onSnappingToggleKeyDown=function(e){const t=d.eventKey(e);"Enter"!==t&&" "!==t||(e.preventDefault(),this._toggleSnapping())},o._onSnappingToggleClick=function(e){e.stopPropagation(),this._toggleSnapping()},o.renderActionIcon=function(){return b.jsx("span",{key:"action-icon","aria-hidden":"true",class:this.classes(k.actionIcon)})},o.renderFeatureCount=function(){const{layout:e,messages:t,updateGraphics:{length:n}}=this,o=h.substitute(1===n?t.featureCount:t.featuresCount,{count:n});return b.jsx("div",{class:k.featureCountBadge,"aria-label":o},b.jsx("span",{class:k.featureCountNumber},"vertical"===e?n:o))},o.renderDeleteButton=function(){const e=this.messages.deleteFeature;return b.jsx("button",{"aria-label":e,bind:this,class:this.classes(k.button,k.resetIcon),onclick:this.delete,title:e,type:"button"})},o.renderSelectionTools=function(){return[this.renderDefaultSelectionButton(),this.renderRectangleSelectionButton(),this.renderLassoSelectionButton()]},o.renderDefaultSelectionButton=function(){if(!this.viewModel.updateOnGraphicClick)return;const e=this.messages.selectFeature;return b.jsx("button",{"aria-label":e,bind:this,class:this.classes(k.button,k.cursorIcon,{[k.selectedButton]:"ready"===this.state}),onclick:this.cancel,role:"menuitemradio",title:e})},o.renderRectangleSelectionButton=function(){var e,t;if("2d"!==(null==(e=this.view)?void 0:e.type)||!this.visibleElements.selectionTools["rectangle-selection"])return;const n=this.messages.selectRectangle;return b.jsx("button",{"aria-label":n,bind:this,class:this.classes(k.button,k.rectangleSelectIcon,{[k.selectedButton]:"rectangle-selection"===(null==(t=this._activeSelectionInfo)?void 0:t.tool)}),onclick:this._activateRectangleSelectTool,role:"menuitemradio",title:n})},o.renderLassoSelectionButton=function(){var e,t;if("2d"!==(null==(e=this.view)?void 0:e.type)||!this.visibleElements.selectionTools["lasso-selection"])return;const n=this.messages.selectLasso;return b.jsx("button",{"aria-label":n,bind:this,class:this.classes(k.button,k.lassoSelectIcon,{[k.selectedButton]:"lasso-selection"===(null==(t=this._activeSelectionInfo)?void 0:t.tool)}),onclick:this._activateLassoSelectTool,role:"menuitemradio",title:n})},o.renderDrawButtons=function(){const e=this.visibleElements.createTools;return this.availableCreateTools.map((t=>"point"===t&&e.point?this.renderPointButton():"polyline"===t&&e.polyline?this.renderPolylineButton():"polygon"===t&&e.polygon?this.renderPolygonButton():"rectangle"===t&&e.rectangle?this.renderRectangleButton():"circle"===t&&e.circle?this.renderCircleButton():void 0))},o.renderPointButton=function(){const e="point",t=this.messages.drawPoint,n=[k.button,k.pointIcon];return this.activeTool===e&&n.push(k.selectedButton),b.jsx("button",{"aria-label":t,bind:this,class:this.classes(n),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})},o.renderPolygonButton=function(){const e="polygon",t=this.messages.drawPolygon,n=[k.button,k.polygonIcon];return this.activeTool===e&&n.push(k.selectedButton),b.jsx("button",{"aria-label":t,bind:this,class:this.classes(n),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})},o.renderPolylineButton=function(){const e="polyline",t=this.messages.drawPolyline,n=[k.button,k.polylineIcon];return this.activeTool===e&&n.push(k.selectedButton),b.jsx("button",{"aria-label":t,bind:this,class:this.classes(n),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})},o.renderCircleButton=function(){const e="circle",t=this.messages.drawCircle,n=[k.button,k.circleIcon];return this.activeTool===e&&n.push(k.selectedButton),b.jsx("button",{"aria-label":t,bind:this,class:this.classes(n),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})},o.renderRectangleButton=function(){const e="rectangle",t=this.messages.drawRectangle,n=[k.button,k.rectangleIcon];return this.activeTool===e&&n.push(k.selectedButton),b.jsx("button",{"aria-label":t,bind:this,class:this.classes(n),"data-tool-name":e,onclick:this._activateCreateTool,role:"menuitemradio",title:t,type:"button"})},o.renderUndoRedoMenuButtons=function(){return[this.renderUndoButton(),this.renderRedoButton()]},o.renderUndoButton=function(){const e=this.messages.undo,t=!this.viewModel.canUndo(),n=v.isRTL()?k.redoIcon:k.undoIcon;return b.jsx("button",{"aria-label":e,bind:this,class:this.classes(k.button,n),disabled:t,onclick:this.undo,title:e,type:"button"})},o.renderRedoButton=function(){const e=this.messages.redo,t=!this.viewModel.canRedo(),n=v.isRTL()?k.undoIcon:k.redoIcon;return b.jsx("button",{"aria-label":e,bind:this,class:this.classes(k.button,n),disabled:t,onclick:this.redo,title:e,type:"button"})},o.renderSettingsMenuButton=function(){const e=this.messages.settings,t=[k.button,k.settingsIcon];return this._menuOpen&&t.push(k.selectedButton),b.jsx("button",{"aria-label":e,bind:this,class:this.classes(t),onclick:this._toggleMenu,title:e,type:"button"})},o._cancelSelectionOperation=function(){var e,t;null==(e=this._activeSelectionInfo)||null==(t=e.operation)||t.cancel(),this._activeSelectionInfo=null,this._selector.candidates=null},o._activateCreateTool=function(e){const t=e.target.getAttribute("data-tool-name");this.activeTool!==t?(this._activeSelectionInfo&&this._cancelSelectionOperation(),this.create(t)):this.cancel()},o._onCreateOperation=function(e){if("complete"!==e.state)return;const{creationMode:t}=this,{type:n}=e;if("create"===n){const{tool:n,graphic:o}=e,i=this._activeCreateOptions;this._activeCreateOptions=null,"continuous"===t?this.create(n,i):"update"===t&&this.update([o])}},o._toggleMenu=function(){this._menuOpen=!this._menuOpen,this.scheduleRender()},o._toggleSnapping=function(){const{viewModel:{snappingOptions:e}}=this;this.viewModel.snappingOptions.enabled=!e.enabled,this.scheduleRender()},o._onSelectionOperationComplete=function(e){const{viewModel:{defaultUpdateOptions:t}}=this,{selection:n}=e;if(this._activeSelectionInfo=null,!e.aborted&&n.length){const e=t.tool,o=n.length>1&&"reshape"===e?"transform":e;this.update(n,{...t,tool:o})}this.notifyChange("state")},o._activateRectangleSelectTool=function(){if(this._activeSelectionInfo){const e=this._activeSelectionInfo.tool;if(this._cancelSelectionOperation(),"rectangle-selection"===e)return}else"active"===this.state&&this.cancel();this._selector.candidates=this._getSelectionCandidates();const e=this._selector.draw({tool:"rectangle"});e.once("complete",(e=>this._onSelectionOperationComplete(e))),this._activeSelectionInfo={tool:"rectangle-selection",operation:e}},o._activateLassoSelectTool=function(){if(this._activeSelectionInfo){const e=this._activeSelectionInfo.tool;if(this._cancelSelectionOperation(),"lasso-selection"===e)return}else"active"===this.state&&this.cancel();this._selector.candidates=this._getSelectionCandidates();const e=this._selector.draw({tool:"polygon",createOptions:{mode:"freehand"}});e.once("complete",(e=>this._onSelectionOperationComplete(e))),this._activeSelectionInfo={tool:"lasso-selection",operation:e}},o._getSelectionCandidates=function(){var e,t;return(null==(e=this.layer)||null==(t=e.graphics)?void 0:t.toArray())||[]},e._createClass(n,[{key:"activeTool",get:function(){var e;return(null==(e=this._activeSelectionInfo)?void 0:e.tool)||this.viewModel.activeTool}},{key:"layout",set:function(e){"vertical"!==e&&(e="horizontal"),this._set("layout",e)}},{key:"state",get:function(){return this._activeSelectionInfo?"active":this.viewModel.state}}]),n}(m);return t.__decorate([i.property()],C.prototype,"_activeSelectionInfo",void 0),t.__decorate([i.property()],C.prototype,"activeTool",null),t.__decorate([i.property({cast:e=>{if(!e||!e.length)return null;const t=new Set(["point","polyline","polygon","rectangle","circle"]);return e.filter((e=>t.has(e)))}})],C.prototype,"availableCreateTools",void 0),t.__decorate([s.aliasOf("viewModel.createGraphic")],C.prototype,"createGraphic",void 0),t.__decorate([i.property()],C.prototype,"creationMode",void 0),t.__decorate([s.aliasOf("viewModel.defaultCreateOptions")],C.prototype,"defaultCreateOptions",void 0),t.__decorate([s.aliasOf("viewModel.defaultUpdateOptions")],C.prototype,"defaultUpdateOptions",void 0),t.__decorate([i.property()],C.prototype,"iconClass",void 0),t.__decorate([i.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],C.prototype,"label",void 0),t.__decorate([s.aliasOf("viewModel.layer")],C.prototype,"layer",void 0),t.__decorate([i.property({value:"horizontal"})],C.prototype,"layout",null),t.__decorate([i.property(),_.messageBundle("esri/widgets/Sketch/t9n/Sketch")],C.prototype,"messages",void 0),t.__decorate([s.aliasOf("viewModel.snappingOptions")],C.prototype,"snappingOptions",void 0),t.__decorate([i.property()],C.prototype,"state",null),t.__decorate([s.aliasOf("viewModel.updateGraphics")],C.prototype,"updateGraphics",void 0),t.__decorate([s.aliasOf("viewModel.view")],C.prototype,"view",void 0),t.__decorate([i.property(),f.vmEvent(["create","update","undo","redo"])],C.prototype,"viewModel",void 0),t.__decorate([i.property()],C.prototype,"visibleElements",void 0),t.__decorate([l.cast("visibleElements")],C.prototype,"castVisibleElements",null),t.__decorate([s.aliasOf("viewModel.complete")],C.prototype,"complete",null),t.__decorate([s.aliasOf("viewModel.undo")],C.prototype,"undo",null),t.__decorate([s.aliasOf("viewModel.redo")],C.prototype,"redo",null),t.__decorate([s.aliasOf("viewModel.delete")],C.prototype,"delete",null),C=t.__decorate([a.subclass("esri.widgets.Sketch")],C),C}));
