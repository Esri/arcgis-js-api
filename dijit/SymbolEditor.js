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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","dojo/_base/array","dojo/_base/Color","dojo/dom-construct","dojo/query","dijit/_Widget","dijit/_TemplatedMixin","../domUtils","./Form","dojo/text!./templates/SymbolEditor.html","dojo/i18n!../nls/jsapi"],function(e,t,o,i,l,n,a,r,s,m,d,h,g,c){var b=e([s,m],{declaredClass:"esri.dijit.SymbolEditor",widgetsInTemplate:!0,templateString:g,symbolConfigLabel:c.widgets.textSymbolEditor.symbolConfiguration,alignmentLabel:c.widgets.textSymbolEditor.alignment,colorLabel:c.widgets.textSymbolEditor.color,constructor:function(){},destroy:function(){this.inherited(arguments),this.form.destroy(),this.form=null},createForm:function(e){if(e=e||this.graphic){var o,i=e.symbol||e.getLayer().renderer&&e.getLayer().renderer.getSymbol(e),l={};if(!this.form||this._symbolType&&this._symbolType!==i.type){switch(this.form&&this.destroy(),this._symbolType=i.type,o=a.create("div",null,this.domNode),i.type){case"textsymbol":this.form=this._createTextEditorForm(i,o)}this.form.startup(),this._symbolChangeHandler=this.form.on("value-change",t.hitch(this,"_valueChangeCallback",e,i))}else l.color=i.color.toHex(),l.alignment=(i.verticalAlignment||"baseline")+","+i.horizontalAlignment,this._symbolChangeHandler&&this._symbolChangeHandler.remove(),this.form.setValues(l),this._symbolChangeHandler=this.form.on("value-change",t.hitch(this,"_valueChangeCallback",e,i))}},hide:function(){d.hide(this.domNode)},show:function(){d.show(this.domNode)},_createTextEditorForm:function(e,t){var o=(e.verticalAlignment||"baseline")+","+e.horizontalAlignment,i=e.color.toHex(),l=new h({fields:[{name:"alignment",label:this.alignmentLabel,type:"string",value:o,widget:"./FontAlignment"},{name:"color",label:this.colorLabel,type:"string",value:i,widget:"dijit/ColorPalette",widgetParameters:{palette:"7x10"}}]},t);return l},_valueChangeCallback:function(e,t,o){if("color"===o.fieldName)t.setColor(new n(o.value));else if("alignment"===o.fieldName){var i=o.value.split(",")[0],l=o.value.split(",")[1];t.setHorizontalAlignment(l),t.setVerticalAlignment(i)}e.setSymbol(t),this.emit("symbol-change",{symbol:t})}});return o("extend-esri")&&t.setObject("dijit.SymbolEditor",b,i),b});