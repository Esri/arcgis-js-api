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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],function(t,e,s,o,n,i,r,a){var d=t(a,{key:"ISO19139A1_ROW7",postCreate:function(){this.inherited(arguments);var t=this;this.own(o.subscribe("gxe/interaction-occurred",function(e){try{if(t.parentXNode&&e&&e.inputWidget&&e.inputWidget.parentXNode){var s=e.inputWidget.parentXNode.gxePath,o=t.parentXNode.gxePath,n=o+"/accessConsts/RestrictCd/@value",i=o+"/useConsts/RestrictCd/@value",r=o+"/othConsts";(s===n||s===i||s===r)&&t.emitInteractionOccurred()}}catch(a){console.error(a)}})),this.own(o.subscribe("gxe/after-xnode-destroyed",function(e){try{if(t.parentXNode&&e&&e.xnode){var s=e.xnode.target;("accessConsts"===s||"useConsts"===s||"othConsts"===s)&&t.emitInteractionOccurred()}}catch(o){console.error(o)}}))},validateConditionals:function(t){var e=this.newStatus({message:r.conditionals[this.key]}),s=!0,o=this.parentXNode.domNode,n=!1,i=this.parentXNode.gxePath,a=i+"/accessConsts/RestrictCd/@value",d=i+"/useConsts/RestrictCd/@value",c=i+"/othConsts";return this.isXNodeOff(this.parentXNode)||this.forActiveXNodes(a+","+d,o,function(t){var e=t.inputWidget.getInputValue();return"008"===e?(n=!0,!0):void 0}),n&&(s=!1,this.forActiveXNodes(c,o,function(t){return this.isXNodeInputEmpty(t)?void 0:(s=!0,!0)},this)),e.isValid=s,this.track(e,t),e}});return n("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW7",d,i),d});