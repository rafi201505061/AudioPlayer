(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),i=n.n(c),a=n(20),s=n.n(a),o=(n(62),n(63),n(14)),u=n(8),l=n(92),d=n(46),j=n(101),b=n(96),m=n(95),p=n(99),f=n(97),x=n(28),O=n.n(x),h=n(37),g=n.n(h),y=n(27),v=n.n(y),C=n(36),w=n.n(C);var T=function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},N=n(94),S=n(102),P=(Object(l.a)({inline:{display:"inline"},avatar:{borderColor:"red"}}),function(e){var t=e.name,n=e.imageUrl,c=e.onClick,i=e.isActive;return Object(r.jsx)("div",{onClick:c,style:{backgroundColor:i?"#fcc0f0":"white",borderRadius:15,margin:2.5},children:Object(r.jsxs)(S.a,{alignItems:"flex-start",justifyContent:"center",children:[Object(r.jsx)("img",{src:n,style:{height:40,width:40,borderRadius:80,alignSelf:"center",border:"2px solid #0893a6",margin:10}}),Object(r.jsx)("h4",{style:{alignSelf:"center",fontSize:16,color:"#0893a6"},children:t})]})})}),D=Object(l.a)((function(e){return{root:{width:"100%",height:"100%",maxWidth:"36ch",backgroundColor:"#e4eced"}}})),_=function(e){var t=e.data,n=e.onClick,c=D();return Object(r.jsx)(N.a,{className:c.root,children:t.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(P,{name:e.songName,imageUrl:e.imageUrl,onClick:function(){return n(e.id)},isActive:e.isPlaying})},e.id)}))})},k=n(100),V=n(38),E=n.n(V),I=n(10),A=function(e,t,n){var i=Object(c.createContext)();return{Context:i,Provider:function(a){var s=a.children,u=Object(c.useReducer)(e,n),l=Object(o.a)(u,2),d=l[0],j=l[1],b=[];for(var m in t)b[m]=t[m](j);return Object(r.jsx)(i.Provider,{value:Object(I.a)({state:d},b),children:s})}}}((function(e,t){switch(t.type){case"select_song":var n=[];return e.songs.forEach((function(e){t.payload.id!==e.id?n.push(Object(I.a)(Object(I.a)({},e),{},{isPlaying:!1})):n.push(Object(I.a)(Object(I.a)({},e),{},{isPlaying:!0}))})),Object(I.a)(Object(I.a)({},e),{},{songs:n,currentTime:0,currentDuration:0});case"play_or_pause":return Object(I.a)(Object(I.a)({},e),{},{playing:!e.playing});case"set_current_volume":return Object(I.a)(Object(I.a)({},e),{},{currentVolume:t.payload.volume});case"set_current_time":return Object(I.a)(Object(I.a)({},e),{},{currentTime:t.payload.currentTime});case"set_duration":return Object(I.a)(Object(I.a)({},e),{},{currentDuration:t.payload.currentDuration});case"activate_audio_player":return Object(I.a)(Object(I.a)({},e),{},{isAudioPlayerActive:!0});default:return e}}),{selectSong:function(e){return function(t){e({type:"select_song",payload:{id:t}})}},playPause:function(e){return function(){e({type:"play_or_pause"})}},setCurrentDuration:function(e){return function(t){e({type:"set_duration",payload:{currentDuration:t}})}},setCurrentTime:function(e){return function(t){e({type:"set_current_time",payload:{currentTime:t}})}},setVolume:function(e){return function(t){e({type:"set_current_volume",payload:{volume:t}})}},setAudioPlayer:function(e){return function(){e({type:"activate_audio_player"})}}},{songs:[{id:0,isPlaying:!0,songName:"Chill",src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",imageUrl:"https://www.laurenswilliam.nl/wp-content/uploads/2016/09/Chill-music-update-1.jpeg"},{id:1,songName:"Twist",isPlaying:!1,src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",imageUrl:"https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg"},{id:2,songName:"Free Bird",isPlaying:!1,src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",imageUrl:"https://www.laurenswilliam.nl/wp-content/uploads/2016/09/Chill-music-update-1.jpeg"},{id:3,songName:"Twister",isPlaying:!1,src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",imageUrl:"https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg"},{id:4,songName:"Go Easy",isPlaying:!1,src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",imageUrl:"https://i.ytimg.com/vi/VJ52yJwN_K0/maxresdefault.jpg"}],playing:!1,currentTime:0,currentVolume:100,currentDuration:0,isAudioPlayerActive:!1}),R=A.Context,U=A.Provider,H=n(98),L=Object(l.a)((function(e){return{rootC:{display:"flex",flexDirection:"row"},root:{flex:1},details:{flex:2},content:{flex:"1 0 auto"},controls:{alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},bar:{justifyContent:"center"},slider:{marginRight:3}}})),B=Object(u.f)((function(e){var t=e.history,n=L(),a=Object(d.a)(),s=Object(c.useState)(0),u=Object(o.a)(s,2),l=u[0],x=u[1],h=i.a.useRef(null),y=Object(c.useState)(0),C=Object(o.a)(y,2),N=C[0],S=C[1],P=Object(c.useState)(!0),D=Object(o.a)(P,2),V=D[0],I=D[1],A=Object(c.useContext)(R),U=A.state,B=A.playPause,F=A.selectSong,J=A.setCurrentDuration,Q=A.setCurrentTime,W=A.setVolume,z=A.setAudioPlayer;Object(c.useEffect)((function(){x(U.currentTime/U.currentDuration)}),[]);var X=function(e,t){var n,r;console.log("title:"+U.songs[e].songName),console.log("url:"+U.songs[e].src),console.log("elapsed time:"+h.current.currentTime),F((r=5,(n=e+t)<0?n+r:n%r))};Object(c.useEffect)((function(){h&&h.current&&(U.playing?h.current.play():h.current.pause())}),[U.playing]),Object(c.useEffect)((function(){h&&h.current&&(U.playing?h.current.play():h.current.pause())}),[U.songs]),Object(c.useEffect)((function(){h&&h.current&&(h.current.volume=U.currentVolume/100)}),[U.currentVolume]),Object(c.useEffect)((function(){h&&h.current&&(V?(h.current.currentTime=U.currentTime,h.current.currentDuration=U.currentDuration,I(!1)):(h.current.currentTime=N/100*U.currentDuration,x(h.current.currentTime/h.current.duration*100),Q(h.current.currentTime),J(h.current.duration)))}),[N]),T((function(){h&&h.current&&(V?(h.current.currentTime=U.currentTime,h.current.currentDuration=U.currentDuration,I(!1)):(x(h.current.currentTime/h.current.duration*100),Q(h.current.currentTime),J(h.current.duration)))}),200);var Z=U.songs.filter((function(e){return!0===e.isPlaying}))[0];return Object(r.jsxs)("div",{className:n.rootC,children:[Object(r.jsxs)("div",{style:{flex:1,borderRadius:5},children:[Object(r.jsx)("audio",{ref:h,src:Z.src,type:"audio/mp3"}),Object(r.jsxs)(j.a,{className:n.root,children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{style:{width:"95%",height:.73*window.innerHeight,flex:1},src:Z.imageUrl,alt:Z.songName})}),Object(r.jsxs)("div",{className:n.details,children:[Object(r.jsx)(m.a,{className:n.content,children:Object(r.jsxs)(b.a,{container:!0,spacing:1,children:[Object(r.jsx)(b.a,{item:!0,xs:!0,children:Object(r.jsx)(f.a,{component:"h4",variant:"h4",style:{fontWeight:"bold",color:"#d900bd"},children:Z.songName})}),Object(r.jsx)(b.a,{item:!0,xs:!0,children:Object(r.jsx)(H.a,{variant:"contained",color:"secondary",onClick:function(){z(),t.push("/")},children:"Minimize Audio Player"})})]})}),Object(r.jsx)(b.a,{container:!0,spacing:1,className:n.bar,children:Object(r.jsx)(b.a,{item:!0,xs:12,sm:12,children:Object(r.jsx)(k.a,{value:l,onChange:function(e,t){return S(t)},"aria-labelledby":"continuous-slider",style:{margin:10}})})}),Object(r.jsxs)(b.a,{container:!0,className:n.controls,children:[Object(r.jsxs)(b.a,{item:!0,xs:8,children:[Object(r.jsx)(p.a,{"aria-label":"previous",onClick:function(){X(Z.id,-1)},children:"rtl"===a.direction?Object(r.jsx)(v.a,{style:{color:"#d900bd"}}):Object(r.jsx)(O.a,{style:{color:"#d900bd"}})}),Object(r.jsx)(p.a,{"aria-label":"play/pause",onClick:function(){return B()},children:U.playing?Object(r.jsx)(w.a,{className:n.playIcon,style:{color:"#d900bd"}}):Object(r.jsx)(g.a,{className:n.playIcon,style:{color:"#d900bd"}})}),Object(r.jsx)(p.a,{"aria-label":"next",onClick:function(){X(Z.id,1)},children:"rtl"===a.direction?Object(r.jsx)(O.a,{style:{color:"#d900bd"}}):Object(r.jsx)(v.a,{style:{color:"#d900bd"}})})]}),Object(r.jsx)(b.a,{item:!0,xs:4,style:{width:400,alignItems:"center",justifyContent:"center"},children:Object(r.jsxs)(b.a,{container:!0,spacing:1,children:[Object(r.jsx)(b.a,{item:!0,xs:2,children:Object(r.jsx)(E.a,{})}),Object(r.jsx)(b.a,{item:!0,xs:10,children:Object(r.jsx)(k.a,{value:U.currentVolume,onChange:function(e,t){W(t)},"aria-labelledby":"continuous-slider",className:n.slider})})]})})]})]})]})]}),Object(r.jsx)("div",{style:{flex:.2},children:Object(r.jsx)(_,{data:U.songs,onClick:function(e){F(e)}})})]})})),F=n(24),J=Object(l.a)((function(e){return{rootC:{display:"flex",flexDirection:"row"},root:{flex:1},details:{flex:2},content:{flex:"1 0 auto"},controls:{alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},bar:{justifyContent:"center"},slider:{marginRight:3}}})),Q=function(){var e=J(),t=Object(d.a)(),n=Object(c.useContext)(R),a=n.state,s=n.playPause,u=n.selectSong,l=n.setCurrentDuration,x=n.setCurrentTime,h=n.setVolume,y=Object(c.useState)(0),C=Object(o.a)(y,2),N=C[0],S=C[1],P=i.a.useRef(null),D=Object(c.useState)(0),_=Object(o.a)(D,2),V=_[0],I=_[1],A=Object(c.useState)(!0),U=Object(o.a)(A,2),H=U[0],L=U[1];console.log("ini",a.currentTime),Object(c.useEffect)((function(){S(a.currentTime/a.currentDuration)}),[]);var B=function(e,t){var n,r;console.log("title:"+a.songs[e].songName),console.log("url:"+a.songs[e].src),console.log("elapsed time:"+P.current.currentTime),u((r=5,(n=e+t)<0?n+r:n%r))};Object(c.useEffect)((function(){P&&P.current&&(a.playing?P.current.play():P.current.pause())}),[a.playing]),Object(c.useEffect)((function(){P&&P.current&&(a.playing?P.current.play():P.current.pause())}),[a.songs]),Object(c.useEffect)((function(){P&&P.current&&(P.current.volume=a.currentVolume/100)}),[a.currentVolume]),Object(c.useEffect)((function(){P&&P.current&&(H?(P.current.currentTime=a.currentTime,P.current.currentDuration=a.currentDuration,L(!1)):(P.current.currentTime=V/100*a.currentDuration,S(P.current.currentTime/P.current.duration*100),x(P.current.currentTime),l(P.current.duration)))}),[V]),T((function(){P&&P.current&&(H?(P.current.currentTime=a.currentTime,P.current.currentDuration=a.currentDuration,L(!1)):(S(P.current.currentTime/P.current.duration*100),x(P.current.currentTime),l(P.current.duration)))}),200);var Q=a.songs.filter((function(e){return!0===e.isPlaying}))[0];return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{height:800,children:Object(r.jsxs)("h1",{children:["Hello! This is a music player app.To use the music player click ",Object(r.jsx)(F.b,{to:"/musicplayer",children:"Here"})]})}),a.isAudioPlayerActive?Object(r.jsxs)("div",{children:[Object(r.jsx)("audio",{ref:P,src:Q.src,type:"audio/mp3"}),Object(r.jsx)(j.a,{className:e.root,children:Object(r.jsxs)("div",{className:e.details,children:[Object(r.jsx)(m.a,{className:e.content,children:Object(r.jsx)(f.a,{component:"h4",variant:"h4",style:{fontWeight:"bold",color:"#d900bd"},children:Q.songName})}),Object(r.jsx)(b.a,{container:!0,spacing:1,className:e.bar,children:Object(r.jsx)(b.a,{item:!0,xs:12,sm:12,children:Object(r.jsx)(k.a,{value:N,onChange:function(e,t){return I(t)},"aria-labelledby":"continuous-slider",style:{margin:10}})})}),Object(r.jsxs)(b.a,{container:!0,className:e.controls,children:[Object(r.jsxs)(b.a,{item:!0,xs:8,children:[Object(r.jsx)(p.a,{"aria-label":"previous",onClick:function(){B(Q.id,-1)},children:"rtl"===t.direction?Object(r.jsx)(v.a,{style:{color:"#d900bd"}}):Object(r.jsx)(O.a,{style:{color:"#d900bd"}})}),Object(r.jsx)(p.a,{"aria-label":"play/pause",onClick:function(){return s()},children:a.playing?Object(r.jsx)(w.a,{className:e.playIcon,style:{color:"#d900bd"}}):Object(r.jsx)(g.a,{className:e.playIcon,style:{color:"#d900bd"}})}),Object(r.jsx)(p.a,{"aria-label":"next",onClick:function(){B(Q.id,1)},children:"rtl"===t.direction?Object(r.jsx)(O.a,{style:{color:"#d900bd"}}):Object(r.jsx)(v.a,{style:{color:"#d900bd"}})})]}),Object(r.jsx)(b.a,{item:!0,xs:4,style:{width:400,alignItems:"center",justifyContent:"center"},children:Object(r.jsxs)(b.a,{container:!0,spacing:1,children:[Object(r.jsx)(b.a,{item:!0,xs:2,children:Object(r.jsx)(E.a,{})}),Object(r.jsx)(b.a,{item:!0,xs:10,children:Object(r.jsx)(k.a,{value:a.currentVolume,onChange:function(e,t){h(t)},"aria-labelledby":"continuous-slider",className:e.slider})})]})})]})]})})]}):null]})};var W=function(){return Object(r.jsx)(U,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{component:Q,exact:!0,path:"/"}),Object(r.jsx)(u.a,{component:B,exact:!0,path:"/musicplayer"})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};s.a.render(Object(r.jsx)(F.a,{children:Object(r.jsx)(W,{})}),document.getElementById("root")),z()}},[[70,1,2]]]);
//# sourceMappingURL=main.b1ceea8f.chunk.js.map