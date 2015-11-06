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

define(["../../declare","dojo/dom-construct","dojo/dom-class","dojo/_base/lang","dojo/query","dojo/store/Memory","dgrid/List","dgrid/Selection","dijit/layout/ContentPane"],function(e,t,i,s,n,o,r,c){function d(e,i){var s=t.create("div",{"class":"TrimWithEllipses"});return i&&t.create("div",{"class":"dijit dijitInline dijitCheckBox VarCheck"},s),t.create("span",{"class":"VarLabel",innerHTML:e},s),s}var h=e("esri.dijit.geoenrichment.CheckList",[r,c],{selectionMode:"toggle",store:null,selectedItems:null,useTouchScroll:!1,_setStore:function(e){this.store=e,this.refresh(),this.renderArray(e.data)},_setItems:function(e){var t=new o({data:e});this.set("store",t),this.refresh(),this.renderArray(t.data)},buildRendering:function(){this.inherited(arguments);var e=s.hitch(this,this._onSelect);this.on("dgrid-select",e),this.on("dgrid-deselect",s.hitch(this,this._onDeselect))},select:function(e){this.inherited(arguments);var t=this.row(e).element;if(t){var s=n(".dijitCheckBox",t)[0];s&&(i.contains(t,"dgrid-selected")?i.add(s,"dijitCheckBoxChecked"):i.remove(s,"dijitCheckBoxChecked"))}},renderRow:function(e){return d(e.description?e.description:e.alias,"single"!=this.selectionMode)},_setSelection:function(){if(this.selection=this.get("selection"),this.selectedItems=[],this.selection&&this.store.data)for(var e=this.store.data,t=0;t<e.length;t++)this.selection[e[t].id]&&this.selectedItems.push(e[t])},_onSelect:function(e){this._setSelection(),this.onSelect(e)},_onDeselect:function(e){this._setSelection(),this.onDeselect(e)},onDeselect:function(){},onSelect:function(){}});return h.renderCheckBox=d,h});