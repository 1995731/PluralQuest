(function(root){
const labels=['جمع المذكر السالم','جمع المؤنث السالم','جمع التكسير'];
const pre=[
{q:'ما نوع الجمع في «مزارعون»؟',o:labels,a:0,t:0},
{q:'ما نوع الجمع في «رسّامات»؟',o:labels,a:1,t:1},
{q:'ما نوع الجمع في «أشجار»؟',o:labels,a:2,t:2},
{q:'اختر جمع المذكر السالم لكلمة «مهندس».',o:['مهندسون','مهندسان','مهندسات'],a:0,t:0},
{q:'ما جمع «معلّمة» جمع مؤنث سالمًا؟',o:['معلّمتان','معلّمات','معلّمون'],a:1,t:1},
{q:'ما جمع «باب»؟',o:['بابان','بابون','أبواب'],a:2,t:2}];
const post=[
{q:'ما نوع الجمع في «ناجحون»؟',o:labels,a:0,t:0},
{q:'ما نوع الجمع في «كاتبات»؟',o:labels,a:1,t:1},
{q:'ما نوع الجمع في «حدائق»؟',o:labels,a:2,t:2},
{q:'اختر جمع المذكر السالم لكلمة «مبدع».',o:['مبدعات','مبدعون','مبدعان'],a:1,t:0},
{q:'ما جمع «زائرة» جمع مؤنث سالمًا؟',o:['زائرون','زائرتان','زائرات'],a:2,t:1},
{q:'ما جمع «جبل»؟',o:['جبال','جبلون','جبلان'],a:0,t:2}];
function summarize(bank,answers){if(answers.length!==bank.length||answers.some((a,i)=>!Number.isInteger(a)||a<0||a>=bank[i].o.length))throw Error('Incomplete assessment');const skills=labels.map((label,t)=>({label,total:bank.filter(q=>q.t===t).length,correct:bank.filter((q,i)=>q.t===t&&q.a===answers[i]).length}));const score=skills.reduce((n,s)=>n+s.correct,0);return {score,total:bank.length,skills,mastered:score>=5,at:new Date().toISOString()};}
function weakType(result){if(!result)return null;const counts=result.skills.map(s=>s.correct/s.total);const min=Math.min(...counts);return min===1?null:counts.indexOf(min);}
root.ADDIEModel={pre,post,labels,summarize,weakType};if(typeof module!=='undefined')module.exports=root.ADDIEModel;
})(globalThis);
