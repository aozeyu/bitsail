import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as r,a,b as t,d as e,w as s,e as d,r as i}from"./app.7bce0a75.js";const p={},c=a("h1",{id:"druid-connector",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#druid-connector","aria-hidden":"true"},"#"),t(" Druid connector")],-1),u=d(`<p><em><strong>BitSail</strong></em> Druid connector supports writing druid data-sources.</p><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>connector-druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="druid-writer" tabindex="-1"><a class="header-anchor" href="#druid-writer" aria-hidden="true">#</a> Druid Writer</h2><h3 id="supported-data-type" tabindex="-1"><a class="header-anchor" href="#supported-data-type" aria-hidden="true">#</a> Supported data type</h3><p>Support common Druid data types:</p><ul><li>Long</li><li>Float</li><li>Double</li><li>String</li></ul><h3 id="supported-operation-type" tabindex="-1"><a class="header-anchor" href="#supported-operation-type" aria-hidden="true">#</a> Supported operation type</h3><p>Support the following operations:</p><ul><li>INSERT</li></ul><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.writer</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.druid.sink.DruidSink&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;datasource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testDruidDataSource&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;coordinator_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost:8888&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Druid writer&#39;s class name, <code>com.bytedance.bitsail.connector.druid.sink.DruidSink</code></td></tr><tr><td style="text-align:left;">datasource</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Druid DataSource to write</td></tr><tr><td style="text-align:left;">coordinator_url</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Druid master addresses. Format is <code>&lt;host&gt;:&lt;port&gt;</code></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">The name and type of columns to write</td></tr></tbody></table><hr><h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>`,18);function h(m,g){const n=i("RouterLink");return l(),r("div",null,[c,a("p",null,[t("Parent document: "),e(n,{to:"/en/documents/connectors/"},{default:s(()=>[t("connectors")]),_:1})]),u,a("p",null,[t("Configuration example: "),e(n,{to:"/en/documents/connectors/druid/druid-example.html"},{default:s(()=>[t("druid-connector-example")]),_:1})])])}const v=o(p,[["render",h],["__file","druid.html.vue"]]);export{v as default};
