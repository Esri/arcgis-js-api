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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../tasks/FeatureSet","./core/ExtensionBase"],function(e,t,a,n){var o=e([n],{_messageReceived:function(e){"execute"===e.functionName.toLowerCase()&&this.getDataSourceProxy(e.args.dataSourceId).then(t.hitch(this,function(t){this._execute(t,new a(e.args.featureSet),e.args.configuration||e.args.config)}))},_execute:function(e,t,a){this.emit("execute",{dataSourceProxy:e,featureSet:t,config:a})}});return new o});