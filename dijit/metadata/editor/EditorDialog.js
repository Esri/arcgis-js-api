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

define(["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/dom-class","dojo/dom-construct","dojo/has","dijit/_WidgetBase","dojo/i18n!../nls/i18nBase","dijit/Dialog","./Editor","../../../kernel"],function(t,i,o,e,n,s,d,h,a,l,r){var c=t([d],{_checkForChanges:!0,dialog:null,editor:null,gxeAdaptor:null,gxeContext:null,title:null,postCreate:function(){this.inherited(arguments)},hide:function(){this._checkForChanges=!1,this.dialog&&this.dialog.hide()},onDialogClose:function(){},show:function(){null===this.title&&(this.title=h.editor.editorDialog.caption);var t=this.editor=new l({dialogBroker:this,gxeAdaptor:this.gxeAdaptor,gxeContext:this.gxeContext}),n=this.dialog=new a({class:"gxeDialog gxeEditorDialog",title:this.title,content:t,autofocus:!1});this.isLeftToRight()||e.add(n.domNode,"gxeRtl");var s=this;this.own(o.around(n,"hide",i.hitch(this,function(o){return function(){s._checkForChanges&&t.getEditDocument()?t.primaryToolbar._onCloseClick():i.hitch(n,o)()}}))),this.own(n.on("hide",i.hitch(this,function(){setTimeout(i.hitch(this,function(){t.destroyRecursive(!1),n.destroyRecursive(!1),this.destroyRecursive(!1)}),2e3),this.onDialogClose()}))),n.show().then(function(){t.initializeView()})}});return s("extend-esri")&&i.setObject("dijit.metadata.editor.EditorDialog",c,r),c});