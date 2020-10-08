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

define(["require","exports","tslib","../../request","../../geometry/support/jsonUtils","../utils","../../tasks/operations/generalize","../../tasks/support/GeneralizeParameters"],(function(e,r,t,n,i,s,a,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.generalize=void 0,r.generalize=function(e,r,u){return t.__awaiter(this,void 0,void 0,(function(){var l,f,p,g,_,c;return t.__generator(this,(function(d){return r=o.from(r),l=r.toJSON(),f=a.generalizeToRESTParameters(r),p=s.parseUrl(e),g=t.__assign(t.__assign(t.__assign({},p.query),{f:"json"}),f),_=l.geometries[0].spatialReference,c=s.asValidOptions(g,u),[2,n(p.path+"/generalize",c).then((function(e){return(e.data.geometries||[]).map((function(e){return i.fromJSON(e).set({spatialReference:_})}))}))]}))}))}}));