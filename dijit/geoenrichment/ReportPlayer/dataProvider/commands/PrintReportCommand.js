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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","./CreateHTMLCommand","esri/dijit/geoenrichment/utils/DomUtil","../../PlayerCommands","dojo/i18n!esri/nls/jsapi"],(function(e,i,t,n,o,r,l,s){s=s.geoenrichment.dijit.ReportPlayer.ReportPlayer;var h=e(null,{_layoutNode:null,_originalChildren:null,_printNode:null,_html:null,_propMemo:null,PROPS:{overflow:"visible",margin:"0px",minWidth:"0px",minHeight:"0px",maxWidth:"100000px",maxHeight:"100000px"},setUpDocument:function(e,i){var t=document.getElementsByTagName("html")[0],o=document.body,l=o.children;for(var s in l)r.hide(l[s]);for(var s in this._propMemo={html:{},layoutNode:{}},this.PROPS)this._propMemo.html[s]=t.style[s],this._propMemo.layoutNode[s]=o.style[s],t.style[s]=this.PROPS[s],o.style[s]=this.PROPS[s];this._html=t,this._layoutNode=o,this._originalChildren=l,this._printNode=n.create("div",{style:"display: inline-block;",innerHTML:e},o),this._setUpPageSize(i)},_setUpPageSize:function(e){},unSetDocument:function(){for(var e in n.destroy(this._printNode),this.PROPS)this._html.style[e]=this._propMemo.html[e],this._layoutNode.style[e]=this._propMemo.layoutNode[e];for(var e in this._originalChildren)r.show(this._originalChildren[e])}});return e(o,{id:l.PRINT,label:s.printCommandLabel,errorMessage:s.printError,_saveFiles:!1,_mode:"svg",execute:function(e,n,o){return t(this.inherited(arguments),(function(e){if(e&&e.svgStrings){var t=new h;t.setUpDocument(e.svgStrings.join(""),e.documentOptions);var n=new i;return setTimeout((function(){window.print(),t.unSetDocument(),n.resolve()})),n.promise}}))}})}));