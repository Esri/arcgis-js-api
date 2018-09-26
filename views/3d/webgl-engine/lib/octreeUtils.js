// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../lib/gl-matrix","./Octree"],function(e,n,t,r){function i(e){var n={numNodes:0,numObjects:0,numTerminals:0,numResidents:0,numOutsiders:0,numInnerNodes:0,numTerminalNodes:0,maximumDepth:0,maxNumTerminals:0,maxNumResidents:0,maxNumObjects:0};return e.forEachNode(function(t,r,i){null===t.residents?n.numInnerNodes++:n.numTerminalNodes++,n.numTerminals+=t.terminals.length,n.maxNumTerminals=Math.max(t.terminals.length,n.maxNumTerminals);var s=t.terminals.length;null!==t.residents&&(n.numResidents+=t.residents.length,n.maxNumResidents=Math.max(t.residents.length,n.maxNumResidents),s+=t.residents.length),n.maxNumObjects=Math.max(s,n.maxNumObjects);var a=Math.round(Math.log(e.size/i)*Math.LOG2E);return n.maximumDepth=Math.max(n.maximumDepth,a),!0}),n.numObjects=n.numOutsiders+n.numTerminals+n.numResidents,n.numNodes=n.numInnerNodes+n.numTerminalNodes,n}function s(e,n){void 0===n&&(n=!1);var i,a=e instanceof r?e.root:e;return i={},e instanceof r&&n&&(i.center=t.vec3d.create(e.center),i.size=e.size),a.terminals.length>0&&(i.terminals=a.terminals.map(function(e){return e.id})),null!==a.residents&&a.residents.length>0&&(i.residents=a.residents.map(function(e){return e.id})),null===a.residents&&a.children.forEach(function(e,n){e&&(i["child"+n]=s(e))}),i}function a(e,n){return e.forEachNode(function(r,i,s){var a=u(i,-s/2,t.vec3d.create()),o=u(i,s/2,t.vec3d.create());if(r.terminals.forEach(function(e){return m(n.getCenter(e),n.getRadius(e),a,o,!0)}),null!==r.residents){if(r.residents.length>e.maximumObjectsPerNode)throw new Error("[Octree Validation] Number of objects "+r.residents.length+" exceeds maximum allowed ("+e.maximumObjectsPerNode+")");r.residents.forEach(function(e){return m(n.getCenter(e),n.getRadius(e),a,o,!1)})}var d=!1;if(r.children.forEach(function(e){if(e&&(d=!0,null!==r.residents))throw new Error("[Octree Validation] Node has residents and children")}),!d&&(null===r.residents||0===r.residents.length)&&0===r.terminals.length)throw new Error("[Octree Validation] dangling empty node");return!0}),!0}function m(e,n,t,r,i){for(var s=0;s<3;s++)if(e[s]<t[s]||e[s]>r[s])throw new Error("[Octree Validation] Object is not within node bounds");var a=.25*(r[0]-t[0]);if(i&&n<a)throw new Error("[Octree Validation] Object is too small to be a terminal");if(!i&&n>a)throw new Error("[Octree Validation] Object is too large to be a resident")}function u(e,n,t){return t=t||e,t[0]=e[0]+n,t[1]=e[1]+n,t[2]=e[2]+n,t}Object.defineProperty(n,"__esModule",{value:!0}),n.stats=i,n.debugDump=s,n.assert=a});