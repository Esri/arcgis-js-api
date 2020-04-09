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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/animation/AnimationUtil"],(function(i,e,t,l,a){return i(null,{dataDrillingViewDiv:null,drilledDataViewDiv:null,drilledDataViewDivScaler:null,mainViewDiv:null,domNode:null,constructor:function(i){e.mixin(this,i)},play:function(i,e){var n=this;function d(){i?(l.show(n.dataDrillingViewDiv),l.hide(n.mainViewDiv)):(l.show(n.mainViewDiv),l.hide(n.dataDrillingViewDiv)),t[i?"add":"remove"](n.domNode,"isDrillingData"),t.remove(n.domNode,"isShowingAnimation")}if(t.add(this.domNode,"isShowingAnimation"),t.add(this.dataDrillingViewDiv,"isSlideAnimation esriGEAbsoluteStretched"),e){l.show([this.mainViewDiv,this.dataDrillingViewDiv]);var s=this.getDataDrillingPanelDimensions(),r=(this.getSection(),s.scale||1);return this.drilledDataViewDiv.style.width=s.w*r+"px",this.drilledDataViewDiv.style.height=s.h*r+"px",this.drilledDataViewDivScaler.style.position="absolute",this.drilledDataViewDivScaler.style.left="0px",this.drilledDataViewDivScaler.style.top="0px",this.drilledDataViewDivScaler.style.overflow="visible",this.drilledDataViewDivScaler.style.transformOrigin="0 0",this.drilledDataViewDivScaler.style.transform="scale("+r+")",this.drilledDataViewDivScaler.style["webkit-transform"]="scale("+r+")",a.animateSlide(this.mainViewDiv,this.dataDrillingViewDiv,{leftToRight:i,width:this.domNode.clientWidth,onEnd:d})}d()},getDataDrillingPanelDimensions:function(){return null},getSection:function(){return null}})}));