import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bede4f5a.js";const t={},p=e(`<h1 id="stdbool-h" tabindex="-1"><a class="header-anchor" href="#stdbool-h" aria-hidden="true">#</a> stdbool.h</h1><p><code>stdbool.h</code>头文件定义了4个宏。</p><ul><li><code>bool</code>：定义为<code>_Bool</code>。</li><li><code>true</code>：定义为1。</li><li><code>false</code>：定义为0。</li><li><code>__bool_true_false_are_defined</code>：定义为1。</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>bool <span class="token function">isEven</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> false<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdbool.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">unsigned</span> <span class="token keyword">long</span> num<span class="token punctuation">;</span>
  <span class="token keyword">unsigned</span> <span class="token keyword">long</span> div<span class="token punctuation">;</span>
  bool isPrime <span class="token operator">=</span> true<span class="token punctuation">;</span>

  num <span class="token operator">=</span> <span class="token number">64457</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>div <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token punctuation">(</span>div <span class="token operator">*</span> div<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> div<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> div <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> isPrime <span class="token operator">=</span> false<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPrime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lu is prime.\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lu is not prime.\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","stdbool.h.html.vue"]]);export{r as default};
