import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,a as n,b as s,d as l,e as a}from"./app-bede4f5a.js";const i={},u=a(`<h1 id="typescript-的-enum-类型" tabindex="-1"><a class="header-anchor" href="#typescript-的-enum-类型" aria-hidden="true">#</a> TypeScript 的 Enum 类型</h1><p>Enum 是 TypeScript 新增的一种数据结构和类型，中文译为“枚举”。</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>实际开发中，经常需要定义一组相关的常量。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token constant">RED</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">GREEN</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">BLUE</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> color <span class="token operator">=</span> <span class="token function">userInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token constant">RED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/* */</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token constant">GREEN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/* */</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token constant">BLUE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/* */</span><span class="token punctuation">}</span>

<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;wrong color&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，常量<code>RED</code>、<code>GREEN</code>、<code>BLUE</code>是相关的，意为变量<code>color</code>的三个可能的取值。它们具体等于什么值其实并不重要，只要不相等就可以了。</p><p>TypeScript 就设计了 Enum 结构，用来将相关常量放在一个容器里面，方便使用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>     <span class="token comment">// 0</span>
  Green<span class="token punctuation">,</span>   <span class="token comment">// 1</span>
  Blue     <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例声明了一个 Enum 结构<code>Color</code>，里面包含三个成员<code>Red</code>、<code>Green</code>和<code>Blue</code>。第一个成员的值默认为整数<code>0</code>，第二个为<code>1</code>，第三个为<code>2</code>，以此类推。</p><p>使用时，调用 Enum 的某个成员，与调用对象属性的写法一样，可以使用点运算符，也可以使用方括号运算符。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> c <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green<span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> Color<span class="token punctuation">[</span><span class="token string">&#39;Green&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enum 结构本身也是一种类型。比如，上例的变量<code>c</code>等于<code>1</code>，它的类型可以是 Color，也可以是<code>number</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> c<span class="token operator">:</span>Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green<span class="token punctuation">;</span> <span class="token comment">// 正确</span>
<span class="token keyword">let</span> c<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green<span class="token punctuation">;</span> <span class="token comment">// 正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code>c</code>的类型写成<code>Color</code>或<code>number</code>都可以。但是，<code>Color</code>类型的语义更好。</p><p>Enum 结构的特别之处在于，它既是一种类型，也是一个值。绝大多数 TypeScript 语法都是类型语法，编译后会全部去除，但是 Enum 结构是一个值，编译后会变成 JavaScript 对象，留在代码中。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 编译前</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>     <span class="token comment">// 0</span>
  Green<span class="token punctuation">,</span>   <span class="token comment">// 1</span>
  Blue     <span class="token comment">// 2</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token keyword">let</span> Color <span class="token operator">=</span> <span class="token punctuation">{</span>
  Red<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  Green<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  Blue<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例是 Enum 结构编译前后的对比。</p><p>由于 TypeScript 的定位是 JavaScript 语言的类型增强，所以官方建议谨慎使用 Enum 结构，因为它不仅仅是类型，还会为编译后的代码加入一个对象。</p><p>Enum 结构比较适合的场景是，成员的值不重要，名字更重要，从而增加代码的可读性和可维护性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Operator <span class="token punctuation">{</span>
  <span class="token constant">ADD</span><span class="token punctuation">,</span>
  <span class="token constant">DIV</span><span class="token punctuation">,</span>
  <span class="token constant">MUL</span><span class="token punctuation">,</span>
  <span class="token constant">SUB</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">compute</span><span class="token punctuation">(</span>
  op<span class="token operator">:</span>Operator<span class="token punctuation">,</span>
  a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>op<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> Operator<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token operator">:</span>
      <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token keyword">case</span> Operator<span class="token punctuation">.</span><span class="token constant">DIV</span><span class="token operator">:</span>
      <span class="token keyword">return</span> a <span class="token operator">/</span> b<span class="token punctuation">;</span>
    <span class="token keyword">case</span> Operator<span class="token punctuation">.</span><span class="token constant">MUL</span><span class="token operator">:</span>
      <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token keyword">case</span> Operator<span class="token punctuation">.</span><span class="token constant">SUB</span><span class="token operator">:</span>
      <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;wrong operator&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">compute</span><span class="token punctuation">(</span>Operator<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，Enum 结构<code>Operator</code>的四个成员表示四则运算“加减乘除”。代码根本不需要用到这四个成员的值，只用成员名就够了。</p>`,21),d={href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#enum-overhaul",target:"_blank",rel:"noopener noreferrer"},r=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Bool <span class="token punctuation">{</span>
  No<span class="token punctuation">,</span>
  Yes
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>noYes<span class="token operator">:</span>Bool<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// TypeScript 5.0 之前不报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数<code>foo</code>的参数<code>noYes</code>是 Enum 类型，只有两个可用的值。但是，TypeScript 5.0 之前，任何数值作为函数<code>foo</code>的参数，编译都不会报错，TypeScript 5.0 纠正了这个问题。</p><p>另外，由于 Enum 结构编译后是一个对象，所以不能有与它同名的变量（包括对象、函数、类等）。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例，Enum 结构与变量同名，导致报错。</p><p>很大程度上，Enum 结构可以被对象的<code>as const</code>断言替代。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span>
  <span class="token constant">B</span><span class="token punctuation">,</span>
  <span class="token constant">C</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Bar <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token constant">B</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">C</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> Foo<span class="token punctuation">.</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> Bar<span class="token punctuation">.</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，对象<code>Bar</code>使用了<code>as const</code>断言，作用就是使得它的属性无法修改。这样的话，<code>Foo</code>和<code>Bar</code>的行为就很类似了，前者完全可以用后者替代，而且后者还是 JavaScript 的原生数据结构。</p><h2 id="enum-成员的值" tabindex="-1"><a class="header-anchor" href="#enum-成员的值" aria-hidden="true">#</a> Enum 成员的值</h2><p>Enum 成员默认不必赋值，系统会从零开始逐一递增，按照顺序为每个成员赋值，比如0、1、2……</p><p>但是，也可以为 Enum 成员显式赋值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  Green <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，Enum 每个成员的值都是显式赋值。</p><p>成员的值可以是任意数值，但不能是大整数（Bigint）。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">,</span>
  Green <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> <span class="token number">7n</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，Enum 成员的值可以是小数，但不能是 Bigint。</p><p>成员的值甚至可以相同。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  Green <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只设定第一个成员的值，后面成员的值就会从这个值开始递增。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>  <span class="token comment">// 8</span>
  Blue   <span class="token comment">// 9</span>
<span class="token punctuation">}</span>

<span class="token comment">// 或者</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span> <span class="token comment">// 0</span>
  Green <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span>
  Blue <span class="token comment">// 8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enum 成员的值也可以使用计算式。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Permission <span class="token punctuation">{</span>
  UserRead     <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">,</span>
  UserWrite    <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">7</span><span class="token punctuation">,</span>
  UserExecute  <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">6</span><span class="token punctuation">,</span>
  GroupRead    <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">,</span>
  GroupWrite   <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">4</span><span class="token punctuation">,</span>
  GroupExecute <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">3</span><span class="token punctuation">,</span>
  AllRead      <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">,</span>
  AllWrite     <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
  AllExecute   <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> Bool <span class="token punctuation">{</span>
  No <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">,</span>
  Yes <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，Enum 成员的值等于一个计算式，或者等于函数的返回值，都是正确的。</p><p>Enum 成员值都是只读的，不能重新赋值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue
<span class="token punctuation">}</span>

Color<span class="token punctuation">.</span>Red <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，重新为 Enum 成员赋值就会报错。</p><p>为了让这一点更醒目，通常会在 enum 关键字前面加上<code>const</code>修饰，表示这是常量，不能再次赋值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上<code>const</code>还有一个好处，就是编译为 JavaScript 代码后，代码中 Enum 成员会被替换成对应的值，这样能提高性能表现。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue
<span class="token punctuation">}</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> Color<span class="token punctuation">.</span>Red<span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green<span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> Color<span class="token punctuation">.</span>Blue<span class="token punctuation">;</span>

<span class="token comment">// 编译后</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">/* Color.Red */</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">/* Color.Green */</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">/* Color.Blue */</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，由于 Enum 结构前面加了<code>const</code>关键字，所以编译产物里面就没有生成对应的对象，而是把所有 Enum 成员出现的场合，都替换成对应的常量。</p><p>如果希望加上<code>const</code>关键词后，运行时还能访问 Enum 结构（即编译后依然将 Enum 转成对象），需要在编译时打开<code>preserveConstEnums</code>编译选项。</p><h2 id="同名-enum-的合并" tabindex="-1"><a class="header-anchor" href="#同名-enum-的合并" aria-hidden="true">#</a> 同名 Enum 的合并</h2><p>多个同名的 Enum 结构会自动合并。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span>，
  <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Foo</code>分成三段定义，系统会自动把它们合并。</p><p>Enum 结构合并时，只允许其中一个的首成员省略初始值，否则报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">B</span><span class="token punctuation">,</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Foo</code>的两段定义的第一个成员，都没有设置初始值，导致报错。</p><p>同名 Enum 合并时，不能有同名成员，否则报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span>
  <span class="token constant">B</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 报错</span>
  <span class="token constant">C</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Foo</code>的两段定义有一个同名成员<code>B</code>，导致报错。</p><p>同名 Enum 合并的另一个限制是，所有定义必须同为 const 枚举或者非 const 枚举，不允许混合使用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 正确</span>
<span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 正确</span>
<span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同名 Enum 的合并，最大用处就是补充外部定义的 Enum 结构。</p><h2 id="字符串-enum" tabindex="-1"><a class="header-anchor" href="#字符串-enum" aria-hidden="true">#</a> 字符串 Enum</h2><p>Enum 成员的值除了设为数值，还可以设为字符串。也就是说，Enum 也可以用作一组相关字符串的集合。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up <span class="token operator">=</span> <span class="token string">&#39;UP&#39;</span><span class="token punctuation">,</span>
  Down <span class="token operator">=</span> <span class="token string">&#39;DOWN&#39;</span><span class="token punctuation">,</span>
  Left <span class="token operator">=</span> <span class="token string">&#39;LEFT&#39;</span><span class="token punctuation">,</span>
  Right <span class="token operator">=</span> <span class="token string">&#39;RIGHT&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Direction</code>就是字符串枚举，每个成员的值都是字符串。</p><p>注意，字符串枚举的所有成员值，都必须显式设置。如果没有设置，成员值默认为数值，且位置必须在字符串成员之前。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Foo <span class="token punctuation">{</span>
  <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token comment">// 0</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">C</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>A</code>之前没有其他成员，所以可以不设置初始值，默认等于<code>0</code>；<code>C</code>之前有一个字符串成员，所以<code>C</code>必须有初始值，不赋值就报错了。</p><p>Enum 成员可以是字符串和数值混合赋值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
  One <span class="token operator">=</span> <span class="token string">&#39;One&#39;</span><span class="token punctuation">,</span>
  Two <span class="token operator">=</span> <span class="token string">&#39;Two&#39;</span><span class="token punctuation">,</span>
  Three <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
  Four <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了数值和字符串，Enum 成员不允许使用其他值（比如 Symbol 值）。</p><p>变量类型如果是字符串 Enum，就不能再赋值为字符串，这跟数值 Enum 不一样。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> MyEnum <span class="token punctuation">{</span>
  One <span class="token operator">=</span> <span class="token string">&#39;One&#39;</span><span class="token punctuation">,</span>
  Two <span class="token operator">=</span> <span class="token string">&#39;Two&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> s <span class="token operator">=</span> MyEnum<span class="token punctuation">.</span>One<span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token string">&#39;One&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code>s</code>的类型是<code>MyEnum</code>，再赋值为字符串就报错。</p><p>由于这个原因，如果函数的参数类型是字符串 Enum，传参时就不能直接传入字符串，而要传入 Enum 成员。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> MyEnum <span class="token punctuation">{</span>
  One <span class="token operator">=</span> <span class="token string">&#39;One&#39;</span><span class="token punctuation">,</span>
  Two <span class="token operator">=</span> <span class="token string">&#39;Two&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>arg<span class="token operator">:</span>MyEnum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;arg is &#39;</span> <span class="token operator">+</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token string">&#39;One&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，参数类型是<code>MyEnum</code>，直接传入字符串会报错。</p><p>所以，字符串 Enum 作为一种类型，有限定函数参数的作用。</p><p>前面说过，数值 Enum 的成员值往往不重要。但是有些场合，开发者可能希望 Enum 成员值可以保存一些有用的信息，所以 TypeScript 才设计了字符串 Enum。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> MediaTypes <span class="token punctuation">{</span>
  <span class="token constant">JSON</span> <span class="token operator">=</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">XML</span> <span class="token operator">=</span> <span class="token string">&#39;application/xml&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  headers<span class="token operator">:</span> <span class="token punctuation">{</span>
    Accept<span class="token operator">:</span> MediaTypes<span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>response <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数<code>fetch()</code>的参数对象的属性<code>Accept</code>，只能接受一些指定的字符串。这时就很适合把字符串放进一个 Enum 结构，通过成员值来引用这些字符串。</p><p>字符串 Enum 可以使用联合类型（union）代替。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">move</span><span class="token punctuation">(</span>
  where<span class="token operator">:</span><span class="token string">&#39;Up&#39;</span><span class="token operator">|</span><span class="token string">&#39;Down&#39;</span><span class="token operator">|</span><span class="token string">&#39;Left&#39;</span><span class="token operator">|</span><span class="token string">&#39;Right&#39;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数参数<code>where</code>属于联合类型，效果跟指定为字符串 Enum 是一样的。</p><p>注意，字符串 Enum 的成员值，不能使用表达式赋值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> MyEnum <span class="token punctuation">{</span>
  <span class="token constant">A</span> <span class="token operator">=</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;T&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，成员<code>B</code>的值是一个字符串表达式，导致报错。</p><h2 id="keyof-运算符" tabindex="-1"><a class="header-anchor" href="#keyof-运算符" aria-hidden="true">#</a> keyof 运算符</h2><p>keyof 运算符可以取出 Enum 结构的所有成员名，作为联合类型返回。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> MyEnum <span class="token punctuation">{</span>
  <span class="token constant">A</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// &#39;A&#39;|&#39;B&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">Foo</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> MyEnum<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>keyof typeof MyEnum</code>可以取出<code>MyEnum</code>的所有成员名，所以类型<code>Foo</code>等同于联合类型<code>&#39;A&#39;|&#39;B&#39;</code>。</p><p>注意，这里的<code>typeof</code>是必需的，否则<code>keyof MyEnum</code>相当于<code>keyof number</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Foo</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> MyEnum<span class="token punctuation">;</span>
<span class="token comment">// &quot;toString&quot; | &quot;toFixed&quot; | &quot;toExponential&quot; |</span>
<span class="token comment">// &quot;toPrecision&quot; | &quot;valueOf&quot; | &quot;toLocaleString&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类型<code>Foo</code>等于类型<code>number</code>的所有原生属性名组成的联合类型。</p><p>这是因为 Enum 作为类型，本质上属于<code>number</code>或<code>string</code>的一种变体，而<code>typeof MyEnum</code>会将<code>MyEnum</code>当作一个值处理，从而先其转为对象类型，就可以再用<code>keyof</code>运算符返回该对象的所有属性名。</p><p>如果要返回 Enum 所有的成员值，可以使用<code>in</code>运算符。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> MyEnum <span class="token punctuation">{</span>
  <span class="token constant">A</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// { a: any, b: any }</span>
<span class="token keyword">type</span> <span class="token class-name">Foo</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key <span class="token keyword">in</span> MyEnum<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，采用属性索引可以取出<code>MyEnum</code>的所有成员值。</p><h2 id="反向映射" tabindex="-1"><a class="header-anchor" href="#反向映射" aria-hidden="true">#</a> 反向映射</h2><p>数值 Enum 存在反向映射，即可以通过成员值获得成员名。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Weekdays <span class="token punctuation">{</span>
  Monday <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  Tuesday<span class="token punctuation">,</span>
  Wednesday<span class="token punctuation">,</span>
  Thursday<span class="token punctuation">,</span>
  Friday<span class="token punctuation">,</span>
  Saturday<span class="token punctuation">,</span>
  Sunday
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Weekdays<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// Wednesday</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，Enum 成员<code>Wednesday</code>的值等于3，从而可以从成员值<code>3</code>取到对应的成员名<code>Wednesday</code>，这就叫反向映射。</p><p>这是因为 TypeScript 会将上面的 Enum 结构，编译成下面的 JavaScript 代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> Weekdays<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Weekdays</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Weekdays<span class="token punctuation">[</span>Weekdays<span class="token punctuation">[</span><span class="token string">&quot;Monday&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Monday&quot;</span><span class="token punctuation">;</span>
    Weekdays<span class="token punctuation">[</span>Weekdays<span class="token punctuation">[</span><span class="token string">&quot;Tuesday&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Tuesday&quot;</span><span class="token punctuation">;</span>
    Weekdays<span class="token punctuation">[</span>Weekdays<span class="token punctuation">[</span><span class="token string">&quot;Wednesday&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Wednesday&quot;</span><span class="token punctuation">;</span>
    Weekdays<span class="token punctuation">[</span>Weekdays<span class="token punctuation">[</span><span class="token string">&quot;Thursday&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Thursday&quot;</span><span class="token punctuation">;</span>
    Weekdays<span class="token punctuation">[</span>Weekdays<span class="token punctuation">[</span><span class="token string">&quot;Friday&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Friday&quot;</span><span class="token punctuation">;</span>
    Weekdays<span class="token punctuation">[</span>Weekdays<span class="token punctuation">[</span><span class="token string">&quot;Saturday&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Saturday&quot;</span><span class="token punctuation">;</span>
    Weekdays<span class="token punctuation">[</span>Weekdays<span class="token punctuation">[</span><span class="token string">&quot;Sunday&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Sunday&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Weekdays <span class="token operator">||</span> <span class="token punctuation">(</span>Weekdays <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，实际进行了两组赋值，以第一个成员为例。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Weekdays<span class="token punctuation">[</span>
  Weekdays<span class="token punctuation">[</span><span class="token string">&quot;Monday&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Monday&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码有两个赋值运算符（<code>=</code>），实际上等同于下面的代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Weekdays<span class="token punctuation">[</span><span class="token string">&quot;Monday&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
Weekdays<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Monday&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这种情况只发生在数值 Enum，对于字符串 Enum，不存在反向映射。这是因为字符串 Enum 编译后只有一组赋值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> MyEnum <span class="token punctuation">{</span>
  <span class="token constant">A</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token keyword">var</span> MyEnum<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>MyEnum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MyEnum<span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
    MyEnum<span class="token punctuation">[</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>MyEnum <span class="token operator">||</span> <span class="token punctuation">(</span>MyEnum <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,94);function k(v,m){const e=t("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",d,[s("TypeScript 5.0"),l(e)]),s(" 之前，Enum 有一个 Bug，就是 Enum 类型的变量可以赋值为任何数值。")]),r])}const g=p(i,[["render",k],["__file","enum.html.vue"]]);export{g as default};
