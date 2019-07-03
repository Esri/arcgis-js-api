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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/dom-construct","../kernel","../InfoTemplate","../PopupInfo","./PopupRenderer"],function(e,t,i,n,s,o,r,a){var l=e([o,r],{declaredClass:"esri.dijit.PopupTemplate","-chains-":{constructor:"manual"},chartTheme:null,constructor:function(e,i){t.mixin(this,i),this.initialize(e,i)},getTitle:function(e){var t;return this.info&&(t=this.titleHasRelatedFields||this.titleHasAsyncExpressions?"":this._getPopupValues(e,this._fetchAttributes(e,null,this.getExpressionFieldsInTitle()),!0).title),t||""},getContent:function(e){return this.info?new a({template:this,graphic:e,chartTheme:this.chartTheme},n.create("div")).domNode:""}});return i("extend-esri")&&t.setObject("dijit.PopupTemplate",l,s),l});