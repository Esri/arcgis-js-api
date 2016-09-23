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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dijit/a11yclick","dijit/_TemplatedMixin","../core/watchUtils","../core/urlUtils","./support/viewModelWiring","./Print/PrintViewModel","./Widget","dojo/_base/lang","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","dojo/on","dojo/i18n!./Print/nls/Print","dojo/text!./Print/templates/Print.html"],function(t,e,i,n,o,r,s,a,d,l,h,u,p,_,c){var g={base:"esri-print",button:"esri-button esri-widget-button",arrowButton:"esri-print__arrow-down-button",menu:"esri-print__dropdown-menu",menuItem:"esri-print__dropdown-item",printButtonContainer:"esri-print__container",printButton:"esri-print__print-button",printArrowIcon:"esri-icon esri-icon-down-arrow",printAnchor:"esri-print__anchor",hide:"esri-hidden",disabled:"esri-disabled"},w=s.createSubclass([e],{declaredClass:"esri.widgets.Print",baseClass:g.base,templateString:c,constructor:function(){this._handlePrintAnchorClick=this._handlePrintAnchorClick.bind(this),this._handleArrowButtonClick=this._handleArrowButtonClick.bind(this),this._handleStateChange=this._handleStateChange.bind(this),this._handlePrintMap=this._handlePrintMap.bind(this)},postCreate:function(){this.inherited(arguments),this.own(p(this._printoutLinkNode,t,this._handlePrintAnchorClick),p(this._arrowButtonNode,t,this._handleArrowButtonClick),p(this._printButtonNode,t,this._handlePrintMap),i.init(this.viewModel,"state",this._handleStateChange)),this._createUI(this.templates)},properties:{printServiceUrl:{aliasOf:"viewModel.printServiceUrl"},printoutUrl:{aliasOf:"viewModel.printoutUrl"},templates:{aliasOf:"viewModel.templates"},view:{aliasOf:"viewModel.view"},viewModel:{type:r}},_css:g,_i18n:_,_selectionTemplate:null,_handleArrowButtonClick:function(){l.toggle(this._dropdownMenuNode,g.hide)},_handlePrintMap:function(){"ready"===this.viewModel.state&&(this.print(this._selectionTemplate),this._printButtonNode.innerHTML=_.printing,this._togglePrintButtonClasses())},_handlePrintAnchorClick:function(){u.set("printAnchor",{href:this.printoutUrl,target:"_blank"}),this.viewModel.openPrintout(),this._togglePrintButtonClasses()},_handleStateChange:function(t){"ready"===t&&(this._printButtonNode.innerHTML=_.print,l.remove(this._printButtonContainerNode,g.hide)),l.toggle(this._printButtonContainerNode,g.hide,"printoutReady"===t),l.toggle(this._printoutLinkNode,g.hide,"printoutReady"!==t)},print:o.createMethodDelegate("print"),_createUI:function(t){t&&1!==t.length?this._createMenu(this.templates):(this._selectionTemplate=t&&t[0],l.toggle(this._arrowButtonNode,g.hide))},_createMenu:function(e){var i={};e.forEach(function(t){i[t.label]=t,h.create("div",{className:g.menuItem,textContent:t.label,tabIndex:"0",role:"menuitem"},this._dropdownMenuNode)}.bind(this)),p(this._dropdownMenuNode,t,function(t){var e=t.target.innerHTML;this._selectionTemplate=i[e],this._handlePrintMap(),l.toggle(this._dropdownMenuNode,g.hide,!0)}.bind(this))},_togglePrintButtonClasses:function(){l.toggle(this._printButtonNode,g.disabled),l.toggle(this._arrowButtonNode,g.disabled)}});return w});