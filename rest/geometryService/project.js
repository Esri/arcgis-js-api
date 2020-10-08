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

define(["require","exports","tslib","../../request","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils","../utils","./utils","../../tasks/support/ProjectParameters"],(function(e,t,r,s,o,i,n,u,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.project=void 0;var p=o.ensureType(a);t.project=function(e,t,o){return r.__awaiter(this,void 0,void 0,(function(){var a,c,_,d,f;return r.__generator(this,(function(l){return t=p(t),a=n.parseUrl(e),c=r.__assign(r.__assign(r.__assign({},a.query),{f:"json"}),t.toJSON()),_=t.outSpatialReference,d=i.getJsonType(t.geometries[0]),f=n.asValidOptions(c,o),[2,s(a.path+"/project",f).then((function(e){var t=e.data.geometries;return u.decodeGeometries(t,d,_)}))]}))}))}}));