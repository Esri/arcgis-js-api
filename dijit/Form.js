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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","dojo/_base/array","dojo/dom-style","dojo/dom-construct","dojo/dom-class","dojo/query","dijit/_Widget","dijit/_TemplatedMixin","dojo/text!./templates/Form.html"],function(e,i,t,d,s,l,a,r,o,n,u,g,v){var m=i([u,g],{declaredClass:"esri.dijit.Form",widgetsInTemplate:!0,templateString:v,widgets:{},fieldTypes:{string:{widget:"dijit/form/TextBox"},date:{widget:"dijit/form/DateTextBox"},number:{widget:"dijit/form/NumberTextBox"},"boolean":{widget:"dijit/form/Select",widgetParameters:{options:[{label:"True",value:"true"},{label:"False",value:"false"}]}}},fieldTemplate:"<div><div>{label}</div><div>{widget}</div></div>",constructor:function(e,i){this.fieldTypes=t.mixin(this.fieldTypes,e.fieldTypes)},postCreate:function(){this._fieldsLength=this.fields.length,l.forEach(this.fields,function(e){this.addField(e)},this)},destroy:function(){this.inherited(arguments);var e,i;for(e in this.widgets)this.widgets.hasOwnProperty(e)&&(i=this.widgets[e],i.destroy());this.widgets=null},addField:function(i){var d,s,l,u,g,v,m,f,b=this;s=i.template||this.fieldTemplate,d=i.label||i.name,l=s.replace("{label}",'<span class="esriFormFieldLabel">'+d+"</span>"),l=l.replace("{widget}",'<div class="esriFormFieldWidget"></div>'),u=r.toDom(l),o.add(u,"esriFormField"),g=n(".esriFormFieldWidget",u)[0],a.set(u,{display:i.visible===!1?"none":"block"}),f=i.widget||this.fieldTypes[i.type].widget,e([f],function(e){v=i.widgetParameters||b.fieldTypes[i.type].widgetParameters||{},m=new e(v,g),m.startup(),o.add(m.domNode,"esriFormFieldWidget"),m.fieldNode=u,m.initialState={value:i.value||null,visible:i.visible||!0,disabled:i.disabled||!1},b.domNode.appendChild(u),b.widgets[i.name]=m,b.setField(i),m.on("change",t.hitch(b,function(e,i){var t,d;i&&(t=i.value||i,i.target&&i.target.value&&(t=i.target.value),d={fieldName:e,value:t},b.emit("value-change",d))},i.name)),b._fieldsLength--;var d,s,l;if(0===b._fieldsLength)for(d=n(".esriFormField",b.domNode),s=0;s<d.length;s++)for(l=s;l<d.length;l++)(b.fields[s].label||b.fields[s].name)===n(".esriFormFieldLabel",d[l])[0].innerHTML&&r.place(d[l],b.domNode,s)})},removeField:function(e){t.isString(e)||(e=e.name);var i=this.getWidget(e);i.fieldNode.parentNode.removeChild(i.fieldNode),i.destroy()},getWidget:function(e){return this.widgets[e]},reset:function(){var e,i;for(e in this.widgets)this.widgets.hasOwnProperty(e)&&(i=this.widgets[e].initialState,this.setField({name:e,value:i.value,visible:i.visible,disabled:i.disabled}))},getField:function(e){var i=this.getWidget(e),t=n(".esriFormFieldLabel",i.parentNode)[0].innerHTML;return{label:t,name:e,value:i.value||i.getValue(),visible:i.visible,disabled:i.disabled}},setValues:function(e){var i;for(i in e)e.hasOwnProperty(i)&&this.setValue(i,e[i])},setValue:function(e,i){var t=this.getWidget(e);t.setValue?t.setValue(i):t.set&&t.set("value",i)},setFields:function(e){l.forEach(e,function(e){this.setField(e)})},setField:function(e){var i=this.getWidget(e.name),t=n(".esriFormFieldLabel",i.fieldNode)[0];t.innerHTML=e.label||e.name,(e.visible===!0||e.visible===!1)&&(i.setVisibility?i.setVisibility(e.visible):i.set&&i.set("visible",e.visible)),(e.disabled===!0||e.disabled===!1)&&(i.setDisabled?i.setDisabled(e.disabled):i.set&&i.set("disabled",e.disabled)),(void 0!==e.value||null!==e.value)&&(i.setValue?i.setValue(e.value):i.set&&i.set("value",e.value))}});return d("extend-esri")&&t.setObject("dijit.Form",m,s),m});