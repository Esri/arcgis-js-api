// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/dom-construct","dojo/has","./Templated","dojo/text!./templates/MultiplicityTools.html","../../../kernel"],function(e,t,i,n,l,s,a,o,r){var u=e([a],{_isGxeMultiplicityTools:!0,multiplicityHeader:null,templateString:o,postCreate:function(){this.inherited(arguments)},getCurrentIndex:function(e){return this.multiplicityHeader.getCurrentIndex(e)},_setCurrentIndex:function(e){this.multiplicityHeader.useTabs&&(this.multiplicityHeader._currentIndex=e)},getElements:function(){return this.multiplicityHeader.getElements()},getMultiplicityInfo:function(e){return this.multiplicityHeader.getMultiplicityInfo(e)},getSiblings:function(e){if(this.multiplicityHeader.useTabs)return[];var t=[];return e||(e=this.getElements()),i.forEach(e,function(e){var i=null;e.multiplicityHeader&&(i=e.multiplicityHeader.tools,i&&i!==this&&t.push(i))},this),t},getTabs:function(){return this.multiplicityHeader.tabs},initialize:function(e){this.multiplicityHeader=e;var t=this.isRepeatable();this.domNode.style.display=t?"inline-block":"none",this.updateUI(null)},isRepeatable:function(){return this.multiplicityHeader.isElementRepeatable()},moveElementDownClicked:function(){var e=this.getMultiplicityInfo();if(e.canMoveDown){var t=this.getTabs(),i=e.elements,n=e.currentIndex,s=i[n],a=i[n+1].domNode;l.place(s.domNode,a,"after"),t&&(n++,this._setCurrentIndex(n),t.highlightTab(t.getTabButton(n))),i=this.getElements(),this.updateUI(i),t||this.updateSiblings(i)}},moveElementUpClicked:function(){var e=this.getMultiplicityInfo();if(e.canMoveUp){var t=this.getTabs(),i=e.elements,n=e.currentIndex,s=i[n],a=i[n-1].domNode;l.place(s.domNode,a,"before"),t&&(n--,this._setCurrentIndex(n),t.highlightTab(t.getTabButton(n))),i=this.getElements(),this.updateUI(i),t||this.updateSiblings(i)}},removeElementClicked:function(){var e=this.getMultiplicityInfo();if(e.canRemove){var t=null,n=this.getTabs(),l=e.elements,s=e.currentIndex,a=s===l.length-1,o=l[s];n||(t=this.getSiblings(l)),o.destroyRecursive(!1),n?(n.getTabButton(s).destroyRecursive(!1),a&&this._setCurrentIndex(s-1),n.sync(),this.updateUI(null)):i.forEach(t,function(e){e.updateUI(null)})}},repeatElementClicked:function(){var e=this.getMultiplicityInfo();if(e.canAdd){var t=e.currentIndex;-1===t&&(t=0);var i=e.elements[t];this.multiplicityHeader.repeatElement(i,!0)}},updateSiblings:function(e){if(!this.multiplicityHeader.useTabs){var t=this.getSiblings(e);i.forEach(t,function(t){t.updateUI(e)})}},updateUI:function(e){var t=function(e,t){t?(e.disabled=!1,n.remove(e,"gxeDisabledIcon")):(e.disabled=!0,n.add(e,"gxeDisabledIcon"))},i=this.getMultiplicityInfo(e);t(this.repeatElementNode,i.canAdd),t(this.removeElementNode,i.canRemove),t(this.moveElementUpNode,i.canMoveUp),t(this.moveElementDownNode,i.canMoveDown)}});return s("extend-esri")&&t.setObject("dijit.metadata.base.MultiplicityTools",u,r),u});