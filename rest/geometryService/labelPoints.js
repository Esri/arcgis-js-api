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

define(["require","exports","tslib","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,n,i,s,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.labelPoints=void 0,t.labelPoints=function(e,t,o){var a=t.map((function(e){return e.toJSON()})),l=t[0].spatialReference,u=r.parseUrl(e),f=n.__assign(n.__assign({},u.query),{f:"json",sr:l.wkid?l.wkid:JSON.stringify(l.toJSON()),polygons:JSON.stringify(a)}),p=r.asValidOptions(f,o);return i(u.path+"/labelPoints",p).then((function(e){return(e.data.labelPoints||[]).map((function(e){return s.fromJSON(e).set({spatialReference:l})}))}))}}));