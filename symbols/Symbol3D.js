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

define(["require","exports","tslib","../core/Collection","../core/collectionUtils","../core/Logger","../core/urlUtils","../core/Warning","../core/accessorSupport/decorators","../portal/Portal","../support/persistableUrlUtils","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./PathSymbol3DLayer","./Symbol","./Symbol3DLayer","./TextSymbol3DLayer","./WaterSymbol3DLayer","./support/StyleOrigin","./support/Thumbnail"],(function(e,t,r,o,l,s,a,n,y,i,p,m,c,b,u,d,g,_,f,S,O,L,h){"use strict";var U={icon:b,object:d,line:u,path:g,fill:c,extrude:m,text:S,water:O},D=o.ofType({base:f,key:"type",typeMap:U,errorContext:"symbol-layer"}),v=s.getLogger("esri.symbols.Symbol3D");return function(e){function t(t){var r=e.call(this,t)||this;r.styleOrigin=null,r.thumbnail=null,r.type=null;var l=r.__accessor__&&r.__accessor__.metadatas&&r.__accessor__.metadatas.symbolLayers,s=l&&l.type||o;return r._set("symbolLayers",new s),r}return r.__extends(t,e),Object.defineProperty(t.prototype,"color",{get:function(){return null},set:function(e){v.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"symbolLayers",{set:function(e){l.referenceSetter(e,this._get("symbolLayers"))},enumerable:!1,configurable:!0}),t.prototype.readStyleOrigin=function(e,t,r){if(e.styleUrl&&e.name){var o=p.fromJSON(e.styleUrl,r);return new L({styleUrl:o,name:e.name})}if(e.styleName&&e.name)return new L({portal:r&&r.portal||i.getDefault(),styleName:e.styleName,name:e.name});r&&r.messages&&r.messages.push(new n("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:r,definition:e}))},t.prototype.writeStyleOrigin=function(e,t,r,o){if(e.styleUrl&&e.name){var l=p.toJSON(e.styleUrl,o);a.isAbsolute(l)&&(l=a.normalize(l)),t.styleOrigin={styleUrl:l,name:e.name}}else e.styleName&&e.name&&(e.portal&&o&&o.portal&&!a.hasSamePortal(e.portal.restUrl,o.portal.restUrl)?o&&o.messages&&o.messages.push(new n("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):t.styleOrigin={styleName:e.styleName,name:e.name})},t.prototype.normalizeCtorArgs=function(e){return e instanceof f||e&&U[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e},r.__decorate([y.property({json:{read:!1,write:!1}})],t.prototype,"color",null),r.__decorate([y.property({type:D,nonNullable:!0,json:{write:!0}}),y.cast(l.castForReferenceSetter)],t.prototype,"symbolLayers",null),r.__decorate([y.property({type:L})],t.prototype,"styleOrigin",void 0),r.__decorate([y.reader("styleOrigin")],t.prototype,"readStyleOrigin",null),r.__decorate([y.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],t.prototype,"writeStyleOrigin",null),r.__decorate([y.property({type:h.default,json:{read:!1}})],t.prototype,"thumbnail",void 0),r.__decorate([y.property({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],t.prototype,"type",void 0),t=r.__decorate([y.subclass("esri.symbols.Symbol3D")],t)}(_)}));