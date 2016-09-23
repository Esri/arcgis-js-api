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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/lang","dojox/gfx"],function(e,r,t){var n=e(null,{constructor:function(e){r.mixin(this,e)},render:function(e){var r=e.type;switch(r){case"vector-container":this.renderContainer(e);break;case"vector-group":this.renderGroup(e);break;case"vector":this.renderVector(e)}},renderContainer:function(e){var r,n,c=e.parent.surface,a=e.surface,u=e._addBucket,o=e._removeBucket;if(a||(e.surface=a=t.createSurface(c,this.view.width,this.view.height)),u&&u.length){for(r=0,n=u.length;n>r;r++)this.render(u[r]);u.length=0}if(o&&o.length){for(r=0,n=o.length;n>r;r++)o[r].surface&&(o[r].surface.destroy(),o[r].surface=null),this._transforms.remove(o[r]._uid);o.length=0}},renderGroup:function(e){var r,t,n=e.parent.surface,c=e.surface,a=e._addBucket,u=e._removeBucket;if(c||(n.createGroup(),e.surface=c),a&&a.length){for(r=0,t=a.length;t>r;r++)this.render(a[r]);a.length=0}if(u&&u.length){for(r=0,t=u.length;t>r;r++)u[r].surface&&(u[r].surface.destroy(),u[r].surface=null),this._transforms.remove(u[r]._uid);u.length=0}},renderVector:function(e){var r=e.surface,t=this.isSurfaceValid(e);t||(r&&(r.destroy(),e.surface=r=null),r||this.createVectorSurface(e)),e._requestDrawFlag&&(e._requestDrawFlag=!1,this.udpateVectorSurface(e))},isSurfaceValid:function(e){return e.surface?!0:!1},createVectorSurface:function(e){},udpateVectorSurface:function(e){}});return n});