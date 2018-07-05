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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/dom-construct","./CreateHTMLCommand","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","../../PlayerCommands","dojo/i18n!esri/nls/jsapi"],function(e,o,t,i,n,r,l,s,a){a=a.geoenrichment.dijit.ReportPlayer.ReportPlayer;var d=e(null,{_layoutNode:null,_originalChildren:null,_printNode:null,_html:null,_propMemo:null,setUpDocument:function(e,o){var t=document.body,n=t.children;for(var l in n)r.hide(n[l]);var s=document.getElementsByTagName("html")[0],a=[s.style.overflow,t.style.overflow,t.style.margin];s.style.overflow="visible",t.style.overflow="visible",t.style.margin="0px",this._propMemo=a,this._html=s,this._layoutNode=t,this._originalChildren=n,this._printNode=i.create("div",{style:"display: inline-block;",innerHTML:e},t),this._setUpPageSize(o)},_setUpPageSize:function(e){},unSetDocument:function(){i.destroy(this._printNode),this._html.style.overflow=this._propMemo[0],this._layoutNode.style.overflow=this._propMemo[1],this._layoutNode.style.margin=this._propMemo[2];for(var e in this._originalChildren)r.show(this._originalChildren[e])}});return e(n,{id:s.PRINT,label:a.printCommandLabel,errorMessage:a.printError,_saveFiles:!1,_mode:"svg",execute:function(e,i,n){return t(this.inherited(arguments),function(e){if(e&&e.svgStrings){var t=new d;t.setUpDocument(e.svgStrings.join(""),e.documentOptions);var i=new o;return setTimeout(function(){window.print(),t.unSetDocument(),i.resolve()}),i.promise}})}})});