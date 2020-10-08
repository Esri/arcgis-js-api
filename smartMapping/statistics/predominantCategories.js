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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","./support/utils","../support/adapters/support/layerUtils"],(function(e,r,t,a,i,n,s,o){"use strict";function l(e){return t.__awaiter(this,void 0,void 0,(function(){var r,l,u,d,p,c,f;return t.__generator(this,(function(y){switch(y.label){case 0:if(!(e&&e.layer&&e.view&&e.fields))throw new a("predominant-categories:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(r=[0,2,1,3,4],l=e.layer,u=t.__rest(e,["layer"]),d=o.createLayerAdapter(l,r),p=t.__assign({layerAdapter:d},u),!d)throw new a("predominant-categories:invalid-parameters","'layer' must be one of these types: "+o.getLayerTypeLabels(r).join(", "));return c=i.isSome(p.signal)?{signal:p.signal}:null,[4,n.all([p.view.when(),d.load(c)])];case 1:if(y.sent(),f=s.verifyBasicFieldValidity(d,p.fields,"predominant-categories:invalid-parameters"))throw f;return[2,p]}}))}))}return function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,a,i;return t.__generator(this,(function(n){switch(n.label){case 0:return[4,l(e)];case 1:return r=n.sent(),a=r.layerAdapter,i=t.__rest(r,["layerAdapter"]),[2,a.predominantCategories(i)]}}))}))}}));