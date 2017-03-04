// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["../Color","../kernel","./_EventedWidget","./_Tooltip","./ColorPicker/colorUtil","./ColorPicker/HexPalette","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/on","dojo/query","dojo/sniff","dojo/dom-style","dojo/i18n!../nls/jsapi","dojo/text!./ColorPicker/templates/ColorPicker.html","./HorizontalSlider","dijit/form/RadioButton","dijit/form/TextBox","dijit/form/ToggleButton","dojo/NodeList-dom"],function(t,e,s,o,r,i,a,l,n,h,c,d,_,u,p,C,g,w,S){var f="no-color",P=h("esri.dijit.ColorPicker",[s,a,l,o],{_DEFAULT_COLORS_PER_ROW:13,templateString:S,labels:w.widgets.colorPicker,baseClass:"esriColorPicker",css:{container:"esriContainer",header:"esriHeader",footer:"esriFooter",middle:"esriMiddle",swatch:"esriSwatch",swatchRow:"esriSwatchRow",swatchEmpty:"esriSwatchEmpty",swatchPreview:"esriSwatchPreview",swatchTransparencyBackground:"esriSwatchTransparencyBackground",palette:"esriPalette",paletteOptions:"esriPaletteOptions",paletteToggle:"esriPaletteToggle",label:"esriLabel",hexInput:"esriHexInput",recent:"esriRecent",suggested:"esriSuggested",selected:"esriSelected",disabled:"esriDisabled",section:"esriSection",displayNone:"esriDisplayNone",transparencySlider:"esriTransparencySlider",alt:"esriAlt"},color:null,trackColors:!0,_required:!1,_activePalette:null,recentColors:[],_showRecentColors:!0,_showTransparencySlider:!0,colorsPerRow:void 0,_brightsPalette:null,_pastelsPalette:null,_swatches:null,_colorInstance:null,_swatchCreator:null,_noColorSwatchNode:null,constructor:function(e,s){e=e||{},this._colorInstance=new t,this._brightsPalette=new i({colors:e.palette}),this._pastelsPalette=new i({colors:this._toPastels(this._brightsPalette.get("colors"))}),this._activePalette=this._brightsPalette,this._swatchCreator=e.swatchCreator||this._createSwatch,e.hasOwnProperty("required")&&(this._required=e.required),e.hasOwnProperty("showRecentColors")&&(this._showRecentColors=e.showRecentColors),e.hasOwnProperty("showSuggestedColors")&&(this._showSuggestedColors=e.showSuggestedColors),e.hasOwnProperty("showTransparencySlider")&&(this._showTransparencySlider=e.showTransparencySlider),e.color&&(e.color=r.normalizeColor(e.color)),this.colorsPerRow=e.colorsPerRow>0?e.colorsPerRow:this._DEFAULT_COLORS_PER_ROW,this._swatches={}},_toPastels:function(e){var s=this._colorInstance,o=new t([238,238,238]);return n.map(e,function(e){return t.blendColors(s.setColor(e),o,.2)},this)},_createSwatch:function(t){var e=t.className,s=t.hexColor||"transparent",o=t.paletteNode,r=_.create("span",{className:e,style:{background:s}},o);return r},_createSwatches:function(t,e){var s,o,r=this.css.swatch,i=this.css.swatchRow,a=this.colorsPerRow,l=e.get("colors");n.forEach(l,function(e,l){l%a===0&&(s=_.create("div",{className:i},t)),o=this._swatchCreator({className:r,hexColor:e,paletteNode:s}),this._swatches[e]=o},this)},_selectColor:function(){var t=this.color||this._activePalette.get("colors")[0];this.set("color",t)},_setColorWithCurrentAlpha:function(t){t!==f&&this.color!==f&&(t=r.normalizeColor(t),t.a=this.color.a),this.set("color",t)},_updatePreviewSwatch:function(t){var e,s,o,i,a,l=this.css.swatchEmpty,n=this.dap_previewSwatch;return t===f?(d.add(n,l),void g.set(n,{backgroundColor:"",borderColor:""})):(e=r.getContrastingColor(t),s=8!==C("ie"),d.remove(n,l),o=t.toCss(s),i=e.toCss(s),a={backgroundColor:o,borderColor:i},s||(a.opacity=t.a),void g.set(n,a))},_showBrights:function(){d.remove(this.dap_paletteContainer,this.css.alt),this._activePalette=this._brightsPalette},_showPastels:function(){d.add(this.dap_paletteContainer,this.css.alt),this._activePalette=this._pastelsPalette},_setColorFromSwatch:function(t){var e=g.get(t,"backgroundColor");this._setColorWithCurrentAlpha(e)},_checkSelection:function(){var t=this.get("color");this._activePalette.contains(t)?this._highlightColor(t):this._clearSelection()},_addListeners:function(){var t="."+this.css.swatch;"."+this.css.swatchEmpty;this.own(u(this.dap_paletteContainer,u.selector(t,"click"),c.hitch(this,function(t){this._setColorFromSwatch(t.target)}))),this.own(u(this.dap_recentColorPalette,u.selector(t,"click"),c.hitch(this,function(t){this._setColorFromSwatch(t.target)}))),this.own(u(this.dap_suggestedColorPalette,u.selector(t,"click"),c.hitch(this,function(t){this._setColorFromSwatch(t.target)}))),this._required||this.own(u(this._noColorSwatchNode,"click",c.hitch(this,function(t){this.set("color",f)})));var e=this.dap_hexInput;e.on("blur",c.hitch(this,function(){var t=r.normalizeHex(e.get("value"));return r.isShorthandHex(t)?void this._setColorWithCurrentAlpha(t):void this._silentlyUpdateHexInput(this.color)})),e.on("change",c.hitch(this,function(){var t=r.normalizeHex(e.get("value"));r.isLonghandHex(t)&&(this.color===f||this.color.toHex()!==t)&&this._setColorWithCurrentAlpha(t)})),this.dap_transparencySlider.on("change",c.hitch(this,function(t){var e,s=this.get("color");s!==f&&(e=r.normalizeColor(this._colorInstance.setColor(s)),e.a=1-t,this._updatePreviewSwatch(e),this._silentlyUpdateHexInput(e),this.set("color",e))})),this.dap_paletteToggle.on("change",c.hitch(this,this._togglePalette))},_togglePalette:function(t){this.dap_paletteToggle.set("checked",t,!1),t?this._showPastels():this._showBrights(),this._checkSelection()},postCreate:function(){this.inherited(arguments),this._addListeners(),this._selectColor(),this.dap_hexInput.intermediateChanges=!0,this.dap_transparencySlider.intermediateChanges=!0,this.createTooltips([{node:this.dap_paletteContainer,label:this.labels.paletteTooltip},{node:this.dap_hexInput,label:this.labels.hexInputTooltip},{node:this._noColorSwatchNode,label:this.labels.noColorTooltip},{node:this.dap_paletteToggle,label:this.labels.moreColorsTooltip}])},buildRendering:function(){this.inherited(arguments),this._createPalettes();var t=this.css.swatch,e=this.css.swatchEmpty;this._required||(this._noColorSwatchNode=_.create("div",{className:t+" "+e},this.dap_hexInput.domNode,"after"));var s=this.css.displayNone;this._showTransparencySlider||d.add(this.dap_transparencySection,s),this._showRecentColors||d.add(this.dap_recentColorSection,s),this._showSuggestedColors||d.add(this.dap_suggestedColorSection,s)},_createPalettes:function(){this._swatches={},_.empty(this.dap_primaryPalette),_.empty(this.dap_secondaryPalette),this._createSwatches(this.dap_primaryPalette,this._brightsPalette),this._createSwatches(this.dap_secondaryPalette,this._pastelsPalette)},_silentlyUpdateHexInput:function(t){var e=t===f?"":t.toHex();this._silentlyUpdateIntermediateChangingValueWidget(this.dap_hexInput,e)},_silentlyUpdateIntermediateChangingValueWidget:function(t,e){t.intermediateChanges=!1,t.set("value",e,!1),t.intermediateChanges=!0},addRecentColor:function(t){t&&t!==f&&this._addRecentColor(r.normalizeColor(t).toHex())},_addRecentColor:function(t){if(t){var e=this.recentColors,s=n.indexOf(e,t);s>-1&&e.splice(s,1),e.unshift(t),e.length>this.colorsPerRow&&e.pop(),this._renderRecentSwatches()}},_renderRecentSwatches:function(){if(this.recentColors){var t=this.css.recent,e=this.css.swatch,s="."+t+"."+e,o=p(s,this.dap_recentColorPalette);n.forEach(this.recentColors,function(s,r){if(r<this.colorsPerRow){if(r+1>o.length){var i=this._swatchCreator({hexColor:s,className:e+" "+t,paletteNode:this.dap_recentColorPalette});o.push(i)}g.set(o[r],"backgroundColor",s)}},this)}},_renderSuggestedSwatches:function(){if(this.suggestedColors){var t=this.css.suggested,e=this.css.swatch,s="."+t+"."+e,o=p(s,this.dap_recentColorPalette);n.forEach(this.suggestedColors,function(s,r){if(r<this.colorsPerRow){if(r+1>o.length){var i=this._swatchCreator({hexColor:s,className:e+" "+t,paletteNode:this.dap_suggestedColorPalette});o.push(i)}g.set(o[r],"backgroundColor",s)}},this)}},_clearRecentSwatches:function(){_.empty(this.dap_recentColorPalette)},_clearSuggestedSwatches:function(){_.empty(this.dap_suggestedColorPalette)},_clearSelection:function(){var t=this.css.selected,e="."+t;p(e,this.dap_paletteContainer).removeClass(t)},_highlightColor:function(t){var e,s=this.css.selected,o=this._findColorSwatch(t);o&&(t=r.normalizeColor(t),e=r.getContrastingColor(t),d.add(o,s),g.set(o,"borderColor",e.toHex()))},_findColorSwatch:function(t){var e,s=this._activePalette.get("colors"),o=this._colorInstance.setColor(t).toHex(),r=n.indexOf(s,o);return r>-1&&(e=this._swatches[o]),e},_getColorAttr:function(){return this.color===f?f:new t(this.color)},_previousColor:null,_enableTransparencySlider:function(){d.remove(this.dap_transparencyLabel,this.css.disabled),this.dap_transparencySlider.set("disabled",!1)},_disableTransparencySlider:function(){d.add(this.dap_transparencyLabel,this.css.disabled),this.dap_transparencySlider.set("disabled",!0)},_setColorAttr:function(e,s){if(e=e||f,s=s||void 0===s,!this._required){if(e===f)return this._set("color",f),this._previousColor=f,this._disableTransparencySlider(),this._clearSelection(),this._silentlyUpdateHexInput(f),this._updatePreviewSwatch(e),d.add(this._noColorSwatchNode,this.css.selected),void(s&&this.emit("color-change",{color:f}));this._enableTransparencySlider(),d.remove(this._noColorSwatchNode,this.css.selected)}var o,i=r.normalizeColor(e),a=this._previousColor,l=this._colorInstance,n=this.css.selected;if(a){if(r.equal(a,i))return;var h=this._findColorSwatch(a);h&&(d.remove(h,n),g.set(h,"borderColor",""))}l.setColor(i),o=l.toHex(),this._set("color",new t(l)),this._previousColor=i,this._silentlyUpdateIntermediateChangingValueWidget(this.dap_transparencySlider,1-l.a),this._updatePreviewSwatch(l),this._checkSelection(),this._silentlyUpdateHexInput(l),this.trackColors&&this._addRecentColor(o),s&&this.emit("color-change",{color:new t(l)})},_getRecentColorsAttr:function(){return n.map(this.recentColors,function(t){return r.normalizeColor(t)})},_setRecentColorsAttr:function(t){this.recentColors=t||[],this._showRecentColors&&(this.recentColors=n.map(this.recentColors,function(t){return r.normalizeColor(t).toHex()})),0===this.recentColors.length?this._clearRecentSwatches():this._renderRecentSwatches()},suggestedColors:null,_getSuggestedColorsAttr:function(){return n.map(this.suggestedColors,function(t){return r.normalizeColor(t)})},_setSuggestedColorsAttr:function(t){this._showSuggestedColors&&(this._clearSuggestedSwatches(),this.suggestedColors=t||[],this.suggestedColors=n.map(this.suggestedColors,function(t){return r.normalizeColor(t).toHex()}),this.suggestedColors.length>0&&this._renderSuggestedSwatches())},_setPaletteAttr:function(t){var e=this._activePalette===this._brightsPalette;this._brightsPalette.set("colors",t),this._pastelsPalette.set("colors",this._toPastels(this._brightsPalette.get("colors"))),this._activePalette=e?this._brightsPalette:this._pastelsPalette,this._createPalettes(),this._togglePalette(!e)},saveRecentColors:function(t){localStorage.setItem(t,JSON.stringify(this.get("recentColors")))},loadRecentColors:function(t){this.set("recentColors",JSON.parse(localStorage.getItem(t)))}});return P.NO_COLOR=f,C("extend-esri")&&c.setObject("dijit.ColorPicker",P,e),P});