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

define(["require","exports","tslib","../core/Collection","../core/collectionUtils","../core/jsonMap","../core/Logger","../core/urlUtils","../core/Warning","../core/accessorSupport/decorators","../portal/Portal","../support/persistableUrlUtils","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./PathSymbol3DLayer","./Symbol","./Symbol3DLayer","./TextSymbol3DLayer","./WaterSymbol3DLayer","./support/StyleOrigin","./support/Thumbnail"],(function(e,r,t,o,l,s,a,n,y,i,p,m,c,b,u,d,g,S,f,_,L,h,O,D){var w={icon:u,object:g,line:d,path:S,fill:b,extrude:c,text:L,water:h},U=o.ofType({base:_,key:"type",typeMap:w}),v=s.strict()({PointSymbol3D:"point-3d",PolygonSymbol3D:"polygon-3d",LineSymbol3D:"line-3d",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d"}),N=a.getLogger("esri.symbols.Symbol3D");return function(e){function r(r){var t=e.call(this,r)||this;t.styleOrigin=null,t.thumbnail=null,t.type=null;var l=t.__accessor__&&t.__accessor__.metadatas&&t.__accessor__.metadatas.symbolLayers,s=l&&l.type||o;return t._set("symbolLayers",new s),t}return t.__extends(r,e),Object.defineProperty(r.prototype,"color",{get:function(){return null},set:function(e){N.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"symbolLayers",{set:function(e){l.referenceSetter(e,this._get("symbolLayers"))},enumerable:!0,configurable:!0}),r.prototype.readSymbolLayers=function(e,r,t){for(var o=[],l=0;l<e.length;l++){var s=e[l],a=_.typeJSONDictionary.read(s.type),n=a&&w[a];if(n){var i=new n;i.read(e[l],t),o.push(i)}else N.warn("Unknown symbol layer type: "+a),t&&t.messages&&t.messages.push(new y("symbol-layer:unsupported","Symbol layers of type '"+(a||s.type||"unknown")+"' are not supported",{definition:s,context:t}))}return o},r.prototype.readStyleOrigin=function(e,r,t){if(e.styleUrl&&e.name){var o=m.fromJSON(e.styleUrl,t);return new O({styleUrl:o,name:e.name})}if(e.styleName&&e.name)return new O({portal:t&&t.portal||p.getDefault(),styleName:e.styleName,name:e.name});t&&t.messages&&t.messages.push(new y("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:t,definition:e}))},r.prototype.writeStyleOrigin=function(e,r,t,o){if(e.styleUrl&&e.name){var l=m.toJSON(e.styleUrl,o);n.isAbsolute(l)&&(l=n.normalize(l)),r.styleOrigin={styleUrl:l,name:e.name}}else e.styleName&&e.name&&(e.portal&&o&&o.portal&&!n.hasSamePortal(e.portal.restUrl,o.portal.restUrl)?o&&o.messages&&o.messages.push(new y("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):r.styleOrigin={styleName:e.styleName,name:e.name})},r.prototype.normalizeCtorArgs=function(e){return e instanceof _||e&&w[e.type]?{symbolLayers:[e]}:Array.isArray(e)?{symbolLayers:e}:e},t.__decorate([i.property({json:{read:!1,write:!1}})],r.prototype,"color",null),t.__decorate([i.property({type:U,nonNullable:!0,json:{write:!0}}),i.cast(l.castForReferenceSetter)],r.prototype,"symbolLayers",null),t.__decorate([i.reader("symbolLayers")],r.prototype,"readSymbolLayers",null),t.__decorate([i.property({type:O})],r.prototype,"styleOrigin",void 0),t.__decorate([i.reader("styleOrigin")],r.prototype,"readStyleOrigin",null),t.__decorate([i.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],r.prototype,"writeStyleOrigin",null),t.__decorate([i.property({type:D.default,json:{read:!1}})],r.prototype,"thumbnail",void 0),t.__decorate([i.property({type:v.apiValues,readOnly:!0,json:{type:v.jsonValues,read:!1}})],r.prototype,"type",void 0),r=t.__decorate([i.subclass("esri.symbols.Symbol3D")],r)}(f)}));