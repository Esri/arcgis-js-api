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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/Logger","../core/maybe","../core/urlUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/colors","./support/IconSymbol3DLayerResource","./support/materialUtils","./support/Symbol3DAnchorPosition2D","./support/Symbol3DMaterial","./support/Symbol3DOutline"],(function(e,o,t,r,i,n,l,c,a,s,u,p,h,y){"use strict";var d=r.getLogger("esri.symbols.IconSymbol3DLayer"),m=function(e){function o(o){var t=e.call(this,o)||this;return t.material=null,t.resource=null,t.type="icon",t.size=12,t.anchor="center",t.anchorPosition=void 0,t.outline=void 0,t}var r;return t.__extends(o,e),r=o,o.prototype.clone=function(){return new r({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:i.isSome(this.material)?this.material.clone():null,outline:i.isSome(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})},o.fromSimpleMarkerSymbol=function(e){var o=e.color||a.white,t=f(e),i=e.outline&&e.outline.width>0?{size:e.outline.width,color:(e.outline.color||a.white).clone()}:null;return new r({size:e.size,resource:{primitive:w(e.style)},material:{color:o},outline:i,anchor:t?"relative":void 0,anchorPosition:t})},o.fromPictureMarkerSymbol=function(e){var o=!e.color||a.isBlack(e.color)?a.white:e.color,t=f(e);return new r({size:e.width<=e.height?e.height:e.width,resource:{href:e.url},material:{color:o.clone()},anchor:t?"relative":void 0,anchorPosition:t})},o.fromCIMSymbol=function(e){return new r({resource:{href:n.makeData({mediaType:"application/json",data:JSON.stringify(e.data)})}})},t.__decorate([l.property({type:h.default,json:{write:!0}})],o.prototype,"material",void 0),t.__decorate([l.property({type:s.default,json:{write:!0}})],o.prototype,"resource",void 0),t.__decorate([l.enumeration({Icon:"icon"},{readOnly:!0})],o.prototype,"type",void 0),t.__decorate([l.property(u.screenSizeProperty)],o.prototype,"size",void 0),t.__decorate([l.enumeration({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),l.property({json:{default:"center"}})],o.prototype,"anchor",void 0),t.__decorate([l.property({type:p.Symbol3DAnchorPosition2D,json:{type:[Number],read:{reader:function(e){return new p.Symbol3DAnchorPosition2D({x:e[0],y:e[1]})}},write:{writer:function(e,o){o.anchorPosition=[e.x,e.y]},overridePolicy:function(){return{enabled:"relative"===this.anchor}}}}})],o.prototype,"anchorPosition",void 0),t.__decorate([l.property({type:y.default,json:{write:!0}})],o.prototype,"outline",void 0),o=r=t.__decorate([l.subclass("esri.symbols.IconSymbol3DLayer")],o)}(c);function f(e){var o="width"in e?e.width:e.size,t="height"in e?e.height:e.size,r=b(e.xoffset),i=b(e.yoffset);return(r||i)&&o&&t?{x:-r/o,y:i/t}:null}function b(e){return isFinite(e)?e:0}var v={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};function w(e){var o=v[e];return o||(d.warn(e+' cannot be mapped to Icon symbol. Fallback to "circle"'),"circle")}return m}));