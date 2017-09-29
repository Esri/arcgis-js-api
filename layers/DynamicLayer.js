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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/accessorSupport/decorators","../core/promiseUtils","../core/Error","./Layer"],function(e,r,t,a,o,n,c,i,s){var l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.getImageUrl=function(e,r,t,a){throw new i("dynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},r.prototype.fetchImage=function(e,r,t,a){var n,s,l=this.getImageUrl(e,r,t,a),p={responseType:"image",allowImageDataAccess:a&&a.allowImageDataAccess||!1};return"string"==typeof l?(n=l,s=o(l,p)):s=l.then(function(e){return n=e,o(n,p)}),s.then(function(e){return e.data}).otherwise(function(e){return e&&"cancel"===e.dojoType?c.reject(e):n?c.reject(new i("dynamiclayer:image-fetch-error","Unable to load image: "+n,{error:e})):c.reject(new i("dynamiclayer:getImageUrl-error","Unable to create image url",{error:e}))})},a([n.shared({"2d":"../views/2d/layers/MapImageLayerView2D","3d":"../views/3d/layers/MapImageLayerView3D"})],r.prototype,"viewModulePaths",void 0),r=a([n.subclass("esri.layers.DynamicLayer")],r)}(n.declared(s));return l});