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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","dojo/aspect","dojo/_base/array","dojo/Deferred","dojo/when"],function(e,i,n,t,r){function o(){i.after(this.constructor._meta,"ctor",this._pluginsHandler,!0),this._plugins={}}return o.prototype={addPlugin:function(i,n){var o=this,s=this._plugins,d=new t;try{e([i],function(e){i in s?d.resolve({id:s[i].declaredId||i.replace(/\//g,".")}):(s[i]=e,r(e.add(o,n),function(){var n={id:e.declaredId||i.replace(/\//g,".")};o.emit("plugin-add",n),d.resolve(n)},function(e){d.reject(e)}))})}catch(u){d.reject(u)}return d.promise},removePlugin:function(e){if(e in this._plugins){var i=this._plugins[e];i.remove(this),delete this._plugins[e],this.emit("plugin-remove",{id:i.declaredId||e.replace(/\//g,".")})}},_pluginsHandler:function(){var e=this;n.some(arguments,function(i){if(i&&i.plugins&&i.plugins instanceof Array){var n,t,r,o=i.plugins;for(r=0;r<o.length;r++)n=o[r],t=n instanceof Object?n.id:n,e.addPlugin(t,n.options);return!0}})}},o});