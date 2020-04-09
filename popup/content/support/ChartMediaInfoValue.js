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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators","./ChartMediaInfoValueSeries"],(function(e,r,t,o,i,p,l,n){return function(e){function r(r){var t=e.call(this,r)||this;return t.fields=[],t.normalizeField=null,t.series=[],t.tooltipField=null,t}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({fields:p.clone(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})},o([l.property({type:[String],json:{write:!0}})],r.prototype,"fields",void 0),o([l.property({type:String,json:{write:!0}})],r.prototype,"normalizeField",void 0),o([l.property({type:[n],json:{read:!1}})],r.prototype,"series",void 0),o([l.property({type:String,json:{write:!0}})],r.prototype,"tooltipField",void 0),r=i=o([l.subclass("esri.popup.content.support.ChartMediaInfoValue")],r)}(l.declared(i.JSONSupport))}));