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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./BuildingFilterAuthoringInfoType"],(function(e,r,o,t,p,n,i,l,c){var u=p.ofType(c);return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var p;return o(r,e),p=r,r.prototype.clone=function(){return new p({filterTypes:i.clone(this.filterTypes)})},t([l.property({type:u,json:{write:!0}})],r.prototype,"filterTypes",void 0),r=p=t([l.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],r)}(l.declared(n.JSONSupport))}));