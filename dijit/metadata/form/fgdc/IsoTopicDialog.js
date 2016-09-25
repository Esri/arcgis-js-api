// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/dom-construct","dojo/has","dijit/_WidgetBase","dojo/i18n!../../nls/i18nBase","dojo/i18n!../../nls/i18nFgdc","../../base/etc/docUtil","../IsoTopicCategoryOptions","dijit/Dialog","../../editor/util/OkCancelBar","../../../../kernel"],function(e,i,o,t,c,s,n,a,h,d,r,l,u,f){var g=e([n],{checkBoxes:null,dialogTitle:h.idinfo.keywords.themektIsoTopicDialog,values:null,postCreate:function(){this.inherited(arguments),this.checkBoxes=[]},onChange:function(e){},show:function(){var e=new r;e.fetchOptionWidgets().then(i.hitch(this,function(i){this._showDialog(e,i)}))},_addOption:function(e,i,t){var s=this.id+"_chk"+i,n=c.create("div",{"class":"gxeOption"},t),a=e.label,h=e.value,r=o.some(this.values,function(e){return e===h?!0:void 0}),l={id:s,type:"checkbox",value:h};r&&(l.checked="checked");var u=c.create("input",l,n);this.checkBoxes.push(u);var f=c.create("label",{"for":s},n);d.setNodeText(f,a)},_applySelections:function(e){var i=[];o.forEach(this.checkBoxes,function(e){e.checked&&i.push(e.value)}),this.onChange(i),e.hide()},_showDialog:function(e,s){var n=null,a=c.create("div",{}),h=c.create("div",{"class":"gxeOptions"},a);o.forEach(s,function(e,i){this._addOption(e,i,h)},this);var d=new u({onOkClick:i.hitch(this,function(){n&&this._applySelections(n)}),onCancelClick:i.hitch(this,function(){n&&n.hide()})},c.create("div",{},a));n=new l({"class":"gxeDialog gxePopupDialog gxeIsoTopicDialog",title:this.dialogTitle,content:a}),this.isLeftToRight()||t.add(n.domNode,"gxeRtl"),this.own(n.on("hide",i.hitch(this,function(){setTimeout(i.hitch(this,function(){try{e.destroyRecursive(!1),o.forEach(s,function(e){try{e.destroyRecursive(!1)}catch(i){console.error(i)}})}catch(i){console.error(i)}d.destroyRecursive(!1),n.destroyRecursive(!1),this.destroyRecursive(!1)}),300)}))),n.show()}});return s("extend-esri")&&i.setObject("dijit.metadata.form.fgdc.IsoTopicDialog",g,f),g});