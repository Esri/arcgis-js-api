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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../request","../core/Error","../core/accessorSupport/decorators","./Layer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer"],function(e,r,t,a,n,o,p,s,i,c,l,u){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="base-dynamic",r}return t(r,e),r.prototype.getImageUrl=function(){throw new s("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented")},r.prototype.fetchImage=function(e,r,t,a){var n=this.getImageUrl(e,r,t),o={responseType:"image",signal:a&&a.signal};return a&&a.timestamp&&(o.query={_ts:a.timestamp}),"string"==typeof n?p(n,o).then(function(e){return e.data}):n.then(function(e){return p(e,o)}).then(function(e){return e.data})},a([i.property({readOnly:!0,value:"base-dynamic"})],r.prototype,"type",void 0),a([i.property({type:["show","hide"]})],r.prototype,"listMode",void 0),r=a([i.subclass("esri.layers.BaseDynamicLayer")],r)}(i.declared(u.ScaleRangeLayer(l.RefreshableLayer(c))))});