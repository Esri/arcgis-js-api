define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(e,s,E,T){var n=e(null,{declaredClass:"esri.tasks.NAMessage",constructor:function(e){s.mixin(this,e)}});return s.mixin(n,{TYPE_INFORMATIVE:0,TYPE_PROCESS_DEFINITION:1,TYPE_PROCESS_START:2,TYPE_PROCESS_STOP:3,TYPE_WARNING:50,TYPE_ERROR:100,TYPE_EMPTY:101,TYPE_ABORT:200}),E("extend-esri")&&s.setObject("tasks.NAMessage",n,T),n});