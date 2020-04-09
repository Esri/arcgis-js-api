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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["esri/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/query","dstore/Memory","dgrid1/List","dgrid1/Selection"],(function(e,t,i,n,o,c,s,r){function l(e,t,i){var o=n.create("div",{class:"TrimWithEllipses"});return t&&n.create("div",{class:"dijit dijitInline VarCheck "+(i||"dijitCheckBox")},o),n.create("span",{class:"VarLabel",innerHTML:(t?"&nbsp;":"")+e},o),o}var h=e("esri.dijit.geoenrichment.CheckList",[s,r],{selectionMode:"toggle",collection:null,useTouchScroll:!1,showAsTriStateItem:!1,buildRendering:function(){this.inherited(arguments),this.on("dgrid-select",t.hitch(this,this._onSelect)),this.on("dgrid-deselect",t.hitch(this,this._onDeselect)),this.collection=new c},_setItems:function(e){this.collection.setData(e),this.refresh(),this.renderArray(this.collection.data)},renderRow:function(e,t){return l(e.description||e.alias,"single"!==this.selectionMode,this.showAsTriStateItem?"esriTriStateCheckBoxIcon esriTriStateCheckBox":"dijitCheckBox")},getSelection:function(){return Object.keys(this.get("selection"))},getSelectedItems:function(){var e=this.get("selection");return this.collection.data.filter((function(t){return e[t.id]}))},setSelection:function(e){this.clearSelection(),e.forEach((function(e){this._select(e,null,!0)}),this),this._fireSelectionEvents()},_select:function(e){this.inherited(arguments);var t=this.row(e).element;if(t){var n=this.showAsTriStateItem?"esriTriStateCheckBox":"dijitCheckBox",c=o("."+n,t)[0];if(c){var s=i.contains(t,"dgrid-selected");i[s?"add":"remove"](c,n+"Checked")}}},_onSelect:function(e){this.onSelect(e),this.onSelectionChanged()},_onDeselect:function(e){this.onDeselect(e),this.onSelectionChanged()},onDeselect:function(e){},onSelect:function(e){},onSelectionChanged:function(){}});return h.renderCheckBox=l,h}));