// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","esri/dijit/geoenrichment/utils/DomUtil"],(function(i,t,e,s){return i(null,{showAreaTitle:!1,stretchToolbarNode:null,domNode:null,infographicsSelectDiv:null,areaTitleDiv:null,areaTitleInnerDiv:null,rightSideControlsBlock:null,areasSelectDiv:null,zoomSelectDiv:null,pageSelectDiv:null,commandButtonsContainer:null,constructor:function(i){t.mixin(this,i)},arrangeControls:function(){s[this.infographicsSelectDiv.children.length>0?"show":"hide"](this.infographicsSelectDiv),s[this.showAreaTitle?"show":"hide"](this.areaTitleDiv),this.domNode.style.width="",this.areaTitleDiv.style.marginLeft="",this.areaTitleInnerDiv.style.maxWidth="",this.rightSideControlsBlock.style.position=this.stretchToolbarNode?"absolute":"static",this.stretchToolbarNode&&(this.domNode.style.width=this.stretchToolbarNode.clientWidth+"px",this._processStretchSpecialCases(this.stretchToolbarNode)),this.syncRightSideVisibility()},_processStretchSpecialCases:function(i){function t(i){return s.isHidden(i)?0:i.clientWidth+o(i)}function o(i){return s.isHidden(i)?0:e.get(i,"marginLeft")+e.get(i,"marginRight")}if(this.showAreaTitle){var l=i.clientWidth;l-=t(this.infographicsSelectDiv),l-=t(this.rightSideControlsBlock),l-=t(this.areasSelectDiv),l-=o(this.areaTitleDiv),this.areaTitleInnerDiv.style.maxWidth=l+"px",s.isHidden(this.infographicsSelectDiv)||s.isHidden(this.infographicsSelectDiv)||(this.areaTitleDiv.style.marginLeft=Math.min(l-this.areaTitleDiv.clientWidth,(this.domNode.clientWidth-this.areaTitleDiv.clientWidth)/2-t(this.infographicsSelectDiv))+"px")}},hasVisibleControls:function(){return[this.infographicsSelectDiv,this.areaTitleDiv,this.areasSelectDiv,this.pageSelectDiv,this.zoomSelectDiv,this.commandButtonsContainer].some(s.isNodeInLayout)},syncRightSideVisibility:function(){s.show(this.rightSideControlsBlock);var i=[this.pageSelectDiv,this.zoomSelectDiv,this.commandButtonsContainer].some(s.isNodeInLayout);s[i?"show":"hide"](this.rightSideControlsBlock)}})}));