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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../request","../core/accessorSupport/decorators","./Task","./operations/find","./support/FindParameters","./support/FindResult"],(function(e,r,s,t,n,o,i,a,u){return function(e){function r(r){var s=e.call(this,r)||this;return s.gdbVersion=null,s.url=null,s}return s.__extends(r,e),r.prototype.execute=function(e,r){e=this._normalizeParams(e);var n=i.findToFindRESTParameters(e),o=this._parseUrl(this.url);o.path+="/find";var a=this._encode(s.__assign(s.__assign(s.__assign({},o.query),{f:"json"}),n));this.gdbVersion&&(a.gdbVersion=this.gdbVersion);var u={query:a};return(this.requestOptions||r)&&(u=s.__assign(s.__assign(s.__assign({},this.requestOptions),r),u)),t(o.path,u).then(this._handleExecuteResponse)},r.prototype._handleExecuteResponse=function(e){var r=e.data;r.results=r.results||[];var s={results:[]};return s.results=r.results.map((function(e){return u.fromJSON(e)})),s},r.prototype._normalizeParams=function(e){return e=a.from(e)},s.__decorate([n.property()],r.prototype,"gdbVersion",void 0),s.__decorate([n.property()],r.prototype,"url",void 0),r=s.__decorate([n.subclass("esri.tasks.FindTask")],r)}(o)}));