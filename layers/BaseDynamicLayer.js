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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/Error","./Layer","../core/accessorSupport/decorators"],function(e,r,t,a,n,o,s,i){var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="base-dynamic",r}return t(r,e),r.prototype.getImageUrl=function(e,r,t){throw new o("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},r.prototype.fetchImage=function(e,r,t,a){var o=this.getImageUrl(e,r,t),s={responseType:"image",allowImageDataAccess:a&&a.allowImageDataAccess||!1};return"string"==typeof o?n(o,s).then(function(e){return e.data}):o.then(function(e){return n(e,s)}).then(function(e){return e.data})},r}(i.declared(s));return a([i.shared({"2d":"../views/2d/layers/BaseDynamicLayerView2D","3d":"../views/3d/layers/DynamicLayerView3D"})],c.prototype,"viewModulePaths",void 0),a([i.property({readOnly:!0,value:"base-dynamic"})],c.prototype,"type",void 0),c=a([i.subclass("esri.layers.BaseDynamicLayer")],c)});