"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _product = _interopRequireDefault(require("../../models/product"));
var _user = _interopRequireDefault(require("../../models/user"));
var _token = require("../../utils/token");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var addToCart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _id, _req$body, product_id, color, quantity, product, newProductCart, user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _id = (0, _token.getIdFromReq)(req);
          _req$body = req.body, product_id = _req$body.product_id, color = _req$body.color, quantity = _req$body.quantity;
          _context.next = 5;
          return _product["default"].findById(product_id);
        case 5:
          product = _context.sent;
          if (!(product && product.colors.findIndex(function (item) {
            return item === color;
          }) > -1)) {
            _context.next = 18;
            break;
          }
          newProductCart = {
            product_id: product_id,
            color: color,
            img: product.img,
            title: product.title,
            price: product.price,
            quantity: quantity,
            brand: product.brand,
            category: product.category
          };
          _context.next = 10;
          return _user["default"].findOneAndUpdate({
            _id: _id
          }, {
            $addToSet: {
              cart: newProductCart
            },
            $inc: {
              cart_total: product.price * quantity
            }
          }, {
            "new": true
          });
        case 10:
          user = _context.sent;
          if (!user) {
            _context.next = 15;
            break;
          }
          return _context.abrupt("return", res.status(201).json(user.cart));
        case 15:
          return _context.abrupt("return", res.status(500).json({
            message: 'error.user.cart.failed_to_add_product'
          }));
        case 16:
          _context.next = 19;
          break;
        case 18:
          return _context.abrupt("return", res.status(500).json({
            message: 'error.product.not_found'
          }));
        case 19:
          _context.next = 24;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: _context.t0
          }));
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function addToCart(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var removeFromCart = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _yield$User$findById, _id, _req$body2, product_id, color, user_cart, product, updatedUser;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _id = (0, _token.getIdFromReq)(req);
          _req$body2 = req.body, product_id = _req$body2.product_id, color = _req$body2.color;
          _context2.next = 5;
          return _user["default"].findById(_id);
        case 5:
          _context2.t1 = _yield$User$findById = _context2.sent;
          _context2.t0 = _context2.t1 === null;
          if (_context2.t0) {
            _context2.next = 9;
            break;
          }
          _context2.t0 = _yield$User$findById === void 0;
        case 9:
          if (!_context2.t0) {
            _context2.next = 13;
            break;
          }
          _context2.t2 = void 0;
          _context2.next = 14;
          break;
        case 13:
          _context2.t2 = _yield$User$findById.cart;
        case 14:
          user_cart = _context2.t2;
          if (user_cart) {
            _context2.next = 17;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: 'error.user.cart.not_found'
          }));
        case 17:
          product = user_cart.find(function (item) {
            return item.product_id === product_id;
          });
          if (product) {
            _context2.next = 20;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: 'error.user.cart.product_not_exist'
          }));
        case 20:
          _context2.next = 22;
          return _user["default"].findOneAndUpdate({
            _id: _id,
            cart: {
              $elemMatch: {
                product_id: product_id,
                color: color
              }
            }
          }, {
            $inc: {
              cart_total: -(product.price * product.quantity)
            },
            $pull: {
              cart: {
                product_id: product_id,
                color: color
              }
            }
          }, {
            "new": true
          });
        case 22:
          updatedUser = _context2.sent;
          if (updatedUser) {
            _context2.next = 25;
            break;
          }
          return _context2.abrupt("return", res.status(500).json({
            message: 'error.user.cart.failed_to_remove'
          }));
        case 25:
          return _context2.abrupt("return", res.status(200).json(updatedUser.cart));
        case 28:
          _context2.prev = 28;
          _context2.t3 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: _context2.t3
          }));
        case 31:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 28]]);
  }));
  return function removeFromCart(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var clearCart = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _id, updatedUser;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _id = (0, _token.getIdFromReq)(req);
          _context3.next = 4;
          return _user["default"].findOneAndUpdate({
            _id: _id
          }, {
            $set: {
              cart: [],
              cart_total: 0
            }
          }, {
            "new": true
          });
        case 4:
          updatedUser = _context3.sent;
          if (updatedUser) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(500).json({
            message: 'error.user.cart.failed_to_clear'
          }));
        case 7:
          return _context3.abrupt("return", res.status(200).json({
            success: true
          }));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: _context3.t0
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function clearCart(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateProductCartQuantity = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _id, _req$body3, product_id, color, quantity, product, updatedUser, cart_total;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _id = (0, _token.getIdFromReq)(req);
          _req$body3 = req.body, product_id = _req$body3.product_id, color = _req$body3.color, quantity = _req$body3.quantity;
          _context4.next = 5;
          return _product["default"].findById(product_id);
        case 5:
          product = _context4.sent;
          if (product) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(500).json({
            message: 'error.user.cart.product_not_exist'
          }));
        case 8:
          _context4.next = 10;
          return _user["default"].findOne({
            _id: _id,
            cart: {
              $elemMatch: {
                product_id: product_id,
                color: color
              }
            }
          });
        case 10:
          updatedUser = _context4.sent;
          if (updatedUser) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(500).json({
            message: 'error.user.cart.failed_to_update_product'
          }));
        case 13:
          cart_total = 0;
          updatedUser.cart.forEach(function (item) {
            if (item.product_id === product_id && item.color === color) {
              item.quantity = quantity;
            }
            cart_total += item.price * item.quantity;
          });
          updatedUser.cart_total = cart_total;
          _context4.next = 18;
          return updatedUser.save();
        case 18:
          return _context4.abrupt("return", res.status(200).json({
            cart: updatedUser.cart,
            cart_total: cart_total
          }));
        case 21:
          _context4.prev = 21;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: _context4.t0
          }));
        case 24:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 21]]);
  }));
  return function updateProductCartQuantity(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var _default = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  updateProductCartQuantity: updateProductCartQuantity,
  clearCart: clearCart
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcHJvZHVjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3VzZXIiLCJfdG9rZW4iLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiYWRkVG9DYXJ0IiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJfaWQiLCJfcmVxJGJvZHkiLCJwcm9kdWN0X2lkIiwiY29sb3IiLCJxdWFudGl0eSIsInByb2R1Y3QiLCJuZXdQcm9kdWN0Q2FydCIsInVzZXIiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZ2V0SWRGcm9tUmVxIiwiYm9keSIsIlByb2R1Y3QiLCJmaW5kQnlJZCIsImNvbG9ycyIsImZpbmRJbmRleCIsIml0ZW0iLCJpbWciLCJ0aXRsZSIsInByaWNlIiwiYnJhbmQiLCJjYXRlZ29yeSIsIlVzZXIiLCJmaW5kT25lQW5kVXBkYXRlIiwiJGFkZFRvU2V0IiwiY2FydCIsIiRpbmMiLCJjYXJ0X3RvdGFsIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0MCIsIl94IiwiX3gyIiwicmVtb3ZlRnJvbUNhcnQiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX3lpZWxkJFVzZXIkZmluZEJ5SWQiLCJfcmVxJGJvZHkyIiwidXNlcl9jYXJ0IiwidXBkYXRlZFVzZXIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ0MSIsInQyIiwiZmluZCIsIiRlbGVtTWF0Y2giLCIkcHVsbCIsInQzIiwiX3gzIiwiX3g0IiwiY2xlYXJDYXJ0IiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIiRzZXQiLCJzdWNjZXNzIiwiX3g1IiwiX3g2IiwidXBkYXRlUHJvZHVjdENhcnRRdWFudGl0eSIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfcmVxJGJvZHkzIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZmluZE9uZSIsInNhdmUiLCJfeDciLCJfeDgiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL0NhcnQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7XG4gIEFkZFRvQ2FydFJlcXVlc3QsXG4gIFJlbW92ZUZyb21DYXJ0UmVxdWVzdCxcbiAgVXBkYXRlUHJvZHVjdENhcnRRdWFudGl0eVJlcXVlc3QsXG4gIFVwZGF0ZVByb2R1Y3RDYXJ0UXVhbnRpdHlSZXNwb25zZVxufSBmcm9tICdzcmMvbW9kZWxzL2FwaS9jYXJ0JztcbmltcG9ydCB7IFByb2R1Y3RDYXJ0VHlwZSB9IGZyb20gJ3NyYy9tb2RlbHMvY2FydCc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdzcmMvbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IFVzZXIgZnJvbSAnc3JjL21vZGVscy91c2VyJztcbmltcG9ydCB7IGdldElkRnJvbVJlcSB9IGZyb20gJ3NyYy91dGlscy90b2tlbic7XG5cbmNvbnN0IGFkZFRvQ2FydCA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBfaWQgPSBnZXRJZEZyb21SZXEocmVxKTtcbiAgICBjb25zdCB7IHByb2R1Y3RfaWQsIGNvbG9yLCBxdWFudGl0eSB9OiBBZGRUb0NhcnRSZXF1ZXN0ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChwcm9kdWN0X2lkKTtcbiAgICBpZiAocHJvZHVjdCAmJiBwcm9kdWN0LmNvbG9ycy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IGNvbG9yKSA+IC0xKSB7XG4gICAgICBjb25zdCBuZXdQcm9kdWN0Q2FydDogUHJvZHVjdENhcnRUeXBlID0ge1xuICAgICAgICBwcm9kdWN0X2lkLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgaW1nOiBwcm9kdWN0LmltZyxcbiAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGUsXG4gICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlLFxuICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgYnJhbmQ6IHByb2R1Y3QuYnJhbmQsXG4gICAgICAgIGNhdGVnb3J5OiBwcm9kdWN0LmNhdGVnb3J5XG4gICAgICB9O1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgICAgeyBfaWQgfSxcbiAgICAgICAge1xuICAgICAgICAgICRhZGRUb1NldDogeyBjYXJ0OiBuZXdQcm9kdWN0Q2FydCB9LFxuICAgICAgICAgICRpbmM6IHsgY2FydF90b3RhbDogcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5IH1cbiAgICAgICAgfSxcblxuICAgICAgICB7IG5ldzogdHJ1ZSB9XG4gICAgICApO1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHVzZXIuY2FydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IudXNlci5jYXJ0LmZhaWxlZF90b19hZGRfcHJvZHVjdCcgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci5wcm9kdWN0Lm5vdF9mb3VuZCcgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IF9pZCA9IGdldElkRnJvbVJlcShyZXEpO1xuICAgIGNvbnN0IHsgcHJvZHVjdF9pZCwgY29sb3IgfTogUmVtb3ZlRnJvbUNhcnRSZXF1ZXN0ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgdXNlcl9jYXJ0ID0gKGF3YWl0IFVzZXIuZmluZEJ5SWQoX2lkKSk/LmNhcnQ7XG4gICAgaWYgKCF1c2VyX2NhcnQpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci51c2VyLmNhcnQubm90X2ZvdW5kJyB9KTtcbiAgICBjb25zdCBwcm9kdWN0ID0gdXNlcl9jYXJ0LmZpbmQoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdF9pZCA9PT0gcHJvZHVjdF9pZCk7XG4gICAgaWYgKCFwcm9kdWN0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IudXNlci5jYXJ0LnByb2R1Y3Rfbm90X2V4aXN0JyB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgVXNlci5maW5kT25lQW5kVXBkYXRlKFxuICAgICAge1xuICAgICAgICBfaWQsXG4gICAgICAgIGNhcnQ6IHsgJGVsZW1NYXRjaDogeyBwcm9kdWN0X2lkLCBjb2xvciB9IH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICRpbmM6IHtcbiAgICAgICAgICBjYXJ0X3RvdGFsOiAtKHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnF1YW50aXR5KVxuICAgICAgICB9LFxuICAgICAgICAkcHVsbDoge1xuICAgICAgICAgIGNhcnQ6IHsgcHJvZHVjdF9pZCwgY29sb3IgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBuZXc6IHRydWUgfVxuICAgICk7XG4gICAgaWYgKCF1cGRhdGVkVXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnVzZXIuY2FydC5mYWlsZWRfdG9fcmVtb3ZlJyB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXBkYXRlZFVzZXIuY2FydCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJDYXJ0ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IF9pZCA9IGdldElkRnJvbVJlcShyZXEpO1xuXG4gICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7IF9pZCB9LFxuICAgICAge1xuICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgY2FydDogW10sXG4gICAgICAgICAgY2FydF90b3RhbDogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBuZXc6IHRydWUgfVxuICAgICk7XG4gICAgaWYgKCF1cGRhdGVkVXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnVzZXIuY2FydC5mYWlsZWRfdG9fY2xlYXInIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlUHJvZHVjdENhcnRRdWFudGl0eSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBfaWQgPSBnZXRJZEZyb21SZXEocmVxKTtcbiAgICBjb25zdCB7IHByb2R1Y3RfaWQsIGNvbG9yLCBxdWFudGl0eSB9OiBVcGRhdGVQcm9kdWN0Q2FydFF1YW50aXR5UmVxdWVzdCA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkKHByb2R1Y3RfaWQpO1xuICAgIGlmICghcHJvZHVjdClcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6ICdlcnJvci51c2VyLmNhcnQucHJvZHVjdF9ub3RfZXhpc3QnXG4gICAgICB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcbiAgICAgIF9pZCxcbiAgICAgIGNhcnQ6IHsgJGVsZW1NYXRjaDogeyBwcm9kdWN0X2lkLCBjb2xvciB9IH1cbiAgICB9KTtcblxuICAgIGlmICghdXBkYXRlZFVzZXIpXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IudXNlci5jYXJ0LmZhaWxlZF90b191cGRhdGVfcHJvZHVjdCcgfSk7XG5cbiAgICBsZXQgY2FydF90b3RhbCA9IDA7XG4gICAgdXBkYXRlZFVzZXIuY2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5wcm9kdWN0X2lkID09PSBwcm9kdWN0X2lkICYmIGl0ZW0uY29sb3IgPT09IGNvbG9yKSB7XG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgICAgIH1cbiAgICAgIGNhcnRfdG90YWwgKz0gaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHk7XG4gICAgfSk7XG4gICAgdXBkYXRlZFVzZXIuY2FydF90b3RhbCA9IGNhcnRfdG90YWw7XG4gICAgYXdhaXQgdXBkYXRlZFVzZXIuc2F2ZSgpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIGNhcnQ6IHVwZGF0ZWRVc2VyLmNhcnQsXG4gICAgICBjYXJ0X3RvdGFsXG4gICAgfSBhcyBVcGRhdGVQcm9kdWN0Q2FydFF1YW50aXR5UmVzcG9uc2UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCwgdXBkYXRlUHJvZHVjdENhcnRRdWFudGl0eSwgY2xlYXJDYXJ0IH07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRQSxJQUFBQSxRQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxLQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7QUFBK0MsU0FBQUQsdUJBQUFJ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