"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _moment = _interopRequireDefault(require("moment"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _user = _interopRequireDefault(require("../../models/user"));
var _email = require("../../utils/email");
var _token = require("../../utils/token");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var refreshTokens = [];
var signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, displayName, email, username, password, birthday, findUserByEmail, findUserByUsername, hashedPassword, _id, user, savedUser, expiredDate, token, _refreshToken;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, displayName = _req$body.displayName, email = _req$body.email, username = _req$body.username, password = _req$body.password, birthday = _req$body.birthday;
          _context.next = 4;
          return _user["default"].find({
            email: email
          });
        case 4:
          findUserByEmail = _context.sent;
          _context.next = 7;
          return _user["default"].find({
            username: username
          });
        case 7:
          findUserByUsername = _context.sent;
          if (!(findUserByEmail.length > 0)) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(500).json({
            message: 'error.auth.email_already_existed'
          }));
        case 10:
          if (!(findUserByUsername.length > 0)) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(500).json({
            message: 'error.auth.username_already_existed'
          }));
        case 12:
          _context.next = 14;
          return _bcrypt["default"].hash(password, 10);
        case 14:
          hashedPassword = _context.sent;
          _id = new _mongoose["default"].Types.ObjectId();
          user = new _user["default"]({
            _id: _id,
            displayName: displayName,
            email: email,
            username: username,
            password: hashedPassword,
            birthday: birthday,
            info: undefined,
            cart: []
          });
          _context.next = 19;
          return user.save();
        case 19:
          savedUser = _context.sent;
          if (!savedUser) {
            _context.next = 28;
            break;
          }
          expiredDate = (0, _moment["default"])().add(7, 'days').format();
          token = (0, _token.tokenGen)({
            _id: _id.toString(),
            role: savedUser.role
          }, 7);
          _refreshToken = (0, _token.tokenGen)({
            _id: _id.toString()
          }, 30);
          refreshTokens.push(_refreshToken);
          return _context.abrupt("return", res.status(201).json({
            accessToken: token,
            expiredDate: expiredDate,
            refreshToken: _refreshToken
          }));
        case 28:
          return _context.abrupt("return", res.status(500).json({
            message: 'error.auth.user_already_existed'
          }));
        case 29:
          _context.next = 34;
          break;
        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: _context.t0
          }));
        case 34:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 31]]);
  }));
  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, email, username, password, findUser, user, compare, expiredDate, token, _refreshToken2;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, username = _req$body2.username, password = _req$body2.password;
          if (!username) {
            _context2.next = 8;
            break;
          }
          _context2.next = 5;
          return _user["default"].find({
            username: username
          });
        case 5:
          _context2.t0 = _context2.sent;
          _context2.next = 11;
          break;
        case 8:
          _context2.next = 10;
          return _user["default"].find({
            email: email
          });
        case 10:
          _context2.t0 = _context2.sent;
        case 11:
          findUser = _context2.t0;
          if (!(findUser.length > 0)) {
            _context2.next = 28;
            break;
          }
          user = findUser[0];
          _context2.next = 16;
          return _bcrypt["default"].compare(password, user.password);
        case 16:
          compare = _context2.sent;
          if (!compare) {
            _context2.next = 25;
            break;
          }
          expiredDate = (0, _moment["default"])().add(7, 'days').format();
          token = (0, _token.tokenGen)({
            _id: user._id.toString(),
            role: user.role
          }, 7);
          _refreshToken2 = (0, _token.tokenGen)({
            _id: user._id.toString()
          }, 30);
          refreshTokens.push(_refreshToken2);
          return _context2.abrupt("return", res.status(200).json({
            accessToken: token,
            expiredDate: expiredDate,
            refreshToken: _refreshToken2
          }));
        case 25:
          return _context2.abrupt("return", res.status(500).json({
            message: 'error.auth.incorrect_password'
          }));
        case 26:
          _context2.next = 29;
          break;
        case 28:
          return _context2.abrupt("return", res.status(500).json({
            message: 'error.auth.invalid_email_username'
          }));
        case 29:
          _context2.next = 34;
          break;
        case 31:
          _context2.prev = 31;
          _context2.t1 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: _context2.t1
          }));
        case 34:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 31]]);
  }));
  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var logout = function logout(req, res) {
  try {
    var _refreshToken3 = req.body.refreshToken;
    if (_refreshToken3) refreshTokens = refreshTokens.filter(function (token) {
      return token !== _refreshToken3;
    });
    return res.status(200).json({
      success: true
    });
  } catch (err) {
    return res.status(500).json({
      message: err
    });
  }
};
var changePassword = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _id, _req$body3, password, newPassword, user, compare, hashedPassword, updatedUser, expiredDate, token, _refreshToken4;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _id = (0, _token.getIdFromReq)(req);
          _req$body3 = req.body, password = _req$body3.password, newPassword = _req$body3.newPassword;
          _context3.next = 5;
          return _user["default"].findById(_id);
        case 5:
          user = _context3.sent;
          if (!user) {
            _context3.next = 29;
            break;
          }
          _context3.next = 9;
          return _bcrypt["default"].compare(password, user.password);
        case 9:
          compare = _context3.sent;
          if (!compare) {
            _context3.next = 28;
            break;
          }
          _context3.next = 13;
          return _bcrypt["default"].hash(newPassword, 10);
        case 13:
          hashedPassword = _context3.sent;
          _context3.next = 16;
          return _user["default"].findOneAndUpdate({
            _id: _id
          }, {
            $set: {
              password: hashedPassword
            }
          }, {
            "new": true
          });
        case 16:
          updatedUser = _context3.sent;
          if (!updatedUser) {
            _context3.next = 25;
            break;
          }
          expiredDate = (0, _moment["default"])().add(7, 'days').format();
          token = (0, _token.tokenGen)({
            _id: user._id.toString(),
            role: user.role
          }, 7);
          _refreshToken4 = (0, _token.tokenGen)({
            _id: user._id.toString()
          }, 30);
          refreshTokens.push(_refreshToken4);
          return _context3.abrupt("return", res.status(200).json({
            accessToken: token,
            expiredDate: expiredDate,
            refreshToken: _refreshToken4
          }));
        case 25:
          res.status(500).json({
            message: 'error.user.failed_to_change_password'
          });
        case 26:
          _context3.next = 29;
          break;
        case 28:
          return _context3.abrupt("return", res.status(500).json({
            message: 'error.auth.incorrect_password'
          }));
        case 29:
          return _context3.abrupt("return", res.status(500).json({
            message: 'error.user.not_found'
          }));
        case 32:
          _context3.prev = 32;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: _context3.t0
          }));
        case 35:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 32]]);
  }));
  return function changePassword(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var forgotPassword = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var email, user, code, token;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          email = req.body.email;
          _context4.next = 4;
          return _user["default"].find({
            email: email
          });
        case 4:
          user = _context4.sent;
          if (!(user.length < 1)) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(500).json({
            message: 'error.user.not_found'
          }));
        case 7:
          code = (0, _token.generateCode)();
          token = (0, _token.resetPasswordTokenGen)(email, code);
          _context4.next = 11;
          return (0, _email.sendResetPasswordEmail)(email, token);
        case 11:
          return _context4.abrupt("return", res.status(200).json({
            success: true
          }));
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: _context4.t0
          }));
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return function forgotPassword(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var resetPassword = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body4, token, password, _parseJwt, email, hashedPassword, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body4 = req.body, token = _req$body4.token, password = _req$body4.password;
          if (token) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            message: 'error.auth.access_denied'
          }));
        case 4:
          _jsonwebtoken["default"].verify(token, process.env.JWT_KEY || '');
          _parseJwt = (0, _token.parseJwt)(token), email = _parseJwt.email;
          _context5.next = 8;
          return _bcrypt["default"].hash(password, 10);
        case 8:
          hashedPassword = _context5.sent;
          _context5.next = 11;
          return _user["default"].findOneAndUpdate({
            email: email
          }, {
            $set: {
              password: hashedPassword
            }
          }, {
            "new": true
          });
        case 11:
          user = _context5.sent;
          if (user) {
            _context5.next = 14;
            break;
          }
          return _context5.abrupt("return", res.status(500).json({
            message: 'error.auth.failed_to_reset_password'
          }));
        case 14:
          return _context5.abrupt("return", res.status(200).json({
            success: true
          }));
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(401).json({
            message: 'error.auth.invalid_token'
          }));
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 17]]);
  }));
  return function resetPassword(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var refreshToken = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _refreshToken5, _parseJwt2, _id, user, expiredDate, token;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _refreshToken5 = req.body.refreshToken;
          if (!(_refreshToken5 && refreshTokens.findIndex(function (token) {
            return token === _refreshToken5;
          }) > -1)) {
            _context6.next = 16;
            break;
          }
          _jsonwebtoken["default"].verify(_refreshToken5, process.env.JWT_KEY || '');
          _parseJwt2 = (0, _token.parseJwt)(_refreshToken5), _id = _parseJwt2._id;
          _context6.next = 7;
          return _user["default"].findById(_id);
        case 7:
          user = _context6.sent;
          if (user) {
            _context6.next = 10;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: 'error.user.not_found'
          }));
        case 10:
          expiredDate = (0, _moment["default"])().add(7, 'days').format();
          token = (0, _token.tokenGen)({
            _id: user._id.toString(),
            role: user.role
          }, 7);
          refreshTokens = refreshTokens.filter(function (token) {
            return token !== _refreshToken5;
          });
          return _context6.abrupt("return", res.status(200).json({
            accessToken: token,
            expiredDate: expiredDate
          }));
        case 16:
          return _context6.abrupt("return", res.status(500).json({
            message: 'error.auth.invalid_refresh_token'
          }));
        case 17:
          _context6.next = 22;
          break;
        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            message: _context6.t0
          }));
        case 22:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 19]]);
  }));
  return function refreshToken(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var _default = {
  login: login,
  logout: logout,
  signup: signup,
  refreshToken: refreshToken,
  changePassword: changePassword,
  forgotPassword: forgotPassword,
  resetPassword: resetPassword
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmNyeXB0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfanNvbndlYnRva2VuIiwiX21vbWVudCIsIl9tb25nb29zZSIsIl91c2VyIiwiX2VtYWlsIiwiX3Rva2VuIiwib2JqIiwiX19lc01vZHVsZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsInJlZnJlc2hUb2tlbnMiLCJzaWdudXAiLCJfcmVmIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIl9yZXEkYm9keSIsImVtYWlsIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJpcnRoZGF5IiwiZmluZFVzZXJCeUVtYWlsIiwiZmluZFVzZXJCeVVzZXJuYW1lIiwiaGFzaGVkUGFzc3dvcmQiLCJfaWQiLCJ1c2VyIiwic2F2ZWRVc2VyIiwiZXhwaXJlZERhdGUiLCJ0b2tlbiIsIl9yZWZyZXNoVG9rZW4iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYm9keSIsIlVzZXIiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJiY3J5cHQiLCJoYXNoIiwibW9uZ29vc2UiLCJUeXBlcyIsIk9iamVjdElkIiwiY2FydCIsInNhdmUiLCJtb21lbnQiLCJhZGQiLCJmb3JtYXQiLCJ0b2tlbkdlbiIsInRvU3RyaW5nIiwicm9sZSIsInJlZnJlc2hUb2tlbiIsImFjY2Vzc1Rva2VuIiwidDAiLCJfeCIsIl94MiIsImxvZ2luIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9yZXEkYm9keTIiLCJmaW5kVXNlciIsImNvbXBhcmUiLCJfcmVmcmVzaFRva2VuMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInQxIiwiX3gzIiwiX3g0IiwibG9nb3V0IiwiZmlsdGVyIiwic3VjY2VzcyIsImNoYW5nZVBhc3N3b3JkIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkYm9keTMiLCJuZXdQYXNzd29yZCIsInVwZGF0ZWRVc2VyIiwiX3JlZnJlc2hUb2tlbjQiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJnZXRJZEZyb21SZXEiLCJmaW5kQnlJZCIsImZpbmRPbmVBbmRVcGRhdGUiLCIkc2V0IiwiX3g1IiwiX3g2IiwiZm9yZ290UGFzc3dvcmQiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29kZSIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImdlbmVyYXRlQ29kZSIsInJlc2V0UGFzc3dvcmRUb2tlbkdlbiIsInNlbmRSZXNldFBhc3N3b3JkRW1haWwiLCJfeDciLCJfeDgiLCJyZXNldFBhc3N3b3JkIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9yZXEkYm9keTQiLCJfcGFyc2VKd3QiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJqd3QiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsInBhcnNlSnd0IiwiX3g5IiwiX3gxMCIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfcmVmcmVzaFRva2VuNSIsIl9wYXJzZUp3dDIiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJmaW5kSW5kZXgiLCJfeDExIiwiX3gxMiIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvQXV0aC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7XG4gIENoYW5nZVBhc3N3b3JkUmVxdWVzdCxcbiAgRm9yZ290UGFzc3dvcmRSZXF1ZXN0LFxuICBMb2dpblJlcXVlc3QsXG4gIExvZ291dFJlcXVlc3QsXG4gIFJlZnJlc2hUb2tlblJlcXVlc3QsXG4gIFJlc2V0UGFzc3dvcmRSZXF1ZXN0XG59IGZyb20gJ3NyYy9tb2RlbHMvYXBpL2F1dGgnO1xuaW1wb3J0IFVzZXIsIHsgVXNlclR5cGUgfSBmcm9tICdzcmMvbW9kZWxzL3VzZXInO1xuaW1wb3J0IHsgc2VuZFJlc2V0UGFzc3dvcmRFbWFpbCB9IGZyb20gJ3NyYy91dGlscy9lbWFpbCc7XG5pbXBvcnQge1xuICBnZW5lcmF0ZUNvZGUsXG4gIGdldElkRnJvbVJlcSxcbiAgcGFyc2VKd3QsXG4gIHJlc2V0UGFzc3dvcmRUb2tlbkdlbixcbiAgdG9rZW5HZW5cbn0gZnJvbSAnc3JjL3V0aWxzL3Rva2VuJztcblxubGV0IHJlZnJlc2hUb2tlbnM6IHN0cmluZ1tdID0gW107XG5cbmNvbnN0IHNpZ251cCA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRpc3BsYXlOYW1lLCBlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkLCBiaXJ0aGRheSB9OiBVc2VyVHlwZSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IGZpbmRVc2VyQnlFbWFpbCA9IGF3YWl0IFVzZXIuZmluZCh7IGVtYWlsIH0pO1xuICAgIGNvbnN0IGZpbmRVc2VyQnlVc2VybmFtZSA9IGF3YWl0IFVzZXIuZmluZCh7IHVzZXJuYW1lIH0pO1xuICAgIGlmIChmaW5kVXNlckJ5RW1haWwubGVuZ3RoID4gMClcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci5hdXRoLmVtYWlsX2FscmVhZHlfZXhpc3RlZCcgfSk7XG4gICAgaWYgKGZpbmRVc2VyQnlVc2VybmFtZS5sZW5ndGggPiAwKVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLmF1dGgudXNlcm5hbWVfYWxyZWFkeV9leGlzdGVkJyB9KTtcblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICBjb25zdCBfaWQgPSBuZXcgbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQoKTtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoe1xuICAgICAgX2lkLFxuICAgICAgZGlzcGxheU5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgYmlydGhkYXksXG4gICAgICBpbmZvOiB1bmRlZmluZWQsXG4gICAgICBjYXJ0OiBbXVxuICAgIH0pO1xuICAgIGNvbnN0IHNhdmVkVXNlciA9IGF3YWl0IHVzZXIuc2F2ZSgpO1xuICAgIGlmIChzYXZlZFVzZXIpIHtcbiAgICAgIGNvbnN0IGV4cGlyZWREYXRlID0gbW9tZW50KCkuYWRkKDcsICdkYXlzJykuZm9ybWF0KCk7XG4gICAgICBjb25zdCB0b2tlbiA9IHRva2VuR2VuKHsgX2lkOiBfaWQudG9TdHJpbmcoKSwgcm9sZTogc2F2ZWRVc2VyLnJvbGUgfSwgNyk7XG4gICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSB0b2tlbkdlbih7IF9pZDogX2lkLnRvU3RyaW5nKCkgfSwgMzApO1xuICAgICAgcmVmcmVzaFRva2Vucy5wdXNoKHJlZnJlc2hUb2tlbik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oeyBhY2Nlc3NUb2tlbjogdG9rZW4sIGV4cGlyZWREYXRlLCByZWZyZXNoVG9rZW4gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci5hdXRoLnVzZXJfYWxyZWFkeV9leGlzdGVkJyB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgbG9naW4gPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luUmVxdWVzdCA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IGZpbmRVc2VyID0gdXNlcm5hbWUgPyBhd2FpdCBVc2VyLmZpbmQoeyB1c2VybmFtZSB9KSA6IGF3YWl0IFVzZXIuZmluZCh7IGVtYWlsIH0pO1xuICAgIGlmIChmaW5kVXNlci5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB1c2VyID0gZmluZFVzZXJbMF07XG4gICAgICBjb25zdCBjb21wYXJlID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgY29uc3QgZXhwaXJlZERhdGUgPSBtb21lbnQoKS5hZGQoNywgJ2RheXMnKS5mb3JtYXQoKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbkdlbih7IF9pZDogdXNlci5faWQudG9TdHJpbmcoKSwgcm9sZTogdXNlci5yb2xlIH0sIDcpO1xuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSB0b2tlbkdlbih7IF9pZDogdXNlci5faWQudG9TdHJpbmcoKSB9LCAzMCk7XG4gICAgICAgIHJlZnJlc2hUb2tlbnMucHVzaChyZWZyZXNoVG9rZW4pO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBhY2Nlc3NUb2tlbjogdG9rZW4sIGV4cGlyZWREYXRlLCByZWZyZXNoVG9rZW4gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IuYXV0aC5pbmNvcnJlY3RfcGFzc3dvcmQnIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IuYXV0aC5pbnZhbGlkX2VtYWlsX3VzZXJuYW1lJyB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgbG9nb3V0ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcmVmcmVzaFRva2VuIH06IExvZ291dFJlcXVlc3QgPSByZXEuYm9keTtcbiAgICBpZiAocmVmcmVzaFRva2VuKSByZWZyZXNoVG9rZW5zID0gcmVmcmVzaFRva2Vucy5maWx0ZXIoKHRva2VuKSA9PiB0b2tlbiAhPT0gcmVmcmVzaFRva2VuKTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgY2hhbmdlUGFzc3dvcmQgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgX2lkID0gZ2V0SWRGcm9tUmVxKHJlcSk7XG4gICAgY29uc3QgeyBwYXNzd29yZCwgbmV3UGFzc3dvcmQgfTogQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoX2lkKTtcbiAgICBpZiAodXNlcikge1xuICAgICAgY29uc3QgY29tcGFyZSA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgeyBfaWQgfSxcbiAgICAgICAgICB7ICRzZXQ6IHsgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkIH0gfSxcbiAgICAgICAgICB7IG5ldzogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICh1cGRhdGVkVXNlcikge1xuICAgICAgICAgIGNvbnN0IGV4cGlyZWREYXRlID0gbW9tZW50KCkuYWRkKDcsICdkYXlzJykuZm9ybWF0KCk7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbkdlbih7IF9pZDogdXNlci5faWQudG9TdHJpbmcoKSwgcm9sZTogdXNlci5yb2xlIH0sIDcpO1xuICAgICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHRva2VuR2VuKHsgX2lkOiB1c2VyLl9pZC50b1N0cmluZygpIH0sIDMwKTtcbiAgICAgICAgICByZWZyZXNoVG9rZW5zLnB1c2gocmVmcmVzaFRva2VuKTtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgYWNjZXNzVG9rZW46IHRva2VuLFxuICAgICAgICAgICAgZXhwaXJlZERhdGUsXG4gICAgICAgICAgICByZWZyZXNoVG9rZW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnVzZXIuZmFpbGVkX3RvX2NoYW5nZV9wYXNzd29yZCcgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IuYXV0aC5pbmNvcnJlY3RfcGFzc3dvcmQnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IudXNlci5ub3RfZm91bmQnIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGZvcmdvdFBhc3N3b3JkID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZW1haWwgfTogRm9yZ290UGFzc3dvcmRSZXF1ZXN0ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZCh7IGVtYWlsIH0pO1xuICAgIGlmICh1c2VyLmxlbmd0aCA8IDEpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci51c2VyLm5vdF9mb3VuZCcgfSk7XG4gICAgY29uc3QgY29kZSA9IGdlbmVyYXRlQ29kZSgpO1xuICAgIGNvbnN0IHRva2VuID0gcmVzZXRQYXNzd29yZFRva2VuR2VuKGVtYWlsLCBjb2RlKTtcbiAgICBhd2FpdCBzZW5kUmVzZXRQYXNzd29yZEVtYWlsKGVtYWlsLCB0b2tlbik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCByZXNldFBhc3N3b3JkID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdG9rZW4sIHBhc3N3b3JkIH06IFJlc2V0UGFzc3dvcmRSZXF1ZXN0ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IuYXV0aC5hY2Nlc3NfZGVuaWVkJyB9KTtcblxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9LRVkgfHwgJycpO1xuXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gcGFyc2VKd3QodG9rZW4pO1xuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgeyBlbWFpbCB9LFxuICAgICAge1xuICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IG5ldzogdHJ1ZSB9XG4gICAgKTtcbiAgICBpZiAoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci5hdXRoLmZhaWxlZF90b19yZXNldF9wYXNzd29yZCcgfSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLmF1dGguaW52YWxpZF90b2tlbicgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlZnJlc2hUb2tlbiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHJlZnJlc2hUb2tlbiB9OiBSZWZyZXNoVG9rZW5SZXF1ZXN0ID0gcmVxLmJvZHk7XG4gICAgaWYgKHJlZnJlc2hUb2tlbiAmJiByZWZyZXNoVG9rZW5zLmZpbmRJbmRleCgodG9rZW4pID0+IHRva2VuID09PSByZWZyZXNoVG9rZW4pID4gLTEpIHtcbiAgICAgIGp3dC52ZXJpZnkocmVmcmVzaFRva2VuLCBwcm9jZXNzLmVudi5KV1RfS0VZIHx8ICcnKTtcbiAgICAgIGNvbnN0IHsgX2lkIH0gPSBwYXJzZUp3dChyZWZyZXNoVG9rZW4pO1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoX2lkKTtcbiAgICAgIGlmICghdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnVzZXIubm90X2ZvdW5kJyB9KTtcblxuICAgICAgY29uc3QgZXhwaXJlZERhdGUgPSBtb21lbnQoKS5hZGQoNywgJ2RheXMnKS5mb3JtYXQoKTtcbiAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5HZW4oeyBfaWQ6IHVzZXIuX2lkLnRvU3RyaW5nKCksIHJvbGU6IHVzZXIucm9sZSB9LCA3KTtcbiAgICAgIHJlZnJlc2hUb2tlbnMgPSByZWZyZXNoVG9rZW5zLmZpbHRlcigodG9rZW4pID0+IHRva2VuICE9PSByZWZyZXNoVG9rZW4pO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBhY2Nlc3NUb2tlbjogdG9rZW4sIGV4cGlyZWREYXRlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IuYXV0aC5pbnZhbGlkX3JlZnJlc2hfdG9rZW4nIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2luLFxuICBsb2dvdXQsXG4gIHNpZ251cCxcbiAgcmVmcmVzaFRva2VuLFxuICBjaGFuZ2VQYXNzd29yZCxcbiAgZm9yZ290UGFzc3dvcmQsXG4gIHJlc2V0UGFzc3dvcmRcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBQyxhQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRyxTQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFTQSxJQUFBSSxLQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSyxNQUFBLEdBQUFMLE9BQUE7QUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7QUFNeUIsU0FBQUQsdUJBQUFRLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLG9CQUFBLGtCQXBCekIscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUks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