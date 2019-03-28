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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/JSONSupport","../../core/uuid","../../core/accessorSupport/decorators","./BuildingFilterBlock"],function(e,r,o,t,p,i,l,n,s){var c=p.ofType(s);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.id=l.generateUUID(),r.visible=!0,r.name=null,r}return o(r,e),t([n.property({type:String})],r.prototype,"description",void 0),t([n.property({type:c})],r.prototype,"filterBlocks",void 0),t([n.property({type:String})],r.prototype,"id",void 0),t([n.property({json:{read:{source:"isVisible"}},type:Boolean})],r.prototype,"visible",void 0),t([n.property({type:String})],r.prototype,"name",void 0),r=t([n.subclass("esri.layers.buildingSublayers.BuildingFilter")],r)}(n.declared(i))});