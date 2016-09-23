// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/Logger","../core/collectionUtils","./Symbol","./Symbol3DLayer","./IconSymbol3DLayer","./ObjectSymbol3DLayer","./LineSymbol3DLayer","./PathSymbol3DLayer","./FillSymbol3DLayer","./ExtrudeSymbol3DLayer","./TextSymbol3DLayer","../core/accessorSupport/decorators"],function(e,r,o,t,y,l,a,s,n,i,c,p,b,m,d,L,u){var S={Icon:i,Object:c,Line:p,Path:b,Fill:m,Extrude:d,Text:L},f=y.ofType(n),h=l.getLogger("esri.symbols.Symbol3D"),_=function(e){function r(r){e.call(this),this.type=null,this._set("symbolLayers",this._createSymbolLayersCollection())}return o(r,e),Object.defineProperty(r.prototype,"symbolLayers",{set:function(e){var r=this._get("symbolLayers");r?(r.removeAll(),r.addMany(e)):(r=this._createSymbolLayersCollection(e),this._set("symbolLayers",r))},enumerable:!0,configurable:!0}),r.prototype.readSymbolLayers=function(e,r,o){for(var t=this._createSymbolLayersCollection(),y=0;y<e.length;y++){var l=e[y],a=l.type,s=S[a];if(s){var n=new s;n.read(e[y],o),t.add(n)}else h.warn("Unknown symbol layer type: "+a)}return t},r.prototype.normalizeCtorArgs=function(e){return e instanceof n?{symbolLayers:this._createSymbolLayersCollection([e])}:Array.isArray(e)?{symbolLayers:this._createSymbolLayersCollection(e)}:e},r.prototype._createSymbolLayersCollection=function(e){var r=this,o=new f(e);return o.on("before-add",function(e){return r._onSymbolLayersBeforeAdd(e)}),o},r.prototype._onSymbolLayersBeforeAdd=function(e){this._allowedLayerTypes.indexOf(e.item.type)<0&&(h.error("Symbol layer of type '"+e.item.type+"' is not allowed for symbol of type '"+this.type+"'"),e.preventDefault())},t([u.property({json:{writable:!1}})],r.prototype,"color",void 0),t([u.property({type:f,json:{writable:!0}}),u.cast(a.castForReferenceSetter)],r.prototype,"symbolLayers",null),t([u.read("symbolLayers")],r.prototype,"readSymbolLayers",null),t([u.property({type:String,readOnly:!0,json:{readable:!1}})],r.prototype,"type",void 0),r=t([u.subclass("esri.symbols.Symbol3D")],r)}(u.declared(s));return _});