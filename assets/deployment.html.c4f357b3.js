import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as p,a as n,d as e,w as c,b as a,e as s,r as i}from"./app.7bce0a75.js";const d={},u=n("h1",{id:"部署指南",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#部署指南","aria-hidden":"true"},"#"),a(" 部署指南")],-1),h=s('<blockquote><p>目前 BitSail 仅支持本地和Yarn上部署。 其他平台的部署（例如原生kubernetes）将在不久后支持。</p></blockquote><p>本部分目录:</p><ul><li><a href="#%E9%83%A8%E7%BD%B2%E6%8C%87%E5%8D%97">部署指南</a><ul><li><a href="#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE"><span id="jump_pre_configure">环境配置</span></a><ul><li><a href="#%E9%85%8D%E7%BD%AEhadoop"><span id="jump_configure_hadoop">配置Hadoop</span></a></li><li><a href="#%E9%85%8D%E7%BD%AEflink"><span id="jump_configure_flink">配置Flink</span></a></li></ul></li><li><a href="#%E6%8F%90%E4%BA%A4%E5%88%B0yarn"><span id="jump_submit_to_yarn">提交到Yarn</span></a><ul><li><a href="#%E6%8F%90%E4%BA%A4%E4%B8%80%E4%B8%AA%E7%A4%BA%E4%BE%8B%E4%BD%9C%E4%B8%9A"><span id="jump_submit_example">提交一个示例作业</span></a></li><li><a href="#%E8%B0%83%E8%AF%95%E6%97%A5%E5%BF%97"><span id="jump_log">调试日志</span></a><ul><li><a href="#client%E7%AB%AF%E6%97%A5%E5%BF%97">client端日志</a></li><li><a href="#yarn%E4%BD%9C%E4%B8%9A%E6%97%A5%E5%BF%97">Yarn作业日志</a></li></ul></li></ul></li><li><a href="#%E6%9C%AC%E5%9C%B0%E6%8F%90%E4%BA%A4">本地提交</a><ul><li><a href="#%E8%BF%90%E8%A1%8Cfake_to_print%E7%A4%BA%E4%BE%8B%E4%BD%9C%E4%B8%9A">运行Fake_to_Print示例作业</a></li><li><a href="#%E8%BF%90%E8%A1%8Cfake_to_hive%E7%A4%BA%E4%BE%8B%E4%BD%9C%E4%B8%9A">运行Fake_to_Hive示例作业</a></li></ul></li></ul></li></ul><p>下面各部分详细介绍BitSail的部署。</p><hr><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> <span id="jump_pre_configure">环境配置</span></h2><h3 id="配置hadoop" tabindex="-1"><a class="header-anchor" href="#配置hadoop" aria-hidden="true">#</a> <span id="jump_configure_hadoop">配置Hadoop</span></h3><p>为了支持Yarn部署，需要在环境变量中配置<code>HADOOP_CLASSPATH</code>。目前有两种方式设置:</p>',8),b=n("li",null,[n("p",null,[a("直接手动设置 "),n("code",null,"HADOOP_CLASSPATH"),a("。")])],-1),m=n("code",null,"HADOOP_HOME",-1),k={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/bin/bitsail",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"HADOOP_CLASSPATH",-1),v=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$HADOOP_HOME</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_CLASSPATH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$HADOOP_HOME/bin/hadoop classpath<span class="token variable">)</span></span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置flink" tabindex="-1"><a class="header-anchor" href="#配置flink" aria-hidden="true">#</a> <span id="jump_configure_flink">配置Flink</span></h3>`,2),f={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/resources/bitsail.conf",target:"_blank",rel:"noopener noreferrer"},g=s('<p>下面是一些常用的配置项:</p><table><tr><th>参数前缀</th><th>参数名称</th><th>参数描述</th><th>示例</th></tr><tr><td rowspan="3">sys.flink.</td><td>flink_home</td><td>使用的flink所在目录.</td><td>${BITSAIL_HOME}/embedded/flink</td></tr><tr><td>checkpoint_dir</td><td>存储flink checkpoint元数据和数据文件的路径。详情参考:<a href="https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/checkpoints/">Flink Checkpoints</a></td><td>&quot;hdfs://opensource/bitsail/flink-1.11/checkpoints/&quot;</td></tr><tr><td>flink_default_properties</td><td>通用的flink运行参数，以 &quot;-D xxx=xxx&quot; 方式传递。</td><td>{<br> classloader.resolve-order: &quot;child-first&quot;<br> akka.framesize: &quot;838860800b&quot;<br> rest.client.max-content-length: 838860800<br> rest.server.max-content-len<br>} </td></tr></table><hr><h2 id="提交到yarn" tabindex="-1"><a class="header-anchor" href="#提交到yarn" aria-hidden="true">#</a> <span id="jump_submit_to_yarn">提交到Yarn</span></h2><blockquote><p><em><strong>BitSail</strong></em> 目前仅支持flink的 <code>yarn-per-job</code> 模式提交。</p></blockquote><p>你可以使用 <code>bin/bitsail</code> 脚本将flink作业提交到yarn上。具体的执行指令如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> ./bin/bitsail run <span class="token parameter variable">--engine</span> flink <span class="token parameter variable">--conf</span> <span class="token punctuation">[</span>job_conf_path<span class="token punctuation">]</span> --execution-mode run <span class="token parameter variable">--queue</span> <span class="token punctuation">[</span>queue_name<span class="token punctuation">]</span> --deployment-mode yarn-per-job <span class="token punctuation">[</span>--priority <span class="token punctuation">[</span>yarn_priority<span class="token punctuation">]</span> -p/--props <span class="token punctuation">[</span>name<span class="token operator">=</span>value<span class="token punctuation">]</span><span class="token punctuation">]</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面中括号内的参数说明如下：</p><ul><li>必需参数: <ul><li><strong>queue_name</strong>: 要提交的yarn队列</li><li><strong>job_conf_path</strong>: 作业的配置文件</li></ul></li><li>可选参数: <ul><li><strong>yarn_priority</strong>: 作业在队列上的优先级</li><li><strong>name=value</strong>: flink运行属性，以 &quot;-D name=value&quot; 方式添加在flink run命令后 <ul><li><strong>name</strong>: 要添加的属性名</li><li><strong>value</strong>: 要添加的属性值</li><li>例如 <code>classloader.resolve-order=child-first</code></li></ul></li></ul></li></ul><h3 id="提交一个示例作业" tabindex="-1"><a class="header-anchor" href="#提交一个示例作业" aria-hidden="true">#</a> <span id="jump_submit_example">提交一个示例作业</span></h3><p>可以使用如下指令提交一个 Fake2Print 测试作业到default队列。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> ./bin/bitsail run <span class="token parameter variable">--engine</span> flink <span class="token parameter variable">--conf</span> ~/bitsail-archive-0.1.0-SNAPSHOT/examples/Fake_Proint_Example.json --execution-mode run <span class="token parameter variable">-p</span> <span class="token assign-left variable">1</span><span class="token operator">=</span><span class="token number">1</span>  --deployment-mode yarn-per-job  <span class="token parameter variable">--queue</span> default\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="调试日志" tabindex="-1"><a class="header-anchor" href="#调试日志" aria-hidden="true">#</a> <span id="jump_log">调试日志</span></h3><h4 id="client端日志" tabindex="-1"><a class="header-anchor" href="#client端日志" aria-hidden="true">#</a> client端日志</h4><p>可以在 <code>${FLINK_HOME}/log/</code> 中找到BitSail client端的执行日志。</p><h4 id="yarn作业日志" tabindex="-1"><a class="header-anchor" href="#yarn作业日志" aria-hidden="true">#</a> Yarn作业日志</h4><p>可以通过Yarn的WebUI来查看Flink JobManager和TaskManager的日志。</p><hr><h2 id="本地提交" tabindex="-1"><a class="header-anchor" href="#本地提交" aria-hidden="true">#</a> 本地提交</h2><p>假设BitSail的安装路径为: <code>${BITSAIL_HOME}</code>。打包BitSail后，我们可以在如下路径中找到可运行jar包以及示例作业配置文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">${BITSAIL_HOME}</span>/bitsail-dist/target/bitsail-dist-0.1.0-SNAPSHOT-bin/bitsail-archive-0.1.0-SNAPSHOT/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="运行fake-to-print示例作业" tabindex="-1"><a class="header-anchor" href="#运行fake-to-print示例作业" aria-hidden="true">#</a> 运行Fake_to_Print示例作业</h3>',22),E={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/examples/Fake_Print_Example.json",target:"_blank",rel:"noopener noreferrer"},x=s(`<ul><li><code>&lt;job-manager-address&gt;</code>: 要连接的的JobManager地址，格式为host:port，例如<code>localhost:8081</code>。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> bin/bitsail run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
  --execution-mode run <span class="token punctuation">\\</span>
  --deployment-mode <span class="token builtin class-name">local</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--conf</span> examples/Fake_Print_Example.json <span class="token punctuation">\\</span>
  --jm-address <span class="token operator">&lt;</span>job-manager-address<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令后，可以在Flink WebUI中查看运行的Fake_to_Print作业。在task manager的stdout文件中可以看到作业输出。</p><h3 id="运行fake-to-hive示例作业" tabindex="-1"><a class="header-anchor" href="#运行fake-to-hive示例作业" aria-hidden="true">#</a> 运行Fake_to_Hive示例作业</h3>`,4),A={href:"https://github.com/bytedance/bitsail/blob/master/bitsail-dist/src/main/archive/examples/Fake_Hive_Example.json",target:"_blank",rel:"noopener noreferrer"},B=s(`<ul><li>在运行前补充完整配置文件中的hive信息: <ul><li><code>job.writer.db_name</code>: 要写入的hive库.</li><li><code>job.writer.table_name</code>: 要写入的hive表.</li><li><code>job.writer.metastore_properties</code>: hive的连接信息，包括metastore地址等:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token punctuation">{</span>
      <span class="token string">&quot;job&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;writer&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;metastore_properties&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{<span class="token entity" title="\\&quot;">\\&quot;</span>hive.metastore.uris<span class="token entity" title="\\&quot;">\\&quot;</span>:<span class="token entity" title="\\&quot;">\\&quot;</span>thrift://localhost:9083<span class="token entity" title="\\&quot;">\\&quot;</span>}&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>执行如下命令，便可以在指定的Flink session中启动一个Fake_to_Hive作业:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> bin/bitsail run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--engine</span> flink <span class="token punctuation">\\</span>
  --execution-mode run <span class="token punctuation">\\</span>
  --deployment-mode <span class="token builtin class-name">local</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--conf</span> examples/Fake_Hive_Example.json <span class="token punctuation">\\</span>
  --jm-address <span class="token operator">&lt;</span>job-manager-address<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function y(q,j){const l=i("RouterLink"),t=i("ExternalLinkIcon");return r(),p("div",null,[u,n("p",null,[e(l,{to:"/en/documents/start/deployment.html"},{default:c(()=>[a("English")]),_:1}),a(" | 简体中文")]),h,n("ol",null,[b,n("li",null,[n("p",null,[a("设置环境变量 "),m,a("。此环境变量指向环境中使用的hadoop目录。根据此环境变量，"),n("a",k,[a("bitsail"),e(t)]),a(" 脚本可生成 "),_,a("。")])])]),v,n("p",null,[a("打包完成后，产物中包含可配置flink的文件 "),n("a",f,[a("conf/bitsail.conf"),e(t)]),a(" 。 这个文件描述了系统中使用的flink环境，包括flink所在目录以及其他默认参数。")]),g,n("p",null,[a("以 "),n("a",E,[a("examples/Fake_Print_Example.json"),e(t)]),a(" 为例来启动一个本地BitSail作业:")]),x,n("p",null,[a("以 "),n("a",A,[a("examples/Fake_hive_Example.json"),e(t)]),a(" 为例:")]),B])}const S=o(d,[["render",y],["__file","deployment.html.vue"]]);export{S as default};
