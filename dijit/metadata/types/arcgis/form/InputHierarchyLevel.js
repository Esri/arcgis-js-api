// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/query","dijit/registry","dojo/dom-class","dojo/dom-style","dojo/has","../../../../../kernel","./InputSelectCode","dojo/i18n!../../../nls/i18nArcGIS"],(function(e,t,a,n,r,d,i,o,c,s,l,p){var m=e([l],{postCreate:function(){this.inherited(arguments);var e=this;this.own(n.subscribe("gxe/xnode-destroyed",(function(t){try{if(t&&t.xnode)"/metadata/mdHrLv"===t.xnode.gxePath&&e.emitInteractionOccurred()}catch(e){console.error(e)}})))},emitInteractionOccurred:function(e){this.inherited(arguments);try{var t=this.parentXNode.gxeDocument;(t.isAgsISO19139||t.isAgsINSPIRE)&&this._checkLevelName(),(t.isAgsISO19139||t.isAgsINSPIRE||t.isAgsNAP||t.isAgsFGDC)&&this._checkService()}catch(e){console.error(e)}},_checkLevelName:function(){var e,t,n,o,c=this.parentXNode.parentElement.parentElement.parentElement.domNode,s=this.parentXNode.gxeDocument,l=!1;(s.isAgsISO19139||s.isAgsINSPIRE)&&(o=r("[data-gxe-path='/metadata/mdHrLv/ScopeCd/@value']",c),l=a.some(o,(function(a){if((t=d.byNode(a))&&null!==(e=t.inputWidget.getInputValue())&&""!==e&&"005"!==e&&"006"!==e)return!0})),(t=this._findFirstInputWgt("/metadata/mdHrLvName",c))&&(n=t.parentXNode.multiplicityHeader.labelNode,l?(t.parentXNode.minOccurs=1,t.parentXNode.multiplicityHeader.minOccurs=1,i.remove(n,"gxeOptionalLabel"),i.add(n,"gxeMandatoryLabel")):(t.parentXNode.minOccurs=0,t.parentXNode.multiplicityHeader.minOccurs=0,i.remove(n,"gxeMandatoryLabel"),i.add(n,"gxeOptionalLabel")),t.emitInteractionOccurred()))},_checkQuality:function(){var e,t,n,o,c=this.parentXNode.parentElement.parentElement.parentElement.domNode,s=this.parentXNode.gxeDocument,l=!1,p=!1,m=!1;(s.isAgsISO19139||s.isAgsINSPIRE||s.isAgsNAP)&&(o=r("[data-gxe-path='/metadata/mdHrLv/ScopeCd/@value']",c),a.forEach(o,(function(a){(t=d.byNode(a))&&("005"==(e=t.inputWidget.getInputValue())?p=!0:"006"===e&&(m=!0))}))),(s.isAgsISO19139||s.isAgsNAP)&&(l=p||m,(t=this._findElement("/metadata/dqInfo",c))&&t.labelWidget&&(n=t.labelWidget.domNode,l?(t.minOccurs=1,i.remove(n,"gxeOptionalLabel"),i.add(n,"gxeMandatoryLabel")):(t.minOccurs=0,i.remove(n,"gxeMandatoryLabel"),i.add(n,"gxeOptionalLabel"))))},_checkService:function(){var e,t,n,o=this.parentXNode.parentElement.parentElement.parentElement.domNode,c=this.parentXNode.gxeDocument,s=!1,l=!1;(c.isAgsISO19139||c.isAgsINSPIRE||c.isAgsNAP||c.isAgsFGDC)&&(n=r("[data-gxe-path='/metadata/mdHrLv/ScopeCd/@value']",o),a.forEach(n,(function(t){(e=d.byNode(t))&&"014"==e.inputWidget.getInputValue()&&(l=!0)}))),(c.isAgsISO19139||c.isAgsINSPIRE||c.isAgsNAP)&&(s=l,(e=this._findInputWgt("/metadata/dataIdInfo/svType/genericName",o))&&(t=e.parentXNode.labelNode,s?(e.parentXNode.minOccurs=1,i.remove(t,"gxeOptionalLabel"),i.add(t,"gxeMandatoryLabel")):(e.parentXNode.minOccurs=0,i.remove(t,"gxeMandatoryLabel"),i.add(t,"gxeOptionalLabel")),e.emitInteractionOccurred()),(e=this._findInputWgt("/metadata/dataIdInfo/svCouplType/CouplTypCd/@value",o))&&(t=e.parentXNode.parentElement.parentElement.labelNode,s?(e.parentXNode.minOccurs=1,e.parentXNode.parentElement.minOccurs=1,e.parentXNode.parentElement.parentElement.minOccurs=1,i.remove(t,"gxeOptionalLabel"),i.add(t,"gxeMandatoryLabel")):(e.parentXNode.minOccurs=0,e.parentXNode.parentElement.minOccurs=0,e.parentXNode.parentElement.parentElement.minOccurs=0,i.remove(t,"gxeMandatoryLabel"),i.add(t,"gxeOptionalLabel")),e.emitInteractionOccurred()))},_findElement:function(e,t){var a=r("[data-gxe-path='"+e+"']",t);return a&&1===a.length?d.byNode(a[0]):null},_findFirstInputWgt:function(e,t){var a,n=r("[data-gxe-path='"+e+"']",t);return n&&n.length>0&&(a=d.byNode(n[0]))?a.inputWidget:null},_findInputWgt:function(e,t){var a,n=r("[data-gxe-path='"+e+"']",t);return n&&1===n.length&&(a=d.byNode(n[0]))?a.inputWidget:null}});return c("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputHierarchyLevel",m,s),m}));