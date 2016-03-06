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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/has","./etc/docUtil","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/i18n!../nls/i18nBase","../../../kernel"],function(e,t,i,d,n,a,s,o,r,l){var c=e([a,s,o],{_destroyWasCalled:!1,_escapeSingleQuotes:!1,i18nBase:r,templateString:"<div data-dojo-attach-point='containerNode'></div>",hide:!1,postCreate:function(){this.inherited(arguments),this.hide&&i.set(this.domNode,"display","none")},destroy:function(){this._destroyWasCalled=!0,this.inherited(arguments)},setI18nNodeText:function(e,t){n.setI18nNodeText(e,t)},setNodeText:function(e,t){n.setNodeText(e,t)},_escapeValue:function(){var e=this.inherited(arguments);if(this._escapeSingleQuotes&&-1!==e.indexOf("&#x27;")){for(var t=0;10>t&&-1!==e.indexOf("\\&#x27;");t++)e=e.replace(/\\&#x27;/g,"&#x27;");e=e.replace(/&#x27;/g,"\\&#x27;")}return e}});return d("extend-esri")&&t.setObject("dijit.metadata.base.Templated",c,l),c});