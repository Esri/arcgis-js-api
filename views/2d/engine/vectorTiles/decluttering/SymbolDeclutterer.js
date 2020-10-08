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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./config"],(function(e,t,o){"use strict";function i(e,t){return e.priority-t.priority}Object.defineProperty(t,"__esModule",{value:!0}),t.SymbolDeclutterer=void 0;var r=function(){function e(e,t,o,i){this._tileForest=e,this._symbolRepository=t,this._createCollisionJob=o,this._assignTileSymbolsOpacity=i,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}return Object.defineProperty(e.prototype,"running",{get:function(){return this._running},enumerable:!1,configurable:!0}),e.prototype.setScreenSize=function(e,t){this._screenWidth===e&&this._screenHeight===t||this.restart(),this._screenWidth=e,this._screenHeight=t},e.prototype.restart=function(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0},e.prototype.continue=function(e){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){var t=performance.now();if(!this._selectionJob.work(e))return!1;if(this._selectionJobCompleted=!0,0===(e=Math.max(0,e-(performance.now()-t))))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){var o=performance.now();if(!this._collisionJob.work(e))return!1;if(this._collisionJobCompleted=!0,0===(e=Math.max(0,e-(performance.now()-o))))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){o=performance.now();if(!this._opacityJob.work(e))return!1;if(this._opacityJobCompleted=!0,0===(e=Math.max(0,e-(performance.now()-o))))return!1}return this._running=!1,!0},e.prototype._createSelectionJob=function(){var e,t,o,r=this._symbolRepository.uniqueSymbols,n=[],s=0,l=0,c=function(i){if(i.selectedForRendering=!1,!o||!t){var r=i.tile;i.unique.visible&&(!e||r.isCoverage||r.neededForCoverage&&!t)&&(e=i,(r.neededForCoverage||r.isCoverage)&&(o=!0),r.isCoverage&&(t=!0))}};return{work:function(a){for(var h,u=performance.now();l<r.length;l++,s=0){var p=r[l];n[l]=n[l]||{layerIndex:p.layerIndex,symbols:[]};for(var f=n[l];s<p.uniqueSymbols.length;s++){if(h=p.uniqueSymbols[s],s%100==99&&performance.now()-u>a)return!1;if(e=null,t=!1,o=!1,h.tileSymbols.forEach(c),e.selectedForRendering=!0,o){f.symbols.push(e),h.show=!0;for(var b=0,_=h.parts;b<_.length;b++){_[b].show=!0}}else h.show=!1}}for(var y=0,m=n;y<m.length;y++){(f=m[y]).symbols.sort(i)}return!0},get sortedSymbols(){return n.sort((function(e,t){return t.layerIndex-e.layerIndex}))}}},e.prototype._createOpacityJob=function(){var e=this._assignTileSymbolsOpacity,t=this._tileForest,i=t.getRoots(),r=0;function n(i,r){i.symbols.forEach((function(e){return function(e,t){for(var i=0,r=e;i<r.length;i++)for(var n=r[i].unique,s=0,l=n.parts;s<l.length;s++){var c=l[s],a=c.targetOpacity>.5?1:-1;c.startOpacity+=a*((t-c.startTime)/o.FADE_DURATION),c.startOpacity=Math.min(Math.max(c.startOpacity,0),1),c.startTime=t,c.targetOpacity=n.show&&c.show?1:0}}(e,r)})),e(i,r);for(var s=0,l=t.getChildren(i);s<l.length;s++){n(l[s],r)}}return{work:function(e){for(var t=performance.now();r<i.length;r++){if(performance.now()-t>e)return!1;n(i[r],performance.now())}return!0}}},e}();t.SymbolDeclutterer=r}));