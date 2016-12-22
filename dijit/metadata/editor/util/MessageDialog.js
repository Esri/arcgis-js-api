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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../base/etc/docUtil","dijit/_WidgetBase","dojo/i18n!../../nls/i18nBase","dijit/Dialog","./OkCancelBar","../../../../kernel"],function(e,i,s,t,o,a,n,l,c,d,h,r){var g=e([l],{title:"",okLabel:null,cancelIsProminent:!1,cancelLabel:null,showOk:!0,showCancel:!0,showOkCancelBar:!0,dialog:null,messagePane:null,iconNode:null,messageNode:null,okCancelBar:null,postCreate:function(){this.inherited(arguments)},hide:function(){this.dialog&&this.dialog.hide()},onCancelClick:function(e){},onOkClick:function(e){},show:function(e,a,l){var c,r=t.create("div",{});this.messagePane=t.create("div",{"class":"gxePrimaryPane gxeMessagePane"},r),this.iconNode=t.create("div",{"class":"gxeIcon"},this.messagePane),a&&s.add(this.iconNode,a),this.messageNode=t.create("div",{"class":"gxeMessageText"},this.messagePane),n.setNodeText(this.messageNode,e),l&&l.message&&(c=t.create("p",{},this.messagePane),n.setNodeText(c,l.message));var g=this.okCancelBar=new h({okLabel:this.okLabel,cancelIsProminent:this.cancelIsProminent,cancelLabel:this.cancelLabel,showOk:this.showOk,showCancel:this.showCancel,onOkClick:i.hitch(this,function(e){this.dialog&&this.dialog.hide(),this.onOkClick(e)}),onCancelClick:i.hitch(this,function(e){this.dialog&&this.dialog.hide(),this.onCancelClick(e)})},t.create("div",{},r));this.showOkCancelBar||o.set(g.domNode,"display","none");var u=this.dialog=new d({"class":"gxeDialog gxePopupDialog",title:this.title,content:r,autofocus:!1});return this.isLeftToRight()||s.add(u.domNode,"gxeRtl"),this.own(u.on("hide",i.hitch(this,function(){setTimeout(i.hitch(this,function(){g.destroyRecursive(!1),u.destroyRecursive(!1),this.destroyRecursive(!1)}),300)}))),u.show()}});return a("extend-esri")&&i.setObject("dijit.metadata.editor.util.MessageDialog",g,r),g});