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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/tsSupport/assignHelper","../request","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./operations/identify","./support/IdentifyParameters","./support/IdentifyResult"],(function(e,r,t,o,s,n,i,p,u,a,l,d,c){return function(e){function r(r){var t=e.call(this,r)||this;return t.gdbVersion=null,t.url=null,t}return t(r,e),r.prototype.execute=function(e,r){var t=this,o=(e=this._normalizeParams(e)).geometry?[e.geometry]:[],s=this._parseUrl(this.url);return s.path+="/identify",u.normalizeCentralMeridian(o).then((function(o){var p=l.identifyToIdentifyRESTParameters(e,{geometry:o&&o[0]}),u=t._encode(n({},s.query,{f:"json"},p));t.gdbVersion&&(u.gdbVersion=t.gdbVersion);var a={query:u};return(t.requestOptions||r)&&(a=n({},t.requestOptions,r,a)),i(s.path,a).then(t._handleExecuteResponse)}))},r.prototype._handleExecuteResponse=function(e){var r=e.data;r.results=r.results||[];var t={results:[]};return t.results=r.results.map((function(e){return c.fromJSON(e)})),t},r.prototype._normalizeParams=function(e){return e=d.from(e)},o([p.property()],r.prototype,"gdbVersion",void 0),o([p.property()],r.prototype,"url",void 0),r=o([p.subclass("esri.tasks.IdentifyTask")],r)}(p.declared(a))}));