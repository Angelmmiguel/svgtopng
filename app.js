dc=document,$=dc.querySelector.bind(dc),t=$`input`,c=$`canvas`,i=new Image(),d=c.getContext`2d`
oc=_=>{
  i.onload=_=>{
    d.drawImage(i,0,0)
    s=`image`,m=`${s}/png`,o=`${s}/octet-stream`
    u=c.toDataURL(m).replace(m,o)
    e=new MouseEvent(`click`,{view:window,bubbles:false}),a=dc.createElement`a`,at=a.setAttribute.bind(a)
    at('download','i.png')
    at('href',u)
    at('target','_blank')
    a.dispatchEvent(e)}
  i.crossOrigin=`Anonymous`
  i.src=t.value}
