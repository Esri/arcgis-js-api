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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/has","dijit/_WidgetBase","dojo/i18n!../../nls/i18nBase","dijit/Dialog","./OkCancelBar","./LoadDocumentPane","../../../../kernel"],(function(t,i,e,o,l,n,d,s,a,c,h){var r=t([n],{dialog:null,dialogTitle:d.editor.load.dialogTitle,editor:null,okCancelBar:null,prompt:null,postCreate:function(){this.inherited(arguments),this.editor&&this.editor.gxeContext.arcgisMode&&(this.dialogTitle=d.editor.load.portalCaption)},onSelect:function(t,i,e,o){},onSelectPullItem:function(t){},show:function(){var t=o.create("div",{}),l=new c({editor:this.editor,dialogBroker:this,prompt:this.prompt,onSelect:i.hitch(this,(function(t,i,e){this.dialog&&this.onSelect(this.dialog,t,i,e)})),onSelectPullItem:i.hitch(this,(function(){this.dialog&&this.onSelectPullItem(this.dialog)}))},o.create("div",{},t)),n=this.okCancelBar=new a({showOk:!1,onCancelClick:i.hitch(this,(function(){this.dialog&&this.dialog.hide()}))},o.create("div",{},t)),d=this.dialog=new s({class:"gxeDialog  gxePopupDialog",title:this.dialogTitle,content:t,autofocus:!1});this.isLeftToRight()||e.add(d.domNode,"gxeRtl"),this.own(d.on("hide",i.hitch(this,(function(){setTimeout(i.hitch(this,(function(){l.destroyRecursive(!1),n.destroyRecursive(!1),d.destroyRecursive(!1),this.destroyRecursive(!1)})),300)})))),d.show()}});return l("extend-esri")&&i.setObject("dijit.metadata.editor.util.LoadDocumentDialog",r,h),r}));