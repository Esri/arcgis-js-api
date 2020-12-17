// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../base/InputBase","dojo/text!./templates/InputTextArea.html","../../../kernel"],(function(e,t,n,i,r,o,u){var s=e([r],{templateString:o,large:!1,cols:50,rows:4,postCreate:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.large&&(this.cols=60,this.rows=8)},connectXNode:function(e,t){this.inherited(arguments);var n=e.value;t&&!e.fixed||null!=n&&this.setInputValue(n)},getDisplayValue:function(){if(!this.focusNode)return null;var e=this.focusNode.value,i=[];if(null===e)return null;var r=(e=e.replace(/(\r\n|\r|\n|\n\r)/g,"<br/>")).split("<br/>");return n.forEach(r,(function(e){var n=t.trim(e);n.length>0&&i.push(n)})),1===i.length?i[0]:i.length>1?i:null},getInputValue:function(){return this.focusNode?this.focusNode.value:null},_onChange:function(e){this.emitInteractionOccurred()},_onKeyup:function(e){this.emitInteractionOccurred()},setInputValue:function(e){void 0===e&&(e=null),this.focusNode.value=e,this.emitInteractionOccurred(),this.applyViewOnly()}});return i("extend-esri")&&t.setObject("dijit.metadata.form.InputTextArea",s,u),s}));