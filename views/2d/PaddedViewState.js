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

define(["./viewpointUtils","./ViewState","./math/vec2","./math/mat2d","./math/common","../../core/Accessoire"],function(t,e,n,i,r,a){var o=a.createSubclass({classMetadata:{properties:{left:{},top:{},right:{},bottom:{}}},left:0,top:0,right:0,bottom:0});o.copy=function(t,e){t.left=e.left,t.top=e.top,t.right=e.right,t.bottom=e.bottom};var d=e.createSubclass({declaredClass:"esri.views.2d.PaddedViewState",classMetadata:{properties:{padding:{type:o,copy:o.copy},transform:{dependsOn:["padding"]},paddedScreenCenter:{dependsOn:["size","padding"],readOnly:!0,copy:n.copy},clipRect:{dependsOn:["worldScreenWidth","rotation","paddedScreenCenter","screenCenter"],readOnly:!0,copy:function(t,e){t.top=e.top,t.left=e.left,t.right=e.right,t.bottom=e.bottom}}}},getDefaults:function(){return{content:new e,padding:new o,size:n.fromValues(0,0)}},_clipRectGetter:function(){var t=n.create(),e=i.create();return function(a){var o=this.worldScreenWidth;if(!o)return null;var d=r.toRadian(this.rotation),s=Math.abs(Math.cos(d)),c=Math.abs(Math.sin(d)),p=this.width*s+this.height*c;return o>p?null:(n.copy(t,this.screenCenter),i.fromTranslation(e,t),i.rotate(e,e,d),n.negate(t,t),i.translate(e,e,t),n.transformMat2d(t,this.paddedScreenCenter,e),a||(a={}),a.top=-Math.round(p),a.left=Math.round(t[0]-.5*o),a.right=Math.round(t[0]+.5*o),a.bottom=+Math.round(p),a)}}(),_padding:null,_paddingSetter:function(t){return this._padding=t||new o,this._updateContent(),t},_size:null,_sizeSetter:function(t){return this._size=t,this._updateContent(),t},_paddedScreenCenterGetter:function(t){var e=this.content.size,i=this.padding;return t||(t=n.create()),n.scale(t,e,.5),t[0]=t[0]+i.left,t[1]=t[1]+i.top,t},viewpoint:null,_viewpointSetter:function(){var e;return function(n,i){return e||(e=n.clone()),this.content.viewpoint=n,t.addPadding(e,n,this._size,this._padding),i?t.addPadding(i,n,this._size,this._padding):t.addPadding(e.clone(),n,this._size,this._padding)}}(),_updateContent:function(){var t=n.create();return function(){var e=this._size,i=this._padding;if(e&&i){var r=this.content;n.set(t,i.left+i.right,i.top+i.bottom),n.subtract(t,e,t),r.size=t;var a=r.viewpoint;a&&(this.viewpoint=a)}}}()});return d});