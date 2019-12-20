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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","dojo/aspect","dojo/when","../../core/promiseUtils"],function(i,n,e,t){function r(){n.after(this.constructor._meta,"ctor",this._pluginsHandler,!0),this._plugins={}}return r.prototype={addPlugin:function(n,r){var o=this,s=this._plugins;return t.create(function(t,u){try{i([n],function(i){n in s?t({id:s[n].declaredId||n.replace(/\//g,".")}):(s[n]=i,e(i.add(o,r),function(){var e={id:i.declaredId||n.replace(/\//g,".")};o.emit("plugin-add",e),t(e)},function(i){u(i)}))})}catch(i){u(i)}})},removePlugin:function(i){if(i in this._plugins){var n=this._plugins[i];n.remove(this),delete this._plugins[i],this.emit("plugin-remove",{id:n.declaredId||i.replace(/\//g,".")})}},_pluginsHandler:function(){Array.prototype.slice.call(arguments).some(function(i){if(i&&i.plugins&&i.plugins instanceof Array){var n,e,t,r=i.plugins;for(t=0;t<r.length;t++)n=r[t],e=n instanceof Object?n.id:n,this.addPlugin(e,n.options);return!0}},this)}},r});