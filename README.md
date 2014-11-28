
展示性的图片如何适配 retina 屏幕 --- 网页上直接引用的img图片

比如做一个活动页面，偷懒直接用大图片，像素1080×1920 (iPhone6+),如果我们直接显示1080×1920像素的图片，在iPhone6+下面当然是适用的，但是在普通的屏幕上不仅显示上有问题，图片压缩，而且浪费流量，加载慢。所以最佳的做法是，不同的屏幕设备显示不同的图片。

`html5` 给标签 `img` 增加了新的 `srcset` 属性，可以根据屏幕选择合适的图片，可惜支持的浏览器甚少。

caniuse: http://caniuse.com/#feat=srcset

关于 `srcset`, 可以看下这几篇文章：

http://www.webkit.org/demos/srcset/
http://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/

由于浏览器兼容性太差了，so 写了点js搞搞..