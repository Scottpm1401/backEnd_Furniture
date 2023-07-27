"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _lodash = require("lodash");
var _user = _interopRequireDefault(require("../../models/user"));
var _serializers = require("../../serializers");
var _common = require("../../utils/common");
var _token = require("../../utils/token");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getSelfUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _id, user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _id = (0, _token.getIdFromReq)(req);
          _context.next = 4;
          return _user["default"].findById(_id);
        case 4:
          user = _context.sent;
          if (!user) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(200).json((0, _serializers.userSerializer)(user)));
        case 7:
          return _context.abrupt("return", res.status(404).json({
            message: 'error.user.not_found'
          }));
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: _context.t0
          }));
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getSelfUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _id, user;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _id = req.params.id;
          _context2.next = 4;
          return _user["default"].findById(_id);
        case 4:
          user = _context2.sent;
          if (!user) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(200).json((0, _serializers.userSerializer)(user)));
        case 7:
          return _context2.abrupt("return", res.status(404).json({
            message: 'error.user.not_found'
          }));
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
  return function getUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _id, _req$body, displayName, username, birthday, info, role, email, password, userRole, findUserByEmail, findUserByUsername, hashedPassword, updatedUser;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _id = req.params.id;
          _req$body = req.body, displayName = _req$body.displayName, username = _req$body.username, birthday = _req$body.birthday, info = _req$body.info, role = _req$body.role, email = _req$body.email, password = _req$body.password;
          userRole = (0, _common.getRole)(req);
          _context3.next = 6;
          return _user["default"].find({
            email: email
          });
        case 6:
          findUserByEmail = _context3.sent;
          if (!(findUserByEmail.length === 0)) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'error.user.not_found'
          }));
        case 9:
          if ((0, _common.isHasPermission)(userRole, findUserByEmail[0].role)) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", res.status(403).json({
            message: 'error.auth.do_not_have_permission'
          }));
        case 11:
          _context3.next = 13;
          return _user["default"].find({
            username: username
          });
        case 13:
          findUserByUsername = _context3.sent;
          if (!(findUserByUsername.length > 0 && findUserByUsername[0]._id.toString() !== _id)) {
            _context3.next = 16;
            break;
          }
          return _context3.abrupt("return", res.status(500).json({
            message: 'error.auth.username_already_existed'
          }));
        case 16:
          if (!(role && !(0, _common.isHasPermission)(userRole, role))) {
            _context3.next = 18;
            break;
          }
          return _context3.abrupt("return", res.status(403).json({
            message: 'error.user.update_role_is_higher_than_your'
          }));
        case 18:
          if (!password) {
            _context3.next = 24;
            break;
          }
          _context3.next = 21;
          return _bcrypt["default"].hash(password, 10);
        case 21:
          _context3.t0 = _context3.sent;
          _context3.next = 25;
          break;
        case 24:
          _context3.t0 = undefined;
        case 25:
          hashedPassword = _context3.t0;
          _context3.next = 28;
          return _user["default"].findOneAndUpdate({
            _id: _id
          }, {
            $set: {
              displayName: displayName,
              username: username,
              birthday: birthday,
              info: info,
              role: role,
              email: email,
              password: hashedPassword
            }
          }, {
            "new": true
          });
        case 28:
          updatedUser = _context3.sent;
          if (updatedUser) {
            _context3.next = 31;
            break;
          }
          return _context3.abrupt("return", res.status(500).json({
            message: 'error.user.failed_to_update_user'
          }));
        case 31:
          return _context3.abrupt("return", res.status(200).json((0, _serializers.userSerializer)(updatedUser)));
        case 34:
          _context3.prev = 34;
          _context3.t1 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: _context3.t1
          }));
        case 37:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 34]]);
  }));
  return function updateUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateSelfUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _id, _req$body2, displayName, username, birthday, info, findUser, updatedUser;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _id = (0, _token.getIdFromReq)(req);
          _req$body2 = req.body, displayName = _req$body2.displayName, username = _req$body2.username, birthday = _req$body2.birthday, info = _req$body2.info;
          _context4.next = 5;
          return _user["default"].find({
            username: username
          });
        case 5:
          findUser = _context4.sent;
          if (!(findUser.length > 0 && findUser[0]._id.toString() !== _id)) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(500).json({
            message: 'error.auth.username_already_existed'
          }));
        case 10:
          _context4.next = 12;
          return _user["default"].findOneAndUpdate({
            _id: _id
          }, {
            $set: {
              displayName: displayName,
              username: username,
              birthday: birthday,
              info: info
            }
          }, {
            "new": true
          });
        case 12:
          updatedUser = _context4.sent;
          if (updatedUser) {
            _context4.next = 15;
            break;
          }
          return _context4.abrupt("return", res.status(500).json({
            message: 'error.user.failed_to_update_user'
          }));
        case 15:
          return _context4.abrupt("return", res.status(200).json((0, _serializers.userSerializer)(updatedUser)));
        case 16:
          _context4.next = 21;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: _context4.t0
          }));
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 18]]);
  }));
  return function updateSelfUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _id;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _id = req.params.id;
          _context5.next = 4;
          return _user["default"].deleteOne({
            _id: _id
          });
        case 4:
          return _context5.abrupt("return", res.status(200).json({
            success: true
          }));
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            message: _context5.t0
          }));
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getAllUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _offset$toString, _limit$toString, _req$query, offset, limit, search, searchFilter, filter, users, total, formattedUsers;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$query = req.query, offset = _req$query.offset, limit = _req$query.limit, search = _req$query.search;
          searchFilter = search ? {
            $text: {
              $search: search.toString()
            }
          } : {};
          filter = _objectSpread({}, searchFilter);
          _context6.next = 6;
          return _user["default"].find(filter).skip((0, _lodash.parseInt)((_offset$toString = offset === null || offset === void 0 ? void 0 : offset.toString()) !== null && _offset$toString !== void 0 ? _offset$toString : '0')).limit((0, _lodash.parseInt)((_limit$toString = limit === null || limit === void 0 ? void 0 : limit.toString()) !== null && _limit$toString !== void 0 ? _limit$toString : '0'));
        case 6:
          users = _context6.sent;
          _context6.next = 9;
          return _user["default"].find(filter).count();
        case 9:
          total = _context6.sent;
          formattedUsers = users.map(function (user) {
            return (0, _serializers.userSerializer)(user);
          });
          return _context6.abrupt("return", res.status(200).json({
            data: formattedUsers,
            total: total
          }));
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            message: _context6.t0
          }));
        case 17:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 14]]);
  }));
  return function getAllUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var _default = {
  getUser: getUser,
  getSelfUser: getSelfUser,
  updateUser: updateUser,
  updateSelfUser: updateSelfUser,
  deleteUser: deleteUser,
  getAllUser: getAllUser
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmNyeXB0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9kYXNoIiwiX3VzZXIiLCJfc2VyaWFsaXplcnMiLCJfY29tbW9uIiwiX3Rva2VuIiwib2JqIiwiX19lc01vZHVsZSIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl90b1Byb3BlcnR5S2V5IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhcmciLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiY2FsbCIsIlR5cGVFcnJvciIsIk51bWJlciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlc2MiLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsInR5cGUiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwidmFsIiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImdldFNlbGZVc2VyIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJfaWQiLCJ1c2VyIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImdldElkRnJvbVJlcSIsIlVzZXIiLCJmaW5kQnlJZCIsInN0YXR1cyIsImpzb24iLCJ1c2VyU2VyaWFsaXplciIsIm1lc3NhZ2UiLCJ0MCIsIl94IiwiX3gyIiwiZ2V0VXNlciIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwYXJhbXMiLCJpZCIsIl94MyIsIl94NCIsInVwZGF0ZVVzZXIiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX3JlcSRib2R5IiwidXNlcm5hbWUiLCJiaXJ0aGRheSIsInJvbGUiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlclJvbGUiLCJmaW5kVXNlckJ5RW1haWwiLCJmaW5kVXNlckJ5VXNlcm5hbWUiLCJoYXNoZWRQYXNzd29yZCIsInVwZGF0ZWRVc2VyIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiYm9keSIsImdldFJvbGUiLCJmaW5kIiwiaXNIYXNQZXJtaXNzaW9uIiwidG9TdHJpbmciLCJiY3J5cHQiLCJoYXNoIiwiZmluZE9uZUFuZFVwZGF0ZSIsIiRzZXQiLCJ0MSIsIl94NSIsIl94NiIsInVwZGF0ZVNlbGZVc2VyIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9yZXEkYm9keTIiLCJmaW5kVXNlciIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl94NyIsIl94OCIsImRlbGV0ZVVzZXIiLCJfcmVmNSIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiZGVsZXRlT25lIiwic3VjY2VzcyIsIl94OSIsIl94MTAiLCJnZXRBbGxVc2VyIiwiX3JlZjYiLCJfY2FsbGVlNiIsIl9vZmZzZXQkdG9TdHJpbmciLCJfbGltaXQkdG9TdHJpbmciLCJfcmVxJHF1ZXJ5Iiwib2Zmc2V0IiwibGltaXQiLCJzZWFyY2giLCJzZWFyY2hGaWx0ZXIiLCJ1c2VycyIsInRvdGFsIiwiZm9ybWF0dGVkVXNlcnMiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJxdWVyeSIsIiR0ZXh0IiwiJHNlYXJjaCIsInNraXAiLCJwYXJzZUludCIsImNvdW50IiwibWFwIiwiZGF0YSIsIl94MTEiLCJfeDEyIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Vc2VyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBwYXJzZUludCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBGaWx0ZXJRdWVyeSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IENNU0xpc3QgfSBmcm9tICdzcmMvbW9kZWxzL2FwaS9jbXMnO1xuaW1wb3J0IHsgVXBkYXRlU2VsZlVzZXJSZXF1ZXN0LCBVcGRhdGVVc2VyUmVxdWVzdCB9IGZyb20gJ3NyYy9tb2RlbHMvYXBpL3VzZXInO1xuXG5pbXBvcnQgVXNlciwgeyBVc2VyUmVzcG9uc2UsIFVzZXJUeXBlTW9kZWwgfSBmcm9tICdzcmMvbW9kZWxzL3VzZXInO1xuaW1wb3J0IHsgdXNlclNlcmlhbGl6ZXIgfSBmcm9tICdzcmMvc2VyaWFsaXplcnMnO1xuaW1wb3J0IHsgZ2V0Um9sZSwgaXNIYXNQZXJtaXNzaW9uIH0gZnJvbSAnc3JjL3V0aWxzL2NvbW1vbic7XG5pbXBvcnQgeyBnZXRJZEZyb21SZXEgfSBmcm9tICdzcmMvdXRpbHMvdG9rZW4nO1xuXG5jb25zdCBnZXRTZWxmVXNlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBfaWQgPSBnZXRJZEZyb21SZXEocmVxKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChfaWQpO1xuICAgIGlmICh1c2VyKSByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlclNlcmlhbGl6ZXIodXNlcikpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci51c2VyLm5vdF9mb3VuZCcgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgZ2V0VXNlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBfaWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKF9pZCk7XG4gICAgaWYgKHVzZXIpIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyU2VyaWFsaXplcih1c2VyKSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnVzZXIubm90X2ZvdW5kJyB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IF9pZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3QgeyBkaXNwbGF5TmFtZSwgdXNlcm5hbWUsIGJpcnRoZGF5LCBpbmZvLCByb2xlLCBlbWFpbCwgcGFzc3dvcmQgfTogVXBkYXRlVXNlclJlcXVlc3QgPVxuICAgICAgcmVxLmJvZHk7XG4gICAgY29uc3QgdXNlclJvbGUgPSBnZXRSb2xlKHJlcSk7XG4gICAgY29uc3QgZmluZFVzZXJCeUVtYWlsID0gYXdhaXQgVXNlci5maW5kKHsgZW1haWwgfSk7XG4gICAgaWYgKGZpbmRVc2VyQnlFbWFpbC5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IudXNlci5ub3RfZm91bmQnIH0pO1xuXG4gICAgaWYgKCFpc0hhc1Blcm1pc3Npb24odXNlclJvbGUsIGZpbmRVc2VyQnlFbWFpbFswXS5yb2xlKSlcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6ICdlcnJvci5hdXRoLmRvX25vdF9oYXZlX3Blcm1pc3Npb24nIH0pO1xuXG4gICAgY29uc3QgZmluZFVzZXJCeVVzZXJuYW1lID0gYXdhaXQgVXNlci5maW5kKHsgdXNlcm5hbWUgfSk7XG5cbiAgICBpZiAoZmluZFVzZXJCeVVzZXJuYW1lLmxlbmd0aCA+IDAgJiYgZmluZFVzZXJCeVVzZXJuYW1lWzBdLl9pZC50b1N0cmluZygpICE9PSBfaWQpXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IuYXV0aC51c2VybmFtZV9hbHJlYWR5X2V4aXN0ZWQnIH0pO1xuXG4gICAgaWYgKHJvbGUgJiYgIWlzSGFzUGVybWlzc2lvbih1c2VyUm9sZSwgcm9sZSkpXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IudXNlci51cGRhdGVfcm9sZV9pc19oaWdoZXJfdGhhbl95b3VyJyB9KTtcblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gcGFzc3dvcmQgPyBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgVXNlci5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgeyBfaWQgfSxcbiAgICAgIHtcbiAgICAgICAgJHNldDoge1xuICAgICAgICAgIGRpc3BsYXlOYW1lLFxuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGJpcnRoZGF5LFxuICAgICAgICAgIGluZm8sXG4gICAgICAgICAgcm9sZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgbmV3OiB0cnVlIH1cbiAgICApO1xuXG4gICAgaWYgKCF1cGRhdGVkVXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnVzZXIuZmFpbGVkX3RvX3VwZGF0ZV91c2VyJyB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlclNlcmlhbGl6ZXIodXBkYXRlZFVzZXIpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVTZWxmVXNlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBfaWQgPSBnZXRJZEZyb21SZXEocmVxKTtcbiAgICBjb25zdCB7IGRpc3BsYXlOYW1lLCB1c2VybmFtZSwgYmlydGhkYXksIGluZm8gfTogVXBkYXRlU2VsZlVzZXJSZXF1ZXN0ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgZmluZFVzZXIgPSBhd2FpdCBVc2VyLmZpbmQoeyB1c2VybmFtZSB9KTtcblxuICAgIGlmIChmaW5kVXNlci5sZW5ndGggPiAwICYmIGZpbmRVc2VyWzBdLl9pZC50b1N0cmluZygpICE9PSBfaWQpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci5hdXRoLnVzZXJuYW1lX2FscmVhZHlfZXhpc3RlZCcgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgVXNlci5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgICB7IF9pZCB9LFxuICAgICAgICB7ICRzZXQ6IHsgZGlzcGxheU5hbWUsIHVzZXJuYW1lLCBiaXJ0aGRheSwgaW5mbyB9IH0sXG4gICAgICAgIHsgbmV3OiB0cnVlIH1cbiAgICAgICk7XG4gICAgICBpZiAoIXVwZGF0ZWRVc2VyKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IudXNlci5mYWlsZWRfdG9fdXBkYXRlX3VzZXInIH0pO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXJTZXJpYWxpemVyKHVwZGF0ZWRVc2VyKSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgX2lkID0gcmVxLnBhcmFtcy5pZDtcbiAgICBhd2FpdCBVc2VyLmRlbGV0ZU9uZSh7IF9pZCB9KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgZ2V0QWxsVXNlciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG9mZnNldCwgbGltaXQsIHNlYXJjaCB9ID0gcmVxLnF1ZXJ5O1xuXG4gICAgY29uc3Qgc2VhcmNoRmlsdGVyID0gc2VhcmNoID8geyAkdGV4dDogeyAkc2VhcmNoOiBzZWFyY2gudG9TdHJpbmcoKSB9IH0gOiB7fTtcbiAgICBjb25zdCBmaWx0ZXI6IEZpbHRlclF1ZXJ5PFVzZXJUeXBlTW9kZWw+ID0ge1xuICAgICAgLi4uc2VhcmNoRmlsdGVyXG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlci5maW5kKGZpbHRlcilcbiAgICAgIC5za2lwKHBhcnNlSW50KG9mZnNldD8udG9TdHJpbmcoKSA/PyAnMCcpKVxuICAgICAgLmxpbWl0KHBhcnNlSW50KGxpbWl0Py50b1N0cmluZygpID8/ICcwJykpO1xuXG4gICAgY29uc3QgdG90YWwgPSBhd2FpdCBVc2VyLmZpbmQoZmlsdGVyKS5jb3VudCgpO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkVXNlcnMgPSB1c2Vycy5tYXAoKHVzZXIpID0+IHVzZXJTZXJpYWxpemVyKHVzZXIpKTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBkYXRhOiBmb3JtYXR0ZWRVc2VycyxcbiAgICAgIHRvdGFsXG4gICAgfSBhcyBDTVNMaXN0PFVzZXJSZXNwb25zZVtdPik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBnZXRVc2VyLCBnZXRTZWxmVXNlciwgdXBkYXRlVXNlciwgdXBkYXRlU2VsZlVzZXIsIGRlbGV0ZVVzZXIsIGdldEFsbFVzZXIgfTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FB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