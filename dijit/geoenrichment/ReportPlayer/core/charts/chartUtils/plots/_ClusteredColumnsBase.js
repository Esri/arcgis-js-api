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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","dojox/charting/plot2d/CartesianBase","dojox/charting/plot2d/_PlotEvents","dojox/charting/plot2d/common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","./labelsRendering/_ColumnsLabelRenderingFix","./animation/_ClusteredColumnsAnimation","./_MinVisibleColumn"],function(t,e,i,a,s,n,r,o,h,l,c,u,d){var m=h.lambda("item.purgeGroup()");return i("dojox.charting.plot2d.Columns",[s,n,c,u,d],{_animationInfos:null,defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelHorizontalAlign:null},constructor:function(e,i){this.opt=t.clone(t.mixin(this.opt,this.defaultParams)),l.updateWithObject(this.opt,i),l.updateWithPattern(this.opt,i,this.optionalParams),this.animate=this.opt.animate,this.renderingOptions={"shape-rendering":"crispEdges"}},getSeriesStats:function(){var t=r.collectSimpleStats(this.series,function(t){return null==t});return t.hmin-=.5,t.hmax+=.5,t},render:function(t,i){if(this.zoom&&!this.isDataDirty())return this.performZoom(t,i);this.resetEvents(),this.dirty=this.isDirty();var s;this.dirty&&(e.forEach(this.series,m),this._eventSeries={},this.cleanGroup(),s=this.getGroup(),o.forEachRev(this.series,function(t){t.cleanGroup(s)}));var n=this.chart.theme,r=this._hScaler.scaler.getTransformerFromModel(this._hScaler),h=this._vScaler.scaler.getTransformerFromModel(this._vScaler),l=Math.max(0,this._vScaler.bounds.lower),c=h(l),u=this.events(),d=this.getBarProperties(),p=this.series.length;e.forEach(this.series,function(t){t.hidden&&p--}),this._animationInfos=[];for(var f=this.series.length-1;f>=0;--f){var g=this.series[f];if(this.dirty||g.dirty){g.cleanGroup(),this.opt.enableCache&&(g._rectFreePool=(g._rectFreePool?g._rectFreePool:[]).concat(g._rectUsePool?g._rectUsePool:[]),g._rectUsePool=[]);var y=n.next("column",[this.opt,g]),_=new Array(g.data.length);if(g.hidden)g.dyn.fill=y.series.fill;else{p--,s=g.group;for(var v=e.some(g.data,function(t){return"number"==typeof t||t&&!t.hasOwnProperty("x")}),x=v?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,b=v?Math.min(g.data.length,Math.ceil(this._hScaler.bounds.to)):g.data.length,S=x;b>S;++S){var P=g.data[S];if(null!=P){var j,C=this.getValue(P,S,f,v),w=h(C.y),F=Math.abs(w-c);if(this.opt.styleFunc||"number"!=typeof P){var M="number"!=typeof P?[P]:[];this.opt.styleFunc&&M.push(this.opt.styleFunc(P)),j=n.addMixin(y,"column",M,!0)}else j=n.post(y,"column");if(d.width>=1&&F>=0){var z={x:i.l+r(C.x+.5)+d.gap+d.thickness*p,y:t.height-i.b-(C.y>l?w:c),width:d.width,height:F},E=this._drawColumn(s,P,z,j,t,i,g),B=E.shape;if(z=E.rect,u){var k={element:"column",index:S,run:g,shape:B,cx:C.x+.5,cy:C.y,x:v?S:g.data[S].x,y:v?g.data[S]:g.data[S].y};this._connectEvents(k),_[S]=k}if(!isNaN(C.py)&&C.py>l&&(z.height=w-h(C.py)),this.createLabel(s,P,z,j),this.animate){var G={shape:B,voffset:t.height-i.b-c,vsize:F};this._animationInfos.push(G),this._animateColumn(G)}}}}this._eventSeries[g.name]=_,g.dirty=!1}}else n.skip(),this._reconnectEvents(g.name)}return this.dirty=!1,a("dojo-bidi")&&this._checkOrientation(this.group,t,i),this},_drawColumn:function(t,e,i,a,s,n,r){},getValue:function(t,e,i,a){var s,n;return a?(s="number"==typeof t?t:t.y,n=e):(s=t.y,n=t.x-1),{x:n,y:s}},getBarProperties:function(){var t=this.series.length;e.forEach(this.series,function(e){e.hidden&&t--});var i=r.calculateBarSize(this._hScaler.bounds.scale,this.opt,t);return{gap:i.gap,width:i.size,thickness:i.size,clusterSize:t}}})});