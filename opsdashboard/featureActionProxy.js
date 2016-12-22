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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/typescript","./core/ExtensionBase","../tasks/support/FeatureSet"],function(e,t,r,o,n,c,s){var u=function(e){function t(){e.call(this)}return r(t,e),t.prototype._messageReceived=function(e){var t=this;"execute"===e.functionName.toLowerCase()&&this.getDataSourceProxy(e.args.dataSourceId).then(function(r){t._execute(r,new s(e.args.featureSet),e.args.configuration||e.args.config)})},t.prototype._execute=function(e,t,r){this.emit("execute",{dataSourceProxy:e,features:t,config:r})},t=o([n.subclass()],t)}(c),a=new u;return a});