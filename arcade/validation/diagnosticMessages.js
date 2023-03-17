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

define(["require","exports"],(function(e,i){"use strict";var n,t;Object.defineProperty(i,"__esModule",{value:!0}),i.DiagnosticMessages=i.DiagnosticCodes=void 0,function(e){e.AlreadyDefined="AlreadyDefined",e.ApiConflict="ApiConflict",e.AssignedNeverUsed="AssignedNeverUsed",e.DefinedNeverAssigned="DefinedNeverAssigned",e.DefinedNeverUsed="DefinedNeverUsed",e.EmptyBlockStatement="EmptyBlockStatement",e.ExecutionError="ExecutionError",e.InvalidCallIdentifier="InvalidCallIdentifier",e.InvalidConstantIdentifier="InvalidConstantIdentifier",e.InvalidPropertyIdentifier="InvalidPropertyIdentifier",e.NoArgumentExpected="NoArgumentExpected",e.NotDefined="NotDefined",e.NotADictionary="NotADictionary",e.NotEnoughArguments="NotEnoughArguments",e.ProfileVariablesConflict="ProfileVariablesConflict",e.ProfileVariablesAreImmutable="ProfileVariablesAreImmutable",e.ReservedKeyword="ReservedKeyword",e.TooManyArguments="TooManyArguments",e.UnexpectedEmptyFunction="UnexpectedEmptyFunction",e.UnexpectedPropertyIdentifier="UnexpectedPropertyIdentifier",e.UnknownPropertyIdentifier="UnknownPropertyIdentifier"}(t=i.DiagnosticCodes||(i.DiagnosticCodes={})),i.DiagnosticMessages=((n={})[t.AlreadyDefined]="'${identifier}' is already defined.",n[t.ApiConflict]="'${identifier}' is already defined as an Arcade constant or function.",n[t.AssignedNeverUsed]="'${identifier}' is assigned but never used.",n[t.DefinedNeverAssigned]="'${identifier}' is defined but never assigned.",n[t.DefinedNeverUsed]="'${identifier}' is defined but never used.",n[t.EmptyBlockStatement]="Empty block statement.",n[t.ExecutionError]="Execution Error: '${stack}'",n[t.InvalidConstantIdentifier]="Invalid constant identifier, expecting ${list}.",n[t.InvalidPropertyIdentifier]="Invalid property identifier, expecting ${list}.",n[t.NoArgumentExpected]="Expecting no argument.",n[t.NotADictionary]="'${identifier}' doesn't have properties.",n[t.NotDefined]="'${identifier}' is not defined.",n[t.NotEnoughArguments]="Expecting at least ${min} argument(s).",n[t.ProfileVariablesAreImmutable]="Profile variables cannot be modified.",n[t.ProfileVariablesConflict]="'${identifier}' is already defined as a profile variable.",n[t.ReservedKeyword]="'${identifier}' is a reserved keyword.",n[t.TooManyArguments]="Too many arguments, expecting ${max}.",n[t.UnexpectedEmptyFunction]="Unexpected empty function '${identifier}'.",n[t.UnexpectedPropertyIdentifier]="Unexpected property identifier.",n[t.UnknownPropertyIdentifier]="Unknown property identifier '${identifier}'.",n)}));