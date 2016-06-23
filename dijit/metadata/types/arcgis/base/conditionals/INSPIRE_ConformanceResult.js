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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],function(t,e,o,n,i,r,a,s,d){var c=t(s,{key:"INSPIRE_ConformanceResult",postCreate:function(){this.inherited(arguments);var t=this;this.own(n.subscribe("gxe/interaction-occurred",function(e){try{if(t.parentXNode&&e&&e.inputWidget&&e.inputWidget.parentXNode){var o=e.inputWidget.parentXNode.gxePath;"/metadata/dqInfo/report/@type"===o&&t.emitInteractionOccurred()}}catch(n){console.error(n)}})),this.own(n.subscribe("gxe/optional-content-toggled",function(e){try{if(t.parentXNode&&e&&e.src&&e.src.target){var o=e.src.target;"ConResult"===o&&t.emitInteractionOccurred()}}catch(n){console.error(n)}}))},ensureFocus:function(){var t=this.parentXNode.domNode,e="/metadata/dqInfo/report/measResult/ConResult";d.ensureVisibility(this.parentXNode);var o=this.findElement(e,t);o&&(d.ensureVisibility(o),o._isOptionallyOff&&o.toggleContent(!0))},validateConditionals:function(t){var e=this.newStatus({message:a.conditionals[this.key]}),o=!0,n=this.parentXNode.domNode,i="/metadata/dqInfo/report/@type",r="/metadata/dqInfo/report/measResult/ConResult";if(!this.isXNodeOff(this.parentXNode)){var s=this.findInputValue(i,n);"DQDomConsis"===s&&(o=!1,this.forActiveXNodes(r,n,function(){return o=!0,!0}))}return e.isValid=o,this.track(e,t),e}});return i("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.INSPIRE_ConformanceResult",c,r),c});