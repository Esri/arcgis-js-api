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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/event","dojo/has","dojo/dom-construct","dojo/dom-class","dojo/dom-style","dojo/keys","../kernel"],function(t,e,i,o,d,s,a,n,l,h){var r=t(null,{declaredClass:"esri.toolbars.TextEditor",constructor:function(t,e,i){this._graphic=t,this._map=e,this._toolbar=i,this._enable(this._graphic)},destroy:function(){this._disable()},onEditStart:function(){},onEditEnd:function(){},_enable:function(t){if(this._editBox)return i.disconnect(this._addEditBoxHandler),void(this._addEditBoxHandler=null);this._map.navigationManager.setImmediateClick(!0),this._addEditBoxHandler=i.connect(t.getLayer(),"onDblClick",this,function(e){this._map.navigationManager.setImmediateClick(!1),e.graphic==t&&(o.stop(e),i.disconnect(this._addEditBoxHandler),this._addEditBoxHandler=null,this._addTextBox(t))})},_disable:function(){this._applyEdit(),this._addEditBoxHandler&&(i.disconnect(this._addEditBoxHandler),this._addEditBoxHandler=null),this._removeTextBox(),this.onEditEnd(this._graphic),this._toolbar.onTextEditEnd(this._graphic)},_addTextBox:function(t,o){if(!this._editBox){var d;t.symbol.text||(t.symbol.text="Tempt text",t.setSymbol(t.symbol),d="");var h=this._createInputTextStyle(t,this._map);""!==d&&(d=o||t.symbol.text),this._editBox=s.create("input",{type:"text",value:d}),n.set(this._editBox,h),a.add(this._editBox,"esriTextEditorInput"),this._map.container.appendChild(this._editBox),this._editBox.focus(),this._editBoxKeyHandler=i.connect(this._editBox,"onkeyup",e.hitch(this,function(t){t.keyCode!=l.ENTER&&t.keyCode!==l.TAB||this._disable()})),this._editBoxBlurHandler=i.connect(this._editBox,"onblur",e.hitch(this,function(t){this._disable()})),t.symbol.text="",t.setSymbol(t.symbol),t.hide();var r=this._editBox;this._disableBoxHandler||(this._disableBoxHandler=this._map.on("zoom-start",e.hitch(this,function(){this._disable()}))),this._moveBoxHandler=this._map.on("pan",function(t){n.set(r,{left:this._editBoxLeft+t.delta.x+"px",top:this._editBoxTop+t.delta.y+"px"})}),this._moveBoxStartHandler=this._map.on("pan-start",function(){this._editBoxLeft=parseFloat(n.get(r,"left")),this._editBoxTop=parseFloat(n.get(r,"top"))}),this.onEditStart(t,this._editBox),this._toolbar.onTextEditStart(t,this._editBox)}},_removeTextBox:function(){this._editBoxBlurHandler&&(i.disconnect(this._editBoxBlurHandler),this._editBoxBlurHandler=null),this._editBox&&(this._editBox.parentNode.removeChild(this._editBox),this._editBox=null),this._disableBoxHandler&&(this._disableBoxHandler.remove(),this._disableBoxHandler=null),this._moveBoxHandler&&(this._moveBoxHandler.remove(),this._moveBoxHandler=null),this._moveBoxStartHandler&&(this._moveBoxStartHandler.remove(),this._moveBoxStartHandler=null),this._editBoxKeyHandler&&(i.disconnect(this._editBoxKeyHandler),this._editBoxKeyHandler=null)},_createInputTextStyle:function(t,e){var i=t.getDojoShape(),o=i.getTransformedBoundingBox(),d=t.getLayer(),s=d.hasLocalNavigationTransform()?{dx:0,dy:0}:d.getNavigationTransform(),a=Math.abs(o[0].x-o[1].x)/Math.cos(t.symbol.angle/180*Math.PI),n=o[0].x+s.dx,l=o[0].y+s.dy,h=t.symbol.font;return{"font-family":h.family,"font-size":h.size+"px","font-style":h.style,"font-variant":h.variant,"font-weight":h.weight,left:n+"px",top:l+"px",width:a+"px"}},_applyEdit:function(){if(this._editBox)if(this._editBox.value){this._graphic.show();var t=this._graphic.symbol;t.text=this._editBox.value,this._graphic.setSymbol(t)}else this._graphic.getLayer().remove(this._graphic)}});return d("extend-esri")&&e.setObject("toolbars.TextEditor",r,h),r});