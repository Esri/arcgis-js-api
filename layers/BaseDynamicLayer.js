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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer"],function(e,r,t,n,a,i,o,s,c,p,u){return function(r){function c(){var e=null!==r&&r.apply(this,arguments)||this;return e.type="base-dynamic",e}return t(c,r),c.prototype.getImageUrl=function(e,r,t){throw new i("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},c.prototype.fetchImage=function(e,r,t,n){var i=this.getImageUrl(e,r,t),o={responseType:"image"};return n&&n.timestamp&&(o.query={_ts:n.timestamp}),"string"==typeof i?a(i,o).then(function(e){return e.data}):i.then(function(e){return a(e,o)}).then(function(e){return e.data})},c.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return o.create(function(r){return e(["../views/2d/layers/BaseDynamicLayerView2D"],r)});case"3d":return o.create(function(r){return e(["../views/3d/layers/DynamicLayerView3D"],r)})}},n([s.property({readOnly:!0,value:"base-dynamic"})],c.prototype,"type",void 0),c=n([s.subclass("esri.layers.BaseDynamicLayer")],c)}(s.declared(c,p,u))});