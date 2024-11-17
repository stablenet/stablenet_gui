import{u as r,E as k,s as i,S as a,a as f}from"./Skeleton-DRQ7pli2.js";import{d as v,u as m,l as p,e as S,g as n,i as u,_ as c}from"./index-trPnz5BS.js";import{i as g}from"./User-U_Q68dKX.js";import{o as d}from"./omit-Ddy602VB.js";const x=()=>c(c({},i()),{size:String,block:Boolean}),h=v({compatConfig:{MODE:3},name:"ASkeletonButton",props:g(x(),{size:"default"}),setup(t){const{prefixCls:e}=m("skeleton",t),[l,s]=r(e),o=p(()=>S(e.value,`${e.value}-element`,{[`${e.value}-active`]:t.active,[`${e.value}-block`]:t.block},s.value));return()=>l(n("div",{class:o.value},[n(k,u(u({},t),{},{prefixCls:`${e.value}-button`}),null)]))}}),$=v({compatConfig:{MODE:3},name:"ASkeletonInput",props:c(c({},d(i(),["shape"])),{size:String,block:Boolean}),setup(t){const{prefixCls:e}=m("skeleton",t),[l,s]=r(e),o=p(()=>S(e.value,`${e.value}-element`,{[`${e.value}-active`]:t.active,[`${e.value}-block`]:t.block},s.value));return()=>l(n("div",{class:o.value},[n(k,u(u({},t),{},{prefixCls:`${e.value}-input`}),null)]))}}),q="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",C=v({compatConfig:{MODE:3},name:"ASkeletonImage",props:d(i(),["size","shape","active"]),setup(t){const{prefixCls:e}=m("skeleton",t),[l,s]=r(e),o=p(()=>S(e.value,`${e.value}-element`,s.value));return()=>l(n("div",{class:o.value},[n("div",{class:`${e.value}-image`},[n("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",class:`${e.value}-image-svg`},[n("path",{d:q,class:`${e.value}-image-path`},null)])])]))}}),w=()=>c(c({},i()),{shape:String}),I=v({compatConfig:{MODE:3},name:"ASkeletonAvatar",props:g(w(),{size:"default",shape:"circle"}),setup(t){const{prefixCls:e}=m("skeleton",t),[l,s]=r(e),o=p(()=>S(e.value,`${e.value}-element`,{[`${e.value}-active`]:t.active},s.value));return()=>l(n("div",{class:o.value},[n(k,u(u({},t),{},{prefixCls:`${e.value}-avatar`}),null)]))}});a.Button=h;a.Avatar=I;a.Input=$;a.Image=C;a.Title=f;a.install=function(t){return t.component(a.name,a),t.component(a.Button.name,h),t.component(a.Avatar.name,I),t.component(a.Input.name,$),t.component(a.Image.name,C),t.component(a.Title.name,f),t};
