import{_ as u,o as c,c as p,a as s,b as a,w as e,F as v,r as m,d as t,e as n,f as o,t as k}from"./app.518a6c25.js";var g="/webdocs/assets/25.b9fdac23.jpg",h="/webdocs/imgs/44.png";const b={},_={class:"table-of-contents"},f=n("\u7B2C\u4E8C\u6B65 \u4E86\u89E3\u914D\u7F6E"),w=n("\u5BFC\u5165\u4EE3\u7801\u5757"),x=n("\u76F8\u5BF9\u8DEF\u5F84"),j=t(`<h1 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress" aria-hidden="true">#</a> Hello VuePress</h1><p>\u8FD9\u662F\u5B66\u4E60vuepress\u7684\u7B2C\u4E00\u6B65 \u642D\u5EFA\u73AF\u5883</p><h2 id="\u7B2C\u4E8C\u6B65-\u4E86\u89E3\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-\u4E86\u89E3\u914D\u7F6E" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B65 \u4E86\u89E3\u914D\u7F6E</h2><ul><li>\u914D\u7F6E\u4E00</li><li>\u914D\u7F6E\u4E8C vuepress2 \u5DF2\u7ECF\u53D1\u5E03\u4E86 \u{1F389}</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defaultTheme <span class="token punctuation">,</span> defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;\u4F60\u597D vuepress&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span><span class="token string">&#39;https://vuejs.org/images/logo.png&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD9\u91CC\u4FDD\u6301\u539F\u6837 --&gt;</span>
1+2+3 = {{1+2+3}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code> <span class="token comment">&lt;!-- \u8FD9\u91CC\u4F1A\u88ABvue\u7F16\u8BD1 --&gt;</span>
1 + 2 + 3 = 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7531\u4E8E\u4EE3\u7801\u9AD8\u4EAE\uFF0C\u8FD9\u91CC\u4E0D\u4F1A\u88AB\u6B63\u786E\u7F16\u8BD1</span>
<span class="token keyword">const</span> onePlusTwoPlusThress <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BFC\u5165\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u4EE3\u7801\u5757" aria-hidden="true">#</a> \u5BFC\u5165\u4EE3\u7801\u5757</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u6700\u7B80\u5355\u7684\u5BFC\u5165 --&gt;</span>
@<span class="token url">[<span class="token content">code</span>](<span class="token url">./foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u5BFC\u5165\u90E8\u5206\u4EE3\u7801\u53EF\u4EE5\u8FD9\u6837\u5199 --&gt;</span>
@<span class="token url">[<span class="token content">code{1-10}</span>](<span class="token url">./foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u663E\u793A\u6307\u5B9A\u5BFC\u5165\u7684\u4EE3\u7801\u7C7B\u578B --&gt;</span>
@<span class="token url">[<span class="token content">code js</span>](<span class="token url">./foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),y=n("\u5B9E\u9645\u4E0A "),B=s("code",null,"[]",-1),T=n("\u4E2D\u7684\u7B2C\u4E8C\u90E8\u5206\u4F1A\u88AB\u4F5C\u4E3A\u4EE3\u7801\u5757\u6765\u5904\u7406\uFF0C\u56E0\u4E3A\u5728\u4E0A\u9762 "),V=n("\u4EE3\u7801\u5757"),C=n("\u4E2D\u63D0\u5230\u7684\u5185\u5BB9\u90FD\u53EF\u4EE5\u4F7F\u7528"),N=t(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- \u884C\u9AD8\u4EAE --&gt;</span>
@<span class="token url">[<span class="token content">code js{2,4-5}</span>](<span class="token url">./foo.js</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>md\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>vue \u6A21\u677F\u8BED\u6CD5</code></li></ul>`,3),q=t(`<p><strong>\u8F93\u5165</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\u8FD9\u662F\u9ED8\u8BA4\u4E3B\u9898\u5185\u7684\u7EC4\u4EF6 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">&gt;</span></span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6F14\u793A<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),L=s("strong",null,"\u8F93\u51FA",-1),P=n(" \u8FD9\u662F\u9ED8\u8BA4\u4E3B\u9898\u5185\u7684\u7EC4\u4EF6 "),F=t(`<h1 id="\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> \u9759\u6001\u8D44\u6E90</h1><h2 id="\u76F8\u5BF9\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5BF9\u8DEF\u5F84" aria-hidden="true">#</a> \u76F8\u5BF9\u8DEF\u5F84</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">\u56FE\u7247</span>](<span class="token url">./images/25.jpg</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+`" alt="\u56FE\u7247"></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>\u4F7F\u7528\u76F8\u5BF9public \u4E0B\u7684\u9759\u6001\u8D44\u6E90
<span class="token url"><span class="token operator">!</span>[<span class="token content">\u56FE\u7247</span>](<span class="token url">/imgs/44.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+'" alt="\u56FE\u7247"></p><h1 id="\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210-\u81EA\u52A8\u5316\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210-\u81EA\u52A8\u5316\u90E8\u7F72" aria-hidden="true">#</a> \u6D4B\u8BD5\u6301\u7EED\u96C6\u6210 \u81EA\u52A8\u5316\u90E8\u7F72</h1>',7);function R(S,U){const l=o("router-link"),d=o("RouterLink"),r=o("Badge");return c(),p("div",null,[s("nav",_,[s("ul",null,[s("li",null,[a(l,{to:"#\u7B2C\u4E8C\u6B65-\u4E86\u89E3\u914D\u7F6E"},{default:e(()=>[f]),_:1})]),s("li",null,[a(l,{to:"#\u5BFC\u5165\u4EE3\u7801\u5757"},{default:e(()=>[w]),_:1})]),s("li",null,[a(l,{to:"#\u76F8\u5BF9\u8DEF\u5F84"},{default:e(()=>[x]),_:1})])])]),j,s("p",null,[y,B,T,a(d,{to:"/"},{default:e(()=>[V]),_:1}),C]),N,s("p",null,[(c(),p(v,null,m(10,i=>s("span",{key:i},k(i)+"-- ",1)),64))]),q,s("p",null,[L,P,a(r,{text:"\u6F14\u793A"})]),F])}var E=u(b,[["render",R],["__file","index.html.vue"]]);export{E as default};
