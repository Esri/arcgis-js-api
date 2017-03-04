// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],function(e,t,n,o,i,s,r,a,d){var c=e(a,{key:"GEN_ReportResult",postCreate:function(){this.inherited(arguments);var e=this;this.own(o.subscribe("gxe/interaction-occurred",function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var n=t.inputWidget.parentXNode.gxePath;"/metadata/dqInfo/report/@type"===n&&e.emitInteractionOccurred()}}catch(o){console.error(o)}})),this.own(o.subscribe("gxe/optional-content-toggled",function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var n=t.src.target;("ConResult"===n||"QuanResult"===n)&&e.emitInteractionOccurred()}}catch(o){console.error(o)}}))},ensureFocus:function(){d.ensureVisibility(this.parentXNode),n.some(this.parentXNode.getChildren(),function(e){return e._isGxeTabs?(n.some(e.getChildren(),function(t){return t.isResultSection?(e.ensureActiveTab(t),!0):void 0}),!0):void 0})},validateConditionals:function(e){var t,n=this.newStatus({message:r.conditionals[this.key]}),o=!0,i=this.parentXNode.domNode,s="/metadata/dqInfo/report/@type",a="/metadata/dqInfo/report/measResult/ConResult",d="/metadata/dqInfo/report/measResult/QuanResult",c=!1;return this.isXNodeOff(this.parentXNode)||(c=!0,this.parentXNode.gxeDocument.isAgsFGDC&&(t=this.findInputValue(s,i),("DQCompOm"===t||"DQConcConsis"===t)&&(c=!1)),this.parentXNode.gxeDocument.isAgsINSPIRE&&(t=this.findInputValue(s,i),"DQDomConsis"===t&&(c=!1))),c&&(o=!1,this.forActiveXNodes(a+","+d,i,function(e){return o=!0,!0})),n.isValid=o,this.track(n,e),n}});return i("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.GEN_ReportResult",c,s),c});