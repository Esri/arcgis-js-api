// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Octree","./gl-matrix"],function(e,n,t,r){function s(e){var n={numNodes:0,numObjects:0,numTerminals:0,numResidents:0,numOutsiders:0,numInnerNodes:0,numTerminalNodes:0,maximumDepth:0,maxNumTerminals:0,maxNumResidents:0,maxNumObjects:0};return n.numOutsiders=e.outsiders.length,e.forEachNode(function(t,r,s){null===t.residents?n.numInnerNodes++:n.numTerminalNodes++,n.numTerminals+=t.terminals.length,n.maxNumTerminals=Math.max(t.terminals.length,n.maxNumTerminals);var i=t.terminals.length;null!==t.residents&&(n.numResidents+=t.residents.length,n.maxNumResidents=Math.max(t.residents.length,n.maxNumResidents),i+=t.residents.length),n.maxNumObjects=Math.max(i,n.maxNumObjects);var a=Math.round(Math.log(e.size/s)*Math.LOG2E);return n.maximumDepth=Math.max(n.maximumDepth,a),!0}),n.numObjects=n.numOutsiders+n.numTerminals+n.numResidents,n.numNodes=n.numInnerNodes+n.numTerminalNodes,n}function i(e,n){void 0===n&&(n=!1);var r,s=e instanceof t?e.root:e;return r={},e instanceof t&&(n&&(r.center=o.create(e.center),r.size=e.size),0!==e.outsiders.length&&(r.outsiders=e.outsiders.map(function(e){return e.getId()}))),s.terminals.length>0&&(r.terminals=s.terminals.map(function(e){return e.getId()})),null!==s.residents&&s.residents.length>0&&(r.residents=s.residents.map(function(e){return e.getId()})),null===s.residents&&s.children.forEach(function(e,n){e&&(r["child"+n]=i(e))}),r}function a(e){return e.forEachNode(function(n,t,r){var s=u(t,-r/2,o.create()),i=u(t,r/2,o.create());if(n.terminals.forEach(function(e){return m(e,s,i,!0)}),null!==n.residents){if(n.residents.length>e.maximumObjectsPerNode)throw new Error("[Octree Validation] Number of objects "+n.residents.length+" exceeds maximum allowed ("+e.maximumObjectsPerNode+")");n.residents.forEach(function(e){return m(e,s,i,!1)})}var a=!1;if(n.children.forEach(function(e){if(e&&(a=!0,null!==n.residents))throw new Error("[Octree Validation] Node has residents and children")}),!a&&(null===n.residents||0===n.residents.length)&&0===n.terminals.length)throw new Error("[Octree Validation] dangling empty node");return!0}),!0}function m(e,n,t,r){for(var s=e.getCenter(),i=0;3>i;i++)if(s[i]<n[i]||s[i]>t[i])throw new Error("[Octree Validation] Object is not within node bounds");var a=.25*(t[0]-n[0]),m=e.getBSRadius();if(r&&a>m)throw new Error("[Octree Validation] Object is too small to be a terminal");if(!r&&m>a)throw new Error("[Octree Validation] Object is too large to be a resident")}function u(e,n,t){return t=t||e,t[0]=e[0]+n,t[1]=e[1]+n,t[2]=e[2]+n,t}var o=r.vec3d;n.stats=s,n.debugDump=i,n.assert=a});