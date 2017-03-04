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

define(["../../kernel","../_EventedWidget","../_Tooltip","./_DelayedUpdate","./colorRampUtil","./schemeUtil","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/a11yclick","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","dojo/on","dojo/query","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ColorRampPicker.html","dojo/NodeList-dom","dijit/form/Button"],function(e,t,s,i,o,r,c,a,h,n,l,d,m,p,_,u,g,S,f,C){var R=l("esri.dijit.SymbolStyler.ColorRampPicker",[t,c,a,i,s],{baseClass:"esriColorRampPicker",templateString:C,labels:f.widgets.symbolEditor,css:{item:"esriItem",selected:"esriSelected",container:"esriContainer",list:"esriList",preview:"esriPreview",flipper:"esriFlipper",viewport:"esriViewport"},schemes:null,selected:null,numStops:0,_schemesChanged:!1,_selectedChanged:!1,_numStopsChanged:!1,_orientationChanged:!1,_commitPropsTrigger:null,_colorRampSurfaces:null,_previewRampSurface:null,_rampsAndSchemes:null,constructor:function(e){this._colorRampSurfaces=[],this._commitPropsTrigger=this.createUpdateTrigger(this._commitProperties,this)},_commitProperties:function(){var e,t;(this._schemesChanged||this._numStopsChanged)&&(this._schemesChanged=!1,this._numStopsChanged=!1,e=r.getColorRampsWithSchemes(this.schemes,this.numStops),t=this._hasStops(),this._rampsAndSchemes=e,p.empty(this.dap_colorRampPicker),this._colorRampSurfaces=[],n.forEach(e,function(e){this._createColorRampItem({colors:e.colors,hasStops:t})},this),this._renderSuggestions()),this._selectedChanged&&(this._selectedChanged=!1,this._renderSelected()),this._orientationChanged&&(this._orientationChanged=!1,this._renderSelected(),this._renderSuggestions()),this.selected||this.set("selected",this._rampsAndSchemes[0])},_hasStops:function(){return this.numStops>0},_createColorRampItem:function(e){var t=e.colors,s=e.numClasses,i=p.create("div",{className:this.css.item,tabIndex:0},this.dap_colorRampPicker),r=_.get(i,"height"),c=_.get(i,"width"),a=o.createColorRamp({node:i,width:c,height:r,colors:t,numClasses:s});this._colorRampSurfaces.push(a)},_renderSuggestions:function(){var e=this._colorRampSurfaces,t=this._rampsAndSchemes,s=this._hasStops();n.forEach(e,function(e,i){o.updateColorRamp({ramp:e,colors:t[i].colors,hasStops:s})})},_renderSelected:function(){var e=this.selected.colors,t=this.dap_previewRamp,s=_.get(t,"height"),i=_.get(t,"width"),r=e,c=this._hasStops();this._previewRampSurface?o.updateColorRamp({ramp:this._previewRampSurface,colors:r,hasStops:c}):this._previewRampSurface=o.createColorRamp({node:t,height:s,width:i,colors:r,hasStops:c})},getStyle:function(){return this.get("selected")},_setSchemesAttr:function(e){this._schemesChanged=!0,this._set("schemes",r.cloneScheme(e)),this._commitPropsTrigger()},_getSelectedAttr:function(){var e=this.selected,t={colors:r._createColors(e.colors)};return e.scheme&&(t.scheme=r.cloneScheme(e.scheme)),t},_setSelectedAttr:function(e){d.isArray(e)&&(e={colors:e}),this._selectedChanged=!0,this._set("selected",e),this._commitPropsTrigger(),this.emit("color-ramp-change",this.get("selected"))},_getSuggestions:function(){return n.map(this._rampsAndSchemes,function(e){return e.colors})},_setNumStopsAttr:function(e){e=e>0?e:0,this._numStopsChanged=!0,this._set("numStops",e),this._commitPropsTrigger()},postCreate:function(){this.inherited(arguments),this._addHandlers(),this.createTooltips([{node:this.dap_colorFlipper,label:this.labels.flipColorsTooltip},{node:this.dap_colorRampPicker,label:this.labels.selectRampTooltip}])},_addHandlers:function(){var e="."+this.css.item;this.own(g(this.dap_colorRampPicker,g.selector(e,h),d.partial(this._rampClickHandler,this))),this.own(g(this.dap_colorFlipper,h,d.hitch(this,function(){this.flipColors()})))},_rampClickHandler:function(e){var t=e.css.selected,s="."+e.css.item,i=this,o=S("."+e.css.item,e.dap_colorRampPicker).indexOf(i);S(s,e.dap_colorRampPicker).removeClass(t),m.add(i,t),e.set("selected",e._rampsAndSchemes[o])},flipColors:function(){var e=this._rampsAndSchemes,t=this.selected,s=-1===n.indexOf(this._getSuggestions(),t.colors);s&&t.colors.reverse(),n.forEach(e,function(e){r.flipColors(e.scheme)}),this._orientationChanged=!0,this.set("selected",t),this._commitPropsTrigger()},destroy:function(){this.inherited(arguments),n.forEach(this._colorRampSurfaces,function(e){e.destroy()}),this._previewRampSurface&&this._previewRampSurface.destroy()}});return u("extend-esri")&&d.setObject("dijit.SymbolStyler.ColorRampPicker",R,e),R});