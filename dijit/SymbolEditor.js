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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","dojo/_base/array","dojo/_base/Color","dojo/dom-construct","dojo/query","dijit/_Widget","dijit/_TemplatedMixin","../domUtils","./Form","dojo/text!./templates/SymbolEditor.html","dojo/i18n!../nls/jsapi"],function(e,o,t,l,a,i,r,s,n,h,m,d,g,b){var y=e([n,h],{declaredClass:"esri.dijit.SymbolEditor",widgetsInTemplate:!0,templateString:g,symbolConfigLabel:b.widgets.textSymbolEditor.symbolConfiguration,alignmentLabel:b.widgets.textSymbolEditor.alignment,colorLabel:b.widgets.textSymbolEditor.color,haloLabel:b.widgets.textSymbolEditor.halo,_showHaloStyler:!0,constructor:function(e,o){this.set("_showHaloStyler",t("ie")<10?!1:!0)},destroy:function(){this.inherited(arguments),this.form.destroy(),this.form=null},createForm:function(e){if(e=e||this.graphic){var t,l=e.symbol||e.getLayer().renderer&&e.getLayer().renderer.getSymbol(e),a={};if(!this.form||this._symbolType&&this._symbolType!==l.type){switch(this.form&&this.destroy(),this._symbolType=l.type,t=r.create("div",null,this.domNode),l.type){case"textsymbol":this.form=this._createTextEditorForm(l,t)}this.form.startup(),this._symbolChangeHandler=this.form.on("value-change",o.hitch(this,"_valueChangeCallback",e,l))}else{if(a.color=l.color.toHex(),a.alignment=(l.verticalAlignment||"baseline")+","+l.horizontalAlignment,this._showHaloStyler){var i=l.haloSize||null,s=l.haloColor?l.haloColor.toHex():null;a.halo={haloSize:i,haloColor:s}}this._symbolChangeHandler&&this._symbolChangeHandler.remove(),this.form.setValues(a),this._symbolChangeHandler=this.form.on("value-change",o.hitch(this,"_valueChangeCallback",e,l))}}},hide:function(){m.hide(this.domNode)},show:function(){m.show(this.domNode)},_createTextEditorForm:function(e,o){var t=(e.verticalAlignment||"baseline")+","+e.horizontalAlignment,l=e.color.toHex(),a=e.haloColor||null,i=e.haloSize||0,r=!!i,s=[{name:"alignment",label:this.alignmentLabel,type:"string",value:t,widget:"./FontAlignment",widgetParameters:{value:t}},{name:"color",label:this.colorLabel,type:"string",value:l,widget:"dijit/ColorPalette",widgetParameters:{palette:"7x10"}}];this._showHaloStyler&&s.push({name:"halo",label:this.haloLabel,type:"object",value:{haloColor:a,haloSize:i},widget:"./HaloStyler",widgetParameters:{haloColor:a,haloEnabled:r,haloSize:i}});var n=new d({fields:s},o);return n},_valueChangeCallback:function(e,o,t){if("color"===t.fieldName)o.setColor(new i(t.value));else if("alignment"===t.fieldName){var l=t.value.split(",")[0],a=t.value.split(",")[1];o.setHorizontalAlignment(a),o.setVerticalAlignment(l)}else if("halo"===t.fieldName&&this._showHaloStyler){var r=t.value.enabled,s=t.value.color,n=t.value.size;r?(o.setHaloSize(n),o.setHaloColor(new i(s))):(o.setHaloSize(0),o.setHaloColor(null))}e.setSymbol(o),this.emit("symbol-change",{symbol:o})}});return t("extend-esri")&&o.setObject("dijit.SymbolEditor",y,l),y});