define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","./Templated","../context/DescriptorMixin","../../../kernel"],function(e,t,r,s,i,n,o){var a=e([i,n],{_escapeSingleQuotes:!0,_isGxeDescriptor:!0,_replicas:null,postCreate:function(){this.inherited(arguments),this._replicas=[]},destroy:function(){try{r.forEach(this._replicas,function(e){try{e.destroyRecursive(!1)}catch(t){console.error(t)}})}catch(e){console.error(e)}this._replicas=[],this.inherited(arguments)},newInstance:function(){var e=new this.constructor;return this._replicas.push(e),e}});return s("extend-esri")&&t.setObject("dijit.metadata.base.Descriptor",a,o),a});