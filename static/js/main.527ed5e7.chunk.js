(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),r=n.n(s),i=(n(30),n(24)),o=n(4),u=n.p+"static/media/logo.bbe2a6ea.svg",l=n(2),d=n(8),j=n(0);var p=function(e){var t=Object(l.h)();function n(){return"/"===t.pathname?Object(j.jsxs)("div",{className:"header__status-container",children:[Object(j.jsx)("div",{className:"header__status header__status_signed",children:e.userEmail}),Object(j.jsx)("div",{className:"header__status header__status_signed header__link-out",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]}):"/sign-up"===t.pathname?Object(j.jsx)("div",{className:"header__status header__sign-up",children:Object(j.jsx)(d.b,{to:"sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})}):"/sign-in"===t.pathname?Object(j.jsx)("div",{className:"header__status header__sign-in",children:Object(j.jsx)(d.b,{to:"sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}):void 0}return n(),Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("img",{src:u,alt:"\u043b\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430",className:"header__logo"}),n()]})};var h=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})},b=Object(a.createContext)();var m=function(e){var t=Object(a.useContext)(b),n=e.card.owner._id===t._id,c="element__delete ".concat(n?"element__delete_visible":"element__delete_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),r="element__like ".concat(s?"element__like_active":"");return Object(j.jsxs)("article",{className:"element",children:[Object(j.jsx)("div",{className:"element__photo",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),Object(j.jsxs)("div",{className:"element__caption",children:[Object(j.jsx)("h2",{className:"element__heading",children:e.heading}),Object(j.jsxs)("div",{className:"element__like-container",children:[Object(j.jsx)("button",{type:"button",className:r,onClick:function(){e.onCardLike(e.card)}}),Object(j.jsx)("p",{className:"element__like-count",children:e.likes})]})]}),Object(j.jsx)("button",{type:"button",className:c,onClick:function(){e.onCardDelete(e.card)}})]})};var f=function(e){var t=Object(a.useContext)(b);return Object(j.jsxs)("main",{className:"main",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsxs)("div",{className:"profile__description",children:[Object(j.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsxs)("div",{className:"profile__name",children:[Object(j.jsx)("h1",{className:"profile__heading",children:t.name}),Object(j.jsx)("button",{type:"button",className:"profile__button-edit",onClick:e.onEditProfile})]}),Object(j.jsx)("p",{className:"profile__subheading",children:t.about})]})]}),Object(j.jsx)("button",{type:"button",className:"profile__button-add",onClick:e.onAddPlace})]}),Object(j.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(j.jsx)(m,{card:t,heading:t.name,likes:t.likes.length,url:t.link,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})},g=n(11),O=n(9),x="https://auth.nomoreparties.co",_=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.statusText))};function v(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"register-info",children:Object(j.jsxs)("div",{className:"register-info__popup",children:[Object(j.jsx)("button",{type:"button",className:"popup__button-close",onClick:function(){e.onMessage("")}}),Object(j.jsx)("div",{className:"register-info__pic",style:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"===e.message?{backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfgSURBVHgB7Z2Llds2EEWf00A2FWg68HYgpIJsB2IHdgdiB3YH2lSw7kByBbErWKUCbypwOCJpDUDwJ/EDkHPPwRFXJFckHmYw+BB8h2XwkKXHLFGW3hd/U5HK/Q+e885ZehPpW/H5XWxHzTvEiUEuJH+Wwo7BGbnQJ+Sin6CMAlvfhywds/QjSz9nSvzbL1naYbxCNSghWzCLyhn5hNxSm2BXekZubWcnMf/B7243WfojS7/j6tIfcXX5D2jmlKXnLH0Vv6W0YLJ0QLOlvhbHcAHYYDxY5KT4rVc0W/cB7QVx1RjkLrguA3kfu+kxBW2DkAvedJ3/IC94SoFBvXWUora5yjkg5GKzoHVeZtVCG/gtgV3zpyxtEQ/sytlF1wltsCII9cLuEaa1doWQF06fRzogksj7Hj6iGjwtQVgXQn5PvkKcYoEQ/FbLpXpJwroQ/K77FQuyZp/VcmCyxXogVN0258lHRAxb5mdUS+8e68Xntj8hQgjV5gOX4EcohKo1R+WyWUT3BriULrmu7QvnBedJdCJzv7Fb336AUgfXwW69/IRASVC9WHXJ7fg83g6BkWDBzYAJIAQscgIVdwgIAYr8BBV3SAhVkWerkwl2QKXiDgPBFnmWWIaci1Bxh4Uwc/6quONDsD0kdxxN0pfgdj9qU2g8OG8n7dZ0G+baiTE+bp6PNkBBsF1GlJ3kkSK7NVkDwgi49a72LU8H57XM/yMGJoXtJgjK1Lj18WCummC75j2UueC8H9xVH2C7ZmVe5Dj73a7aQF1zaBjYmhjcgazYD1BCQXrVm604gVpvqHBULeMigxuQ1quBVXjIgKt3bJRA+5pD5y4rlpGa9liFi7TiznWxgda9sXCTFcsITSPn8JH91K16EXQoMDYM7N6txjGCBPYAsxIHXP92GsKVB+6gxAKL2hpsETS4ihV2y1K7X276N3GQEdsn6LJAMfEGe5G2X95XCvyX2H6G0hUORFPMzxex7Z1LLdtTBKULLG6ZbynmhWBH0xYGOubblwTVJylTzIscPzByh4zCWhvLSmWkLRSRZSeV1Vx6gTaPupKgXty5RU7ENbzIHdK0tfeqnhTt4pZpjgVWCJ6qVrahfkCpI0V3cTlz5zIUGRdc2sMGHXpBVk6KfuIS5kMO9RpuB78XO6Nfwn4EUnSf0XLO0p+Yt5Pom9jesMAPNTuV+MSF8/uPLPBjzc61kyI+cZl/xfbFeLneLX32FgrzjHjqXBcDJ6aSlbI2kfqJy3lHCAuC01R6FV9ssF7YnT2jn7ihrkRvCSwvOjSmykD+nbql+WMSl6n0a4QqMGGaF1z0FfeA8J+NtjQNVWB2L+V1jTU3m9Bf3BgIXuAU40erhPZ3IcUoLhO0wAmaM3qITnxCP3H3iAtL00rn9IwQumX8AbdbM2HZ4jKWwPJmN5iXI7pnPF9333Y7YfniEuw8CkZgQr/ML1M60v+PUVxGLtZyeXjhKL7YYl4I9W8Qa0ptPUq+RbeXKC5jcL0P1tbK0B3CwPcqni4u23f9jz3/V8ziMgmu93KZtiOfTgvp5gi3uWz5ApC+4u4QP6yhpWcivjggPNy3k3S15r5eYAniMnIC5WVmpYFTKQdIgtusuUviQrAUcZkjYMdUsUy6I/RrRnUVd2lDpN5+jVfx5QZhs4eKW4dsIlnGGtvEd8J9LpvPXeLkhgTXe7xE0OXThSdxkEH4nJHPgXpGf87FuUucYLgV2ye5w8Au3THRJ1rmeyMsF+nVtu5OmUkbxAWh3WUvXVxCS7B8hNN+ipA91ikuk8Cpf106LeQRAfx0u7TmNYjLSAPd+Q6oXcgjQgj5DYc4rXUMCLZ2VHfgEty0JOZC2ocEHb3vUtz02pATB3dNBw6y0LQyKe7bWKjthIM4eKzpqspwSL0OXU4wsNtTa6nHYoRgW++264ky2NpDCRU5Vt5rqNdArTh0CHZ7f9f3H8iT1YrDI8Wd4wcGasWhQrDr3t7WWyLr4k4RmjIJMnK+yXpLDOySYqDMDeHGyLkOacWhTspbEzI2GsSrEvT1sqGQwo6LCAPhvkdeF2uZHoKtweCGJl01uwmNqqfDfcX7XYFVHQTbVWs/9XR8xkiu2cV11XMsmbs23DwffZzefVZI6+PxcIcCJ/Ga7rJDo7qMFUOYoN7t8+MEZSgIAeSv++ytijwMBFvcWT3kE9Y3/3hMCNUJ/E+YmQQq8hAQquLuEAgJVOR7IAQsbkmCqsjahGrHt45IcOKWcH3hXqx2htTjdmJw3s1e57ZBqLobufKNkueF7H6MzuMRqiJrvZzjW5Qt2meofEsgpVgvKar5Eb138z2BvzZrNqguPM55soQH/C4Q/E/gH7Bsodky+R7d+z5iofe9h389jRTLumEWNkX1XhdltXUQ/KWaLfwT4ha6TthFW20dW9QvnMIFIKZOEoO8cNYJu8WKSVAvdPlaHUJ4sLWyu2UBfdfO97RqYV0SNL/ihjNybrEJzaKqxXaAM4dd9M+G9Focw4KP6coJecE7oHkdrh/FMcEJ+w7hQsjrth3aH5l5Q740YfnJr1g9F3+/wf/a1wdcOxioSJvi87H4bOuAOGXpS5b+hr5c+y4IuSW9oP9S/0Mm/u0jcjcdRe9TyBbcBLtCtjKDq7WNwRm5RzgVn18RGbEK7MLW9B652A/is0zkOad038wZV5f+rdj+jgW43f8BuLuyYlOAddYAAAAASUVORK5CYII=",")")}:{backgroundImage:"url(".concat("data:image/png;base64,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",")")}}),Object(j.jsx)("p",{className:"register-info__text",children:e.message})]})})})}function A(){var e=Object(a.useState)({email:"",password:""}),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],u=r[1],p=Object(l.g)(),h=function(e){var t=e.target,a=t.name,s=t.value;c(Object(O.a)(Object(O.a)({},n),{},Object(g.a)({},a,s)))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"register",children:Object(j.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),function(e,t){return fetch("".concat(x,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(_)}(n.password,n.email).then((function(e){e&&u("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!")})).catch((function(e){return u("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}))},children:[Object(j.jsxs)("div",{className:"register__top-container",children:[Object(j.jsx)("h2",{className:"register__header",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)("input",{className:"register__input",id:"email",required:!0,name:"email",type:"text",value:n.email,placeholder:"Email",onChange:h}),Object(j.jsx)("input",{className:"register__input",id:"password",required:!0,name:"password",type:"password",value:n.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:h})]}),Object(j.jsxs)("div",{className:"register__bottom-container",children:[Object(j.jsx)("button",{type:"submit",className:"register__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsxs)("p",{children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(j.jsx)(d.b,{to:"sign-in",className:"register__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})}),i&&Object(j.jsx)(v,{message:i,onMessage:function(){"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"===i?(u(""),p.push("/sign-in")):u("")}})]})}function C(e){var t=Object(a.useState)({email:"",password:""}),n=Object(o.a)(t,2),c=n[0],s=n[1],r=function(e){var t=e.target,n=t.name,a=t.value;s(Object(O.a)(Object(O.a)({},c),{},Object(g.a)({},n,a)))};return Object(j.jsx)("div",{className:"login",children:Object(j.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),c.email&&c.password&&e.onLogin(c.password,c.email)},children:[Object(j.jsxs)("div",{className:"login__top-container",children:[Object(j.jsx)("h2",{className:"login__header",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)("input",{className:"login__input",id:"email",required:!0,name:"email",type:"text",value:c.email,placeholder:"Email",onChange:r}),Object(j.jsx)("input",{className:"login__input",id:"password",required:!0,name:"password",type:"password",value:c.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:r})]}),Object(j.jsx)("button",{type:"submit",className:"login__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})})}var k=function(e){var t=c.a.useRef("[img.link, img.name]");return c.a.useEffect((function(){t.current=[e.card.link,e.card.name]})),Object(j.jsx)("div",{className:"popup popup_type_view-image ".concat(e.card?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container popup__container_image",children:[Object(j.jsx)("button",{type:"button",className:"popup__button-close popup__button-close_image",onClick:e.onClose}),Object(j.jsx)("img",{className:"popup__image",src:e.card.link?e.card.link:t.current[0],alt:"".concat(e.card.name?e.card.name:t.current[1]," (\u0444\u043e\u0442\u043e)")}),Object(j.jsx)("p",{className:"popup__caption",children:e.card.name?e.card.name:t.current[1]})]})})},N=n(22),y=n(23),L=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430Fehler")},w=new(function(){function e(t){Object(N.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(y.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"cohort-20/users/me"),{headers:this._headers}).then(L)}},{key:"getCardList",value:function(){return fetch("".concat(this._url,"cohort-20/cards"),{headers:this._headers}).then(L)}},{key:"getUserInfoAndInitialCards",value:function(){return Promise.all([w.getUserInfo(),w.getCardList()])}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"cohort-20/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(L)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cohort-20/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(L)}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"cohort-20/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(L)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cohort-20/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(L)}},{key:"removeLike",value:function(e){return fetch("".concat(this._url,"cohort-20/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(L)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLike(e):this.removeLike(e)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"cohort-20/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(L)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/",headers:{"content-type":"application/json",authorization:"35f0ed57-1593-40bb-bc35-702beba473b9"}}),X=w;var S=function(e){return Object(j.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{type:"button",className:"popup__button-close",onClick:e.onClose}),Object(j.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),name:"".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:[Object(j.jsx)("h2",{className:"popup__heading",children:"".concat(e.title)}),e.children,Object(j.jsx)("button",{className:"popup__button-submit",children:"".concat(e.buttonLabel)})]})]})})};var E=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),u=i[0],l=i[1],d=Object(a.useContext)(b);return Object(a.useEffect)((function(){s(d.name),l(d.about)}),[d]),Object(j.jsxs)(S,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonLabel:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},children:[Object(j.jsx)("input",{type:"text",name:"heading",className:"popup__input popup__input_text_heading",required:!0,minLength:"2",maxLength:"40",id:"profile-name",value:c||"",onChange:function(e){s(e.target.value)}}),Object(j.jsx)("span",{className:"profile-name-error error"}),Object(j.jsx)("input",{type:"text",name:"subheading",className:"popup__input popup__input_text_subheading",required:!0,minLength:"2",maxLength:"200",id:"profile-desc",value:u||"",onChange:function(e){l(e.target.value)}}),Object(j.jsx)("span",{className:"profile-desc-error error"})]})};var B=function(e){var t=Object(a.useRef)();return Object(j.jsxs)(S,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonLabel:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),n.target.reset()},children:[Object(j.jsx)("input",{type:"url",name:"src",className:"popup__input popup__input_text_src",id:"avatar-url",ref:t,required:!0}),Object(j.jsx)("span",{className:"avatar-url-error error"})]})};var I=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)();return Object(j.jsxs)(S,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonLabel:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value}),a.target.reset()},children:[Object(j.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"place",className:"popup__input popup__input_text_heading",id:"place-name",minLength:"2",maxLength:"30",ref:t,required:!0}),Object(j.jsx)("span",{className:"place-name-error error"}),Object(j.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"src",className:"popup__input popup__input_text_src",id:"place-url",ref:n,required:!0}),Object(j.jsx)("span",{className:"place-url-error error"})]})},W=n(25),U=function(e){var t=e.component,n=Object(W.a)(e,["component"]);return Object(j.jsx)(l.b,{children:function(){return!0===n.loggedIn?Object(j.jsx)(t,Object(O.a)({},n)):Object(j.jsx)(l.a,{to:"./sign-in"})}})};var R=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),u=r[0],d=r[1],m=Object(a.useState)(!1),g=Object(o.a)(m,2),O=g[0],v=g[1],N=Object(a.useState)(null!==null&&null),y=Object(o.a)(N,2),L=y[0],w=y[1],S=Object(a.useState)([]),W=Object(o.a)(S,2),R=W[0],F=W[1],P=Object(a.useState)({}),H=Object(o.a)(P,2),T=H[0],Q=H[1];function J(){d(!1),c(!1),v(!1),w(!1)}Object(a.useEffect)((function(){X.getUserInfoAndInitialCards().then((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];Q(n),F(a)})).catch((function(e){return console.log(e)}))}),[]);var V=Object(l.g)(),Y=Object(a.useState)(!1),M=Object(o.a)(Y,2),K=M[0],z=M[1];Object(a.useEffect)((function(){!function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(x,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(_)).then((function(e){e&&(q(e.data.email),z(!0),V.push("/"))})).catch((function(e){return console.log(e)}))}var t}()}),[]);var D=Object(a.useState)(""),G=Object(o.a)(D,2),Z=G[0],q=G[1];return Object(j.jsx)(b.Provider,{value:T,children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(p,{userEmail:Z,onSignOut:function(){localStorage.removeItem("jwt"),V.push("/sign-in"),q("")}}),Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/sign-up",children:Object(j.jsx)(A,{})}),Object(j.jsx)(l.b,{path:"/sign-in",children:Object(j.jsx)(C,{onLogin:function(e,t){(function(e,t){return fetch("".concat(x,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(_).then((function(e){return e.token?(localStorage.setItem("jwt",e.token),e):void 0}))})(e,t).then((function(e){e&&(z(!0),V.push("/"),q(t))})).catch((function(e){return console.log(e)}))}})}),Object(j.jsx)(U,{path:"/",exact:!0,component:f,loggedIn:K,onEditAvatar:function(){v(!O)},onAddPlace:function(){d(!u)},onEditProfile:function(){c(!n)},onCardClick:function(e){w(e)},cards:R,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===T._id}));X.changeLikeCardStatus(e._id,!t).then((function(t){F((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){X.removeCard(e._id).then((function(){F(R.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(l.b,{children:K?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)(l.a,{to:"/sign-in"})})]}),Object(j.jsx)(h,{}),Object(j.jsx)(E,{isOpen:n,onClose:J,onUpdateUser:function(e){X.setUserInfo(e).then((function(e){Q(e),J()})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(B,{isOpen:O,onClose:J,onUpdateAvatar:function(e){X.setUserAvatar(e).then(Q({name:T.name,about:T.about,avatar:e.avatar})).then(J()).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(I,{isOpen:u,onClose:J,onAddPlace:function(e){X.addCard(e).then((function(e){return F([e].concat(Object(i.a)(R)))})).then(J()).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(k,{card:L,onClose:J})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(R,{})})}),document.getElementById("root")),F()}},[[37,1,2]]]);
//# sourceMappingURL=main.527ed5e7.chunk.js.map