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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Symbol3DLayer"],function(e,t,o,r,i,p){return function(e){function t(t){var o=e.call(this)||this;return o.material=null,o.castShadows=!0,o.type="path",o.size=void 0,o.profile="tube",o.joint="simple",o}o(t,e),p=t,t.prototype.readSize=function(e,t){return e||t.width||0},t.prototype.clone=function(){return new p({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),castShadows:this.castShadows,size:this.size,profile:this.profile,joint:this.joint})};var p;return r([i.property()],t.prototype,"material",void 0),r([i.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],t.prototype,"castShadows",void 0),r([i.enumeration.serializable()({Path:"path"})],t.prototype,"type",void 0),r([i.property({type:Number,json:{write:{enabled:!0,target:{size:{type:Number},width:{type:Number}}}}})],t.prototype,"size",void 0),r([i.reader("size",["size","width"])],t.prototype,"readSize",null),r([i.property()],t.prototype,"profile",void 0),r([i.property()],t.prototype,"joint",void 0),t=p=r([i.subclass("esri.symbols.PathSymbol3DLayer")],t)}(i.declared(p))});