// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","dojo/aspect","dojo/Deferred","dojo/when"],function(e,i,n,t){function r(){i.after(this.constructor._meta,"ctor",this._pluginsHandler,!0),this._plugins={}}return r.prototype={addPlugin:function(i,r){var o=this,s=this._plugins,l=new n;try{e([i],function(e){i in s?l.resolve({id:s[i].declaredId||i.replace(/\//g,".")}):(s[i]=e,t(e.add(o,r),function(){var n={id:e.declaredId||i.replace(/\//g,".")};o.emit("plugin-add",n),l.resolve(n)},function(e){l.reject(e)}))})}catch(e){l.reject(e)}return l.promise},removePlugin:function(e){if(e in this._plugins){var i=this._plugins[e];i.remove(this),delete this._plugins[e],this.emit("plugin-remove",{id:i.declaredId||e.replace(/\//g,".")})}},_pluginsHandler:function(){Array.prototype.slice.call(arguments).some(function(e){if(e&&e.plugins&&e.plugins instanceof Array){var i,n,t,r=e.plugins;for(t=0;t<r.length;t++)i=r[t],n=i instanceof Object?i.id:i,this.addPlugin(n,i.options);return!0}},this)}},r});