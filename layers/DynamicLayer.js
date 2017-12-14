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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/accessorSupport/decorators","../core/promiseUtils","../core/Error","./Layer"],function(e,r,t,a,o,n,i,s,c){var l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.getImageUrl=function(e,r,t,a){throw new s("dynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},r.prototype.fetchImage=function(e,r,t,a){var n=this.getImageUrl(e,r,t,a),c={responseType:"image",allowImageDataAccess:a&&a.allowImageDataAccess||!1};a&&a.timestamp&&(c.query={_ts:a.timestamp});var l,m;return"string"==typeof n?(l=n,m=o(n,c)):m=n.then(function(e){return l=e,o(l,c)}),m.then(function(e){return e.data}).otherwise(function(e){return e&&"cancel"===e.dojoType?i.reject(e):l?i.reject(new s("dynamiclayer:image-fetch-error","Unable to load image: "+l,{error:e})):i.reject(new s("dynamiclayer:getImageUrl-error","Unable to create image url",{error:e}))})},a([n.shared({"2d":"../views/2d/layers/MapImageLayerView2D","3d":"../views/3d/layers/MapImageLayerView3D"})],r.prototype,"viewModulePaths",void 0),r=a([n.subclass("esri.layers.DynamicLayer")],r)}(n.declared(c));return l});