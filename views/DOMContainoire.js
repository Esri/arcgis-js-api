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

define(["dojo/on","../core/Accessoire","../core/Scheduler","../core/watchUtils"],function(e,t,i,n){var s=[0,0],r=function(e){var t=e.ownerDocument||window.document,i=t.parentWindow||t.defaultView,n=e.getBoundingClientRect();return s[0]=n.left+i.pageXOffset,s[1]=n.top+i.pageYOffset,s},h=16,o=750,a=512,d=2,u=t.createSubclass({declaredClass:"esri.views.DOMContainer",classMetadata:{properties:{container:{},height:{},position:{},resizing:{},size:{dependsOn:["width","height"],readOnly:!0},suspended:{},width:{}}},constructor:function(){Object.defineProperty(this,"_measureInfo",{enumerable:!1,writable:!1,value:{task:null,freq:h,time:o}})},initialize:function(){var t=this._measureInfo,s=null;n.init(this,"container",function(n,r,u,l){s&&(s.remove(),s=null,t.freq=h,t.time=o),t.task&&(t.task.remove(),t.task=null),n?(s=e(window,"resize",function(){t.freq=h,t.time=o}.bind(l)),t.task=i.addFrameTask({prepare:function(e){var t=this._measureInfo;if(t.time+=e.deltaTime,!(t.time<t.freq)){t.time=0;var i=this._measure();i?(t.freq=h,this.resizing=!0):(t.freq=Math.min(o,t.freq*d),t.freq>=a&&(this.resizing=!1))}}.bind(l)})):this.resizing=!1,this._measure();var c=this.root,f=this.surface,p=this.width,g=this.height;c&&f&&p&&g&&(c.style.width=f.style.width=p+"px",c.style.height=f.style.height=g+"px")})},destroy:function(){this.container=null},_measureInfo:null,size:null,_sizeGetter:function(e,t){return t||(t=[0,0]),t[0]=this.width,t[1]=this.height,t},position:null,height:0,resizing:!1,suspended:!0,width:0,pageToContainer:function(e,t,i){var n=this.position;return e-=n[0],t-=n[1],i?(i[0]=e,i[1]=t):i=[e,t],i},containerToPage:function(e,t,i){var n=this.position;return e+=n[0],t+=n[1],i?(i[0]=e,i[1]=t):i=[e,t],i},_measure:function(){var e=this.container,t=e?e.clientWidth:0,i=e?e.clientHeight:0;if(0===t||0===i||"hidden"===window.getComputedStyle(e).visibility)return this.suspended=!0,!1;var n=this.root,s=this.surface,h=this.width,o=this.height,a=this.position;if(t===h&&i===o)return this.suspended=!1,!1;n&&s&&(n.style.width=s.style.width=t+"px",n.style.height=s.style.height=i+"px"),this.width=t,this.height=i,this.suspended=!1;var d=r(e);return a&&d[0]===a[0]&&d[1]===a[1]||(this.position=d.slice()),this.emit("resize",{oldWidth:h,oldHeight:o,width:t,height:i}),!0}});return u});