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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/on","dojo/keys","dojo/dom-style","dojo/has","./etc/docUtil","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/i18n!../nls/i18nBase","../../../kernel"],function(e,t,i,o,n,s,d,r,a,u,l,c,f){var h=e([a,u,l],{_destroyWasCalled:!1,_escapeSingleQuotes:!1,i18nBase:c,templateString:"<div data-dojo-attach-point='containerNode'></div>",hide:!1,postCreate:function(){this.inherited(arguments),this.hide&&s.set(this.domNode,"display","none")},destroy:function(){this._destroyWasCalled=!0,this.inherited(arguments)},connectAriaClickable:function(e,t){e&&t&&(e.setAttribute("tabindex","0"),e.setAttribute("role","button"),this.own(o(e,"keyup",function(e){(e.keyCode===n.ENTER||e.keyCode===n.SPACE)&&t(e)})))},focusDown:function(e){if(this.labelWidget&&this.labelWidget.switchNode)return void this.labelWidget.switchNode.focus();var t,i,o;if(t=this.getChildren(),t&&t.length>0){if(t&&t.length>1&&t[0]._isGxeElement&&"string"==typeof t[0].gxePath&&"/metadata/Esri/ArcGISstyle"===t[0].gxePath)return t[1].focusDown(e);if(t[0].labelWidget&&t[0].labelWidget.switchNode)return void t[0].labelWidget.switchNode.focus();if("function"==typeof t[0].ensureFocus)return void t[0].ensureFocus();if(t[0].inputWidget&&"function"==typeof t[0].inputWidget.ensureFocus)return void t[0].inputWidget.ensureFocus();if(t[0]._isGxeTabs)return void t[0]._tabButtons[0].domNode.focus();if(t[0]._isGxeSection)return t[0].focusDown(e);if(t[0]._isGxeDescriptor)return t[0].focusDown(e)}if(t&&1===t.length&&t[0]._isGxeElement&&!t[0].showHeader){if(i=t[0].getChildren(),i&&1===i.length&&i[0]._isGxeTabs)return void i[0]._tabButtons[0].domNode.focus();if(!i||1!==i.length||!i[0]._isGxeDescriptor)return t[0].focusDown(e);if(o=i[0].getChildren(),o&&1===o.length&&o[0]._isGxeTabs)return void o[0]._tabButtons[0].domNode.focus()}else{if(t&&t.length>0&&t[0]._isGxeMultiplicityHeader)return void t[0].tools.repeatElementNode.focus();if(t&&t.length>0&&t[0]._isGxeNode)return t[0].focusDown(e)}},setI18nNodeText:function(e,t){r.setI18nNodeText(e,t)},setNodeText:function(e,t){r.setNodeText(e,t)},_escapeValue:function(e){var t=this.inherited(arguments);if(this._escapeSingleQuotes&&-1!==t.indexOf("&#x27;")){for(var i=0;10>i&&-1!==t.indexOf("\\&#x27;");i++)t=t.replace(/\\&#x27;/g,"&#x27;");t=t.replace(/&#x27;/g,"\\&#x27;")}return t}});return d("extend-esri")&&t.setObject("dijit.metadata.base.Templated",h,f),h});