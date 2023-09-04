import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-bede4f5a.js";const c={},t=e(`<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1><p>CSS 提供一些函数，方便操作。</p><h2 id="minmax" tabindex="-1"><a class="header-anchor" href="#minmax" aria-hidden="true">#</a> minmax</h2><p><code>minmax</code>提供一个长度范围，不小于较小值，不大于较大值。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token function">minmax</span><span class="token punctuation">(</span> min<span class="token punctuation">,</span> max <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果第二个参数<code>max</code>小于第一个参数<code>min</code>，那么<code>max</code>会被忽略，等同于将长度设置为<code>min</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token function">minmax</span><span class="token punctuation">(</span>400px<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span>
<span class="token function">minmax</span><span class="token punctuation">(</span>30%<span class="token punctuation">,</span> 300px<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>网格布局中，<code>max</code>也允许设置为比例因子<code>fr</code>，但<code>min</code>不能设置为<code>fr</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token function">minmax</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>网格布局中，还可以使用关键字<code>max-content</code>和<code>min-content</code>，分别表示最大的和最小的可分配宽度。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> max-content<span class="token punctuation">)</span>
<span class="token function">minmax</span><span class="token punctuation">(</span>min-content<span class="token punctuation">,</span> 400px<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关键字<code>auto</code>在<code>max</code>位置等同于<code>max-content</code>，在<code>min</code>位置等同于<code>min-content</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token function">minmax</span><span class="token punctuation">(</span>max-content<span class="token punctuation">,</span> auto<span class="token punctuation">)</span>
<span class="token function">minmax</span><span class="token punctuation">(</span>auto<span class="token punctuation">,</span> 300px<span class="token punctuation">)</span>
<span class="token function">minmax</span><span class="token punctuation">(</span>min-content<span class="token punctuation">,</span> auto<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="image-set" tabindex="-1"><a class="header-anchor" href="#image-set" aria-hidden="true">#</a> image-set()</h2><p><code>image-set()</code>用来选取符合响应式条件的图片。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">image-set</span><span class="token punctuation">(</span> <span class="token string">&quot;foo.png&quot;</span> 1x<span class="token punctuation">,</span> <span class="token string">&quot;foo-2x.png&quot;</span> 2x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),o=[t];function i(p,d){return a(),s("div",null,o)}const m=n(c,[["render",i],["__file","function.html.vue"]]);export{m as default};
