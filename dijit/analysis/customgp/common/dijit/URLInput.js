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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/html","dijit/form/ValidationTextBox","dojox/validate/regexp","dojo/i18n!../nls/main"],(function(i,e,t,s,a){return i([t],{required:!0,invalidMessage:"Invalid url.",trim:!0,rest:!0,allowNamed:!0,allowLocal:!0,declaredClass:"esri.dijit.analysis.customgp.common.dijit.URLInput",postMixInProperties:function(){this.inherited(arguments),this.nls=a.urlInput,this.invalidMessage=this.nls?this.nls.invalidUrl:"Invalid Url"},postCreate:function(){this.inherited(arguments),e.addClass(this.domNode,"jimu-url-input")},validator:function(i){if(!1===this.required&&""===i)return!0;if(isFinite(i))return!1;var e="^"+s.url({allowNamed:this.allowNamed,allowLocal:this.allowLocal}),t=new RegExp(e,"g");t.lastIndex=0;var a=t.test(i);if(this.rest){var l=/\/rest\/services/gi.test(i);return a&&l}return a}})}));