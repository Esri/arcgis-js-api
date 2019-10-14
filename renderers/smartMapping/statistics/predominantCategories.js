// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/assignHelper","../../../core/Error","../../../core/promiseUtils","./support/utils","../support/utils"],function(e,r,t,i,a,n,s,o,l){function p(e){return i(this,void 0,void 0,function(){var r,i,p,u;return t(this,function(t){switch(t.label){case 0:if(!(e&&e.layer&&e.view&&e.fields))throw new n("predominant-categories:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(r=a({},e),i=[0,2,1,3,4],p=l.createLayerAdapter(r.layer,i),r.layer=p,!p)throw new n("predominant-categories:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(i).join(", "));return[4,s.all([r.view.when(),p.load()])];case 1:if(t.sent(),u=o.verifyBasicFieldValidity(p,r.fields,"predominant-categories:invalid-parameters"))throw u;return[2,r]}})})}function u(e){return i(this,void 0,void 0,function(){var r,i;return t(this,function(t){switch(t.label){case 0:return[4,p(e)];case 1:return r=t.sent(),i=r.layer,[2,i.predominantCategories({fields:r.fields,view:r.view})]}})})}return u});