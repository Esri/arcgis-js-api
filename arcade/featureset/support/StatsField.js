// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./WhereClause"],function(t,r,e){return function(){function t(){}return t.prototype.clone=function(){var r=new t;return r.field=this.field,r.typeofstat=this.typeofstat,r.workingexpr=this.workingexpr,r},t.parseStatField=function(r,n){var i=new t;i.field=r;var a=e.create(n),o=a.statisticFunction();if(null===o)throw new Error("Invalid Statistic Function");var s=o.name.toUpperCase().trim();if("MIN"===s){if(i.typeofstat="MIN",i.workingexpr=o.expr,null===a)throw new Error("Invalid Statistic Function Parameters")}else if("MAX"===s){if(i.typeofstat="MAX",i.workingexpr=o.expr,null===a)throw new Error("Invalid Statistic Function Parameters")}else if("COUNT"===s)i.typeofstat="COUNT",i.workingexpr=o.expr;else if("STDEV"===s){if(i.typeofstat="STDEV",i.workingexpr=o.expr,null===a)throw new Error("Invalid Statistic Function Parameters")}else if("SUM"===s){if(i.typeofstat="SUM",i.workingexpr=o.expr,null===a)throw new Error("Invalid Statistic Function Parameters")}else if("MEAN"===s){if(i.typeofstat="MEAN",i.workingexpr=o.expr,null===a)throw new Error("Invalid Statistic Function Parameters")}else if("AVERAGE"===s){if(i.typeofstat="AVERAGE",i.workingexpr=o.expr,null===a)throw new Error("Invalid Statistic Function Parameters")}else{if("VARIANCE"!==s)throw new Error("Invalid Statistic Function");if(i.typeofstat="VARIANCE",i.workingexpr=o.expr,null===a)throw new Error("Invalid Statistic Function Parameters")}return i},t.prototype.toStatisticsName=function(){switch(this.typeofstat.toUpperCase()){case"MIN":return"min";case"MAX":return"max";case"SUM":return"sum";case"COUNT":return"count";case"VARIANCE":return"var";case"STDEV":return"stddev";case"MEAN":case"AVERAGE":return"avg";default:return"count"}},t}()});