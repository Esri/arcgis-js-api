define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(s,e,i,n){var o=s(null,{declaredClass:"esri.tasks.datareviewer.ReviewerSession",sessionId:0/0,sessionName:"",userName:"",versionName:"",constructor:function(s,e,i,n){this.sessionId=s,this.sessionName=e,this.userName=i,void 0!==n&&(this.versionName=n)},toString:function(){return isNaN(this.sessionId)?null:"Session "+this.sessionId+" : "+this.sessionName}});return e("extend-esri")&&i.setObject("tasks.datareviewer.ReviewerSession",o,n),o});