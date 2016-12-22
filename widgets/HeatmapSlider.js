// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./Widgette","../widgets/RendererSlider","dijit/_TemplatedMixin","dojo/_base/array","dojo/_base/lang","dojo/debounce","dojo/dom-style","dojox/gfx","dojo/i18n!./HeatmapSlider/nls/HeatmapSlider","dojo/text!./HeatmapSlider/templates/HeatmapSlider.html"],function(e,t,i,s,a,r,o,l,h,d){var n=e.createSubclass([i],{declaredClass:"esri.widgets.HeatmapSlider",baseClass:"esriHeatmapSlider",templateString:d,rampWidth:26,handles:[3,15],minSliderValue:0,maxSliderValue:1,showLabels:!0,showTicks:!0,showHandles:!0,_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_surfaceRect:null,_updateTimer:null,constructor:function(e,t){this.inherited(arguments),t&&(this._updateTimeout=r(this._updateTimeout,0))},postCreate:function(){this.inherited(arguments),this._setupDataDefaults()},startup:function(){this.inherited(arguments),this._slider=new t({type:"HeatmapSlider",values:this.values,minimum:this.minSliderValue,maximum:this.maxSliderValue,precision:2,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,minLabel:h.widgets.rendererSlider.low,maxLabel:h.widgets.rendererSlider.high},this._sliderNode),this._slider.startup(),this._rampNode=this._slider._sliderAreaRight,this._sliderHeight=o.get(this._rampNode,"height")||155,this._createSVGSurfaces(),this._slider.on("slide",a.hitch(this,function(e){this._updateColorStops(e.values[0],e.values[1]),this._fillRamp()})),this._slider.on("data-change",a.hitch(this,function(e){this.set("values",[e.values[0],e.values[1]]),this.emit("change",a.clone(this.colorStops))})),this._slider.on("handle-value-change",a.hitch(this,function(e){this._updateRendererSlider()})),this._slider.on("data-value-change",a.hitch(this,function(e){this._updateRendererSlider()})),this._slider.on("stop",a.hitch(this,function(e){this.emit("handle-value-change",a.clone(this.colorStops))})),this.watch("colorStops",this._updateTimeout)},destroy:function(){this.inherited(arguments),this._slider&&this._slider.destroy()},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set("values",[this.colorStops[3].ratio,this.colorStops[15].ratio]),this._slider.set("values",this.values),this._slider._reset(),this._slider._updateRoundedLabels(),this._slider._generateMoveables(),this._clearRect(),this._createSVGSurfaces()},_setupDataDefaults:function(){this.set("values",[this.colorStops[3].ratio,this.colorStops[15].ratio])},_createSVGSurfaces:function(){this._colorRampSurface=l.createSurface(this._rampNode,this.rampWidth-2,this._sliderHeight-2),this._colorRampSurface.rawNode.setAttribute("class","esri-slider-ramp-surface"),this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,height:this._sliderHeight}),this._fillRamp()},_clearRect:function(){this._colorRampSurface.destroy()},_updateColorStops:function(e,t){s.forEach(this.colorStops,a.hitch(this,function(i,s){s>2&&(i.ratio=e+(t-e)*((s-3)/12),3===s&&i.ratio<this.colorStops[2].ratio&&(i.ratio=this.colorStops[2].ratio))}))},_fillRamp:function(){var e=this.colorStops.slice(0);s.forEach(e,function(e){e.offset=1-e.ratio}),e.reverse(),this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight/.99,colors:e})}});return n});