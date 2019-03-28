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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-geometry"],function(o,t){return o(null,{scrollToCell:function(o,t){if(o&&o.parentGrid)return this._scrollToNode(o.domNode,t)},_scrollToNode:function(o,e){e=e||{};var r=t.position(this.getScrollableContainer()),l=t.position(o),n=!(l.x>r.x&&r.x+r.w>l.x+l.w),i=!(l.y>r.y&&r.y+r.h>l.y+l.h),a=e.anchorTop&&("number"==typeof e.anchorTop?e.anchorTop:30),c={x:Math.max(30,(r.w-l.w)/2),y:void 0!==a?a:Math.min(r.h-l.h-30,(r.h-l.h)/2)};if(c.dx=c.x-(l.x-r.x),c.dy=c.y-(l.y-r.y),!e.onlyIfOutOfView||n||i)return!1===e.scrollHorizontally||!n&&e.onlyIfOutOfView||(this.getScrollableContainer().scrollLeft-=c.dx),i||!e.onlyIfOutOfView?this._animateScrolling(this.getScrollableContainer().scrollTop-c.dy,e.immdediate):void 0},_animateScrolling:function(o,t){this.getScrollableContainer().scrollTop=o},scrollToPageAt:function(o,t){var e=this._grids[o],r=e.getFirstCell();return r?this.scrollToCell(r,{scrollHorizontally:!1,anchorTop:t&&t.anchorTop}):this._scrollToNode(e.domNode,{scrollHorizontally:!1,anchorTop:0})},scrollToLastPage:function(){return this.scrollToPageAt(this._grids.length-1)},getCurrentViewedPageIndex:function(){var o=this.getCurrentPageIndex();if(o>=0)return o;var t=this.getScrollableContainer().scrollHeight/this._grids.length;return Math.round(this.getScrollableContainer().scrollTop/t)},getGridInView:function(){return this.getGrids()[this.getCurrentViewedPageIndex()]},getScrollableContainer:function(){return this.mainContainer},isScrollShown:function(){return this.getScrollableContainer().clientHeight<this.getScrollableContainer().scrollHeight}})});