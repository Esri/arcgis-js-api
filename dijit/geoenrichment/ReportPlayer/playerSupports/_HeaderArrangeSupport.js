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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/when","dojo/dom-geometry","dojo/dom-style","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/TooltipUtil"],function(i,e,t,o,s,n){return i(null,{_getTitleLeftPadding:function(){return 50},_arrangeHeaderControls:function(){s.show(this.playerHeader),s.hide(this.infographicsSelectDiv),s[this.showAreaTitle?"show":"hide"](this.areaTitleInnerDiv);var i=t.position(this.commandButtonsContainer);if(o.set(this.zoomPageBlockDiv,"right",(i.w?document.body.clientWidth-i.x+50:10)+"px"),this.showAreaTitle){o.set(this.areasSelectDiv,"left",t.position(this.zoomPageBlockDiv).x-t.position(this.areasSelectDiv).w-50+"px"),o.set(this.areaTitleInnerDiv,{position:"",right:"",width:""});var e=s.isHidden(this.areasSelectDiv)?this.zoomPageBlockDiv:this.areasSelectDiv,r=t.position(e),a=this.isSlidesView?1e6:r.x-50,h=a-this._getTitleLeftPadding(),l=t.position(this.areaTitleInnerDiv);l.w>h?(o.set(this.areaTitleInnerDiv,"width",h+"px"),l=t.position(this.areaTitleInnerDiv),n.setTooltipToNode(this.areaTitleInnerDiv,this.areaTitleInnerDiv.innerHTML)):n.setTooltipToNode(this.areaTitleInnerDiv,null);var d=l.x+l.w;d>a&&o.set(this.areaTitleInnerDiv,{position:"relative",right:d-a+"px"})}else o.set(this.areasSelectDiv,"left","20px")},resize:function(){return e(this.inherited(arguments),function(){this._arrangeHeaderControls()}.bind(this))}})});