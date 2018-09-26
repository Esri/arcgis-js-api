// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","../PlayerCommands","./supportClasses/GEUtil","esri/dijit/geoenrichment/ReportPlayer/config"],function(n,m,t,o,e,i,r,s){var a={};return m(null,{_commands:null,_commandIndex:0,_initCommandsPromise:null,constructor:function(){this._commands={}},_initCommands:function(){if(this._initCommandsPromise)return this._initCommandsPromise;var m=new o;return s.modules.exportCommands?(n(["./commands/CreateHTMLCommand","./commands/CreatePDFCommand","./commands/CreateImageCommand","./commands/PrintReportCommand","./commands/CreatePlayerCommand"],function(n,t,o,e,s){a[i.HTML]=n,a[i.PDF]=t,a[i.IMAGE]=o,a[i.PRINT]=e,a[i.DYNAMIC_HTML]=s,r.getInitPromise().then(m.resolve)}),this._initCommandsPromise=m.promise):m.resolve()},registerCommand:function(n,m,t){function o(t){t.isBrowserSupported&&!t.isBrowserSupported()||e._commands[n]||(e._commands[n]={index:e._commandIndex++,id:n,label:m||t.label,command:t})}var e=this;if(!t)return this._initCommands().then(function(){var m=a[n];m&&o(new m)});o(t)},getCommands:function(){return this._initCommands().then(function(){var n=[],m=this._commands[i.PDF];for(var t in this._commands)n.push(this._commands[t]);n.sort(function(n,m){return n.index-m.index});var o=this._getCurrentContext();return o&&o.geoenrichmentUrl&&m?e(r.hasCapability("FormatInfographics"),function(t){return t||(n=n.filter(function(n){return n!==m})),n}):e(n)}.bind(this))},getCommandById:function(n){return this._commands[n]&&this._commands[n].command},executeCommand:function(n,m,o,e){return this._initCommands().then(function(){return o=t.mixin({printMapTaskUrl:this.printMapTaskUrl},o),this._commands[n]&&this._commands[n].command&&this._commands[n].command.execute(m,o||{},e)}.bind(this))}})});