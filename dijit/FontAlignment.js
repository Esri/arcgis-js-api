// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","dojo/_base/array","dojo/query","dojo/dom-class","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!./templates/FontAlignment.html"],(function(e,t,n,i,o,a,l,d,r,s,u,c){var m=t([r,s,u],{declaredClass:"esri.dijit.FontAlignment",templateString:c,widgetsInTemplate:!0,value:null,_imageUrl:e.toUrl("./images/positionSprite.png"),destroy:function(){this.inherited(arguments)},setValue:function(e){this.value=e;var t=l("button",this.domNode);a.forEach(t,(function(t){t.value===e?d.add(t,"selectedFontAlignment"):d.remove(t,"selectedFontAlignment")}))},getValue:function(){return this.value},changeValue:function(e){var t=l("button",this.domNode);a.forEach(t,(function(e){d.remove(e,"selectedFontAlignment")})),d.add(e.currentTarget,"selectedFontAlignment"),this.value=e.currentTarget.value,this.emit("change",{value:this.value})}});return i("extend-esri")&&n.setObject("dijit.FontAlignment",m,o),m}));