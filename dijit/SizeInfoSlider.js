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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["../kernel","../numberUtils","../dijit/RendererSlider","../dijit/RendererSlider/sliderUtils","../Color","dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/debounce","dojo/dom-style","dojo/Evented","dojo/has","dojo/dom-construct","dojo/dom-class","dojox/gfx","dojo/text!./SizeInfoSlider/templates/SizeInfoSlider.html"],(function(i,t,s,e,a,o,h,l,n,m,r,u,d,c,p,_,S,f){var g=n([h,o,d],{declaredClass:"esri.dijit.SizeInfoSlider",baseClass:"esriSizeInfoSlider",templateString:f,values:null,minValue:null,maxValue:null,minSize:null,maxSize:null,histogram:null,statistics:!1,zoomOptions:null,showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,histogramWidth:100,rampWidth:26,symbolWidth:50,_rampNode:null,_sliderHeight:null,_barsGroup:null,_updateTimer:null,_forceMinValue:null,_forceMaxValue:null,_isRampFlipped:!1,constructor:function(i,t){t&&(void 0!==i.minValue&&this.set("_forceMinValue",i.minValue),void 0!==i.maxValue&&this.set("_forceMaxValue",i.maxValue),this._css={handlerTickSize:"esri-handler-tick-size"},this._updateTimeout=r(this._updateTimeout,0),this._attachSymbols=r(this._attachSymbols,0))},postCreate:function(){this.inherited(arguments),this._setupDataDefaults()},startup:function(){this.inherited(arguments),this._slider=new s({type:"SizeInfoSlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:!!this.zoomOptions,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles},this._sliderNode),this._slider.startup(),this._rampNode=this._slider._sliderAreaRight,this._sliderHeight=u.get(this._rampNode,"height")||155,this._createSVGSurfaces(),this._slider.on("slide",m.hitch(this,(function(i){this.sizeInfo.minDataValue=i.values[0],this.sizeInfo.maxDataValue=i.values[1],this._set("values",i.values),this._fillRamp(i.values),this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,sizeInfo:m.clone(this.sizeInfo)})}))),this._slider.on("handle-value-change",m.hitch(this,(function(i){this.sizeInfo.minDataValue=i.values[0],this.sizeInfo.maxDataValue=i.values[1],this._set("values",i.values),this._updateRendererSlider();var t=m.clone(this.sizeInfo);this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,sizeInfo:t}),this.emit("handle-value-change",t)}))),this._slider.on("data-value-change",m.hitch(this,(function(i){this.set({minValue:i.min,maxValue:i.max});var t={minValue:this.minValue,maxValue:this.maxValue,sizeInfo:m.clone(this.sizeInfo)};this.emit("data-change",t),this.emit("data-value-change",t)}))),this._slider.on("stop",m.hitch(this,(function(i){this.emit("handle-value-change",m.clone(this.sizeInfo))}))),this._slider.on("zoom-out",m.hitch(this,(function(i){this.set("zoomOptions",null)}))),this.statistics&&this.showStatistics&&this._generateStatistics(),this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram(),this.watch("minValue",this._updateTimeout),this.watch("maxValue",this._updateTimeout),this.watch("symbol",this._updateTimeout),this.watch("sizeInfo",this._updateTimeout),this.watch("minSize",this._updateTimeout),this.watch("maxSize",this._updateTimeout),this.watch("statistics",this._updateTimeout),this.watch("histogram",this._updateTimeout),this.watch("zoomOptions",this._updateTimeout),this.watch("showHistogram",this._toggleHistogram),this.watch("zoomOptions",this._zoomEventHandler)},destroy:function(){this.inherited(arguments),this._slider&&this._slider.destroy(),this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy(),this.countTooltips&&l.forEach(this.countTooltips,(function(i){i.destroy()}))},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.minSize=this.sizeInfo.minSize,this.maxSize=this.sizeInfo.maxSize,this.values=[this.sizeInfo.minDataValue,this.sizeInfo.maxDataValue],this._isRampFlipped=this.minSize>this.maxSize||this.minSize.stops&&this.minSize.stops[0]&&this.maxSize.stops&&this.maxSize.stops[0]&&this.maxSize.stops[0].size<this.minSize.stops[0].size,null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue,_minZoomLabel:this.minValue,_maxZoomLabel:this.maxValue,_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,_minZoomLabel:null,_maxZoomLabel:null,_isZoomed:!1}),this._slider.set("values",this.values),this._slider._reset(),this._slider._updateRoundedLabels(),this._slider._generateMoveables(),this._clearRect(),this._createSVGSurfaces(),this.statistics&&this.showStatistics&&this._generateStatistics(),this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_zoomEventHandler:function(){this.emit("zoomed",!!this.zoomOptions)},_setupDataDefaults:function(){this.set({minSize:this.sizeInfo.minSize,maxSize:this.sizeInfo.maxSize}),this._isRampFlipped=this.minSize>this.maxSize||this.minSize.stops&&this.minSize.stops[0]&&this.maxSize.stops&&this.maxSize.stops[0]&&this.maxSize.stops[0].size<this.minSize.stops[0].size,this.statistics?this.set({minValue:this.statistics.min,maxValue:this.statistics.max}):this.set({minValue:0,maxValue:100}),null!==this._forceMinValue&&this.set("minValue",this._forceMinValue),null!==this._forceMaxValue&&this.set("maxValue",this._forceMaxValue),null!==this.zoomOptions&&!1!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue),null===this.sizeInfo.minDataValue&&null===this.sizeInfo.maxDataValue||0===this.sizeInfo.minDataValue&&0===this.sizeInfo.maxDataValue?null===this.minValue&&null===this.maxValue&&this.set({minValue:0,maxValue:100,values:[20,80]}):this.minValue===this.maxValue?0===this.minValue?this.set({maxValue:100,values:[20,80]}):null===this.minValue?this.set({minValue:0,maxValue:100,values:[20,80]}):this.set({minValue:0,maxValue:2*this.minValue,values:[this.maxValue/5,this.maxValue/5*4]}):this.set("values",[this.sizeInfo.minDataValue,this.sizeInfo.maxDataValue]),null===this.minValue&&this.set("minValue",0),null===this.maxValue&&this.set("maxValue",100)},_createSVGSurfaces:function(){this._proportionalSymbolSurface=S.createSurface(this._rampNode,this.rampWidth,this._sliderHeight),this._surfaceRect=this._proportionalSymbolSurface.createRect({width:this.rampWidth,height:this._sliderHeight}),this._histogramSurface=e.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth),this._fillRamp(),this._attachSymbols()},_attachSymbols:function(){var i=this._isRampFlipped?this.maxSize:this.minSize,t=this._isRampFlipped?this.minSize:this.maxSize;this._attachSymbol(this._slider.moveables[0],i),this._attachSymbol(this._slider.moveables[1],t)},_attachSymbol:function(i,t){i._symbol||(i._symbol=p.create("div",{style:"position: absolute; left: 10px;"},i));var s,e=u.get(i._handleContainer,"height"),a=i._symbol,o=this.symbol;return o&&"simplelinesymbol"==o.type?(s=t===this.minSize?5:13,this._generateLineSymbol(i,s,e)):(s=t===this.minSize?12:48,this._generateCircleSymbol(a,s,e)),a},_generateLineSymbol:function(i,t,s){var e,o=i._tick,h=i._symbol;return _.add(o,this._css.handlerTickSize),u.set(h,"top",s/2-t+"px"),u.set(h,"height",2*t+"px"),u.set(h,"width",t-4+"px"),h.innerHTML="",(e=S.createSurface(h)).rawNode.style.position="absolute",e.rawNode.style.top=1===t?"1px":t/2+"px",this.isLeftToRight()||(e.rawNode.style.left="-45px"),e.setDimensions(this.rampWidth,t),e.createRect({width:this.rampWidth,height:t}).setFill(new a([0,121,193,.8])),e},_generateCircleSymbol:function(i,t,s){var e,o=t/2,h=12===t;return u.set(i,"top",s/2-(o+1)+"px"),u.set(i,"height",2*(o+1)+"px"),u.set(i,"width",h?2*(o+1):o+"px"),u.set(i,"left",h?"8px":"10px"),i.innerHTML="",(e=S.createSurface(i)).rawNode.style.position="absolute",this.isLeftToRight()||(e.rawNode.style.left="-45px"),h?(e.setDimensions(2*(o+1),2*(o+1)),e.createCircle({cx:7,cy:o+1,r:o}).setFill(new a([0,121,193,.8])).setStroke("#fff")):(e.setDimensions(o+1,2*(o+1)),e.createCircle({cx:0,cy:o+1,r:o}).setFill(new a([0,121,193,.8])).setStroke("#fff")),e},_fillRamp:function(i){var t=this._slider,s=this._sliderHeight,e=i?i[0]:t.values[0],a=i?i[1]:t.values[1],o=Math.round(s-(e-t.minimum)/(t.maximum-t.minimum)*s),h=Math.round(s-(a-t.minimum)/(t.maximum-t.minimum)*s),l=this.rampWidth,n="M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1",m={color:"#fff",width:3};this._proportionalSymbolSurface.clear(),this._isRampFlipped?this._proportionalSymbolSurface.createPath().moveTo(10,0).lineTo(10,h).lineTo(l,o).lineTo(l,s).lineTo(0,s).lineTo(0,0).closePath().setFill("#9a9a9a"):this._proportionalSymbolSurface.createPath().moveTo(l,0).lineTo(l,h).lineTo(10,o).lineTo(10,s).lineTo(0,s).lineTo(0,0).closePath().setFill("#9a9a9a"),u.set(this._proportionalSymbolSurface.rawNode,"overflow","visible"),u.set(this._proportionalSymbolSurface.rawNode,"background-color","#d9d9d9"),null!==this.zoomOptions&&!1!==this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._proportionalSymbolSurface.createPath(n).setStroke(m).setTransform(S.matrix.translate(0,5)),this._proportionalSymbolSurface.createPath(n).setStroke(m).setTransform(S.matrix.translate(0,195))):this.toggleSliderBottom?this._proportionalSymbolSurface.createPath(n).setStroke(m).setTransform(S.matrix.translate(0,195)):this.toggleSliderTop&&this._proportionalSymbolSurface.createPath(n).setStroke(m).setTransform(S.matrix.translate(0,5)))},_clearRect:function(){this._proportionalSymbolSurface.destroy(),this._histogramSurface.destroy()},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(u.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):u.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var i=this.zoomOptions&&this.zoomOptions.histogram?this.zoomOptions.histogram:this.histogram;this._barsGroup=e.generateHistogram(this._histogramSurface,i,this.histogramWidth,this.rampWidth,this.isLeftToRight()),this.countTooltips=e.generateCountTooltips(i,this._barsGroup)},_generateStatistics:function(){if(!(this.statistics.count<2||isNaN(this.statistics.avg))){var i,s,a,o,h=this.statistics,l=this._slider,n=this.zoomOptions||null,m=e.getPrecision(this.maxValue);h.min===h.max&&h.min===h.avg?(a=0,o=2*h.avg):(a=h.min,o=h.max),a===l.minimum&&o===l.maximum||(a=l.minimum,o=l.maximum),n&&(a=n.minSliderValue,o=n.maxSliderValue),i=this._sliderHeight*(o-h.avg)/(o-a),s=t.round([h.avg,o,a])[0],this._avgHandleObjs=e.generateAvgLine(this._histogramSurface,s,i,m,this.isLeftToRight(),this.isDate)}}});return c("extend-esri")&&m.setObject("dijit.SizeInfoSlider",g,i),g}));