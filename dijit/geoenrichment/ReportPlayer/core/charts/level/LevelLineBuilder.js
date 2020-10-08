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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../utils/ChartTypes","esri/dijit/geoenrichment/utils/DomUtil"],(function(e,i,t,n,o,s,r){var l=function(e,i){t.remove(e,"esriGEReportPlayer_chartContainerLevelLineH esriGEReportPlayer_chartContainerLevelLineV"),i?t.add(e,"esriGEReportPlayer_chartContainerLevelLineH"):t.add(e,"esriGEReportPlayer_chartContainerLevelLineV"),r.show(e),o.set(e,{pointerEvents:"none",left:"",top:"",width:"",height:""})};return e(null,{lineContainerNode:null,_levelLineDiv:null,_secondaryLineDiv:null,constructor:function(e){i.mixin(this,e)},supportsLevelLine:function(e){return e===s.COLUMN||e===s.BAR||s.isLineLike(e)},showLevelLine:function(e,i,t,o,r){this._levelLineDiv=this._levelLineDiv||n.create("div",null,this.lineContainerNode),this._drawLine(this._levelLineDiv,e,i,t,o,r),s.isLineLike(t)&&(this._secondaryLineDiv=this._secondaryLineDiv||n.create("div",null,this.lineContainerNode),this._drawLine(this._secondaryLineDiv,e,i,t,!o,r))},_drawLine:function(e,i,t,n,a,f){var h=i.calculateGeometry(),d=r.noTransformPosition(t),L=r.noTransformPosition(h.node),c=o.get(h.node,"width"),v=o.get(h.node,"height"),p=r.noTransformPosition(this.lineContainerNode);switch(l(e,a),n){case s.COLUMN:a&&o.set(e,{top:(f?d.y+d.h-p.y:d.y-p.y-1)+"px",left:L.x-p.x+h.offsets.l+"px",width:c-h.offsets.l-h.offsets.r+"px"});break;case s.BAR:a||o.set(e,{left:(f?d.x-p.x:d.x+d.w-p.x)+"px",top:L.y-p.y+h.offsets.t+"px",height:v-h.offsets.t-h.offsets.b+"px"});break;case s.LINE:case s.VERTICAL_LINE:a?o.set(e,{top:d.y+d.h/2-p.y-1+"px",left:L.x-p.x+h.offsets.l+"px",width:c-h.offsets.l-h.offsets.r+"px"}):o.set(e,{left:d.x+.5*d.w-p.x+"px",top:L.y-p.y+h.offsets.t+"px",height:v-h.offsets.t-h.offsets.b+"px"})}},hideLevelLine:function(){r.hide([this._levelLineDiv,this._secondaryLineDiv])}})}));