// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/declare","dojox/charting/plot2d/Base","dojox/charting/plot2d/_PlotEvents","dojox/charting/plot2d/common","dojox/lang/utils","../animation/_WaffleAnimation","../labelsRendering/LabelsUtil","./_LabelRenderer","./_ShapeRenderer"],(function(t,e,n,i,s,a,r,h,l,u){var o=e([n,i,r],{defaultParams:{animate:null},optionalParams:{labelFunc:null},valueLabelElements:null,dataLabelElements:null,_animationInfos:null,constructor:function(e,n){this.opt=t.clone(this.defaultParams),a.updateWithObject(this.opt,n),a.updateWithPattern(this.opt,n,this.optionalParams),this.run=null,this.dyn=[],this.runFilter=[]},clear:function(){return this.inherited(arguments),this.dyn=[],this.run=null,this},setAxis:function(t){return this},addSeries:function(t){return this.run=t,this},getSeriesStats:function(){return t.delegate(s.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},render:function(t,e){if(!this.dirty)return this;this.resetEvents(),this.dirty=!1,this._eventSeries={},this.cleanGroup();var n=this.group,i=this.chart.theme,s=this.events();if(this._animationInfos=[],!this.run||!this.run.data.length)return this;var a=this.run.data;this.valueLabelElements=[],this.dataLabelElements=[];var r=l.renderLabels(this,a,t,e,i),h=u.renderShape(a,i,n,r,this._animationInfos)(1);return s&&h.shapes.forEach((function(t,e){var n={element:"slice",index:e,run:this.run,shape:t};this._connectEvents(n),this._eventSeries[e]=n}),this),this.opt.animate&&this._renderAnimation(n),this},renderLabel:function(t,e,n){var i=this,s=h.renderHTMLLabel(this.chart,t.x,t.y,t.text);return this.htmlElements.push(s),e?(this.valueLabelElements.push(s),this.opt.animate&&this._animationInfos.push({isLabel:!0,func:function(e){return h.renderHTMLLabel(i.chart,t.x,t.y,n(e))}})):this.dataLabelElements.push(s),s}});return o.DEFAULT_ICON_SIZE=u.DEFAULT_ICON_SIZE,o}));