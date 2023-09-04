import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bede4f5a.js";const p={},t=e(`<h1 id="typescript-类型缩小" tabindex="-1"><a class="header-anchor" href="#typescript-类型缩小" aria-hidden="true">#</a> TypeScript 类型缩小</h1><p>TypeScript 变量的值可以变，但是类型通常是不变的。唯一允许的改变，就是类型缩小，就是将变量值的范围缩得更小。</p><h2 id="手动类型缩小" tabindex="-1"><a class="header-anchor" href="#手动类型缩小" aria-hidden="true">#</a> 手动类型缩小</h2><p>如果一个变量属于联合类型，所以使用时一般需要缩小类型。</p><p>第一种方法是使用<code>if</code>判断。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getScore</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// (A)</span>
    <span class="token comment">// %inferred-type: number</span>
    value<span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// (B)</span>
    <span class="token comment">// %inferred-type: string</span>
    value<span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Unsupported value: &#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个值是<code>any</code>或<code>unknown</code>，你又想对它进行处理，就必须先缩小类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">parseStringLiteral</span><span class="token punctuation">(</span>stringLiteral<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>stringLiteral<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// (A)</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Not a string literal: &#39;</span> <span class="token operator">+</span> stringLiteral<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是另一个例子。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  isbn<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getTitle</span><span class="token punctuation">(</span>book<span class="token operator">:</span> Book<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>book<span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// %inferred-type: null</span>
    book<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&#39;(Untitled)&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// %inferred-type: string</span>
    book<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
    <span class="token keyword">return</span> book<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缩小类型的前提是，需要先获取类型。获取类型的几种方法如下。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token operator">|</span>Date<span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// %inferred-type: Function</span>
    value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// %inferred-type: Date</span>
    value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// %inferred-type: number[]</span>
    value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typeof-运算符" tabindex="-1"><a class="header-anchor" href="#typeof-运算符" aria-hidden="true">#</a> typeof 运算符</h3><p>第二种方法是使用<code>switch</code>缩小类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getScore</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;number&#39;</span><span class="token operator">:</span>
      <span class="token comment">// %inferred-type: number</span>
      value<span class="token punctuation">;</span>
      <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;string&#39;</span><span class="token operator">:</span>
      <span class="token comment">// %inferred-type: string</span>
      value<span class="token punctuation">;</span>
      <span class="token keyword">return</span> value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Unsupported value: &#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instanceof-运算符" tabindex="-1"><a class="header-anchor" href="#instanceof-运算符" aria-hidden="true">#</a> instanceof 运算符</h3><p>第三种方法是instanceof运算符。它能够检测实例对象与构造函数之间的关系。instanceof运算符的左操作数为实例对象，右操作数为构造函数，若构造函数的prototype属性值存在于实例对象的原型链上，则返回true；否则，返回false。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Date <span class="token operator">|</span> RegExp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">;</span> <span class="token comment">// Date</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">;</span> <span class="token comment">// RegExp</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>instanceof类型守卫同样适用于自定义构造函数，并对其实例对象进行类型细化。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token keyword">instanceof</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       x<span class="token punctuation">;</span> <span class="token comment">// A</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token keyword">instanceof</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       x<span class="token punctuation">;</span> <span class="token comment">// B</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in-运算符" tabindex="-1"><a class="header-anchor" href="#in-运算符" aria-hidden="true">#</a> in 运算符</h3><p>第四种方法是使用in运算符。</p><p>in运算符是JavaScript中的关系运算符之一，用来判断对象自身或其原型链中是否存在给定的属性，若存在则返回true，否则返回false。in运算符有两个操作数，左操作数为待测试的属性名，右操作数为测试对象。</p><p>in类型守卫根据in运算符的测试结果，将右操作数的类型细化为具体的对象类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span> <span class="token keyword">in</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">;</span> <span class="token comment">// A</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">;</span> <span class="token comment">// B</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">pickAB</span><span class="token punctuation">(</span>ab<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span> <span class="token keyword">in</span> ab<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ab <span class="token comment">// Type is A</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
 ab <span class="token comment">// Type is B</span>
 <span class="token punctuation">}</span>
 ab <span class="token comment">// Type is A | B</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缩小对象的属性，要用<code>in</code>运算符。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FirstOrSecond</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>first<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">}</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>second<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span>firstOrSecond<span class="token operator">:</span> FirstOrSecond<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;second&#39;</span> <span class="token keyword">in</span> firstOrSecond<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// %inferred-type: { second: string; }</span>
    firstOrSecond<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span>firstOrSecond<span class="token operator">:</span> FirstOrSecond<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// @ts-expect-error: Property &#39;second&#39; does not exist on</span>
  <span class="token comment">// type &#39;FirstOrSecond&#39;. [...]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>firstOrSecond<span class="token punctuation">.</span>second <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ···</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>in</code>运算符只能用于联合类型，不能用于检查一个属性是否存在。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// %inferred-type: object</span>
    obj<span class="token punctuation">;</span>

    <span class="token comment">// 报错</span>
    obj<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特征属性" tabindex="-1"><a class="header-anchor" href="#特征属性" aria-hidden="true">#</a> 特征属性</h3><p>对于不同对象之间的区分，还可以人为地为每一类对象设置一个特征属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UploadEvent</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;upload&#39;</span><span class="token punctuation">;</span>
    filename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    contents<span class="token operator">:</span> <span class="token builtin">string</span> 
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">DownloadEvent</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;download&#39;</span><span class="token punctuation">;</span> filename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">AppEvent</span> <span class="token operator">=</span> UploadEvent <span class="token operator">|</span> DownloadEvent<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>e<span class="token operator">:</span> AppEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">switch</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">case</span> <span class="token string">&#39;download&#39;</span><span class="token operator">:</span>
 e <span class="token comment">// Type is DownloadEvent</span>
 <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token keyword">case</span> <span class="token string">&#39;upload&#39;</span><span class="token operator">:</span>
 e<span class="token punctuation">;</span> <span class="token comment">// Type is UploadEvent</span>
 <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="any-类型的细化" tabindex="-1"><a class="header-anchor" href="#any-类型的细化" aria-hidden="true">#</a> any 类型的细化</h2><p>TypeScript 推断变量类型时，会根据获知的信息，不断改变推断出来的类型，越来越细化。这种现象在<code>any</code>身上特别明显。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">range</span><span class="token punctuation">(</span>
  start<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
  limit<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> out <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 类型为 any[]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> limit<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    out<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> out<span class="token punctuation">;</span> <span class="token comment">// 类型为 number[]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code>out</code>的类型一开始推断为<code>any[]</code>，后来在里面放入数值，类型就变为<code>number[]</code>。</p><p>再看下面的例子。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 类型为 any[]</span>
result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result <span class="token comment">// 类型为 string[]</span>
result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result <span class="token comment">// 类型为 (string | number)[]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，数组<code>result</code>随着成员类型的不同，而不断改变自己的类型。</p><p>注意，这种<code>any</code>类型的细化，只在打开了编译选项<code>noImplicitAny</code>时发生。</p><p>这时，如果在变量的推断类型还为<code>any</code>时（即没有任何写操作)，就去输出（或读取）该变量，则会报错，因为这时推断还没有完成，无法满足<code>noImplicitAny</code>的要求。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 类型为 any[]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 类型为 string[]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，只有运行完第三行，<code>result</code>的类型才能完成第一次推断，所以第二行读取<code>result</code>就会报错。</p><h2 id="is-运算符" tabindex="-1"><a class="header-anchor" href="#is-运算符" aria-hidden="true">#</a> is 运算符</h2><p><code>is</code>运算符返回一个布尔值，用来判断左侧的值是否属于右侧的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isInputElement</span><span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span><span class="token operator">:</span> el <span class="token keyword">is</span> HTMLInputElement <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;value&#39;</span> <span class="token keyword">in</span> el<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getElementContent</span><span class="token punctuation">(</span>el<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInputElement</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 el<span class="token punctuation">;</span> <span class="token comment">// Type is HTMLInputElement</span>
    <span class="token keyword">return</span> el<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 el<span class="token punctuation">;</span> <span class="token comment">// Type is HTMLElement</span>
 <span class="token keyword">return</span> el<span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">isDefined</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token operator">:</span> x <span class="token keyword">is</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> x <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","narrowing.html.vue"]]);export{d as default};
