"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[5185],{98495:function(ye,Y,e){e.d(Y,{S:function(){return y}});var V=e(57213),a=e.n(V),se=e(52510),Z=e.n(se),ce=e(37635),r=e.n(ce),J=e(12342),Q=e.n(J),G=e(7457),ue=e(59861),N=e(84875),fe=e.n(N),d=e(71770),T=e(50959),w=e(10422),f=e(84106),D=e(480),ge=function(v){return Z()({},v.componentCls,{position:"fixed",insetInlineEnd:0,bottom:0,zIndex:99,display:"flex",alignItems:"center",width:"100%",paddingInline:24,paddingBlock:0,boxSizing:"border-box",lineHeight:"64px",backgroundColor:(0,D.uK)(v.colorBgElevated,.6),borderBlockStart:"1px solid ".concat(v.colorSplit),"-webkit-backdrop-filter":"blur(8px)",backdropFilter:"blur(8px)",color:v.colorText,transition:"all 0.2s ease 0s","&-left":{flex:1,color:v.colorText},"&-right":{color:v.colorText,"> *":{marginInlineEnd:8,"&:last-child":{marginBlock:0,marginInline:0}}}})};function $(W){return(0,D.Xj)("ProLayoutFooterToolbar",function(v){var I=a()(a()({},v),{},{componentCls:".".concat(W)});return[ge(I)]})}function he(W,v){var I=v.stylish;return(0,D.Xj)("ProLayoutFooterToolbarStylish",function(O){var U=a()(a()({},O),{},{componentCls:".".concat(W)});return I?[Z()({},"".concat(U.componentCls),I==null?void 0:I(U))]:[]})}var F=e(11527),ae=["children","className","extra","portalDom","style","renderContent"],y=function(v){var I=v.children,O=v.className,U=v.extra,k=v.portalDom,Ce=k===void 0?!0:k,B=v.style,t=v.renderContent,s=Q()(v,ae),l=(0,T.useContext)(ue.ZP.ConfigContext),i=l.getPrefixCls,R=l.getTargetContainer,z=v.prefixCls||i("pro"),j="".concat(z,"-footer-bar"),_=$(j),q=_.wrapSSR,re=_.hashId,c=(0,T.useContext)(f.X),oe=(0,T.useMemo)(function(){var u=c.hasSiderMenu,h=c.isMobile,m=c.siderWidth;if(u)return m?h?"100%":"calc(100% - ".concat(m,"px)"):"100%"},[c.collapsed,c.hasSiderMenu,c.isMobile,c.siderWidth]),ve=(0,T.useMemo)(function(){return(typeof window=="undefined"?"undefined":r()(window))===void 0||(typeof document=="undefined"?"undefined":r()(document))===void 0?null:(R==null?void 0:R())||document.body},[]),me=he("".concat(j,".").concat(j,"-stylish"),{stylish:v.stylish}),C=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"".concat(j,"-left ").concat(re).trim(),children:U}),(0,F.jsx)("div",{className:"".concat(j,"-right ").concat(re).trim(),children:I})]});(0,T.useEffect)(function(){return!c||!(c!=null&&c.setHasFooterToolbar)?function(){}:(c==null||c.setHasFooterToolbar(!0),function(){var u;c==null||(u=c.setHasFooterToolbar)===null||u===void 0||u.call(c,!1)})},[]);var n=(0,F.jsx)("div",a()(a()({className:fe()(O,re,j,Z()({},"".concat(j,"-stylish"),!!v.stylish)),style:a()({width:oe},B)},(0,d.Z)(s,["prefixCls"])),{},{children:t?t(a()(a()(a()({},v),c),{},{leftWidth:oe}),C):C})),o=!(0,G.j)()||!Ce||!ve?n:(0,w.createPortal)(n,ve,j);return me.wrapSSR(q((0,F.jsx)(T.Fragment,{children:o},j)))}},3240:function(ye,Y,e){e.d(Y,{f:function(){return T}});var V=e(52510),a=e.n(V),se=e(59861),Z=e(84875),ce=e.n(Z),r=e(50959),J=e(84106),Q=e(57213),G=e.n(Q),ue=e(480),N=function(f){return a()({},f.componentCls,{width:"100%","&-wide":{maxWidth:1152,margin:"0 auto"}})};function fe(w){return(0,ue.Xj)("ProLayoutGridContent",function(f){var D=G()(G()({},f),{},{componentCls:".".concat(w)});return[N(D)]})}var d=e(11527),T=function(f){var D=(0,r.useContext)(J.X),ge=f.children,$=f.contentWidth,he=f.className,F=f.style,ae=(0,r.useContext)(se.ZP.ConfigContext),y=ae.getPrefixCls,W=f.prefixCls||y("pro"),v=$||D.contentWidth,I="".concat(W,"-grid-content"),O=fe(I),U=O.wrapSSR,k=O.hashId,Ce=v==="Fixed";return U((0,d.jsx)("div",{className:ce()(I,k,he,a()({},"".concat(I,"-wide"),Ce)),style:F,children:(0,d.jsx)("div",{className:"".concat(W,"-grid-content-children ").concat(k).trim(),children:ge})}))}},55185:function(ye,Y,e){e.d(Y,{_z:function(){return ve},H_:function(){return re},yy:function(){return me}});var V=e(52510),a=e.n(V),se=e(12342),Z=e.n(se),ce=e(57213),r=e.n(ce),J=e(37635),Q=e.n(J),G=e(84318),ue=e(7142),N=e(37098),fe=e(59861),d=e(99015),T=e(84875),w=e.n(T),f=e(50959),D=e(84106),ge=e(98495),$=e(3240),he=e(4801),F=e(70514),ae=e(38855),y=e(54306),W=e.n(y),v=e(480),I=[576,768,992,1200].map(function(C){return"@media (max-width: ".concat(C,"px)")}),O=W()(I,4),U=O[0],k=O[1],Ce=O[2],B=O[3],t=function(n){var o,u,h,m,E,M,S,b,x,p,ee,L,A,K,ie,X,P,g,H,le,ne;return a()({},n.componentCls,(ne={position:"relative","&-children-container":{paddingBlock:(o=n.layout)===null||o===void 0||(u=o.pageContainer)===null||u===void 0?void 0:u.paddingBlockPageContainerContent,paddingInline:(h=n.layout)===null||h===void 0||(m=h.pageContainer)===null||m===void 0?void 0:m.paddingInlinePageContainerContent},"&-affix":a()({},"".concat(n.antCls,"-affix"),a()({},"".concat(n.componentCls,"-warp"),{backgroundColor:(E=n.layout)===null||E===void 0||(M=E.pageContainer)===null||M===void 0?void 0:M.colorBgPageContainerFixed,transition:"background-color 0.3s",boxShadow:"0 2px 8px #f0f1f2"}))},a()(ne,"& &-warp-page-header",a()({paddingBlockStart:((S=(b=n.layout)===null||b===void 0||(x=b.pageContainer)===null||x===void 0?void 0:x.paddingBlockPageContainerContent)!==null&&S!==void 0?S:40)/3,paddingBlockEnd:((p=(ee=n.layout)===null||ee===void 0||(L=ee.pageContainer)===null||L===void 0?void 0:L.paddingBlockPageContainerContent)!==null&&p!==void 0?p:40)/2,paddingInlineStart:(A=n.layout)===null||A===void 0||(K=A.pageContainer)===null||K===void 0?void 0:K.paddingInlinePageContainerContent,paddingInlineEnd:(ie=n.layout)===null||ie===void 0||(X=ie.pageContainer)===null||X===void 0?void 0:X.paddingInlinePageContainerContent},"& ~ ".concat(n.proComponentsCls,"-grid-content"),a()({},"".concat(n.proComponentsCls,"-page-container-children-content"),{paddingBlock:((P=(g=n.layout)===null||g===void 0||(H=g.pageContainer)===null||H===void 0?void 0:H.paddingBlockPageContainerContent)!==null&&P!==void 0?P:24)/3}))),a()(ne,"&-detail",a()({display:"flex"},U,{display:"block"})),a()(ne,"&-main",{width:"100%"}),a()(ne,"&-row",a()({display:"flex",width:"100%"},k,{display:"block"})),a()(ne,"&-content",{flex:"auto",width:"100%"}),a()(ne,"&-extraContent",(le={flex:"0 1 auto",minWidth:"242px",marginInlineStart:88,textAlign:"end"},a()(le,B,{marginInlineStart:44}),a()(le,Ce,{marginInlineStart:20}),a()(le,k,{marginInlineStart:0,textAlign:"start"}),a()(le,U,{marginInlineStart:0}),le)),ne))};function s(C,n){return(0,v.Xj)("ProLayoutPageContainer",function(o){var u=r()(r()({},o),{},{componentCls:".".concat(C)},n);return[t(u)]})}function l(C,n){var o=n.stylish;return(0,v.Xj)("ProLayoutPageContainerStylish",function(u){var h=r()(r()({},u),{},{componentCls:".".concat(C)});return o?[a()({},"div".concat(h.componentCls),o==null?void 0:o(h))]:[]})}var i=e(11527),R=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","childrenContentStyle","style","prefixCls","hashId","value","breadcrumbRender"],z=["children","loading","className","style","footer","affixProps","token","fixedHeader","breadcrumbRender","footerToolBarProps","childrenContentStyle"];function j(C){return Q()(C)==="object"?C:{spinning:C}}var _=function(n){var o=n.tabList,u=n.tabActiveKey,h=n.onTabChange,m=n.hashId,E=n.tabBarExtraContent,M=n.tabProps,S=n.prefixedClassName;return Array.isArray(o)||E?(0,i.jsx)(ue.Z,r()(r()({className:"".concat(S,"-tabs ").concat(m).trim(),activeKey:u,onChange:function(x){h&&h(x)},tabBarExtraContent:E,items:o==null?void 0:o.map(function(b,x){var p;return r()(r()({label:b.tab},b),{},{key:((p=b.key)===null||p===void 0?void 0:p.toString())||(x==null?void 0:x.toString())})})},M),{},{children:o==null?void 0:o.map(function(b,x){return(0,i.jsx)(ue.Z.TabPane,r()({tab:b.tab},b),b.key||x)})})):null},q=function(n,o,u,h){return!n&&!o?null:(0,i.jsx)("div",{className:"".concat(u,"-detail ").concat(h).trim(),children:(0,i.jsx)("div",{className:"".concat(u,"-main ").concat(h).trim(),children:(0,i.jsxs)("div",{className:"".concat(u,"-row ").concat(h).trim(),children:[n&&(0,i.jsx)("div",{className:"".concat(u,"-content ").concat(h).trim(),children:n}),o&&(0,i.jsx)("div",{className:"".concat(u,"-extraContent ").concat(h).trim(),children:o})]})})})},re=function(n){var o=(0,f.useContext)(D.X);return(0,i.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:(0,i.jsx)(N.Z,r()(r()(r()({},o==null?void 0:o.breadcrumb),o==null?void 0:o.breadcrumbProps),n))})},c=function(n){var o,u=n.title,h=n.content,m=n.pageHeaderRender,E=n.header,M=n.prefixedClassName,S=n.extraContent,b=n.childrenContentStyle,x=n.style,p=n.prefixCls,ee=n.hashId,L=n.value,A=n.breadcrumbRender,K=Z()(n,R),ie=function(){if(A)return A};if(m===!1)return null;if(m)return(0,i.jsxs)(i.Fragment,{children:[" ",m(r()(r()({},n),L))]});var X=u;!u&&u!==!1&&(X=L.title);var P=r()(r()(r()({},L),{},{title:X},K),{},{footer:_(r()(r()({},K),{},{hashId:ee,breadcrumbRender:A,prefixedClassName:M}))},E),g=P,H=g.breadcrumb,le=(!H||!(H!=null&&H.itemRender)&&!(H!=null&&(o=H.items)!==null&&o!==void 0&&o.length))&&!A;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(ne){return!P[ne]})&&le&&!h&&!S?null:(0,i.jsx)(he.m,r()(r()({},P),{},{className:"".concat(M,"-warp-page-header ").concat(ee).trim(),breadcrumb:A===!1?void 0:r()(r()({},P.breadcrumb),L.breadcrumbProps),breadcrumbRender:ie(),prefixCls:p,children:(E==null?void 0:E.children)||q(h,S,M,ee)}))},oe=function(n){var o,u,h,m,E=n.children,M=n.loading,S=M===void 0?!1:M,b=n.className,x=n.style,p=n.footer,ee=n.affixProps,L=n.token,A=n.fixedHeader,K=n.breadcrumbRender,ie=n.footerToolBarProps,X=n.childrenContentStyle,P=Z()(n,z),g=(0,f.useContext)(D.X);(0,f.useEffect)(function(){var te;return!g||!(g!=null&&g.setHasPageContainer)?function(){}:(g==null||(te=g.setHasPageContainer)===null||te===void 0||te.call(g,function(xe){return xe+1}),function(){var xe;g==null||(xe=g.setHasPageContainer)===null||xe===void 0||xe.call(g,function(He){return He-1})})},[]);var H=(0,f.useContext)(G.L_),le=H.token,ne=(0,f.useContext)(fe.ZP.ConfigContext),Be=ne.getPrefixCls,be=n.prefixCls||Be("pro"),de="".concat(be,"-page-container"),pe=s(de,L),Re=pe.wrapSSR,Pe=pe.hashId,Te=l("".concat(de,".").concat(de,"-stylish"),{stylish:n.stylish}),De=(0,f.useMemo)(function(){var te;return K==!1?!1:K||(P==null||(te=P.header)===null||te===void 0?void 0:te.breadcrumbRender)},[K,P==null||(o=P.header)===null||o===void 0?void 0:o.breadcrumbRender]),Se=c(r()(r()({},P),{},{breadcrumbRender:De,ghost:!0,hashId:Pe,prefixCls:void 0,prefixedClassName:de,value:g})),je=(0,f.useMemo)(function(){if(f.isValidElement(S))return S;if(typeof S=="boolean"&&!S)return null;var te=j(S);return te.spinning?(0,i.jsx)(F.S,r()({},te)):null},[S]),Ie=(0,f.useMemo)(function(){return E?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:w()("".concat(de,"-children-container ").concat(Pe).trim()),style:X,children:E})}):null},[E,de,X,Pe]),Ee=(0,f.useMemo)(function(){var te=je||Ie;if(n.waterMarkProps||g.waterMarkProps){var xe=r()(r()({},g.waterMarkProps),n.waterMarkProps);return(0,i.jsx)(ae.D,r()(r()({},xe),{},{children:te}))}return te},[n.waterMarkProps,g.waterMarkProps,je,Ie]),Me=w()(de,Pe,b,(u={},a()(u,"".concat(de,"-with-footer"),p),a()(u,"".concat(de,"-with-affix"),A&&Se),a()(u,"".concat(de,"-stylish"),!!P.stylish),u));return Re(Te.wrapSSR((0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:x,className:Me,children:[A&&Se?(0,i.jsx)(d.Z,r()(r()({offsetTop:g.hasHeader&&g.fixedHeader?(h=le.layout)===null||h===void 0||(m=h.header)===null||m===void 0?void 0:m.heightLayoutHeader:1},ee),{},{className:"".concat(de,"-affix ").concat(Pe).trim(),children:(0,i.jsx)("div",{className:"".concat(de,"-warp ").concat(Pe).trim(),children:Se})})):Se,Ee&&(0,i.jsx)($.f,{children:Ee})]}),p&&(0,i.jsx)(ge.S,r()(r()({stylish:P.footerStylish,prefixCls:be},ie),{},{children:p}))]})))},ve=function(n){return(0,i.jsx)(G._Y,{needDeps:!0,children:(0,i.jsx)(oe,r()({},n))})},me=function(n){var o=(0,f.useContext)(D.X);return c(r()(r()({},n),{},{hashId:"",value:o}))}},4801:function(ye,Y,e){e.d(Y,{m:function(){return Ce}});var V=e(52510),a=e.n(V),se=e(54306),Z=e.n(se),ce=e(57213),r=e.n(ce),J=e(92468),Q=e.n(J),G=e(52102),ue=e.n(G),N=e(37098),fe=e(14848),d=e(22803),T=e(59861),w=e(84875),f=e.n(w),D=e(71860),ge=e(50959),$=e(480),he=function(){return{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},F=function(t){var s,l;return a()({},t.componentCls,r()(r()({},$.Wf===null||$.Wf===void 0?void 0:(0,$.Wf)(t)),{},(l={position:"relative",backgroundColor:t.pageHeaderBgGhost,paddingBlock:t.pageHeaderPaddingVertical+2,paddingInline:t.pageHeaderPadding,"& &-has-breadcrumb":{paddingBlockStart:t.pageHeaderPaddingBreadCrumb},"& &-has-footer":{paddingBlockEnd:0},"& &-back":a()({marginInlineEnd:t.margin,fontSize:16,lineHeight:1,"&-button":r()(r()({fontSize:16},$.Nd===null||$.Nd===void 0?void 0:(0,$.Nd)(t)),{},{color:t.pageHeaderColorBack,cursor:"pointer"})},"".concat(t.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:0})},a()(l,"& ".concat("ant","-divider-vertical"),{height:14,marginBlock:0,marginInline:t.marginSM,verticalAlign:"middle"}),a()(l,"& &-breadcrumb + &-heading",{marginBlockStart:t.marginXS}),a()(l,"& &-heading",{display:"flex",justifyContent:"space-between","&-left":{display:"flex",alignItems:"center",marginBlock:t.marginXS/2,marginInlineEnd:0,marginInlineStart:0,overflow:"hidden"},"&-title":r()(r()({marginInlineEnd:t.marginSM,marginBlockEnd:0,color:t.colorTextHeading,fontWeight:600,fontSize:t.pageHeaderFontSizeHeaderTitle,lineHeight:t.controlHeight+"px"},he()),{},a()({},"".concat(t.componentCls,"-rlt &"),{marginInlineEnd:0,marginInlineStart:t.marginSM})),"&-avatar":a()({marginInlineEnd:t.marginSM},"".concat(t.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:t.marginSM}),"&-tags":a()({},"".concat(t.componentCls,"-rlt &"),{float:"right"}),"&-sub-title":r()(r()({marginInlineEnd:t.marginSM,color:t.colorTextSecondary,fontSize:t.pageHeaderFontSizeHeaderSubTitle,lineHeight:t.lineHeight},he()),{},a()({},"".concat(t.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:12})),"&-extra":(s={marginBlock:t.marginXS/2,marginInlineEnd:0,marginInlineStart:0,whiteSpace:"nowrap","> *":a()({"white-space":"unset"},"".concat(t.componentCls,"-rlt &"),{marginInlineEnd:t.marginSM,marginInlineStart:0})},a()(s,"".concat(t.componentCls,"-rlt &"),{float:"left"}),a()(s,"*:first-child",a()({},"".concat(t.componentCls,"-rlt &"),{marginInlineEnd:0})),s)}),a()(l,"&-content",{paddingBlockStart:t.pageHeaderPaddingContentPadding}),a()(l,"&-footer",{marginBlockStart:t.margin}),a()(l,"&-compact &-heading",{flexWrap:"wrap"}),a()(l,"&-wide",{maxWidth:1152,margin:"0 auto"}),a()(l,"&-rtl",{direction:"rtl"}),l)))};function ae(B){return(0,$.Xj)("ProLayoutPageHeader",function(t){var s=r()(r()({},t),{},{componentCls:".".concat(B),pageHeaderBgGhost:"transparent",pageHeaderPadding:16,pageHeaderPaddingVertical:4,pageHeaderPaddingBreadCrumb:t.paddingSM,pageHeaderColorBack:t.colorTextHeading,pageHeaderFontSizeHeaderTitle:t.fontSizeHeading4,pageHeaderFontSizeHeaderSubTitle:14,pageHeaderPaddingContentPadding:t.paddingSM});return[F(s)]})}var y=e(11527),W=function(t,s,l,i){return!l||!i?null:(0,y.jsx)("div",{className:"".concat(t,"-back ").concat(s).trim(),children:(0,y.jsx)("div",{role:"button",onClick:function(z){i==null||i(z)},className:"".concat(t,"-back-button ").concat(s).trim(),"aria-label":"back",children:l})})},v=function(t,s){var l;return(l=t.items)!==null&&l!==void 0&&l.length?(0,y.jsx)(N.Z,r()(r()({},t),{},{className:f()("".concat(s,"-breadcrumb"),t.className)})):null},I=function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return t.backIcon!==void 0?t.backIcon:s==="rtl"?(0,y.jsx)(ue(),{}):(0,y.jsx)(Q(),{})},O=function(t,s){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",i=arguments.length>3?arguments[3]:void 0,R=s.title,z=s.avatar,j=s.subTitle,_=s.tags,q=s.extra,re=s.onBack,c="".concat(t,"-heading"),oe=R||j||_||q;if(!oe)return null;var ve=I(s,l),me=W(t,i,ve,re),C=me||z||oe;return(0,y.jsxs)("div",{className:c+" "+i,children:[C&&(0,y.jsxs)("div",{className:"".concat(c,"-left ").concat(i).trim(),children:[me,z&&(0,y.jsx)(fe.C,r()({className:f()("".concat(c,"-avatar"),i,z.className)},z)),R&&(0,y.jsx)("span",{className:"".concat(c,"-title ").concat(i).trim(),title:typeof R=="string"?R:void 0,children:R}),j&&(0,y.jsx)("span",{className:"".concat(c,"-sub-title ").concat(i).trim(),title:typeof j=="string"?j:void 0,children:j}),_&&(0,y.jsx)("span",{className:"".concat(c,"-tags ").concat(i).trim(),children:_})]}),q&&(0,y.jsx)("span",{className:"".concat(c,"-extra ").concat(i).trim(),children:(0,y.jsx)(d.Z,{children:q})})]})},U=function(t,s,l){return s?(0,y.jsx)("div",{className:"".concat(t,"-footer ").concat(l).trim(),children:s}):null},k=function(t,s,l){return(0,y.jsx)("div",{className:"".concat(t,"-content ").concat(l).trim(),children:s})},Ce=function(t){var s,l,i=ge.useState(!1),R=Z()(i,2),z=R[0],j=R[1],_=function(g){var H=g.width;return j(H<768)},q=ge.useContext(T.ZP.ConfigContext),re=q.getPrefixCls,c=q.direction,oe=t.prefixCls,ve=t.style,me=t.footer,C=t.children,n=t.breadcrumb,o=t.breadcrumbRender,u=t.className,h=t.contentWidth,m=re("page-header",oe),E=ae(m),M=E.wrapSSR,S=E.hashId,b=function(){return n&&!(n!=null&&n.items)&&n!==null&&n!==void 0&&n.routes&&(n.items=n.routes),n!=null&&n.items?v(n,m):null},x=b(),p=n&&"props"in n,ee=(s=o==null?void 0:o(r()(r()({},t),{},{prefixCls:m}),x))!==null&&s!==void 0?s:x,L=p?n:ee,A=f()(m,S,u,(l={},a()(l,"".concat(m,"-has-breadcrumb"),!!L),a()(l,"".concat(m,"-has-footer"),!!me),a()(l,"".concat(m,"-rtl"),c==="rtl"),a()(l,"".concat(m,"-compact"),z),a()(l,"".concat(m,"-wide"),h==="Fixed"),a()(l,"".concat(m,"-ghost"),!0),l)),K=O(m,t,c,S),ie=C&&k(m,C,S),X=U(m,me,S);return!L&&!K&&!X&&!ie?null:M((0,y.jsx)(D.Z,{onResize:_,children:(0,y.jsxs)("div",{className:A,style:ve,children:[L,K,ie,X]})}))}},70514:function(ye,Y,e){e.d(Y,{S:function(){return G}});var V=e(57213),a=e.n(V),se=e(12342),Z=e.n(se),ce=e(34179),r=e(50959),J=e(11527),Q=["isLoading","pastDelay","timedOut","error","retry"],G=function(N){var fe=N.isLoading,d=N.pastDelay,T=N.timedOut,w=N.error,f=N.retry,D=Z()(N,Q);return(0,J.jsx)("div",{style:{paddingBlockStart:100,textAlign:"center"},children:(0,J.jsx)(ce.Z,a()({size:"large"},D))})}},38855:function(ye,Y,e){e.d(Y,{D:function(){return N}});var V=e(57213),a=e.n(V),se=e(54306),Z=e.n(se),ce=e(59861),r=e(84875),J=e.n(r),Q=e(50959),G=e(11527),ue=function(d){if(!d)return 1;var T=d.backingStorePixelRatio||d.webkitBackingStorePixelRatio||d.mozBackingStorePixelRatio||d.msBackingStorePixelRatio||d.oBackingStorePixelRatio||1;return(window.devicePixelRatio||1)/T},N=function(d){var T=d.children,w=d.style,f=d.className,D=d.markStyle,ge=d.markClassName,$=d.zIndex,he=$===void 0?9:$,F=d.gapX,ae=F===void 0?212:F,y=d.gapY,W=y===void 0?222:y,v=d.width,I=v===void 0?120:v,O=d.height,U=O===void 0?64:O,k=d.rotate,Ce=k===void 0?-22:k,B=d.image,t=d.content,s=d.offsetLeft,l=d.offsetTop,i=d.fontStyle,R=i===void 0?"normal":i,z=d.fontWeight,j=z===void 0?"normal":z,_=d.fontColor,q=_===void 0?"rgba(0,0,0,.15)":_,re=d.fontSize,c=re===void 0?16:re,oe=d.fontFamily,ve=oe===void 0?"sans-serif":oe,me=d.prefixCls,C=(0,Q.useContext)(ce.ZP.ConfigContext),n=C.getPrefixCls,o=n("pro-layout-watermark",me),u=J()("".concat(o,"-wrapper"),f),h=J()(o,ge),m=(0,Q.useState)(""),E=Z()(m,2),M=E[0],S=E[1];return(0,Q.useEffect)(function(){var b=document.createElement("canvas"),x=b.getContext("2d"),p=ue(x),ee="".concat((ae+I)*p,"px"),L="".concat((W+U)*p,"px"),A=s||ae/2,K=l||W/2;if(b.setAttribute("width",ee),b.setAttribute("height",L),x){x.translate(A*p,K*p),x.rotate(Math.PI/180*Number(Ce));var ie=I*p,X=U*p;if(B){var P=new Image;P.crossOrigin="anonymous",P.referrerPolicy="no-referrer",P.src=B,P.onload=function(){x.drawImage(P,0,0,ie,X),S(b.toDataURL())}}else if(t){var g=Number(c)*p;x.font="".concat(R," normal ").concat(j," ").concat(g,"px/").concat(X,"px ").concat(ve),x.fillStyle=q,Array.isArray(t)?t==null||t.forEach(function(H,le){return x.fillText(H,0,le*g)}):x.fillText(t,0,0),S(b.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[ae,W,s,l,Ce,R,j,I,U,ve,q,B,t,c]),(0,G.jsxs)("div",{style:a()({position:"relative"},w),className:u,children:[T,(0,G.jsx)("div",{className:h,style:a()(a()({zIndex:he,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(ae+I,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},M?{backgroundImage:"url('".concat(M,"')")}:{}),D)})]})}},84106:function(ye,Y,e){e.d(Y,{X:function(){return a}});var V=e(50959),a=(0,V.createContext)({})}}]);
