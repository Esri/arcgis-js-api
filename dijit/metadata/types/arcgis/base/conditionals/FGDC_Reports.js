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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],(function(e,t,i,n,o,r,s,a,d){var c=e(a,{key:"FGDC_Reports",postCreate:function(){this.inherited(arguments);var e=this;this.own(n.subscribe("gxe/interaction-occurred",(function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode)"/metadata/dqInfo/report/@type"===t.inputWidget.parentXNode.gxePath&&e.emitInteractionOccurred()}catch(e){console.error(e)}}))),this.own(n.subscribe("gxe/after-xnode-destroyed",(function(t){try{if(e.parentXNode&&t&&t.xnode)"report"===t.xnode.target&&e.emitInteractionOccurred()}catch(e){console.error(e)}})))},ensureFocus:function(){d.ensureVisibility(this.parentXNode),i.some(this.parentXNode.getChildren(),(function(e){if(e._isGxeTabs)return i.some(e.getChildren(),(function(t){if(t.isReportSection)return e.ensureActiveTab(t),!0})),!0}))},validateConditionals:function(e){var t,i=this.newStatus({message:s.conditionals[this.key]}),n=!0,o=this.parentXNode.domNode,r=!1,a=!1;return this.isXNodeOff(this.parentXNode)||(n=!1,this.forActiveXNodes("/metadata/dqInfo/report/@type",o,(function(e){if(e&&e.inputWidget&&("DQCompOm"===(t=e.inputWidget.getInputValue())?r=!0:"DQConcConsis"===t&&(a=!0)),r&&a)return n=!0,!0}))),i.isValid=n,this.track(i,e),i}});return o("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.FGDC_Reports",c,r),c}));