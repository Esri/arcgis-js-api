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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer"],function(e,r,t,a,n,o,i,s,c,p,u){return function(r){function c(){var e=null!==r&&r.apply(this,arguments)||this;return e.type="base-dynamic",e}return t(c,r),c.prototype.getImageUrl=function(e,r,t){throw new o("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},c.prototype.fetchImage=function(e,r,t,a){var o=this.getImageUrl(e,r,t),i={responseType:"image",allowImageDataAccess:a&&a.allowImageDataAccess||!1};return a&&a.timestamp&&(i.query={_ts:a.timestamp}),"string"==typeof o?n(o,i).then(function(e){return e.data}):o.then(function(e){return n(e,i)}).then(function(e){return e.data})},c.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return i.create(function(r){return e(["../views/2d/layers/BaseDynamicLayerView2D"],r)});case"3d":return i.create(function(r){return e(["../views/3d/layers/DynamicLayerView3D"],r)})}},a([s.property({readOnly:!0,value:"base-dynamic"})],c.prototype,"type",void 0),c=a([s.subclass("esri.layers.BaseDynamicLayer")],c)}(s.declared(c,p,u))});