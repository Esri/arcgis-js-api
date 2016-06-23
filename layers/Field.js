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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./RangeDomain","./CodedValueDomain"],function(e,a,i,n,s,t){var l=e(null,{declaredClass:"esri.layers.Field",constructor:function(e){if(e&&a.isObject(e)){this.name=e.name,this.type=e.type,this.alias=e.alias,this.length=e.length,this.editable=e.editable,this.nullable=e.nullable;var i=e.domain;if(i&&a.isObject(i))switch(i.type){case"range":this.domain=new s(i);break;case"codedValue":this.domain=new t(i)}}}});return i("extend-esri")&&a.setObject("layers.Field",l,n),l});