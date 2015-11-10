define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","dojox/gfx/_base","../kernel","../lang","./FillSymbol","./SimpleLineSymbol","require"],function(i,o,e,t,l,s,r,a,n,S){var d={STYLE_SOLID:"solid",STYLE_NULL:"none",STYLE_HORIZONTAL:"horizontal",STYLE_VERTICAL:"vertical",STYLE_FORWARD_DIAGONAL:"forwarddiagonal",STYLE_BACKWARD_DIAGONAL:"backwarddiagonal",STYLE_CROSS:"cross",STYLE_DIAGONAL_CROSS:"diagonalcross",STYLE_FORWARDDIAGONAL:"forwarddiagonal",STYLE_BACKWARDDIAGONAL:"backwarddiagonal",STYLE_DIAGONALCROSS:"diagonalcross"},L={style:d.STYLE_SOLID,color:[0,0,0,.25]},h=i(a,{declaredClass:"esri.symbol.SimpleFillSymbol",type:"simplefillsymbol",_styles:{solid:"esriSFSSolid",none:"esriSFSNull",horizontal:"esriSFSHorizontal",vertical:"esriSFSVertical",forwarddiagonal:"esriSFSForwardDiagonal",backwarddiagonal:"esriSFSBackwardDiagonal",cross:"esriSFSCross",diagonalcross:"esriSFSDiagonalCross"},constructor:function(i,t,l){i?o.isString(i)?(this.style=i,void 0!==t&&(this.outline=t),void 0!==l&&(this.color=l)):this.style=r.valueOf(this._styles,i.style):(o.mixin(this,L),this.outline=new n(this.outline),this.color=new e(this.color))},setStyle:function(i){return this.style=i,this},getStroke:function(){return this.outline&&this.outline.getStroke()},getFill:function(){var i=this.style;return i===d.STYLE_NULL?null:i===d.STYLE_SOLID?this.color:o.mixin({},l.defaultPattern,{src:S.toUrl("../images/symbol/sfs/"+i+".png"),width:10,height:10})},getShapeDescriptors:function(){return{defaultShape:{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 E"},fill:this.getFill(),stroke:this.getStroke()}},toJson:function(){return r.fixJson(o.mixin(this.inherited("toJson",arguments),{type:"esriSFS",style:this._styles[this.style]}))}});return o.mixin(h,d),h.defaultProps=L,t("extend-esri")&&(o.setObject("symbol.SimpleFillSymbol",h,s),s.symbol.defaultSimpleFillSymbol=L),h});