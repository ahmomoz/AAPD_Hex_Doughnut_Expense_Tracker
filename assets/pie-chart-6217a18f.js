const u=document.getElementById("budget-pie-chart");if(u){const g={id:"doughnutLabel",beforeDatasetsDraw(e,a,l){const{ctx:t,data:r,height:i}=e,s=e.getDatasetMeta(0).data[0].x,d=e.getDatasetMeta(0).data[0].y;t.save(),t.textAlign="center",t.textBaseline="middle";let o=(i/17).toFixed(2);t.font=o+"px Gensen",t.fillStyle="rgba(108, 115, 139, 1)";let n=d-o;t.fillText("本月總預算",s,n),t.textAlign="center",t.textBaseline="middle",o=(i/8).toFixed(2),t.font="bold "+o+"px Nunito",t.fillStyle="rgba(36, 37, 45, 1)",n=d+(o-10),t.fillText("$28,000",s,n),t.restore()}};Chart.Tooltip.positioners.top=function(e,a){const l=e[0].index,{chartArea:t}=this.chart;return l===1?{x:0,y:0}:{x:t.right,y:0}},new Chart(u,{type:"doughnut",options:{borderRadius:10,cutout:"72%",aspectRatio:1.5,plugins:{legend:{display:!1},tooltip:{position:"top",displayColors:!1,backgroundColor:"#fff",bodyColor:"#000",titleColor:"#000",titleFont:{family:"Gensen",size:11},bodyFont:{family:"Gensen",size:11},caretSize:0,padding:{top:8,bottom:8,left:8,right:50},callbacks:{label:function(e){return`$${e.formattedValue}`},afterBody:function(e){const a=e[0].dataset.data.reduce((t,r)=>t+r,0);return`${e[0].raw/a*100}%`}}}}},plugins:[g],data:{labels:["已用","剩餘"],datasets:[{data:[12950,15050],backgroundColor:["rgba(215, 217, 224, 1)","rgba(255, 176, 114, 1)"],borderColor:["rgba(247, 247, 247, 1)","rgba(247, 247, 247, 1)"]}]}})}const c=document.getElementById("home-total-expense-pie-chart");if(c){const g={id:"doughnutLabel4",beforeDatasetsDraw(e,a,l){const{ctx:t,data:r,height:i}=e,s=e.getDatasetMeta(0).data[0].x,d=e.getDatasetMeta(0).data[0].y;t.save(),t.textAlign="center",t.textBaseline="middle";let o=(i/17).toFixed(2);t.font=o+"px Gensen",t.fillStyle="rgba(108, 115, 139, 1)";let n=d-o;t.fillText("總支出",s,n),t.textAlign="center",t.textBaseline="middle",o=(i/8).toFixed(2),t.font="bold "+o+"px Nunito",t.fillStyle="rgba(36, 37, 45, 1)",n=d+(o-10),t.fillText("$12,950",s,n),t.restore()}};Chart.Tooltip.positioners.side=function(e,a){return e[0].element.startAngle<1?{x:a.x+350,y:a.y}:{x:a.x-350,y:a.y}},new Chart(c,{type:"doughnut",options:{borderRadius:10,cutout:"72%",aspectRatio:1.5,plugins:{legend:{display:!1},tooltip:{position:"side",displayColors:!1,backgroundColor:"#fff",bodyColor:"#000",titleColor:"#000",titleFont:{family:"Gensen",size:11},bodyFont:{family:"Gensen",size:11},caretSize:0,padding:{top:8,bottom:8,left:8,right:50},callbacks:{label:function(e){return`$${e.formattedValue}`},afterBody:function(e){const a=e[0].dataset.data.reduce((t,r)=>t+r,0);return`${(e[0].raw/a*100).toFixed(2)}%`}}}}},plugins:[g],data:{labels:["飲食","購物","交通","娛樂","學習","生活","醫療"],datasets:[{data:[2500,500,2e3,800,2200,6400,150],backgroundColor:["#FFE4C1","#C7F1FF","#CCDCFF","#DAB5FF","#B0DCC7","#FEC9A7","#FFCECF"],borderColor:["rgba(247, 247, 247, 1)","rgba(247, 247, 247, 1)"]}]}})}const f=document.getElementById("total-expense-pie-chart");if(f){const g={id:"doughnutLabel2",beforeDatasetsDraw(e,a,l){const{ctx:t,data:r,height:i}=e,s=e.getDatasetMeta(0).data[0].x,d=e.getDatasetMeta(0).data[0].y;t.save(),t.textAlign="center",t.textBaseline="middle";let o=(i/17).toFixed(2);t.font=o+"px Gensen",t.fillStyle="rgba(108, 115, 139, 1)";let n=d-o;t.fillText("總支出",s,n),t.textAlign="center",t.textBaseline="middle",o=(i/8).toFixed(2),t.font="bold "+o+"px Nunito",t.fillStyle="rgba(36, 37, 45, 1)",n=d+(o-10),t.fillText("$27,800",s,n),t.restore()}};Chart.Tooltip.positioners.side=function(e,a){return e[0].element.startAngle<1?{x:a.x+350,y:a.y}:{x:a.x-350,y:a.y}},new Chart(f,{type:"doughnut",options:{borderRadius:10,cutout:"72%",aspectRatio:1.5,plugins:{legend:{display:!1},tooltip:{position:"side",displayColors:!1,backgroundColor:"#fff",borderColor:"#ededf1",borderWidth:1,bodyColor:"#000",titleColor:"#000",titleFont:{family:"Gensen",size:11},bodyFont:{family:"Gensen",size:11},caretSize:0,padding:{top:8,bottom:8,left:8,right:50},callbacks:{label:function(e){return`$${e.formattedValue}`},afterBody:function(e){const a=e[0].dataset.data.reduce((t,r)=>t+r,0);return`${(e[0].raw/a*100).toFixed(2)}%`}}}}},plugins:[g],data:{labels:["飲食","購物","交通","娛樂","學習","生活","醫療"],datasets:[{data:[12e3,4300,2e3,4700,4600,8e3,3e3],backgroundColor:["#FFE4C1","#C7F1FF","#CCDCFF","#DAB5FF","#B0DCC7","#FEC9A7","#FFCECF"],borderColor:["rgba(247, 247, 247, 1)","rgba(247, 247, 247, 1)"]}]}})}const p=document.getElementById("monthly-total-expense-pie-chart");if(p){const g={id:"doughnutLabel3",beforeDatasetsDraw(e,a,l){const{ctx:t,data:r,height:i}=e,s=e.getDatasetMeta(0).data[0].x,d=e.getDatasetMeta(0).data[0].y;t.save(),t.textAlign="center",t.textBaseline="middle";let o=(i/17).toFixed(2);t.font=o+"px Gensen",t.fillStyle="rgba(108, 115, 139, 1)";let n=d-o;t.fillText("本月總支出",s,n),t.textAlign="center",t.textBaseline="middle",o=(i/8).toFixed(2),t.font="bold "+o+"px Nunito",t.fillStyle="rgba(36, 37, 45, 1)",n=d+(o-10),t.fillText("$27,800",s,n),t.restore()}};Chart.Tooltip.positioners.side=function(e,a){return e[0].element.startAngle<1?{x:a.x+350,y:a.y}:{x:a.x-350,y:a.y}},new Chart(p,{type:"doughnut",options:{borderRadius:10,cutout:"72%",aspectRatio:1.5,plugins:{legend:{display:!1},tooltip:{position:"side",displayColors:!1,backgroundColor:"#fff",borderColor:"#ededf1",borderWidth:1,bodyColor:"#000",titleColor:"#000",titleFont:{family:"Gensen",size:11},bodyFont:{family:"Gensen",size:11},caretSize:0,padding:{top:8,bottom:8,left:8,right:50},callbacks:{label:function(e){return`$${e.formattedValue}`},afterBody:function(e){const a=e[0].dataset.data.reduce((t,r)=>t+r,0);return`${(e[0].raw/a*100).toFixed(2)}%`}}}}},plugins:[g],data:{labels:["飲食","購物","交通","娛樂","學習","生活","醫療"],datasets:[{data:[14e3,400,2e3,4700,4600,8e3,3e3],backgroundColor:["#FFE4C1","#C7F1FF","#CCDCFF","#DAB5FF","#B0DCC7","#FEC9A7","#FFCECF"],borderColor:["rgba(247, 247, 247, 1)","rgba(247, 247, 247, 1)"]}]}})}const b=document.getElementById("total-income-pie-char");if(b){const g={id:"doughnutLabe4",beforeDatasetsDraw(e,a,l){const{ctx:t,data:r,height:i}=e,s=e.getDatasetMeta(0).data[0].x,d=e.getDatasetMeta(0).data[0].y;t.save(),t.textAlign="center",t.textBaseline="middle";let o=(i/12).toFixed(2);t.font=o+"px Gensen",t.fillStyle="rgba(108, 115, 139, 1)";let n=d-o+10;t.fillText("本月總收入",s,n),t.textAlign="center",t.textBaseline="middle",o=(i/10).toFixed(2),t.font="bold "+o+"px Nunito",t.fillStyle="rgba(36, 37, 45, 1)",n=d+20,t.fillText("$38,0000",s,n),t.restore()}};Chart.Tooltip.positioners.side=function(e,a){return e[0].element.startAngle<1?{x:a.x+350,y:a.y}:{x:a.x-350,y:a.y}},new Chart(b,{type:"doughnut",options:{borderRadius:10,cutout:"72%",aspectRatio:1.5,plugins:{legend:{display:!1},tooltip:{position:"side",displayColors:!1,backgroundColor:"#fff",borderColor:"#ededf1",borderWidth:1,bodyColor:"#000",titleColor:"#000",titleFont:{family:"Gensen",size:11},bodyFont:{family:"Gensen",size:11},caretSize:0,padding:{top:8,bottom:8,left:8,right:50},callbacks:{label:function(e){return`$${e.formattedValue}`},afterBody:function(e){const a=e[0].dataset.data.reduce((t,r)=>t+r,0);return`${(e[0].raw/a*100).toFixed(2)}%`}}}}},plugins:[g],data:{labels:["薪水","獎金"],datasets:[{data:[35e3,3e3],backgroundColor:["#E7D3AB","#D6BD8A"],borderColor:["rgba(247, 247, 247, 1)","rgba(247, 247, 247, 1)"]}]}})}
