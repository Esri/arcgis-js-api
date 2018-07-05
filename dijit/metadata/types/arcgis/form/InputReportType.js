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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/has","../../../../../kernel","../../../base/etc/docUtil","./InputSelectCode"],function(e,t,a,o,n,r,d){var i=e([d],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(e){this.inherited(arguments);try{var t=this.parentXNode.gxeDocument;!t.isViewOnly&&t.isAgsFGDC&&this._updateEvalMethod()}catch(e){console.error(e)}},_updateEvalMethod:function(){var e=this.getInputValue(),t=this.parentXNode.parentElement.domNode,o=r.findInputWidget("/metadata/dqInfo/report/evalMethDesc",t),n=!1;if("DQAbsExtPosAcc"!==e&&"DQQuanAttAcc"!==e||(n=!0),o){var d=o.parentXNode.labelNode;n?(o.parentXNode.minOccurs=1,a.remove(d,"gxeOptionalLabel"),a.add(d,"gxeMandatoryLabel")):(o.parentXNode.minOccurs=0,a.remove(d,"gxeMandatoryLabel"),a.add(d,"gxeOptionalLabel")),o.emitInteractionOccurred()}}});return o("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputReportType",i,n),i});