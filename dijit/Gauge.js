// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/number","dojo/has","dojo/text!./templates/Gauge.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/widget/AnalogGauge","dojox/widget/gauge/AnalogArcIndicator","../kernel"],function(t,e,a,i,s,o,n,h,d,r,u,l,g,c){var p=t([r,u],{declaredClass:"esri.dijit.Gauge",templateString:d,widgetsInTemplate:!1,constructor:function(t,a){this.caption="&nbsp;",this.color="#000",this.dataFormat="value",this.maxDataValue=100,this.title="&nbsp;",this.unitLabel="",this.fromWebmap=!1,this.feature=null,this.dataLabel="&nbsp;",e.mixin(this,t),this._majorTicks="",this.value=0,this.numberFormat=this.numberFormat||{places:0},this.fromWebmap&&(this.dataField=this.field,this.dataFormat=this.valueLabel,this.dataLabelField=this.displayField,this.maxDataValue=this.target,this.unitLabel=""),"percentage"==this.dataFormat&&(this.unitLabel="%",this._majorTicks={offset:90,interval:25,length:3,color:"black"}),this.watch("caption",this._updateCaption),this.watch("dataLabel",this._updateDataLabel),this.watch("title",this._updateTitle),this.watch("value",this._updateValue),this.watch("feature",this._updateFeature)},startup:function(){this.inherited(arguments);var t=new g({interactionMode:"indicator",noChange:!0,value:this.maxDataValue,width:20,offset:65,color:[204,204,204,1],title:"value",hideValue:!0,duration:100}),e=new g({interactionMode:"indicator",noChange:!1,value:this.value,width:20,offset:65,color:this.color,title:"value",hideValue:!0,onDragMove:"",duration:100});this.gaugeWidget=new l({background:[204,204,204,0],width:parseInt(this.gaugeNode.style.width),height:parseInt(this.gaugeNode.style.height)+10,cx:parseInt(this.gaugeNode.style.width)/2,cy:parseInt(this.gaugeNode.style.height),style:"position: absolute;",radius:parseInt(this.gaugeNode.style.width)/2,useTooltip:!1,ranges:[{low:0,high:this.maxDataValue,color:"rgba(255,0,0,0)"}],majorTicks:this._majorTicks,indicators:[t,e]},i.create("div",null,this.gaugeNode)),this.gaugeWidget.startup(),this.gaugeWidget._handleMouseDownIndicator=function(){},this.valueNode=i.create("div",{innerHTML:"0"+this.unitLabel,style:{bottom:parseInt(this.gaugeNode.style.height)-(this.gaugeWidget.cy-20)+"px",color:"#000","font-family":"arial","font-size":"1em",left:"-1000px",position:"absolute"}},this.gaugeWidget.domNode);var a=s.getContentBox(this.valueNode);o.set(this.valueNode,"left",this.gaugeWidget.cx+"px"),o.set(this.valueNode,"marginLeft",-a.w/2+"px"),this.gaugeWidget.cx&&o.set(this.valueNode,"marginBottom",-a.h/2+"px"),this.layer&&this._connectMouseOver()},destroy:function(){this._mouseOverHandler&&a.disconnect(this._mouseOverHandler),this.gaugeWidget.destroy(),i.empty(this.domNode)},_connectMouseOver:function(){this._mouseOverHandler=a.connect(this.layer,"onMouseOver",e.hitch(this,function(t){this.set("feature",t)}))},_formatValue:function(t){return"percentage"===this.dataFormat&&(t=Math.round(t/this.maxDataValue*100)),n.format(t,this.numberFormat)},_updateCaption:function(t,e,a){this.captionNode.innerHTML=a},_updateTitle:function(t,e,a){this.titleNode.innerHTML=a},_updateValue:function(t,e,a){var i=this._formatValue(a);this.valueNode.innerHTML=i+this.unitLabel,"percentage"===this.dataFormat?this.gaugeWidget.indicators[1].update(parseInt(i)):this.gaugeWidget.indicators[1].update(parseInt(a))},_updateDataLabel:function(t,e,a){this.dataLabelNode.innerHTML=a},_updateFeature:function(t,e,a){if(!a||a.hasOwnPropety&&!a.hasOwnProperty("graphic")&&"esri.Graphic"==!a.declaredClass)return void console.log("Gauge Dijit:  a graphic is required to update the gauge.");this.feature=a.graphic||a,this.set("value",this.feature.attributes[this.dataField]||0),this.set("dataLabel",this.feature.attributes[this.dataLabelField]||this.noDataLabel)}});return h("extend-esri")&&e.setObject("dijit.Gauge",p,c),p});