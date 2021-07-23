// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],(function(t,e,s,o,i,n,r,a){var d=t(a,{key:"ISO19139A1_ROW7",postCreate:function(){this.inherited(arguments);var t=this;this.own(o.subscribe("gxe/interaction-occurred",(function(e){try{if(t.parentXNode&&e&&e.inputWidget&&e.inputWidget.parentXNode){var s=e.inputWidget.parentXNode.gxePath,o=t.parentXNode.gxePath;s!==o+"/accessConsts/RestrictCd/@value"&&s!==o+"/useConsts/RestrictCd/@value"&&s!==o+"/othConsts"||t.emitInteractionOccurred()}}catch(t){console.error(t)}}))),this.own(o.subscribe("gxe/after-xnode-destroyed",(function(e){try{if(t.parentXNode&&e&&e.xnode){var s=e.xnode.target;"accessConsts"!==s&&"useConsts"!==s&&"othConsts"!==s||t.emitInteractionOccurred()}}catch(t){console.error(t)}})))},validateConditionals:function(t){var e=this.newStatus({message:r.conditionals[this.key]}),s=!0,o=this.parentXNode.domNode,i=!1,n=this.parentXNode.gxePath,a=n+"/accessConsts/RestrictCd/@value",d=n+"/useConsts/RestrictCd/@value",c=n+"/othConsts";return this.isXNodeOff(this.parentXNode)||this.forActiveXNodes(a+","+d,o,(function(t){if("008"===t.inputWidget.getInputValue())return i=!0,!0})),i&&(s=!1,this.forActiveXNodes(c,o,(function(t){if(!this.isXNodeInputEmpty(t))return s=!0,!0}),this)),e.isValid=s,this.track(e,t),e}});return i("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW7",d,n),d}));