// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["require","dojo/aspect","dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/when"],function(e,n,i,t,r,o){function s(){n.after(this.constructor._meta,"ctor",this._pluginsHandler,!0),this._plugins={}}return s.prototype={addPlugin:function(n,i){var t=this,s=this._plugins,d=new r;try{e([n],function(e){n in s?d.resolve({id:s[n].declaredId||n.replace(/\//g,".")}):(s[n]=e,o(e.add(t,i),function(){var i={id:e.declaredId||n.replace(/\//g,".")};t.emit("plugin-add",i),d.resolve(i)},function(e){d.reject(e)}))})}catch(a){d.reject(a)}return d.promise},removePlugin:function(e){if(e in this._plugins){var n=this._plugins[e];n.remove(this),delete this._plugins[e],this.emit("plugin-remove",{id:n.declaredId||e.replace(/\//g,".")})}},_pluginsHandler:function(){var e=this;i.some(arguments,function(n){if(n&&n.plugins&&n.plugins instanceof Array){var i,t,r,o=n.plugins;for(r=0;r<o.length;r++)i=o[r],t=i instanceof Object?i.id:i,e.addPlugin(t,i.options);return!0}})}},s});