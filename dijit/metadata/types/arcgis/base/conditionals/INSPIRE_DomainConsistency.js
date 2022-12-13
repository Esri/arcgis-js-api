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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],(function(e,t,i,n,o,r,s,a,d){var c=e(a,{key:"INSPIRE_DomainConsistency",postCreate:function(){this.inherited(arguments);var e=this;this.own(n.subscribe("gxe/interaction-occurred",(function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode)"/metadata/dqInfo/report/@type"===t.inputWidget.parentXNode.gxePath&&e.emitInteractionOccurred()}catch(e){console.error(e)}}))),this.own(n.subscribe("gxe/after-xnode-destroyed",(function(t){try{if(e.parentXNode&&t&&t.xnode)"report"===t.xnode.target&&e.emitInteractionOccurred()}catch(e){console.error(e)}})))},ensureFocus:function(){d.ensureVisibility(this.parentXNode),i.some(this.parentXNode.getChildren(),(function(e){if(e._isGxeTabs)return i.some(e.getChildren(),(function(t){if(t.isReportSection)return e.ensureActiveTab(t),!0})),!0}))},validateConditionals:function(e){var t=this.newStatus({message:s.conditionals[this.key]}),i=!0,n=this.parentXNode.domNode;return this.isXNodeOff(this.parentXNode)||(i=!1,this.forActiveXNodes("/metadata/dqInfo/report/@type",n,(function(e){if("DQDomConsis"===e.inputWidget.getInputValue())return i=!0,!0}))),t.isValid=i,this.track(t,e),t}});return o("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.INSPIRE_DomainConsistency",c,r),c}));