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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../Graphic","../../../../core/Accessor","../../../../core/mathUtils","../../../../core/maybe","../../../../core/accessorSupport/decorators","../../../../symbols/FillSymbol3DLayer","../../../../symbols/PointSymbol3D","../../../../symbols/PolygonSymbol3D","../../../../symbols/TextSymbol3DLayer"],(function(e,t,r,o,i,s,l,n,a,c,p,y,u){Object.defineProperty(t,"__esModule",{value:!0});var h=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],b=function(e){function t(t){var r=e.call(this,t)||this;return r.updating=!1,r.enablePolygons=!0,r._graphics=[],r._enabled=!0,r}return o(t,e),t.prototype.initialize=function(){this._symbols=h.map((function(e){return new y(new c({material:{color:[e[0],e[1],e[2],.6]},outline:{color:"black",size:1}}))}))},Object.defineProperty(t.prototype,"enabled",{get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.view&&(this.clear(),this._set("view",null))},t.prototype._update=function(e,t,r){var o=this;if(this.clear(),this._enabled){var s,a=r.getLabel||function(e){var t=e.lij[0]+"/"+e.lij[1]+"/"+e.lij[2];return n.isSome(s)&&(t+=" ("+s+")"),t};e.forEach((function(c,y){var h=c.lij[0],b=t(c);o.enablePolygons&&o._graphics.push(new i({geometry:b,symbol:o._symbols[h%o._symbols.length]}));var d=y/(e.length-1),g=l.lerp(0,200,d),m=l.lerp(20,6,d);s=r.getLoadPriority&&r.getLoadPriority(c);var f=n.isSome(s)&&s>=e.length,v=a(c),_=new i({geometry:b.extent.center,symbol:new p({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new u({text:v,halo:{color:"white",size:1/.75},material:{color:[g,f?0:g,f?0:g]},size:m/.75})]})});o._graphics.push(_)})),this.view.graphics.addMany(this._graphics)}},t.prototype.clear=function(){this.view.graphics.removeMany(this._graphics),this._graphics=[]},r([a.property({constructOnly:!0})],t.prototype,"view",void 0),r([a.property({readOnly:!0})],t.prototype,"updating",void 0),t=r([a.subclass("esri.views.3d.layers.support.TileTree3DDebugger")],t)}(a.declared(s));t.TileTree3DDebugger=b}));