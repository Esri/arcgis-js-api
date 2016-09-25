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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/has","dijit/_WidgetBase","dojo/i18n!../../nls/i18nBase","dijit/Dialog","./SaveDocumentPane","../../../../kernel"],function(i,t,e,o,n,d,s,a,h,l){var c=i([d],{dialog:null,dialogTitle:s.editor.save.dialogTitle,editor:null,gxeDocument:null,postCreate:function(){this.inherited(arguments)},hide:function(){this.dialog&&this.dialog.hide()},onSave:function(i,t,e){},show:function(){var i=o.create("div",{}),n=new h({dialogBroker:this,editor:this.editor,gxeDocument:this.gxeDocument,onCancel:t.hitch(this,function(){this.dialog&&this.dialog.hide()}),onSave:t.hitch(this,function(i,t){this.dialog&&this.onSave(this.dialog,i,t)})},o.create("div",{},i)),d=this.dialog=new a({"class":"gxeDialog  gxePopupDialog",title:this.dialogTitle,content:i,autofocus:!1});this.isLeftToRight()||e.add(d.domNode,"gxeRtl"),this.own(d.on("hide",t.hitch(this,function(){setTimeout(t.hitch(this,function(){n.destroyRecursive(!1),d.destroyRecursive(!1),this.destroyRecursive(!1)}),300)}))),d.show()}});return n("extend-esri")&&t.setObject("dijit.metadata.editor.util.SaveDocumentDialog",c,l),c});