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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],function(t,e,i,o,n,a,r,s){var d=t(s,{key:"ISO19139A1_ROW15",postCreate:function(){this.inherited(arguments);var t=this;this.own(o.subscribe("gxe/interaction-occurred",function(e){try{if(t.parentXNode&&e&&e.inputWidget&&e.inputWidget.parentXNode){var i=e.inputWidget.parentXNode.gxePath;"/metadata/spatRepInfo/Georect/chkPtAv"===i?t.emitInteractionOccurred():"/metadata/spatRepInfo/Georect/chkPtDesc"===i&&t.emitInteractionOccurred()}}catch(t){console.error(t)}}))},validateConditionals:function(t){var e=this.newStatus({message:r.conditionals[this.key]}),i=!0,o=this.parentXNode.parentElement;return this.focusNode||(this.focusNode=this.parentXNode.inputWidget.focusNode),this.isXNodeOff(this.parentXNode)||this.isXNodeInputEmpty(this.parentXNode)&&this.forActiveXNodes("/metadata/spatRepInfo/Georect/chkPtAv",o.domNode,function(t){if("True"===t.inputWidget.getInputValue())return i=!1,!0}),e.isValid=i,this.track(e,t),e}});return n("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW15",d,a),d});