// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/Logger","../core/collectionUtils","../core/Warning","../core/urlUtils","../core/accessorSupport/metadata","./Symbol","./Symbol3DLayer","./IconSymbol3DLayer","./ObjectSymbol3DLayer","./LineSymbol3DLayer","./PathSymbol3DLayer","./FillSymbol3DLayer","./ExtrudeSymbol3DLayer","./TextSymbol3DLayer","./support/Thumbnail","./support/StyleOrigin","../portal/Portal","../core/accessorSupport/decorators"],function(e,r,t,o,l,n,s,a,y,i,p,m,u,c,b,d,g,S,f,L,h,O,w){var v={icon:u,object:c,line:b,path:d,fill:g,extrude:S,text:f},D=l.ofType({base:m,key:"type",typeMap:v}),U=n.getLogger("esri.symbols.Symbol3D"),N=function(e){function r(r){var t=e.call(this)||this;t.styleOrigin=null,t.thumbnail=null,t.type=null;var o=i.getMetadata(t).properties.symbolLayers.type;return t._set("symbolLayers",new o),t}return t(r,e),Object.defineProperty(r.prototype,"color",{get:function(){return null},set:function(e){U.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"symbolLayers",{set:function(e){s.referenceSetter(e,this._get("symbolLayers"))},enumerable:!0,configurable:!0}),r.prototype.readSymbolLayers=function(e,r,t){for(var o=[],l=0;l<e.length;l++){var n=e[l],s=m.typeJSONDictionary.read(n.type),y=v[s];if(y){var i=new y;i.read(e[l],t),o.push(i)}else U.warn("Unknown symbol layer type: "+s),t&&t.messages&&t.messages.push(new a("symbol-layer:unsupported","Symbol layers of type '"+(s||"unknown")+"' are not supported",{definition:n,context:t}))}return o},r.prototype.readStyleOrigin=function(e,r,t){if(e.styleUrl&&e.name){var o=y.read(e.styleUrl,t);return new h({styleUrl:o,name:e.name})}return e.styleName&&e.name?new h({portal:t&&t.portal||O.getDefault(),styleName:e.styleName,name:e.name}):void(t&&t.messages&&t.messages.push(new a("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:t,definition:e})))},r.prototype.writeStyleOrigin=function(e,r,t,o){if(e.styleUrl&&e.name){var l=y.write(e.styleUrl,o);y.isAbsolute(l)&&(l=y.normalize(l)),r.styleOrigin={styleUrl:l,name:e.name}}else e.styleName&&e.name&&(e.portal&&o&&o.portal&&!y.hasSamePortal(e.portal.restUrl,o.portal.restUrl)?o&&o.messages&&o.messages.push(new a("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):r.styleOrigin={styleName:e.styleName,name:e.name})},r.prototype.normalizeCtorArgs=function(e){return e instanceof m||e&&v[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e},o([w.property({json:{read:!1,write:!1}})],r.prototype,"color",null),o([w.property({type:D,nonNullable:!0,json:{write:!0}}),w.cast(s.castForReferenceSetter)],r.prototype,"symbolLayers",null),o([w.reader("symbolLayers")],r.prototype,"readSymbolLayers",null),o([w.property({type:h})],r.prototype,"styleOrigin",void 0),o([w.reader("styleOrigin")],r.prototype,"readStyleOrigin",null),o([w.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],r.prototype,"writeStyleOrigin",null),o([w.property({type:L["default"],json:{read:!1}})],r.prototype,"thumbnail",void 0),o([w.property({type:String,readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),r=o([w.subclass("esri.symbols.Symbol3D")],r)}(w.declared(p));return N});