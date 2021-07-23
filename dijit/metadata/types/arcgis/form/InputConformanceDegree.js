// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/has","../../../../../kernel","./InputSelectBoolean","../../../form/Option","dojo/i18n!../../../nls/i18nArcGIS"],(function(e,a,l,n,t,o,s,r){var i=e([o],{allInline:!1,serializeIfFalse:!0,falseLabel:r.dqInfo.report.ConResult.conPass._0,trueLabel:r.dqInfo.report.ConResult.conPass._1,falseValue:"0",trueValue:"1",postCreate:function(){this.inherited(arguments)},fetchOptionWidgets:function(){var e=new l,a=[];return a.push(new s({label:"",value:""})),a.push(new s({label:this.trueLabel,value:this.trueValue})),a.push(new s({label:this.falseLabel,value:this.falseValue})),e.resolve(a),e}});return n("extend-esri")&&a.setObject("dijit.metadata.types.arcgis.form.InputConformanceDegree",i,t),i}));