define(["require","dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","dojo/_base/array","dojo/query","dojo/dom-class","dijit/_Widget","dijit/_TemplatedMixin","dojo/text!./templates/FontAlignment.html"],function(e,t,n,i,o,a,r,d,l,s,u){var c=t([l,s],{declaredClass:"esri.dijit.FontAlignment",widgetsInTemplate:!0,templateString:u,_imageUrl:e.toUrl("./images/positionSprite.png"),constructor:function(){},destroy:function(){this.inherited(arguments)},setValue:function(e){this.value=e;var t=r("button",this.domNode);a.forEach(t,function(t){t.value===e&&d.add(t,"selectedFontAlignment")})},getValue:function(){return this.value},changeValue:function(e){var t=r("button",this.domNode);a.forEach(t,function(e){d.remove(e,"selectedFontAlignment")}),d.add(e.currentTarget,"selectedFontAlignment"),this.value=e.currentTarget.value,this.emit("change",{value:this.value})}});return i("extend-esri")&&n.setObject("dijit.FontAlignment",c,o),c});