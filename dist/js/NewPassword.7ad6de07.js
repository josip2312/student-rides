(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["NewPassword"],{"0129":function(r,e,t){"use strict";var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{attrs:{id:"form"}},[t("form",{staticClass:"form",class:r.className},[r.title?t("div",{staticClass:"form-group"},[t("h3",{staticClass:"heading-3"},[r._v(r._s(r.title))])]):r._e(),r._t("form-content"),t("div",{staticClass:"form-down"},[r._t("form-down")],2)],2),t("TheError")],1)},s=[],n=t("c6f5"),o={name:"FormWrapper",components:{TheError:n["a"]},props:{title:{type:String},className:{type:String}}},i=o,l=(t("74cf"),t("2877")),u=Object(l["a"])(i,a,s,!1,null,"dbf12b84",null);e["a"]=u.exports},"36e2":function(r,e,t){"use strict";t.r(e);var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ValidationObserver",{attrs:{slim:""},scopedSlots:r._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[t("FormWrapper",{attrs:{title:"Unesite novu lozinku"},nativeOn:{submit:function(e){e.preventDefault(),a((function(){return r.resetPassword({password:r.password.value,id:r.id})}))}},scopedSlots:r._u([{key:"form-content",fn:function(){return[t("div",{staticClass:"form-group"},[t("FormInput",{attrs:{label:r.password.label,vid:r.password.vid,type:r.password.type,name:r.password.name,id:r.password.id,rules:"required|min:6"},model:{value:r.password.value,callback:function(e){r.$set(r.password,"value",e)},expression:"password.value"}})],1),t("div",{staticClass:"form-group"},[t("FormInput",{attrs:{label:r.confirmPassword.label,rules:"required|confirmed:confirmation",type:r.confirmPassword.type,name:r.confirmPassword.name,id:r.confirmPassword.id},model:{value:r.confirmPassword.value,callback:function(e){r.$set(r.confirmPassword,"value",e)},expression:"confirmPassword.value"}})],1)]},proxy:!0},{key:"form-down",fn:function(){return[t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn",attrs:{type:"submit"}},[r._v(" Promijeni lozinku ")])])]},proxy:!0}],null,!0)}),t("TheError")]}}])})},s=[],n=t("5530"),o=t("c6f5"),i=t("0129"),l=t("b34f"),u=t("7bb1"),c=t("2f62"),d={components:{TheError:o["a"],ValidationObserver:u["a"],FormWrapper:i["a"],FormInput:l["a"]},data:function(){return{id:this.$route.params.id,password:{label:"Lozinka",type:"password",value:null,rules:{required:!0,min:6},name:"password",id:"password",vid:"confirmation"},confirmPassword:{label:"Potvrdi lozinku",type:"password",value:null,rules:{confirmed:{confirmation:!0}},name:"confirmPassword",id:"confirmPassword"}}},methods:Object(n["a"])({},Object(c["b"])(["resetPassword"]))},p=d,f=t("2877"),m=Object(f["a"])(p,a,s,!1,null,null,null);e["default"]=m.exports},"3d3a":function(r,e,t){"use strict";var a=t("cad6"),s=t.n(a);s.a},"4a73":function(r,e,t){},"74cf":function(r,e,t){"use strict";var a=t("4a73"),s=t.n(a);s.a},"7f89":function(r,e,t){"use strict";var a=t("9ebd"),s=t.n(a);s.a},"9ebd":function(r,e,t){},b34f:function(r,e,t){"use strict";var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ValidationProvider",{attrs:{rules:r.rules,name:r.name,vid:r.vid},scopedSlots:r._u([{key:"default",fn:function(e){return[t("label",{attrs:{for:r.id}},[r._v(r._s(r.label))]),t("input",{class:e.classes,attrs:{type:r.type,id:r.id,placeholder:r.placeholder,autocomplete:"on"},domProps:{value:r.value},on:{input:function(e){return r.$emit("input",e.target.value)}}}),t("p",[r._v(r._s(e.errors[0]))])]}}])})},s=[],n=t("7bb1"),o={inheritAttrs:!0,name:"FormInput",components:{ValidationProvider:n["b"]},data:function(){return{googleKey:"AIzaSyCwB0fUQDB8t-YzmxsbCNRg3m6l3OU6UoQ",currentValue:""}},props:{type:{type:String,default:"text",required:!0},value:{type:String,default:""},label:{type:String,required:!0},name:{type:String,default:""},id:{type:String},placeholder:{type:String},rules:{type:[String,Object],default:""},vid:{type:String,default:void 0},googleInput:{type:Boolean}}},i=o,l=(t("3d3a"),t("2877")),u=Object(l["a"])(i,a,s,!1,null,"0545e9de",null);e["a"]=u.exports},c6f5:function(r,e,t){"use strict";var a=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[r.isError?a("div",{staticClass:"error"},[a("img",{attrs:{src:t("4ab2"),alt:""},on:{click:r.clearError}}),a("span",[r._v(" "+r._s(r.getErrorMessage.error)+" ")])]):r._e()])},s=[],n=t("5530"),o=t("2f62"),i={name:"Error",computed:Object(n["a"])({},Object(o["c"])(["getErrorMessage","isError"])),methods:{clearError:function(){this.$store.commit("CLEAR_ERROR")}}},l=i,u=(t("7f89"),t("2877")),c=Object(u["a"])(l,a,s,!1,null,"0769fabc",null);e["a"]=c.exports},cad6:function(r,e,t){}}]);
//# sourceMappingURL=NewPassword.7ad6de07.js.map