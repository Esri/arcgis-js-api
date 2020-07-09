// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],(function(e,t,n,o,i,s,r,a,d){var c=e(a,{key:"GEN_ReportResult",postCreate:function(){this.inherited(arguments);var e=this;this.own(o.subscribe("gxe/interaction-occurred",(function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode)"/metadata/dqInfo/report/@type"===t.inputWidget.parentXNode.gxePath&&e.emitInteractionOccurred()}catch(e){console.error(e)}}))),this.own(o.subscribe("gxe/optional-content-toggled",(function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var n=t.src.target;"ConResult"!==n&&"QuanResult"!==n||e.emitInteractionOccurred()}}catch(e){console.error(e)}})))},ensureFocus:function(){d.ensureVisibility(this.parentXNode),n.some(this.parentXNode.getChildren(),(function(e){if(e._isGxeTabs)return n.some(e.getChildren(),(function(t){if(t.isResultSection)return e.ensureActiveTab(t),!0})),!0}))},validateConditionals:function(e){var t,n=this.newStatus({message:r.conditionals[this.key]}),o=!0,i=this.parentXNode.domNode,s="/metadata/dqInfo/report/@type",a=!1;return this.isXNodeOff(this.parentXNode)||(a=!0,this.parentXNode.gxeDocument.isAgsFGDC&&("DQCompOm"!==(t=this.findInputValue(s,i))&&"DQConcConsis"!==t||(a=!1)),this.parentXNode.gxeDocument.isAgsINSPIRE&&"DQDomConsis"===(t=this.findInputValue(s,i))&&(a=!1)),a&&(o=!1,this.forActiveXNodes("/metadata/dqInfo/report/measResult/ConResult,/metadata/dqInfo/report/measResult/QuanResult",i,(function(e){return o=!0,!0}))),n.isValid=o,this.track(n,e),n}});return i("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.GEN_ReportResult",c,s),c}));