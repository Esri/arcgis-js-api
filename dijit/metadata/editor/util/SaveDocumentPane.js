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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/dom-style","dojo/has","../../base/Templated","dojo/text!./templates/SaveDocumentPane.html","dojo/i18n!../../nls/i18nBase","../../../../kernel"],(function(e,t,n,i,o,a,s,d,l,u){var c=e([s],{_disabled:!1,dialogBroker:null,editor:null,gxeDocument:null,templateString:d,postCreate:function(){this.inherited(arguments),this._initialize()},_getPushToItem:function(){return!0},_initialize:function(){this.editor&&this.editor.dialogBroker||o.set(this.saveAndCloseButton,"display","none")},onCancel:function(){},onSave:function(e,t){},_onCancelClick:function(){this._disabled||this.onCancel()},_onSaveClick:function(){this._disabled||this.onSave(!1,this._getPushToItem())},_onSaveAndCloseClick:function(){this._disabled||this.onSave(!0,this._getPushToItem())}});return a("extend-esri")&&t.setObject("dijit.metadata.editor.util.SaveDocumentPane",c,u),c}));