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

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/keys","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],(function(t,e,i,n,o,s,l,h,x,d){return t(null,{_textMemo:null,_handlers:null,_textBox:null,_node:null,numericOnly:!1,range:null,keepLabelDimensions:!0,constructor:function(t){e.mixin(this,t)},editNodeLabel:function(t){var e=t.node,d=t.overNode||e,r=t.initialText,a=this;this._stopEdit(),this._node=e,this._textMemo="string"==typeof r||"number"==typeof r?r:e.innerHTML;var c=s.position(e).w;if(e.innerHTML="",this._textBox=t.multiline?o.create("textarea",{class:"esriGETextBoxArea"},e):o.create("input",{type:"text"},e),this._textBox.name="node-label",this._textBox.value=this._textMemo,this._textBox.focus(),this._textBox.select(),t.box){var _=t.box;this._textBox.style.position="absolute",this._textBox.style.left=_.x+"px",this._textBox.style.top=_.y+"px",this._textBox.style.width=_.w+"px",this._textBox.style.height=_.h+"px",this._textBox.style.width=_.w+"px",this._textBox.style.height=_.h-2+"px"}else this.keepLabelDimensions&&l.set(this._textBox,"width",c+"px");t.textStyle&&h.setFullTextStyle(this._textBox,t.textStyle),this._handlers=[i(document.body,"keyup",(function(t){t.keyCode===n.ESCAPE?a._cancelEdit():t.keyCode!==n.ENTER||t.shiftKey||a._applyEdit()})),i(document.body,"click",(function(){x.isMouseOver(d)||(t.applyWhenClickedOutside?a._applyEdit():a._cancelEdit())}))]},_checkCanApply:function(t){if(!this.numericOnly)return!0;var e=d.parseNumber(t);return!isNaN(e)&&(!(this.range&&void 0!==this.range.min&&this.range.min>e)&&!(this.range&&void 0!==this.range.max&&this.range.max<e))},_applyEdit:function(){var t=this._textBox.value;this._checkCanApply(t)?(this._node.innerHTML=t,this._stopEdit(),this.onApply(t)):this._cancelEdit()},_cancelEdit:function(){this._node.innerHTML=this._textMemo,this._stopEdit(),this.onCancel()},_stopEdit:function(){this._handlers&&this._handlers.forEach((function(t){t.remove()})),this._handlers=null,this._textMemo=null,o.destroy(this._textBox),this._textBox=null,this._node=null},onApply:function(t){},onCancel:function(){}})}));