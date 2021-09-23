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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/dom-class","dojo/dom-construct","dojo/has","dijit/_WidgetBase","dojo/i18n!../../nls/i18nBase","dijit/Dialog","./OkCancelBar","../../base/etc/docUtil","../../../../kernel"],(function(e,t,i,o,a,d,l,s,n,r,c,h){var g=e([l],{dialog:null,dialogTitle:s.editor.download.dialogTitle,postCreate:function(){this.inherited(arguments)},show:function(e,d){var l=d+".xml",h=new Blob([e],{type:"text/xml"}),g=a.create("div",{}),u=a.create("div",{class:"gxePrimaryPane gxeDownloadPane"},g),w=a.create("a",{class:"gxeClickableText gxeBold gxeLine",onclick:t.hitch(this,(function(){this.dialog&&this.dialog.hide()}))},u);c.setNodeText(w,s.editor.download.prompt);var x=new FileReader;this.own(i.after(x,"onload",t.hitch(this,(function(e){var t=null;e&&e.target&&e.target.result&&(t=e.target.result,w.href=t,w.download=l)})),!0)),x.readAsDataURL(h);var f=new r({showOk:!1,onCancelClick:t.hitch(this,(function(){this.dialog&&this.dialog.hide()}))},a.create("div",{},g)),j=this.dialog=new n({class:"gxeDialog  gxePopupDialog",title:this.dialogTitle,content:g});this.isLeftToRight()||o.add(j.domNode,"gxeRtl"),this.own(j.on("hide",t.hitch(this,(function(){setTimeout(t.hitch(this,(function(){f.destroyRecursive(!1),j.destroyRecursive(!1),this.destroyRecursive(!1)})),300)})))),j.show()}});return d("extend-esri")&&t.setObject("dijit.metadata.editor.util.DownloadXmlDialog",g,h),g}));