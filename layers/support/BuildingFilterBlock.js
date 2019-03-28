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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","./BuildingFilterMode","./BuildingFilterModeSolid","./BuildingFilterModeWireframe"],function(e,r,t,i,o,l,p,n,d){var s={types:{key:"type",base:p,typeMap:{solid:n,wireframe:d}}};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterExpression=null,r.filterMode=null,r.title=null,r}return t(r,e),i([l.property({type:String})],r.prototype,"filterExpression",void 0),i([l.property(s)],r.prototype,"filterMode",void 0),i([l.property({type:String})],r.prototype,"title",void 0),r=i([l.subclass("esri.layers.buildingSublayers.BuildingFilterBlock")],r)}(l.declared(o))});