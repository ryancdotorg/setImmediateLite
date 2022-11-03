// SPDX-License-Identifier: CC0-1.0+
((global, name, mc, queue) => {
  // do nothing if setImmediate is already defined
  if (!(global[name])) {
    // only continue of MessageChannel is defined
    if (mc = global[mc] && new global[mc]) {
      // message handler dispatches function calls
      mc.port1.onmessage = evt => queue.shift()();

      // register global setImmediate function
      global[name] = (...args) => mc.port2.postMessage(
        // resulting function calls cb(arg2, arg3, ..., argN) with this === cb
        queue.push(args[0].bind(...args))
      );
    }
  }
})(this, 'setImmediate', 'MessageChannel', []);
