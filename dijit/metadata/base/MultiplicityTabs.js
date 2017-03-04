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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/on","dojo/keys","dojo/dom-class","dojo/dom-construct","dojo/has","./Templated","dojo/text!./templates/MultiplicityTabs.html","./TabButton","../../../kernel"],function(t,e,i,n,o,d,s,a,r,l,u,c,h){var f=t([l],{multiplicityHeader:null,templateString:u,postCreate:function(){this.inherited(arguments),this.containerNode.setAttribute("role","tablist")},activateTab:function(t){if(t){this.highlightTab(t);var e=t.tabIndex;this._setCurrentIndex(e);var n=this.getElements();i.forEach(n,function(t,i){i===e?t.domNode.style.display="block":t.domNode.style.display="none"}),this._updateTools(n)}},addTabButton:function(){var t=this.getCurrentIndex(),r=this.getChildren().length,l=""+(r+1),u=new c({label:l,tabIndex:r,onClick:e.hitch(this,function(t){this.activateTab(t)})});return u.domNode.setAttribute("role","tab"),u.domNode.setAttribute("aria-selected","false"),u.domNode.setAttribute("tabindex","0"),this.own(o(u.domNode,"focus",e.hitch(this,function(){this.activateTab(u)}))),this.own(o(u.domNode,"keydown",e.hitch(this,function(t){var e,o,s=null;if(t.keyCode===d.RIGHT_ARROW)o=this.getChildren(),e=o.indexOf(u),-1!==e&&e<o.length-1&&(s=o[e+1]);else if(t.keyCode===d.LEFT_ARROW)o=this.getChildren(),e=o.indexOf(u),e>0&&(s=o[e-1]);else if(t.keyCode===d.DOWN_ARROW){n.stop(t),o=this.getChildren(),e=o.indexOf(u);var a=this.getElements();i.some(a,function(i,n){return n===e?("function"==typeof i.focusDown&&i.focusDown(t),!0):void 0})}s&&s.domNode.focus()}))),a.place(u.domNode,this.containerNode,"last"),-1===t&&(this._setCurrentIndex(0),s.add(u.domNode,"current"),u.domNode.setAttribute("aria-selected","true")),this.updateUI(),u},ensureTabButton:function(){0===this.getChildren().length&&this.addTabButton()},getCurrentIndex:function(){return this.multiplicityHeader._currentIndex},_setCurrentIndex:function(t){this.multiplicityHeader._currentIndex=t},getElements:function(){return this.multiplicityHeader.getElements()},getMultiplicityInfo:function(){return this.multiplicityHeader.getMultiplicityInfo(null)},getTabButton:function(t){return this.getChildren()[t]},highlightTab:function(t){i.forEach(this.getChildren(),function(t){s.remove(t.domNode,"current"),t.domNode.setAttribute("aria-selected","false")}),s.add(t.domNode,"current"),t.domNode.setAttribute("aria-selected","true")},initialize:function(t){this.multiplicityHeader=t,this.updateUI()},sync:function(){var t=this.getCurrentIndex(),e=this.getChildren();i.forEach(e,function(e,i){e.tabIndex=i,e.setLabel(""+(i+1)),i===t?(s.add(e.domNode,"current"),e.domNode.setAttribute("aria-selected","true")):(s.remove(e.domNode,"current"),e.domNode.setAttribute("aria-selected","false"))}),t<e.length&&this.activateTab(this.getTabButton(t)),this.updateUI()},_updateTools:function(t){this.multiplicityHeader.tools.updateUI(t)},updateUI:function(){var t=this.getMultiplicityInfo();t.numElements>1?this.domNode.style.display="inline-block":this.domNode.style.display="none"}});return r("extend-esri")&&e.setObject("dijit.metadata.base.MultiplicityTabs",f,h),f});