// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../request","../core/Error","../core/accessorSupport/decorators","./Layer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer"],(function(e,t,r,a,n,o,i,s,p){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="base-dynamic",t}return r.__extends(t,e),t.prototype.getImageUrl=function(){throw new n("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},t.prototype.fetchImage=function(e,t,r,n){var o=this.getImageUrl(e,t,r),i={responseType:"image",signal:n&&n.signal};return n&&n.timestamp&&(i.query={_ts:n.timestamp}),"string"==typeof o?a(o,i).then((function(e){return e.data})):o.then((function(e){return a(e,i)})).then((function(e){return e.data}))},r.__decorate([o.property({readOnly:!0,value:"base-dynamic"})],t.prototype,"type",void 0),r.__decorate([o.property({type:["show","hide"]})],t.prototype,"listMode",void 0),t=r.__decorate([o.subclass("esri.layers.BaseDynamicLayer")],t)}(p.ScaleRangeLayer(s.RefreshableLayer(i)))}));