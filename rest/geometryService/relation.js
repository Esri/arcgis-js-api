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

define(["require","exports","tslib","../../request","../utils","../../tasks/operations/relation","../../tasks/support/RelationParameters"],(function(t,e,r,n,i,a,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.relation=void 0,e.relation=function(t,e,o){return r.__awaiter(this,void 0,void 0,(function(){var u,l,_,f;return r.__generator(this,(function(d){return e=s.from(e),u=a.relationToRESTParameters(e),l=i.parseUrl(t),_=r.__assign(r.__assign(r.__assign({},l.query),{f:"json"}),u),f=i.asValidOptions(_,o),[2,n(l.path+"/relation",f).then((function(t){return t.data.relations}))]}))}))}}));