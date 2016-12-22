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

define(["./declare","../core/Accessoire","../core/Evented"],function(t,i,e){var s=t([i,e],{next:function(){var t=this.item||this.first;return t&&t.next?this.item=t.next:this.item=null,this.item},add:function(t){return t?(0===this.count?this.last=t:t.next=this.first,this.first=t,this.item=t,this.count++,this.emit("add",t),this):!1},remove:function(t){t||null==this.item||(t=this.item);for(var i=this.first,e=null;i!=t&&i.next;)e=this.item,i=this.next();return i==t&&(i.next?e?e.next=i.next:this.first=i.next:(e.next=null,this.last=e),this.item=this.first,this.emit("remove",t)),this},reset:function(){this.item=this.first},empty:function(t){this.reset();for(var i=this.item,e=i.next;null!=i;)i.next=null,t&&i.destroy&&"function"==typeof i.destroy&&i.destroy(),i=this.item=e,e=this.next();return this.first=null,this.last=null,this},first:null,last:null,count:0});return s});