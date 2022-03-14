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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/on","dojo/string","dojo/i18n!../../nls/jsapi","dojo/dom-construct","dojo/dom-class","dijit/form/CheckBox","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dgrid/OnDemandList","dgrid/extensions/DijitRegistry","dgrid/Selection"],(function(i,e,t,s,d,l,a,o,n,h,c,r,m,_,u,g){return i([c,r,m],{templateString:'<div><div data-dojo-type="dijit/Dialog" data-dojo-attach-point="dialog" title="${_i18n.filterResult}"><div>${_i18n.selectFieldDescription}</div><div data-dojo-attach-point="fieldList" class="imageFilterFieldSelect"> </div><label><div data-dojo-attach-point="thumbNailCheck" data-dojo-type="dijit/form/CheckBox"></div>${_i18n.thumbnails}</label><div><div class="esriImageFilterConfirm"><button class="jevent primary" data-dojo-type="dijit/form/Button" data-dojo-attach-event="onClick:_handleOKButtonClick">${_i18n.ok}</button><button class="jevent cancel" data-dojo-type="dijit/form/Button" data-dojo-attach-event="onClick:hide">${_i18n.cancel}</button></div></div></div>',widgetsInTemplate:!0,constructor:function(t,s){i.safeMixin(this,t),this._i18n=a.widgets.imageFilter.imageCardSettings,this._i18n=e.mixin(this._i18n,a.common)},show:function(){this._visibleFields=e.clone(this.imageFilter.selectedFields),this._fieldList.set("store",this.imageFilter._fieldStore),this.thumbNailCheck.set("checked",this.imageFilter.showThumbnail),this.dialog.show()},_handleOKButtonClick:function(){this.dialog.hide(),0===this._visibleFields.length&&this._visibleFields.push(this.imageFilter.field.name);var i={fields:this._visibleFields,showThumbnail:this.thumbNailCheck.checked};this.imageFilter._updateRasterListFields(i)},startup:function(){this._visibleFields=e.clone(this.imageFilter.selectedFields),this._fieldList=new(i([_,u,g]))({store:this.store,bufferRows:3,selectionMode:"single",sort:"alias",renderRow:e.hitch(this,this._createFieldGrid)},this.fieldList),this._fieldList.startup(),this.thumbNailCheck.set("checked",this.imageFilter.showThumbnail),this._fieldList.on(".dgrid-row:click",e.hitch(this,this._onRowClick))},_createFieldGrid:function(i){var t=o.create("div");n.add(t,"esriImageFilterFieldSelectRow");var s=new h({checked:this._visibleFields.indexOf(i.name)>-1,onChange:e.hitch(this,this._updateSelectedField,i)});o.place(s.domNode,t);var d=o.create("label");return n.add(d,"esriImageFilterResultFieldLabel"),d.innerHTML=i.alias,o.place(d,t),t},_onRowClick:function(i){if(!i.target.type||"checkbox"!==i.target.type){var e=this._fieldList.row(i).data;this._updateSelectedField(e)}},_updateSelectedField:function(i){if(-1===this._visibleFields.indexOf(i.name))4!=this._visibleFields.length&&this._visibleFields.push(i.name);else{var e=this._visibleFields.indexOf(i.name);this._visibleFields.splice(e,1)}this._fieldList.refresh({keepScrollPosition:!0})},hide:function(){this.dialog.hide()}})}));