(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=(c(9),c(10),c(1)),i=c(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],r=function(){var e=Object(o.useState)("Jam"),t=Object(a.a)(e,2),c=t[0],s=t[1];function n(){s("")}return Object(i.jsxs)("main",{className:"section container",children:[c?Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(c," is selected"),Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:n})]}):Object(i.jsx)("h1",{className:"title is-flex is-align-items-center",children:"No goods selected"}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:l.map((function(e){var t=c===e,a=t?"has-background-success-light":"",o=t?"button is-info":"button",l=t?"-":"+",r=t?"RemoveButton":"AddButton";return Object(i.jsxs)("tr",{"data-cy":"Good",className:a,children:[Object(i.jsx)("td",{children:Object(i.jsx)("button",{"data-cy":r,type:"button",className:o,onClick:function(){s(e),"-"===l&&n()},children:l})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]},e)}))})})]})};n.a.render(Object(i.jsx)(r,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1f144dfe.chunk.js.map