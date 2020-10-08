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

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64"],(function(t,r,o,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.addOrMerge=r.sortInstancesAccordingToRange=r.Instance=void 0;var s=function(t,r,s,i,a,e){this.from=t,this.to=r,this.isVisible=s,this.hasHighlights=i,this.hasOccludees=a,this.transformation=e,null!=e&&(this.transformationNormal=n.mat4f64.clone(e),o.mat4.invert(this.transformationNormal,this.transformationNormal),o.mat4.transpose(this.transformationNormal,this.transformationNormal))};r.Instance=s,r.sortInstancesAccordingToRange=function(t){return t.sort((function(t,r){return t.from===r.from?t.to>r.to?1:t.to<r.to?-1:0:t.from>r.from?1:t.from<r.from?-1:0}))},r.addOrMerge=function(t,r){var o=function(t){return{first:t.from,count:t.to-t.from}};if(0!==t.length){var n,s,i=t[t.length-1];if(s=r,(n=i).first+n.count>=s.from){var a=r.from-i.first+r.to-r.from;i.count=a}else t.push(o(r))}else t.push(o(r))}}));