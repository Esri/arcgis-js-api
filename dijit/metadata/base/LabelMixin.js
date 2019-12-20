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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/topic","dojo/dom-style","dojo/has","./MandatoryLabel","./OptionalLabel","../../../kernel"],function(t,e,n,i,o,l,s,a){var c=t(null,{_contentIsOptional:!1,_contentNode:null,_isOptionallyOff:!1,labelWidget:null,constructor:function(t){e.mixin(this,t)},initializeLabel:function(t,n,i,o,a){this._contentIsOptional=n,this._contentNode=a,this._isOptionallyOff=!1;var c="";n?(i?(c='checked="checked"',this.toggleContent(!0)):this.toggleContent(!1),this.labelWidget=new s({label:t,checkedAttr:c,onClick:e.hitch(this,function(t){this.toggleContent(t,!0)})},o)):(this.labelWidget=new l({label:t},o),this.toggleContent(!0))},toggleContent:function(t,e){if(!this.hide&&this._contentNode&&(t?i.set(this._contentNode,"display","block"):i.set(this._contentNode,"display","none"),this._contentIsOptional)){this._isOptionallyOff=!t,!e&&this.labelWidget&&this.labelWidget.setChecked&&this.labelWidget.setChecked(t),this.whenOptionalContentToggled(!t);try{n.publish("gxe/optional-content-toggled",{src:this,isOptionallyOff:!t})}catch(t){console.error(t)}}},whenOptionalContentToggled:function(t){}});return o("extend-esri")&&e.setObject("dijit.metadata.base.LabelMixin",c,a),c});