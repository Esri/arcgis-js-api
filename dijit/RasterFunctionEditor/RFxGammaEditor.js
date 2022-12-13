// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/dom-construct","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxGammaEditor.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../../kernel","./utils","./RFxArgSlider"],(function(t,e,i,a,s,r,n,l,u,d,h,o,m){var g=t("RFxGammaSlider",[l,u,d],{widgetsInTemplate:!0,templateString:n,defaultMin:-1,defaultMax:10,defaultValue:1,gammaSliderList:[],persistedLayer:{},constructor:function(t){var i;this._i18n=r.rasterFunctions.rfxArgs,this.inherited(arguments),e.mixin(this,t),(i=this.inputArgs&&this.inputArgs.Gamma)&&(this.gammaArg=i,this.label=i.name,this.value=i.value||this.value||[])},postCreate:function(){this.inherited(arguments),this._attachChangeListener()},startup:function(){this.inherited(arguments);var t=this.triggerArgs.Raster&&this.triggerArgs.Raster.input;if(t&&t.value){var e=t.getSelectedLayer(t.get("value").name);e&&(this.persistedLayer.url&&this.persistedLayer.url!==e.url&&this.value&&(this.value=void 0),e.loaded?this._setupGammaSlider(e):e.on("load",function(){this._setupGammaSlider(e)}.bind(this),(function(t){console.error(t)})))}else{var i=this._createGammaSlider(this.defaultMin,this.defaultMax,0,this.defaultValue);this.gammaSliderList.push(i)}},_attachChangeListener:function(){(this.triggerArgs&&this.triggerArgs.Raster).input.on("change",this._handleRasterChange.bind(this))},_setupGammaSlider:function(t){var e=t.bandCount?t.bandCount:0,i=this.value||o.computeGamma(t);this._setValueAttr(i);for(var a=0;a<e;a++){var s=this._createGammaSlider(this.defaultMin,this.defaultMax,a,i[a]);this.gammaSliderList.push(s)}},_handleRasterChange:function(t){var e=t.name,i=t.detail.widget.getSelectedLayer(e);this.persistedLayer.url=i.url,this.value=void 0,this.gammaSliderList=[],s.empty(this._templateContainer),i.loaded?this._setupGammaSlider(i):i.on("load",function(){this._setupGammaSlider(i)}.bind(this),(function(t){console.error(t)}))},_createGammaSlider:function(t,e,i,a){var r=s.create("div",null,this._templateContainer),n=new m({min:t,max:e,value:a},r);return n.startup(),n.on("change",function(t){this._handleSliderChange(i,t)}.bind(this)),n},_handleSliderChange:function(t,e){var i=e.value;i&&(this.value[t]=i)},_setValueAttr:function(t){var e=[];if(this.value=t,this.inputArgs&&this.inputArgs.Raster)var i=this.inputArgs.Raster.input,a=i.store&&i.store.get(i.value),s=a&&a.bandCount;if(s)for(;s--;)e.push(t);else e=t;this.value=e,this.gammaArg&&(this.gammaArg.value=e)}});return a("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxGammaEditor",g,h),g}));