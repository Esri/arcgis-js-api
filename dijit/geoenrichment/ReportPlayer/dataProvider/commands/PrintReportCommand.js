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

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","./CreateHTMLCommand","esri/dijit/geoenrichment/utils/DomUtil","../../PlayerCommands","dojo/i18n!esri/nls/jsapi"],function(e,i,t,o,n,r,l,s){s=s.geoenrichment.dijit.ReportPlayer.ReportPlayer;var a=e(null,{_layoutNode:null,_originalChildren:null,_printNode:null,_html:null,_propMemo:null,setUpDocument:function(e,i){var t=document.body,n=t.children;for(var l in n)r.hide(n[l]);var s=document.getElementsByTagName("html")[0],a=[s.style.overflow,t.style.overflow,t.style.margin];s.style.overflow="visible",t.style.overflow="visible",t.style.margin="0px",this._propMemo=a,this._html=s,this._layoutNode=t,this._originalChildren=n,this._printNode=o.create("div",{style:"display: inline-block;",innerHTML:e},t),this._setUpPageSize(i)},_setUpPageSize:function(e){},unSetDocument:function(){o.destroy(this._printNode),this._html.style.overflow=this._propMemo[0],this._layoutNode.style.overflow=this._propMemo[1],this._layoutNode.style.margin=this._propMemo[2];for(var e in this._originalChildren)r.show(this._originalChildren[e])}});return e(n,{id:l.PRINT,label:s.printCommandLabel,errorMessage:s.printError,_saveFiles:!1,_mode:"svg",execute:function(e,o,n){return t(this.inherited(arguments),function(e){if(e&&e.svgStrings){var t=new a;t.setUpDocument(e.svgStrings.join(""),e.documentOptions);var o=new i;return setTimeout(function(){window.print(),t.unSetDocument(),o.resolve()}),o.promise}})}})});