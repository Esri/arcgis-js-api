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

define(["require","exports","tslib","../../core/Error","./classBreaks","./dotDensity","./heatmap","./predominance","./relationship","./simple","./uniqueValues"],(function(e,r,t,n,a,l,i,s,p,d,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=void 0,r.getTemplates=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,u,y,m;return t.__generator(this,(function(t){return r=function(e){var r=e.layer,t=e.renderer||r.renderer;if(!t)throw new n("getTemplates:invalid-parameters","'renderer' or 'layer.renderer' must be provided");return{layer:r,renderer:t}}(e),u=r.renderer,y=r.layer,"simple"===u.type?[2,d.getTemplates({renderer:u,layer:y})]:"class-breaks"===u.type?[2,a.getTemplates({renderer:u,layer:y})]:"dot-density"===u.type?[2,l.getTemplates({renderer:u,layer:y})]:"heatmap"===u.type?[2,i.getTemplates({renderer:u,layer:y})]:"unique-value"===u.type?"predominance"===(m=u.authoringInfo&&u.authoringInfo.type)?[2,s.getTemplates({renderer:u,layer:y})]:"relationship"===m?[2,p.getTemplates({renderer:u,layer:y})]:[2,o.getTemplates({renderer:u,layer:y})]:[2,null]}))}))}}));