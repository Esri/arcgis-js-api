define(["../dijit/ColorPicker","../domUtils","../kernel","../symbol","./_EventedWidget","./_Tooltip","./ColorPicker/colorUtil","./SymbolStyler/_DelayedUpdate","./SymbolStyler/IconSelect","./SymbolStyler/MarkerSymbolPicker","./SymbolStyler/schemeUtil","./SymbolStyler/stylerUtil","./SymbolStyler/symbolUtil","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/a11yclick","dijit/form/CheckBox","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/has","dojo/keys","dojo/on","dojo/string","dojo/i18n!esri/nls/jsapi","dojo/text!./SymbolStyler/templates/SymbolStyler.html","../dijit/HorizontalSlider","./SymbolStyler/MarkerSymbolPicker","./SymbolStyler/ColorRampPicker","dijit/form/Button","dijit/form/ComboBox","dijit/form/NumberSpinner","dijit/form/Select","dijit/form/TextBox","dijit/layout/BorderContainer","dijit/layout/ContentPane","dijit/layout/StackController","dijit/layout/StackContainer"],function(t,i,e,o,s,l,n,a,r,h,d,_,p,u,c,m,S,C,g,b,y,f,P,T,I,k,O,x){var v=g([s,u,c,a,l],{_RECENT_FILL_COLORS_ITEM_KEY:"symbolStyler/recent/fill/colors",_RECENT_OUTLINE_COLORS_ITEM_KEY:"symbolStyler/recent/outline/colors",_defaultMinLineWidthInPx:0,_defaultMinShapeSizeInPx:1,_defaultMaxLineWidthInPx:18,_defaultMaxShapeSizeInPx:120,declaredClass:"esri.dijit.SymbolStyler",baseClass:"esriSymbolStyler",templateString:x,labels:null,css:{symbolPreviewContainer:"esriSymbolPreviewContainer",symbolPreview:"esriSymbolPreview",tabBar:"esriTabBar",content:"esriContent",link:"esriLink",label:"esriLabel",shapeImageUrlContainer:"esriShapeImageUrlContainer",urlInput:"esriUrlInput",addIcon:"esriAddIcon",errorDisplay:"esriErrorDisplay",symbolSizeInput:"esriSymbolSizeInput",inlineInput:"esriInlineInput",text:"esriText",hidden:"esriHidden",lineWidthInput:"esriLineWidthInput",linePattern:"esriLinePattern",linePatternInput:"esriLinePatternInput",alt:"esriAlt",disabled:"esriDisabled"},_originalSymbol:null,_editedSymbol:null,_activeTabName:null,_externalSizing:!1,_delayedCommitPropsTrigger:null,_symbolPickerOpts:{},_symbolPreviewSurface:null,_linePatternSelect:null,_symbolPicker:null,_customImageSymbol:null,_optimizationSection:null,_optimizationCheckBox:null,constructor:function(t){t=t?t:{},this._delayedCommitPropsTrigger=this.createUpdateTrigger(this._commitProperties,this),t.portalSelf?this._symbolPickerOpts.portalSelf=t.portalSelf:t.portalUrl&&(this._symbolPickerOpts.portalUrl=t.portalUrl),this._initOptimizationControls()},_initOptimizationControls:function(){var i=new S,e=f.create("div",{className:t.prototype.css.section});f.create("label",{"for":i.id,className:this.css.label,innerHTML:O.widgets.symbolEditor.autoAdjustOutline},e),i.on("change",b.hitch(this,function(t){if(t){var i=this.dap_outlineColorPicker.get("color");i.a=.5,this.dap_outlineColorPicker.set("color",i)}this._delayedCommitPropsTrigger()})),i.placeAt(e,"first"),this._optimizationSection=e,this._optimizationCheckBox=i},postMixInProperties:function(){this.inherited(arguments),this.labels=b.mixin({},O.common,O.widgets.symbolEditor)},_toggleOutlineColorControls:function(t){var i=this.dap_outlineColorRampPicker,e=this.dap_outlineColorPicker;this._shouldShowOutlineColorRamp(t)?(this._show(i),this._hide(e)):(this._show(e),this._hide(i))},_shouldShowOutlineColorRamp:function(t){var i=p;return this._hasColorRamp()&&(i.isLine(t)||i.isPoint(t)&&i.hasPureOutlineStyle(t))},_setUpColorControls:function(t,i){var e,o=this.dap_outlineColorRampPicker,s=this.dap_outlineColorPicker,l=this.dap_fillColorRampPicker,n=this.dap_fillColorPicker;return i?(e={colors:i.colors},i.scheme&&(e.scheme=i.scheme),this._isLine()?(o.set({schemes:t,selected:e,numStops:i.numStops}),this._hide(s),this._show(o)):(this._isPoint()&&o.set({schemes:t,selected:e,numStops:i.numStops}),l.set({schemes:t,selected:e,numStops:i.numStops}),this._show(l),this._show(s),this._hide(n),this._hide(o)),void this._updateSuggestedColors(s,d.getOutlineColors(t))):(this._show(n),this._show(s),this._hide(l),this._hide(o),this._updateSuggestedColors(n,d.getFillColors(t)),void this._updateSuggestedColors(s,d.getOutlineColors(t)))},edit:function(t,i){var e,o=p.cloneSymbol(t);i=i||{},e=i.colorRamp,this._colorRamp=e,this._originalSymbol=t,this._editedSymbol=o,this._activeTabName=i.activeTab,this._externalSizing=i.externalSizing,this._optimizationOptions="boolean"==typeof i.optimizeOutline?{value:i.optimizeOutline}:void 0,this._setUpColorControls(i.schemes,e),this._assimilateSymbol(o),this._toggleSizingControls(this._externalSizing),this._updateSymbolPicker(),this._toggleOutlineColorControls(o),this._toggleOptimizationOptions()},_toggleOptimizationOptions:function(){var t=this._optimizationOptions,i=this._optimizationSection;p.isPolygon(this._editedSymbol)&&t?(this._optimizationCheckBox.set("value",t.value),f.place(i,this.dap_outlineColorPicker.dap_recentColorSection)):i.parentNode&&f.empty(i.parentNode)},_importRecentColors:function(){this.dap_fillColorPicker.loadRecentColors(this._RECENT_FILL_COLORS_ITEM_KEY),this.dap_outlineColorPicker.loadRecentColors(this._RECENT_OUTLINE_COLORS_ITEM_KEY)},_hasColorRamp:function(){return!!this._colorRamp},_toggleSizingControls:function(t){var i=!1,e=!1;t&&(this._isLine()?e=!0:i=!0),this._toggleLabeledControls({labels:this.dap_lineWidthLabel,controls:[this.dap_lineWidthTextBox,this.dap_lineWidthSlider],disabled:e}),this._toggleLabeledControls({labels:this.dap_shapeSizeLabel,controls:[this.dap_shapeSizeTextBox,this.dap_shapeSizeSlider],disabled:i})},_toggleLabeledControls:function(t){var i=t.labels,e=t.controls,o=t.disabled;b.isArray(i)?C.forEach(i,function(t){y.toggle(t,this.css.disabled,o)},this):y.toggle(i,this.css.disabled,o),b.isArray(e)?C.forEach(e,function(t){t.set("disabled",o)}):e.set("disabled",o)},_updateSymbolPicker:function(){var t=this._isPoint()&&this._hasColorRamp()?"default":"portal";"portal"===t?i.show(this.dap_useImageContent):i.hide(this.dap_useImageContent),this._symbolPicker.set("displayMode",t),this._symbolPicker.clearSelection()},shapeSymbol:null,_setShapeSymbolAttr:function(t){this._adjustOutlineProperties(this._editedSymbol,t),this._set("shapeSymbol",t),this._editedSymbol=t,this._toggleTabs(t),this._toggleOutlineColorControls(t),this._delayedCommitPropsTrigger()},_adjustOutlineProperties:function(t,i){var e,o,s,l=this.dap_fillColorPicker,a=this.dap_outlineColorPicker,r=this.dap_fillColorRampPicker,h=this.dap_outlineColorRampPicker,d=.1,_=.2;if(this._switchedFromPmsToSms(t,i))return l.set("color",i.color),e=p.getOutline(i),a.set("color",e.color),this.dap_lineWidthSlider.set("value",e.width),void this._linePatternSelect.set("value",e.style);if(this._switchedPureOutlineToSmsStyle(t,i)&&this._hasColorRamp())return void r.set("selected",h.get("selected"));if(this._switchedSmsStyleToPureOutline(t,i)){if(this._hasColorRamp())return void h.set("selected",r.get("selected"));if(e=p.getOutline(t),s=a.get("color"),!e.color)return void a.set("color",i.color);o=n.isBright(e.color),o&&e.color.a<_?(s.a=_,a.set("color",s)):!o&&e.color.a<d&&(s.a=d,a.set("color",s))}},_switchedFromPmsToSms:function(t,i){return p.isType(t,"picturemarker")&&p.isType(i,"simplemarker")},_switchedSmsStyleToPureOutline:function(t,i){return p.isType(t,"simplemarker")&&p.isType(i,"simplemarker")&&p.hasPureOutlineStyle(t)&&p.hasPureOutlineStyle(i)},_switchedPureOutlineToSmsStyle:function(t,i){return this._switchedSmsStyleToPureOutline(i,t)},shapeSize:null,_setShapeSizeAttr:function(t){this._set("shapeSize",t),this._delayedCommitPropsTrigger()},_shapeImageUrl:null,_setShapeImageUrlAttr:function(t){this._set("shapeImageUrl",t),this._delayedCommitPropsTrigger()},fillColor:null,_setFillColorAttr:function(i){i=i===t.NO_COLOR?null:i,this._set("fillColor",i),this._delayedCommitPropsTrigger()},fillColorRamp:null,_setFillColorRampAttr:function(t){this._set("fillColorRamp",t),this._delayedCommitPropsTrigger()},outlineColorRamp:null,_setOutlineColorRampAttr:function(t){this._set("outlineColorRamp",t),this._delayedCommitPropsTrigger()},outlineWidth:null,_setOutlineWidthAttr:function(t){this._set("outlineWidth",t),this._delayedCommitPropsTrigger()},outlineColor:null,_setOutlineColorAttr:function(i){i=i===t.NO_COLOR?null:i;var e=!!this._optimizationOptions&&this._optimizationCheckBox.checked;i&&e&&(i.a=.5,this.dap_outlineColorPicker.set("color",i,!1)),this._set("outlineColor",i),this._delayedCommitPropsTrigger()},outlinePattern:null,_setOutlinePatternAttr:function(t){this._set("outlinePattern",t),this._delayedCommitPropsTrigger()},_getTabContainer:function(t){return"fill"===t?this.dap_fillContainer:"outline"===t?this.dap_outlineContainer:this.dap_shapeContainer},_storeRecentFillColors:function(){this._storeRecentColors(this.dap_fillColorPicker,this._RECENT_FILL_COLORS_ITEM_KEY)},_storeRecentOutlineColors:function(){this._storeRecentColors(this.dap_outlineColorPicker,this._RECENT_OUTLINE_COLORS_ITEM_KEY)},_storeRecentColors:function(t,i){var e=t;e.addRecentColor(e.get("color")),e.saveRecentColors(i)},_isPoint:function(){return p.isPoint(this._editedSymbol)},_isLine:function(){return p.isLine(this._editedSymbol)},_isPolygon:function(){return p.isPolygon(this._editedSymbol)},_addHandlers:function(){this.own(this.dap_shapeContainer.on("show",b.hitch(this,function(){this._symbolPicker._updateTemplatePickerIfHeightless()}))),this._linePatternSelect.on("change",b.hitch(this,function(t){this.set("outlinePattern",t)})),this.own(I(this.dap_loadShapeImageUrl,m,b.hitch(this,function(){this._loadImage(this.dap_shapeImageUrlInput.get("value"))}))),this.own(I(this.dap_addImage,m,b.hitch(this,function(){i.show(this.dap_shapeImageUrlContainer),this.dap_shapeImageUrlInput.focus()}))),this.dap_shapeImageUrlInput.on("input",b.hitch(this,function(t){t.keyCode===T.ENTER&&this._loadImage(this.dap_shapeImageUrlInput.get("value"))})),this.dap_shapeImageUrlInput.on("change",b.hitch(this,function(t){this.set("shapeImageUrl",t)})),this.dap_shapeSizeSlider.on("change",b.hitch(this,function(t){this.set("shapeSize",t)})),this.dap_fillColorPicker.on("color-change",b.hitch(this,function(t){this.set("fillColor",t.color)})),this.dap_fillColorRampPicker.on("color-ramp-change",b.hitch(this,function(t){this.set("fillColorRamp",t.colors)})),this.dap_outlineColorRampPicker.on("color-ramp-change",b.hitch(this,function(t){this.set("outlineColorRamp",t.colors)})),this.dap_lineWidthSlider.on("change",b.hitch(this,function(t){this.set("outlineWidth",t)})),this.dap_outlineColorPicker.on("color-change",b.hitch(this,function(t){this.set("outlineColor",t.color)})),_.bindSliderAndTextBox(this.dap_lineWidthSlider,this.dap_lineWidthTextBox),_.bindSliderAndTextBox(this.dap_shapeSizeSlider,this.dap_shapeSizeTextBox),this._symbolPicker.on("symbol-select",b.hitch(this,function(t){this._hideImageUrlInput(),this.set("shapeSymbol",t.selection)})),this.dap_shapeSizeSlider.on("change",b.hitch(this,this._onSizeChange)),this.dap_fillColorPicker.on("color-change",b.hitch(this,this._onFillColorChange)),this.dap_outlineColorPicker.on("color-change",b.hitch(this,this._onOutlineColorChange)),this.dap_lineWidthSlider.on("change",b.hitch(this,this._onWidthChange))},getStyle:function(){var t,i,e=p.cloneSymbol(this._editedSymbol),o={symbol:e};return this._hasColorRamp()&&(t=p.isLine(e)||p.isPoint(e)&&p.hasPureOutlineStyle(e),i=t?this.dap_outlineColorRampPicker:this.dap_fillColorRampPicker,b.mixin(o,i.getStyle())),this._optimizationOptions&&(o.optimizeOutline=this._optimizationCheckBox.checked),o},storeColors:function(){this._storeRecentFillColors(),this._storeRecentOutlineColors()},postCreate:function(){this.inherited(arguments);var t=r.prototype.baseClass,e=new r({baseClass:t+" "+this.baseClass+" "+this.css.linePatternInput},this.dap_linePatternSelect);this._linePatternSelect=e,i.hide(this.dap_shapeImageUrlContainer),this.dap_lineWidthTextBox.selectOnClick=!0,this.dap_shapeSizeTextBox.selectOnClick=!0,this.dap_lineWidthSlider.intermediateChanges=!0,this.dap_lineWidthTextBox.intermediateChanges=!0,this.dap_shapeSizeSlider.intermediateChanges=!0,this.dap_shapeSizeTextBox.intermediateChanges=!0,this.dap_fillColorPicker.trackColors=!1,this.dap_outlineColorPicker.trackColors=!1,this._linePatternSelect.addIconOptions(["solid","dot","dash","dashdot","dashdotdot"],this.css.linePattern),this._importRecentColors(),this.createTooltips([{node:this.dap_shapeImageUrlContainer,label:this.labels.imageUrlInputTooltip},{node:this.dap_addImage,label:this.labels.useImageTooltip},{node:this.dap_symbolSizeOptions},{node:this.dap_lineWidthOptions}]),this.dap_outlineColorPicker._enableTransparencySlider=function(){},this.dap_outlineColorPicker._disableTransparencySlider=function(){}},_updateSliderAndTextBoxConstraints:function(t){var i=t.minimum,e=t.maximum;t.textBox.set("constraints",{min:i,max:e}),t.slider.set({minimum:i,maximum:e,discreteValues:Math.round(e)-Math.round(i)+1})},_loadImage:function(t){this._clearUrlImageErrorDisplay(),p.testImageUrl(t).then(b.hitch(this,function(){var i,e;i=this._customImageSymbol,e=this.shapeSize,i?(i.url=t,i.height=e,i.width=e):(i=new o.PictureMarkerSymbol(t,e,e),this._customImageSymbol=i),this.set("shapeSymbol",i)}),b.hitch(this,function(){this._showUrlImageErrorDisplay(this.labels.imageLoadError)}))},_showUrlImageErrorDisplay:function(t){this.dap_shapeImageUrlErrorDisplay.innerHTML=t},_clearUrlImageErrorDisplay:function(){this.dap_shapeImageUrlErrorDisplay.innerHTML=""},_getActiveTabAttr:function(){var t=this.dap_stackContainer.selectedChildWidget;return t===this.dap_outlineContainer?"outline":t===this.dap_fillContainer?"fill":"shape"},_updateTabs:function(t){this._toggleTabs(t),this._showRelevantTabs(t),this._selectActiveTab(),_.ensureEnabledChildSelection(this.dap_stackContainer)},_supportsPattern:function(t){return p.isLine(t)||p.isPolygon(t)},_toggleTabs:function(t){this._shouldShowShapeTab(t)?this._enableTab("shape"):this._disableTab("shape"),this._shouldShowFillTab(t)?this._enableTab("fill"):this._disableTab("fill"),this._shouldShowOutlineTab(t)?(this._enableTab("outline"),this._supportsPattern(t)?(i.show(this.dap_linePatternSelectLabel),i.show(this._linePatternSelect.domNode)):(i.hide(this.dap_linePatternSelectLabel),i.hide(this._linePatternSelect.domNode))):this._disableTab("outline")},_shouldShowShapeTab:function(t){return"simplemarkersymbol"===t.type||"picturemarkersymbol"===t.type},_enableTab:function(t){_.enable(this._getTabContainer(t))},_disableTab:function(t){_.disable(this._getTabContainer(t))},_shouldShowFillTab:function(t){return"simplemarkersymbol"===t.type&&t.style===o.SimpleMarkerSymbol.STYLE_CIRCLE||"simplemarkersymbol"===t.type&&t.style===o.SimpleMarkerSymbol.STYLE_SQUARE||"simplemarkersymbol"===t.type&&t.style===o.SimpleMarkerSymbol.STYLE_DIAMOND||"simplefillsymbol"===t.type},_shouldShowOutlineTab:function(t){return"simplemarkersymbol"===t.type||"simplefillsymbol"===t.type||"cartographiclinesymbol"===t.type||"simplelinesymbol"===t.type},_syncControls:function(t){var i,e;this._hideImageUrlInput(),this._updateSizingConstraints(),this._shouldShowShapeTab(t)&&(i=p.getMarkerLength(t),this.set("shapeSize",i),_.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeSlider,i),_.silentlyUpdateIntermediateChangingValueWidget(this.dap_shapeSizeTextBox,i)),this._shouldShowFillTab(t)&&(this.set("fillColor",t.color),this.dap_fillColorPicker.set("color",t.color,!1)),this._shouldShowOutlineTab(t)&&(e=p.getOutline(t),this.set("outlineColor",e.color),this.set("outlineWidth",e.width),this.set("outlinePattern",e.style),this.dap_outlineColorPicker.set("color",e.color,!1),_.silentlyUpdateIntermediateChangingValueWidget(this.dap_lineWidthSlider,e.width),_.silentlyUpdateIntermediateChangingValueWidget(this.dap_lineWidthTextBox,e.width),this._linePatternSelect.set("value",e.style,!1))},_updateSizingConstraints:function(){var t=p.getOutline(this._editedSymbol),i=t&&t.width>this._defaultMaxLineWidthInPx?Math.ceil(t.width):this._defaultMaxLineWidthInPx,e=p.getMarkerLength(this._editedSymbol),o=e>this._defaultMaxShapeSizeInPx?Math.ceil(e):this._defaultMaxShapeSizeInPx;this._updateSliderAndTextBoxConstraints({textBox:this.dap_lineWidthTextBox,slider:this.dap_lineWidthSlider,minimum:this._defaultMinLineWidthInPx,maximum:i}),this.findTooltip(this.dap_lineWidthOptions).set("label",k.substitute(this.labels.lineWidthTooltip,{min:this._defaultMinLineWidthInPx,max:i})),this._updateSliderAndTextBoxConstraints({textBox:this.dap_shapeSizeTextBox,slider:this.dap_shapeSizeSlider,minimum:this._defaultMinShapeSizeInPx,maximum:o}),this.findTooltip(this.dap_symbolSizeOptions).set("label",k.substitute(this.labels.symbolSizeTooltip,{min:this._defaultMinShapeSizeInPx,max:o}))},_assimilateSymbol:function(t){this._updateTabs(t),this._syncControls(t)},startup:function(){this.inherited(arguments);var t=new h(this._symbolPickerOpts,this.dap_symbolPicker);t.startup(),this._symbolPicker=t,this._addHandlers()},_hideImageUrlInput:function(){this._clearUrlImageErrorDisplay(),i.hide(this.dap_shapeImageUrlContainer),this.dap_shapeImageUrlInput.set("value","")},_showRelevantTabs:function(){var t=this.dap_stackContainer,e=this.dap_shapeContainer,o=this.dap_fillContainer,s=this.dap_outlineContainer;C.forEach(t.getChildren(),function(i){t.removeChild(i)}),this._isPoint()&&(t.addChild(e),t.addChild(o),t.addChild(s)),this._isLine()&&t.addChild(s),this._isPolygon()&&(t.addChild(o),t.addChild(s));var l=1===t.getChildren().length;l?i.hide(this.dap_stackController.domNode):i.show(this.dap_stackController.domNode)},_selectActiveTab:function(){var t=this._getTabContainer(this._activeTabName),i=this.dap_stackContainer.getIndexOfChild(t)>-1;i&&this.dap_stackContainer.selectChild(t)},_onFillColorChange:function(t){this.set("fillColor",t.color)},_onOutlineColorChange:function(t){this.set("outlineColor",t.color)},_getFillColor:function(){return!this._isLine()&&this._hasColorRamp()?this._getMiddleItem(this.fillColorRamp):this.fillColor},_getMiddleItem:function(t){var i=Math.floor(.5*(t.length-1));return t[i]},_getOutlineColor:function(){return this._shouldShowOutlineColorRamp(this._editedSymbol)?this._getMiddleItem(this.outlineColorRamp):this.outlineColor},_commitProperties:function(){var t=this._editedSymbol;this._shouldShowShapeTab(t)&&this._updateShapeSize(),this._shouldShowFillTab(t)&&p.setFillColor(t,this._getFillColor()),this._shouldShowOutlineTab(t)&&(p.setOutlineColor(t,this._getOutlineColor()),this._updateOutlinePattern(),this._updateOutlineWidth()),this._updatePreviewSymbol(),this._toggleOutlineOptions(),this.emit("style-update")},_toggleOutlineOptions:function(){var t=!!this._optimizationOptions&&this._optimizationCheckBox.checked,i=this.outlineColor,e=this._isLine(),o=this._externalSizing&&e||!i||t,s=t||!i,l=!i;this._toggleLabeledControls({labels:this.dap_lineWidthLabel,controls:[this.dap_lineWidthTextBox,this.dap_lineWidthSlider],disabled:o}),this._toggleLabeledControls({labels:this.dap_linePatternSelectLabel,controls:this._linePatternSelect,disabled:l}),this._toggleLabeledControls({labels:[this.dap_outlineColorPicker.dap_transparencyLabel],controls:[this.dap_outlineColorPicker.dap_transparencySlider],disabled:s})},_updatePreviewSymbol:function(){var t=this._editedSymbol,i=this.css.alt,e=this.dap_symbolPreview;this._symbolPreviewSurface&&this._symbolPreviewSurface.destroy(),y.toggle(e,i,this._blendsIntoBackground(t)),this._symbolPreviewSurface=p.renderOnSurface(t,e)},_blendsIntoBackground:function(t){return this._isWhitish(p.hasColor(t.outline)?t.outline.color:t.color)},_isWhitish:function(t){return t&&t.r>246&&t.g>246&&t.b>246},destroy:function(){this._symbolPreviewSurface&&this._symbolPreviewSurface.destroy(),f.destroy(this._optimizationSection),this._optimizationCheckBox.destroy(),this.dap_shapeContainer.destroy(),this.dap_fillContainer.destroy(),this.dap_outlineContainer.destroy(),this.inherited(arguments)},_updateSuggestedColors:function(t,i){t.set("suggestedColors",i)},_updateOutlineWidth:function(){p.setOutlineWidth(this._editedSymbol,this.outlineWidth)},_onWidthChange:function(t){this.set("outlineWidth",t)},_onSizeChange:function(t){this.set("shapeSize",t)},_updateShapeSize:function(){p.setSize(this._editedSymbol,this.shapeSize)},_updateOutlinePattern:function(){this._shouldShowOutlineTab(this._editedSymbol)&&p.setOutlineStyle(this._editedSymbol,p.toFullLineStyle(this.outlinePattern))},_show:function(t){y.remove(i.getNode(t),this.css.hidden)},_hide:function(t){y.add(i.getNode(t),this.css.hidden)},popUp:function(t){_.popUp(this,t)}});return P("extend-esri")&&b.setObject("dijit.SymbolStyler",v,e),v});