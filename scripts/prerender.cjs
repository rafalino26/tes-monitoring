/* Build clean first-paint HTML for HTML to Design. No browser or build dependency needed. */
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const rawApp=fs.readFileSync(path.join(root,'app.js'),'utf8');
const inputData=fs.readFileSync(path.join(root,'data.js'),'utf8'),designData=fs.readFileSync(path.join(root,'design-data.js'),'utf8');
const dataContext=vm.createContext({window:{}});vm.runInContext(designData,dataContext);
const programs=dataContext.window.SEAMOLEC_DESIGN_DATA.programs;
const base=fs.readFileSync(path.join(root,'program.html'),'utf8');
for(const p of programs)for(const tab of ['components','kpi','documents','about']){
 const file=`flagship-${p.id.toLowerCase()}${tab==='components'?'':'_'+tab}.html`;
 fs.writeFileSync(path.join(root,file),base.replace('Detail flagship — SEAMOLEC',`${p.name} — SEAMOLEC`));
}
for(const file of fs.readdirSync(root).filter(x=>x.endsWith('.html'))){
 let html=fs.readFileSync(path.join(root,file),'utf8');if(!html.includes('src="app.js"'))continue;
 const main={innerHTML:''},header={innerHTML:''};
 const ctx=vm.createContext({window:{},document:{activeElement:null,querySelector:s=>s==='#main'?main:s==='#header'?header:{textContent:''},addEventListener(){}},location:{pathname:'/'+file,search:''},localStorage:{getItem:()=>null},sessionStorage:{getItem:()=>null},structuredClone,URLSearchParams,Intl});
 vm.runInContext(inputData,ctx);vm.runInContext(designData,ctx);vm.runInContext(rawApp,ctx);
 html=html.replace(/<header class="topbar" id="header">[\s\S]*?<\/header>/,`<header class="topbar" id="header">${header.innerHTML}</header>`);
 html=html.replace(/<main class="main" id="main">[\s\S]*?<\/main>/,`<main class="main" id="main">${main.innerHTML}</main>`);
 fs.writeFileSync(path.join(root,file),html.replace(/[ \t]+$/gm,''));
}
console.log('Pre-rendered HTML: 11 main pages and 36 flagship views.');
