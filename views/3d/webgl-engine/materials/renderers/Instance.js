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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64"],(function(t,r,o,n){Object.defineProperty(r,"__esModule",{value:!0});var i=function(t,r,i,s,a,e){this.from=t,this.to=r,this.isVisible=i,this.hasHighlights=s,this.hasOccludees=a,this.transformation=e,null!=e&&(this.transformationNormal=n.mat4f64.clone(e),o.mat4.invert(this.transformationNormal,this.transformationNormal),o.mat4.transpose(this.transformationNormal,this.transformationNormal))};r.Instance=i,r.sortInstancesAccordingToRange=function(t){return t.sort((function(t,r){return t.from===r.from?t.to>r.to?1:t.to<r.to?-1:0:t.from>r.from?1:t.from<r.from?-1:0}))},r.addOrMerge=function(t,r){var o=function(t){return{first:t.from,count:t.to-t.from}};if(0!==t.length){var n,i,s=t[t.length-1];if(i=r,(n=s).first+n.count>=i.from){var a=r.from-s.first+r.to-r.from;s.count=a}else t.push(o(r))}else t.push(o(r))}}));