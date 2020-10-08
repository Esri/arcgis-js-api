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

define(["require","exports","tslib","./AsyncWorkerQueue"],(function(e,r,t,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(r,t,s,u,n){var l=e.call(this,u)||this;return l.url=r,l.options=t,l.docType=s,l.key=n,l.result=null,l.status=1,l.request=null,l.abortController=null,l.resolvers=new Array,l.startTime=0,l}return t.__extends(r,e),r}(s.BaseTask);r.default=u}));