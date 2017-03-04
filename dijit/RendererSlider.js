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

define(["../kernel","../numberUtils","../renderers/utils","./DateTimeTextBox","./RendererSlider/sliderUtils","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetBase","dijit/form/NumberTextBox","dojo/debounce","dojo/on","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dnd/move","dojo/dom-construct","dojo/dom-style","dojo/dom-class","dojo/Evented","dojo/number","dojo/has","dojo/text!./RendererSlider/templates/RendererSlider.html"],function(e,t,i,a,s,o,n,l,r,h,d,u,m,_,c,b,p,L,x,N,g,v){var f=m([l,n,o,x],{declaredClass:"esri.dijit.RendererSlider",baseClass:"esriRendererSlider",templateString:v,theme:"Slider",intermediateChanges:!1,type:null,minimum:0,maximum:100,values:[50],precision:2,isDate:!1,handles:[],primaryHandle:null,showHandles:!0,showTicks:!0,showLabels:!0,showRatioLabels:!1,minLabel:null,maxLabel:null,_visibleLabels:["data","handle"],_roundedDataLabels:[],_roundedHandleLabels:[],_ratioLabels:[],_minRatioLabel:"",_maxRatioLabel:"",_isZoomed:!1,_minZoomLabel:"",_maxZoomLabel:"",_maximumNumberEditor:null,_minimumNumberEditor:null,_valueDifferenceByIndex:[],_primaryHandleIdx:null,_currentTopValue:[],_isLTR:!0,_ctrlDown:!1,_histogramSurface:null,_css:null,_minPrecisionForSmallNumbers:3,constructor:function(e,t){this.inherited(arguments),this.domNode=t,this._css={container:"esri-renderer-slider",slidernode:"esri-slider-node",sliderarea:"esri-slider-area",sliderarearight:"esri-slider-area-right",moveable:"esri-moveable",handler:"esri-handle",handlerSpan:"esri-handle-span",handlerContainer:"esri-handle-container",handlerLabel:"esri-handle-label",handlerLabelSpan:"esri-handle-label-span",topLabelNode:"esri-top-label-node",bottomLabelNode:"esri-bottom-label-node",topLabelNodeHover:"esri-top-label-node-hover",bottomLabelNodeHover:"esri-bottom-label-node-hover",heatmapTick:"esri-heatmap-tick",handlerTick:"esri-handler-tick",handlerTickTop:"esri-handler-tick-top",handlerTickBottom:"esri-handler-tick-bottom"},this.showLabels=e.showLabels||this._visibleLabels,this._updateTimeout=h(this._updateTimeout,0)},startup:function(){if(this.inherited(arguments),this.set("_sliderHeight",p.get(this._sliderArea,"height")||200),this._checkMinMaxDefaults(),this.set("_isLTR",this.isLeftToRight()),!this._isLTR){var e=p.get(this._sliderNode,"padding-left")+p.get(this._sliderNode,"padding-right"),t=Math.round(p.get(this._sliderNode,"width"));this.set("_sliderNodeWidth_RTL",e+t)}this.set("precision",s.getCombinedPrecision(this.minimum,this.maximum)),this._updateRoundedLabels(),this._generateMoveables(),this._generateMinMaxEditors(),this._generateCtrlKeyListener(),this.watch("values",this._valuesChange),this.watch("minimum",this._updateTimeout),this.watch("maximum",this._updateTimeout),this.watch("showRatioLabels",this._updateTimeout)},destroy:function(){this.inherited(arguments)},setValue:function(e,t,i){var a=this.get("values"),s=a.slice(0);"object"==typeof a[0]?s[e].value=t:s[e]=t,(this.intermediateChanges||i)&&this.set("values",s),i?this.emit("stop",{values:this.get("values")}):this.emit("slide",{values:s})},_updateTimeout:function(){this._updateSlider()},_updateSlider:function(){this._reset(),this._checkMinMaxDefaults(),this._updateRoundedLabels(),this._generateMoveables(),this._generateMinMaxEditors(),this._generateCtrlKeyListener()},_checkMinMaxDefaults:function(){var e,t,i=this.values;this.minimum===this.maximum&&i&&i.length>0&&(isNaN(i[0])?this.set({minimum:0,maximum:2*i[0].value}):this.set({minimum:0,maximum:2*i[0]})),i&&i.lenth>0&&(e=isNaN(i[0])?i[0].value:i[0],this.minimum>e&&this.set("minimum",e),t=isNaN(i[i.length-1])?i[i.length-1].value:i[i.length-1],this.maximum<t&&this.set("maximum",t))},_calculateValueFromHandlePosition:function(e){var t,i=this.get("minimum"),a=this.get("maximum"),s=this.get("precision"),o=this.get("step")||Math.pow(10,-s);return t=1>=i&&i>=-1&&1>=a&&a>=-1||s>=this._minPrecisionForSmallNumbers?(e*(a-i)+i)/o*o:parseFloat((Math.round((e*(a-i)+i)/o)*o).toFixed(s))},_generateMoveables:function(){var e,t=this._sliderNode,i=this._sliderHeight,a=this.get("minimum"),o=this.get("maximum"),n=this.get("precision"),l=(this.get("step")||Math.pow(10,-n),this.get("showLabels")),r=this.get("showTicks"),h=_.hitch(this,this.setValue),d=this.get("values");this._updateMinMaxLabels(),this.set("_primaryHandleIdx",null),e=u.map(d,_.hitch(this,function(n,d){var m,L,x,N,g,v;return n&&n.primaryHandle&&this.set("_primaryHandleIdx",d),"object"==typeof n&&n.hidden?null:("object"==typeof n&&(n=n.value),m=b.create("div",{style:this._getHandleStyleString(n),className:this._css.moveable},t),v=m._handleContainer=b.create("div",{className:this._css.handlerContainer},m),m._arrowSpan=N=b.create("span",{className:this._css.handlerSpan},v),m._handler=L=b.create("div",{className:this._css.handler},v),"HeatmapSlider"!==this.type&&(l===!0||"object"==typeof l&&-1!==u.indexOf(l,"handles"))&&(x=this._generateHandleLabel(m,d)),r&&this._generateHandleTicks(m,d),g=new c.constrainedMoveable(m,{handle:v,within:!0,constraints:_.hitch(this,function(){return{t:0,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:i}})}),g.onMoveStart=_.hitch(this,function(t){var a,o,n,l,r,h,c,b,L=this.handles,x=u.indexOf(L,d);this._currentTopValue[d]=t.node.style.top,m.labelNode&&m.labelNode._autoPositioned&&(p.set(m.labelNode,"top","3px"),m.labelNode._autoPositioned=!1),s._autoPositionHandleLabels(this.get("moveables")),m._numberEditor&&(m._numberEditor.destroy(),m._numberEditor=null),this._primaryHandleIdx!==d?(L.length>0?(a=null!==L[x-1]?L[x-1]:null,o=null!==L[x+1]?L[x+1]:null,n=e[a],l=e[o]):(n=e[d-1],l=e[d+1]),n&&l?(r=n.style.top,h=l.style.top,c=Number(r.replace("px","")),b=Number(h.replace("px","")),g.constraints=_.hitch(this,function(){return{t:b+2,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:i-b-(i-c+4)}})):n?(r=n.style.top,c=Number(r.replace("px","")),g.constraints=_.hitch(this,function(){return{t:0,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:i-(i-c+2)}})):l&&(h=l.style.top,b=Number(h.replace("px","")),g.constraints=_.hitch(this,function(){return{t:b+2,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:i-(b+2)}}))):(L.length>0?(a=null!==L[x-1]?L[x-1]:null,o=null!==L[x+1]?L[x+1]:null,n=e[a],l=e[o]):(n=e[d-1],l=e[d+1]),n&&l&&(r=n.style.top,h=l.style.top,c=Number(r.replace("px","")),b=Number(h.replace("px","")),g.constraints=_.hitch(this,function(){return{t:2,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:i-4}})))}),g.onMoved=_.hitch(this,function(t){var n,l,r,m,c,b,L,N;if(d===this._primaryHandleIdx&&(r=Number(this._currentTopValue[d].replace("px",""))-Number(t.node.style.top.replace("px","")),this._currentTopValue[d]=t.node.style.top,u.forEach(e,_.hitch(this,function(e,t){if(e){if(t===d)return;if(m=Number(e.style.top.replace("px","")),b=m-r,n=1-Number(b/i),l=this._calculateValueFromHandlePosition(n),a>l||l>o)return;p.set(e,"top",b+"px"),h(t,l,!1),e.labelNode&&(e.labelNode.spanNode.innerHTML=this.showRatioLabels?this._getLabelValueFromIndex(t):this._formatValue(l.toFixed(6)))}}))),n=1-Number(t.node.style.top.replace("px",""))/i,l=this._calculateValueFromHandlePosition(n),null!==this._primaryHandleIdx&&d!==this._primaryHandleIdx&&this._ctrlDown&&(r=Number(this._currentTopValue[d].replace("px",""))-Number(t.node.style.top.replace("px","")),this._currentTopValue[d]=t.node.style.top,0===d?(m=Number(e[e.length-1].style.top.replace("px","")),c=m+r,c>i&&(c=i),0>c&&(c=0),p.set(e[e.length-1],"top",c+"px"),N=1-c/i,L=this._calculateValueFromHandlePosition(N),h(e.length-1,L,!1),e[e.length-1].labelNode&&(e[e.length-1].labelNode.spanNode.innerHTML=this._formatValue(L.toFixed(6)))):d===e.length-1&&(m=Number(e[0].style.top.replace("px","")),c=m+r,c>i&&(c=i),0>c&&(c=0),p.set(e[0],"top",c+"px"),N=1-c/i,L=this._calculateValueFromHandlePosition(N),h(0,L,!1),e[0].labelNode&&(e[0].labelNode.spanNode.innerHTML=this._formatValue(L.toFixed(6))))),h(d,l,!1),this._updateRoundedLabels(),x){var g=this._formatValue(parseFloat(this._roundValue([l,parseFloat(this._getLabelValueFromIndex(d,!0))])[0]).toFixed(this.precision));x.spanNode.innerHTML=this.showRatioLabels?this._getLabelValueFromIndex(d):g}s._autoPositionHandleLabels(this.get("moveables"))}),g.onMoveStop=_.hitch(this,function(e){var t,a,o;if(o=Number(e.node.style.top.replace("px","")),t=1-o/i,a=this._calculateValueFromHandlePosition(t),h(d,a,!0),this._updateRoundedLabels(),x){var n=this._formatValue(parseFloat(this._roundValue([a,parseFloat(this._getLabelValueFromIndex(d,!0))])[0]).toFixed(this.precision));x.spanNode.innerHTML=this.showRatioLabels?this._getLabelValueFromIndex(d):n}s._autoPositionHandleLabels(this.get("moveables"))}),this.showHandles||(p.set(L,"display","none"),p.set(N,"display","none")),m)})),this.set("moveables",e),s._autoPositionHandleLabels(this.get("moveables"))},_reset:function(){u.forEach(this.moveables,_.hitch(this,function(e){e&&e.parentElement.removeChild(e)})),this.moveables=[]},_getHandleStyleString:function(e){var t=this.get("minimum"),i=this.get("maximum"),a=(e-t)/(i-t),s=Math.round((1-a)*this._sliderHeight),o=this._isLTR?0:this._sliderNodeWidth_RTL,n="left: "+o+"px;",l="top: "+s+"px;",r=l+" "+n;return r},_generateHandleTicks:function(e,t){var i=this._css,a=i.handlerTick+" "+i.handlerTickTop,s=i.handlerTick+" "+i.handlerTickBottom,o=0===t?s:a;"HeatmapSlider"===this.type&&(o+=i.heatmapTick),e._tick=b.create("div",{className:o},e)},_updateLabels:function(){this._updateMinMaxLabels(),this._updateRoundedLabels()},_resetLabelPositions:function(){u.forEach(this.moveables,function(e){if(e){var t=e.labelNode;t&&(p.set(t,"top","3px"),e.labelNode._autoPositioned=!1)}})},_generateHandleLabel:function(e,t){var i,a;return i=b.create("div",{className:this._css.handlerLabel},e),a=b.create("span",{className:this._css.handlerLabelSpan,innerHTML:this._getLabelValueFromIndex(t)},i),i.spanNode=a,e.labelNode=i,d(i,"click",_.hitch(this,function(){this._generateHandleLabelEditor(e,t)})),i},_updateMinMaxLabels:function(){var e,t,i,a,s,o,n=this.minimum,l=this.maximum,r=this.showLabels,h=this.minLabel,d=this.maxLabel,m=this._topNodeSpan,_=this._bottomNodeSpan,c=this._isZoomed,b=this._maxZoomLabel,p=this._minZoomLabel,L=this.showRatioLabels,x=this._maxRatioLabel,N=this._minRatioLabel,g=this._roundedDataLabels;r===!1||"object"==typeof r&&-1===u.indexOf(r,"data")?(m.innerHTML="",_.innerHTML=""):c?L?(m.innerHTML=x,_.innerHTML=N):(m.innerHTML=this._formatValue(b),_.innerHTML=this._formatValue(p)):L?(m.innerHTML=x,_.innerHTML=N):(e=isNaN(h)?h:this._roundValue([h,d])[0],t=isNaN(d)?d:this._roundValue([h,d])[1],i=isNaN(e)||null===e?h:this._formatValue(e),a=isNaN(t)||null===t?d:this._formatValue(t),s=this._formatValue(g[0])||this._formatValue(n),o=this._formatValue(g[1])||this._formatValue(l),m.innerHTML=a||o,_.innerHTML=i||s)},_formatValue:function(e){return"string"==typeof e&&(e=Number(e)),this.isDate?i.formatDate(new Date(e),i.timelineDateFormatOptions):t.format(e)},_roundValue:function(e){return this.isDate?e.slice(0):t.round(e)},_updateRoundedLabels:function(){switch(this._roundedDataLabels=this._roundValue([this.minimum,this.maximum]),this.type){case"SizeInfoSlider":case"ClassedSizeSlider":case"ClassedColorSlider":this._roundedHandleLabels=this._roundValue(this.values);break;case"ColorInfoSlider":case"OpacitySlider":this._roundedHandleLabels=this._roundValue(this._getValuesFromObject(this.values))}this._updateRatioLabels()},_updateRatioLabels:function(){var e,t,i=this.get("showRatioLabels"),a=this.get("minimum"),s=this.get("maximum"),o=this._getValuesFromObject(this.values),n=[];if(i!==!1){if("percent"!==i&&"percentTotal"!==i)return void this.set("showRatioLabels",!1);"percent"===i?(u.forEach(o,function(e){n.push(this._getRatioFromValue(e))},this),e=this._formatValue(this._getRatioFromValue(a).toFixed(2)),t=this._formatValue(this._getRatioFromValue(s).toFixed(2))):"percentTotal"===i&&(u.forEach(o,function(e){n.push(this._getRatioFromValue(e))},this),e=this._formatValue(this._getRatioFromValue(a).toFixed(2)),t=this._formatValue(this._getRatioFromValue(s).toFixed(2))),this.set({_ratioLabels:n,_minRatioLabel:e+"%",_maxRatioLabel:t+"%"})}},_generateMinMaxEditors:function(){!this.showLabels||"object"==typeof this.showLabels&&-1===u.indexOf(this.showLabels,"data")||"HeatmapSlider"===this.type?(L.remove(this._topNode,this._css.topLabelNodeHover),L.remove(this._botNode,this._css.bottomLabelNodeHover)):(d(this._topNode,"click",_.hitch(this,this._generateMaxEditor)),d(this._botNode,"click",_.hitch(this,this._generateMinEditor)))},_generateMaxEditor:function(){if(!(this._maximumNumberEditor&&this._topLabelNode||this._isZoomed)){var e,t,i=this.get("minLabel"),s=this.get("maxLabel"),o=this.get("maximum");if(this._topNodeSpan.innerHTML="",this._topLabelNode=b.create("input",{type:"text"},this._topNode),e=this.handles&&this.handles.length>0?this.values[this.handles[this.handles.length-1]]:this.values[this.values.length-1],"object"==typeof e&&(e=e.value),this.showRatioLabels&&(e=this._getLabelValueFromIndex(this.values.length-1,!0).replace("%",""),o=Number(this._maxRatioLabel.replace("%",""))),this.isDate){t=new a({date:new Date(Number(o)),required:!0,constraints:{min:new Date(e),max:null}},this._topLabelNode);var n={editor:t,editorPropName:"_maximumNumberEditor",spanNode:this._topNodeSpan,operator:"<"};t.on("keydown",_.hitch(this,this._minMaxKeydownDateHandler,n)),t.on("blur",_.hitch(this,this._minMaxBlurDateValue,n)),t.watch("date",_.hitch(this,this._minMaxUpdateDateValue,n))}else{t=new r({value:Number(o),required:!0,constraints:{min:e,max:"percentTotal"===this.showRatioLabels?100:null,places:"0,20"}},this._topLabelNode);var l=!1;d(t,"keydown",_.hitch(this,this._keydownHandler,{editor:t,originalValidate:l})),d(t,"blur",_.hitch(this,this._minMaxBlurHandler,{editor:t,editorPropName:"_maximumNumberEditor",label:s,current:o,spanNode:this._topNodeSpan,index:1,minLabel:i,maxLabel:s,ratioLabel:this._maxRatioLabel})),d(t,"change",_.hitch(this,this._minMaxChangeHandler,{label:s,current:o,spanNode:this._topNodeSpan,index:1,minLabel:i,maxLabel:s,ratioLabel:this._maxRatioLabel,handleValue:e,operator:"<"}))}this._maximumNumberEditor=t,t.startup(),t.focus(),t.textbox.select()}},_generateMinEditor:function(){if(!(this._minimumNumberEditor&&this._botLabelNode||this._isZoomed)){var e,t,i=this.minLabel,s=this.maxLabel,o=this.minimum;if(this._bottomNodeSpan.innerHTML="",this._botLabelNode=b.create("input",{type:"text"},this._botNode),e=this.handles&&this.handles.length>0?this.values[this.handles[0]]:this.values[0],"object"==typeof e&&(e=e.value),this.showRatioLabels&&(e=this._getLabelValueFromIndex(0,!0).replace("%",""),o=Number(this._minRatioLabel.replace("%",""))),this.isDate){t=new a({date:new Date(Number(o)),required:!0,constraints:{min:null,max:new Date(e)}},this._botLabelNode);var n={editor:t,editorPropName:"_minimumNumberEditor",spanNode:this._bottomNodeSpan,operator:">"};t.on("keydown",_.hitch(this,this._minMaxKeydownDateHandler,n)),t.on("blur",_.hitch(this,this._minMaxBlurDateValue,n)),t.watch("date",_.hitch(this,this._minMaxUpdateDateValue,n))}else{t=new r({value:Number(o),required:!0,constraints:{max:e,min:"percentTotal"===this.showRatioLabels?0:null,places:"0,20"}},this._botLabelNode);var l=!1;d(t,"keydown",_.hitch(this,this._keydownHandler,{editor:t,originalValidate:l})),d(t,"blur",_.hitch(this,this._minMaxBlurHandler,{editor:t,editorPropName:"_minimumNumberEditor",label:i,current:o,spanNode:this._bottomNodeSpan,index:0,minLabel:i,maxLabel:s,ratioLabel:this._minRatioLabel})),d(t,"change",_.hitch(this,this._minMaxChangeHandler,{label:i,current:o,spanNode:this._bottomNodeSpan,index:0,minLabel:i,maxLabel:s,ratioLabel:this._minRatioLabel,handleValue:e,operator:">"}))}this._minimumNumberEditor=t,t.startup(),t.focus(),t.textbox.select()}},_minMaxBlurHandler:function(e,t){var i=e.editor,a=e.editorPropName,s=e.label,o=e.current,n=e.spanNode,l=e.index,r=e.minLabel,h=e.maxLabel,d=e.ratioLabel,m=isNaN(s)?s:this._roundValue([r,h])[l],_=isNaN(m)||null===m?s:this._formatValue(m),c=this._formatValue(this._roundedDataLabels[l])||this._formatValue(o);this.showLabels||"object"==typeof this.showLabels&&-1!==u.indexOf(this.showLabels,"data")?this.showRatioLabels?n.innerHTML=d:n.innerHTML=_||c:n.innerHTML="",i.destroy(),this[a]=null},_minMaxChangeHandler:function(e,t){var i,a=e.label,s=e.current,o=e.spanNode,n=e.index,l=e.minLabel,r=e.maxLabel,h=e.ratioLabel,d=e.handleValue,u=e.operator;if(("<"===u?t<Number(d):t>Number(d))||isNaN(t)||void 0===t){var m=isNaN(a)?a:this._roundValue([l,r])[n],c=isNaN(m)||null===m?a:this._formatValue(m),b=this._formatValue(this._roundedDataLabels[n])||this._formatValue(s);return void(this.showRatioLabels?o.innerHTML=h:o.innerHTML=c||b)}i=this.showRatioLabels?this._getValueFromPercent(t):t,o.innerHTML=this.showRatioLabels?i:this._formatValue(t),this.set("<"===u?"maximum":"minimum",i),this._reset(),this._updateRoundedLabels(),this._generateMoveables(),this._generateMinMaxEditors(),this.emit("data-value-change",{min:this.minimum,max:this.maximum,values:_.clone(this.values)})},_minMaxKeydownDateHandler:function(e,t){13===t.keyCode&&e.editor.isValid()&&setTimeout(_.hitch(this,this._destroyMinMaxHandleEditor,e),0)},_minMaxBlurDateValue:function(e,t){setTimeout(_.hitch(this,this._destroyMinMaxHandleEditor,e),0)},_destroyMinMaxHandleEditor:function(e){var t="<"===e.operator?"maximum":"minimum";e.spanNode.innerHTML=this._formatValue(this.get(t)),e.editor.destroy(),this[e.editorPropName]=null},_minMaxUpdateDateValue:function(e){var t=e.editor,i=e.spanNode,a=e.operator,s=t.get("date"),o="<"===a?"maximum":"minimum",n=this.get(o);s=s&&s.getTime();var l=n!==s;l&&(i.innerHTML=this._formatValue(s),this.set(o,s)),this._reset(),this._updateRoundedLabels(),this._generateMoveables(),this._generateMinMaxEditors(),l&&this.emit("data-value-change",{min:this.minimum,max:this.maximum,values:_.clone(this.values)})},_generateHandleLabelEditor:function(e,t){if(!e._numberEditor){var i,s,o,n,l,h,m,c,p=this.get("handles"),L=this.get("maximum"),x=this.get("minimum"),N=this.get("_isZoomed"),g=this.get("values"),v=g[t],f=u.indexOf(p,t),V=e.labelNode,H=!1;if("object"==typeof v&&(v=v.value),V.spanNode.innerHTML="",m=b.create("input",{type:"text"},V),p.length>0?(i=null!==p[f-1]?p[f-1]:null,s=null!==p[f+1]?p[f+1]:null,o=g[i],n=g[s],"object"==typeof o&&(o=o.value),"object"==typeof n&&(n=n.value)):(o=g[t-1],n=g[t+1],"object"==typeof o&&(o=o.value),"object"==typeof n&&(n=n.value)),l=void 0!==o&&null!==o?o:N&&!isNaN(this._minZoomLabel)?this._minZoomLabel:x,h=void 0!==n&&null!==n?n:N&&!isNaN(this._maxZoomLabel)?this._maxZoomLabel:L,this.showRatioLabels&&(v=this._getLabelValueFromIndex(t).replace("%",""),l=o?Number(this._getLabelValueFromIndex(i,!0).replace("%","")):Number(this._minRatioLabel.replace("%",""))||Number(this._getRatioFromValue(this.minimum)),h=n?Number(this._getLabelValueFromIndex(s,!0).replace("%","")):Number(this._maxRatioLabel.replace("%",""))||Number(this._getRatioFromValue(this.maximum))),this.isDate){c=new a({date:new Date(v),required:!0,constraints:{min:new Date(l),max:new Date(h)}},m);var y={editor:c,editorPropName:"_numberEditor",min:x,max:L,index:t,zoomed:N,spanNode:V.spanNode,moveable:e};c.on("keydown",_.hitch(this,this._stopKeydownDateHandler,y)),c.on("blur",_.hitch(this,this._stopBlurDateHandler,y)),c.watch("date",_.hitch(this,this._stopUpdateDateValue,y))}else c=new r({value:v,constraints:{min:l,max:h,places:"0,20"}},m),d(c,"keydown",_.hitch(this,this._keydownHandler,{editor:c,originalValidate:H})),d(c,"blur",_.hitch(this,this._blurHandler,{editor:c,editorPropName:"_numberEditor",updatedValue:v,min:x,max:L,index:t,zoomed:N,spanNode:V.spanNode,moveable:e})),d(c,"change",_.hitch(this,this._changeHandler,{editor:c,index:t,spanNode:V.spanNode}));e._numberEditor=c,c.focus(),c.textbox.select()}},_keydownHandler:function(e,t){var i=e.originalValidate,a=e.editor;if(i!==!1&&(a.validate=i),13===t.keyCode){var s=a.get("value");void 0===s&&(s=a.get("displayedValue")),s<=a.constraints.max&&s>=a.constraints.min?a.focusNode.blur():(i=a.validate,a.validate(!1),a.validate=function(){return!1})}},_blurHandler:function(e,t){var i=e.editor,a=e.editorPropName,s=e.updatedValue,o=e.min,n=e.max,l=e.index,r=e.zoomed,h=e.spanNode,d=e.moveable;isNaN(i.get("value"))&&i.set("value",s),r&&(i.get("value")>n||i.get("value")<o)&&(this.set("_isZoomed",!1),this.emit("zoom-out")),h.innerHTML=this._getLabelValueFromIndex(l),i.destroy(),d[a]=null},_changeHandler:function(e,t){var i=e.editor,a=e.index,s=e.spanNode,o=t;return t>i.constraints.max||t<i.constraints.min||isNaN(t)||void 0===t?void(s.innerHTML=this._getLabelValueFromIndex(a)):(this.showRatioLabels&&(o=this._getValueFromPercent(t)),"object"==typeof this.values[a]?this.values[a].value=o:this.values[a]=o,this._reset(),this._updateRoundedLabels(),this._generateMoveables(),this._generateMinMaxEditors(),void this.emit("handle-value-change",{values:this.values}))},_stopKeydownDateHandler:function(e,t){13===t.keyCode&&e.editor.isValid()&&setTimeout(_.hitch(this,this._destroyHandleEditor,e),0)},_stopBlurDateHandler:function(e,t){setTimeout(_.hitch(this,this._destroyHandleEditor,e),0)},_destroyHandleEditor:function(e){e.spanNode.innerHTML=this._getLabelValueFromIndex(e.index),e.editor.destroy(),e.moveable[e.editorPropName]=null},_stopUpdateDateValue:function(e){var t=e.editor,i=e.min,a=e.max,s=e.index,o=e.zoomed,n=e.spanNode,l=t.get("date");l=l&&l.getTime(),o&&(l>a||i>l)&&(this.set("_isZoomed",!1),this.emit("zoom-out"));var r="object"==typeof this.values[s]?this.values[s].value:this.values[s],h=r!==l;h&&("object"==typeof this.values[s]?this.values[s].value=l:this.values[s]=l),n.innerHTML=this._getLabelValueFromIndex(s),this._reset(),this._updateRoundedLabels(),this._generateMoveables(),this._generateMinMaxEditors(),h&&this.emit("handle-value-change",{values:this.values})},_getRatioFromValue:function(e){var t,i=this.get("showRatioLabels");return t="percent"===i?100*e:"percentTotal"===i?e/(1+e)*100:null},_getValueFromPercent:function(e){var t,i=this.get("showRatioLabels");if("percent"===i)t=e/100;else if("percentTotal"===i){if(e>=100)return 100;t=e/(100-e)}return t},_getLabelValueFromIndex:function(e,t){var i;return i=this.showRatioLabels&&this._ratioLabels[e]?t===!0?parseFloat(this._ratioLabels[e].toFixed(2))+"%":this._formatValue(parseFloat(this._ratioLabels[e].toFixed(2)))+"%":t===!0?this._roundedHandleLabels[e]:this._formatValue(this._roundedHandleLabels[e])},_getValuesFromObject:function(e){var t=[];return u.forEach(e,function(e){t.push(e.value)}),t},_getDecimalPlaces:function(e){return N.format(e,{places:"0,20",round:-1}).replace(/^-?\d*\.?|0+$/g,"").length},_collisionCheck:function(e,t){return!(e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)},_generateCtrlKeyListener:function(){d(document,"keydown",_.hitch(this,function(e){this._ctrlDown=e.metaKey||e.ctrlKey})),d(document,"keyup",_.hitch(this,function(e){this._ctrlDown=e.metaKey||e.ctrlKey}))},_valuesChange:function(){this.emit("change",{values:this.get("values")})}});return g("extend-esri")&&_.setObject("dijit.RendererSlider",f,e),f});