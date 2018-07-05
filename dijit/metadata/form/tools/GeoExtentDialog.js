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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/aspect","dojo/dom-class","dojo/dom-construct","dojo/has","dijit/_WidgetBase","dojo/i18n!../../nls/i18nBase","dijit/Dialog","./GeoExtent","../../../../kernel"],function(t,i,o,e,n,s,a,h,l,c,d,u){var m=t([h],{dialog:null,title:l.geoExtent.title,gxeDocument:null,xmin:null,ymin:null,xmax:null,ymax:null,postCreate:function(){this.inherited(arguments)},onChange:function(t){},show:function(){var t=null,o=new d({dialogBroker:this,gxeDocument:this.gxeDocument,xmin:this.xmin,ymin:this.ymin,xmax:this.xmax,ymax:this.ymax,onOkClick:i.hitch(this,function(i){i&&this.onChange(i),t&&t.hide()}),onCancelClick:i.hitch(this,function(){t&&t.hide()})});t=this.dialog=new c({class:"gxeDialog gxePopupDialog",title:this.title,content:o,autofocus:!1}),this.isLeftToRight()||n.add(t.domNode,"gxeRtl"),this.own(e.after(t,"_position",function(){o._map&&o._map.reposition()},!0)),this.own(t.on("hide",i.hitch(this,function(){setTimeout(i.hitch(this,function(){o.destroyRecursive(!1),t.destroyRecursive(!1),this.destroyRecursive(!1)}),300)}))),t.show().then(function(){o.initialize()})}});return a("extend-esri")&&i.setObject("dijit.metadata.form.tools.GeoExtentDialog",m,u),m});