define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/on","dojo/has","../kernel"],function(e,r,t,o,i,n){function s(e){"object"!=typeof e&&(e=new Error(e)),e.grid=this,o.emit(this.domNode,"dgrid-error",{grid:this,error:e,cancelable:!0,bubbles:!0})&&console.error(e)}var c=e(null,{_trackError:function(e){var i;"string"==typeof e&&(e=r.hitch(this,e));try{i=e()}catch(n){s.call(this,n)}return t.when(i,r.hitch(this,function(){o.emit(this.domNode,"refresh",{cancelable:!0,bubbles:!0})}),r.hitch(this,s))}});return i("extend-esri")&&r.setObject("dijit._RefreshMixin",c,n),c});