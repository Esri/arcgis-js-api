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

define(["require","exports","./shared","./sqlUtils","../../../core/sql/WhereClause"],(function(e,r,t,n,a){"use strict";return function(){function e(){}return e.prototype.clone=function(){var r=new e;return r.field=this.field,r.tofieldname=this.tofieldname,r.typeofstat=this.typeofstat,r.workingexpr=this.workingexpr,r},e.parseStatField=function(r,i,s){var o=new e;o.field=r;var l=a.WhereClause.create(i,s),u=function(e){if("function"===e.parseTree.type){if(0===e.parseTree.args.value.length)return{name:e.parseTree.name,expr:null};if(e.parseTree.args.value.length>1)throw new Error("Statistic does not have 1 or 0 Parameters");var r=a.WhereClause.create(n.toWhereClauseFromTree(e.parseTree.args.value[0],t.FeatureServiceDatabaseType.Standardised,e.parameters),e.fieldsIndex);return{name:e.parseTree.name,expr:r}}return null}(l);if(null===u)throw new Error("Invalid Statistic Function");var p=u.name.toUpperCase().trim();if("MIN"===p){if(o.typeofstat="MIN",o.workingexpr=u.expr,null===l)throw new Error("Invalid Statistic Function Parameters")}else if("MAX"===p){if(o.typeofstat="MAX",o.workingexpr=u.expr,null===l)throw new Error("Invalid Statistic Function Parameters")}else if("COUNT"===p)o.typeofstat="COUNT",o.workingexpr=u.expr;else if("STDEV"===p){if(o.typeofstat="STDDEV",o.workingexpr=u.expr,null===l)throw new Error("Invalid Statistic Function Parameters")}else if("SUM"===p){if(o.typeofstat="SUM",o.workingexpr=u.expr,null===l)throw new Error("Invalid Statistic Function Parameters")}else if("MEAN"===p){if(o.typeofstat="AVG",o.workingexpr=u.expr,null===l)throw new Error("Invalid Statistic Function Parameters")}else if("AVG"===p){if(o.typeofstat="AVG",o.workingexpr=u.expr,null===l)throw new Error("Invalid Statistic Function Parameters")}else{if("VAR"!==p)throw new Error("Invalid Statistic Function");if(o.typeofstat="VAR",o.workingexpr=u.expr,null===l)throw new Error("Invalid Statistic Function Parameters")}return o},e.prototype.toStatisticsName=function(){switch(this.typeofstat.toUpperCase()){case"MIN":return"min";case"MAX":return"max";case"SUM":return"sum";case"COUNT":return"count";case"VAR":return"var";case"STDDEV":return"stddev";case"AVG":return"avg";default:return"count"}},e}()}));