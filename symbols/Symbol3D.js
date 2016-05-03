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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/declare","../core/lang","../core/Collection","../core/Logger","dojo/_base/lang","./Symbol","./Symbol3DLayer","./IconSymbol3DLayer","./ObjectSymbol3DLayer","./LineSymbol3DLayer","./PathSymbol3DLayer","./FillSymbol3DLayer","./ExtrudeSymbol3DLayer","./TextSymbol3DLayer"],function(e,r,o,t,y,l,a,n,s,i,m,b,c,L){var u={Icon:n,Object:s,Line:i,Path:m,Fill:b,Extrude:c,Text:L},f=o.ofType(a),S=t.getLogger("esri.symbols.Symbol3D"),d=e(l,{classMetadata:{properties:{symbolLayers:{type:f}}},_createSymbolLayersCollection:function(e){var r=new f(e);return r.on("before-add",this._onSymbolLayersBeforeAdd.bind(this)),r},normalizeCtorArgs:function(e){return e instanceof a?{symbolLayers:this._createSymbolLayersCollection([e])}:Array.isArray(e)?{symbolLayers:this._createSymbolLayersCollection(e)}:e},getDefaults:function(){return y.mixin(this.inherited(arguments),{symbolLayers:this._createSymbolLayersCollection()})},type:null,symbolLayers:null,_symbolLayersSetter:function(e,r){return r||(r=this._createSymbolLayersCollection()),r.removeAll(),r.addMany(e),r},_symbolLayersReader:function(e){for(var r=this._createSymbolLayersCollection(),o=0;o<e.length;o++){var t=e[o],y=t.type,l=u[y];l?r.push(l.fromJSON(t)):S.warn("Unknown symbol layer type: "+y)}return r},toJSON:function(){return r.fixJson(y.mixin(this.inherited(arguments),{symbolLayers:this.symbolLayers.map(function(e){return e.toJSON()}).toArray()}))},_onSymbolLayersBeforeAdd:function(e){this._allowedLayerTypes.indexOf(e.item.type)<0&&(S.error("Symbol layer of type '"+e.item.type+"' is not allowed for symbol of type '"+this.type+"'"),e.preventDefault())},_allowedLayerTypes:[]});return d});