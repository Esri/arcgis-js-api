define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(e,i,s,l,n){var r=e(null,{declaredClass:"esri.layers.KMLFolder",constructor:function(e){i.mixin(this,e),n.isDefined(this.visibility)&&(this.visible=!!this.visibility)}});return s("extend-esri")&&i.setObject("layers.KMLFolder",r,l),r});