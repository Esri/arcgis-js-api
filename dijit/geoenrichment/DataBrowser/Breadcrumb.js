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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/fx","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","esri/dijit/geoenrichment/when","dojox/mvc/Templated","dojo/text!./templates/Breadcrumb.html","./VariableUtil"],function(t,n,e,i,a,o,s,c,l,r){return t(c,{templateString:l,flyAnim:null,selectCategory:function(t){this._lastDataCollection?this._updateDataCollection():this.clearSelection(),t&&this._selectCategory(t,n.hitch(this,this._updateCategory))},selectDataCollection:function(t,e){e?this._updateConnectionLine("Breadcrumb_Connect"):this.clearSelection();var i=this;this._selectCategory(e,function(e){i._updateCategory(e,!0),s(t,n.hitch(i,i._updateDataCollection))})},_selectCategory:function(t,n){var e=this;s(t,function(t){s(e.flyAnim.progress,function(){n(t)})})},clearSelection:function(){this._updateCategory(),this._updateDataCollection()},_categoryClickAllowed:!1,_lastCategory:null,_lastDataCollection:null,_updateCategory:function(t,n){this._categoryClickAllowed=n,this._lastCategory=t,t&&(this.dcIcon.className="Breadcrumb_DataCollections",this._updateCategoryIcon(this.dcIcon,t),i[n?"add":"remove"](this.dcIcon,"DataBrowser_Clickable"),n||this._updateConnectionLine("Breadcrumb_ConnectDC")),this.dcIcon.style.display=t?"":"none"},_getCategoryImageClass:function(t){return r.getCategoryImageClass(t)},_updateCategoryIcon:function(t,n){i.add(t,this._getCategoryImageClass(n))},_updateDataCollection:function(t){this._lastDataCollection=t,t&&(i[this._lastCategory?"remove":"add"](this.varsNode,"Breadcrumb_VariablesNoDC"),this.varsLabel.innerHTML=t.title),this.varsNode.style.display=t?"":"none";var n;n=t?this._lastCategory?"Breadcrumb_ConnectDCVars":"Breadcrumb_ConnectVars":this._lastCategory?"Breadcrumb_Connect":"",this._updateConnectionLine(n)},_updateConnectionLine:function(t){if(this._stopAnimation(),t){var n="Breadcrumb_Connect"==t;i.replace(this.connect,t,"Breadcrumb_Connect Breadcrumb_ConnectDC Breadcrumb_ConnectDCVars Breadcrumb_ConnectVars"),this.connect.style.display="",this._animateConnect(o.getContentBox(this.connect),n)}else this.connect.style.display="none",this.animatedConnect.style.display="none"},_animateConnect:function(t,n){if(n)return a.set(this.animatedConnect,{width:t.w+"px",height:t.h+"px"}),void(this.animatedConnect.style.display="");var e;this.animatedConnect.style.display?(e={w:0,h:0},a.set(this.animatedConnect,{width:"0",height:"0"}),this.animatedConnect.style.display=""):e=o.getContentBox(this.animatedConnect),this._doAnimation(e,t)},_animation:null,_animationRate:700,_stopAnimation:function(){this._animation&&this._animation.stop()},_doAnimation:function(t,n){var e=this;this._playAnimation({node:this.animatedConnect,duration:(n.w-t.w)/this._animationRate*1e3,properties:{width:n.w}},function(){e._playAnimation({node:e.animatedConnect,duration:(n.h-t.h)/e._animationRate*1e3,properties:{height:n.h}})})},_playAnimation:function(t,n){var i=this;t.onStop=function(){i._animation=null},t.onEnd=function(){i._animation=null,n&&n()},this._animation=e.animateProperty(t),this._animation.play()},_onCategoriesClick:function(){this.onCategoriesClick()},onCategoriesClick:function(){},_onDCsClick:function(){this._categoryClickAllowed&&this.onDCsClick()},onDCsClick:function(){}})});