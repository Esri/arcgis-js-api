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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/Collection","./Symbol3D","./ExtrudeSymbol3DLayer","./FillSymbol3DLayer","./IconSymbol3DLayer","./LineSymbol3DLayer","./ObjectSymbol3DLayer","./TextSymbol3DLayer","../core/accessorSupport/decorators"],function(e,o,r,t,l,y,s,n,a,i,m,b,c,p){var u=y.ofType({base:null,key:"type",typeMap:{extrude:n,fill:a,icon:i,line:m,object:b,text:c}}),L=function(e){function o(o){var r=e.call(this)||this;return r.type="polygon-3d",r}return r(o,e),y=o,o.prototype.clone=function(){return new y({styleOrigin:l.clone(this.styleOrigin),symbolLayers:l.clone(this.symbolLayers),thumbnail:l.clone(this.thumbnail)})},o.fromJSON=function(e){var o=new y;if(o.read(e),2===o.symbolLayers.length&&"fill"===o.symbolLayers.getItemAt(0).type&&"line"===o.symbolLayers.getItemAt(1).type){var r=o.symbolLayers.getItemAt(0),t=o.symbolLayers.getItemAt(1);!t.enabled||e.symbolLayers&&e.symbolLayers[1]&&e.symbolLayers[1].enable===!1||(r.outline={size:t.size,color:t.material.color}),o.symbolLayers.removeAt(1)}return o},t([p.property({type:u})],o.prototype,"symbolLayers",void 0),t([p.property()],o.prototype,"type",void 0),o=y=t([p.subclass("esri.symbols.PolygonSymbol3D")],o);var y}(p.declared(s));return L});