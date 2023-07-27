"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _template = _interopRequireDefault(require("../../models/template"));
var _serializers = require("../../serializers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getAllTemplates = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var templates, formattedTemplates;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _template["default"].find();
        case 3:
          templates = _context.sent;
          formattedTemplates = templates.map(function (template) {
            return (0, _serializers.templateSerializer)(template);
          });
          return _context.abrupt("return", res.status(200).json(formattedTemplates));
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: _context.t0
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function getAllTemplates(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getTemplate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, template;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return _template["default"].findById(id);
        case 4:
          template = _context2.sent;
          if (template) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: 'error.template.not_found'
          }));
        case 7:
          return _context2.abrupt("return", res.status(200).json((0, _serializers.templateSerializer)(template)));
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: _context2.t0
          }));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getTemplate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createTemplate = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var templateData, newTemplate;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          templateData = req.body;
          newTemplate = new _template["default"](templateData);
          _context3.next = 5;
          return newTemplate.save();
        case 5:
          return _context3.abrupt("return", res.status(201).json((0, _serializers.templateSerializer)(newTemplate)));
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: _context3.t0
          }));
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function createTemplate(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateTemplate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, updateData, updatedTemplate;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          updateData = req.body;
          _context4.next = 5;
          return _template["default"].findByIdAndUpdate(id, updateData, {
            "new": true
          });
        case 5:
          updatedTemplate = _context4.sent;
          if (updatedTemplate) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: 'error.template.not_found'
          }));
        case 8:
          return _context4.abrupt("return", res.status(200).json((0, _serializers.templateSerializer)(updatedTemplate)));
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: _context4.t0
          }));
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function updateTemplate(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteTemplate = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, templateCount, template;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id; // check if there is at least one other template
          _context5.next = 4;
          return _template["default"].countDocuments();
        case 4:
          templateCount = _context5.sent;
          if (!(templateCount <= 1)) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: 'error.template.cannot_delete_only_template'
          }));
        case 7:
          _context5.next = 9;
          return _template["default"].findById(id);
        case 9:
          template = _context5.sent;
          if (template) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'error.template.not_found'
          }));
        case 12:
          if (!template.active) {
            _context5.next = 14;
            break;
          }
          return _context5.abrupt("return", res.status(500).json({
            message: 'error.template.cannot_delete_active_template'
          }));
        case 14:
          _context5.next = 16;
          return template["delete"]();
        case 16:
          return _context5.abrupt("return", res.status(200).json({
            success: true
          }));
        case 19:
          _context5.prev = 19;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            message: _context5.t0
          }));
        case 22:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 19]]);
  }));
  return function deleteTemplate(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var activeTemplate = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, updatedTemplate;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id; // deactivate all other templates
          _context6.next = 4;
          return _template["default"].updateMany({}, {
            active: false
          });
        case 4:
          _context6.next = 6;
          return _template["default"].findByIdAndUpdate(id, {
            active: true
          }, {
            "new": true
          });
        case 6:
          updatedTemplate = _context6.sent;
          if (updatedTemplate) {
            _context6.next = 9;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: 'error.template.not_found'
          }));
        case 9:
          return _context6.abrupt("return", res.status(200).json((0, _serializers.templateSerializer)(updatedTemplate)));
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            message: _context6.t0
          }));
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function activeTemplate(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var currentTemplate = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var template;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _template["default"].findOne({
            active: true
          });
        case 3:
          template = _context7.sent;
          if (template) {
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: 'error.template.not_found'
          }));
        case 6:
          return _context7.abrupt("return", res.status(200).json((0, _serializers.templateSerializer)(template)));
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).json({
            message: _context7.t0
          }));
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 9]]);
  }));
  return function currentTemplate(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var _default = {
  getAllTemplates: getAllTemplates,
  getTemplate: getTemplate,
  createTemplate: createTemplate,
  updateTemplate: updateTemplate,
  deleteTemplate: deleteTemplate,
  activeTemplate: activeTemplate,
  currentTemplate: currentTemplate
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGVtcGxhdGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9zZXJpYWxpemVycyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJnZXRBbGxUZW1wbGF0ZXMiLCJfcmVmIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsInRlbXBsYXRlcyIsImZvcm1hdHRlZFRlbXBsYXRlcyIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJUZW1wbGF0ZSIsImZpbmQiLCJtYXAiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlU2VyaWFsaXplciIsInN0YXR1cyIsImpzb24iLCJ0MCIsIm1lc3NhZ2UiLCJfeCIsIl94MiIsImdldFRlbXBsYXRlIiwiX3JlZjIiLCJfY2FsbGVlMiIsImlkIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJfeDMiLCJfeDQiLCJjcmVhdGVUZW1wbGF0ZSIsIl9yZWYzIiwiX2NhbGxlZTMiLCJ0ZW1wbGF0ZURhdGEiLCJuZXdUZW1wbGF0ZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImJvZHkiLCJzYXZlIiwiX3g1IiwiX3g2IiwidXBkYXRlVGVtcGxhdGUiLCJfcmVmNCIsIl9jYWxsZWU0IiwidXBkYXRlRGF0YSIsInVwZGF0ZWRUZW1wbGF0ZSIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImZpbmRCeUlkQW5kVXBkYXRlIiwiX3g3IiwiX3g4IiwiZGVsZXRlVGVtcGxhdGUiLCJfcmVmNSIsIl9jYWxsZWU1IiwidGVtcGxhdGVDb3VudCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImNvdW50RG9jdW1lbnRzIiwiYWN0aXZlIiwic3VjY2VzcyIsIl94OSIsIl94MTAiLCJhY3RpdmVUZW1wbGF0ZSIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJ1cGRhdGVNYW55IiwiX3gxMSIsIl94MTIiLCJjdXJyZW50VGVtcGxhdGUiLCJfcmVmNyIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiZmluZE9uZSIsIl94MTMiLCJfeDE0IiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlci9UZW1wbGF0ZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgQ3JlYXRlVGVtcGxhdGVSZXF1ZXN0LCBVcGRhdGVUZW1wbGF0ZVJlcXVlc3QgfSBmcm9tICdzcmMvbW9kZWxzL2FwaS9jbXMnO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gJ3NyYy9tb2RlbHMvdGVtcGxhdGUnO1xuaW1wb3J0IHsgdGVtcGxhdGVTZXJpYWxpemVyIH0gZnJvbSAnc3JjL3NlcmlhbGl6ZXJzJztcblxuY29uc3QgZ2V0QWxsVGVtcGxhdGVzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IGF3YWl0IFRlbXBsYXRlLmZpbmQoKTtcbiAgICBjb25zdCBmb3JtYXR0ZWRUZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMubWFwKCh0ZW1wbGF0ZSkgPT4gdGVtcGxhdGVTZXJpYWxpemVyKHRlbXBsYXRlKSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZvcm1hdHRlZFRlbXBsYXRlcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgZ2V0VGVtcGxhdGUgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IFRlbXBsYXRlLmZpbmRCeUlkKGlkKTtcblxuICAgIGlmICghdGVtcGxhdGUpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci50ZW1wbGF0ZS5ub3RfZm91bmQnIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0ZW1wbGF0ZVNlcmlhbGl6ZXIodGVtcGxhdGUpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVUZW1wbGF0ZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0ZW1wbGF0ZURhdGE6IENyZWF0ZVRlbXBsYXRlUmVxdWVzdCA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IG5ld1RlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHRlbXBsYXRlRGF0YSk7XG4gICAgYXdhaXQgbmV3VGVtcGxhdGUuc2F2ZSgpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih0ZW1wbGF0ZVNlcmlhbGl6ZXIobmV3VGVtcGxhdGUpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVUZW1wbGF0ZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIGNvbnN0IHVwZGF0ZURhdGE6IFVwZGF0ZVRlbXBsYXRlUmVxdWVzdCA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgdXBkYXRlZFRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHVwZGF0ZURhdGEsIHtcbiAgICAgIG5ldzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKCF1cGRhdGVkVGVtcGxhdGUpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci50ZW1wbGF0ZS5ub3RfZm91bmQnIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRlbXBsYXRlU2VyaWFsaXplcih1cGRhdGVkVGVtcGxhdGUpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCBkZWxldGVUZW1wbGF0ZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIG90aGVyIHRlbXBsYXRlXG4gICAgY29uc3QgdGVtcGxhdGVDb3VudCA9IGF3YWl0IFRlbXBsYXRlLmNvdW50RG9jdW1lbnRzKCk7XG4gICAgaWYgKHRlbXBsYXRlQ291bnQgPD0gMSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnRlbXBsYXRlLmNhbm5vdF9kZWxldGVfb25seV90ZW1wbGF0ZScgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBUZW1wbGF0ZS5maW5kQnlJZChpZCk7XG5cbiAgICBpZiAoIXRlbXBsYXRlKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IudGVtcGxhdGUubm90X2ZvdW5kJyB9KTtcblxuICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgdGVtcGxhdGUgaXMgYWN0aXZlP1xuICAgIGlmICh0ZW1wbGF0ZS5hY3RpdmUpXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IudGVtcGxhdGUuY2Fubm90X2RlbGV0ZV9hY3RpdmVfdGVtcGxhdGUnIH0pO1xuXG4gICAgYXdhaXQgdGVtcGxhdGUuZGVsZXRlKCk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGFjdGl2ZVRlbXBsYXRlID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG5cbiAgICAvLyBkZWFjdGl2YXRlIGFsbCBvdGhlciB0ZW1wbGF0ZXNcbiAgICBhd2FpdCBUZW1wbGF0ZS51cGRhdGVNYW55KHt9LCB7IGFjdGl2ZTogZmFsc2UgfSk7XG5cbiAgICAvLyBhY3RpdmF0ZSB0aGUgc3BlY2lmaWVkIHRlbXBsYXRlXG4gICAgY29uc3QgdXBkYXRlZFRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHsgYWN0aXZlOiB0cnVlIH0sIHsgbmV3OiB0cnVlIH0pO1xuXG4gICAgaWYgKCF1cGRhdGVkVGVtcGxhdGUpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci50ZW1wbGF0ZS5ub3RfZm91bmQnIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRlbXBsYXRlU2VyaWFsaXplcih1cGRhdGVkVGVtcGxhdGUpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCBjdXJyZW50VGVtcGxhdGUgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBUZW1wbGF0ZS5maW5kT25lKHsgYWN0aXZlOiB0cnVlIH0pO1xuICAgIGlmICghdGVtcGxhdGUpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci50ZW1wbGF0ZS5ub3RfZm91bmQnIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0ZW1wbGF0ZVNlcmlhbGl6ZXIodGVtcGxhdGUpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFsbFRlbXBsYXRlcyxcbiAgZ2V0VGVtcGxhdGUsXG4gIGNyZWF0ZVRlbXBsYXRlLFxuICB1cGRhdGVUZW1wbGF0ZSxcbiAgZGVsZXRlVGVtcGxhdGUsXG4gIGFjdGl2ZVRlbXBsYXRlLFxuICBjdXJyZW50VGVtcGxhdGVcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxZQUFBLEdBQUFELE9BQUE7QUFBcUQsU0FBQUQsdUJBQUFHLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLG9CQUFBLGtCQUZyRCxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFULEdBQUEsRUFBQVUsR0FBQSxFQUFBQyxJQUFBLElBQUFYLEdBQUEsQ0FBQVUsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQXJCLEdBQUEsRUFBQVUsR0FBQSxFQUFBRSxLQUFBLFdBQUFQLE1BQUEsQ0FBQUksY0FBQSxDQUFBVCxHQUFBLEVBQUFVLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUF4QixHQUFBLENBQUFVLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFyQixHQUFBLEVBQUFVLEdBQUEsRUFBQUUsS0FBQSxXQUFBWixHQUFBLENBQUFVLEdBQUEsSUFBQUUsS0FBQSxnQkFBQWMsS0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxRQUFBQyxjQUFBLEdBQUFILE9BQUEsSUFBQUEsT0FBQSxDQUFBdEIsU0FBQSxZQUFBMEIsU0FBQSxHQUFBSixPQUFBLEdBQUFJLFNBQUEsRUFBQUMsU0FBQSxHQUFBNUIsTUFBQSxDQUFBNkIsTUFBQSxDQUFBSCxjQUFBLENBQUF6QixTQUFBLEdBQUE2QixPQUFBLE9BQUFDLE9BQUEsQ0FBQU4sV0FBQSxnQkFBQXJCLGNBQUEsQ0FBQXdCLFNBQUEsZUFBQXJCLEtBQUEsRUFBQXlCLGdCQUFBLENBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLE1BQUFGLFNBQUEsYUFBQUssU0FBQUMsRUFBQSxFQUFBdkMsR0FBQSxFQUFBd0MsR0FBQSxtQkFBQUMsSUFBQSxZQUFBRCxHQUFBLEVBQUFELEVBQUEsQ0FBQUcsSUFBQSxDQUFBMUMsR0FBQSxFQUFBd0MsR0FBQSxjQUFBZixHQUFBLGFBQUFnQixJQUFBLFdBQUFELEdBQUEsRUFBQWYsR0FBQSxRQUFBdEIsT0FBQSxDQUFBdUIsSUFBQSxHQUFBQSxJQUFBLE1BQUFpQixnQkFBQSxnQkFBQVgsVUFBQSxjQUFBWSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxpQkFBQSxPQUFBekIsTUFBQSxDQUFBeUIsaUJBQUEsRUFBQS9CLGNBQUEscUNBQUFnQyxRQUFBLEdBQUExQyxNQUFBLENBQUEyQyxjQUFBLEVBQUFDLHVCQUFBLEdBQUFGLFFBQUEsSUFBQUEsUUFBQSxDQUFBQSxRQUFBLENBQUFHLE1BQUEsUUFBQUQsdUJBQUEsSUFBQUEsdUJBQUEsS0FBQTdDLEVBQUEsSUFBQUcsTUFBQSxDQUFBbUMsSUFBQSxDQUFBTyx1QkFBQSxFQUFBbEMsY0FBQSxNQUFBK0IsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBdkMsU0FBQSxHQUFBMEIsU0FBQSxDQUFBMUIsU0FBQSxHQUFBRCxNQUFBLENBQUE2QixNQUFBLENBQUFZLGlCQUFBLFlBQUFNLHNCQUFBOUMsU0FBQSxnQ0FBQStDLE9BQUEsV0FBQUMsTUFBQSxJQUFBakMsTUFBQSxDQUFBZixTQUFBLEVBQUFnRCxNQUFBLFlBQUFkLEdBQUEsZ0JBQUFlLE9BQUEsQ0FBQUQsTUFBQSxFQUFBZCxHQUFBLHNCQUFBZ0IsY0FBQXZCLFNBQUEsRUFBQXdCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdkIsUUFBQSxDQUFBTCxTQUFBLENBQUFxQixNQUFBLEdBQUFyQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFFBQUFxQixNQUFBLEdBQUFELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWtELE1BQUEsQ0FBQWxELEtBQUEsU0FBQUEsS0FBQSxnQkFBQW1ELE9BQUEsQ0FBQW5ELEtBQUEsS0FBQUwsTUFBQSxDQUFBbUMsSUFBQSxDQUFBOUIsS0FBQSxlQUFBNkMsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLENBQUFvRCxPQUFBLEVBQUFDLElBQUEsV0FBQXJELEtBQUEsSUFBQThDLE1BQUEsU0FBQTlDLEtBQUEsRUFBQStDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQW5DLEdBQUEsSUFBQWlDLE1BQUEsVUFBQWpDLEdBQUEsRUFBQWtDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsV0FBQUMsU0FBQSxJQUFBSixNQUFBLENBQUFsRCxLQUFBLEdBQUFzRCxTQUFBLEVBQUFQLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUssS0FBQSxXQUFBVCxNQUFBLFVBQUFTLEtBQUEsRUFBQVIsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEIsZUFBQSxFQUFBM0QsY0FBQSxvQkFBQUcsS0FBQSxXQUFBQSxNQUFBMEMsTUFBQSxFQUFBZCxHQUFBLGFBQUE2QiwyQkFBQSxlQUFBWixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLGdCQUFBUSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBaEMsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFtQyxLQUFBLHNDQUFBaEIsTUFBQSxFQUFBZCxHQUFBLHdCQUFBOEIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBaEIsTUFBQSxRQUFBZCxHQUFBLFNBQUFnQyxVQUFBLFdBQUFyQyxPQUFBLENBQUFtQixNQUFBLEdBQUFBLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFpQyxRQUFBLEdBQUF0QyxPQUFBLENBQUFzQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLE9BQUF1QyxjQUFBLFFBQUFBLGNBQUEsS0FBQS9CLGdCQUFBLG1CQUFBK0IsY0FBQSxxQkFBQXZDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQXlDLElBQUEsR0FBQXpDLE9BQUEsQ0FBQTBDLEtBQUEsR0FBQTFDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBbUIsTUFBQSw2QkFBQWdCLEtBQUEsUUFBQUEsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUEyQyxpQkFBQSxDQUFBM0MsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFtQixNQUFBLElBQUFuQixPQUFBLENBQUE0QyxNQUFBLFdBQUE1QyxPQUFBLENBQUFLLEdBQUEsR0FBQThCLEtBQUEsb0JBQUFULE1BQUEsR0FBQXZCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUEwQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QixLQUFBLEdBQUFuQyxPQUFBLENBQUE2QyxJQUFBLG1DQUFBbkIsTUFBQSxDQUFBckIsR0FBQSxLQUFBRyxnQkFBQSxxQkFBQS9CLEtBQUEsRUFBQWlELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXdDLElBQUEsRUFBQTdDLE9BQUEsQ0FBQTZDLElBQUEsa0JBQUFuQixNQUFBLENBQUFwQixJQUFBLEtBQUE2QixLQUFBLGdCQUFBbkMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLG1CQUFBbUMsb0JBQUFGLFFBQUEsRUFBQXRDLE9BQUEsUUFBQThDLFVBQUEsR0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQUEsTUFBQSxHQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxDQUFBaUUsVUFBQSxPQUFBQyxTQUFBLEtBQUE1QixNQUFBLFNBQUFuQixPQUFBLENBQUFzQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXpELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQW1CLE1BQUEsYUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLGVBQUFBLE9BQUEsQ0FBQW1CLE1BQUEsa0JBQUEyQixVQUFBLEtBQUE5QyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUF0QyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdkIsUUFBQSxDQUFBZ0IsTUFBQSxFQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxFQUFBbUIsT0FBQSxDQUFBSyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBTixPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQUwsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsTUFBQXlDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUE3QyxPQUFBLENBQUFzQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBeEUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBbUQsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQXBELE9BQUEsQ0FBQW1CLE1BQUEsS0FBQW5CLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxHQUFBL0MsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsSUFBQXlDLElBQUEsSUFBQWpELE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSxzQ0FBQWhELE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLGNBQUE2QyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUE3QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsUUFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsb0JBQUFvQixNQUFBLENBQUFyQixHQUFBLEVBQUFrRCxLQUFBLENBQUFRLFVBQUEsR0FBQXJDLE1BQUEsYUFBQXpCLFFBQUFOLFdBQUEsU0FBQWlFLFVBQUEsTUFBQUosTUFBQSxhQUFBN0QsV0FBQSxDQUFBdUIsT0FBQSxDQUFBbUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBakQsT0FBQWtELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQXJGLGNBQUEsT0FBQXNGLGNBQUEsU0FBQUEsY0FBQSxDQUFBM0QsSUFBQSxDQUFBMEQsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFHLE1BQUEsU0FBQUMsQ0FBQSxPQUFBbEIsSUFBQSxZQUFBQSxLQUFBLGFBQUFrQixDQUFBLEdBQUFKLFFBQUEsQ0FBQUcsTUFBQSxPQUFBaEcsTUFBQSxDQUFBbUMsSUFBQSxDQUFBMEQsUUFBQSxFQUFBSSxDQUFBLFVBQUFsQixJQUFBLENBQUExRSxLQUFBLEdBQUF3RixRQUFBLENBQUFJLENBQUEsR0FBQWxCLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXNFLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQTVELEtBQUEsRUFBQXNFLFNBQUEsRUFBQUYsSUFBQSxpQkFBQXBDLGlCQUFBLENBQUF0QyxTQUFBLEdBQUF1QywwQkFBQSxFQUFBcEMsY0FBQSxDQUFBMEMsRUFBQSxtQkFBQXZDLEtBQUEsRUFBQWlDLDBCQUFBLEVBQUF0QixZQUFBLFNBQUFkLGNBQUEsQ0FBQW9DLDBCQUFBLG1CQUFBakMsS0FBQSxFQUFBZ0MsaUJBQUEsRUFBQXJCLFlBQUEsU0FBQXFCLGlCQUFBLENBQUE2RCxXQUFBLEdBQUFwRixNQUFBLENBQUF3QiwwQkFBQSxFQUFBMUIsaUJBQUEsd0JBQUFoQixPQUFBLENBQUF1RyxtQkFBQSxhQUFBQyxNQUFBLFFBQUFDLElBQUEsd0JBQUFELE1BQUEsSUFBQUEsTUFBQSxDQUFBRSxXQUFBLFdBQUFELElBQUEsS0FBQUEsSUFBQSxLQUFBaEUsaUJBQUEsNkJBQUFnRSxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBRSxJQUFBLE9BQUEzRyxPQUFBLENBQUE0RyxJQUFBLGFBQUFKLE1BQUEsV0FBQXRHLE1BQUEsQ0FBQTJHLGNBQUEsR0FBQTNHLE1BQUEsQ0FBQTJHLGNBQUEsQ0FBQUwsTUFBQSxFQUFBOUQsMEJBQUEsS0FBQThELE1BQUEsQ0FBQU0sU0FBQSxHQUFBcEUsMEJBQUEsRUFBQXhCLE1BQUEsQ0FBQXNGLE1BQUEsRUFBQXhGLGlCQUFBLHlCQUFBd0YsTUFBQSxDQUFBckcsU0FBQSxHQUFBRCxNQUFBLENBQUE2QixNQUFBLENBQUFpQixFQUFBLEdBQUF3RCxNQUFBLEtBQUF4RyxPQUFBLENBQUErRyxLQUFBLGFBQUExRSxHQUFBLGFBQUF3QixPQUFBLEVBQUF4QixHQUFBLE9BQUFZLHFCQUFBLENBQUFJLGFBQUEsQ0FBQWxELFNBQUEsR0FBQWUsTUFBQSxDQUFBbUMsYUFBQSxDQUFBbEQsU0FBQSxFQUFBVyxtQkFBQSxpQ0FBQWQsT0FBQSxDQUFBcUQsYUFBQSxHQUFBQSxhQUFBLEVBQUFyRCxPQUFBLENBQUFnSCxLQUFBLGFBQUF4RixPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUEyQixXQUFBLGVBQUFBLFdBQUEsS0FBQUEsV0FBQSxHQUFBMkQsT0FBQSxPQUFBQyxJQUFBLE9BQUE3RCxhQUFBLENBQUE5QixJQUFBLENBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsR0FBQTJCLFdBQUEsVUFBQXRELE9BQUEsQ0FBQXVHLG1CQUFBLENBQUE5RSxPQUFBLElBQUF5RixJQUFBLEdBQUFBLElBQUEsQ0FBQS9CLElBQUEsR0FBQXJCLElBQUEsV0FBQUgsTUFBQSxXQUFBQSxNQUFBLENBQUFrQixJQUFBLEdBQUFsQixNQUFBLENBQUFsRCxLQUFBLEdBQUF5RyxJQUFBLENBQUEvQixJQUFBLFdBQUFsQyxxQkFBQSxDQUFBRCxFQUFBLEdBQUE5QixNQUFBLENBQUE4QixFQUFBLEVBQUFoQyxpQkFBQSxnQkFBQUUsTUFBQSxDQUFBOEIsRUFBQSxFQUFBcEMsY0FBQSxpQ0FBQU0sTUFBQSxDQUFBOEIsRUFBQSw2REFBQWhELE9BQUEsQ0FBQW1ILElBQUEsYUFBQUMsR0FBQSxRQUFBQyxNQUFBLEdBQUFuSCxNQUFBLENBQUFrSCxHQUFBLEdBQUFELElBQUEsZ0JBQUE1RyxHQUFBLElBQUE4RyxNQUFBLEVBQUFGLElBQUEsQ0FBQXRCLElBQUEsQ0FBQXRGLEdBQUEsVUFBQTRHLElBQUEsQ0FBQUcsT0FBQSxhQUFBbkMsS0FBQSxXQUFBZ0MsSUFBQSxDQUFBZixNQUFBLFNBQUE3RixHQUFBLEdBQUE0RyxJQUFBLENBQUFJLEdBQUEsUUFBQWhILEdBQUEsSUFBQThHLE1BQUEsU0FBQWxDLElBQUEsQ0FBQTFFLEtBQUEsR0FBQUYsR0FBQSxFQUFBNEUsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsV0FBQUEsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsUUFBQW5GLE9BQUEsQ0FBQStDLE1BQUEsR0FBQUEsTUFBQSxFQUFBZCxPQUFBLENBQUE5QixTQUFBLEtBQUF1RyxXQUFBLEVBQUF6RSxPQUFBLEVBQUErRCxLQUFBLFdBQUFBLE1BQUF3QixhQUFBLGFBQUFDLElBQUEsV0FBQXRDLElBQUEsV0FBQVYsSUFBQSxRQUFBQyxLQUFBLEdBQUFLLFNBQUEsT0FBQUYsSUFBQSxZQUFBUCxRQUFBLGNBQUFuQixNQUFBLGdCQUFBZCxHQUFBLEdBQUEwQyxTQUFBLE9BQUFhLFVBQUEsQ0FBQTFDLE9BQUEsQ0FBQTRDLGFBQUEsSUFBQTBCLGFBQUEsV0FBQWIsSUFBQSxrQkFBQUEsSUFBQSxDQUFBZSxNQUFBLE9BQUF0SCxNQUFBLENBQUFtQyxJQUFBLE9BQUFvRSxJQUFBLE1BQUFSLEtBQUEsRUFBQVEsSUFBQSxDQUFBZ0IsS0FBQSxjQUFBaEIsSUFBQSxJQUFBNUIsU0FBQSxNQUFBNkMsSUFBQSxXQUFBQSxLQUFBLFNBQUEvQyxJQUFBLFdBQUFnRCxVQUFBLFFBQUFqQyxVQUFBLElBQUFHLFVBQUEsa0JBQUE4QixVQUFBLENBQUF2RixJQUFBLFFBQUF1RixVQUFBLENBQUF4RixHQUFBLGNBQUF5RixJQUFBLEtBQUFuRCxpQkFBQSxXQUFBQSxrQkFBQW9ELFNBQUEsYUFBQWxELElBQUEsUUFBQWtELFNBQUEsTUFBQS9GLE9BQUEsa0JBQUFnRyxPQUFBQyxHQUFBLEVBQUFDLE1BQUEsV0FBQXhFLE1BQUEsQ0FBQXBCLElBQUEsWUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQTBGLFNBQUEsRUFBQS9GLE9BQUEsQ0FBQW1ELElBQUEsR0FBQThDLEdBQUEsRUFBQUMsTUFBQSxLQUFBbEcsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEtBQUFtRCxNQUFBLGFBQUE3QixDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsR0FBQTNDLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxpQkFBQVIsS0FBQSxDQUFBQyxNQUFBLFNBQUF3QyxNQUFBLGFBQUF6QyxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsUUFBQVUsUUFBQSxHQUFBL0gsTUFBQSxDQUFBbUMsSUFBQSxDQUFBZ0QsS0FBQSxlQUFBNkMsVUFBQSxHQUFBaEksTUFBQSxDQUFBbUMsSUFBQSxDQUFBZ0QsS0FBQSxxQkFBQTRDLFFBQUEsSUFBQUMsVUFBQSxhQUFBWCxJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQWdDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLGNBQUF5QyxRQUFBLGFBQUFWLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBMkMsVUFBQSxZQUFBaEUsS0FBQSxxREFBQXFELElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLFlBQUFkLE1BQUEsV0FBQUEsT0FBQXRDLElBQUEsRUFBQUQsR0FBQSxhQUFBZ0UsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxJQUFBckgsTUFBQSxDQUFBbUMsSUFBQSxDQUFBZ0QsS0FBQSx3QkFBQWtDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxRQUFBMkMsWUFBQSxHQUFBOUMsS0FBQSxhQUFBOEMsWUFBQSxpQkFBQS9GLElBQUEsbUJBQUFBLElBQUEsS0FBQStGLFlBQUEsQ0FBQTdDLE1BQUEsSUFBQW5ELEdBQUEsSUFBQUEsR0FBQSxJQUFBZ0csWUFBQSxDQUFBM0MsVUFBQSxLQUFBMkMsWUFBQSxjQUFBM0UsTUFBQSxHQUFBMkUsWUFBQSxHQUFBQSxZQUFBLENBQUF0QyxVQUFBLGNBQUFyQyxNQUFBLENBQUFwQixJQUFBLEdBQUFBLElBQUEsRUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQUEsR0FBQSxFQUFBZ0csWUFBQSxTQUFBbEYsTUFBQSxnQkFBQWdDLElBQUEsR0FBQWtELFlBQUEsQ0FBQTNDLFVBQUEsRUFBQWxELGdCQUFBLFNBQUE4RixRQUFBLENBQUE1RSxNQUFBLE1BQUE0RSxRQUFBLFdBQUFBLFNBQUE1RSxNQUFBLEVBQUFpQyxRQUFBLG9CQUFBakMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxxQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsbUJBQUFvQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QyxJQUFBLEdBQUF6QixNQUFBLENBQUFyQixHQUFBLGdCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBd0YsSUFBQSxRQUFBekYsR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxPQUFBYyxNQUFBLGtCQUFBZ0MsSUFBQSx5QkFBQXpCLE1BQUEsQ0FBQXBCLElBQUEsSUFBQXFELFFBQUEsVUFBQVIsSUFBQSxHQUFBUSxRQUFBLEdBQUFuRCxnQkFBQSxLQUFBK0YsTUFBQSxXQUFBQSxPQUFBN0MsVUFBQSxhQUFBVyxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBRyxVQUFBLEtBQUFBLFVBQUEsY0FBQTRDLFFBQUEsQ0FBQS9DLEtBQUEsQ0FBQVEsVUFBQSxFQUFBUixLQUFBLENBQUFJLFFBQUEsR0FBQUcsYUFBQSxDQUFBUCxLQUFBLEdBQUEvQyxnQkFBQSx5QkFBQWdHLE9BQUFoRCxNQUFBLGFBQUFhLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsS0FBQUEsTUFBQSxRQUFBOUIsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGtCQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBbUcsTUFBQSxHQUFBL0UsTUFBQSxDQUFBckIsR0FBQSxFQUFBeUQsYUFBQSxDQUFBUCxLQUFBLFlBQUFrRCxNQUFBLGdCQUFBckUsS0FBQSw4QkFBQXNFLGFBQUEsV0FBQUEsY0FBQXpDLFFBQUEsRUFBQWYsVUFBQSxFQUFBRSxPQUFBLGdCQUFBZCxRQUFBLEtBQUF6RCxRQUFBLEVBQUFrQyxNQUFBLENBQUFrRCxRQUFBLEdBQUFmLFVBQUEsRUFBQUEsVUFBQSxFQUFBRSxPQUFBLEVBQUFBLE9BQUEsb0JBQUFqQyxNQUFBLFVBQUFkLEdBQUEsR0FBQTBDLFNBQUEsR0FBQXZDLGdCQUFBLE9BQUF4QyxPQUFBO0FBQUEsU0FBQTJJLG1CQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxFQUFBdkksR0FBQSxFQUFBOEIsR0FBQSxjQUFBNEMsSUFBQSxHQUFBMkQsR0FBQSxDQUFBckksR0FBQSxFQUFBOEIsR0FBQSxPQUFBNUIsS0FBQSxHQUFBd0UsSUFBQSxDQUFBeEUsS0FBQSxXQUFBdUQsS0FBQSxJQUFBUCxNQUFBLENBQUFPLEtBQUEsaUJBQUFpQixJQUFBLENBQUFKLElBQUEsSUFBQXJCLE9BQUEsQ0FBQS9DLEtBQUEsWUFBQXdHLE9BQUEsQ0FBQXpELE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsQ0FBQStFLEtBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBM0csRUFBQSw2QkFBQVYsSUFBQSxTQUFBc0gsSUFBQSxHQUFBQyxTQUFBLGFBQUFoQyxPQUFBLFdBQUF6RCxPQUFBLEVBQUFDLE1BQUEsUUFBQW1GLEdBQUEsR0FBQXhHLEVBQUEsQ0FBQThHLEtBQUEsQ0FBQXhILElBQUEsRUFBQXNILElBQUEsWUFBQUgsTUFBQXBJLEtBQUEsSUFBQWtJLGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFVBQUFySSxLQUFBLGNBQUFxSSxPQUFBeEgsR0FBQSxJQUFBcUgsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsV0FBQXhILEdBQUEsS0FBQXVILEtBQUEsQ0FBQTlELFNBQUE7QUFJQSxJQUFNb0UsZUFBZTtFQUFBLElBQUFDLElBQUEsR0FBQUwsaUJBQUEsZUFBQWhKLG1CQUFBLEdBQUE2RyxJQUFBLENBQUcsU0FBQXlDLFFBQU9DLEdBQVksRUFBRUMsR0FBYTtJQUFBLElBQUFDLFNBQUEsRUFBQUMsa0JBQUE7SUFBQSxPQUFBMUosbUJBQUEsR0FBQXdCLElBQUEsVUFBQW1JLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBbEMsSUFBQSxHQUFBa0MsUUFBQSxDQUFBeEUsSUFBQTtRQUFBO1VBQUF3RSxRQUFBLENBQUFsQyxJQUFBO1VBQUFrQyxRQUFBLENBQUF4RSxJQUFBO1VBQUEsT0FFOUJ5RSxvQkFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztRQUFBO1VBQWpDTCxTQUFTLEdBQUFHLFFBQUEsQ0FBQWxGLElBQUE7VUFDVGdGLGtCQUFrQixHQUFHRCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxVQUFDQyxRQUFRO1lBQUEsT0FBSyxJQUFBQywrQkFBa0IsRUFBQ0QsUUFBUSxDQUFDO1VBQUEsRUFBQztVQUFBLE9BQUFKLFFBQUEsQ0FBQS9FLE1BQUEsV0FDN0UyRSxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVCxrQkFBa0IsQ0FBQztRQUFBO1VBQUFFLFFBQUEsQ0FBQWxDLElBQUE7VUFBQWtDLFFBQUEsQ0FBQVEsRUFBQSxHQUFBUixRQUFBO1VBQUEsT0FBQUEsUUFBQSxDQUFBL0UsTUFBQSxXQUV4QzJFLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFBVCxRQUFBLENBQUFRO1VBQU0sQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFSLFFBQUEsQ0FBQS9CLElBQUE7TUFBQTtJQUFBLEdBQUF5QixPQUFBO0VBQUEsQ0FFaEQ7RUFBQSxnQkFSS0YsZUFBZUEsQ0FBQWtCLEVBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFsQixJQUFBLENBQUFGLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsR0FRcEI7QUFFRCxJQUFNc0IsV0FBVztFQUFBLElBQUFDLEtBQUEsR0FBQXpCLGlCQUFBLGVBQUFoSixtQkFBQSxHQUFBNkcsSUFBQSxDQUFHLFNBQUE2RCxTQUFPbkIsR0FBWSxFQUFFQyxHQUFhO0lBQUEsSUFBQW1CLEVBQUEsRUFBQVgsUUFBQTtJQUFBLE9BQUFoSyxtQkFBQSxHQUFBd0IsSUFBQSxVQUFBb0osVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFuRCxJQUFBLEdBQUFtRCxTQUFBLENBQUF6RixJQUFBO1FBQUE7VUFBQXlGLFNBQUEsQ0FBQW5ELElBQUE7VUFFMUNpRCxFQUFFLEdBQUtwQixHQUFHLENBQUN1QixNQUFNLENBQWpCSCxFQUFFO1VBQUFFLFNBQUEsQ0FBQXpGLElBQUE7VUFBQSxPQUNheUUsb0JBQVEsQ0FBQ2tCLFFBQVEsQ0FBQ0osRUFBRSxDQUFDO1FBQUE7VUFBdENYLFFBQVEsR0FBQWEsU0FBQSxDQUFBbkcsSUFBQTtVQUFBLElBRVRzRixRQUFRO1lBQUFhLFNBQUEsQ0FBQXpGLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQXlGLFNBQUEsQ0FBQWhHLE1BQUEsV0FBUzJFLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFFO1VBQTJCLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQVEsU0FBQSxDQUFBaEcsTUFBQSxXQUM1RTJFLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBQUYsK0JBQWtCLEVBQUNELFFBQVEsQ0FBQyxDQUFDO1FBQUE7VUFBQWEsU0FBQSxDQUFBbkQsSUFBQTtVQUFBbUQsU0FBQSxDQUFBVCxFQUFBLEdBQUFTLFNBQUE7VUFBQSxPQUFBQSxTQUFBLENBQUFoRyxNQUFBLFdBRWxEMkUsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUFRLFNBQUEsQ0FBQVQ7VUFBTSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQVMsU0FBQSxDQUFBaEQsSUFBQTtNQUFBO0lBQUEsR0FBQTZDLFFBQUE7RUFBQSxDQUVoRDtFQUFBLGdCQVZLRixXQUFXQSxDQUFBUSxHQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBUixLQUFBLENBQUF0QixLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLEdBVWhCO0FBRUQsSUFBTWdDLGNBQWM7RUFBQSxJQUFBQyxLQUFBLEdBQUFuQyxpQkFBQSxlQUFBaEosbUJBQUEsR0FBQTZHLElBQUEsQ0FBRyxTQUFBdUUsU0FBTzdCLEdBQVksRUFBRUMsR0FBYTtJQUFBLElBQUE2QixZQUFBLEVBQUFDLFdBQUE7SUFBQSxPQUFBdEwsbUJBQUEsR0FBQXdCLElBQUEsVUFBQStKLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBOUQsSUFBQSxHQUFBOEQsU0FBQSxDQUFBcEcsSUFBQTtRQUFBO1VBQUFvRyxTQUFBLENBQUE5RCxJQUFBO1VBRS9DMkQsWUFBbUMsR0FBRzlCLEdBQUcsQ0FBQ2tDLElBQUk7VUFDOUNILFdBQVcsR0FBRyxJQUFJekIsb0JBQVEsQ0FBQ3dCLFlBQVksQ0FBQztVQUFBRyxTQUFBLENBQUFwRyxJQUFBO1VBQUEsT0FDeENrRyxXQUFXLENBQUNJLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFBQSxPQUFBRixTQUFBLENBQUEzRyxNQUFBLFdBQ2pCMkUsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFBRiwrQkFBa0IsRUFBQ3FCLFdBQVcsQ0FBQyxDQUFDO1FBQUE7VUFBQUUsU0FBQSxDQUFBOUQsSUFBQTtVQUFBOEQsU0FBQSxDQUFBcEIsRUFBQSxHQUFBb0IsU0FBQTtVQUFBLE9BQUFBLFNBQUEsQ0FBQTNHLE1BQUEsV0FFckQyRSxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBQW1CLFNBQUEsQ0FBQXBCO1VBQU0sQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFvQixTQUFBLENBQUEzRCxJQUFBO01BQUE7SUFBQSxHQUFBdUQsUUFBQTtFQUFBLENBRWhEO0VBQUEsZ0JBVEtGLGNBQWNBLENBQUFTLEdBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFULEtBQUEsQ0FBQWhDLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsR0FTbkI7QUFFRCxJQUFNMkMsY0FBYztFQUFBLElBQUFDLEtBQUEsR0FBQTlDLGlCQUFBLGVBQUFoSixtQkFBQSxHQUFBNkcsSUFBQSxDQUFHLFNBQUFrRixTQUFPeEMsR0FBWSxFQUFFQyxHQUFhO0lBQUEsSUFBQW1CLEVBQUEsRUFBQXFCLFVBQUEsRUFBQUMsZUFBQTtJQUFBLE9BQUFqTSxtQkFBQSxHQUFBd0IsSUFBQSxVQUFBMEssVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUF6RSxJQUFBLEdBQUF5RSxTQUFBLENBQUEvRyxJQUFBO1FBQUE7VUFBQStHLFNBQUEsQ0FBQXpFLElBQUE7VUFFN0NpRCxFQUFFLEdBQUtwQixHQUFHLENBQUN1QixNQUFNLENBQWpCSCxFQUFFO1VBQ0pxQixVQUFpQyxHQUFHekMsR0FBRyxDQUFDa0MsSUFBSTtVQUFBVSxTQUFBLENBQUEvRyxJQUFBO1VBQUEsT0FFcEJ5RSxvQkFBUSxDQUFDdUMsaUJBQWlCLENBQUN6QixFQUFFLEVBQUVxQixVQUFVLEVBQUU7WUFDdkUsT0FBSztVQUNQLENBQUMsQ0FBQztRQUFBO1VBRklDLGVBQWUsR0FBQUUsU0FBQSxDQUFBekgsSUFBQTtVQUFBLElBSWhCdUgsZUFBZTtZQUFBRSxTQUFBLENBQUEvRyxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUErRyxTQUFBLENBQUF0SCxNQUFBLFdBQVMyRSxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBRTtVQUEyQixDQUFDLENBQUM7UUFBQTtVQUFBLE9BQUE4QixTQUFBLENBQUF0SCxNQUFBLFdBRW5GMkUsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFBRiwrQkFBa0IsRUFBQ2dDLGVBQWUsQ0FBQyxDQUFDO1FBQUE7VUFBQUUsU0FBQSxDQUFBekUsSUFBQTtVQUFBeUUsU0FBQSxDQUFBL0IsRUFBQSxHQUFBK0IsU0FBQTtVQUFBLE9BQUFBLFNBQUEsQ0FBQXRILE1BQUEsV0FFekQyRSxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBQThCLFNBQUEsQ0FBQS9CO1VBQU0sQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUErQixTQUFBLENBQUF0RSxJQUFBO01BQUE7SUFBQSxHQUFBa0UsUUFBQTtFQUFBLENBRWhEO0VBQUEsZ0JBZktGLGNBQWNBLENBQUFRLEdBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFSLEtBQUEsQ0FBQTNDLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsR0FlbkI7QUFFRCxJQUFNcUQsY0FBYztFQUFBLElBQUFDLEtBQUEsR0FBQXhELGlCQUFBLGVBQUFoSixtQkFBQSxHQUFBNkcsSUFBQSxDQUFHLFNBQUE0RixTQUFPbEQsR0FBWSxFQUFFQyxHQUFhO0lBQUEsSUFBQW1CLEVBQUEsRUFBQStCLGFBQUEsRUFBQTFDLFFBQUE7SUFBQSxPQUFBaEssbUJBQUEsR0FBQXdCLElBQUEsVUFBQW1MLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBbEYsSUFBQSxHQUFBa0YsU0FBQSxDQUFBeEgsSUFBQTtRQUFBO1VBQUF3SCxTQUFBLENBQUFsRixJQUFBO1VBRTdDaUQsRUFBRSxHQUFLcEIsR0FBRyxDQUFDdUIsTUFBTSxDQUFqQkgsRUFBRSxFQUVWO1VBQUFpQyxTQUFBLENBQUF4SCxJQUFBO1VBQUEsT0FDNEJ5RSxvQkFBUSxDQUFDZ0QsY0FBYyxDQUFDLENBQUM7UUFBQTtVQUEvQ0gsYUFBYSxHQUFBRSxTQUFBLENBQUFsSSxJQUFBO1VBQUEsTUFDZmdJLGFBQWEsSUFBSSxDQUFDO1lBQUFFLFNBQUEsQ0FBQXhILElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQXdILFNBQUEsQ0FBQS9ILE1BQUEsV0FDYjJFLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFFO1VBQTZDLENBQUMsQ0FBQztRQUFBO1VBQUF1QyxTQUFBLENBQUF4SCxJQUFBO1VBQUEsT0FHakV5RSxvQkFBUSxDQUFDa0IsUUFBUSxDQUFDSixFQUFFLENBQUM7UUFBQTtVQUF0Q1gsUUFBUSxHQUFBNEMsU0FBQSxDQUFBbEksSUFBQTtVQUFBLElBRVRzRixRQUFRO1lBQUE0QyxTQUFBLENBQUF4SCxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUF3SCxTQUFBLENBQUEvSCxNQUFBLFdBQVMyRSxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBRTtVQUEyQixDQUFDLENBQUM7UUFBQTtVQUFBLEtBRy9FTCxRQUFRLENBQUM4QyxNQUFNO1lBQUFGLFNBQUEsQ0FBQXhILElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQXdILFNBQUEsQ0FBQS9ILE1BQUEsV0FDVjJFLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFFO1VBQStDLENBQUMsQ0FBQztRQUFBO1VBQUF1QyxTQUFBLENBQUF4SCxJQUFBO1VBQUEsT0FFcEY0RSxRQUFRLFVBQU8sQ0FBQyxDQUFDO1FBQUE7VUFBQSxPQUFBNEMsU0FBQSxDQUFBL0gsTUFBQSxXQUVoQjJFLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRTRDLE9BQU8sRUFBRTtVQUFLLENBQUMsQ0FBQztRQUFBO1VBQUFILFNBQUEsQ0FBQWxGLElBQUE7VUFBQWtGLFNBQUEsQ0FBQXhDLEVBQUEsR0FBQXdDLFNBQUE7VUFBQSxPQUFBQSxTQUFBLENBQUEvSCxNQUFBLFdBRXZDMkUsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUF1QyxTQUFBLENBQUF4QztVQUFNLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBd0MsU0FBQSxDQUFBL0UsSUFBQTtNQUFBO0lBQUEsR0FBQTRFLFFBQUE7RUFBQSxDQUVoRDtFQUFBLGdCQXhCS0YsY0FBY0EsQ0FBQVMsR0FBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQVQsS0FBQSxDQUFBckQsS0FBQSxPQUFBRCxTQUFBO0VBQUE7QUFBQSxHQXdCbkI7QUFFRCxJQUFNZ0UsY0FBYztFQUFBLElBQUFDLEtBQUEsR0FBQW5FLGlCQUFBLGVBQUFoSixtQkFBQSxHQUFBNkcsSUFBQSxDQUFHLFNBQUF1RyxTQUFPN0QsR0FBWSxFQUFFQyxHQUFhO0lBQUEsSUFBQW1CLEVBQUEsRUFBQXNCLGVBQUE7SUFBQSxPQUFBak0sbUJBQUEsR0FBQXdCLElBQUEsVUFBQTZMLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBNUYsSUFBQSxHQUFBNEYsU0FBQSxDQUFBbEksSUFBQTtRQUFBO1VBQUFrSSxTQUFBLENBQUE1RixJQUFBO1VBRTdDaUQsRUFBRSxHQUFLcEIsR0FBRyxDQUFDdUIsTUFBTSxDQUFqQkgsRUFBRSxFQUVWO1VBQUEyQyxTQUFBLENBQUFsSSxJQUFBO1VBQUEsT0FDTXlFLG9CQUFRLENBQUMwRCxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFBRVQsTUFBTSxFQUFFO1VBQU0sQ0FBQyxDQUFDO1FBQUE7VUFBQVEsU0FBQSxDQUFBbEksSUFBQTtVQUFBLE9BR2xCeUUsb0JBQVEsQ0FBQ3VDLGlCQUFpQixDQUFDekIsRUFBRSxFQUFFO1lBQUVtQyxNQUFNLEVBQUU7VUFBSyxDQUFDLEVBQUU7WUFBRSxPQUFLO1VBQUssQ0FBQyxDQUFDO1FBQUE7VUFBdkZiLGVBQWUsR0FBQXFCLFNBQUEsQ0FBQTVJLElBQUE7VUFBQSxJQUVoQnVILGVBQWU7WUFBQXFCLFNBQUEsQ0FBQWxJLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQWtJLFNBQUEsQ0FBQXpJLE1BQUEsV0FBUzJFLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFFO1VBQTJCLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQWlELFNBQUEsQ0FBQXpJLE1BQUEsV0FFbkYyRSxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUFGLCtCQUFrQixFQUFDZ0MsZUFBZSxDQUFDLENBQUM7UUFBQTtVQUFBcUIsU0FBQSxDQUFBNUYsSUFBQTtVQUFBNEYsU0FBQSxDQUFBbEQsRUFBQSxHQUFBa0QsU0FBQTtVQUFBLE9BQUFBLFNBQUEsQ0FBQXpJLE1BQUEsV0FFekQyRSxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBQWlELFNBQUEsQ0FBQWxEO1VBQU0sQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFrRCxTQUFBLENBQUF6RixJQUFBO01BQUE7SUFBQSxHQUFBdUYsUUFBQTtFQUFBLENBRWhEO0VBQUEsZ0JBaEJLRixjQUFjQSxDQUFBTSxJQUFBLEVBQUFDLElBQUE7SUFBQSxPQUFBTixLQUFBLENBQUFoRSxLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLEdBZ0JuQjtBQUVELElBQU13RSxlQUFlO0VBQUEsSUFBQUMsS0FBQSxHQUFBM0UsaUJBQUEsZUFBQWhKLG1CQUFBLEdBQUE2RyxJQUFBLENBQUcsU0FBQStHLFNBQU9yRSxHQUFZLEVBQUVDLEdBQWE7SUFBQSxJQUFBUSxRQUFBO0lBQUEsT0FBQWhLLG1CQUFBLEdBQUF3QixJQUFBLFVBQUFxTSxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXBHLElBQUEsR0FBQW9HLFNBQUEsQ0FBQTFJLElBQUE7UUFBQTtVQUFBMEksU0FBQSxDQUFBcEcsSUFBQTtVQUFBb0csU0FBQSxDQUFBMUksSUFBQTtVQUFBLE9BRS9CeUUsb0JBQVEsQ0FBQ2tFLE9BQU8sQ0FBQztZQUFFakIsTUFBTSxFQUFFO1VBQUssQ0FBQyxDQUFDO1FBQUE7VUFBbkQ5QyxRQUFRLEdBQUE4RCxTQUFBLENBQUFwSixJQUFBO1VBQUEsSUFDVHNGLFFBQVE7WUFBQThELFNBQUEsQ0FBQTFJLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTBJLFNBQUEsQ0FBQWpKLE1BQUEsV0FBUzJFLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFFO1VBQTJCLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQXlELFNBQUEsQ0FBQWpKLE1BQUEsV0FDNUUyRSxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUFGLCtCQUFrQixFQUFDRCxRQUFRLENBQUMsQ0FBQztRQUFBO1VBQUE4RCxTQUFBLENBQUFwRyxJQUFBO1VBQUFvRyxTQUFBLENBQUExRCxFQUFBLEdBQUEwRCxTQUFBO1VBQUEsT0FBQUEsU0FBQSxDQUFBakosTUFBQSxXQUVsRDJFLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFBeUQsU0FBQSxDQUFBMUQ7VUFBTSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQTBELFNBQUEsQ0FBQWpHLElBQUE7TUFBQTtJQUFBLEdBQUErRixRQUFBO0VBQUEsQ0FFaEQ7RUFBQSxnQkFSS0YsZUFBZUEsQ0FBQU0sSUFBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQU4sS0FBQSxDQUFBeEUsS0FBQSxPQUFBRCxTQUFBO0VBQUE7QUFBQSxHQVFwQjtBQUFDLElBQUFnRixRQUFBLEdBRWE7RUFDYjlFLGVBQWUsRUFBZkEsZUFBZTtFQUNmb0IsV0FBVyxFQUFYQSxXQUFXO0VBQ1hVLGNBQWMsRUFBZEEsY0FBYztFQUNkVyxjQUFjLEVBQWRBLGNBQWM7RUFDZFUsY0FBYyxFQUFkQSxjQUFjO0VBQ2RXLGNBQWMsRUFBZEEsY0FBYztFQUNkUSxlQUFlLEVBQWZBO0FBQ0YsQ0FBQztBQUFBek4sT0FBQSxjQUFBaU8sUUFBQSJ9