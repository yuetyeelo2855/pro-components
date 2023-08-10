"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[5509],{98558:function(k,g,e){e.d(g,{default:function(){return J}});var O=e(57213),o=e.n(O),j=e(54306),A=e.n(j),L=e(12342),U=e.n(L),D=e(11879),S=e(61950),p=e(36787),I=e(94828),W=e(78497),K=e(31071),s=e(50959),N=e(37616),w=e(78080),q=e(96971),_=e(22141),rr=e(6175),nr=e(25752),Y=e(3625),R=e(11527),er=["steps","columns","forceUpdate","grid"],or=function(r){var u=r.steps,d=r.columns,l=r.forceUpdate,a=r.grid,v=U()(r,er),F=(0,S.d)(v),C=(0,s.useCallback)(function(y){var c,i;(c=(i=F.current).onCurrentChange)===null||c===void 0||c.call(i,y),l([])},[l,F]),h=(0,s.useMemo)(function(){return u==null?void 0:u.map(function(y,c){return(0,s.createElement)(J,o()(o()({grid:a},y),{},{key:c,layoutType:"StepForm",columns:d[c]}))})},[d,a,u]);return(0,R.jsx)(Y.L0,o()(o()({},v),{},{onCurrentChange:C,children:h}))},ur=or,lr=function(r){var u=r.children;return(0,R.jsx)(R.Fragment,{children:u})},ar=lr,z=e(48646),Q=e(43322),dr=function(r,u){if(r.valueType==="dependency"){var d,l,a,v=(d=r.getFieldProps)===null||d===void 0?void 0:d.call(r);return(0,z.noteOnce)(Array.isArray((l=r.name)!==null&&l!==void 0?l:v==null?void 0:v.name),'SchemaForm: fieldProps.name should be NamePath[] when valueType is "dependency"'),(0,z.noteOnce)(typeof r.columns=="function",'SchemaForm: columns should be a function when valueType is "dependency"'),Array.isArray((a=r.name)!==null&&a!==void 0?a:v==null?void 0:v.name)?(0,s.createElement)(Q.Z,o()(o()({name:r.name},v),{},{key:r.key}),function(F){return!r.columns||typeof r.columns!="function"?null:u.genItems(r.columns(F))}):null}return!0},tr=e(5162),sr=function(r){if(r.valueType==="divider"){var u;return(0,s.createElement)(tr.Z,o()(o()({},(u=r.getFieldProps)===null||u===void 0?void 0:u.call(r)),{},{key:r.key}))}return!0},vr=e(71770),G=e(64696),cr=function(r,u){var d=u.action,l=u.formRef,a=u.type,v=u.originItem,F=o()(o()({},(0,vr.Z)(r,["dataIndex","width","render","renderFormItem","renderText","title"])),{},{name:r.name||r.key||r.dataIndex,width:r.width,render:r!=null&&r.render?function(c,i,V){var m,T,x,E;return r==null||(m=r.render)===null||m===void 0?void 0:m.call(r,c,i,V,d==null?void 0:d.current,o()(o()({type:a},r),{},{key:(T=r.key)===null||T===void 0?void 0:T.toString(),formItemProps:(x=r.getFormItemProps)===null||x===void 0?void 0:x.call(r),fieldProps:(E=r.getFieldProps)===null||E===void 0?void 0:E.call(r)}))}:void 0}),C=function(){return(0,R.jsx)(G.Z,o()(o()({},F),{},{ignoreFormItem:!0}))},h=r!=null&&r.renderFormItem?function(c,i){var V,m,T,x,E=(0,W.Y)(o()(o()({},i),{},{onChange:void 0}));return r==null||(V=r.renderFormItem)===null||V===void 0?void 0:V.call(r,o()(o()({type:a},r),{},{key:(m=r.key)===null||m===void 0?void 0:m.toString(),formItemProps:(T=r.getFormItemProps)===null||T===void 0?void 0:T.call(r),fieldProps:(x=r.getFieldProps)===null||x===void 0?void 0:x.call(r),originProps:v}),o()(o()({},E),{},{defaultRender:C,type:a}),l.current)}:void 0,y=function(){if(r!=null&&r.renderFormItem){var i=h==null?void 0:h(null,{});if(!i||r.ignoreFormItem)return i}return(0,s.createElement)(G.Z,o()(o()({},F),{},{key:[r.key,r.index||0].join("-"),renderFormItem:h}))};return r.dependencies?(0,R.jsx)(Q.Z,{name:r.dependencies||[],children:y},r.key):y()},fr=e(9296),yr=function(r,u){var d=u.genItems;if(r.valueType==="formList"&&r.dataIndex){var l,a;return!r.columns||!Array.isArray(r.columns)?null:(0,s.createElement)(fr.u,o()(o()({},(l=r.getFormItemProps)===null||l===void 0?void 0:l.call(r)),{},{key:r.key,name:r.dataIndex,label:r.label,initialValue:r.initialValue,colProps:r.colProps,rowProps:r.rowProps},(a=r.getFieldProps)===null||a===void 0?void 0:a.call(r)),d(r.columns))}return!0},pr=e(35614),ir=function(r,u){var d=u.genItems;if(r.valueType==="formSet"&&r.dataIndex){var l,a;return!r.columns||!Array.isArray(r.columns)?null:(0,s.createElement)(pr.Z,o()(o()({},(l=r.getFormItemProps)===null||l===void 0?void 0:l.call(r)),{},{key:r.key,initialValue:r.initialValue,name:r.dataIndex,label:r.label,colProps:r.colProps,rowProps:r.rowProps},(a=r.getFieldProps)===null||a===void 0?void 0:a.call(r)),d(r.columns))}return!0},Fr=e(14899),hr=function(r,u){var d=u.genItems;if(r.valueType==="group"){var l;return!r.columns||!Array.isArray(r.columns)?null:(0,R.jsx)(Fr.UW,o()(o()({label:r.label,colProps:r.colProps,rowProps:r.rowProps},(l=r.getFieldProps)===null||l===void 0?void 0:l.call(r)),{},{children:d(r.columns)}),r.key)}return!0},mr=function(r){return r.valueType&&typeof r.valueType=="string"&&["index","indexBorder","option"].includes(r==null?void 0:r.valueType)?null:!0},H=[mr,hr,yr,ir,sr,dr],Pr=function(r,u){for(var d=0;d<H.length;d++){var l=H[d],a=l(r,u);if(a!==!0)return a}return cr(r,u)},Sr=["columns","layoutType","type","action","shouldUpdate","formRef"],Tr={DrawerForm:w.a,QueryFilter:nr.t,LightFilter:q.M,StepForm:Y.L0.StepForm,StepsForm:ur,ModalForm:_.Y,Embed:ar};function xr(t){var r=t.columns,u=t.layoutType,d=u===void 0?"Form":u,l=t.type,a=l===void 0?"form":l,v=t.action,F=t.shouldUpdate,C=F===void 0?function(M,n){return(0,N.P)(M)!==(0,N.P)(n)}:F,h=t.formRef,y=U()(t,Sr),c=Tr[d]||rr.A,i=K.Z.useForm(),V=A()(i,1),m=V[0],T=K.Z.useFormInstance(),x=(0,s.useState)([]),E=A()(x,2),Rr=E[1],Cr=(0,s.useState)(function(){return[]}),X=A()(Cr,2),Ar=X[0],Vr=X[1],P=(0,D.y)(t.form||T||m),$=(0,s.useRef)(),b=(0,S.d)(t),B=(0,s.useCallback)(function(M){return M.filter(function(n){return!(n.hideInForm&&a==="form")}).sort(function(n,f){return f.order||n.order?(f.order||0)-(n.order||0):(f.index||0)-(n.index||0)}).map(function(n,f){var Z=(0,p.h)(n.title,n,"form",(0,R.jsx)(I.G,{label:n.title,tooltip:n.tooltip||n.tip})),Ur=(0,W.Y)({title:Z,label:Z,name:n.name,valueType:(0,p.h)(n.valueType,{}),key:n.key||n.dataIndex||f,columns:n.columns,valueEnum:n.valueEnum,dataIndex:n.dataIndex||n.key,initialValue:n.initialValue,width:n.width,index:n.index,readonly:n.readonly,colSize:n.colSize,colProps:n.colProps,rowProps:n.rowProps,className:n.className,tooltip:n.tooltip||n.tip,dependencies:n.dependencies,proFieldProps:n.proFieldProps,ignoreFormItem:n.ignoreFormItem,getFieldProps:n.fieldProps?function(){return(0,p.h)(n.fieldProps,P.current,n)}:void 0,getFormItemProps:n.formItemProps?function(){return(0,p.h)(n.formItemProps,P.current,n)}:void 0,render:n.render,renderFormItem:n.renderFormItem,renderText:n.renderText,request:n.request,params:n.params,transform:n.transform,convertValue:n.convertValue,debounceTime:n.debounceTime,defaultKeyWords:n.defaultKeyWords});return Pr(Ur,{action:v,type:a,originItem:n,formRef:P,genItems:B})}).filter(function(n){return!!n})},[v,!!P.current,a]),Er=(0,s.useCallback)(function(M,n){var f=b.current.onValuesChange;(C===!0||typeof C=="function"&&C(n,$.current))&&Vr([]),$.current=n,f==null||f(M,n)},[b,C]),jr=(0,s.useMemo)(function(){if(P.current&&!(r.length&&Array.isArray(r[0])))return B(r)},[r,B,Ar,!!P.current]),Lr=(0,s.useMemo)(function(){return d==="StepsForm"?{forceUpdate:Rr,columns:r}:{}},[r,d]);return(0,s.useImperativeHandle)(h,function(){return P.current},[P.current]),(0,R.jsx)(c,o()(o()(o()({},Lr),y),{},{onInit:function(n,f){var Z;h&&(h.current=f),y==null||(Z=y.onInit)===null||Z===void 0||Z.call(y,n,f),P.current=f},form:t.form||m,formRef:P,onValuesChange:Er,children:jr}))}var J=xr},11879:function(k,g,e){e.d(g,{y:function(){return U}});var O=e(54306),o=e.n(O),j=e(50959);function A(){var D=(0,j.useState)(!0),S=o()(D,2),p=S[1],I=(0,j.useCallback)(function(){return p(function(W){return!W})},[]);return I}var L=e(41377);function U(D){var S=A(),p=(0,L.C)(S,D);return p}},41377:function(k,g,e){e.d(g,{C:function(){return o}});var O=e(50959);function o(j,A){var L=(0,O.useMemo)(function(){var U={current:A};return new Proxy(U,{set:function(S,p,I){return Object.is(S[p],I)||(S[p]=I,j(L)),!0}})},[]);return L}}}]);
