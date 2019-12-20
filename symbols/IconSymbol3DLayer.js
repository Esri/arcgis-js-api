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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Logger","../core/maybe","../core/urlUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/colors","./support/IconSymbol3DLayerResource","./support/materialUtils","./support/Symbol3DAnchorPosition2D","./support/Symbol3DMaterial","./support/Symbol3DOutline"],function(e,o,t,r,i,n,l,c,a,s,u,p,h,y,m){function d(e){var o="width"in e?e.width:e.size,t="height"in e?e.height:e.size,r=f(e.xoffset),i=f(e.yoffset);return(r||i)&&o&&t?{x:-r/o,y:i/t}:null}function f(e){return isFinite(e)?e:0}function b(e){var o=w[e];return o||(v.warn(e+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}var v=i.getLogger("esri.symbols.IconSymbol3DLayer"),w={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};return function(e){function o(o){var t=e.call(this,o)||this;return t.material=null,t.resource=null,t.type="icon",t.size=12,t.anchor="center",t.anchorPosition=void 0,t.outline=void 0,t}t(o,e),i=o,o.prototype.clone=function(){return new i({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:n.isSome(this.material)?this.material.clone():null,outline:n.isSome(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})},o.fromSimpleMarkerSymbol=function(e){var o=e.color||s.white,t=d(e),r=e.outline&&e.outline.width>0?{size:e.outline.width,color:(e.outline.color||s.white).clone()}:null;return new i({size:e.size,resource:{primitive:b(e.style)},material:{color:o},outline:r,anchor:t?"relative":void 0,anchorPosition:t})},o.fromPictureMarkerSymbol=function(e){var o=!e.color||s.isBlack(e.color)?s.white:e.color,t=d(e);return new i({size:e.width<=e.height?e.height:e.width,resource:{href:e.url},material:{color:o.clone()},anchor:t?"relative":void 0,anchorPosition:t})},o.fromCIMSymbol=function(e){return new i({resource:{href:l.makeData({mediaType:"application/json",data:JSON.stringify(e.data)})}})};var i;return r([c.property({type:y.default,json:{write:!0}})],o.prototype,"material",void 0),r([c.property({type:u.default,json:{write:!0}})],o.prototype,"resource",void 0),r([c.enumeration.serializable()({Icon:"icon"})],o.prototype,"type",void 0),r([c.property(p.screenSizeProperty)],o.prototype,"size",void 0),r([c.enumeration.serializable()({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),c.property({json:{default:"center"}})],o.prototype,"anchor",void 0),r([c.property({type:h.Symbol3DAnchorPosition2D,json:{type:[Number],read:{reader:function(e){return new h.Symbol3DAnchorPosition2D({x:e[0],y:e[1]})}},write:{writer:function(e,o){o.anchorPosition=[e.x,e.y]},overridePolicy:function(){return{enabled:"relative"===this.anchor}}}}})],o.prototype,"anchorPosition",void 0),r([c.property({type:m.default,json:{write:!0}})],o.prototype,"outline",void 0),o=i=r([c.subclass("esri.symbols.IconSymbol3DLayer")],o)}(c.declared(a))});