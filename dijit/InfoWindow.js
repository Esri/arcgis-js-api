define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/_base/kernel","dojo/has","dojo/query","dojo/sniff","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_Widget","dijit/_Templated","dijit/_Container","../kernel","../domUtils","../InfoWindowBase","./_EventedWidget","dojo/text!./templates/InfoWindow.html"],function(t,i,e,o,s,h,n,r,d,a,l,p,_,u,c,f,g,w,m){var x=t([w,p,_,u,g],{declaredClass:"esri.dijit.InfoWindow",isContainer:!0,templateString:m,anchor:"upperright",fixedAnchor:null,coords:null,isShowing:!0,isContentShowing:!0,isTitleBarShowing:!0,width:250,height:150,title:"Info Window",setMap:function(t){this.inherited(arguments),a.place(this.domNode,t.root)},startup:function(){if(!this._started){if(this.inherited(arguments),this._ANCHORS=[x.ANCHOR_UPPERRIGHT,x.ANCHOR_LOWERRIGHT,x.ANCHOR_LOWERLEFT,x.ANCHOR_UPPERLEFT],h("ie")<7){var t=l.getComputedStyle(this._sprite).backgroundImage.replace(/url\(\"/i,"").replace(/\"\)/,""),i="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true', sizingMethod='crop', src='"+t+"')",e=a.create("div",null,o.body());l.set(e,{width:"1px",height:"1px",display:"none",backgroundImage:"none",filter:i});var n=setTimeout(function(){a.destroy(e),clearTimeout(n),n=e=null},100);s.query(".sprite",this.domNode).forEach(function(t){t.style.backgroundImage="none",t.style.filter=i})}this.resize(this.width,this.height),this.hide()}},destroy:function(){this._destroyed||(this.__unregisterMapListeners(),this.destroyDijits(this._title),this.destroyDijits(this._content),this._title.innerHTML=this._content.innerHTML="",this.inherited(arguments))},resize:function(t,i){if(t&&i){var e=l.set;e(this._topleft,{height:i+"px",marginLeft:t+"px"}),e(this._topright,{width:t+"px",height:i+"px"}),e(this._user,"width",t-8+"px"),e(this._hide,"marginLeft",t-22+"px"),e(this._title,"width",t-25+"px"),e(this._content,"height",i-37+"px"),e(this._bottomleft,{marginLeft:t+"px",marginTop:i+"px"}),e(this._bottomright,{width:t-5+"px",marginTop:i+"px"}),this.width=t,this.height=i,this.coords&&this._adjustPosition(this.coords,this.anchor),this.onResize(t,i)}},_adjustPosition:function(t,i){var e=l.set;e(this._infowindow,{left:Math.round(t.x)+"px",top:Math.round(t.y)+"px"}),i===x.ANCHOR_UPPERLEFT?e(this._window,{left:null,right:this.width+18+"px",top:null,bottom:this.height+50+"px"}):i===x.ANCHOR_UPPERRIGHT?e(this._window,{left:"6px",right:null,top:null,bottom:this.height+50+"px"}):i===x.ANCHOR_LOWERRIGHT?e(this._window,{left:"6px",right:null,top:"43px",bottom:null}):i===x.ANCHOR_LOWERLEFT&&e(this._window,{left:null,right:this.width+18+"px",top:"43px",bottom:null})},_getAnchor:function(t){var i=this.map;return i&&t?(t.y<i.height/2?"lower":"upper")+(t.x<i.width/2?"right":"left"):"upperright"},show:function(t,i){if(t){t.spatialReference?(this.mapCoords=t,t=this.coords=this.map.toScreen(t,!0)):(this.mapCoords=null,this.coords=t);var o=this.map._getFrameWidth();if(-1!==o&&(t.x=t.x%o,t.x<0&&(t.x+=o),this.map.width>o))for(var s=(this.map.width-o)/2;t.x<s;)t.x+=o;i&&-1!==e.indexOf(this._ANCHORS,i)||(i=this._getAnchor(t)),d.remove(this._pointer,this.anchor),i=this.anchor=this.fixedAnchor||i,this._adjustPosition(t,i),d.add(this._pointer,i),f.show(this.domNode),this.isShowing=!0,arguments[2]||this.onShow()}},hide:function(){f.hide(this.domNode),this.isShowing=!1,arguments[1]||this.onHide()},showTitleBar:function(){f.show(this._titlebar),f.show(this._border),this.isTitleBarShowing=!0},hideTitleBar:function(){f.hide(this._titlebar),f.hide(this._border),this.isTitleBarShowing=!1},showContent:function(){f.show(this._content),f.show(this._border),this.isContentShowing=!0},hideContent:function(){f.hide(this._content),f.hide(this._border),this.isContentShowing=!1},move:function(t,i){i?t=this.coords.offset(t.x,t.y):(this.coords=t,this.mapCoords&&(this.mapCoords=this.map.toMap(t))),l.set(this._infowindow,{left:Math.round(t.x)+"px",top:Math.round(t.y)+"px"})},setFixedAnchor:function(t){t&&-1===e.indexOf(this._ANCHORS,t)||(this.fixedAnchor=t,this.isShowing&&this.show(this.mapCoords||this.coords,t),this.onAnchorChange(t))},setTitle:function(t){return this.destroyDijits(this._title),this.__setValue("_title",t),this},setContent:function(t){return this.destroyDijits(this._content),this.__setValue("_content",t),this},onShow:function(){this.__registerMapListeners(),this.startupDijits(this._title),this.startupDijits(this._content)},onHide:function(){this.__unregisterMapListeners()},onResize:function(){},onAnchorChange:function(){}});return i.mixin(x,{ANCHOR_UPPERRIGHT:"upperright",ANCHOR_LOWERRIGHT:"lowerright",ANCHOR_LOWERLEFT:"lowerleft",ANCHOR_UPPERLEFT:"upperleft"}),h("extend-esri")&&i.setObject("dijit.InfoWindow",x,c),x});