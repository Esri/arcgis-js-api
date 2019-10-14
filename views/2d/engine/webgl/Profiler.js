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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/CircularArray","../../../../core/Evented","../../../../core/has","../../../../core/maybe","../../../webgl/capabilities/DisjointTimerQuery"],function(e,t,s,a,n,g,m){Object.defineProperty(t,"__esModule",{value:!0});var f=n("esri-2d-profiler"),r=function(){function e(e,t){var o=this;if(this._events=new a,this._entries=new Map,this._timings=new s.default(10),f){this._ext=m.load(e.gl,{}),this._debugOutput=t;var i=e.gl;if(this.enableCommandLogging){var n=function(n){if("function"==typeof i[n]){var r=i[n],s=-1!==n.indexOf("draw");i[n]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o._events.emit("command",{container:o._currentContainer,pass:o._currentPass,brush:o._currentBrush,method:n,args:e,isDrawCommand:s}),o._currentSummary&&(o._currentSummary.commands++,s&&o._currentSummary.drawCommands++),r.apply(i,e)}}};for(var r in i)n(r)}}}return Object.defineProperty(e.prototype,"enableCommandLogging",{get:function(){return!("object"==typeof f&&f.disableCommands)},enumerable:!0,configurable:!0}),e.prototype.recordContainerStart=function(e){f&&(this._currentContainer=e)},e.prototype.recordContainerEnd=function(e){f&&(this._currentContainer=null)},e.prototype.recordPassStart=function(e){f&&(this._currentPass=e,this._initSummary())},e.prototype.recordPassEnd=function(e){f&&(this._currentPass=null,this._emitSummary())},e.prototype.recordBrushStart=function(e){f&&(this._currentBrush=e)},e.prototype.recordBrushEnd=function(e){f&&(this._currentBrush=null)},e.prototype.recordStart=function(e){if(f&&g.isSome(this._ext)){if(this._entries.has(e)){var t=this._entries.get(e),n=this._ext.resultAvailable(t.query),r=this._ext.disjoint();if(n&&!r){var s=this._ext.getResult(t.query)/1e6,o=0;if(g.isSome(this._timings.enqueue(s))){for(var i=this._timings.entries,a=i.length,m=0,u=0,d=i;u<d.length;u++){m+=d[u]}o=m/a}var c=s.toFixed(2),h=o?o.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed("Frame report for "+e+", "+c+" ms ("+h+" last 10 avg)\n"+t.commandsLen+" Commands ("+t.drawCommands+" draw)"),console.log("RenderPass breakdown: "),console.table(t.summaries),console.log("Commands: ",t.commands),console.groupEnd()):console.log("Frame report for "+e+", "+c+" ms ("+h+" last 10 avg)"),this._debugOutput.innerHTML=c+" ("+h+")"}for(var l=0,p=t.handles;l<p.length;l++){p[l].remove()}this._entries.delete(e)}var _={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(_.handles.push(this._events.on("command",function(e){_.commandsLen++,_.commands.push(e),e.isDrawCommand&&_.drawCommands++})),_.handles.push(this._events.on("summary",function(e){delete e.target,_.summaries.push(e)}))),this._ext.beginTimeElapsed(_.query),this._entries.set(e,_)}},e.prototype.recordEnd=function(e){f&&g.isSome(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()},e.prototype._initSummary=function(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})},e.prototype._emitSummary=function(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)},e}();t.Profiler=r});