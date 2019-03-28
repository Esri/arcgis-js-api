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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/declare","dojo/dom-class","dojo/dom-construct","dojo/query","dojo/on","./FlowList","./FlowListDefaultItemRenderer"],function(e,t,i,s,n,o,r){var c=new e(r,{createPresentation:function(e,t,s,o,r){var c=i.create("div",{class:"TrimWithEllipses listItem"},s);return i.create("div",{class:"dijit dijitInline esriTriStateCheckBoxIcon esriTriStateCheckBox"},c),i.create("span",{innerHTML:"&nbsp;"+e[o.labelProperty]},c),this.setSelected(c,o.isSelected(e)),n(c,"click",function(){o.setSelected(e,!o.isSelected(e)),o.onSelectionChanged()}),c},setSelected:function(e,i){var n=s(".esriTriStateCheckBox",e)[0];t[i?"add":"remove"](n,"esriTriStateCheckBoxChecked"),t[i?"add":"remove"](e,"listItemSelected")},selectPresentation:function(){}});return e("esri.dijit.geoenrichment.FlowCheckList",o,{_selection:null,buildRendering:function(){this._selection={},this.itemRenderer=new c,this.inherited(arguments)},getSelection:function(){return Object.keys(this._selection)},getSelectedItems:function(){for(var e=[],t=this.items||this.store.data,i=0;i<t.length;i++)this._selection[t[i][this.idProperty]]&&e.push(t[i]);return e},setSelection:function(e){this._selection={},e&&e.forEach(function(e){this._selection[e]=!0},this),(this.items||this.store.data).forEach(function(e){this.setSelected(e,this.isSelected(e))},this)},isSelected:function(e){var t=e&&void 0!==typeof e[this.idProperty]?e[this.idProperty]:e;return this._selection[t]},setSelected:function(e,t){t?this._selection[e[this.idProperty]]=!0:delete this._selection[e[this.idProperty]];var i=this.getItemNode(e);this.itemRenderer.setSelected(i,t)},onSelectionChanged:function(){}})});