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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/tsSupport/assignHelper","../request","../core/accessorSupport/decorators","./Task","./operations/find","./support/FindParameters","./support/FindResult"],(function(r,e,t,s,o,n,p,u,i,a,l,d){return function(r){function e(e){var t=r.call(this,e)||this;return t.gdbVersion=null,t.url=null,t}return t(e,r),e.prototype.execute=function(r,e){r=this._normalizeParams(r);var t=a.findToFindRESTParameters(r),s=this._parseUrl(this.url);s.path+="/find";var o=this._encode(n({},s.query,{f:"json"},t));this.gdbVersion&&(o.gdbVersion=this.gdbVersion);var u={query:o};return(this.requestOptions||e)&&(u=n({},this.requestOptions,e,u)),p(s.path,u).then(this._handleExecuteResponse)},e.prototype._handleExecuteResponse=function(r){var e=r.data;e.results=e.results||[];var t={results:[]};return t.results=e.results.map((function(r){return d.fromJSON(r)})),t},e.prototype._normalizeParams=function(r){return r=l.from(r)},s([u.property()],e.prototype,"gdbVersion",void 0),s([u.property()],e.prototype,"url",void 0),e=s([u.subclass("esri.tasks.FindTask")],e)}(u.declared(i))}));