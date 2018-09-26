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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../utils/ChartTypes","esri/dijit/geoenrichment/utils/DomUtil"],function(e,i,t,n,l,s,o){return e(null,{lineContainerNode:null,_levelLineDiv:null,constructor:function(e){i.mixin(this,e)},supportsLevelLine:function(e){return e===s.COLUMN||e===s.BAR||s.isLineLike(e)},showLevelLine:function(e,i,t,n,h){var v=e.calculateGeometry(),r=o.position(i),L=o.position(v.node),a=l.get(v.node,"width"),d=l.get(v.node,"height"),_=o.position(this.lineContainerNode);switch(this._updateLine(n),n?l.set(this._levelLineDiv,{left:L.x-_.x+v.offsets.l+"px",width:a-v.offsets.l-v.offsets.r+"px"}):l.set(this._levelLineDiv,{top:L.y-_.y+v.offsets.t+"px",height:d-v.offsets.t-v.offsets.b+"px"}),t){case s.COLUMN:l.set(this._levelLineDiv,{top:(h?r.y+r.h-_.y:r.y-_.y-1)+"px"});break;case s.BAR:l.set(this._levelLineDiv,{left:(h?r.x-_.x:r.x+r.w-_.x)+"px"});break;case s.LINE:n?l.set(this._levelLineDiv,{top:r.y+r.h/2-_.y-1+"px"}):l.set(this._levelLineDiv,{left:r.x+.5*r.w-_.x+"px"});break;case s.VERTICAL_LINE:l.set(this._levelLineDiv,{left:r.x+.5*r.w-_.x+"px"})}this._checkLineOutOfSight(n,a,d)},hideLevelLine:function(){o.hide(this._levelLineDiv)},_updateLine:function(e,i){this._levelLineDiv||(this._levelLineDiv=n.create("div",null,this.lineContainerNode)),t.remove(this._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineH esriGEReportPlayer_chartContainerLevelLineV"),e?t.add(this._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineH"):t.add(this._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineV"),o.show(this._levelLineDiv),l.set(this._levelLineDiv,{left:"",top:"",width:"",height:""})},_checkLineOutOfSight:function(e,i,t){if(e){var n=l.get(this._levelLineDiv,"top");o[n<0||n>t?"hide":"show"](this._levelLineDiv)}else{var s=l.get(this._levelLineDiv,"left");o[s<0||s>i?"hide":"show"](this._levelLineDiv)}}})});