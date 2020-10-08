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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../request","../core/Error","../core/accessorSupport/decorators","./Layer","./mixins/BlendLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer"],(function(e,t,r,n,a,i,o,s,y,p){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="base-dynamic",t}return r.__extends(t,e),t.prototype.getImageUrl=function(){throw new a("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},t.prototype.fetchImage=function(e,t,r,a){var i=this.getImageUrl(e,t,r),o={responseType:"image",signal:a&&a.signal};return a&&a.timestamp&&(o.query={_ts:a.timestamp}),"string"==typeof i?n(i,o).then((function(e){return e.data})):i.then((function(e){return n(e,o)})).then((function(e){return e.data}))},r.__decorate([i.property({readOnly:!0,value:"base-dynamic"})],t.prototype,"type",void 0),r.__decorate([i.property({type:["show","hide"]})],t.prototype,"listMode",void 0),t=r.__decorate([i.subclass("esri.layers.BaseDynamicLayer")],t)}(s.BlendLayer(p.ScaleRangeLayer(y.RefreshableLayer(o))))}));