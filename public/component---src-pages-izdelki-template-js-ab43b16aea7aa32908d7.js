(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5cmr":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return m}));var l=t("q1tI"),n=t.n(l),i=t("1g+t"),r=t("i/rx"),c=t("/4kY"),m="2767164971";a.default=function(e){var a=e.data;return n.a.createElement(i.a,null,n.a.createElement(c.a,{title:"Izdelki"}),n.a.createElement(r.a,{items:a.allContentfulIzdelki.edges}))}},"i/rx":function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),i=t("4c3E"),r=t.n(i),c=t("kYLy"),m=t("uZZK"),s=t.n(m),o=t("wx14"),k=t("zLVn"),E=t("TSYQ"),u=t.n(E),d=t("JCAc"),v=t("vUet"),b=t("ILyh"),z=n.a.createContext(null);var f=n.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"button":t,r=e.children,c=e.eventKey,m=e.onClick,s=Object(k.a)(e,["as","children","eventKey","onClick"]),E=function(e,a){var t=Object(l.useContext)(z),n=Object(l.useContext)(b.a);return function(l){n(e===t?null:e,l),a&&a(l)}}(c,m);return n.a.createElement(i,Object(o.a)({ref:a,onClick:E},s),r)})),y=t("vYJ8"),p=n.a.forwardRef((function(e,a){var t=e.children,i=e.eventKey,r=Object(k.a)(e,["children","eventKey"]),c=Object(l.useContext)(z);return n.a.createElement(y.a,Object(o.a)({ref:a,in:c===i},r),n.a.createElement("div",null,n.a.Children.only(t)))}));p.displayName="AccordionCollapse";var N=p,K=n.a.forwardRef((function(e,a){var t=Object(d.b)(e,{activeKey:"onSelect"}),l=t.as,i=void 0===l?"div":l,r=t.activeKey,c=t.bsPrefix,m=t.children,s=t.className,E=t.onSelect,f=Object(k.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return c=Object(v.b)(c,"accordion"),n.a.createElement(z.Provider,{value:r},n.a.createElement(b.a.Provider,{value:E},n.a.createElement(i,Object(o.a)({ref:a},f,{className:u()(s,c)}),m)))}));K.Toggle=f,K.Collapse=N;var h=K,L=t("dbZe"),g=n.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,i=e.size,r=e.active,c=e.className,m=e.block,s=e.type,E=e.as,d=Object(k.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(v.b)(t,"btn"),z=u()(c,b,r&&"active",b+"-"+l,m&&b+"-block",i&&b+"-"+i);if(d.href)return n.a.createElement(L.a,Object(o.a)({},d,{as:E,ref:a,className:u()(z,d.disabled&&"disabled")}));a&&(d.ref=a),E||(d.type=s);var f=E||"button";return n.a.createElement(f,Object(o.a)({},d,{className:z}))}));g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var C=g,O=t("ma3e"),j=t("Wbzz"),T=function(){return n.a.createElement("aside",{className:s.a.sidebar},n.a.createElement(h,{defaultActiveKey:"1"},n.a.createElement(h.Toggle,{as:C,variant:"link",eventKey:"0",className:s.a.tabTitle},"Otroški dodatki ",n.a.createElement(O.h,null)),n.a.createElement(h.Collapse,{eventKey:"0"},n.a.createElement("ul",{className:s.a.tabItems},n.a.createElement(j.Link,{to:"/izdelki/igre"},n.a.createElement("li",null,"Igre")),n.a.createElement(j.Link,{to:"/izdelki/otroske-ure"},n.a.createElement("li",null,"Otroške ure")),n.a.createElement(j.Link,{to:"/izdelki/napis-imen"},n.a.createElement("li",null,"Napis imen")))),n.a.createElement(h,{defaultActiveKey:"1"},n.a.createElement(h.Toggle,{as:C,variant:"link",eventKey:"0",className:s.a.tabTitle},"Krst, birma, poroka ",n.a.createElement(O.h,null)),n.a.createElement(h.Collapse,{eventKey:"0"},n.a.createElement("ul",{className:s.a.tabItems},n.a.createElement(j.Link,{to:"/izdelki/vabila"},n.a.createElement("li",null,"Vabila")),n.a.createElement(j.Link,{to:"/izdelki/drzala-za-prstane"},n.a.createElement("li",null,"Držala za prstane")),n.a.createElement(j.Link,{to:"/izdelki/naprstni-sopki"},n.a.createElement("li",null,"Naprstni šopki"))))),n.a.createElement(h,{defaultActiveKey:"1"},n.a.createElement(h.Toggle,{as:C,variant:"link",eventKey:"0",className:s.a.tabTitle},"Darila ",n.a.createElement(O.h,null)),n.a.createElement(h.Collapse,{eventKey:"0"},n.a.createElement("ul",{className:s.a.tabItems},n.a.createElement(j.Link,{to:"/izdelki/skatle"},n.a.createElement("li",null,"Škatle")),n.a.createElement(j.Link,{to:"/izdelki/tabla-za-kozarce-s-posvetilom"},n.a.createElement("li",null,"Table za kozarce")),n.a.createElement(j.Link,{to:"/izdelki/ure"},n.a.createElement("li",null,"Ure"))))),n.a.createElement(h,{defaultActiveKey:"1"},n.a.createElement(h.Toggle,{as:C,variant:"link",eventKey:"0",className:s.a.tabTitle},"Nakit ",n.a.createElement(O.h,null)),n.a.createElement(h.Collapse,{eventKey:"0"},n.a.createElement("ul",{className:s.a.tabItems},n.a.createElement(j.Link,{to:"/izdelki/uhani"},n.a.createElement("li",null,"Uhani")),n.a.createElement(j.Link,{to:"/izdelki/verizice"},n.a.createElement("li",null,"Verižice"))))),n.a.createElement(h,{defaultActiveKey:"1"},n.a.createElement(h.Toggle,{as:C,variant:"link",eventKey:"0",className:s.a.tabTitle},"Dom ",n.a.createElement(O.h,null)),n.a.createElement(h.Collapse,{eventKey:"0"},n.a.createElement("ul",{className:s.a.tabItems},n.a.createElement(j.Link,{to:"/izdelki/dekoracija"},n.a.createElement("li",null,"Dekoracije")),n.a.createElement(j.Link,{to:"/izdelki/dodatki"},n.a.createElement("li",null,"Dodatki")),n.a.createElement(j.Link,{to:"/izdelki/podstavek-za-posodo-kozarce"},n.a.createElement("li",null,"Podstavki za posode & kozarce")),n.a.createElement(j.Link,{to:"/izdelki/hisice"},n.a.createElement("li",null,"Hišice"))))),n.a.createElement(h,{defaultActiveKey:"1"},n.a.createElement(h.Toggle,{as:C,variant:"link",eventKey:"0",className:s.a.tabTitle},"Božično - novoletni ",n.a.createElement(O.h,null)),n.a.createElement(h.Collapse,{eventKey:"0"},n.a.createElement("ul",{className:s.a.tabItems},n.a.createElement(j.Link,{to:"/izdelki/smrekice"},n.a.createElement("li",null,"Smrekice")),n.a.createElement(j.Link,{to:"/izdelki/okraski"},n.a.createElement("li",null,"Okraski")),n.a.createElement(j.Link,{to:"/izdelki/svecniki"},n.a.createElement("li",null,"Svečniki")),n.a.createElement(j.Link,{to:"/izdelki/voscila"},n.a.createElement("li",null,"Voščila"))))),n.a.createElement(h,{defaultActiveKey:"1"},n.a.createElement(h.Toggle,{as:C,variant:"link",eventKey:"0",className:s.a.tabTitle},"Ostalo ",n.a.createElement(O.h,null)),n.a.createElement(h.Collapse,{eventKey:"0"},n.a.createElement("ul",{className:s.a.tabItems},n.a.createElement(j.Link,{to:"/izdelki/dekorativni-izdelki"},n.a.createElement("li",null,"Dekorativni izdelki")),n.a.createElement(j.Link,{to:"/izdelki/svecke"},n.a.createElement("li",null,"Svečke")))))))};a.a=function(e){var a=e.items;return n.a.createElement("main",{className:r.a.itemContainer},n.a.createElement(T,{className:r.a.sidebar}),n.a.createElement("div",{className:r.a.items},a.length>=1?a.map((function(e){var a=e.node;return n.a.createElement(c.a,{key:a.contentful_id,node:a})})):n.a.createElement("h5",{className:r.a.notFound},"Za ta izbor ni najdenih nobenih izdelkov.")))}}}]);
//# sourceMappingURL=component---src-pages-izdelki-template-js-ab43b16aea7aa32908d7.js.map