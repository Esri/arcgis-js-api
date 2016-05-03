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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/array","./engine/DisplayObject"],function(t,e,i){var n=t(i,{constructor:function(){this.children=[]},type:"vector-container",addChild:function(t){return this.addChildAt(t,this.children.length)},addChildAt:function(t,e){return this.contains(t)?t:(e=Math.min(this.get("numChildren"),e),this.children.splice(e,0,t),t.set({parent:this,view:this.view}),this.requestDraw(),t)},removeChild:function(t){if(!this.children)return t;var i=e.indexOf(this.children,t);return i>-1&&(t=this.children.splice(i,1)[0],t.set({parent:null,view:null}),this.requestDraw()),t},contains:function(t){return this.getChildIndex(t)>-1},getChildIndex:function(t){return e.indexOf(this.children,t)},destroy:function(){},requestVectorUpdate:function(){this.requestUpdate()},requestVectorDraw:function(){this.requestDraw()}});return n});