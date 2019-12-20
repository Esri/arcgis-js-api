// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../Graphic","../../../../geometry/Polygon","../../../../symbols/FillSymbol3DLayer","../../../../symbols/PointSymbol3D","../../../../symbols/PolygonSymbol3D","../../../../symbols/TextSymbol3DLayer","../../terrain/TilingScheme"],function(e,t,i,n,r,o,a,s,h){Object.defineProperty(t,"__esModule",{value:!0});var l=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],c=function(){function e(e,t,i){this.loadingGraphics=new Map,this.loadedGraphics=new Map,this.pendingGraphics=new Map,this._enabled=!0,this.tileFetcher=e,this.view=i,this.tilingScheme=new h(t),this.loadedSymbols=l.map(function(e){return new a(new r({material:{color:[e[0],e[1],e[2],.6]},outline:{color:"black",size:1}}))}),this.loadingSymbols=[new a(new r({material:{color:[200,200,200,.4]},outline:{color:[30,30,30],size:1}}))],this.pendingSymbols=[new a(new r({material:{color:[100,100,100,.4]},outline:{color:[30,30,30],size:1}}))],this.dataExtentSymbol=new a(new r({material:{color:[0,0,0,0]},outline:{color:"green",size:4}}))}return e.prototype.destroy=function(){this.enabled=!1},Object.defineProperty(e.prototype,"enabled",{get:function(){return this._enabled},set:function(e){this._enabled=e,this.update()},enumerable:!0,configurable:!0}),e.prototype.update=function(){var e=this;this._enabled?(this.synchronizeMaps(this.loadingGraphics,{filter:function(e){return e.isFetching},symbols:this.loadingSymbols}),this.synchronizeMaps(this.loadedGraphics,{filter:function(e){return!e.isFetching},symbols:this.loadedSymbols}),this.synchronizeMaps(this.pendingGraphics,{filter:function(e){return!e.isFetching},symbols:this.pendingSymbols}),this.showDataExtent(this.tileFetcher.filterExtent)):(this.loadingGraphics.forEach(function(t){e.view.graphics.removeMany(t)}),this.loadingGraphics.clear(),this.loadedGraphics.forEach(function(t){e.view.graphics.removeMany(t)}),this.loadedGraphics.clear(),this.pendingGraphics.forEach(function(t){e.view.graphics.removeMany(t)}),this.pendingGraphics.clear(),this.dataExtentGraphic&&(this.view.graphics.remove(this.dataExtentGraphic),this.dataExtentGraphic=null))},e.prototype.showDataExtent=function(e){if(this.dataExtentGraphic&&(this.view.graphics.remove(this.dataExtentGraphic),this.dataExtentGraphic=null),e){var t=n.fromExtent(e);this.dataExtentGraphic=new i({geometry:t,symbol:this.dataExtentSymbol}),this.view.graphics.add(this.dataExtentGraphic)}},e.prototype.synchronizeMaps=function(e,t){var n=this,r=[];e.forEach(function(e,i){var o=n.tileFetcher.getFeatureTileById(i);o&&t.filter(o)||(n.view.graphics.removeMany(e),r.push(i))}),r.forEach(function(t){return e.delete(t)}),this.tileFetcher.forEachFeatureTile(function(r){if(t.filter(r)&&!e.has(r.id)){var a=r.descriptor.lij,h=a[0],l=a[1],c=a[2];n.tilingScheme.ensureMaxLod(h);var p=n.tilingScheme.getExtentGeometry(h,l,c),d=new i({geometry:p,symbol:t.symbols[h%t.symbols.length]}),y=new i({geometry:p.center,symbol:new o({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new s({text:h+"/"+l+"/"+c,halo:{color:"white",size:1/.75},material:{color:"black"},size:16})]})}),m=[d,y];e.set(r.id,m),n.view.graphics.addMany(m)}})},e}();t.FeatureTileFetcher3DDebugger=c,t.default=c});