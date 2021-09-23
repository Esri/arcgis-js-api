// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["../../declare","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dijit/layout/_LayoutWidget"],(function(e,o,t,r,i){function s(e){e.style.position="absolute",o.add(e,"GridCell_Measure");var t=e.scrollHeight;return o.remove(e,"GridCell_Measure"),t}var a=e("esri.dijit.geoenrichment.Grid",[i],{_placeholder:null,layout:function(){var e,i,d,h=this.getChildren(),l=[];for(e=0;e<this.rows.length;e++)l.push(0);o.add(this.domNode,"Grid_Measure");var n=[];for(e=0;e<h.length;e++){d=(i=h[e]).row;var c=s(i.domNode);n.push(c),c>l[d]&&(l[d]=c)}var u=r.getContentBox(this.domNode).h;o.remove(this.domNode,"Grid_Measure");var g,p,m,v,f=function(e,o,t){var r,i=0;for(r=0;r<e.length;r++)switch(o[r]){case a.AUTO:t-=e[r];break;case a.STRETCH:case a.STACK:i++}if(i>1)throw new Error("Multiple rows with flexible heights are not supported");var s=[0];for(r=0;r<e.length;r++){var d;switch(o[r]){case a.AUTO:d=e[r];break;case a.STRETCH:d=t;break;case a.STACK:d=Math.min(t,e[r])}s.push(s[r]+d)}return s}(l,this.rows,u);for(e=0;e<h.length;e++)d=(i=h[e]).row,g=i.domNode,p=f[d],m=f[d+1]-f[d],v=void 0,(v=g.style).top=p+"px",v.height=m+"px";this._placeholder||(this._placeholder=t.create("div",null,this.domNode)),this._placeholder.style.height=f[f.length-1]+"px"}});return a.AUTO="auto",a.STRETCH="stretch",a.STACK="stack",a}));