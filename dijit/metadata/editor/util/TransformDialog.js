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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/has","dijit/_WidgetBase","dojo/i18n!../../nls/i18nBase","dijit/Dialog","./OkCancelBar","./TransformPane","../../../../kernel"],function(t,i,e,o,s,n,d,a,l,r,c){var h=t([n],{dialog:null,dialogTitle:d.editor.transform.dialogTitle,documentTypes:null,editor:null,okCancelBar:null,prompt:null,postCreate:function(){this.inherited(arguments)},onSelect:function(t,i){},show:function(){var t=o.create("div",{}),s=new r({editor:this.editor,dialogBroker:this,documentTypes:this.documentTypes,prompt:this.prompt,onSelect:i.hitch(this,function(t,i,e){this.dialog&&this.onSelect(this.dialog,t,i,e)})},o.create("div",{},t)),n=this.okCancelBar=new l({showOk:!1,onCancelClick:i.hitch(this,function(){this.dialog&&this.dialog.hide()})},o.create("div",{},t)),d=this.dialog=new a({class:"gxeDialog  gxePopupDialog",title:this.dialogTitle,content:t,autofocus:!1});this.isLeftToRight()||e.add(d.domNode,"gxeRtl"),this.own(d.on("hide",i.hitch(this,function(){setTimeout(i.hitch(this,function(){s.destroyRecursive(!1),n.destroyRecursive(!1),d.destroyRecursive(!1),this.destroyRecursive(!1)}),300)}))),d.show()}});return s("extend-esri")&&i.setObject("dijit.metadata.editor.util.TransformDialog",h,c),h});