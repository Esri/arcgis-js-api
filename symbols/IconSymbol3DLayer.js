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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Symbol3DLayer","./support/IconSymbol3DLayerResource","./support/materialUtils","./support/Symbol3DOutline"],function(e,t,o,r,i,n,l,p,s){return function(e){function t(t){var o=e.call(this)||this;return o.material=null,o.resource=null,o.type="icon",o.size=12,o.anchor=void 0,o.outline=void 0,o}o(t,e),n=t,t.prototype.clone=function(){return new n({anchor:this.anchor,enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone(),resource:this.resource&&this.resource.clone(),size:this.size})};var n;return r([i.property()],t.prototype,"material",void 0),r([i.property({type:l.default,json:{write:!0}})],t.prototype,"resource",void 0),r([i.enumeration.serializable()({Icon:"icon"})],t.prototype,"type",void 0),r([i.property(p.screenSizeProperty)],t.prototype,"size",void 0),r([i.enumeration.serializable()({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right"})],t.prototype,"anchor",void 0),r([i.property({type:s.default,json:{write:!0}})],t.prototype,"outline",void 0),t=n=r([i.subclass("esri.symbols.IconSymbol3DLayer")],t)}(i.declared(n))});