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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/on","dojo/keys","dojo/topic","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../base/Templated","dojo/text!./templates/Tabs.html","../base/TabButton","../base/TabRadio","../../../kernel"],(function(t,e,o,s,a,i,d,n,b,r,l,u,h,c,f,m){var _=t([u],{_activeTabButton:null,_isGxeTabs:!0,_tabButtons:null,templateString:h,useRadios:!1,showPromptIfRadios:!0,promptLabel:null,postCreate:function(){this.inherited(arguments),this._tabButtons=[],this.tabsNode.setAttribute("role","tablist")},startup:function(){this._started||(this.noIndent&&n.remove(this.domNode,"gxeIndent"),this.inherited(arguments),this._buildTabs())},_activateTab:function(t){var e=this.useRadios;o.forEach(this._tabButtons,(function(o){o===t?(o.domNode.setAttribute("aria-selected","true"),o.tabWgt.domNode.setAttribute("aria-hidden","false"),n.add(o.domNode,"current"),r.set(o.tabWgt.domNode,"display","block"),e&&(o.tabWgt._isOptionallyOff=!1)):(o.domNode.setAttribute("aria-selected","false"),o.tabWgt.domNode.setAttribute("aria-hidden","true"),n.remove(o.domNode,"current"),r.set(o.tabWgt.domNode,"display","none"),e&&(o.tabWgt._isOptionallyOff=!0))}));try{d.publish("gxe/tab-activated",{tabs:this,button:t})}catch(t){console.error(t)}},_addTab:function(t){var d=this._getLabel(t);r.set(t.domNode,"display","none");var l=null,u=this.id+"_radios";return l=this.useRadios?new f({label:d,tabWgt:t,radioName:u,onClick:e.hitch(this,(function(t){this._activateTab(t)}))}):new c({label:d,tabWgt:t,onClick:e.hitch(this,(function(t){this._activateTab(t)}))}),this.own(a(l.domNode,"focus",e.hitch(this,(function(){l.setChecked&&l.setChecked(!0),this._activateTab(l)})))),this.own(a(l.domNode,"keydown",e.hitch(this,(function(e){var a,d=null;if(e.keyCode===i.RIGHT_ARROW)-1!==(a=this._tabButtons.indexOf(l))&&a<this._tabButtons.length-1&&(d=this._tabButtons[a+1]);else if(e.keyCode===i.LEFT_ARROW)(a=this._tabButtons.indexOf(l))>0&&(d=this._tabButtons[a-1]);else if(e.keyCode===i.DOWN_ARROW)"function"==typeof t.focusDown&&(s.stop(e),t.focusDown(e));else if(e.keyCode===i.UP_ARROW){s.stop(e);for(var b=this.getParent();b;){if(b._isGxeTabs){o.some(b._tabButtons,(function(t){if(n.contains(t.domNode,"current"))return t.domNode.focus(),!0}));break}b=b.getParent()}}d&&d.domNode.focus()})))),l.domNode.setAttribute("role","tab"),l.domNode.setAttribute("aria-controls",t.id),l.domNode.setAttribute("tabindex","0"),t.domNode.setAttribute("role","tabpanel"),t.domNode.setAttribute("aria-labelledby",l.id),t.tabButton=l,(t.hide||t.notApplicable)&&r.set(l.domNode,"display","none"),b.place(l.domNode,this.tabsNode,"last"),this._tabButtons.push(l),l},_addPrompt:function(){var t=this.promptLabel;null===t&&(t=this.i18nBase.general.choose);var e=b.create("span",{class:"gxeEditOnly gxeTabsPrompt"},this.tabsNode,"last");this.setNodeText(e,t)},_buildTabs:function(){var t=null;this.useRadios&&this.showPromptIfRadios&&this._addPrompt(),o.forEach(this.getChildren(),(function(t){this._addTab(t)}),this),o.some(this._tabButtons,(function(e){if(e.tabWgt&&!e.tabWgt.notApplicable)return t=e,!0})),t&&(t.radioName&&t.setChecked(!0),this._activateTab(t),r.set(this.domNode,"display","block"))},ensureActiveTab:function(t){o.some(this._tabButtons,(function(e){if(e.tabWgt===t)return this._activateTab(e),this.useRadios&&e.setChecked&&e.setChecked(!0),!0}),this)},_getLabel:function(t){return"function"==typeof t.getLabelString?t.getLabelString():"string"==typeof t.label?t.label:"Untitled"}});return l("extend-esri")&&e.setObject("dijit.metadata.form.Tabs",_,m),_}));