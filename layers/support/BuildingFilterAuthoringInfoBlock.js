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

define(["require","exports","tslib","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./BuildingFilterAuthoringInfoType"],(function(e,r,t,o,n,i,p,l){var s=o.ofType(l);return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){return new o({filterTypes:i.clone(this.filterTypes)})},t.__decorate([p.property({type:s,json:{write:!0}})],r.prototype,"filterTypes",void 0),r=o=t.__decorate([p.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],r)}(n.JSONSupport)}));