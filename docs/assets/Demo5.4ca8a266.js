import{I as V,C as y,a as B}from"./CtrlBar.be84432c.js";import{_ as C}from"./main.398c6e87.js";import{d as D,j as i,m as w,n as O,r as n,A as S,o as _,c as f,e as t,b as I,B as k,w as s,F as L,z as a,t as $}from"./vendor.5d83dfb2.js";const N=D({name:"Demo5",components:{InfiniteList:V,CtrlBar:y},setup(){const e=i(!1),o=i(!0),u=i(1e4),d=i(null);let r=0;return w(()=>{r=setTimeout(()=>{o.value=!1,d.value=B.generateData(1e5)},1600)}),O(()=>clearTimeout(r)),{debug:e,scrollOffset:u,data:d,loading:o}}}),T={class:"btn-bar"},U=a(" Scroll to offset: "),j={class:"vl-con","element-loading-text":"Simulate Data Loading..."},z=a("xxxxxxxxxx"),F=a("Primary"),A=a(),E=a("Success");function M(e,o,u,d,r,P){const p=n("CtrlBar"),b=n("el-input-number"),c=n("el-col"),m=n("el-button"),g=n("el-row"),v=n("InfiniteList"),h=S("loading");return _(),f(L,null,[t(p,{modelValue:e.debug,"onUpdate:modelValue":o[0]||(o[0]=l=>e.debug=l),link:"https://github.com/tnfe/vue-infinite-list/blob/master/demo/src/app/components/demo/demo5.vue"},null,8,["modelValue","link"]),I("div",T,[U,t(b,{modelValue:e.scrollOffset,"onUpdate:modelValue":o[1]||(o[1]=l=>e.scrollOffset=l),step:20,min:0,max:9e4},null,8,["modelValue"])]),k((_(),f("div",j,[t(v,{data:e.data,width:"100%",height:500,itemSize:90,scrollOffset:e.scrollOffset,debug:e.debug},{default:s(({item:l,index:x})=>[t(g,{class:"mb-4 li-con"},{default:s(()=>[t(c,{span:8},{default:s(()=>[a("index: "+$(x+1),1)]),_:2},1024),t(c,{span:8},{default:s(()=>[z]),_:1}),t(c,{span:8},{default:s(()=>[t(m,{type:"primary"},{default:s(()=>[F]),_:1}),A,t(m,{type:"success"},{default:s(()=>[E]),_:1})]),_:1})]),_:2},1024)]),_:1},8,["data","scrollOffset","debug"])])),[[h,e.loading]])],64)}var J=C(N,[["render",M],["__scopeId","data-v-35bf1bf8"]]);export{J as default};