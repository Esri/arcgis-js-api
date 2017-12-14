// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/keys","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/form/TextBox","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(t,e,i,n,o,s,l,h,d,r){return t(null,{_textMemo:null,_handlers:null,_textBox:null,_node:null,numericOnly:!1,range:null,keepLabelDimensions:!0,constructor:function(t){e.mixin(this,t)},editNodeLabel:function(t,e){var h=this;this._stopEdit(),this._node=t,this._textMemo=e||t.innerHTML;var r=s.position(t).w;t.innerHTML="",this._textBox=o.create("input",{type:"text"},t),this._textBox.value=this._textMemo,this._textBox.focus(),this._textBox.select(),this.keepLabelDimensions&&l.set(this._textBox,"width",r+"px"),this._handlers=[i(document.body,"keyup",function(t){t.keyCode===n.ESCAPE?h._cancelEdit():t.keyCode===n.ENTER&&h._applyEdit()}),i(document.body,"click",function(){d.isMouseOver(t)||h._cancelEdit()})]},_checkCanApply:function(t){if(!this.numericOnly)return!0;var e=r.parseNumber(t);return isNaN(e)?!1:this.range&&void 0!==this.range.min&&this.range.min>e?!1:this.range&&void 0!==this.range.max&&this.range.max<e?!1:!0},_applyEdit:function(){var t=this._textBox.value;this._checkCanApply(t)?(this._node.innerHTML=t,this._stopEdit(),this.onApply(t)):this._cancelEdit()},_cancelEdit:function(){this._node.innerHTML=this._textMemo,this._stopEdit(),this.onCancel()},_stopEdit:function(){this._handlers&&this._handlers.forEach(function(t){t.remove()}),this._handlers=null,this._textMemo=null,o.destroy(this._textBox),this._textBox=null,this._node=null},onApply:function(t){},onCancel:function(){}})});