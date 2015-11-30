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
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],function(e,t,a,i,n,o,d,s){var r=e(s,{key:"INSPIRE_LineageStatement",postCreate:function(){this.inherited(arguments);var e=this;this.own(i.subscribe("gxe/interaction-occurred",function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var a=t.inputWidget.parentXNode.gxePath;"/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value"===a?e.emitInteractionOccurred():"/metadata/dqInfo/dataLineage/statement"===a&&e.emitInteractionOccurred()}}catch(i){console.error(i)}}))},validateConditionals:function(e){var t=this.newStatus({message:d.conditionals[this.key]}),a=!0,i=this.parentXNode.parentElement.parentElement,n="/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value";if(this.focusNode||(this.focusNode=this.parentXNode.inputWidget.focusNode),!this.isXNodeOff(this.parentXNode)&&this.isXNodeInputEmpty(this.parentXNode)){var o=this.findInputValue(n,i.domNode);("005"==o||"006"==o)&&(a=!1)}return t.isValid=a,this.track(t,e),t}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.INSPIRE_LineageStatement",r,o),r});