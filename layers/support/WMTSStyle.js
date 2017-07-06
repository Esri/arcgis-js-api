// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../core/accessorSupport/decorators","../../core/JSONSupport"],function(e,r,t,o,s,i,p){var l=n=function(e){function r(r){var t=e.call(this)||this;return t.id=null,t.title=null,t.description=null,t.legendUrl=null,t}return t(r,e),r.prototype.clone=function(){var e=new n;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e},r}(i.declared(p));o([i.property({json:{read:{source:"id"}}})],l.prototype,"id",void 0),o([i.property({json:{read:{source:"title"}}})],l.prototype,"title",void 0),o([i.property({json:{read:{source:"abstract"}}})],l.prototype,"description",void 0),o([i.property({json:{read:{source:"legendUrl"}}})],l.prototype,"legendUrl",void 0),o([i.property({json:{read:{source:"isDefault"}}})],l.prototype,"isDefault",void 0),o([i.property({json:{read:{source:"keywords"}}})],l.prototype,"keywords",void 0),l=n=o([i.subclass("esri.layer.support.WMTSStyle")],l);var n;return l});