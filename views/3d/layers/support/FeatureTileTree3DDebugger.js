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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../Graphic","../../../../core/Handles","../../../../core/watchUtils","../../../../symbols/FillSymbol3DLayer","../../../../symbols/PointSymbol3D","../../../../symbols/PolygonSymbol3D","../../../../symbols/TextSymbol3DLayer","../../support/mathUtils"],function(e,t,i,r,o,l,n,s,a,h){Object.defineProperty(t,"__esModule",{value:!0});var c=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],u=function(){function e(e){var t=this;this.view=e,this.graphics=[],this.handles=new r,this._enabled=!0,this.symbols=c.map(function(e){return new s(new l({material:{color:[e[0],e[1],e[2],.6]},outline:{color:"black",size:1}}))}),this.handles.add([e.featureTiles.addClient(),o.on(e.featureTiles,"tiles","change",function(){return t.update()},function(){return t.update()})])}return Object.defineProperty(e.prototype,"enabled",{get:function(){return this._enabled},set:function(e){this._enabled=e,this.update()},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null),this.view&&(this.clear(),this.view=null)},e.prototype.update=function(){var e=this;if(this.clear(),this._enabled){var t=this.view.featureTiles,r=t.tilingScheme,o=t.tiles.toArray().sort(function(e,t){return e.loadPriority-t.loadPriority});o.forEach(function(t,l){var s=t.lij,c=s[0],u=s[1],y=s[2],d=r.getExtentGeometry(c,u,y),p=new i({geometry:d,symbol:e.symbols[c%e.symbols.length]}),b=l/(o.length-1),f=h.lerp(0,200,b),m=h.lerp(20,6,b),g=t.loadPriority>=o.length,w=new i({geometry:d.center,symbol:new n({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new a({text:c+"/"+u+"/"+y+" ("+t.loadPriority+")",halo:{color:"white",size:1/.75},material:{color:[f,g?0:f,g?0:f]},size:m/.75})]})});e.graphics.push(p,w),e.view.graphics.addMany([p,w])})}},e.prototype.clear=function(){this.view.graphics.removeMany(this.graphics),this.graphics=[]},e}();t.FeatureTileTree3DDebugger=u,t.default=u});