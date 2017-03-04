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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/has","dijit/_WidgetBase","dojo/i18n!../../../nls/i18nBase","dojo/i18n!../../../nls/i18nIso","dijit/Dialog","./ConceptPane","../../../../../kernel"],function(e,i,t,o,n,s,l,a,c,d){var h=e([n],{dialog:null,gxeDocument:null,initialValue:null,title:l.gemet.concept.dialogTitle,postCreate:function(){this.inherited(arguments)},onSelect:function(e){},show:function(){var e=null,o=new c({dialogBroker:this,gxeDocument:this.gxeDocument,initialValue:this.initialValue,onSelect:i.hitch(this,function(i){this.onSelect(i),e&&e.hide()}),onCancelClick:i.hitch(this,function(){e&&e.hide()})});e=this.dialog=new a({"class":"gxeDialog gxePopupDialog gxeGemetDialog",title:this.title,content:o,autofocus:!1}),this.isLeftToRight()||t.add(e.domNode,"gxeRtl"),this.own(e.on("hide",i.hitch(this,function(){setTimeout(i.hitch(this,function(){o.destroyRecursive(!1),e.destroyRecursive(!1),this.destroyRecursive(!1)}),300)}))),e.show()}});return o("extend-esri")&&i.setObject("dijit.metadata.form.iso.gemet.ConceptDialog",h,d),h});