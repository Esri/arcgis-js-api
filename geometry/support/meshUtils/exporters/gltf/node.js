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

define(["require","exports","../../../../../core/libs/gl-matrix-2/quat","../../../../../core/libs/gl-matrix-2/quatf64","../../../../../core/libs/gl-matrix-2/vec3f64","../../../../../core/libs/gl-matrix-2/factories/vec3f64"],(function(e,t,o,r,i,n){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){this.name="",this.mesh=null,this.translation=i.vec3f64.create(),this.rotation=r.quatf64.create(),this.scale=i.vec3f64.clone(n.ONES),this.nodes=[]}return e.prototype.addNode=function(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)},e.prototype.forEachNode=function(e){this.nodes.forEach(e)},Object.defineProperty(e.prototype,"rotationAngles",{set:function(e){o.quat.fromEuler(this.rotation,e[0],e[1],e[2])},enumerable:!0,configurable:!0}),e}();t.Node=a}));