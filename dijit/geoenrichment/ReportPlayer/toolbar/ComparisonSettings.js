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

define(["dojo/_base/declare","esri/dijit/geoenrichment/TriStateItem","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/NodeLabelEditor","esri/dijit/geoenrichment/utils/TooltipUtil","dojo/text!../templates/ComparisonSettings.html","dojo/i18n!esri/nls/jsapi"],function(t,o,i,e,n,s,l,a,h){h=h.geoenrichment.dijit.ReportPlayer.PlayerToolbar;return t([i,e],{templateString:a,nls:h,player:null,showBackgroundImageCheckbox:null,splitPanelsCheckbox:null,postCreate:function(){var t=this;this.inherited(arguments),this.showBackgroundImageCheckbox=new o(this.showBackgroundImageLabel),this.showBackgroundImageCheckbox.onClick=function(){t._onChange()},this.splitPanelsCheckbox=new o(this.splitPanelsLabel),this.splitPanelsCheckbox.onClick=function(){t._update(),t._onChange()},l.setTooltipToNode(this.splitPanelsInfoIcon,h.splitPanelsTooltip);var i=this.player.nlsMap&&this.player.nlsMap.zoomPanelsTooltip||h.zoomPanelsTooltip;n[i?"show":"hide"](this.zoomPanelsInfoIcon),l.setTooltipToNode(this.zoomPanelsInfoIcon,i),this._initZoomControls(),this._initZoomSplitControls()},_zoomEditor:null,_zoom:0,_initZoomControls:function(){var t=this;this._zoomEditor=new s({numericOnly:!0,onApply:function(o){t._setZoom(o)},onCancel:function(){t._updateZoomLabel()}}),this.zoomLabel.addEventListener("click",function(){t._zoomEditor.range={min:10,max:500},t._zoomEditor.editNodeLabel(t.zoomLabel,t._zoom)}),this.zoomOutButton.addEventListener("click",function(){t._setZoom(Math.max(10,t._zoom-10))}),this.zoomInButton.addEventListener("click",function(){t._setZoom(Math.min(500,t._zoom+10))}),this.resetButton.addEventListener("click",function(){t._setZoom(100)})},_setZoom:function(t,o){t=Math.round(t),this._zoom!==t&&(this._zoom=t,this._updateZoomLabel(),this._update(),!o&&this._onChange())},_updateZoomLabel:function(){this.zoomLabel.innerHTML=this._zoom+"%"},_zoomSplitEditor:null,_zoomSplit:0,_initZoomSplitControls:function(){var t=this;this._zoomSplitEditor=new s({numericOnly:!0,onApply:function(o){t._setZoomSplit(o)},onCancel:function(){t._updateZoomSplitLabel()}}),this.zoomSplitLabel.addEventListener("click",function(){t._zoomSplitEditor.range={min:10,max:500},t._zoomSplitEditor.editNodeLabel(t.zoomSplitLabel,t._zoomSplit)}),this.zoomOutSplitButton.addEventListener("click",function(){t._setZoomSplit(Math.max(10,t._zoomSplit-10))}),this.zoomInSplitButton.addEventListener("click",function(){t._setZoomSplit(Math.min(500,t._zoomSplit+10))}),this.resetSplitButton.addEventListener("click",function(){t._setZoomSplit(100)})},_setZoomSplit:function(t,o){t=Math.round(t),this._zoomSplit!==t&&(this._zoomSplit=t,this._updateZoomSplitLabel(),this._update(),!o&&this._onChange())},_updateZoomSplitLabel:function(){this.zoomSplitLabel.innerHTML=this._zoomSplit+"%"},_update:function(){this.resetButton.style.visibility=100===this._zoom?"hidden":"visible",this.resetSplitButton.style.visibility=100===this._zoomSplit?"hidden":"visible",n.hide([this.zoomBlock,this.zoomSplitBlock]),n.show(this.splitPanelsCheckbox.get("checked")?this.zoomSplitBlock:this.zoomBlock)},setSettings:function(t){this.showBackgroundImageCheckbox.set("checked",!t.hideBackgroundImage),this.splitPanelsCheckbox.set("checked",t.splitPanels),this._setZoom(100*(t.scale||1),!0),this._setZoomSplit(100*(t.scaleSplit||1),!0),this._update()},getSettings:function(){return{hideBackgroundImage:!this.showBackgroundImageCheckbox.get("checked"),splitPanels:this.splitPanelsCheckbox.get("checked"),scale:this._zoom/100,scaleSplit:this._zoomSplit/100}},_onChange:function(){this._update(),this.onChange()},onChange:function(){}})});