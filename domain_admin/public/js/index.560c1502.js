import{_ as k}from"./index.25939dcb.js";import{a5 as a,o as d,c as g,Y as n,R as s,a as y,W as f,ak as T,S as D,F as O,a8 as w,Q as b,U as S,X as U}from"./vendor-vue.6a3d94bb.js";import"./element-icon.ce1f4739.js";import"./vendor-lib.f9ff011c.js";import"./element-plus.d263ee4f.js";function j(l){var e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return e.test(l)}function $(l){try{return JSON.parse(l),!0}catch{return!1}}function J(l){return Object.prototype.toString.call(l)=="[object Object]"}const A=(l,e,t)=>{if(!e)return t();if(!$(e))return t(new Error("\u5FC5\u987B\u662Fjson"));let i=JSON.parse(e);Array.isArray(i)?i.some(o=>!j(o))?t(new Error("\u6570\u7EC4\u9879\u53EA\u80FD\u662F\u90AE\u7BB1\u5730\u5740")):t():t(new Error("\u5FC5\u987B\u662Farray\u6570\u7EC4"))},L={email_list:[{validator:A,trigger:"blur"}]},v={Unknown:0,Email:1,Webkook:2},W={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:L,form:{email_list:""},emailListExample:JSON.stringify(["123@qq.com","doamin@163.com"],null,4)}},computed:{},methods:{async getData(){let l=this.$loading(),e={type_id:v.Email};const t=await this.$http.getNotifyOfUser(e);t.data&&t.data.value&&t.data.value.email_list&&(this.form.email_list=JSON.stringify(t.data.value.email_list,null,4)),this.$nextTick(()=>{l.close()})},handleCancel(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(l=>{if(l)this.confirmSubmit();else return!1})},async confirmSubmit(){let l=this.$loading({fullscreen:!0}),e=null;this.form.email_list&&(e=JSON.parse(this.form.email_list));let t={type_id:v.Email,value:{email_list:e}},i=await this.$http.updateNotifyOfUser(t);i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(i.msg),this.$nextTick(()=>{l.close()})},async sendDomainInfoListEmail(){let l=this.$loading({fullscreen:!0});try{(await this.$http.sendDomainInfoListEmail()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}catch{}finally{this.$nextTick(()=>{l.close()})}}},created(){this.getData()}},R={class:"text-center"};function z(l,e,t,i,o,c){const p=a("el-input"),_=a("el-form-item"),u=a("el-form"),r=a("el-button"),x=a("el-tooltip");return d(),g("div",null,[n(u,{ref:"form",model:o.form,rules:o.rules,"label-width":"80px"},{default:s(()=>[n(_,{label:"\u90AE\u4EF6\u5217\u8868",prop:"email_list"},{default:s(()=>[n(p,{type:"textarea",rows:5,placeholder:`\u793A\u4F8B:
${o.emailListExample}`,modelValue:o.form.email_list,"onUpdate:modelValue":e[0]||(e[0]=h=>o.form.email_list=h)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["model","rules"]),y("div",R,[n(r,{onClick:c.handleCancel},{default:s(()=>[f("\u91CD \u7F6E")]),_:1},8,["onClick"]),n(r,{type:"primary",onClick:c.handleSubmit},{default:s(()=>[f("\u4FDD \u5B58")]),_:1},8,["onClick"]),n(x,{content:"\u8BF7\u4FDD\u5B58\u540E\u518D\u6D4B\u8BD5",placement:"top"},{default:s(()=>[n(r,{class:"margin-left--auto",onClick:c.sendDomainInfoListEmail},{default:s(()=>[f("\u6D4B \u8BD5")]),_:1},8,["onClick"])]),_:1})])])}const E=k(W,[["render",z]]),B=(l,e,t)=>{if(!e)return t();if(!$(e))return t(new Error("\u5FC5\u987B\u662Fjson"));let i=JSON.parse(e);J(i)?t():t(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},F={headers:[{validator:B,trigger:"blur"}]},I={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:F,form:{method:"GET",url:"",headers:JSON.stringify({"Content-Type":"application/json"},null,4),body:""},methodOptions:[{label:"GET",value:"GET"},{label:"POST",value:"POST"}],headerExample:JSON.stringify({"User-Agent":"Mozilla/5.0","Content-Type":"application/json"},null,4)}},computed:{},methods:{async getData(){this.loading=!0;let l={type_id:v.Webkook},t=(await this.$http.getNotifyOfUser(l)).data;if(t&&t.value){let i="";t.value.headers&&(i=JSON.stringify(t.value.headers,null,4)),this.form={method:t.value.method,url:t.value.url,headers:i,body:t.value.body}}this.loading=!1},handleCancel(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(l=>{if(l)this.confirmSubmit();else return!1})},async confirmSubmit(){let l=this.$loading({fullscreen:!0}),e=null;this.form.headers&&(e=JSON.parse(this.form.headers));let t={type_id:v.Webkook,value:{method:this.form.method,url:this.form.url,headers:e,body:this.form.body}},i=await this.$http.updateNotifyOfUser(t);i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(i.msg),this.$nextTick(()=>{l.close()})},async handleTest(){let l=this.$loading({fullscreen:!0});try{const e=await this.$http.testWebhookNotifyOfUser();e.code==0&&this.$msg.success(e.data)}catch{}finally{this.$nextTick(()=>{l.close()})}}},created(){this.getData()}},M={class:"text-center"};function G(l,e,t,i,o,c){const p=a("el-option"),_=a("el-select"),u=a("el-form-item"),r=a("el-input"),x=a("el-form"),h=a("el-button"),N=a("el-tooltip"),V=T("loading");return D((d(),g("div",null,[n(x,{ref:"form",model:o.form,rules:o.rules,"label-width":"80px"},{default:s(()=>[n(u,{label:"\u8BF7\u6C42\u65B9\u6CD5",prop:"method"},{default:s(()=>[n(_,{modelValue:o.form.method,"onUpdate:modelValue":e[0]||(e[0]=m=>o.form.method=m),placeholder:"\u8BF7\u6C42\u65B9\u6CD5",style:{width:"100px"}},{default:s(()=>[(d(!0),g(O,null,w(o.methodOptions,m=>(d(),b(p,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(u,{label:"\u8BF7\u6C42\u5730\u5740",prop:"url"},{default:s(()=>[n(r,{type:"text",modelValue:o.form.url,"onUpdate:modelValue":e[1]||(e[1]=m=>o.form.url=m),placeholder:"\u8BF7\u6C42\u5730\u5740"},null,8,["modelValue"])]),_:1}),n(u,{label:"\u8BF7\u6C42\u5934",prop:"headers"},{default:s(()=>[n(r,{type:"textarea",rows:5,modelValue:o.form.headers,"onUpdate:modelValue":e[2]||(e[2]=m=>o.form.headers=m),placeholder:`\u793A\u4F8B: 
${o.headerExample}`},null,8,["modelValue","placeholder"])]),_:1}),n(u,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:s(()=>[n(r,{type:"textarea",rows:5,modelValue:o.form.body,"onUpdate:modelValue":e[3]||(e[3]=m=>o.form.body=m),placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),y("div",M,[n(h,{onClick:c.handleCancel},{default:s(()=>[f("\u91CD \u7F6E")]),_:1},8,["onClick"]),n(h,{type:"primary",onClick:c.handleSubmit},{default:s(()=>[f("\u4FDD \u5B58")]),_:1},8,["onClick"]),n(N,{content:"\u8BF7\u4FDD\u5B58\u540E\u518D\u6D4B\u8BD5",placement:"top"},{default:s(()=>[n(h,{onClick:c.handleTest},{default:s(()=>[f("\u6D4B \u8BD5")]),_:1},8,["onClick"])]),_:1})])])),[[V,o.loading]])}const C=k(I,[["render",G]]);const P={name:"index",props:{},components:{NotifyEditEmail:E,NotifyEditWebhook:C},data(){return{active:"email",options:[{value:"email",label:"\u90AE\u4EF6\u901A\u77E5",icon:"Message",component:E},{value:"webhook",label:"WebHook",icon:"AlarmClock",component:C}]}},computed:{currentComponent(){return this.options.find(l=>l.value==this.active).component}},methods:{async getData(){},handleMenuSelect(l,e,t,i){this.active=l}},created(){this.getData()}},Z={class:"app-container notify-edit-container"},q={class:"notify-edit__menu"},H={class:"notify-edit__main"};function Q(l,e,t,i,o,c){const p=a("el-icon"),_=a("el-menu-item"),u=a("el-menu");return d(),g("div",Z,[y("div",q,[n(u,{"default-active":o.active,"menu-trigger":"click",onSelect:c.handleMenuSelect},{default:s(()=>[(d(!0),g(O,null,w(o.options,r=>(d(),b(_,{index:r.value},{default:s(()=>[n(p,null,{default:s(()=>[(d(),b(S(r.icon)))]),_:2},1024),y("span",null,U(r.label),1)]),_:2},1032,["index"]))),256))]),_:1},8,["default-active","onSelect"])]),y("div",H,[(d(),b(S(c.currentComponent)))])])}const le=k(P,[["render",Q],["__scopeId","data-v-e5abf4d9"]]);export{le as default};