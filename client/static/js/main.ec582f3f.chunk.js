(this["webpackJsonpcarbon-calculator"]=this["webpackJsonpcarbon-calculator"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),l=(n(12),n(3)),s=n(4),u=n(6),i=n(5),p=(n(13),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={apiResponse:""},a}return Object(s.a)(n,[{key:"callAPI",value:function(){var e=this;fetch("http://localhost:5000/testAPI").then((function(e){return e.text()})).then((function(t){return e.setState({apiResponse:t})})).catch((function(e){return e}))}},{key:"componentDidMount",value:function(){this.callAPI()}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-title"},"Carbon Calculator"),c.a.createElement("p",{className:"App-intro"},this.state.apiResponse)))}}]),n}(a.Component));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ec582f3f.chunk.js.map