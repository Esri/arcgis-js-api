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

define(["require","exports","tslib","../Viewpoint","../core/Accessor","../core/lang","../core/accessorSupport/decorators","../geometry/SpatialReference","../webdoc/RangeInfo","./background/ColorBackground"],(function(e,o,r,t,n,i,p,a,c,s){return function(e){function o(o){var r=e.call(this,o)||this;return r.background=null,r.rangeInfo=null,r.spatialReference=null,r.viewpoint=null,r}var n;return r.__extends(o,e),n=o,o.prototype.clone=function(){return new n(i.clone({background:this.background,rangeInfo:this.rangeInfo,spatialReference:this.spatialReference,viewpoint:this.viewpoint}))},r.__decorate([p.property({type:s})],o.prototype,"background",void 0),r.__decorate([p.property({type:c})],o.prototype,"rangeInfo",void 0),r.__decorate([p.property({type:a})],o.prototype,"spatialReference",void 0),r.__decorate([p.property({type:t})],o.prototype,"viewpoint",void 0),o=n=r.__decorate([p.subclass("esri.webmap.InitialViewProperties")],o)}(n)}));