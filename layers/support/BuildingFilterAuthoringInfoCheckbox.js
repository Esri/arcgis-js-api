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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/lang","../../core/accessorSupport/decorators","./BuildingFilterAuthoringInfo","./BuildingFilterAuthoringInfoBlock"],function(e,r,o,t,n,i,c,p,l){var u=n.ofType(l);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="checkbox",r}o(r,e),n=r,r.prototype.clone=function(){return new n({filterBlocks:i.clone(this.filterBlocks)})};var n;return t([c.property({type:["checkbox"]})],r.prototype,"type",void 0),t([c.property({type:u,json:{write:!0}})],r.prototype,"filterBlocks",void 0),r=n=t([c.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],r)}(c.declared(p))});