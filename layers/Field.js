define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./RangeDomain","./CodedValueDomain"],function(e,a,i,n,s,t){var l=e(null,{declaredClass:"esri.layers.Field",constructor:function(e){if(e&&a.isObject(e)){this.name=e.name,this.type=e.type,this.alias=e.alias,this.length=e.length,this.editable=e.editable,this.nullable=e.nullable;var i=e.domain;if(i&&a.isObject(i))switch(i.type){case"range":this.domain=new s(i);break;case"codedValue":this.domain=new t(i)}}}});return i("extend-esri")&&a.setObject("layers.Field",l,n),l});