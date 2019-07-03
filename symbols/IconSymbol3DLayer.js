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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Logger","../core/maybe","../core/accessorSupport/decorators","./Symbol3DLayer","./support/colors","./support/IconSymbol3DLayerResource","./support/materialUtils","./support/Symbol3DAnchorPosition2D","./support/Symbol3DMaterial","./support/Symbol3DOutline"],function(o,e,t,r,i,n,l,c,s,a,u,p,h,y){function m(o){var e="width"in o?o.width:o.size,t="height"in o?o.height:o.size,r=d(o.xoffset),i=d(o.yoffset);return(r||i)&&e&&t?{x:-r/e,y:i/t}:null}function d(o){return isFinite(o)?o:0}function f(o){var e=v[o];return e||(b.warn(o+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}var b=i.getLogger("esri.symbols.IconSymbol3DLayer"),v={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};return function(o){function e(e){var t=o.call(this)||this;return t.material=null,t.resource=null,t.type="icon",t.size=12,t.anchor="center",t.anchorPosition=void 0,t.outline=void 0,t}t(e,o),i=e,e.prototype.clone=function(){return new i({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:n.isSome(this.material)?this.material.clone():null,outline:n.isSome(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})},e.fromSimpleMarkerSymbol=function(o){var e=o.color||s.white,t=m(o),r=o.outline&&o.outline.width>0?{size:o.outline.width,color:(o.outline.color||s.white).clone()}:null;return new i({size:o.size,resource:{primitive:f(o.style)},material:{color:e},outline:r,anchor:t?"relative":void 0,anchorPosition:t})},e.fromPictureMarkerSymbol=function(o){var e=!o.color||s.isBlack(o.color)?s.white:o.color,t=m(o);return new i({size:o.width<=o.height?o.height:o.width,resource:{href:o.url},material:{color:e.clone()},anchor:t?"relative":void 0,anchorPosition:t})};var i;return r([l.property({type:h.default,json:{write:!0}})],e.prototype,"material",void 0),r([l.property({type:a.default,json:{write:!0}})],e.prototype,"resource",void 0),r([l.enumeration.serializable()({Icon:"icon"})],e.prototype,"type",void 0),r([l.property(u.screenSizeProperty)],e.prototype,"size",void 0),r([l.enumeration.serializable()({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),l.property({json:{default:"center"}})],e.prototype,"anchor",void 0),r([l.property({type:p.Symbol3DAnchorPosition2D,json:{type:[Number],read:{reader:function(o){return new p.Symbol3DAnchorPosition2D({x:o[0],y:o[1]})}},write:{writer:function(o,e){e.anchorPosition=[o.x,o.y]},overridePolicy:function(){return{enabled:"relative"===this.anchor}}}}})],e.prototype,"anchorPosition",void 0),r([l.property({type:y.default,json:{write:!0}})],e.prototype,"outline",void 0),e=i=r([l.subclass("esri.symbols.IconSymbol3DLayer")],e)}(l.declared(c))});