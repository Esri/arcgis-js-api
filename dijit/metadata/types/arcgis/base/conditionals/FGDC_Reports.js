// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],function(e,t,i,o,n,r,a,s,d){var c=e(s,{key:"FGDC_Reports",postCreate:function(){this.inherited(arguments);var e=this;this.own(o.subscribe("gxe/interaction-occurred",function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var i=t.inputWidget.parentXNode.gxePath;"/metadata/dqInfo/report/@type"===i&&e.emitInteractionOccurred()}}catch(o){console.error(o)}})),this.own(o.subscribe("gxe/after-xnode-destroyed",function(t){try{if(e.parentXNode&&t&&t.xnode){var i=t.xnode.target;"report"===i&&e.emitInteractionOccurred()}}catch(o){console.error(o)}}))},ensureFocus:function(){d.ensureVisibility(this.parentXNode),i.some(this.parentXNode.getChildren(),function(e){return e._isGxeTabs?(i.some(e.getChildren(),function(t){return t.isReportSection?(e.ensureActiveTab(t),!0):void 0}),!0):void 0})},validateConditionals:function(e){var t,i=this.newStatus({message:a.conditionals[this.key]}),o=!0,n=this.parentXNode.domNode,r="/metadata/dqInfo/report/@type",s=!1,d=!1;return this.isXNodeOff(this.parentXNode)||(o=!1,this.forActiveXNodes(r,n,function(e){return e&&e.inputWidget&&(t=e.inputWidget.getInputValue(),"DQCompOm"===t?s=!0:"DQConcConsis"===t&&(d=!0)),s&&d?(o=!0,!0):void 0})),i.isValid=o,this.track(i,e),i}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.FGDC_Reports",c,r),c});