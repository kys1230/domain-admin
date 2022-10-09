import{ax as $,a5 as i,o as f,c as v,X as r,R as a,a as h,Z as m,Q as D,V as b,ay as O,az as T,aa as R,a0 as q,aA as M,aB as j,aC as N,aD as H,at as z,aE as K}from"./vendor-vue.e07d7f7e.js";import{Q as W}from"./element-icon.bb5f2c38.js";import{a as C,b as Y}from"./vendor-lib.bb870261.js";import{E as y,i as Q}from"./element-plus.93c2f37e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();var X={name:"zh-cn",el:{colorpicker:{confirm:"\u786E\u5B9A",clear:"\u6E05\u7A7A"},datepicker:{now:"\u6B64\u523B",today:"\u4ECA\u5929",cancel:"\u53D6\u6D88",clear:"\u6E05\u7A7A",confirm:"\u786E\u5B9A",selectDate:"\u9009\u62E9\u65E5\u671F",selectTime:"\u9009\u62E9\u65F6\u95F4",startDate:"\u5F00\u59CB\u65E5\u671F",startTime:"\u5F00\u59CB\u65F6\u95F4",endDate:"\u7ED3\u675F\u65E5\u671F",endTime:"\u7ED3\u675F\u65F6\u95F4",prevYear:"\u524D\u4E00\u5E74",nextYear:"\u540E\u4E00\u5E74",prevMonth:"\u4E0A\u4E2A\u6708",nextMonth:"\u4E0B\u4E2A\u6708",year:"\u5E74",month1:"1 \u6708",month2:"2 \u6708",month3:"3 \u6708",month4:"4 \u6708",month5:"5 \u6708",month6:"6 \u6708",month7:"7 \u6708",month8:"8 \u6708",month9:"9 \u6708",month10:"10 \u6708",month11:"11 \u6708",month12:"12 \u6708",weeks:{sun:"\u65E5",mon:"\u4E00",tue:"\u4E8C",wed:"\u4E09",thu:"\u56DB",fri:"\u4E94",sat:"\u516D"},months:{jan:"\u4E00\u6708",feb:"\u4E8C\u6708",mar:"\u4E09\u6708",apr:"\u56DB\u6708",may:"\u4E94\u6708",jun:"\u516D\u6708",jul:"\u4E03\u6708",aug:"\u516B\u6708",sep:"\u4E5D\u6708",oct:"\u5341\u6708",nov:"\u5341\u4E00\u6708",dec:"\u5341\u4E8C\u6708"}},select:{loading:"\u52A0\u8F7D\u4E2D",noMatch:"\u65E0\u5339\u914D\u6570\u636E",noData:"\u65E0\u6570\u636E",placeholder:"\u8BF7\u9009\u62E9"},cascader:{noMatch:"\u65E0\u5339\u914D\u6570\u636E",loading:"\u52A0\u8F7D\u4E2D",placeholder:"\u8BF7\u9009\u62E9",noData:"\u6682\u65E0\u6570\u636E"},pagination:{goto:"\u524D\u5F80",pagesize:"\u6761/\u9875",total:"\u5171 {total} \u6761",pageClassifier:"\u9875",deprecationWarning:"\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"},messagebox:{title:"\u63D0\u793A",confirm:"\u786E\u5B9A",cancel:"\u53D6\u6D88",error:"\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"},upload:{deleteTip:"\u6309 delete \u952E\u53EF\u5220\u9664",delete:"\u5220\u9664",preview:"\u67E5\u770B\u56FE\u7247",continue:"\u7EE7\u7EED\u4E0A\u4F20"},table:{emptyText:"\u6682\u65E0\u6570\u636E",confirmFilter:"\u7B5B\u9009",resetFilter:"\u91CD\u7F6E",clearFilter:"\u5168\u90E8",sumText:"\u5408\u8BA1"},tree:{emptyText:"\u6682\u65E0\u6570\u636E"},transfer:{noMatch:"\u65E0\u5339\u914D\u6570\u636E",noData:"\u65E0\u6570\u636E",titles:["\u5217\u8868 1","\u5217\u8868 2"],filterPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",noCheckedFormat:"\u5171 {total} \u9879",hasCheckedFormat:"\u5DF2\u9009 {checked}/{total} \u9879"},image:{error:"\u52A0\u8F7D\u5931\u8D25"},pageHeader:{title:"\u8FD4\u56DE"},popconfirm:{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}}};const G={login:"/login",getDomainList:"/getDomainList",addDomain:"/addDomain",getDomainById:"/getDomainById",deleteDomainById:"/deleteDomainById",updateDomainById:"/updateDomainById",updateDomainCertInfoById:"/updateDomainCertInfoById",updateAllDomainCertInfoOfUser:"/updateAllDomainCertInfoOfUser",importDomainFromFile:"/importDomainFromFile",getAllDomainListOfUser:"/getAllDomainListOfUser",sendDomainInfoListEmail:"/sendDomainInfoListEmail",checkDomainCert:"/checkDomainCert",getAllSystemConfig:"/getAllSystemConfig",updateSystemConfig:"/updateSystemConfig",getUserInfo:"/getUserInfo",updateUserInfo:"/updateUserInfo",updateUserPassword:"/updateUserPassword",getUserList:"/getUserList",addUser:"/addUser",deleteUser:"/deleteUser",updateUserStatus:"/updateUserStatus",getLogSchedulerList:"/getLogSchedulerList"},F="token";function Z(e){C.set(F,e,{expires:7})}function k(){return C.get(F)}function J(){C.remove(F)}const B="/api",U=Y.create({baseURL:B});U.interceptors.request.use(e=>{let t=k();return t&&(e.headers["X-Token"]=t),e},e=>{console.log(e)});U.interceptors.response.use(e=>e.data,e=>{console.log(e)});function ee(e){return async function(t={},n){let l=null;t instanceof FormData,l=t;const o=await U.post(e,l,n);return o.code!=0&&y.error(o.msg),o}}function te(){let e={};for(let[t,n]of Object.entries(G))e[t]=ee(n);return e}const S=te();function je(e){return B+e}class oe{static message(t){return y.closeAll(),y(t)}static success(t){return this.message({message:t,type:"success"})}static warning(t){return this.message({message:t,type:"warning"})}static info(t){return this.message({message:t,type:"info"})}static error(t){return this.message({message:t,type:"error"})}static closeAll(){y.closeAll()}}const se="modulepreload",ne=function(e){return"/"+e},A={},w=function(t,n,l){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=ne(o),o in A)return;A[o]=!0;const s=o.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":se,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((d,_)=>{c.addEventListener("load",d),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},I=$({id:"user-store",state:()=>({_userInfo:null}),getters:{hasUserInfo:e=>e._userInfo!=null,isAdmin:e=>{if(e._userInfo)return e._userInfo.username=="admin"},userInfo:e=>e._userInfo},actions:{async updateUserInfo(){const e=await S.getUserInfo();e.code==0&&(this._userInfo=e.data)},removeUserInfo(){this._userInfo=null}}}),re={password:[{message:"\u65E7\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],new_password:[{message:"\u65B0\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},E=(e,t)=>{const n=e.__vccOpts||e;for(const[l,o]of t)n[l]=o;return n},ue={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{form:{password:"",new_password:""},rules:re}},computed:{},methods:{async getData(){if(this.row){let e={id:this.row.id};const t=await this.$http.function(e);if(t.code!=0)return;let n=t.data;this.form.password=n.password,this.form.new_password=n.new_password}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(e=>{if(e)this.confirmSubmit();else return!1})},async confirmSubmit(){let e=this.$loading({fullscreen:!0}),t={password:this.form.password,new_password:this.form.new_password};const n=await this.$http.updateUserPassword(t);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg),this.$nextTick(()=>{e.close()})}},created(){this.getData()}},ae={class:"text-center"};function ie(e,t,n,l,o,s){const u=i("el-input"),c=i("el-form-item"),d=i("el-form"),_=i("el-button");return f(),v("div",null,[r(d,{ref:"form",model:o.form,rules:o.rules,"label-width":"80px"},{default:a(()=>[r(c,{label:"\u65E7\u5BC6\u7801",prop:"password"},{default:a(()=>[r(u,{type:"text",modelValue:o.form.password,"onUpdate:modelValue":t[0]||(t[0]=p=>o.form.password=p),placeholder:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),r(c,{label:"\u65B0\u5BC6\u7801",prop:"new_password"},{default:a(()=>[r(u,{type:"text",modelValue:o.form.new_password,"onUpdate:modelValue":t[1]||(t[1]=p=>o.form.new_password=p),placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),h("div",ae,[r(_,{onClick:s.handleCancel},{default:a(()=>[m("\u53D6 \u6D88")]),_:1},8,["onClick"]),r(_,{type:"primary",onClick:s.handleSubmit},{default:a(()=>[m("\u786E \u5B9A")]),_:1},8,["onClick"])])])}const le=E(ue,[["render",ie]]),ce={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:le},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){},handleSuccess(){this.$emit("on-success")}},created(){}};function de(e,t,n,l,o,s){const u=i("DataForm"),c=i("el-dialog");return f(),D(c,{title:"\u4FEE\u6539\u767B\u5F55\u5BC6\u7801",modelValue:s.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=d=>s.dialogVisible=d),width:"400px",center:"","append-to-body":""},{default:a(()=>[s.dialogVisible?(f(),D(u,{key:0,row:n.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):b("",!0)]),_:1},8,["modelValue"])}const me=E(ce,[["render",de]]),pe={name:"Menu",props:{},components:{UserPaswordEditDataFormDailog:me},data(){return{activeIndex:"",dialogVisible:!1}},computed:{...O(I,{userInfo:"userInfo",isAdmin:"isAdmin"})},methods:{...T(I,{updateUserInfo:"updateUserInfo",removeUserInfo:"removeUserInfo"}),async getData(){},handleSelect(e){},handleLogoutClick(e){this.removeUserInfo(),J(),this.$router.push({path:"/login"})},handleUpdatePasswordClick(){this.dialogVisible=!0},handleUserPaswordEditClose(){this.dialogVisible=!1},handleUserPaswordEditSuccess(){this.dialogVisible=!1}},created(){this.activeIndex=this.$route.name,this.getData()}},fe={class:""},_e={class:"self-center margin-left--auto flex items-center"},he=h("a",{href:"https://github.com/mouday/domain-admin",class:"mr-md",target:"_blank"},[h("img",{alt:"GitHub stars",src:"https://img.shields.io/github/stars/mouday/domain-admin.svg?style=social"})],-1),ge=h("img",{src:"https://api.multiavatar.com/domain-admin.png"},null,-1);function Ee(e,t,n,l,o,s){const u=i("el-menu-item"),c=i("el-avatar"),d=i("el-dropdown-item"),_=i("el-dropdown-menu"),p=i("el-dropdown"),x=i("el-menu"),L=i("UserPaswordEditDataFormDailog");return f(),v("div",fe,[r(x,{"default-active":o.activeIndex,ellipsis:!1,class:"el-menu-demo",mode:"horizontal",router:"","menu-trigger":"click",onSelect:s.handleSelect},{default:a(()=>[r(u,{index:"domain-list"},{default:a(()=>[m("\u57DF\u540D\u7BA1\u7406")]),_:1}),r(u,{index:"user-edit"},{default:a(()=>[m("\u4E2A\u4EBA\u8BBE\u7F6E")]),_:1}),e.isAdmin?(f(),D(u,{key:0,index:"user-admin-list"},{default:a(()=>[m("\u7528\u6237\u7BA1\u7406")]),_:1})):b("",!0),e.isAdmin?(f(),D(u,{key:1,index:"system-list"},{default:a(()=>[m("\u7CFB\u7EDF\u8BBE\u7F6E")]),_:1})):b("",!0),r(u,{index:"log-scheduler-list"},{default:a(()=>[m("\u76D1\u6D4B\u65E5\u5FD7")]),_:1}),h("div",_e,[he,r(p,{trigger:"hover"},{dropdown:a(()=>[r(_,null,{default:a(()=>[r(d,{onClick:s.handleUpdatePasswordClick,class:"justify-center"},{default:a(()=>[m("\u4FEE\u6539\u5BC6\u7801")]),_:1},8,["onClick"]),r(d,{onClick:s.handleLogoutClick,class:"justify-center"},{default:a(()=>[m("\u9000\u51FA")]),_:1},8,["onClick"])]),_:1})]),default:a(()=>[r(c,{src:e.userInfo&&e.userInfo.avatar_url},{default:a(()=>[ge]),_:1},8,["src"])]),_:1})])]),_:1},8,["default-active","onSelect"]),r(L,{visible:o.dialogVisible,"onUpdate:visible":t[0]||(t[0]=P=>o.dialogVisible=P),onOnSuccess:s.handleUserPaswordEditSuccess,onOnCancel:s.handleUserPaswordEditClose},null,8,["visible","onOnSuccess","onOnCancel"])])}const we=E(pe,[["render",Ee]]);const De={name:"index",props:{},components:{Menu:we},data(){return{}},computed:{},methods:{async getData(){}},created(){this.getData()}},ye={class:"app-layout"};function ve(e,t,n,l,o,s){const u=i("Menu"),c=i("router-view");return f(),v("div",ye,[r(u),h("div",null,[r(c)])])}const be=E(De,[["render",ve]]);const Ie={name:"Login",props:{},components:{},data(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}},computed:{},methods:{async getData(){},onSubmit(){this.$refs.form.validate(e=>{if(e)this.confirmSubmit();else return!1})},async confirmSubmit(){const e=await this.$http.login({username:this.form.username,password:this.form.password});if(console.log(e),e.code==0){Z(e.data.token),this.$msg.success("\u767B\u5F55\u6210\u529F");let t="/";this.$route.query.redirect&&(t=this.$route.query.redirect),this.$router.push({path:t})}}},created(){this.getData()}},Ce=e=>(M("data-v-5e777eed"),e=e(),j(),e),Fe={class:"login-container"},Ue=Ce(()=>h("h3",{class:"title"},"\u767B\u5F55",-1));function Ae(e,t,n,l,o,s){const u=i("el-input"),c=i("el-form-item"),d=i("el-form"),_=i("el-button");return f(),v("div",Fe,[Ue,r(d,{class:"",ref:"form",model:o.form,rules:o.rules,"label-width":"auto"},{default:a(()=>[r(c,{label:"",prop:"username"},{default:a(()=>[r(u,{modelValue:o.form.username,"onUpdate:modelValue":t[0]||(t[0]=p=>o.form.username=p),"auto-complete":"off",placeholder:"\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),r(c,{label:"",prop:"password"},{default:a(()=>[r(u,{modelValue:o.form.password,"onUpdate:modelValue":t[1]||(t[1]=p=>o.form.password=p),type:"password","auto-complete":"off",placeholder:"\u5BC6\u7801",onKeypress:R(s.onSubmit,["enter"])},null,8,["modelValue","onKeypress"])]),_:1})]),_:1},8,["model","rules"]),h("div",null,[r(_,{class:"w-full",type:"primary",size:"large",onClick:q(s.onSubmit,["prevent"])},{default:a(()=>[m("\u767B \u5F55")]),_:1},8,["onClick"])])])}const ke=E(Ie,[["render",Ae],["__scopeId","data-v-5e777eed"]]),Be=[{path:"/login",component:ke},{path:"/",component:be,redirect:"/domain-list",children:[{path:"/domain-list",name:"domain-list",component:()=>w(()=>import("./index.1ec246cb.js"),["js/index.1ec246cb.js","css/index.56d6aeba.css","js/vendor-vue.e07d7f7e.js","js/ConnectStatus.281e816d.js","js/vendor-lib.bb870261.js","js/element-plus.93c2f37e.js","js/element-icon.bb5f2c38.js"])},{path:"/system-list",name:"system-list",component:()=>w(()=>import("./index.fbc7ee4f.js"),["js/index.fbc7ee4f.js","js/vendor-vue.e07d7f7e.js","js/element-icon.bb5f2c38.js","js/vendor-lib.bb870261.js","js/element-plus.93c2f37e.js"])},{path:"/user-edit",name:"user-edit",component:()=>w(()=>import("./index.78cdf9b3.js"),["js/index.78cdf9b3.js","js/vendor-vue.e07d7f7e.js","js/element-icon.bb5f2c38.js","js/vendor-lib.bb870261.js","js/element-plus.93c2f37e.js"])},{path:"/user-admin-list",name:"user-admin-list",component:()=>w(()=>import("./index.7d181494.js"),["js/index.7d181494.js","js/vendor-vue.e07d7f7e.js","js/element-icon.bb5f2c38.js","js/vendor-lib.bb870261.js","js/element-plus.93c2f37e.js"])},{path:"/log-scheduler-list",name:"log-scheduler-list",component:()=>w(()=>import("./index.846a7348.js"),["js/index.846a7348.js","js/ConnectStatus.281e816d.js","js/vendor-vue.e07d7f7e.js","js/element-icon.bb5f2c38.js","js/vendor-lib.bb870261.js","js/element-plus.93c2f37e.js"])}]}],Se=["/login"];function Ve(e){e.beforeEach(async(t,n,l)=>{let o=k();const s=I();o&&!s.hasUserInfo&&await s.updateUserInfo(),Se.includes(t.path)||s.hasUserInfo?l():l({path:"/login",query:{redirect:t.fullPath}})})}const V=N({history:H(),routes:Be});Ve(V);const xe=V;const Le={name:"app",props:{},components:{},data(){return{}},computed:{},methods:{},created(){}};function Pe(e,t,n,l,o,s){const u=i("router-view");return f(),D(u)}const $e=E(Le,[["render",Pe]]),g=z($e);g.config.globalProperties.$http=S;g.config.globalProperties.$msg=oe;g.use(xe);g.use(Q,{locale:X});for(const[e,t]of Object.entries(W))g.component(e,t);const Oe=K();g.use(Oe);g.mount("#app");export{E as _,G as d,je as r,I as u};
