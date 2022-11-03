// SPDX-License-Identifier: CC0-1.0+
(function(global, name, mc, queue){
  // do nothing if setImmediate is already defined
  if (!(global[name])) {
    // only continue of MessageChannel is defined
    if (mc = global[mc] && new global[mc]) {
      // message handler dispatches function calls
      mc.port1.onmessage = function() {
        queue.shift()();
      };

      // register global setImmediate function
      global[name] = function(cb) {
        mc.port2.postMessage(
          // equivalent cb.bind(cb, arg2, arg3, ..., argN);
          // resulting function calls cb(arg2, arg3, ..., argN) with this === cb
          queue.push(cb.bind.apply(cb, arguments))
        );
      };
    }
  }
})(this, 'setImmediate', 'MessageChannel', []);
