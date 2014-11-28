/*!
 * srcset.js v0.0.1
 * https://github.com/xwartz/srcset
 *
 * Copyright 2014, xwartz
 * Date: 2014-11-29
 * MIT
 * 
 * todo use w
 * 
 */


;(function (win) {
    
    var isSupportSrcset = 'srcset' in new Image(),
        ratio = win.devicePixelRatio,
        reg = /\S+.[jpg|png]/,
        imgs = document.getElementsByTagName('img'),        
        imgsNum = imgs.length,
        src = imgs[0].getAttribute('srcset'),       
        srcNum = src.split(',').length;

    if(isSupportSrcset || imgsNum === 0 || srcNum === 0) return


    var _getBestImg = function (i, r) {
        var img_srcs = i.getAttribute('srcset').split(',')
        var img_src = img_srcs[r].match(reg)[0]

        return img_src
    }

    var _setBestImg = function (i, r) {
        i.setAttribute('src', _getBestImg(i, r))
    }

    var _set = function (r) {
        console.log(r)
        for (var i = 0; i < imgsNum; i++) {
            _setBestImg(imgs[i], r)
        }
    }

    var srcset = function (r) {
        switch (r) {
          case 0:
            return _set(0)
            break
          case 1:
            return _set(1)
            break
          case 2:
            return _set(2)
            break
          case 3:
            return _set(3)
            break
          default:
            return _set(0)
        }
    }


    if(srcNum === 1) {
        srcset(0)
    } else if(srcNum === 2) {
        ratio < 3 ? srcset(ratio-1) : srcset(1)
    } else if(srcNum === 3) {
        ratio < 4 ? srcset(ratio-1) : srcset(2)
    }

})(window)