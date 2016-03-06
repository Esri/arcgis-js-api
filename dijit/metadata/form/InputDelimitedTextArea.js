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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","./InputTextArea","dojo/i18n!../nls/i18nBase","../../../kernel"],function(e,t,n,i,r,l,s){var u=e([r],{_supportsMultipleValues:!0,delimiter:",",hint:l.hints.delimitedTextArea,subTarget:null,postCreate:function(){this.inherited(arguments)},getDisplayValue:function(){if(!this.focusNode)return null;var e,t=[],n="",i=this.focusNode.value;if(this._mergeTokens(t,i),t.length>0)for(e=0;e<t.length;e++)n.length>0&&(n+=this.delimiter),n+=t[e];return n.length>0?n:null},getInputValue:function(){if(!this.focusNode)return null;var e=[],t=this.focusNode.value;return this._mergeTokens(e,t),1===e.length?e[0]:e.length>1?e:null},importValues:function(e,t){var n,i=[],r="";for(n=0;n<t.length;n++)this._mergeTokens(i,t[n]);for(n=0;n<i.length;n++)r.length>0&&(r+=this.delimiter),r+=i[n];this.setInputValue(r)},_mergeTokens:function(e,i){var r;null!=i&&(i=i.replace(/(\r\n|\r|\n|\n\r)/g,this.delimiter),r=i.split(this.delimiter),n.forEach(r,function(n){var i=t.trim(n);i.length>0&&e.push(i)}))}});return i("extend-esri")&&t.setObject("dijit.metadata.form.InputDelimitedTextArea",u,s),u});