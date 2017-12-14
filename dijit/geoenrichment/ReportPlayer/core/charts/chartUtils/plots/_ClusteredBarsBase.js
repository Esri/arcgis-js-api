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

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","dojox/charting/plot2d/CartesianBase","dojox/charting/plot2d/_PlotEvents","dojox/charting/plot2d/common","dojox/lang/utils","dojox/lang/functional","dojox/lang/functional/reversed","./labelsRendering/_BarsLabelRenderingFix","./animation/_ClusteredBarsAnimation","./_MinVisibleBar"],function(t,e,i,a,r,s,n,o,h,l,c,d,u){var p=l.lambda("item.purgeGroup()");return i("dojox.charting.plot2d.Bars",[r,s,c,d,u],{_animationInfos:null,defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelHorizontalAlign:null},constructor:function(e,i){this.opt=t.clone(t.mixin(this.opt,this.defaultParams)),o.updateWithObject(this.opt,i),o.updateWithPattern(this.opt,i,this.optionalParams),this.animate=this.opt.animate,this.renderingOptions={"shape-rendering":"crispEdges"}},getSeriesStats:function(){var t,e=n.collectSimpleStats(this.series,function(t){return null==t});return e.hmin-=.5,e.hmax+=.5,t=e.hmin,e.hmin=e.vmin,e.vmin=t,t=e.hmax,e.hmax=e.vmax,e.vmax=t,e},render:function(t,i){if(this.zoom&&!this.isDataDirty())return this.performZoom(t,i);this.dirty=this.isDirty(),this.resetEvents();var r;this.dirty&&(e.forEach(this.series,p),this._eventSeries={},this.cleanGroup(),r=this.getGroup(),h.forEachRev(this.series,function(t){t.cleanGroup(r)}));var s=this.chart.theme,n=this._hScaler.scaler.getTransformerFromModel(this._hScaler),o=this._vScaler.scaler.getTransformerFromModel(this._vScaler),l=Math.max(0,this._hScaler.bounds.lower),c=n(l),d=this.events(),u=this.getBarProperties(),m=this.series.length;e.forEach(this.series,function(t){t.hidden&&m--});var f=m;this._animationInfos=[];for(var g=this.series.length-1;g>=0;--g){var v=this.series[g];if(this.dirty||v.dirty){v.cleanGroup(),this.opt.enableCache&&(v._rectFreePool=(v._rectFreePool?v._rectFreePool:[]).concat(v._rectUsePool?v._rectUsePool:[]),v._rectUsePool=[]);var y=s.next("bar",[this.opt,v]);if(v.hidden)v.dyn.fill=y.series.fill,v.dyn.stroke=y.series.stroke;else{f--;var _=new Array(v.data.length);r=v.group;for(var x=e.some(v.data,function(t){return"number"==typeof t||t&&!t.hasOwnProperty("x")}),b=x?Math.max(0,Math.floor(this._vScaler.bounds.from-1)):0,S=x?Math.min(v.data.length,Math.ceil(this._vScaler.bounds.to)):v.data.length,P=b;S>P;++P){var j=v.data[P];if(null!=j){var B,F=this.getValue(j,P,g,x),M=n(F.y),E=Math.abs(M-c);if(this.opt.styleFunc||"number"!=typeof j){var w="number"!=typeof j?[j]:[];this.opt.styleFunc&&w.push(this.opt.styleFunc(j)),B=s.addMixin(y,"bar",w,!0)}else B=s.post(y,"bar");if(E>=0&&u.height>=1){var z={x:i.l+(F.y<l?M:c),y:t.height-i.b-o(F.x+1.5)+u.gap+u.thickness*(m-f-1),width:E,height:u.height},k=this._drawBar(r,j,z,B,t,i,v),C=k.shape;if(z=k.rect,d){var G={element:"bar",index:P,run:v,shape:C,cx:F.y,cy:F.x+1.5,x:x?P:v.data[P].x,y:x?v.data[P]:v.data[P].y};this._connectEvents(G),_[P]=G}if(!isNaN(F.py)&&F.py>l&&(z.x+=n(F.py),z.width-=n(F.py)),this.createLabel(r,j,z,B,t,i),this.animate){var O={shape:C,hoffset:i.l+c,hsize:-E};this._animationInfos.push(O),this._animateBar(O)}}}}this._eventSeries[v.name]=_,v.dirty=!1}}else s.skip(),this._reconnectEvents(v.name)}return this.dirty=!1,a("dojo-bidi")&&this._checkOrientation(this.group,t,i),this},_drawBar:function(t,e,i,a,r,s,n){},getValue:function(t,e,i,a){var r,s;return a?(r="number"==typeof t?t:t.y,s=e):(r=t.y,s=t.x-1),{y:r,x:s}},getBarProperties:function(){var t=this.series.length;e.forEach(this.series,function(e){e.hidden&&t--});var i=n.calculateBarSize(this._vScaler.bounds.scale,this.opt,t);return{gap:i.gap,height:i.size,thickness:i.size}}})});