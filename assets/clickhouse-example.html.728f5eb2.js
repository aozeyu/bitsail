import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as s,d as o,w as c,e as l,r as i}from"./app.8a5777f9.js";const u={},r=n("h1",{id:"clickhouse-连接器示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#clickhouse-连接器示例","aria-hidden":"true"},"#"),s(" ClickHouse 连接器示例")],-1),k=l(`<h2 id="clickhouse-配置" tabindex="-1"><a class="header-anchor" href="#clickhouse-配置" aria-hidden="true">#</a> ClickHouse 配置</h2><p>假设 ClickHouse 服务配置为：</p><ul><li>JDBC URL：<code>jdbc:clickhouse://127.0.0.1:8123</code></li></ul><p>账户信息:</p><ul><li>用户：default</li><li>密码：1234567</li></ul><p>要写入的库表:</p><ul><li>库名：default</li><li>表名：test_ch_table</li></ul><p>表的建表语句为:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>default<span class="token punctuation">\`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>test_ch_table<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span> 
    <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> Int64<span class="token punctuation">,</span> 
    <span class="token identifier"><span class="token punctuation">\`</span>int_type<span class="token punctuation">\`</span></span> Int32<span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>double_type<span class="token punctuation">\`</span></span> Float64<span class="token punctuation">,</span> 
    <span class="token identifier"><span class="token punctuation">\`</span>string_type<span class="token punctuation">\`</span></span> String<span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>p_date<span class="token punctuation">\`</span></span> <span class="token keyword">Date</span>
<span class="token punctuation">)</span>
<span class="token keyword">ENGINE</span> <span class="token operator">=</span> MergeTree
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> toYYYYMM<span class="token punctuation">(</span>p_date<span class="token punctuation">)</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入部分测试数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>default<span class="token punctuation">\`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>test_ch_table<span class="token punctuation">\`</span></span>
    <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
       <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100001</span><span class="token punctuation">,</span> <span class="token number">100.001</span><span class="token punctuation">,</span> <span class="token string">&#39;text_0001&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2020-01-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">100002</span><span class="token punctuation">,</span> <span class="token number">100.002</span><span class="token punctuation">,</span> <span class="token string">&#39;text_0002&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2020-01-02&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clickhouse-读连接器配置" tabindex="-1"><a class="header-anchor" href="#clickhouse-读连接器配置" aria-hidden="true">#</a> ClickHouse 读连接器配置</h2><p>读取上述 ClickHouse 表的任务配置示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.clickhouse.source.ClickhouseSource&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jdbc_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jdbc:clickhouse://127.0.0.1:8123&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_ch_table&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;split_field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;split_config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;lower_bound\\&quot;: 0, \\&quot;upper_bound\\&quot;: 10000, \\&quot;split_num\\&quot;: 3}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sql_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;( id % 2 == 0 )&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;int64&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;int_type&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;int32&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double_type&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;float64&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string_type&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p_date&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function d(v,q){const a=i("RouterLink");return e(),p("div",null,[r,n("p",null,[s("父目录："),o(a,{to:"/zh/documents/connectors/clickhouse/clickhouse.html"},{default:c(()=>[s("ClickHouse 连接器")]),_:1})]),k])}const _=t(u,[["render",d],["__file","clickhouse-example.html.vue"]]);export{_ as default};
