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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/uuid","../../core/accessorSupport/decorators","./BuildingFilterAuthoringInfo","./BuildingFilterAuthoringInfoCheckbox","./BuildingFilterBlock"],(function(e,r,t,o,i,n,p,l,c,s,u,d){var a=i.ofType(d);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.filterBlocks=null,r.id=l.generateUUID(),r.name=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,filterBlocks:p.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:p.clone(this.filterAuthoringInfo)})},o([c.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([c.property({type:a,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterBlocks",void 0),o([c.property({types:{key:"type",base:s,typeMap:{checkbox:u}},json:{read:function(e){switch(e&&e.type){case"checkbox":return u.fromJSON(e);default:return null}},write:!0}})],r.prototype,"filterAuthoringInfo",void 0),o([c.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"id",void 0),o([c.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"name",void 0),r=i=o([c.subclass("esri.layers.support.BuildingFilter")],r)}(c.declared(n.JSONSupport))}));