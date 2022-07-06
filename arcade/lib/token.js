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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){"use strict";var a;Object.defineProperty(r,"__esModule",{value:!0}),r.TokenName=r.TokenType=void 0,function(e){e[e.BooleanLiteral=1]="BooleanLiteral",e[e.EOF=2]="EOF",e[e.Identifier=3]="Identifier",e[e.Keyword=4]="Keyword",e[e.NullLiteral=5]="NullLiteral",e[e.NumericLiteral=6]="NumericLiteral",e[e.Punctuator=7]="Punctuator",e[e.StringLiteral=8]="StringLiteral",e[e.RegularExpression=9]="RegularExpression",e[e.Template=10]="Template"}(a=r.TokenType||(r.TokenType={})),r.TokenName={},r.TokenName[a.BooleanLiteral]="Boolean",r.TokenName[a.EOF]="<end>",r.TokenName[a.Identifier]="Identifier",r.TokenName[a.Keyword]="Keyword",r.TokenName[a.NullLiteral]="Null",r.TokenName[a.NumericLiteral]="Numeric",r.TokenName[a.Punctuator]="Punctuator",r.TokenName[a.StringLiteral]="String",r.TokenName[a.RegularExpression]="RegularExpression",r.TokenName[a.Template]="Template"}));