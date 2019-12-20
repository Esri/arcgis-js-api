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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./BuildingFilterMode","./BuildingFilterModeSolid","./BuildingFilterModeWireFrame"],function(e,r,t,i,o,l,n,p,s,d){var u={types:{key:"type",base:p,typeMap:{solid:s,"wire-frame":d}},json:{read:function(e){switch(e&&e.type){case"solid":return s.fromJSON(e);case"wireFrame":return d.fromJSON(e);default:return null}},write:{enabled:!0,isRequired:!0}}};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterExpression=null,r.filterMode=new s,r.title="",r}t(r,e),o=r,r.prototype.clone=function(){return new o({filterExpression:this.filterExpression,filterMode:l.clone(this.filterMode),title:this.title})};var o;return i([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterExpression",void 0),i([n.property(u)],r.prototype,"filterMode",void 0),i([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"title",void 0),r=o=i([n.subclass("esri.layers.support.BuildingFilterBlock")],r)}(n.declared(o.JSONSupport))});