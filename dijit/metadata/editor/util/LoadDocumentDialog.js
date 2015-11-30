// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/has","dijit/_WidgetBase","dojo/i18n!../../nls/i18nBase","dijit/Dialog","./OkCancelBar","./LoadDocumentPane","../../../../kernel"],function(t,i,e,o,n,l,s,d,a,c,h){var r=t([l],{dialog:null,dialogTitle:s.editor.load.dialogTitle,editor:null,okCancelBar:null,prompt:null,postCreate:function(){this.inherited(arguments)},onSelect:function(){},onSelectPullItem:function(){},show:function(){var t=o.create("div",{}),n=new c({editor:this.editor,dialogBroker:this,prompt:this.prompt,onSelect:i.hitch(this,function(t,i,e){this.dialog&&this.onSelect(this.dialog,t,i,e)}),onSelectPullItem:i.hitch(this,function(){this.dialog&&this.onSelectPullItem(this.dialog)})},o.create("div",{},t)),l=this.okCancelBar=new a({showOk:!1,onCancelClick:i.hitch(this,function(){this.dialog&&this.dialog.hide()})},o.create("div",{},t)),s=this.dialog=new d({"class":"gxeDialog  gxePopupDialog",title:this.dialogTitle,content:t,autofocus:!1});this.isLeftToRight()||e.add(s.domNode,"gxeRtl"),this.own(s.on("hide",i.hitch(this,function(){setTimeout(i.hitch(this,function(){n.destroyRecursive(!1),l.destroyRecursive(!1),s.destroyRecursive(!1),this.destroyRecursive(!1)}),300)}))),s.show()}});return n("extend-esri")&&i.setObject("dijit.metadata.editor.util.LoadDocumentDialog",r,h),r});