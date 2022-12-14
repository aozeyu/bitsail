import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as s,b as n,d as r,w as p,e as i,r as c}from"./app.7bce0a75.js";const l={},d=s("h1",{id:"redis-connector-examples",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#redis-connector-examples","aria-hidden":"true"},"#"),n(" Redis connector examples")],-1),u=i(`<h2 id="redis-writer-example" tabindex="-1"><a class="header-anchor" href="#redis-writer-example" aria-hidden="true">#</a> Redis Writer example</h2><p>Suppose we start a local Redis with port 6379.</p><p>Configuration for writing the Redis cluster is:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.redis.sink.RedisOutputFormat&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;redis_data_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;redis_host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;redis_port&quot;</span><span class="token operator">:</span> <span class="token number">6379</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(k,v){const e=c("RouterLink");return t(),o("div",null,[d,s("p",null,[n("Parent document: "),r(e,{to:"/en/documents/connectors/redis/redis.html"},{default:p(()=>[n("redis-connector")]),_:1})]),u])}const b=a(l,[["render",m],["__file","redis-example.html.vue"]]);export{b as default};
