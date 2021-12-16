(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(19),r=t.n(c),a=t(9),s=t(3),u=t(2),o=t(5),i=t.n(o),l="/api/persons",d={getAllPeople:function(){return i.a.get(l).then((function(e){return e.data}))},createPerson:function(e){return i.a.post(l,e).then((function(e){return e.data}))},updatePerson:function(e,n){return i.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},deletePerson:function(e){return i.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))}},j=t(0),b=function(e){var n=e.setSearchQuery;return Object(j.jsxs)(j.Fragment,{children:["filter shown with"," ",Object(j.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)}})]})},h=function(e){var n=e.newName,t=e.setNewName,c=e.newNumber,r=e.setNewNumber,a=e.handleAddName;return Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{children:["name:"," ",Object(j.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]}),Object(j.jsxs)("div",{children:["number:"," ",Object(j.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",onClick:a,children:"add"})})]})},m=function(e){var n=e.persons,t=e.searchQuery,c=e.handleDelete;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(j.jsxs)("div",{children:[e.name," ",e.number," ",Object(j.jsx)("button",{onClick:function(){return c(e)},children:"delete"})]},e.name)}))},f=function(e){var n=e.message;return null==n?null:n.success?Object(j.jsx)("div",{className:"success",children:n.message}):Object(j.jsx)("div",{className:"error",children:n.message})},O=function(){var e=Object(u.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),o=Object(s.a)(r,2),i=o[0],l=o[1],O=Object(u.useState)(""),p=Object(s.a)(O,2),v=p[0],x=p[1],g=Object(u.useState)(""),w=Object(s.a)(g,2),N=w[0],k=w[1],y=Object(u.useState)(null),P=Object(s.a)(y,2),C=P[0],S=P[1];Object(u.useEffect)((function(){d.getAllPeople().then((function(e){return c(e)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(f,{message:C}),Object(j.jsx)(b,{setSearchQuery:k}),Object(j.jsx)("h3",{children:"Add a new"}),Object(j.jsx)(h,{newName:i,setNewName:l,newNumber:v,setNewNumber:x,handleAddName:function(e){e.preventDefault();var n,r=(n=i,t.filter((function(e){return e.name===n})));if(1===r.length){if(window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))){var s={name:i,number:v};d.updatePerson(r[0].id,s).then((function(e){var n=Object(a.a)(t),s=n.indexOf(r[0]);n[s]=e,c(n),S({success:!0,message:"Changed ".concat(i,"'s number to ").concat(v)}),setTimeout((function(){S(null)}),5e3)})).catch((function(e){S({error:!0,message:e.response.data.error}),setTimeout((function(){S(null)}),5e3)}))}}else{var u={name:i,number:v};d.createPerson(u).then((function(e){var n=Object(a.a)(t);n.push(e),c(n),S({success:!0,message:"Added ".concat(i)}),setTimeout((function(){S(null)}),5e3)})).catch((function(e){S({error:!0,message:e.response.data.error}),setTimeout((function(){S(null)}),5e3)})),l(""),x("")}}}),Object(j.jsx)("h3",{children:"Numbers"}),Object(j.jsx)(m,{persons:t,searchQuery:N,handleDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&d.deletePerson(e.id).then((function(n){var r=t.indexOf(e),s=Object(a.a)(t);s.splice(r,1),c(s),S({success:!0,message:"".concat(e.name," successfully deleted")}),setTimeout((function(){S(null)}),5e3)})).catch((function(e){S({error:!0,message:"Error removing ".concat(i," from the phonebook: ").concat(e)}),setTimeout((function(){S(null)}),5e3)}))}})]})};t(43);r.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.cffb0658.chunk.js.map