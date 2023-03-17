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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../../kernel","./Templated","dojo/text!./templates/OptionalLabel.html"],(function(e,t,i,c,o,s,d,h,n){var l=e([h],{checkedAttr:"",label:null,templateString:n,postCreate:function(){this.inherited(arguments),null!=this.checkedAttr&&this.checkedAttr.length>0&&this.setChecked(!0),this.connectAriaClickable(this.switchNode,t.hitch(this,this._onClick))},_onClick:function(){var e=i.contains(this.switchNode,"checked");this.setChecked(!e),this.onClick(!e)},onClick:function(e){},setChecked:function(e){e?i.add(this.switchNode,"checked"):i.remove(this.switchNode,"checked")}});return s("extend-esri")&&t.setObject("dijit.metadata.base.OptionalLabel",l,d),l}));