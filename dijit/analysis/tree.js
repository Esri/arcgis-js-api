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

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/Deferred","dojo/_base/lang","dojo/query","dojo/on","dojo/has","dojo/aspect","dgrid/util/has-css3","dgrid/Grid","dojo/has!touch?dgrid/util/touch","put-selector/put","../../kernel"],function(e,n,d,r,t,i,o,a,l,s,c,u,h){function p(e,n,d,r){var t,i=this.grid.isRTL?"right":"left",o=".dgrid-expando-icon";return n&&(o+=".ui-icon.ui-icon-triangle-1-"+(d?"se":"e")),t=u("div"+o+"[style=margin-"+i+": "+e*(this.indentWidth||9)+"px; float: "+i+"]"),t.innerHTML="&nbsp;",t}function g(e){var n=this,d=this.style.height;d&&(this.style.display="0px"==d?"none":"block"),e&&(u(this,".dgrid-tree-resetting"),setTimeout(function(){u(n,"!dgrid-tree-resetting")})),this.style.height=""}function f(e){var r,o,h=e.renderCell||s.defaultRenderCell;return e||(e={}),e.shouldExpand=e.shouldExpand||function(e,n,d){return d},a.after(e,"init",function(){var s=e.grid,h=".dgrid-content .dgrid-column-"+e.id,f=[];if(s.cleanEmptyObservers=!1,!s.store)throw new Error("dgrid tree column plugin requires a store to operate.");e.renderExpando||(e.renderExpando=p),f.push(s.on(e.expandOn||".dgrid-expando-icon:click,"+h+":dblclick,"+h+":keydown",function(e){var n=s.row(e);s.store.mayHaveChildren&&!s.store.mayHaveChildren(n.data)||"keydown"==e.type&&32!=e.keyCode||"dblclick"==e.type&&o&&o.count>1&&n.id==o.id&&e.target.className.indexOf("dgrid-expando-icon")>-1||s.expand(n),e.target.className.indexOf("dgrid-expando-icon")>-1&&(o&&o.id==s.row(e).id?o.count++:o={id:s.row(e).id,count:1})})),l("touch")&&f.push(s.on(c.selector(h,c.dbltap),function(){s.expand(this)})),s._expanded||(s._expanded={}),f.push(a.after(s,"insertRow",function(n){var d=this.row(n);return e.shouldExpand(d,r,this._expanded[d.id])&&this.expand(n,!0,!0),n})),f.push(a.before(s,"removeRow",function(e,n){var d=e.connected;d&&(t(">.dgrid-row",d).forEach(function(e){s.removeRow(e,!0)}),n||u(d,"!"))})),e.collapseOnRefresh&&f.push(a.after(s,"cleanup",function(){this._expanded={}})),s._calcRowHeight=function(e){var n=e.connected;return e.offsetHeight+(n?n.offsetHeight:0)},s.expand=function(n,r,o){var a=n.element?n:s.row(n),c=l("transitionend");if(n=a.element,(n=n.className.indexOf("dgrid-expando-icon")>-1?n:t(".dgrid-expando-icon",n)[0])&&n.mayHaveChildren&&(o||r!==!!this._expanded[a.id])){var h=void 0===r?!this._expanded[a.id]:r;u(n,".ui-icon-triangle-1-"+(h?"se":"e")+"!ui-icon-triangle-1-"+(h?"e":"se"));var p,f,x,v=n.preloadNode,y=a.element,m={originalQuery:this.query};if(!v){p=y.connected=u("div.dgrid-tree-container"),v=n.preloadNode=u(y,"+",p,"div.dgrid-preload");var w=function(e){return s.store.getChildren(a.data,e)};e.allowDuplicates&&(m.parentId=a.id),"level"in n&&(w.level=n.level),d.when(s.renderQuery?s._trackError(function(){return s.renderQuery(w,v,m)}):s.renderArray(w(m),v,"level"in w?{queryLevel:w.level}:{}),function(){if(s._expanded[a.id]&&c){var e=p.scrollHeight;p.style.height=e?e+"px":"auto"}}),c?i(p,c,g):g.call(p)}p=y.connected,p.hidden=!h,f=p.style,!c||o?(f.display=h?"block":"none",f.height=""):(h?(f.display="block",x=p.scrollHeight,f.height="0px"):(u(p,".dgrid-tree-resetting"),f.height=p.scrollHeight+"px"),setTimeout(function(){u(p,"!dgrid-tree-resetting"),f.height=h?x?x+"px":"auto":"0px"})),h?this._expanded[a.id]=!0:delete this._expanded[a.id]}},a.after(e,"destroy",function(){n.forEach(f,function(e){e.remove()}),delete s.expand,delete s._calcRowHeight})}),e.renderCell=function(n,d,t,i){var o,a=e.grid,l=Number(i&&i.queryLevel)+1,s=!a.store.mayHaveChildren||a.store.mayHaveChildren(n),c=i.parentId;l=r=isNaN(l)?0:l,o=e.renderExpando(l,s,a._expanded[(c?c+"-":"")+a.store.getIdentity(n)],n),o.level=l,o.mayHaveChildren=s,i.level=l,h.call(e,n,d,t,i),t.insertBefore(o,t.firstChild)},e}return f.defaultRenderExpando=p,o("extend-esri")&&r.setObject("dijit.analysis.tree",f,h),f});