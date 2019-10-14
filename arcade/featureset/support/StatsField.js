// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","./shared","./sqlUtils","../../polyfill/sql/WhereClause"],function(e,r,t,n,a){"use strict";function i(e){if("function"===e.parseTree.type){if(0===e.parseTree.args.value.length)return{name:e.parseTree.name,expr:null};if(e.parseTree.args.value.length>1)throw new Error("Statistic does not have 1 or 0 Parameters");var r=a.WhereClause.create(n.toWhereClauseFromTree(e.parseTree.args.value[0],t.FeatureServiceDatabaseType.Standardised,e.parameters),e.fieldsIndex);return{name:e.parseTree.name,expr:r}}return null}return function(){function e(){}return e.prototype.clone=function(){var r=new e;return r.field=this.field,r.tofieldname=this.tofieldname,r.typeofstat=this.typeofstat,r.workingexpr=this.workingexpr,r},e.parseStatField=function(r,t,n){var s=new e;s.field=r;var o=a.WhereClause.create(t,n),l=i(o);if(null===l)throw new Error("Invalid Statistic Function");var u=l.name.toUpperCase().trim();if("MIN"===u){if(s.typeofstat="MIN",s.workingexpr=l.expr,null===o)throw new Error("Invalid Statistic Function Parameters")}else if("MAX"===u){if(s.typeofstat="MAX",s.workingexpr=l.expr,null===o)throw new Error("Invalid Statistic Function Parameters")}else if("COUNT"===u)s.typeofstat="COUNT",s.workingexpr=l.expr;else if("STDEV"===u){if(s.typeofstat="STDEV",s.workingexpr=l.expr,null===o)throw new Error("Invalid Statistic Function Parameters")}else if("SUM"===u){if(s.typeofstat="SUM",s.workingexpr=l.expr,null===o)throw new Error("Invalid Statistic Function Parameters")}else if("MEAN"===u){if(s.typeofstat="MEAN",s.workingexpr=l.expr,null===o)throw new Error("Invalid Statistic Function Parameters")}else if("AVERAGE"===u){if(s.typeofstat="AVERAGE",s.workingexpr=l.expr,null===o)throw new Error("Invalid Statistic Function Parameters")}else{if("VARIANCE"!==u)throw new Error("Invalid Statistic Function");if(s.typeofstat="VARIANCE",s.workingexpr=l.expr,null===o)throw new Error("Invalid Statistic Function Parameters")}return s},e.prototype.toStatisticsName=function(){switch(this.typeofstat.toUpperCase()){case"MIN":return"min";case"MAX":return"max";case"SUM":return"sum";case"COUNT":return"count";case"VARIANCE":return"var";case"STDEV":return"stddev";case"MEAN":case"AVERAGE":return"avg";default:return"count"}},e}()});