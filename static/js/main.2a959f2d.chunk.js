(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={wrapper:"ContactForm_wrapper__2G4JD",title_form:"ContactForm_title_form__29Lla",input:"ContactForm_input__1wM0F",add_contact_btn:"ContactForm_add_contact_btn__3I8ym"}},11:function(t,e,n){t.exports={filter_title:"Filter_filter_title__2B59T"}},12:function(t,e,n){t.exports={wrapper:"App_wrapper__3GK-f"}},14:function(t,e,n){t.exports=n(22)},22:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(13),l=n(3),u=n(4),s=n(6),m=n(5),p=n(24),f=n(10),h=n(1),_=n.n(h),b=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(f.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("div",{className:_.a.wrapper},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",{className:_.a.title_form},"Name"),r.a.createElement("input",{className:_.a.input,value:e,name:"name",onChange:this.handleChange}),r.a.createElement("h3",{className:_.a.title_form},"Number"),r.a.createElement("input",{className:_.a.input,value:n,name:"number",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:_.a.add_contact_btn,type:"submit"},"Add contact")))}}]),n}(a.Component),d=n(7),v=n.n(d),C=n(2),g=n.n(C),E=function(t){var e=t.contacts,n=t.onDeleteContact;return r.a.createElement("ul",null,e.map((function(t){var e=t.name,a=t.id,c=t.number;return r.a.createElement("li",{key:a,className:v.a.contact},e,": ",c,r.a.createElement("button",{type:"button",className:v.a.remove_contact_btn,onClick:function(){return n(a)}},"Delete"))})))};E.proprTypes={contacts:g.a.arrayOf(g.a.exact({name:g.a.string.isRequired,id:g.a.string.isRequired,number:g.a.string.isRequired}).isRequired).isRequired};var y=E,w=n(11),F=n.n(w),N=function(t){var e=t.value,n=t.changeFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:F.a.filter_title}," Find contacts by name"),r.a.createElement("input",{type:"text",value:e,onChange:n}))},O=n(12),j=n.n(O),S=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert("".concat(n," is alredy in contacts"));else{var r={id:Object(p.a)(),name:n,number:a};t.setState((function(t){return{contacts:[r].concat(Object(i.a)(t.contacts))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)})),n=this.state,a=n.contacts,c=n.filter;return r.a.createElement("div",{className:j.a.wrapper},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(b,{onSubmit:this.addContact}),r.a.createElement("h2",null,"Contacts"),a.length>=2?r.a.createElement(N,{changeFilter:this.changeFilter,value:c}):null,r.a.createElement(y,{contacts:e,onDeleteContact:this.deleteContact}))}}]),n}(a.Component);n(21);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))},7:function(t,e,n){t.exports={remove_contact_btn:"ContactList_remove_contact_btn__2ADeW",contact:"ContactList_contact__2PW3a"}}},[[14,1,2]]]);
//# sourceMappingURL=main.2a959f2d.chunk.js.map