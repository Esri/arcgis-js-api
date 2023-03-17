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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator","./polyfill/tsSupport/assign","./polyfill/tsSupport/extends","../IdentityManager","../request","../arcgis/Portal"],(function(e,r,t,l,a,n,s,o,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.lookupUser=r.getPortal=void 0,r.getPortal=function(e,r){return null===e?r:new i.Portal(e.field("url"))},r.lookupUser=function(e,r,n){return t(this,void 0,void 0,(function(){var t,i,u,c,p,f,d;return l(this,(function(l){switch(l.label){case 0:if(!s.findCredential(e.portalUrl))return[2,null];if(e.getPortalUser()&&""===r&&(t=e.getPortalUser())&&!1===n){for(i={},u=0,c=["username","id","fullName","availableCredits","assignedCredits","firstName","lastName","preferredView","description","email","idpUsername","favGroupId","lastLogin","mfaEnabled","access","storageUsage","storageQuota","orgId","role","privileges"];u<c.length;u++)void 0!==t[p=c[u]]&&(i[p]=t[p]);return[2,i]}return""!==r?[3,2]:[4,o({url:e.portalUrl+"community/self",content:a({f:"json"},!1===n?{}:{returnUserLicenseTypeExtensions:!0}),callbackParamName:"callback"})];case 1:return(f=l.sent())&&f.username?[2,f]:[2,null];case 2:return[4,o({url:e.portalUrl+"community/users/"+r,content:{f:"json"},callbackParamName:"callback"})];case 3:return(d=l.sent()).error?[2,null]:[2,d]}}))}))}}));