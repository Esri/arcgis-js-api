// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./errorsupport","./shared","./sqlUtils","../../polyfill/sql/WhereClause"],(function(r,e,t,n,o,i){"use strict";return function(){function r(){this.field="",this.tofieldname="",this.typeofstat="MIN",this.workingexpr=null}return r.prototype.clone=function(){var e=new r;return e.field=this.field,e.tofieldname=this.tofieldname,e.typeofstat=this.typeofstat,e.workingexpr=this.workingexpr,e},r.parseStatField=function(e,a,s){var l=new r;l.field=e;var u=i.WhereClause.create(a,s),f=function(r){if("function"===r.parseTree.type){if(0===r.parseTree.args.value.length)return{name:r.parseTree.name,expr:null};if(r.parseTree.args.value.length>1)throw new t.SqlError(t.SqlErrorCodes.MissingStatisticParameters);var e=i.WhereClause.create(o.toWhereClauseFromTree(r.parseTree.args.value[0],n.FeatureServiceDatabaseType.Standardised,r.parameters),r.fieldsIndex);return{name:r.parseTree.name,expr:e}}return null}(u);if(null===f)throw new t.SqlError(t.SqlErrorCodes.UnsupportedSqlFunction,{function:""});var p=f.name.toUpperCase().trim();if("MIN"===p){if(l.typeofstat="MIN",l.workingexpr=f.expr,null===u)throw new t.SqlError(t.SqlErrorCodes.InvalidFunctionParameters,{function:"min"})}else if("MAX"===p){if(l.typeofstat="MAX",l.workingexpr=f.expr,null===u)throw new t.SqlError(t.SqlErrorCodes.InvalidFunctionParameters,{function:"max"})}else if("COUNT"===p)l.typeofstat="COUNT",l.workingexpr=f.expr;else if("STDEV"===p){if(l.typeofstat="STDDEV",l.workingexpr=f.expr,null===u)throw new t.SqlError(t.SqlErrorCodes.InvalidFunctionParameters,{function:"stdev"})}else if("SUM"===p){if(l.typeofstat="SUM",l.workingexpr=f.expr,null===u)throw new t.SqlError(t.SqlErrorCodes.InvalidFunctionParameters,{function:"sum"})}else if("MEAN"===p){if(l.typeofstat="AVG",l.workingexpr=f.expr,null===u)throw new t.SqlError(t.SqlErrorCodes.InvalidFunctionParameters,{function:p})}else if("AVG"===p){if(l.typeofstat="AVG",l.workingexpr=f.expr,null===u)throw new t.SqlError(t.SqlErrorCodes.InvalidFunctionParameters,{function:"avg"})}else{if("VAR"!==p)throw new t.SqlError(t.SqlErrorCodes.UnsupportedSqlFunction,{function:p});if(l.typeofstat="VAR",l.workingexpr=f.expr,null===u)throw new t.SqlError(t.SqlErrorCodes.InvalidFunctionParameters,{function:"var"})}return l},r.prototype.toStatisticsName=function(){switch(this.typeofstat.toUpperCase()){case"MIN":return"min";case"MAX":return"max";case"SUM":return"sum";case"COUNT":return"count";case"VAR":return"var";case"STDDEV":return"stddev";case"AVG":return"avg";default:return"count"}},r}()}));