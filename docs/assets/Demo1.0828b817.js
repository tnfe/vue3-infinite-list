import{I as m,C as c,a as p}from"./CtrlBar.be84432c.js";import{_ as u}from"./main.398c6e87.js";import{d as _,j as f,r as a,o as g,c as v,e as n,b as s,w as b,F as C,t as r}from"./vendor.5d83dfb2.js";const h=_({name:"Demo1",components:{InfiniteList:m,CtrlBar:c},setup(){const e=f(!1),t=p.generateData(1e5);return{debug:e,data:t}}}),B={class:"vl-con"},D={class:"li-con"};function I(e,t,V,k,y,$){const i=a("CtrlBar"),d=a("InfiniteList");return g(),v(C,null,[n(i,{modelValue:e.debug,"onUpdate:modelValue":t[0]||(t[0]=o=>e.debug=o),link:"https://github.com/tnfe/vue-infinite-list/blob/master/demo/src/app/components/demo/demo1.vue"},null,8,["modelValue","link"]),s("div",B,[n(d,{data:e.data,width:"100%",height:500,itemSize:50,debug:e.debug},{default:b(({item:o,index:l})=>[s("div",D,r(l+1)+" : "+r(o),1)]),_:1},8,["data","debug"])])],64)}var j=u(h,[["render",I],["__scopeId","data-v-4570123a"]]);export{j as default};