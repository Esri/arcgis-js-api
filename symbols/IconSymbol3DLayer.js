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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Symbol3DLayer","./support/IconSymbol3DLayerResource","./support/materialUtils","./support/Symbol3DAnchorPosition2D","./support/Symbol3DOutline"],function(o,e,t,r,i,n,s,l,p,a){return function(o){function e(e){var t=o.call(this)||this;return t.material=null,t.resource=null,t.type="icon",t.size=12,t.anchor="center",t.anchorPosition=void 0,t.outline=void 0,t}t(e,o),n=e,e.prototype.clone=function(){return new n({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone(),resource:this.resource&&this.resource.clone(),size:this.size})};var n;return r([i.property()],e.prototype,"material",void 0),r([i.property({type:s.default,json:{write:!0}})],e.prototype,"resource",void 0),r([i.enumeration.serializable()({Icon:"icon"})],e.prototype,"type",void 0),r([i.property(l.screenSizeProperty)],e.prototype,"size",void 0),r([i.enumeration.serializable()({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),i.property({json:{default:"center"}})],e.prototype,"anchor",void 0),r([i.property({type:p.Symbol3DAnchorPosition2D,json:{read:{reader:function(o){return new p.Symbol3DAnchorPosition2D({x:o[0],y:o[1]})}},write:{writer:function(o,e){e.anchorPosition=[o.x,o.y]},overridePolicy:function(){return{enabled:"relative"===this.anchor}}}}})],e.prototype,"anchorPosition",void 0),r([i.property({type:a.default,json:{write:!0}})],e.prototype,"outline",void 0),e=n=r([i.subclass("esri.symbols.IconSymbol3DLayer")],e)}(i.declared(n))});