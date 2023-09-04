import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as a}from"./app-bede4f5a.js";const t={},c=a(`<h1 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局" aria-hidden="true">#</a> 响应式布局</h1><p>图片自适应各种屏幕的写法。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用<code>&lt;img&gt;</code>或<code>&lt;picture&gt;</code>元素的<code>srcset</code>属性，上面这样的写法就够了。但是，对于普通的<code>&lt;img&gt;</code>元素，还要加上<code>max-width: 100%;</code>，这是为了防止图片大于容器宽度的情况。</p>`,4),o=[c];function i(d,p){return e(),n("div",null,o)}const u=s(t,[["render",i],["__file","responsive.html.vue"]]);export{u as default};
