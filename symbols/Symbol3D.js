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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/collectionUtils","../core/Logger","../core/urlUtils","../core/Warning","../core/accessorSupport/decorators","../portal/Portal","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./PathSymbol3DLayer","./Symbol","./Symbol3DLayer","./TextSymbol3DLayer","./support/StyleOrigin","./support/Thumbnail"],function(e,r,t,o,l,s,n,a,y,i,p,m,u,c,b,d,g,f,S,L,h,O){var w={icon:c,object:d,line:b,path:g,fill:u,extrude:m,text:L},v=l.ofType({base:S,key:"type",typeMap:w}),_=n.getLogger("esri.symbols.Symbol3D");return function(e){function r(r){var t=e.call(this)||this;t.styleOrigin=null,t.thumbnail=null,t.type=null;var o=t.__accessor__&&t.__accessor__.metadatas&&t.__accessor__.metadatas.symbolLayers,s=o&&o.type,n=s||l;return t._set("symbolLayers",new n),t}return t(r,e),Object.defineProperty(r.prototype,"color",{get:function(){return null},set:function(e){_.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"symbolLayers",{set:function(e){s.referenceSetter(e,this._get("symbolLayers"))},enumerable:!0,configurable:!0}),r.prototype.readSymbolLayers=function(e,r,t){for(var o=[],l=0;l<e.length;l++){var s=e[l],n=S.typeJSONDictionary.read(s.type),a=w[n];if(a){var i=new a;i.read(e[l],t),o.push(i)}else _.warn("Unknown symbol layer type: "+n),t&&t.messages&&t.messages.push(new y("symbol-layer:unsupported","Symbol layers of type '"+(n||"unknown")+"' are not supported",{definition:s,context:t}))}return o},r.prototype.readStyleOrigin=function(e,r,t){if(e.styleUrl&&e.name){var o=a.read(e.styleUrl,t);return new h({styleUrl:o,name:e.name})}if(e.styleName&&e.name)return new h({portal:t&&t.portal||p.getDefault(),styleName:e.styleName,name:e.name});t&&t.messages&&t.messages.push(new y("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:t,definition:e}))},r.prototype.writeStyleOrigin=function(e,r,t,o){if(e.styleUrl&&e.name){var l=a.write(e.styleUrl,o);a.isAbsolute(l)&&(l=a.normalize(l)),r.styleOrigin={styleUrl:l,name:e.name}}else e.styleName&&e.name&&(e.portal&&o&&o.portal&&!a.hasSamePortal(e.portal.restUrl,o.portal.restUrl)?o&&o.messages&&o.messages.push(new y("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):r.styleOrigin={styleName:e.styleName,name:e.name})},r.prototype.normalizeCtorArgs=function(e){return e instanceof S||e&&w[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e},o([i.property({json:{read:!1,write:!1}})],r.prototype,"color",null),o([i.property({type:v,nonNullable:!0,json:{write:!0}}),i.cast(s.castForReferenceSetter)],r.prototype,"symbolLayers",null),o([i.reader("symbolLayers")],r.prototype,"readSymbolLayers",null),o([i.property({type:h})],r.prototype,"styleOrigin",void 0),o([i.reader("styleOrigin")],r.prototype,"readStyleOrigin",null),o([i.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],r.prototype,"writeStyleOrigin",null),o([i.property({type:O.default,json:{read:!1}})],r.prototype,"thumbnail",void 0),o([i.property({type:String,readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),r=o([i.subclass("esri.symbols.Symbol3D")],r)}(i.declared(f))});