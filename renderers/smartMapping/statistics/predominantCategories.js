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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/assignHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","./support/utils","../support/utils"],(function(e,r,t,i,a,n,s,o,l,p,u){function c(e){return i(this,void 0,void 0,(function(){var r,i,c,d,f,y,m;return t(this,(function(t){switch(t.label){case 0:if(!(e&&e.layer&&e.view&&e.fields))throw new s("predominant-categories:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(r=[0,2,1,3,4],i=e.layer,c=n(e,["layer"]),d=u.createLayerAdapter(i,r),f=a({layerAdapter:d},c),!d)throw new s("predominant-categories:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(r).join(", "));return y=o.isSome(f.signal)?{signal:f.signal}:null,[4,l.all([f.view.when(),d.load(y)])];case 1:if(t.sent(),m=p.verifyBasicFieldValidity(d,f.fields,"predominant-categories:invalid-parameters"))throw m;return[2,f]}}))}))}return function(e){return i(this,void 0,void 0,(function(){var r,i,a;return t(this,(function(t){switch(t.label){case 0:return[4,c(e)];case 1:return r=t.sent(),i=r.layerAdapter,a=n(r,["layerAdapter"]),[2,i.predominantCategories(a)]}}))}))}}));