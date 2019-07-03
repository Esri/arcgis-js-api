// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Error","../../../core/accessorSupport/decorators","../../../layers/FeatureLayer"],function(e,r,t,a,o,u,s){return function(e){function r(r){var t=e.call(this,r)||this;return t.handleAsTable=!1,t}return t(r,e),r.prototype._verifySource=function(){if(this._hasMemorySource()){if(this.url)throw new o("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new o("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")},r=a([u.subclass("esri.arcade.featureset.polyfill.FeatureLayerAndTable")],r)}(u.declared(s))});