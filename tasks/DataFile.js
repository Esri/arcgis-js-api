define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(e,t,i,s){var n=e(null,{declaredClass:"esri.tasks.DataFile",constructor:function(e){e&&t.mixin(this,e)},url:null,itemID:null,toJson:function(){var e={};return this.url&&(e.url=this.url),this.itemID&&(e.itemID=this.itemID),e}});return i("extend-esri")&&t.setObject("tasks.DataFile",n,s),n});