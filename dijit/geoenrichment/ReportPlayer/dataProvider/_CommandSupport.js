// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","../PlayerCommands","./supportClasses/GEUtil","esri/dijit/geoenrichment/ReportPlayer/config"],(function(n,t,i,m,e,o,r,s){var a={};return t(null,{_commands:null,_commandIndex:0,_initCommandsPromise:null,constructor:function(){this._commands={}},_initCommands:function(){var t=this;if(this._initCommandsPromise)return e(this._initCommandsPromise);var i=new m;return s.modules.exportCommands?(n(["./commands/CreateHTMLCommand","./commands/CreatePDFCommand","./commands/CreateImageCommand","./commands/PrintReportCommand","./commands/CreatePlayerCommand"],(function(n,t,m,e,s){a[o.HTML]=n,a[o.PDF]=t,a[o.IMAGE]=m,a[o.PRINT]=e,a[o.DYNAMIC_HTML]=s,r.getInitPromise().then(i.resolve)})),i.promise.then((function(){t._initCommandsPromise=!0})),this._initCommandsPromise=i.promise):i.resolve()},registerCommand:function(n,t,i){var m=this;function e(i){i.isBrowserSupported&&!i.isBrowserSupported()||m._commands[n]||(m._commands[n]={index:m._commandIndex++,id:n,label:t||i.label,command:i})}if(!i)return this._initCommands().then((function(){var t=a[n];t&&e(new t)}));e(i)},getCommands:function(){return this._initCommands().then(function(){var n=[],t=this._commands[o.PDF];for(var i in this._commands)n.push(this._commands[i]);n.sort((function(n,t){return n.index-t.index}));var m=this._getCurrentContext();return m&&m.geoenrichmentUrl&&t?e(r.hasCapability("FormatInfographics"),(function(i){return i||(n=n.filter((function(n){return n!==t}))),n})):e(n)}.bind(this))},getCommandById:function(n){return this._commands[n]&&this._commands[n].command},executeCommand:function(n,t,m,e){return this._initCommands().then(function(){return m=i.mixin({printMapTaskUrl:this.printMapTaskUrl},m),this._commands[n]&&this._commands[n].command&&this._commands[n].command.execute(t,m||{},e)}.bind(this))},executeCommandOnData:function(n,t,m,e){return this._initCommands().then(function(){return m=i.mixin({printMapTaskUrl:this.printMapTaskUrl},m),this._commands[n]&&this._commands[n].command&&this._commands[n].command.executeOnData(this,t,m||{},e)}.bind(this))}})}));