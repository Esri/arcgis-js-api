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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../geometry/support/scaleUtils","./ArcGISMapService","./ScaleRangeLayer","../support/ExportImageParameters"],function(e,r,t,o,a,i,p,n,s,d){return function(e){function r(){var r=e.call(this)||this;return r.dpi=96,r.gdbVersion=null,r.imageFormat="png24",r.imageMaxHeight=2048,r.imageMaxWidth=2048,r.imageTransparency=!0,r.loaded=!1,r}return o(r,e),r.prototype.readImageFormat=function(e,r){var t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"},r.prototype.createExportImageParameters=function(e,r,o,a){e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var i=new d({layer:this,scale:p.getScale({extent:e,width:r})}),n=i.toJSON();i.layer=null,i.destroy();var s=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},m=e&&e.spatialReference,c=m.wkid||JSON.stringify(m.toJSON());return a&&null!=a.pixelRatio&&(n.dpi*=a.pixelRatio),t({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:r+","+o},n,s)},a([i.property()],r.prototype,"dpi",void 0),a([i.property()],r.prototype,"gdbVersion",void 0),a([i.property()],r.prototype,"imageFormat",void 0),a([i.reader("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),a([i.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),a([i.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),a([i.property()],r.prototype,"imageTransparency",void 0),a([i.property()],r.prototype,"loaded",void 0),r=a([i.subclass("esri.layers.mixins.ArcGISDynamicMapService")],r)}(i.declared(n,s))});