(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{BOD2:function(e,t,a){e.exports={container:"antd-pro-layouts-user-layout-container",lang:"antd-pro-layouts-user-layout-lang",content:"antd-pro-layouts-user-layout-content",top:"antd-pro-layouts-user-layout-top",header:"antd-pro-layouts-user-layout-header",logo:"antd-pro-layouts-user-layout-logo",title:"antd-pro-layouts-user-layout-title",desc:"antd-pro-layouts-user-layout-desc"}},Kkfi:function(e,t,a){e.exports={menu:"antd-pro-components-select-lang-index-menu",dropDown:"antd-pro-components-select-lang-index-dropDown"}},jH8a:function(e,t,a){"use strict";a.r(t);var n=a("2Taf"),o=a.n(n),r=a("vZ4D"),l=a.n(r),u=a("l4Ni"),s=a.n(u),c=a("ujKo"),i=a.n(c),p=a("MhPg"),m=a.n(p),d=(a("Pwec"),a("CtXQ")),y=a("q1tI"),h=a.n(y),f=a("Y2fQ"),g=a("MuoO"),v=a("mOP9"),b=a("ggcP"),k=a("ZFw/"),E=a.n(k),w=(a("lUTK"),a("BvKs")),M=a("TSYQ"),N=a.n(M),D=a("+jAw"),O=a("Kkfi"),j=a.n(O),x=(y["PureComponent"],a("BOD2")),K=a.n(x),P=(a("mxmt"),a("tGQQ")),Q=[{key:"help",title:Object(f["formatMessage"])({id:"layout.user.link.help"}),href:""},{key:"privacy",title:Object(f["formatMessage"])({id:"layout.user.link.privacy"}),href:""},{key:"terms",title:Object(f["formatMessage"])({id:"layout.user.link.terms"}),href:""}],C=h.a.createElement(y["Fragment"],null,"Copyright ",h.a.createElement(d["a"],{type:"copyright"})," 2018 \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1"),A=function(e){function t(){return o()(this,t),s()(this,i()(t).apply(this,arguments))}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.route,n=a.routes,o=a.authority;t({type:"menu/getMenuData",payload:{routes:n,authority:o}})}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.location.pathname,n=e.breadcrumbNameMap;return h.a.createElement(E.a,{title:Object(P["a"])(a,n)},h.a.createElement("div",{className:K.a.container},h.a.createElement("div",{className:K.a.lang}),h.a.createElement("div",{className:K.a.content},h.a.createElement("div",{className:K.a.top},h.a.createElement("div",{className:K.a.header},h.a.createElement(v["a"],{to:"/"},h.a.createElement("span",{className:K.a.title},h.a.createElement(d["a"],{type:"schedule",theme:"filled"})," Admin Application")))),t),h.a.createElement(b["a"],{links:Q,copyright:C})))}}]),t}(y["Component"]);t["default"]=Object(g["connect"])(function(e){var t=e.menu;return{menuData:t.menuData,breadcrumbNameMap:t.breadcrumbNameMap}})(A)}}]);