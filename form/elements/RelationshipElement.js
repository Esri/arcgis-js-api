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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","./Element","../../popup/support/RelatedRecordsInfoFieldOrder"],(function(e,t,r,i,o,p,s){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.displayCount=null,r.displayType="list",r.editable=!0,r.orderByFields=null,r.relationshipId=null,r.type="relationship",r}var p;return r.__extends(t,e),p=t,t.prototype.clone=function(){return new p({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editable:this.editable,label:this.label,orderByFields:i.clone(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})},r.__decorate([o.property({type:Number,json:{write:!0}})],t.prototype,"displayCount",void 0),r.__decorate([o.property({type:["list"],json:{write:!0}})],t.prototype,"displayType",void 0),r.__decorate([o.property({type:Boolean,json:{default:!0,write:!0}})],t.prototype,"editable",void 0),r.__decorate([o.property({type:[s],json:{write:!0}})],t.prototype,"orderByFields",void 0),r.__decorate([o.property({type:Number,json:{write:!0}})],t.prototype,"relationshipId",void 0),r.__decorate([o.property({type:["relationship"],json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=p=r.__decorate([o.subclass("esri.form.elements.RelationshipElement")],t)}(p.Element)}));