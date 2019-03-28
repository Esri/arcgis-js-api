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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/collectionUtils","../core/kebabDictionary","../core/Logger","../core/urlUtils","../core/Warning","../core/accessorSupport/decorators","../portal/Portal","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./PathSymbol3DLayer","./Symbol","./Symbol3DLayer","./TextSymbol3DLayer","./support/StyleOrigin","./support/Thumbnail"],function(e,r,t,o,l,s,n,a,y,i,p,m,u,b,c,d,g,S,f,L,h,O,D){var w={icon:c,object:g,line:d,path:S,fill:b,extrude:u,text:h},v=l.ofType({base:L,key:"type",typeMap:w}),_=n.strict()({PointSymbol3D:"point-3d",PolygonSymbol3D:"polygon-3d",LineSymbol3D:"line-3d",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d"}),U=a.getLogger("esri.symbols.Symbol3D");return function(e){function r(r){var t=e.call(this)||this;t.styleOrigin=null,t.thumbnail=null,t.type=null;var o=t.__accessor__&&t.__accessor__.metadatas&&t.__accessor__.metadatas.symbolLayers,s=o&&o.type,n=s||l;return t._set("symbolLayers",new n),t}return t(r,e),Object.defineProperty(r.prototype,"color",{get:function(){return null},set:function(e){U.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"symbolLayers",{set:function(e){s.referenceSetter(e,this._get("symbolLayers"))},enumerable:!0,configurable:!0}),r.prototype.readSymbolLayers=function(e,r,t){for(var o=[],l=0;l<e.length;l++){var s=e[l],n=L.typeJSONDictionary.read(s.type),a=n&&w[n];if(a){var y=new a;y.read(e[l],t),o.push(y)}else U.warn("Unknown symbol layer type: "+n),t&&t.messages&&t.messages.push(new i("symbol-layer:unsupported","Symbol layers of type '"+(n||s.type||"unknown")+"' are not supported",{definition:s,context:t}))}return o},r.prototype.readStyleOrigin=function(e,r,t){if(e.styleUrl&&e.name){var o=y.fromJSON(e.styleUrl,t);return new O({styleUrl:o,name:e.name})}if(e.styleName&&e.name)return new O({portal:t&&t.portal||m.getDefault(),styleName:e.styleName,name:e.name});t&&t.messages&&t.messages.push(new i("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:t,definition:e}))},r.prototype.writeStyleOrigin=function(e,r,t,o){if(e.styleUrl&&e.name){var l=y.toJSON(e.styleUrl,o);y.isAbsolute(l)&&(l=y.normalize(l)),r.styleOrigin={styleUrl:l,name:e.name}}else e.styleName&&e.name&&(e.portal&&o&&o.portal&&!y.hasSamePortal(e.portal.restUrl,o.portal.restUrl)?o&&o.messages&&o.messages.push(new i("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):r.styleOrigin={styleName:e.styleName,name:e.name})},r.prototype.normalizeCtorArgs=function(e){return e instanceof L||e&&w[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e},o([p.property({json:{read:!1,write:!1}})],r.prototype,"color",null),o([p.property({type:v,nonNullable:!0,json:{write:!0}}),p.cast(s.castForReferenceSetter)],r.prototype,"symbolLayers",null),o([p.reader("symbolLayers")],r.prototype,"readSymbolLayers",null),o([p.property({type:O})],r.prototype,"styleOrigin",void 0),o([p.reader("styleOrigin")],r.prototype,"readStyleOrigin",null),o([p.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],r.prototype,"writeStyleOrigin",null),o([p.property({type:D.default,json:{read:!1}})],r.prototype,"thumbnail",void 0),o([p.property({type:_.apiValues,readOnly:!0,json:{type:_.jsonValues,read:!1}})],r.prototype,"type",void 0),r=o([p.subclass("esri.symbols.Symbol3D")],r)}(p.declared(f))});