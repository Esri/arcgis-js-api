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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/has","../../../../../kernel","../../../base/etc/docUtil","./InputSelectCode"],function(e,t,a,n,o,r,d){var i=e([d],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(e){this.inherited(arguments);try{var t=this.parentXNode.gxeDocument;!t.isViewOnly&&t.isAgsFGDC&&this._updateEvalMethod()}catch(a){console.error(a)}},_updateEvalMethod:function(){var e=this.getInputValue(),t="/metadata/dqInfo/report/evalMethDesc",n=this.parentXNode.parentElement.domNode,o=r.findInputWidget(t,n),d=!1;if(("DQAbsExtPosAcc"===e||"DQQuanAttAcc"===e)&&(d=!0),o){var i=o.parentXNode.labelNode;d?(o.parentXNode.minOccurs=1,a.remove(i,"gxeOptionalLabel"),a.add(i,"gxeMandatoryLabel")):(o.parentXNode.minOccurs=0,a.remove(i,"gxeMandatoryLabel"),a.add(i,"gxeOptionalLabel")),o.emitInteractionOccurred()}}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputReportType",i,o),i});