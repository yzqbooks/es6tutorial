import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as p,a as n,b as s,d as e,e as c}from"./app-bede4f5a.js";const o={},u=c(`<h1 id="table-布局" tabindex="-1"><a class="header-anchor" href="#table-布局" aria-hidden="true">#</a> Table 布局</h1><p>CSS 可以让 HTML 元素像表格那样排列。</p><p>下面是表格的各个 HTML 标签，所对应的布局模式。</p><ul><li>table { display: table }</li><li>tr { display: table-row }</li><li>thead { display: table-header-group }</li><li>tbody { display: table-row-group }</li><li>tfoot { display: table-footer-group }</li><li>col { display: table-column }</li><li>colgroup { display: table-column-group }</li><li>td, th { display: table-cell }</li><li>caption { display: table-caption }</li></ul><p>表格布局可以很简单地做到垂直居中。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>table-cell<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法相比下面的写法，更容易理解。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表格布局的另一个用途是，让页尾总是显示在浏览器的最低部，即使页面高度不足一页。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  HTML 代码如下
  &lt;body&gt;
    &lt;div class=&quot;main&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;footer&quot;&gt;&lt;/div&gt;
  &lt;/body&gt;
*/</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-row<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于上面这种底部固定的技巧，可以使用表格布局，完成圣杯布局，即页面从上到下分成页首 + 内容 + 页尾三部分，其中内容部分又分成左边栏和右边栏。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  HTML 代码如下
&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;header&quot;&gt;HEADER&lt;/div&gt;
  &lt;div class=&quot;main&quot;&gt;
    &lt;div class=&quot;box sidebar&quot;&gt;Left-sidebar&lt;/div&gt;
    &lt;div class=&quot;box content&quot;&gt;Main Content&lt;/div&gt;
    &lt;div class=&quot;box sidebar&quot;&gt;Right-sidebar&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;footer&quot;&gt;FOOTER&lt;/div&gt;
&lt;/div&gt;
*/</span>

<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-row<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-row<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用表格的不同性质的行，可以调整行的显示位置。</p><ul><li><code>display:table-caption</code>使得该行显示在表格的最顶部。</li><li><code>display:table-header-group</code>使得该行显示在表格的头部，但是位置低于<code>table-caption</code>的行。</li><li><code>display:table-footer-group</code>使得该行显示在表格的底部。</li></ul><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,15),d={href:"https://colintoh.com/blog/display-table-anti-hero",target:"_blank",rel:"noopener noreferrer"},r={href:"https://iandevlin.com/blog/2013/06/css/css-stacking-with-display-table/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://benfrain.com/css-performance-test-flexbox-v-css-table-fight/",target:"_blank",rel:"noopener noreferrer"};function b(k,m){const a=i("ExternalLinkIcon");return l(),p("div",null,[u,n("ul",null,[n("li",null,[s("Colin Toh, "),n("a",d,[s('The Anti-hero of CSS Layout - "display:table"'),e(a)])]),n("li",null,[s("Ian Devlin, "),n("a",r,[s("CSS stacking with display:table"),e(a)])]),n("li",null,[s("Ben Frain, "),n("a",v,[s("CSS performance test: Flexbox v CSS Table"),e(a)])])])])}const y=t(o,[["render",b],["__file","table.html.vue"]]);export{y as default};
