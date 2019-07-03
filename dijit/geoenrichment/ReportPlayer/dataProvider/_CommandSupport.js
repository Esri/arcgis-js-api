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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","../PlayerCommands","./supportClasses/GEUtil","esri/dijit/geoenrichment/ReportPlayer/config"],function(n,e,m,t,i,o,r,s){var a={};return e(null,{_commands:null,_commandIndex:0,_initCommandsPromise:null,constructor:function(){this._commands={}},_initCommands:function(){if(this._initCommandsPromise)return this._initCommandsPromise;var e=new t;return s.modules.exportCommands?(n(["./commands/CreateHTMLCommand","./commands/CreatePDFCommand","./commands/CreateImageCommand","./commands/PrintReportCommand","./commands/CreatePlayerCommand"],function(n,m,t,i,s){a[o.HTML]=n,a[o.PDF]=m,a[o.IMAGE]=t,a[o.PRINT]=i,a[o.DYNAMIC_HTML]=s,r.getInitPromise().then(e.resolve)}),this._initCommandsPromise=e.promise):e.resolve()},registerCommand:function(n,e,m){function t(m){m.isBrowserSupported&&!m.isBrowserSupported()||i._commands[n]||(i._commands[n]={index:i._commandIndex++,id:n,label:e||m.label,command:m})}var i=this;if(!m)return this._initCommands().then(function(){var e=a[n];e&&t(new e)});t(m)},getCommands:function(){return this._initCommands().then(function(){var n=[],e=this._commands[o.PDF];for(var m in this._commands)n.push(this._commands[m]);n.sort(function(n,e){return n.index-e.index});var t=this._getCurrentContext();return t&&t.geoenrichmentUrl&&e?i(r.hasCapability("FormatInfographics"),function(m){return m||(n=n.filter(function(n){return n!==e})),n}):i(n)}.bind(this))},getCommandById:function(n){return this._commands[n]&&this._commands[n].command},executeCommand:function(n,e,t,i){return this._initCommands().then(function(){return t=m.mixin({printMapTaskUrl:this.printMapTaskUrl},t),this._commands[n]&&this._commands[n].command&&this._commands[n].command.execute(e,t||{},i)}.bind(this))}})});