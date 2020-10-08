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

define(["require","exports","../../../core/libs/gl-matrix-2/vec3f64","./projectionUtils"],(function(n,l,e,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.toBoundingRect=l.projectToBoundingBox=void 0,l.projectToBoundingBox=function(n,l,e){if(null==n)return!1;var m=!0;return i[0]=null!=n.xmin?n.xmin:0,i[1]=null!=n.ymin?n.ymin:0,i[2]=null!=n.zmin?n.zmin:0,m=m&&u.bufferToBuffer(i,n.spatialReference,0,l,e,0,1),i[0]=null!=n.xmax?n.xmax:0,i[1]=null!=n.ymax?n.ymax:0,i[2]=null!=n.zmax?n.zmax:0,m=m&&u.bufferToBuffer(i,n.spatialReference,0,l,e,3,1),null==n.xmin&&(l[0]=-1/0),null==n.ymin&&(l[1]=-1/0),null==n.zmin&&(l[2]=-1/0),null==n.xmax&&(l[3]=1/0),null==n.ymax&&(l[4]=1/0),null==n.zmax&&(l[5]=1/0),m},l.toBoundingRect=function(n,l,e){if(null==n)return!1;var m=!0;return i[0]=null!=n.xmin?n.xmin:0,i[1]=null!=n.ymin?n.ymin:0,i[2]=null!=n.zmin?n.zmin:0,m=m&&u.bufferToBuffer(i,n.spatialReference,0,i,e,0,1),l[0]=i[0],l[1]=i[1],i[0]=null!=n.xmax?n.xmax:0,i[1]=null!=n.ymax?n.ymax:0,i[2]=null!=n.zmax?n.zmax:0,m=m&&u.bufferToBuffer(i,n.spatialReference,0,i,e,0,1),l[2]=i[0],l[3]=i[1],null==n.xmin&&(l[0]=-1/0),null==n.ymin&&(l[1]=-1/0),null==n.xmax&&(l[2]=1/0),null==n.ymax&&(l[3]=1/0),m};var i=e.vec3f64.create()}));