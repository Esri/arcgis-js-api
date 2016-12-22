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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],function(e,t,a,n,o,i,r,d){var c=e(d,{key:"ISO19139A1_ROW10_11_12",postCreate:function(){this.inherited(arguments);var e=this;this.own(n.subscribe("gxe/interaction-occurred",function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var a=t.inputWidget.parentXNode.gxePath;"/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value"===a?e.emitInteractionOccurred():"/metadata/dqInfo/dataLineage/statement"===a&&e.emitInteractionOccurred()}}catch(n){console.error(n)}})),this.own(n.subscribe("gxe/optional-content-toggled",function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var a=t.src.target;("prcStep"===a||"dataSource"===a)&&e.emitInteractionOccurred()}}catch(n){console.error(n)}})),this.own(n.subscribe("gxe/after-xnode-destroyed",function(t){try{if(e.parentXNode&&t&&t.xnode){var a=t.xnode.target;("prcStep"===a||"dataSource"===a)&&e.emitInteractionOccurred()}}catch(n){console.error(n)}}))},hasLineage:function(e){var t=!1,a=e.domNode,n="/metadata/dqInfo/dataLineage/statement",o="/metadata/dqInfo/dataLineage/prcStep/stepDesc",i="/metadata/dqInfo/dataLineage/dataSource/srcDesc";return this.forActiveXNodes(n,a,function(e){return this.isXNodeInputEmpty(e)?void 0:(t=!0,!0)},this),t||this.forActiveXNodes(o+","+i,a,function(e){return t=!0,!0},this),t},validateConditionals:function(e){var t=this.newStatus({message:r.conditionals[this.key]}),a=!0,n=this.parentXNode.parentElement,o="/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value";if(!this.isXNodeOff(this.parentXNode)){var i=this.findInputValue(o,n.domNode);("005"==i||"006"==i)&&(a=this.hasLineage(n))}return t.isValid=a,this.track(t,e),t}});return o("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW10_11_12",c,i),c});