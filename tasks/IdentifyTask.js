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

define(["require","exports","tslib","../request","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./operations/identify","./support/IdentifyParameters","./support/IdentifyResult"],(function(e,r,t,s,n,o,i,a,u,p){return function(e){function r(r){var t=e.call(this,r)||this;return t.gdbVersion=null,t.url=null,t}return t.__extends(r,e),r.prototype.execute=function(e,r){var n=this,i=(e=this._normalizeParams(e)).geometry?[e.geometry]:[],u=this._parseUrl(this.url);return u.path+="/identify",o.normalizeCentralMeridian(i).then((function(o){var i=a.identifyToIdentifyRESTParameters(e,{geometry:o&&o[0]}),p=n._encode(t.__assign(t.__assign(t.__assign({},u.query),{f:"json"}),i));n.gdbVersion&&(p.gdbVersion=n.gdbVersion);var l={query:p};return(n.requestOptions||r)&&(l=t.__assign(t.__assign(t.__assign({},n.requestOptions),r),l)),s(u.path,l).then(n._handleExecuteResponse)}))},r.prototype._handleExecuteResponse=function(e){var r=e.data;r.results=r.results||[];var t={results:[]};return t.results=r.results.map((function(e){return p.fromJSON(e)})),t},r.prototype._normalizeParams=function(e){return e=u.from(e)},t.__decorate([n.property()],r.prototype,"gdbVersion",void 0),t.__decorate([n.property()],r.prototype,"url",void 0),r=t.__decorate([n.subclass("esri.tasks.IdentifyTask")],r)}(i)}));