(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(19),r=t.n(c),a=t(9),o=t(3),u=t(2),s=t(5),i=t.n(s),l="/api/persons",d={getAllPeople:function(){return i.a.get(l).then((function(e){return e.data}))},createPerson:function(e){return i.a.post(l,e).then((function(e){return e.data}))},updatePerson:function(e,n){return i.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},deletePerson:function(e){return i.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))}},b=t(0),j=function(e){var n=e.setSearchQuery;return Object(b.jsxs)(b.Fragment,{children:["filter shown with"," ",Object(b.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)}})]})},h=function(e){var n=e.newName,t=e.setNewName,c=e.newNumber,r=e.setNewNumber,a=e.handleAddName;return Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{children:["name:"," ",Object(b.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]}),Object(b.jsxs)("div",{children:["number:"," ",Object(b.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)}})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",onClick:a,children:"add"})})]})},m=function(e){var n=e.persons,t=e.searchQuery,c=e.handleDelete;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(b.jsxs)("div",{children:[e.name," ",e.number," ",Object(b.jsx)("button",{onClick:function(){return c(e)},children:"delete"})]},e.name)}))},f=function(e){var n=e.message;return null==n?null:n.success?Object(b.jsx)("div",{className:"success",children:n.message}):Object(b.jsx)("div",{className:"error",children:n.message})},O=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],O=Object(u.useState)(""),p=Object(o.a)(O,2),g=p[0],v=p[1],x=Object(u.useState)(""),w=Object(o.a)(x,2),N=w[0],k=w[1],y=Object(u.useState)(null),P=Object(o.a)(y,2),C=P[0],S=P[1];Object(u.useEffect)((function(){d.getAllPeople().then((function(e){return c(e)}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(f,{message:C}),Object(b.jsx)(j,{setSearchQuery:k}),Object(b.jsx)("h3",{children:"Add a new"}),Object(b.jsx)(h,{newName:i,setNewName:l,newNumber:g,setNewNumber:v,handleAddName:function(e){e.preventDefault();var n,r=(n=i,t.filter((function(e){return e.name===n})));if(1===r.length){if(window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))){var o={name:i,number:g};d.updatePerson(r[0].id,o).then((function(e){var n=Object(a.a)(t),o=n.indexOf(r[0]);n[o]=e,c(n),S({success:!0,message:"Changed ".concat(i,"'s number to ").concat(g)}),setTimeout((function(){S(null)}),5e3)})).catch((function(e){S({error:!0,message:"Error updating ".concat(i,"'s number: ").concat(e)}),setTimeout((function(){S(null)}),5e3)}))}}else{var u={name:i,number:g};d.createPerson(u).then((function(e){var n=Object(a.a)(t);n.push(e),c(n),S({success:!0,message:"Added ".concat(i)}),setTimeout((function(){S(null)}),5e3)})).catch((function(e){S({error:!0,message:"Error adding ".concat(i," to the phonebook: ").concat(e)}),setTimeout((function(){S(null)}),5e3)})),l(""),v("")}}}),Object(b.jsx)("h3",{children:"Numbers"}),Object(b.jsx)(m,{persons:t,searchQuery:N,handleDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&d.deletePerson(e.id).then((function(n){var r=t.indexOf(e),o=Object(a.a)(t);o.splice(r,1),c(o),S({success:!0,message:"".concat(e.name," successfully deleted")}),setTimeout((function(){S(null)}),5e3)})).catch((function(e){S({error:!0,message:"Error removing ".concat(i," from the phonebook: ").concat(e)}),setTimeout((function(){S(null)}),5e3)}))}})]})};t(43);r.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.86a02502.chunk.js.map