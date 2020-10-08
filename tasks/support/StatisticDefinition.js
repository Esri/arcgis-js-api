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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],(function(t,e,i,r,o,s,a){"use strict";var c=new r.default({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete"});return function(t){function e(e){var i=t.call(this,e)||this;return i.maxPointCount=void 0,i.maxRecordCount=void 0,i.maxVertexCount=void 0,i.onStatisticField=null,i.outStatisticFieldName=null,i.statisticType=null,i.statisticParameters=null,i}var r;return i.__extends(e,t),r=e,e.prototype.writeStatisticParameters=function(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=s.clone(t))},e.prototype.clone=function(){return new r({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:s.clone(this.statisticParameters)})},i.__decorate([a.property({type:Number,json:{write:!0}})],e.prototype,"maxPointCount",void 0),i.__decorate([a.property({type:Number,json:{write:!0}})],e.prototype,"maxRecordCount",void 0),i.__decorate([a.property({type:Number,json:{write:!0}})],e.prototype,"maxVertexCount",void 0),i.__decorate([a.property({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),i.__decorate([a.property({type:String,json:{write:!0}})],e.prototype,"outStatisticFieldName",void 0),i.__decorate([a.property({type:String,json:{read:{source:"statisticType",reader:c.read},write:{target:"statisticType",writer:c.write}}})],e.prototype,"statisticType",void 0),i.__decorate([a.property({type:Object})],e.prototype,"statisticParameters",void 0),i.__decorate([a.writer("statisticParameters")],e.prototype,"writeStatisticParameters",null),e=r=i.__decorate([a.subclass("esri.tasks.support.StatisticDefinition")],e)}(o.JSONSupport)}));