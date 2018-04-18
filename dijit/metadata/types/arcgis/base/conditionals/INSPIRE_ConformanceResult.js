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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],function(t,e,o,n,i,r,a,s,d){var c=t(s,{key:"INSPIRE_ConformanceResult",postCreate:function(){this.inherited(arguments);var t=this;this.own(n.subscribe("gxe/interaction-occurred",function(e){try{if(t.parentXNode&&e&&e.inputWidget&&e.inputWidget.parentXNode){"/metadata/dqInfo/report/@type"===e.inputWidget.parentXNode.gxePath&&t.emitInteractionOccurred()}}catch(t){console.error(t)}})),this.own(n.subscribe("gxe/optional-content-toggled",function(e){try{if(t.parentXNode&&e&&e.src&&e.src.target){"ConResult"===e.src.target&&t.emitInteractionOccurred()}}catch(t){console.error(t)}}))},ensureFocus:function(){var t=this.parentXNode.domNode;d.ensureVisibility(this.parentXNode);var e=this.findElement("/metadata/dqInfo/report/measResult/ConResult",t);e&&(d.ensureVisibility(e),e._isOptionallyOff&&e.toggleContent(!0))},validateConditionals:function(t){var e=this.newStatus({message:a.conditionals[this.key]}),o=!0,n=this.parentXNode.domNode;if(!this.isXNodeOff(this.parentXNode)){"DQDomConsis"===this.findInputValue("/metadata/dqInfo/report/@type",n)&&(o=!1,this.forActiveXNodes("/metadata/dqInfo/report/measResult/ConResult",n,function(t){return o=!0,!0}))}return e.isValid=o,this.track(e,t),e}});return i("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.INSPIRE_ConformanceResult",c,r),c});