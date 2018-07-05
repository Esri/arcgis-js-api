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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","./commands/CreateHTMLCommand","./commands/CreatePDFCommand","./commands/CreateImageCommand","./commands/PrintReportCommand","./commands/CreatePlayerCommand","../PlayerCommands","./supportClasses/GEUtil"],function(n,m,o,a,e,t,r,s,d,i){var c={};return c[d.HTML]=a,c[d.PDF]=e,c[d.IMAGE]=t,c[d.PRINT]=r,c[d.DYNAMIC_HTML]=s,n(null,{_commands:null,_commandIndex:0,constructor:function(){this._commands={}},registerCommand:function(n,m,o){o=o||new c[n],o.isBrowserSupported&&!o.isBrowserSupported()||this._commands[n]||(this._commands[n]={index:this._commandIndex++,id:n,label:m||o.label,command:o})},getCommands:function(){var n=[],m=this._commands[d.PDF];for(var a in this._commands)n.push(this._commands[a]);n.sort(function(n,m){return n.index-m.index});var e=this._getCurrentContext();return e&&e.geoenrichmentUrl&&m?o(i.hasCapability(e.geoenrichmentUrl,"FormatInfographics"),function(o){return o||(n=n.filter(function(n){return n!==m})),n}):o(n)},getCommandById:function(n){return this._commands[n]&&this._commands[n].command},executeCommand:function(n,o,a,e){return a=m.mixin({printMapTaskUrl:this.printMapTaskUrl},a),this._commands[n]&&this._commands[n].command&&this._commands[n].command.execute(o,a||{},e)}})});