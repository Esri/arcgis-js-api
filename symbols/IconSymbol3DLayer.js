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

define(["require","exports","tslib","../core/Logger","../core/maybe","../core/urlUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/colors","./support/IconSymbol3DLayerResource","./support/materialUtils","./support/Symbol3DAnchorPosition2D","./support/Symbol3DMaterial","./support/Symbol3DOutline"],(function(o,e,t,r,i,n,l,c,a,s,u,p,h,y){var d=r.getLogger("esri.symbols.IconSymbol3DLayer"),m=function(o){function e(e){var t=o.call(this,e)||this;return t.material=null,t.resource=null,t.type="icon",t.size=12,t.anchor="center",t.anchorPosition=void 0,t.outline=void 0,t}var r;return t.__extends(e,o),r=e,e.prototype.clone=function(){return new r({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:i.isSome(this.material)?this.material.clone():null,outline:i.isSome(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})},e.fromSimpleMarkerSymbol=function(o){var e=o.color||a.white,t=f(o),i=o.outline&&o.outline.width>0?{size:o.outline.width,color:(o.outline.color||a.white).clone()}:null;return new r({size:o.size,resource:{primitive:w(o.style)},material:{color:e},outline:i,anchor:t?"relative":void 0,anchorPosition:t})},e.fromPictureMarkerSymbol=function(o){var e=!o.color||a.isBlack(o.color)?a.white:o.color,t=f(o);return new r({size:o.width<=o.height?o.height:o.width,resource:{href:o.url},material:{color:e.clone()},anchor:t?"relative":void 0,anchorPosition:t})},e.fromCIMSymbol=function(o){return new r({resource:{href:n.makeData({mediaType:"application/json",data:JSON.stringify(o.data)})}})},t.__decorate([l.property({type:h.default,json:{write:!0}})],e.prototype,"material",void 0),t.__decorate([l.property({type:s.default,json:{write:!0}})],e.prototype,"resource",void 0),t.__decorate([l.enumeration({Icon:"icon"})],e.prototype,"type",void 0),t.__decorate([l.property(u.screenSizeProperty)],e.prototype,"size",void 0),t.__decorate([l.enumeration({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),l.property({json:{default:"center"}})],e.prototype,"anchor",void 0),t.__decorate([l.property({type:p.Symbol3DAnchorPosition2D,json:{type:[Number],read:{reader:function(o){return new p.Symbol3DAnchorPosition2D({x:o[0],y:o[1]})}},write:{writer:function(o,e){e.anchorPosition=[o.x,o.y]},overridePolicy:function(){return{enabled:"relative"===this.anchor}}}}})],e.prototype,"anchorPosition",void 0),t.__decorate([l.property({type:y.default,json:{write:!0}})],e.prototype,"outline",void 0),e=r=t.__decorate([l.subclass("esri.symbols.IconSymbol3DLayer")],e)}(c);function f(o){var e="width"in o?o.width:o.size,t="height"in o?o.height:o.size,r=b(o.xoffset),i=b(o.yoffset);return(r||i)&&e&&t?{x:-r/e,y:i/t}:null}function b(o){return isFinite(o)?o:0}var v={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};function w(o){var e=v[o];return e||(d.warn(o+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}return m}));