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

define(["dojo/_base/declare","dijit/_WidgetBase","dojo/_base/lang","dojo/_base/html","dojo/dom-class","dojo/on","dojo/Evented"],(function(t,e,s,i,h,a,c){return t([e,c],{baseClass:"jimu-checkbox",declaredClass:"esri.dijit.analysis.customgp.common.dijit.CheckBox",checked:!1,status:!0,label:"",postCreate:function(){this.checkNode=i.create("div",{class:"checkbox jimu-float-leading"},this.domNode),this.labelNode=i.create("div",{class:"label jimu-float-leading",innerHTML:this.label||""},this.domNode),this.checked&&i.addClass(this.checkNode,"checked"),this.status||i.addClass(this.domNode,"jimu-state-disabled"),this.own(a(this.checkNode,"click",s.hitch(this,(function(){this.status&&(this.checked?this.uncheck():this.check())})))),this.own(a(this.labelNode,"click",s.hitch(this,(function(){this.checked&&this.status?this.uncheck():this.status&&this.check()})))),this._udpateLabelClass()},setLabel:function(t){this.label=t,this.labelNode.innerHTML=this.label,this._udpateLabelClass()},_udpateLabelClass:function(){this.labelNode&&(this.labelNode.innerHTML?i.removeClass(this.labelNode,"not-visible"):i.addClass(this.labelNode,"not-visible"))},setValue:function(t){this.status&&(!0===t?this.check():this.uncheck())},getValue:function(){return this.checked},setStatus:function(t){t=!!t;var e=this.status!==t;this.status=t,this.status?h.remove(this.domNode,"jimu-state-disabled"):h.add(this.domNode,"jimu-state-disabled"),e&&this.emit("status-change",t)},getStatus:function(){return this.status},check:function(){this.status&&(this.checked=!0,i.addClass(this.checkNode,"checked"),this.onStateChange())},uncheck:function(t){this.status&&(this.checked=!1,i.removeClass(this.checkNode,"checked"),t||this.onStateChange())},onStateChange:function(){this.onChange&&s.isFunction(this.onChange)&&this.onChange(this.checked),this.emit("change",this.checked)}})}));