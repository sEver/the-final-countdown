(this["webpackJsonpthe-final-countdown"]=this["webpackJsonpthe-final-countdown"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),i=(n(12),n(1)),l=n(6),s=n(3),u=n(2),m=(n(13),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={timeLeftArray:[]},a.getCurrentTimeMilliseconds=function(){return(new Date).getTime()},a.componentDidMount=function(){a.interval=setInterval(a.cycleSecond,1e3)},a.cycleSecond=function(){var e=a.showdownMilliseconds-a.getCurrentTimeMilliseconds(),t=a.getTimeLeftArray(e);a.setState({millisecondsLeft:e,timeLeftArray:t})},a.render=function(){return r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"timer__title"},"Czas, kt\xf3ry pozosta\u0142:"),r.a.createElement("div",{className:"timer__digits"},a.renderDigits()))},a.showdownMilliseconds=Date.parse(e.until),console.log("Showdown at: ",a.showdownMilliseconds),a}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"getTimeLeftArray",value:function(e){var t=Math.floor(e/864e5),n=new Date(e%864e5),a=[t,n.getHours(),n.getMinutes(),n.getSeconds()];return a=a.map((function(e){return(""+e).padStart(2,"0")})),console.log(a),a}},{key:"renderDigits",value:function(){return this.state.millisecondsLeft<0?r.a.createElement("span",{class:"showdown"},"To ju\u017c. Gratulacje!!!"):r.a.createElement(r.a.Fragment,null,this.state.timeLeftArray.map((function(e){return r.a.createElement("span",null,e)})))}}]),n}(r.a.Component)),d=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).renderArtifacts=function(){for(var e=10,t=[];e--;)t.push(r.a.createElement("div",{className:"artifact"}));return t.push(r.a.createElement("div",{className:"sun"})),t},e.render=function(){return r.a.createElement("div",{className:"background"},e.renderArtifacts())},e}return n}(r.a.Component));n(15);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(m,{until:"2020-09-01T15:00:00"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.1cfb5388.chunk.js.map