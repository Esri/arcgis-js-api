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

define(["require","exports","tslib","../../request","../utils","../../tasks/operations/lengths","../../tasks/support/LengthsParameters"],(function(t,e,s,n,r,i,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.lengths=void 0,e.lengths=function(t,e,o){return s.__awaiter(this,void 0,void 0,(function(){var u,_,l,g;return s.__generator(this,(function(h){return e=a.from(e),u=i.lengthsToRESTParameters(e),_=r.parseUrl(t),l=s.__assign(s.__assign(s.__assign({},_.query),{f:"json"}),u),g=r.asValidOptions(l,o),[2,n(_.path+"/lengths",g).then((function(t){return t.data}))]}))}))}}));