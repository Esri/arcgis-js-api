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

define(["require","exports","../../../../core/CircularArray","../../../../core/Evented","../../../../core/has","../../../../core/maybe","../../../webgl/capabilities/DisjointTimerQuery"],(function(e,t,r,n,s,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Profiler=void 0;var a=s("esri-2d-profiler"),m=function(){function e(e,t){var s=this;if(this._events=new n,this._entries=new Map,this._timings=new r.default(10),a){this._ext=i.load(e.gl,{}),this._debugOutput=t;var o=e.gl;if(this.enableCommandLogging){var m=function(e){if("function"==typeof o[e]){var t=o[e],r=-1!==e.indexOf("draw");o[e]=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return s._events.emit("command",{container:s._currentContainer,pass:s._currentPass,brush:s._currentBrush,method:e,args:n,isDrawCommand:r}),s._currentSummary&&(s._currentSummary.commands++,r&&s._currentSummary.drawCommands++),t.apply(o,n)}}};for(var u in o)m(u)}}}return Object.defineProperty(e.prototype,"enableCommandLogging",{get:function(){return!("object"==typeof a&&a.disableCommands)},enumerable:!1,configurable:!0}),e.prototype.recordContainerStart=function(e){a&&(this._currentContainer=e)},e.prototype.recordContainerEnd=function(){a&&(this._currentContainer=null)},e.prototype.recordPassStart=function(e){a&&(this._currentPass=e,this._initSummary())},e.prototype.recordPassEnd=function(){a&&(this._currentPass=null,this._emitSummary())},e.prototype.recordBrushStart=function(e){a&&(this._currentBrush=e)},e.prototype.recordBrushEnd=function(){a&&(this._currentBrush=null)},e.prototype.recordStart=function(e){if(a&&o.isSome(this._ext)){if(this._entries.has(e)){var t=this._entries.get(e),r=this._ext.resultAvailable(t.query),n=this._ext.disjoint();if(r&&!n){var s=this._ext.getResult(t.query)/1e6,i=0;if(o.isSome(this._timings.enqueue(s))){for(var m=this._timings.entries,u=m.length,d=0,c=0,h=m;c<h.length;c++){d+=h[c]}i=d/u}var l=s.toFixed(2),p=i?i.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed("Frame report for "+e+", "+l+" ms ("+p+" last 10 avg)\n"+t.commandsLen+" Commands ("+t.drawCommands+" draw)"),console.log("RenderPass breakdown: "),console.table(t.summaries),console.log("Commands: ",t.commands),console.groupEnd()):console.log("Frame report for "+e+", "+l+" ms ("+p+" last 10 avg)"),this._debugOutput.innerHTML=l+" ("+p+")"}for(var _=0,f=t.handles;_<f.length;_++){f[_].remove()}this._entries.delete(e)}var g={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(g.handles.push(this._events.on("command",(function(e){g.commandsLen++,g.commands.push(e),e.isDrawCommand&&g.drawCommands++}))),g.handles.push(this._events.on("summary",(function(e){g.summaries.push(e)})))),this._ext.beginTimeElapsed(g.query),this._entries.set(e,g)}},e.prototype.recordEnd=function(e){a&&o.isSome(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()},e.prototype._initSummary=function(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})},e.prototype._emitSummary=function(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)},e}();t.Profiler=m}));