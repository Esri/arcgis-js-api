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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/on","dojo/dom-geometry","dijit/_TemplatedMixin","dojo/store/Memory","dgrid/OnDemandGrid","dgrid/extensions/ColumnResizer","../common/dijit/Popup","dojo/text!./RecordSetRenderer.html","../BaseResultRenderer","../utils"],function(e,t,i,s,a,o,l,n,r,d,h,u,p,m,f,c){return e([f,r],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-table",templateString:m,postCreate:function(){this.inherited(arguments);var n=[];if(!this.value.features||0===this.value.features.length)return a.set(this.clearNode,"display","none"),a.set(this.exportNode,"display","none"),a.set(this.magnifyNode,"display","none"),void(this.tableNode.innerHTML=this.nls.emptyResult);if(a.set(this.magnifyNode,"display",""),!c.useDynamicSchema(this.param,this.config)&&this.param.defaultValue&&this.param.defaultValue.output&&this.param.defaultValue.output.fields&&this.param.defaultValue.output.fields.length>0)n=this.param.defaultValue.output.fields;else if(this.value.fields)n=this.value.fields;else if(this.value.features&&this.value.features.length>0)for(var r in this.value.features[0].attributes)n.push({name:r});this.config.shareResults&&(a.set(this.clearNode,"display",""),o.set(this.clearNode,"title",this.nls.clear),this.own(l(this.clearNode,"click",t.hitch(this,function(){a.set(this.exportNode,"display","none"),a.set(this.clearNode,"display","none"),a.set(this.magnifyNode,"display","none"),this.labelContent.innerHTML=this.nls.cleared,s.empty(this.tableNode),this.table&&this.table.destroy()}))));var p=i.map(this.value.features,function(e){return e.attributes});o.set(this.magnifyNode,"title",this.nls.enlargeView),this.own(l(this.magnifyNode,"click",t.hitch(this,this.magnifyTable))),this.config.showExportButton&&(o.set(this.exportNode,"title",this.nls.exportOutput),a.set(this.exportNode,"display",""));var m,f=i.map(n,function(e){return{label:e.alias||e.name,field:e.name}});i.some(this.value.fields,function(e){if("esriFieldTypeOID"===e.type)return m=e.name,!0});var b=new d({data:p,idProperty:m});this.table=new(e([h,u]))({columns:f,store:b}),s.place(this.table.domNode,this.tableNode)},startup:function(){this.inherited(arguments),this.table.startup()},magnifyTable:function(){var e=s.create("div",{class:"gp-table-magnified"});s.place(this.table.domNode,e);var i=new p({content:e,titleLabel:this.param.tooltip||this.param.label||"",container:"main-page",onClose:t.hitch(this,function(){s.place(this.table.domNode,this.tableNode),this.table.resize()})});a.set(i.domNode,{top:"5%",left:"5%",width:"90%",height:"90%"}),i.startup(),this.table.resize()}})});