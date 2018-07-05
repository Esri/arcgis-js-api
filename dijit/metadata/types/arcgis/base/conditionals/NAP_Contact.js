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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional"],function(e,t,n,i,o,r,d,s){var c=e(s,{key:"NAP_Contact",postCreate:function(){this.inherited(arguments);var e=this;this.own(i.subscribe("gxe/interaction-occurred",function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var n=t.inputWidget.parentXNode.gxePath;null!==n&&-1!==n.indexOf("/rpCntInfo/")&&(-1===n.indexOf("/cntAddress/delPoint")&&-1===n.indexOf("/cntPhone/voiceNum")&&-1===n.indexOf("/cntOnlineRes/linkage")||e.emitInteractionOccurred())}}catch(e){console.error(e)}})),this.own(i.subscribe("gxe/optional-content-toggled",function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){"cntOnlineRes"===t.src.target&&e.emitInteractionOccurred()}}catch(e){console.error(e)}})),this.own(i.subscribe("gxe/after-xnode-destroyed",function(t){try{if(e.parentXNode&&t&&t.xnode){var n=t.xnode.gxePath;null!==n&&-1!==n.indexOf("/rpCntInfo/")&&(-1===n.indexOf("/cntAddress/delPoint")&&-1===n.indexOf("/cntPhone/voiceNum")&&-1===n.indexOf("/cntOnlineRes/linkage")||e.emitInteractionOccurred())}}catch(e){console.error(e)}}))},validateConditionals:function(e){var t=this.newStatus({message:d.conditionals[this.key]}),n=!0,i=this.parentXNode.domNode,o=this.parentXNode.gxePath,r=o+"/cntAddress/delPoint",s=o+"/cntPhone/voiceNum",c=o+"/cntOnlineRes/linkage";return this.isXNodeOff(this.parentXNode)||(n=!1),n||this.forActiveXNodes(r+","+s+","+c,i,function(e){if(!this.isXNodeInputEmpty(e))return n=!0,!0},this),t.isValid=n,this.track(t,e),t}});return o("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.NAP_Contact",c,r),c});