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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../base/InputBase","dojo/text!./templates/InputText.html","../../../kernel"],function(e,t,n,i,u,a){var s=e([i],{templateString:u,size:60,small:!1,maxlength:2048,useUniqueId:!1,regenerateIfTemplate:!1,postCreate:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.small&&(this.size=30)},connectXNode:function(e,t){this.inherited(arguments);var n=e.value;!t&&this.useUniqueId&&this.setInputValue(this._generateId()),(!t||e.fixed)&&"undefined"!=typeof n&&null!==n&&this.setInputValue(n)},_generateId:function(){var e=null;e="function"==typeof Date.now?Date.now():(new Date).getTime();var t=(""+Math.random()).replace("0.","r");return(e+""+t).replace(/-/g,"")},getInputValue:function(){return this.focusNode?this.focusNode.value:null},importValue:function(e,n){if(this.useUniqueId)try{e.asTemplate&&this.regenerateIfTemplate||null!==n&&t.trim(n).length>0&&this.setInputValue(n)}catch(i){}else this.setInputValue(n)},_onChange:function(){this.emitInteractionOccurred()},_onKeyup:function(){this.emitInteractionOccurred()},setInputValue:function(e){"undefined"==typeof e&&(e=null),this.focusNode.value=e,this.emitInteractionOccurred(),this.applyViewOnly()}});return n("extend-esri")&&t.setObject("dijit.metadata.form.InputText",s,a),s});