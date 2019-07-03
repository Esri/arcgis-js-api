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

define(["esri/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/query","dojo/store/Memory","dgrid/List","dgrid/Selection"],function(e,t,i,n,s,o,r,c){function h(e,t,i){var s=n.create("div",{class:"TrimWithEllipses"});return t&&n.create("div",{class:"dijit dijitInline VarCheck "+(i||"dijitCheckBox")},s),n.create("span",{class:"VarLabel",innerHTML:(t?"&nbsp;":"")+e},s),s}var d=e("esri.dijit.geoenrichment.CheckList",[r,c],{selectionMode:"toggle",store:null,useTouchScroll:!1,showAsTriStateItem:!1,buildRendering:function(){this.inherited(arguments),this.on("dgrid-select",t.hitch(this,this._onSelect)),this.on("dgrid-deselect",t.hitch(this,this._onDeselect))},_setStore:function(e){this.store=e,this.refresh(),this.renderArray(e.data)},_setItems:function(e){var t=new o({data:e});this.set("store",t),this.refresh(),this.renderArray(t.data)},renderRow:function(e,t){return h(e.description||e.alias,"single"!=this.selectionMode,this.showAsTriStateItem?"esriTriStateCheckBoxIcon esriTriStateCheckBox":"dijitCheckBox")},getSelection:function(){return Object.keys(this.get("selection"))},getSelectedItems:function(){this.selection=this.get("selection");var e=[];if(this.selection&&this.store.data)for(var t=this.store.data,i=0;i<t.length;i++)this.selection[t[i].id]&&e.push(t[i]);return e},setSelection:function(e){this.clearSelection(),e.forEach(function(e){this._select(e,null,!0)},this),this._fireSelectionEvents()},_select:function(e){this.inherited(arguments);var t=this.row(e).element;if(t){var n=this.showAsTriStateItem?"esriTriStateCheckBox":"dijitCheckBox",o=s("."+n,t)[0];o&&(i.contains(t,"dgrid-selected")?i.add(o,n+"Checked"):i.remove(o,n+"Checked"))}},_onSelect:function(e){this.onSelect(e),this.onSelectionChanged()},_onDeselect:function(e){this.onDeselect(e),this.onSelectionChanged()},onDeselect:function(e){},onSelect:function(e){},onSelectionChanged:function(){}});return d.renderCheckBox=h,d});