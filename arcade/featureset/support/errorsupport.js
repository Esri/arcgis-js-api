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

define(["require","exports","../../polyfill/tsSupport/extends","../../executionError"],(function(e,r,t,s){"use strict";var o,n,a;Object.defineProperty(r,"__esModule",{value:!0}),r.FeatureSetError=r.FeatureSetErrorMessages=r.FeatureSetErrorCodes=r.SqlError=r.SqlErrorMessages=r.SqlErrorCodes=void 0,function(e){e.InvalidFunctionParameters="InvalidFunctionParameters",e.UnsupportedSqlFunction="UnsupportedSqlFunction",e.UnsupportedOperator="UnsupportedOperator",e.UnsupportedSyntax="UnsupportedSyntax",e.UnsupportedIsRhs="UnsupportedIsRhs",e.UnsupportedIsLhs="UnsupportedIsLhs",e.MissingStatisticParameters="MissingStatisticParameters"}(a=r.SqlErrorCodes||(r.SqlErrorCodes={})),r.SqlErrorMessages=((o={})[a.MissingStatisticParameters]="Statistic does not have 1 or 0 Parameters",o[a.InvalidFunctionParameters]="Invalid parameters for call to {function}",o[a.UnsupportedIsLhs]="Unsupported left hand expression in is statement",o[a.UnsupportedIsRhs]="Unsupported right hand expression in is statement",o[a.UnsupportedOperator]="Unsupported operator - {operator}",o[a.UnsupportedSyntax]="Unsupported syntax - {node}",o[a.UnsupportedSqlFunction]="Sql function not found = {function}",o);var i,u=function(e){function o(t,n){var a=e.call(this,s.doSubstitutions(r.SqlErrorMessages[t],n))||this;return a.declaredRootClass="esri.arcade.featureset.support.sqlerror",Error.captureStackTrace&&Error.captureStackTrace(a,o),a}return t(o,e),o}(Error);r.SqlError=u,function(e){e.NeverReach="NeverReach",e.NotImplemented="NotImplemented",e.Cancelled="Cancelled",e.InvalidStatResponse="InvalidStatResponse",e.InvalidRequest="InvalidRequest",e.RequestFailed="RequestFailed",e.MissingFeatures="MissingFeatures",e.AggregationFieldNotFound="AggregationFieldNotFound",e.DataElementsNotFound="DataElementsNotFound"}(i=r.FeatureSetErrorCodes||(r.FeatureSetErrorCodes={})),r.FeatureSetErrorMessages=((n={})[i.Cancelled]="Cancelled",n[i.InvalidStatResponse]="Invalid statistics response from service",n[i.InvalidRequest]="Invalid request",n[i.RequestFailed]="Request failed - {reason}",n[i.MissingFeatures]="Missing features",n[i.AggregationFieldNotFound]="Aggregation field not found",n[i.DataElementsNotFound]="Data elements not found on service",n[i.NeverReach]="Encountered unreachable logic",n[i.NotImplemented]="Not implemented",n);var d=function(e){function o(t,n){var a=e.call(this,s.doSubstitutions(r.FeatureSetErrorMessages[t],n))||this;return a.declaredRootClass="esri.arcade.featureset.support.featureseterror",Error.captureStackTrace&&Error.captureStackTrace(a,o),a}return t(o,e),o}(Error);r.FeatureSetError=d}));