// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dijit/layout/_LayoutWidget"],function(e,t,o,r,i){function s(e){e.style.position="absolute",t.add(e,"GridCell_Measure");var o=e.scrollHeight;return t.remove(e,"GridCell_Measure"),o}function a(e,t,o){var r,i=0;for(r=0;r<e.length;r++)switch(t[r]){case h.AUTO:o-=e[r];break;case h.STRETCH:case h.STACK:i++}if(i>1)throw new Error("Multiple rows with flexible heights are not supported");var s=[0];for(r=0;r<e.length;r++){var a;switch(t[r]){case h.AUTO:a=e[r];break;case h.STRETCH:a=o;break;case h.STACK:a=Math.min(o,e[r])}s.push(s[r]+a)}return s}function d(e,t,o){var r=e.style;r.top=t+"px",r.height=o+"px"}var h=e("esri.dijit.geoenrichment.Grid",[i],{_placeholder:null,layout:function(){var e,i,h,l=this.getChildren(),n=[];for(e=0;e<this.rows.length;e++)n.push(0);t.add(this.domNode,"Grid_Measure");var c=[];for(e=0;e<l.length;e++){i=l[e],h=i.row;var u=s(i.domNode);c.push(u),u>n[h]&&(n[h]=u)}var g=o.getContentBox(this.domNode).h;t.remove(this.domNode,"Grid_Measure");var p=a(n,this.rows,g);for(e=0;e<l.length;e++)i=l[e],h=i.row,d(i.domNode,p[h],p[h+1]-p[h]);this._placeholder||(this._placeholder=r.create("div",null,this.domNode)),this._placeholder.style.height=p[p.length-1]+"px"}});return h.AUTO="auto",h.STRETCH="stretch",h.STACK="stack",h});