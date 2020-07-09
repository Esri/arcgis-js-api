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

define(["require","exports","tslib","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/uuid","../../core/accessorSupport/decorators","./BuildingFilterAuthoringInfo","./BuildingFilterAuthoringInfoCheckbox","./BuildingFilterBlock"],(function(e,t,r,o,i,n,p,l,c,s,u){var d=o.ofType(u);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.description=null,t.filterBlocks=null,t.id=p.generateUUID(),t.name=null,t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({description:this.description,filterBlocks:n.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:n.clone(this.filterAuthoringInfo)})},r.__decorate([l.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([l.property({type:d,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"filterBlocks",void 0),r.__decorate([l.property({types:{key:"type",base:c,typeMap:{checkbox:s}},json:{read:function(e){switch(e&&e.type){case"checkbox":return s.fromJSON(e);default:return null}},write:!0}})],t.prototype,"filterAuthoringInfo",void 0),r.__decorate([l.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"id",void 0),r.__decorate([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"name",void 0),t=o=r.__decorate([l.subclass("esri.layers.support.BuildingFilter")],t)}(i.JSONSupport)}));