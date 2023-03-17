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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../../polyfill/tsSupport/extends","../../executionError"],(function(e,t,r,a){"use strict";var s,n,o;Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureSetError=t.FeatureSetErrorMessages=t.FeatureSetErrorCodes=t.SqlError=t.SqlErrorMessages=t.SqlErrorCodes=void 0,function(e){e.InvalidFunctionParameters="InvalidFunctionParameters",e.UnsupportedSqlFunction="UnsupportedSqlFunction",e.UnsupportedOperator="UnsupportedOperator",e.UnsupportedSyntax="UnsupportedSyntax",e.UnsupportedIsRhs="UnsupportedIsRhs",e.UnsupportedIsLhs="UnsupportedIsLhs",e.InvalidDataType="InvalidDataType",e.CannotCastValue="CannotCastValue",e.MissingStatisticParameters="MissingStatisticParameters"}(o=t.SqlErrorCodes||(t.SqlErrorCodes={})),t.SqlErrorMessages=((s={})[o.MissingStatisticParameters]="Statistic does not have 1 or 0 Parameters",s[o.InvalidFunctionParameters]="Invalid parameters for call to {function}",s[o.UnsupportedIsLhs]="Unsupported left hand expression in is statement",s[o.UnsupportedIsRhs]="Unsupported right hand expression in is statement",s[o.UnsupportedOperator]="Unsupported operator - {operator}",s[o.UnsupportedSyntax]="Unsupported syntax - {node}",s[o.UnsupportedSqlFunction]="Sql function not found = {function}",s[o.InvalidDataType]="Invalid sql data type",s[o.CannotCastValue]="Cannot cast value to the required data type",s);var i,u=function(e){function s(r,n){var o=e.call(this,a.doSubstitutions(t.SqlErrorMessages[r],n))||this;return o.declaredRootClass="esri.arcade.featureset.support.sqlerror",Error.captureStackTrace&&Error.captureStackTrace(o,s),o}return r(s,e),s}(Error);t.SqlError=u,function(e){e.NeverReach="NeverReach",e.NotImplemented="NotImplemented",e.Cancelled="Cancelled",e.InvalidStatResponse="InvalidStatResponse",e.InvalidRequest="InvalidRequest",e.RequestFailed="RequestFailed",e.MissingFeatures="MissingFeatures",e.AggregationFieldNotFound="AggregationFieldNotFound",e.DataElementsNotFound="DataElementsNotFound"}(i=t.FeatureSetErrorCodes||(t.FeatureSetErrorCodes={})),t.FeatureSetErrorMessages=((n={})[i.Cancelled]="Cancelled",n[i.InvalidStatResponse]="Invalid statistics response from service",n[i.InvalidRequest]="Invalid request",n[i.RequestFailed]="Request failed - {reason}",n[i.MissingFeatures]="Missing features",n[i.AggregationFieldNotFound]="Aggregation field not found",n[i.DataElementsNotFound]="Data elements not found on service",n[i.NeverReach]="Encountered unreachable logic",n[i.NotImplemented]="Not implemented",n);var d=function(e){function s(r,n){var o=e.call(this,a.doSubstitutions(t.FeatureSetErrorMessages[r],n))||this;return o.declaredRootClass="esri.arcade.featureset.support.featureseterror",Error.captureStackTrace&&Error.captureStackTrace(o,s),o}return r(s,e),s}(Error);t.FeatureSetError=d}));