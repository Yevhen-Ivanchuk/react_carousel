(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),s=n(2),c=n(3),r=n(5),l=n(4),m=n(1),o=n.n(m),u=(n(12),n(13),n(0)),h=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={step:0,frameSize:0,itemWidth:130,animationDuration:1e3,currentItemIndex:0,infinite:!1},e.handleImagesNext=function(){var t=e.state,n=t.step,a=t.frameSize,i=t.infinite,s=t.currentItemIndex-n;i?s<=-e.props.images.length&&(s=0):s<=-e.props.images.length+a&&(s=-e.props.images.length+a),e.setState({currentItemIndex:s})},e.handleImagesPrev=function(){var t=e.state,n=t.step,a=t.currentItemIndex+n;t.infinite?a>0&&(a=-e.props.images.length+e.state.frameSize):a>0?a=0:a>e.props.images.length-e.state.frameSize&&(a=e.props.images.length-e.state.frameSize),e.setState({currentItemIndex:a})},e.changeStep=function(t){e.setState({step:+t.target.value})},e.changeFrameSize=function(t){e.setState({frameSize:+t.target.value})},e.changeItemWidth=function(t){e.setState({itemWidth:+t.target.value})},e.changeAnimationDuration=function(t){e.setState({animationDuration:+t.target.value})},e.changeInfinite=function(){e.setState((function(e){return{infinite:!e.infinite}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.images,n=this.state,a=n.step,i=n.frameSize,s=n.itemWidth,c=n.animationDuration,r=n.infinite,l=n.currentItemIndex;return Object(u.jsxs)("div",{className:"Carousel",children:[Object(u.jsx)("div",{className:"Carousel_wrapper",style:{width:"".concat(i*s,"px")},children:Object(u.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(l,"px)"),marginLeft:"".concat(l*s,"px"),transition:"".concat(c,"ms"),width:"".concat(i*s,"px")},children:t.map((function(e){return Object(u.jsx)("li",{className:"Carousel__item",children:Object(u.jsx)("img",{src:e,alt:"Smile",width:s})},"image")}))})}),Object(u.jsx)("button",{type:"button",className:"button",onClick:function(){e.handleImagesPrev()},children:"Prev"}),Object(u.jsx)("button",{type:"button",className:"button",onClick:function(){e.handleImagesNext()},children:"Next"}),Object(u.jsxs)("div",{className:"labels",children:[Object(u.jsxs)("label",{htmlFor:"stepId",className:"label",children:["Step:",Object(u.jsx)("input",{type:"number",id:"stepId",className:"input",min:1,max:10,value:a,onChange:this.changeStep})]}),Object(u.jsxs)("label",{htmlFor:"frameId",className:"label",children:["Frame size:",Object(u.jsx)("input",{type:"number",id:"frameId",className:"input",min:1,max:10,value:i,onChange:this.changeFrameSize})]}),Object(u.jsxs)("label",{htmlFor:"itemId",className:"label",children:["Item width:",Object(u.jsx)("input",{type:"number",id:"itemId",className:"input",max:390,value:s,onChange:this.changeItemWidth})]}),Object(u.jsxs)("label",{htmlFor:"animId",className:"label",children:["Animation Duration:",Object(u.jsx)("input",{type:"number",id:"animId",className:"input",value:c,onChange:this.changeAnimationDuration})]}),Object(u.jsxs)("label",{htmlFor:"itemId",className:"label",children:["Infinite:",Object(u.jsx)("input",{type:"checkbox",id:"itemId",className:"input",checked:r,onChange:this.changeInfinite})]})]})]})}}]),n}(o.a.Component),p=h,g=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],infinite:!1},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.images;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Carousel "}),Object(u.jsx)(p,{images:e})]})}}]),n}(o.a.Component),d=g;i.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4c658e95.chunk.js.map