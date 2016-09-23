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

define(["dojo/on","../core/Accessor","../core/Scheduler","../core/watchUtils"],function(e,i,t,n){var s=[0,0],r=function(e){var i=e.ownerDocument||window.document,t=i.parentWindow||i.defaultView,n=e.getBoundingClientRect();return s[0]=n.left+t.pageXOffset,s[1]=n.top+t.pageYOffset,s},h=16,o=750,a=512,u=2,d=i.createSubclass({declaredClass:"esri.views.DOMContainer",properties:{container:{},height:{},position:{},resizing:{},size:{dependsOn:["width","height"],readOnly:!0},suspended:{},width:{}},constructor:function(){Object.defineProperty(this,"_measureInfo",{enumerable:!1,writable:!1,value:{task:null,freq:h,time:o}})},initialize:function(){var i=this._measureInfo,s=null;n.init(this,"container",function(n,r,d,l){s&&(s.remove(),s=null,i.freq=h,i.time=o),i.task&&(i.task.remove(),i.task=null),n?(s=e(window,"resize",function(){i.freq=h,i.time=o}.bind(l)),i.task=t.addFrameTask({prepare:function(e){var i=this._measureInfo;if(i.time+=e.deltaTime,!(i.time<i.freq)){i.time=0;var t=this._measure();t?(i.freq=h,this.resizing=!0):(i.freq=Math.min(o,i.freq*u),i.freq>=a&&(this.resizing=!1))}}.bind(l)})):this.resizing=!1,this._measure();var c=this.root,f=this.surface,p=this.width,g=this.height;c&&f&&p&&g&&(c.style.width=f.style.width=p+"px",c.style.height=f.style.height=g+"px")})},destroy:function(){this.container=null},_measureInfo:null,size:null,_sizeGetter:function(){return[this.width,this.height]},position:null,height:0,resizing:!1,suspended:!0,width:0,pageToContainer:function(e,i,t){var n=this.position;return e-=n[0],i-=n[1],t?(t[0]=e,t[1]=i):t=[e,i],t},containerToPage:function(e,i,t){var n=this.position;return e+=n[0],i+=n[1],t?(t[0]=e,t[1]=i):t=[e,i],t},_measure:function(){var e=this.container,i=e?e.clientWidth:0,t=e?e.clientHeight:0;if(0===i||0===t||"hidden"===window.getComputedStyle(e).visibility)return this.suspended=!0,!1;var n=this.root,s=this.surface,h=this.width,o=this.height,a=this.position;if(i===h&&t===o)return this.suspended=!1,!1;n&&s&&(n.style.width=s.style.width=i+"px",n.style.height=s.style.height=t+"px"),this.width=i,this.height=t,this.suspended=!1;var u=r(e);return a&&u[0]===a[0]&&u[1]===a[1]||(this.position=u.slice()),this.emit("resize",{oldWidth:h,oldHeight:o,width:i,height:t}),!0}});return d});