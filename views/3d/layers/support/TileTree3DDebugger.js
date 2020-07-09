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

define(["require","exports","tslib","../../../../Graphic","../../../../core/Accessor","../../../../core/mathUtils","../../../../core/maybe","../../../../core/accessorSupport/decorators","../../../../symbols/FillSymbol3DLayer","../../../../symbols/PointSymbol3D","../../../../symbols/PolygonSymbol3D","../../../../symbols/TextSymbol3DLayer"],(function(e,t,r,o,i,s,l,n,a,c,p,y){Object.defineProperty(t,"__esModule",{value:!0});var h=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],u=function(e){function t(t){var r=e.call(this,t)||this;return r.updating=!1,r.enablePolygons=!0,r._graphics=[],r._enabled=!0,r}return r.__extends(t,e),t.prototype.initialize=function(){this._symbols=h.map((function(e){return new p(new a({material:{color:[e[0],e[1],e[2],.6]},outline:{color:"black",size:1}}))}))},Object.defineProperty(t.prototype,"enabled",{get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.view&&(this.clear(),this._set("view",null))},t.prototype._update=function(e,t,r){var i=this;if(this.clear(),this._enabled){var n,a=r.getLabel||function(e){var t=e.lij[0]+"/"+e.lij[1]+"/"+e.lij[2];return l.isSome(n)&&(t+=" ("+n+")"),t};e.forEach((function(p,h){var u=p.lij[0],b=t(p);i.enablePolygons&&i._graphics.push(new o({geometry:b,symbol:i._symbols[u%i._symbols.length]}));var d=h/(e.length-1),g=s.lerp(0,200,d),_=s.lerp(20,6,d);n=r.getLoadPriority&&r.getLoadPriority(p);var m=l.isSome(n)&&n>=e.length,f=a(p),v=new o({geometry:b.extent.center,symbol:new c({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new y({text:f,halo:{color:"white",size:1/.75},material:{color:[g,m?0:g,m?0:g]},size:_/.75})]})});i._graphics.push(v)})),this.view.graphics.addMany(this._graphics)}},t.prototype.clear=function(){this.view.graphics.removeMany(this._graphics),this._graphics=[]},r.__decorate([n.property({constructOnly:!0})],t.prototype,"view",void 0),r.__decorate([n.property({readOnly:!0})],t.prototype,"updating",void 0),t=r.__decorate([n.subclass("esri.views.3d.layers.support.TileTree3DDebugger")],t)}(i);t.TileTree3DDebugger=u}));