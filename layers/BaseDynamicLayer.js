// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../request","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer"],function(e,r,t,n,a,o,i,s,p,c,u,y,l){return function(r){function u(){var e=null!==r&&r.apply(this,arguments)||this;return e.type="base-dynamic",e}return t(u,r),u.prototype.getImageUrl=function(e,r,t){throw new s("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},u.prototype.fetchImage=function(e,r,t,n){var a=this.getImageUrl(e,r,t),o={responseType:"image"};return n&&n.timestamp&&(o.query={_ts:n.timestamp}),"string"==typeof a?i(a,o).then(function(e){return e.data}):a.then(function(e){return i(e,o)}).then(function(e){return e.data})},u.prototype.importLayerViewModule=function(r){return o(this,void 0,void 0,function(){return a(this,function(t){switch(r.type){case"2d":return[2,p.create(function(r){return e(["../views/2d/layers/BaseDynamicLayerView2D"],r)})];case"3d":return[2,p.create(function(r){return e(["../views/3d/layers/DynamicLayerView3D"],r)})]}return[2]})})},n([c.property({readOnly:!0,value:"base-dynamic"})],u.prototype,"type",void 0),n([c.property({type:["show","hide"]})],u.prototype,"listMode",void 0),u=n([c.subclass("esri.layers.BaseDynamicLayer")],u)}(c.declared(l.ScaleRangeLayer(y.RefreshableLayer(u))))});