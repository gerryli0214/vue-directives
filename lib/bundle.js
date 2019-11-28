(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.main = factory());
}(this, (function () { 'use strict';

  function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
  }

  function isFunction(fun) {
    return Object.prototype.toString.call(fun) === '[object String]';
  }
  function isObject(fun) {
    return Object.prototype.toString.call(fun) === '[object Object]';
  } // 空函数

  function noop() {}
  function makeMap(str) {
    var arr = str.split(',');
    var obj = {};
    arr.forEach(function (vv) {
      obj[vv] = true;
    });
    return function () {
      var args = arguments;
      return obj[args[0]];
    };
  }
  function debounce(fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var originTime = new Date().getTime();
    return function () {
      var args = arguments;
      var currentTime = new Date().getTime();

      if (currentTime - originTime > delay) {
        fn.apply(this, args);
      }

      originTime = currentTime;
    };
  }
  function throttle(fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var originTime = new Date().getTime();
    return function () {
      var args = arguments;
      var currentTime = new Date().getTime();

      if (currentTime - originTime > delay) {
        fn.apply(this, args);
        originTime = currentTime;
      }
    };
  }

  var directives = {}; // 存储指令所需参数

  var eventParams = {}; // 支持事件对象

  var hasEventKey = makeMap('click,dblclick,keyup,keydown,keypress,mouseup,mousedown,mouseover,mouseleave,scroll');

  directives.install = function (Vue) {
    Vue.directive('debounce', {
      bind: function bind(el, binding, vnode) {
        var defaultConfig = initEventParams(binding);
        eventParams = (_readOnlyError("eventParams"), defaultConfig);
      },
      update: function update(el, binding, vnode) {
        var defaultConfig = initEventParams(binding);
        eventParams = (_readOnlyError("eventParams"), defaultConfig);
        bindElementEvent(el, vnode.context, 'debounce');
      }
    });
    Vue.directive('throttle', {
      bind: function bind(el, binding, vnode) {
        var defaultConfig = initEventParams(binding);
        eventParams = (_readOnlyError("eventParams"), defaultConfig);
      },
      update: function update(el, binding, vnode) {
        var defaultConfig = initEventParams(binding);
        eventParams = (_readOnlyError("eventParams"), defaultConfig);
        bindElementEvent(el, vnode.context, 'throttle');
      }
    });
  }; // 初始化指令参数


  function initEventParams(binding) {
    var defaultConfig = {
      fun: '',
      event: 'click',
      args: '',
      wait: 200,
      modifiers: {}
    };
    var modifierList = Object.keys(binding.modifiers).filter(function (key) {
      return binding.modifiers[key];
    });
    defaultConfig.modifierList = binding.modifiers;

    if (modifierList.length > 0) {
      var eventArr = modifierList.filter(function (vv) {
        return hasEventKey(vv);
      });
      defaultConfig.event = eventArr.length === 0 ? 'click' : modifierList[0];
    }

    if (isObject(binding.value)) {
      Object.assign(defaultConfig, binding.value);
    } else if (isFunction(binding.value)) {
      defaultConfig.fun = binding.expression;
    }

    return defaultConfig;
  }

  function bindElementEvent(el, context, type) {
    var _eventParams = eventParams,
        fun = _eventParams.fun,
        event = _eventParams.event,
        args = _eventParams.args,
        wait = _eventParams.wait,
        modifiers = _eventParams.modifiers;

    if (!isFunction(context[fun])) {
      console.warn("\u65B9\u6CD5\u540D\u3010".concat(fun, "\u3011\u5728\u7EC4\u4EF6\u4E2D\u672A\u5B9A\u4E49"));
      return;
    }

    el.removeEventListener(event, noop);

    if (type === 'debounce') {
      el.addEventListener(event, debounce(function (e) {
        if (modifiers.stop) e.stopPropagation();
        if (modifiers.prev) e.preventDefault();
        context[fun].call(null, e, args);
      }, wait));
    } else if (type === 'throttle') {
      el.addEventListener(event, throttle(function (e) {
        if (modifiers.stop) e.stopPropagation();
        if (modifiers.prev) e.preventDefault();
        context[fun].call(null, e, args);
      }, wait));
    }
  }

  return directives;

})));
