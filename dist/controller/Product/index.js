"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _product = _interopRequireWildcard(require("../../models/product"));
var _purchase = _interopRequireDefault(require("../../models/purchase"));
var _user = _interopRequireDefault(require("../../models/user"));
var _serializers = require("../../serializers");
var _token = require("../../utils/token");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getAllProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _offset$toString, _limit$toString, _req$query, offset, limit, title, category, brand, color, price, sort, titleFilter, categoryFilter, brandFilter, colorFilter, priceFilter, filter, sortBy, products, formattedProducts;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$query = req.query, offset = _req$query.offset, limit = _req$query.limit, title = _req$query.title, category = _req$query.category, brand = _req$query.brand, color = _req$query.color, price = _req$query.price, sort = _req$query.sort;
          titleFilter = title ? {
            $text: {
              $search: title.toString()
            }
          } : {};
          categoryFilter = category ? {
            category: category.toString()
          } : {};
          brandFilter = brand ? {
            brand: brand.toString()
          } : {};
          colorFilter = color ? {
            colors: {
              $in: [color.toString()]
            }
          } : {};
          priceFilter = price ? {
            price: {
              $lte: parseFloat(price.toString())
            }
          } : {};
          filter = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, titleFilter), categoryFilter), brandFilter), colorFilter), priceFilter);
          sortBy = {};
          _context.t0 = sort === null || sort === void 0 ? void 0 : sort.toString();
          _context.next = _context.t0 === _product.ProductSort.price_des ? 12 : _context.t0 === _product.ProductSort.price_asc ? 14 : _context.t0 === _product.ProductSort.name_des ? 16 : _context.t0 === _product.ProductSort.name_asc ? 18 : 20;
          break;
        case 12:
          sortBy = {
            price: -1,
            title: 1
          };
          return _context.abrupt("break", 22);
        case 14:
          sortBy = {
            price: 1,
            title: 1
          };
          return _context.abrupt("break", 22);
        case 16:
          sortBy = {
            title: -1
          };
          return _context.abrupt("break", 22);
        case 18:
          sortBy = {
            title: 1
          };
          return _context.abrupt("break", 22);
        case 20:
          sortBy = {};
          return _context.abrupt("break", 22);
        case 22:
          _context.next = 24;
          return _product["default"].find(filter).sort(sortBy).skip(parseInt((_offset$toString = offset === null || offset === void 0 ? void 0 : offset.toString()) !== null && _offset$toString !== void 0 ? _offset$toString : '0')).limit(parseInt((_limit$toString = limit === null || limit === void 0 ? void 0 : limit.toString()) !== null && _limit$toString !== void 0 ? _limit$toString : '0'));
        case 24:
          products = _context.sent;
          formattedProducts = products.map(function (product) {
            return (0, _serializers.productSerializer)(product);
          });
          return _context.abrupt("return", res.status(200).json(formattedProducts));
        case 29:
          _context.prev = 29;
          _context.t1 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: _context.t1
          }));
        case 32:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 29]]);
  }));
  return function getAllProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getFeaturedProducts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _limit$toString2, limit, featuredProducts, formattedProducts;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          limit = req.query.limit;
          _context2.next = 4;
          return _product["default"].find().sort({
            'rating.rate': 'desc',
            'rating.num_of_rate': 'desc',
            price: 'desc'
          }).limit(parseInt((_limit$toString2 = limit === null || limit === void 0 ? void 0 : limit.toString()) !== null && _limit$toString2 !== void 0 ? _limit$toString2 : '3'));
        case 4:
          featuredProducts = _context2.sent;
          formattedProducts = featuredProducts.map(function (product) {
            return (0, _serializers.productSerializer)(product);
          });
          return _context2.abrupt("return", res.status(200).json(formattedProducts));
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: _context2.t0
          }));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function getFeaturedProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _id, product;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _id = req.params.id;
          _context3.next = 4;
          return _product["default"].findById(_id);
        case 4:
          product = _context3.sent;
          if (!product) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return", res.status(200).json((0, _serializers.productSerializer)(product)));
        case 9:
          return _context3.abrupt("return", res.status(404).json({
            message: 'error.product.not_found'
          }));
        case 10:
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: _context3.t0
          }));
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function getProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var createProduct = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, img, gallery, title, description, category, brand, price, sku, storage_quantity, colors, _id, product, savedProduct;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body = req.body, img = _req$body.img, gallery = _req$body.gallery, title = _req$body.title, description = _req$body.description, category = _req$body.category, brand = _req$body.brand, price = _req$body.price, sku = _req$body.sku, storage_quantity = _req$body.storage_quantity, colors = _req$body.colors;
          _id = new _mongoose["default"].Types.ObjectId();
          product = new _product["default"]({
            _id: _id,
            img: img,
            gallery: gallery,
            title: title,
            description: description,
            category: category,
            brand: brand,
            price: price,
            sku: sku,
            storage_quantity: storage_quantity,
            colors: colors
          });
          _context4.next = 6;
          return product.save();
        case 6:
          savedProduct = _context4.sent;
          if (!savedProduct) {
            _context4.next = 11;
            break;
          }
          return _context4.abrupt("return", res.status(201).json((0, _serializers.productSerializer)(savedProduct)));
        case 11:
          return _context4.abrupt("return", res.status(500).json({
            message: 'error.product.failed_to_create'
          }));
        case 12:
          _context4.next = 17;
          break;
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
  return function createProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _id, _req$body2, img, gallery, title, description, category, brand, price, sku, storage_quantity, colors, updatedProduct;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _id = req.params.id;
          _req$body2 = req.body, img = _req$body2.img, gallery = _req$body2.gallery, title = _req$body2.title, description = _req$body2.description, category = _req$body2.category, brand = _req$body2.brand, price = _req$body2.price, sku = _req$body2.sku, storage_quantity = _req$body2.storage_quantity, colors = _req$body2.colors;
          _context5.next = 5;
          return _product["default"].findOneAndUpdate({
            _id: _id
          }, {
            $set: {
              img: img,
              gallery: gallery,
              title: title,
              description: description,
              category: category,
              brand: brand,
              price: price,
              sku: sku,
              storage_quantity: storage_quantity,
              colors: colors
            }
          }, {
            "new": true
          });
        case 5:
          updatedProduct = _context5.sent;
          if (updatedProduct) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'error.product.failed_to_update'
          }));
        case 8:
          return _context5.abrupt("return", res.status(200).json((0, _serializers.productSerializer)(updatedProduct)));
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            message: _context5.t0
          }));
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function updateProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteProduct = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _id;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _id = req.params.id;
          _context6.next = 4;
          return _product["default"].deleteOne({
            _id: _id
          });
        case 4:
          return _context6.abrupt("return", res.status(200).json({
            success: true
          }));
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            message: _context6.t0
          }));
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function deleteProduct(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var ratingProduct = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _id, product_id, _req$body3, rate, purchase_id, color, user, purchase, productIndex, product, _product$rating, _product$rating2, newRating, updatedProduct;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _id = (0, _token.getIdFromReq)(req);
          product_id = req.params.id;
          _req$body3 = req.body, rate = _req$body3.rate, purchase_id = _req$body3.purchase_id, color = _req$body3.color;
          _context7.next = 6;
          return _user["default"].findById(_id);
        case 6:
          user = _context7.sent;
          _context7.next = 9;
          return _purchase["default"].findById(purchase_id);
        case 9:
          purchase = _context7.sent;
          if (!(purchase && user)) {
            _context7.next = 35;
            break;
          }
          productIndex = purchase.products.findIndex(function (item) {
            return item.product_id === product_id && item.color === color;
          });
          if (!(productIndex > -1)) {
            _context7.next = 32;
            break;
          }
          purchase.products[productIndex].rating = rate;
          _context7.next = 16;
          return purchase.save();
        case 16:
          _context7.next = 18;
          return _product["default"].findById(product_id);
        case 18:
          product = _context7.sent;
          if (!product) {
            _context7.next = 29;
            break;
          }
          newRating = {
            rate: (_product$rating = product.rating) !== null && _product$rating !== void 0 && _product$rating.rate ? (product.rating.rate * product.rating.num_of_rate + rate) / (product.rating.num_of_rate + 1) : rate,
            num_of_rate: (_product$rating2 = product.rating) !== null && _product$rating2 !== void 0 && _product$rating2.num_of_rate ? product.rating.num_of_rate + 1 : 1
          };
          _context7.next = 23;
          return _product["default"].findOneAndUpdate({
            _id: product_id
          }, {
            $addToSet: {
              review: {
                user_id: user._id,
                name: user.username,
                email: user.email,
                phone: user.info.phone
              }
            },
            $set: {
              rating: newRating
            }
          }, {
            "new": true
          });
        case 23:
          updatedProduct = _context7.sent;
          if (updatedProduct) {
            _context7.next = 26;
            break;
          }
          return _context7.abrupt("return", res.status(500).json({
            message: 'error.product.failed_to_rating'
          }));
        case 26:
          return _context7.abrupt("return", res.status(200).json({
            success: true
          }));
        case 29:
          return _context7.abrupt("return", res.status(500).json({
            message: 'error.product.failed_to_rating'
          }));
        case 30:
          _context7.next = 33;
          break;
        case 32:
          return _context7.abrupt("return", res.status(500).json({
            message: 'error.product.not_found'
          }));
        case 33:
          _context7.next = 36;
          break;
        case 35:
          return _context7.abrupt("return", res.status(500).json({
            message: 'error.purchase.not_found'
          }));
        case 36:
          _context7.next = 41;
          break;
        case 38:
          _context7.prev = 38;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).json({
            message: _context7.t0
          }));
        case 41:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 38]]);
  }));
  return function ratingProduct(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getCmsAllProducts = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _offset$toString2, _limit$toString3, _req$query2, offset, limit, search, searchFilter, filter, products, total, formattedProducts;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$query2 = req.query, offset = _req$query2.offset, limit = _req$query2.limit, search = _req$query2.search;
          searchFilter = search ? {
            $text: {
              $search: search.toString()
            }
          } : {};
          filter = _objectSpread({}, searchFilter);
          _context8.next = 6;
          return _product["default"].find(filter).skip(parseInt((_offset$toString2 = offset === null || offset === void 0 ? void 0 : offset.toString()) !== null && _offset$toString2 !== void 0 ? _offset$toString2 : '0')).limit(parseInt((_limit$toString3 = limit === null || limit === void 0 ? void 0 : limit.toString()) !== null && _limit$toString3 !== void 0 ? _limit$toString3 : '0'));
        case 6:
          products = _context8.sent;
          _context8.next = 9;
          return _product["default"].find(filter).count();
        case 9:
          total = _context8.sent;
          formattedProducts = products.map(function (product) {
            return (0, _serializers.productSerializer)(product);
          });
          return _context8.abrupt("return", res.status(200).json({
            data: formattedProducts,
            total: total
          }));
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(500).json({
            message: _context8.t0
          }));
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 14]]);
  }));
  return function getCmsAllProducts(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var _default = {
  getFeaturedProducts: getFeaturedProducts,
  getAllProducts: getAllProducts,
  getProduct: getProduct,
  createProduct: createProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  ratingProduct: ratingProduct,
  getCmsAllProducts: getCmsAllProducts
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9wcm9kdWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfcHVyY2hhc2UiLCJfdXNlciIsIl9zZXJpYWxpemVycyIsIl90b2tlbiIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiaGFzT3duIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwib3duS2V5cyIsImVudW1lcmFibGVPbmx5IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImFyZ3VtZW50cyIsInNvdXJjZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImdldEFsbFByb2R1Y3RzIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJfb2Zmc2V0JHRvU3RyaW5nIiwiX2xpbWl0JHRvU3RyaW5nIiwiX3JlcSRxdWVyeSIsIm9mZnNldCIsImxpbWl0IiwidGl0bGUiLCJjYXRlZ29yeSIsImJyYW5kIiwiY29sb3IiLCJwcmljZSIsInNvcnQiLCJ0aXRsZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwiYnJhbmRGaWx0ZXIiLCJjb2xvckZpbHRlciIsInByaWNlRmlsdGVyIiwic29ydEJ5IiwicHJvZHVjdHMiLCJmb3JtYXR0ZWRQcm9kdWN0cyIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJxdWVyeSIsIiR0ZXh0IiwiJHNlYXJjaCIsInRvU3RyaW5nIiwiY29sb3JzIiwiJGluIiwiJGx0ZSIsInBhcnNlRmxvYXQiLCJ0MCIsIlByb2R1Y3RTb3J0IiwicHJpY2VfZGVzIiwicHJpY2VfYXNjIiwibmFtZV9kZXMiLCJuYW1lX2FzYyIsIlByb2R1Y3QiLCJmaW5kIiwic2tpcCIsInBhcnNlSW50IiwibWFwIiwicHJvZHVjdCIsInByb2R1Y3RTZXJpYWxpemVyIiwic3RhdHVzIiwianNvbiIsInQxIiwibWVzc2FnZSIsIl94IiwiX3gyIiwiZ2V0RmVhdHVyZWRQcm9kdWN0cyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfbGltaXQkdG9TdHJpbmcyIiwiZmVhdHVyZWRQcm9kdWN0cyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94MyIsIl94NCIsImdldFByb2R1Y3QiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2lkIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwicGFyYW1zIiwiaWQiLCJmaW5kQnlJZCIsIl94NSIsIl94NiIsImNyZWF0ZVByb2R1Y3QiLCJfcmVmNCIsIl9jYWxsZWU0IiwiX3JlcSRib2R5IiwiaW1nIiwiZ2FsbGVyeSIsImRlc2NyaXB0aW9uIiwic2t1Iiwic3RvcmFnZV9xdWFudGl0eSIsInNhdmVkUHJvZHVjdCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImJvZHkiLCJtb25nb29zZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJzYXZlIiwiX3g3IiwiX3g4IiwidXBkYXRlUHJvZHVjdCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfcmVxJGJvZHkyIiwidXBkYXRlZFByb2R1Y3QiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJmaW5kT25lQW5kVXBkYXRlIiwiJHNldCIsIl94OSIsIl94MTAiLCJkZWxldGVQcm9kdWN0IiwiX3JlZjYiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsImRlbGV0ZU9uZSIsInN1Y2Nlc3MiLCJfeDExIiwiX3gxMiIsInJhdGluZ1Byb2R1Y3QiLCJfcmVmNyIsIl9jYWxsZWU3IiwicHJvZHVjdF9pZCIsIl9yZXEkYm9keTMiLCJyYXRlIiwicHVyY2hhc2VfaWQiLCJ1c2VyIiwicHVyY2hhc2UiLCJwcm9kdWN0SW5kZXgiLCJfcHJvZHVjdCRyYXRpbmciLCJfcHJvZHVjdCRyYXRpbmcyIiwibmV3UmF0aW5nIiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiZ2V0SWRGcm9tUmVxIiwiVXNlciIsIlB1cmNoYXNlIiwiZmluZEluZGV4IiwiaXRlbSIsInJhdGluZyIsIm51bV9vZl9yYXRlIiwiJGFkZFRvU2V0IiwicmV2aWV3IiwidXNlcl9pZCIsInVzZXJuYW1lIiwiZW1haWwiLCJwaG9uZSIsIl94MTMiLCJfeDE0IiwiZ2V0Q21zQWxsUHJvZHVjdHMiLCJfcmVmOCIsIl9jYWxsZWU4IiwiX29mZnNldCR0b1N0cmluZzIiLCJfbGltaXQkdG9TdHJpbmczIiwiX3JlcSRxdWVyeTIiLCJzZWFyY2giLCJzZWFyY2hGaWx0ZXIiLCJ0b3RhbCIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsImNvdW50IiwiZGF0YSIsIl94MTUiLCJfeDE2IiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlci9Qcm9kdWN0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbW9uZ29vc2UsIHsgRmlsdGVyUXVlcnkgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBDTVNMaXN0IH0gZnJvbSAnc3JjL21vZGVscy9hcGkvY21zJztcbmltcG9ydCB7IFByb2R1Y3RSYXRpbmdSZXF1ZXN0IH0gZnJvbSAnc3JjL21vZGVscy9hcGkvcHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdCwge1xuICBQcm9kdWN0UmVzcG9uc2UsXG4gIFByb2R1Y3RTb3J0LFxuICBQcm9kdWN0VHlwZSxcbiAgUHJvZHVjdFR5cGVNb2RlbCxcbiAgUmF0aW5nVHlwZVxufSBmcm9tICdzcmMvbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IFB1cmNoYXNlIGZyb20gJ3NyYy9tb2RlbHMvcHVyY2hhc2UnO1xuaW1wb3J0IFVzZXIgZnJvbSAnc3JjL21vZGVscy91c2VyJztcbmltcG9ydCB7IHByb2R1Y3RTZXJpYWxpemVyIH0gZnJvbSAnc3JjL3NlcmlhbGl6ZXJzJztcbmltcG9ydCB7IGdldElkRnJvbVJlcSB9IGZyb20gJ3NyYy91dGlscy90b2tlbic7XG5cbmNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgb2Zmc2V0LCBsaW1pdCwgdGl0bGUsIGNhdGVnb3J5LCBicmFuZCwgY29sb3IsIHByaWNlLCBzb3J0IH0gPSByZXEucXVlcnk7XG5cbiAgICBjb25zdCB0aXRsZUZpbHRlciA9IHRpdGxlID8geyAkdGV4dDogeyAkc2VhcmNoOiB0aXRsZS50b1N0cmluZygpIH0gfSA6IHt9O1xuICAgIGNvbnN0IGNhdGVnb3J5RmlsdGVyID0gY2F0ZWdvcnkgPyB7IGNhdGVnb3J5OiBjYXRlZ29yeS50b1N0cmluZygpIH0gOiB7fTtcbiAgICBjb25zdCBicmFuZEZpbHRlciA9IGJyYW5kID8geyBicmFuZDogYnJhbmQudG9TdHJpbmcoKSB9IDoge307XG4gICAgY29uc3QgY29sb3JGaWx0ZXIgPSBjb2xvciA/IHsgY29sb3JzOiB7ICRpbjogW2NvbG9yLnRvU3RyaW5nKCldIH0gfSA6IHt9O1xuICAgIGNvbnN0IHByaWNlRmlsdGVyID0gcHJpY2UgPyB7IHByaWNlOiB7ICRsdGU6IHBhcnNlRmxvYXQocHJpY2UudG9TdHJpbmcoKSkgfSB9IDoge307XG4gICAgY29uc3QgZmlsdGVyOiBGaWx0ZXJRdWVyeTxQcm9kdWN0VHlwZU1vZGVsPiA9IHtcbiAgICAgIC4uLnRpdGxlRmlsdGVyLFxuICAgICAgLi4uY2F0ZWdvcnlGaWx0ZXIsXG4gICAgICAuLi5icmFuZEZpbHRlcixcbiAgICAgIC4uLmNvbG9yRmlsdGVyLFxuICAgICAgLi4ucHJpY2VGaWx0ZXJcbiAgICB9O1xuICAgIGxldCBzb3J0QnkgPSB7fTtcbiAgICBzd2l0Y2ggKHNvcnQ/LnRvU3RyaW5nKCkpIHtcbiAgICAgIGNhc2UgUHJvZHVjdFNvcnQucHJpY2VfZGVzOlxuICAgICAgICBzb3J0QnkgPSB7IHByaWNlOiAtMSwgdGl0bGU6IDEgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFByb2R1Y3RTb3J0LnByaWNlX2FzYzpcbiAgICAgICAgc29ydEJ5ID0geyBwcmljZTogMSwgdGl0bGU6IDEgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFByb2R1Y3RTb3J0Lm5hbWVfZGVzOlxuICAgICAgICBzb3J0QnkgPSB7IHRpdGxlOiAtMSB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUHJvZHVjdFNvcnQubmFtZV9hc2M6XG4gICAgICAgIHNvcnRCeSA9IHsgdGl0bGU6IDEgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzb3J0QnkgPSB7fTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoZmlsdGVyKVxuICAgICAgLnNvcnQoc29ydEJ5KVxuICAgICAgLnNraXAocGFyc2VJbnQob2Zmc2V0Py50b1N0cmluZygpID8/ICcwJykpXG4gICAgICAubGltaXQocGFyc2VJbnQobGltaXQ/LnRvU3RyaW5nKCkgPz8gJzAnKSk7XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRQcm9kdWN0cyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdFNlcmlhbGl6ZXIocHJvZHVjdCkpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZvcm1hdHRlZFByb2R1Y3RzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCBnZXRGZWF0dXJlZFByb2R1Y3RzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgbGltaXQgfSA9IHJlcS5xdWVyeTtcbiAgICBjb25zdCBmZWF0dXJlZFByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKClcbiAgICAgIC5zb3J0KHtcbiAgICAgICAgJ3JhdGluZy5yYXRlJzogJ2Rlc2MnLFxuICAgICAgICAncmF0aW5nLm51bV9vZl9yYXRlJzogJ2Rlc2MnLFxuICAgICAgICBwcmljZTogJ2Rlc2MnXG4gICAgICB9KVxuICAgICAgLmxpbWl0KHBhcnNlSW50KGxpbWl0Py50b1N0cmluZygpID8/ICczJykpO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkUHJvZHVjdHMgPSBmZWF0dXJlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdFNlcmlhbGl6ZXIocHJvZHVjdCkpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZvcm1hdHRlZFByb2R1Y3RzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IF9pZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZEJ5SWQoX2lkKTtcbiAgICBpZiAocHJvZHVjdCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RTZXJpYWxpemVyKHByb2R1Y3QpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnByb2R1Y3Qubm90X2ZvdW5kJyB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICBpbWcsXG4gICAgICBnYWxsZXJ5LFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgYnJhbmQsXG4gICAgICBwcmljZSxcbiAgICAgIHNrdSxcbiAgICAgIHN0b3JhZ2VfcXVhbnRpdHksXG4gICAgICBjb2xvcnNcbiAgICB9OiBQcm9kdWN0VHlwZSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IF9pZCA9IG5ldyBtb25nb29zZS5UeXBlcy5PYmplY3RJZCgpO1xuICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdCh7XG4gICAgICBfaWQsXG4gICAgICBpbWcsXG4gICAgICBnYWxsZXJ5LFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgYnJhbmQsXG4gICAgICBwcmljZSxcbiAgICAgIHNrdSxcbiAgICAgIHN0b3JhZ2VfcXVhbnRpdHksXG4gICAgICBjb2xvcnNcbiAgICB9KTtcbiAgICBjb25zdCBzYXZlZFByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0LnNhdmUoKTtcbiAgICBpZiAoc2F2ZWRQcm9kdWN0KSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24ocHJvZHVjdFNlcmlhbGl6ZXIoc2F2ZWRQcm9kdWN0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci5wcm9kdWN0LmZhaWxlZF90b19jcmVhdGUnIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVQcm9kdWN0ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IF9pZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgaW1nLFxuICAgICAgZ2FsbGVyeSxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGJyYW5kLFxuICAgICAgcHJpY2UsXG4gICAgICBza3UsXG4gICAgICBzdG9yYWdlX3F1YW50aXR5LFxuICAgICAgY29sb3JzXG4gICAgfTogUHJvZHVjdFR5cGUgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgeyBfaWQgfSxcbiAgICAgIHtcbiAgICAgICAgJHNldDoge1xuICAgICAgICAgIGltZyxcbiAgICAgICAgICBnYWxsZXJ5LFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgIGJyYW5kLFxuICAgICAgICAgIHByaWNlLFxuICAgICAgICAgIHNrdSxcbiAgICAgICAgICBzdG9yYWdlX3F1YW50aXR5LFxuICAgICAgICAgIGNvbG9yc1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBuZXc6IHRydWUgfVxuICAgICk7XG4gICAgaWYgKCF1cGRhdGVkUHJvZHVjdCkgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnByb2R1Y3QuZmFpbGVkX3RvX3VwZGF0ZScgfSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RTZXJpYWxpemVyKHVwZGF0ZWRQcm9kdWN0KSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyciB9KTtcbiAgfVxufTtcblxuY29uc3QgZGVsZXRlUHJvZHVjdCA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBfaWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGF3YWl0IFByb2R1Y3QuZGVsZXRlT25lKHsgX2lkIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCByYXRpbmdQcm9kdWN0ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IF9pZCA9IGdldElkRnJvbVJlcShyZXEpO1xuICAgIGNvbnN0IHByb2R1Y3RfaWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHsgcmF0ZSwgcHVyY2hhc2VfaWQsIGNvbG9yIH06IFByb2R1Y3RSYXRpbmdSZXF1ZXN0ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChfaWQpO1xuICAgIGNvbnN0IHB1cmNoYXNlID0gYXdhaXQgUHVyY2hhc2UuZmluZEJ5SWQocHVyY2hhc2VfaWQpO1xuICAgIGlmIChwdXJjaGFzZSAmJiB1c2VyKSB7XG4gICAgICBjb25zdCBwcm9kdWN0SW5kZXggPSBwdXJjaGFzZS5wcm9kdWN0cy5maW5kSW5kZXgoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnByb2R1Y3RfaWQgPT09IHByb2R1Y3RfaWQgJiYgaXRlbS5jb2xvciA9PT0gY29sb3JcbiAgICAgICk7XG4gICAgICBpZiAocHJvZHVjdEluZGV4ID4gLTEpIHtcbiAgICAgICAgcHVyY2hhc2UucHJvZHVjdHNbcHJvZHVjdEluZGV4XS5yYXRpbmcgPSByYXRlO1xuICAgICAgICBhd2FpdCBwdXJjaGFzZS5zYXZlKCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkKHByb2R1Y3RfaWQpO1xuICAgICAgICBpZiAocHJvZHVjdCkge1xuICAgICAgICAgIGNvbnN0IG5ld1JhdGluZzogUmF0aW5nVHlwZSA9IHtcbiAgICAgICAgICAgIHJhdGU6IHByb2R1Y3QucmF0aW5nPy5yYXRlXG4gICAgICAgICAgICAgID8gKHByb2R1Y3QucmF0aW5nLnJhdGUgKiBwcm9kdWN0LnJhdGluZy5udW1fb2ZfcmF0ZSArIHJhdGUpIC9cbiAgICAgICAgICAgICAgICAocHJvZHVjdC5yYXRpbmcubnVtX29mX3JhdGUgKyAxKVxuICAgICAgICAgICAgICA6IHJhdGUsXG4gICAgICAgICAgICBudW1fb2ZfcmF0ZTogcHJvZHVjdC5yYXRpbmc/Lm51bV9vZl9yYXRlID8gcHJvZHVjdC5yYXRpbmcubnVtX29mX3JhdGUgKyAxIDogMVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCB1cGRhdGVkUHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgICAgICAgIHsgX2lkOiBwcm9kdWN0X2lkIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICRhZGRUb1NldDoge1xuICAgICAgICAgICAgICAgIHJldmlldzoge1xuICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5faWQsXG4gICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICBwaG9uZTogdXNlci5pbmZvLnBob25lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAgICAgICByYXRpbmc6IG5ld1JhdGluZ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBuZXc6IHRydWUgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCF1cGRhdGVkUHJvZHVjdClcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdlcnJvci5wcm9kdWN0LmZhaWxlZF90b19yYXRpbmcnIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnZXJyb3IucHJvZHVjdC5mYWlsZWRfdG9fcmF0aW5nJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnByb2R1Y3Qubm90X2ZvdW5kJyB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yLnB1cmNoYXNlLm5vdF9mb3VuZCcgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGdldENtc0FsbFByb2R1Y3RzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgb2Zmc2V0LCBsaW1pdCwgc2VhcmNoIH0gPSByZXEucXVlcnk7XG4gICAgY29uc3Qgc2VhcmNoRmlsdGVyID0gc2VhcmNoID8geyAkdGV4dDogeyAkc2VhcmNoOiBzZWFyY2gudG9TdHJpbmcoKSB9IH0gOiB7fTtcbiAgICBjb25zdCBmaWx0ZXI6IEZpbHRlclF1ZXJ5PFByb2R1Y3RUeXBlTW9kZWw+ID0ge1xuICAgICAgLi4uc2VhcmNoRmlsdGVyXG4gICAgfTtcblxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKGZpbHRlcilcbiAgICAgIC5za2lwKHBhcnNlSW50KG9mZnNldD8udG9TdHJpbmcoKSA/PyAnMCcpKVxuICAgICAgLmxpbWl0KHBhcnNlSW50KGxpbWl0Py50b1N0cmluZygpID8/ICcwJykpO1xuICAgIGNvbnN0IHRvdGFsID0gYXdhaXQgUHJvZHVjdC5maW5kKGZpbHRlcikuY291bnQoKTtcbiAgICBjb25zdCBmb3JtYXR0ZWRQcm9kdWN0cyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdFNlcmlhbGl6ZXIocHJvZHVjdCkpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIGRhdGE6IGZvcm1hdHRlZFByb2R1Y3RzLFxuICAgICAgdG90YWxcbiAgICB9IGFzIENNU0xpc3Q8UHJvZHVjdFJlc3BvbnNlW10+KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEZlYXR1cmVkUHJvZHVjdHMsXG4gIGdldEFsbFByb2R1Y3RzLFxuICBnZXRQcm9kdWN0LFxuICBjcmVhdGVQcm9kdWN0LFxuICB1cGRhdGVQcm9kdWN0LFxuICBkZWxldGVQcm9kdWN0LFxuICByYXRpbmdQcm9kdWN0LFxuICBnZXRDbXNBbGxQcm9kdWN0c1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLElBQUFBLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUdBLElBQUFDLFFBQUEsR0FBQUMsdUJBQUEsQ0FBQUYsT0FBQTtBQU9BLElBQUFHLFNBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLEtBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFLLFlBQUEsR0FBQUwsT0FBQTtBQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtBQUErQyxTQUFBTyx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQU4sd0JBQUFVLEdBQUEsRUFBQUosV0FBQSxTQUFBQSxXQUFBLElBQUFJLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLFdBQUFELEdBQUEsUUFBQUEsR0FBQSxhQUFBRSxPQUFBLENBQUFGLEdBQUEseUJBQUFBLEdBQUEsdUNBQUFBLEdBQUEsVUFBQUcsS0FBQSxHQUFBUix3QkFBQSxDQUFBQyxXQUFBLE9BQUFPLEtBQUEsSUFBQUEsS0FBQSxDQUFBQyxHQUFBLENBQUFKLEdBQUEsWUFBQUcsS0FBQSxDQUFBRSxHQUFBLENBQUFMLEdBQUEsU0FBQU0sTUFBQSxXQUFBQyxxQkFBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxHQUFBLElBQUFYLEdBQUEsUUFBQVcsR0FBQSxrQkFBQUgsTUFBQSxDQUFBSSxTQUFBLENBQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBZCxHQUFBLEVBQUFXLEdBQUEsU0FBQUksSUFBQSxHQUFBUixxQkFBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFWLEdBQUEsRUFBQVcsR0FBQSxjQUFBSSxJQUFBLEtBQUFBLElBQUEsQ0FBQVYsR0FBQSxJQUFBVSxJQUFBLENBQUFDLEdBQUEsS0FBQVIsTUFBQSxDQUFBQyxjQUFBLENBQUFILE1BQUEsRUFBQUssR0FBQSxFQUFBSSxJQUFBLFlBQUFULE1BQUEsQ0FBQUssR0FBQSxJQUFBWCxHQUFBLENBQUFXLEdBQUEsU0FBQUwsTUFBQSxjQUFBTixHQUFBLE1BQUFHLEtBQUEsSUFBQUEsS0FBQSxDQUFBYSxHQUFBLENBQUFoQixHQUFBLEVBQUFNLE1BQUEsWUFBQUEsTUFBQTtBQUFBLFNBQUFuQix1QkFBQWEsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQWlCLG9CQUFBLGtCQWIvQyxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQVgsTUFBQSxDQUFBSSxTQUFBLEVBQUFRLE1BQUEsR0FBQUQsRUFBQSxDQUFBTixjQUFBLEVBQUFKLGNBQUEsR0FBQUQsTUFBQSxDQUFBQyxjQUFBLGNBQUFULEdBQUEsRUFBQVcsR0FBQSxFQUFBSSxJQUFBLElBQUFmLEdBQUEsQ0FBQVcsR0FBQSxJQUFBSSxJQUFBLENBQUFNLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQTlCLEdBQUEsRUFBQVcsR0FBQSxFQUFBVSxLQUFBLFdBQUFiLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxHQUFBLEVBQUFXLEdBQUEsSUFBQVUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFqQyxHQUFBLENBQUFXLEdBQUEsV0FBQW1CLE1BQUEsbUJBQUFJLEdBQUEsSUFBQUosTUFBQSxZQUFBQSxPQUFBOUIsR0FBQSxFQUFBVyxHQUFBLEVBQUFVLEtBQUEsV0FBQXJCLEdBQUEsQ0FBQVcsR0FBQSxJQUFBVSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF6QixTQUFBLFlBQUE2QixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUFsQyxNQUFBLENBQUFtQyxNQUFBLENBQUFILGNBQUEsQ0FBQTVCLFNBQUEsR0FBQWdDLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBOUIsY0FBQSxDQUFBaUMsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUFoRCxHQUFBLEVBQUFpRCxHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBbEMsSUFBQSxDQUFBZCxHQUFBLEVBQUFpRCxHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUFoQixPQUFBLENBQUFpQixJQUFBLEdBQUFBLElBQUEsTUFBQWdCLGdCQUFBLGdCQUFBVixVQUFBLGNBQUFXLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF4QixNQUFBLENBQUF3QixpQkFBQSxFQUFBOUIsY0FBQSxxQ0FBQStCLFFBQUEsR0FBQS9DLE1BQUEsQ0FBQWdELGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBdEMsRUFBQSxJQUFBQyxNQUFBLENBQUFOLElBQUEsQ0FBQTJDLHVCQUFBLEVBQUFqQyxjQUFBLE1BQUE4QixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF6QyxTQUFBLEdBQUE2QixTQUFBLENBQUE3QixTQUFBLEdBQUFKLE1BQUEsQ0FBQW1DLE1BQUEsQ0FBQVcsaUJBQUEsWUFBQU0sc0JBQUFoRCxTQUFBLGdDQUFBaUQsT0FBQSxXQUFBQyxNQUFBLElBQUFoQyxNQUFBLENBQUFsQixTQUFBLEVBQUFrRCxNQUFBLFlBQUFiLEdBQUEsZ0JBQUFjLE9BQUEsQ0FBQUQsTUFBQSxFQUFBYixHQUFBLHNCQUFBZSxjQUFBdEIsU0FBQSxFQUFBdUIsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFiLEdBQUEsRUFBQWtCLE9BQUEsRUFBQUMsTUFBQSxRQUFBQyxNQUFBLEdBQUF0QixRQUFBLENBQUFMLFNBQUEsQ0FBQW9CLE1BQUEsR0FBQXBCLFNBQUEsRUFBQU8sR0FBQSxtQkFBQW9CLE1BQUEsQ0FBQW5CLElBQUEsUUFBQW9CLE1BQUEsR0FBQUQsTUFBQSxDQUFBcEIsR0FBQSxFQUFBNUIsS0FBQSxHQUFBaUQsTUFBQSxDQUFBakQsS0FBQSxTQUFBQSxLQUFBLGdCQUFBbkIsT0FBQSxDQUFBbUIsS0FBQSxLQUFBRCxNQUFBLENBQUFOLElBQUEsQ0FBQU8sS0FBQSxlQUFBNEMsV0FBQSxDQUFBRSxPQUFBLENBQUE5QyxLQUFBLENBQUFrRCxPQUFBLEVBQUFDLElBQUEsV0FBQW5ELEtBQUEsSUFBQTZDLE1BQUEsU0FBQTdDLEtBQUEsRUFBQThDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQWxDLEdBQUEsSUFBQWdDLE1BQUEsVUFBQWhDLEdBQUEsRUFBQWlDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQTlDLEtBQUEsRUFBQW1ELElBQUEsV0FBQUMsU0FBQSxJQUFBSCxNQUFBLENBQUFqRCxLQUFBLEdBQUFvRCxTQUFBLEVBQUFOLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUksS0FBQSxXQUFBUixNQUFBLFVBQUFRLEtBQUEsRUFBQVAsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBcEIsR0FBQSxTQUFBMEIsZUFBQSxFQUFBbEUsY0FBQSxvQkFBQVksS0FBQSxXQUFBQSxNQUFBeUMsTUFBQSxFQUFBYixHQUFBLGFBQUEyQiwyQkFBQSxlQUFBWCxXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWIsR0FBQSxFQUFBa0IsT0FBQSxFQUFBQyxNQUFBLGdCQUFBTyxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBOUIsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFpQyxLQUFBLHNDQUFBZixNQUFBLEVBQUFiLEdBQUEsd0JBQUE0QixLQUFBLFlBQUFDLEtBQUEsc0RBQUFELEtBQUEsb0JBQUFmLE1BQUEsUUFBQWIsR0FBQSxTQUFBOEIsVUFBQSxXQUFBbkMsT0FBQSxDQUFBa0IsTUFBQSxHQUFBQSxNQUFBLEVBQUFsQixPQUFBLENBQUFLLEdBQUEsR0FBQUEsR0FBQSxVQUFBK0IsUUFBQSxHQUFBcEMsT0FBQSxDQUFBb0MsUUFBQSxNQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUMsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBcEMsT0FBQSxPQUFBcUMsY0FBQSxRQUFBQSxjQUFBLEtBQUE5QixnQkFBQSxtQkFBQThCLGNBQUEscUJBQUFyQyxPQUFBLENBQUFrQixNQUFBLEVBQUFsQixPQUFBLENBQUF1QyxJQUFBLEdBQUF2QyxPQUFBLENBQUF3QyxLQUFBLEdBQUF4QyxPQUFBLENBQUFLLEdBQUEsc0JBQUFMLE9BQUEsQ0FBQWtCLE1BQUEsNkJBQUFlLEtBQUEsUUFBQUEsS0FBQSxnQkFBQWpDLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUF5QyxpQkFBQSxDQUFBekMsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFrQixNQUFBLElBQUFsQixPQUFBLENBQUEwQyxNQUFBLFdBQUExQyxPQUFBLENBQUFLLEdBQUEsR0FBQTRCLEtBQUEsb0JBQUFSLE1BQUEsR0FBQXRCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUF5QixNQUFBLENBQUFuQixJQUFBLFFBQUEyQixLQUFBLEdBQUFqQyxPQUFBLENBQUEyQyxJQUFBLG1DQUFBbEIsTUFBQSxDQUFBcEIsR0FBQSxLQUFBRSxnQkFBQSxxQkFBQTlCLEtBQUEsRUFBQWdELE1BQUEsQ0FBQXBCLEdBQUEsRUFBQXNDLElBQUEsRUFBQTNDLE9BQUEsQ0FBQTJDLElBQUEsa0JBQUFsQixNQUFBLENBQUFuQixJQUFBLEtBQUEyQixLQUFBLGdCQUFBakMsT0FBQSxDQUFBa0IsTUFBQSxZQUFBbEIsT0FBQSxDQUFBSyxHQUFBLEdBQUFvQixNQUFBLENBQUFwQixHQUFBLG1CQUFBaUMsb0JBQUFGLFFBQUEsRUFBQXBDLE9BQUEsUUFBQTRDLFVBQUEsR0FBQTVDLE9BQUEsQ0FBQWtCLE1BQUEsRUFBQUEsTUFBQSxHQUFBa0IsUUFBQSxDQUFBdkQsUUFBQSxDQUFBK0QsVUFBQSxPQUFBQyxTQUFBLEtBQUEzQixNQUFBLFNBQUFsQixPQUFBLENBQUFvQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXZELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQWtCLE1BQUEsYUFBQWxCLE9BQUEsQ0FBQUssR0FBQSxHQUFBd0MsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUFwQyxPQUFBLGVBQUFBLE9BQUEsQ0FBQWtCLE1BQUEsa0JBQUEwQixVQUFBLEtBQUE1QyxPQUFBLENBQUFrQixNQUFBLFlBQUFsQixPQUFBLENBQUFLLEdBQUEsT0FBQXlDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUFyQyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdEIsUUFBQSxDQUFBZSxNQUFBLEVBQUFrQixRQUFBLENBQUF2RCxRQUFBLEVBQUFtQixPQUFBLENBQUFLLEdBQUEsbUJBQUFvQixNQUFBLENBQUFuQixJQUFBLFNBQUFOLE9BQUEsQ0FBQWtCLE1BQUEsWUFBQWxCLE9BQUEsQ0FBQUssR0FBQSxHQUFBb0IsTUFBQSxDQUFBcEIsR0FBQSxFQUFBTCxPQUFBLENBQUFvQyxRQUFBLFNBQUE3QixnQkFBQSxNQUFBd0MsSUFBQSxHQUFBdEIsTUFBQSxDQUFBcEIsR0FBQSxTQUFBMEMsSUFBQSxHQUFBQSxJQUFBLENBQUFKLElBQUEsSUFBQTNDLE9BQUEsQ0FBQW9DLFFBQUEsQ0FBQVksVUFBQSxJQUFBRCxJQUFBLENBQUF0RSxLQUFBLEVBQUF1QixPQUFBLENBQUFpRCxJQUFBLEdBQUFiLFFBQUEsQ0FBQWMsT0FBQSxlQUFBbEQsT0FBQSxDQUFBa0IsTUFBQSxLQUFBbEIsT0FBQSxDQUFBa0IsTUFBQSxXQUFBbEIsT0FBQSxDQUFBSyxHQUFBLEdBQUF3QyxTQUFBLEdBQUE3QyxPQUFBLENBQUFvQyxRQUFBLFNBQUE3QixnQkFBQSxJQUFBd0MsSUFBQSxJQUFBL0MsT0FBQSxDQUFBa0IsTUFBQSxZQUFBbEIsT0FBQSxDQUFBSyxHQUFBLE9BQUF5QyxTQUFBLHNDQUFBOUMsT0FBQSxDQUFBb0MsUUFBQSxTQUFBN0IsZ0JBQUEsY0FBQTRDLGFBQUFDLElBQUEsUUFBQUMsS0FBQSxLQUFBQyxNQUFBLEVBQUFGLElBQUEsWUFBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFFLFFBQUEsR0FBQUgsSUFBQSxXQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUcsVUFBQSxHQUFBSixJQUFBLEtBQUFDLEtBQUEsQ0FBQUksUUFBQSxHQUFBTCxJQUFBLFdBQUFNLFVBQUEsQ0FBQUMsSUFBQSxDQUFBTixLQUFBLGNBQUFPLGNBQUFQLEtBQUEsUUFBQTVCLE1BQUEsR0FBQTRCLEtBQUEsQ0FBQVEsVUFBQSxRQUFBcEMsTUFBQSxDQUFBbkIsSUFBQSxvQkFBQW1CLE1BQUEsQ0FBQXBCLEdBQUEsRUFBQWdELEtBQUEsQ0FBQVEsVUFBQSxHQUFBcEMsTUFBQSxhQUFBeEIsUUFBQU4sV0FBQSxTQUFBK0QsVUFBQSxNQUFBSixNQUFBLGFBQUEzRCxXQUFBLENBQUFzQixPQUFBLENBQUFrQyxZQUFBLGNBQUFXLEtBQUEsaUJBQUFoRCxPQUFBaUQsUUFBQSxRQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUQsUUFBQSxDQUFBbkYsY0FBQSxPQUFBb0YsY0FBQSxTQUFBQSxjQUFBLENBQUE5RixJQUFBLENBQUE2RixRQUFBLDRCQUFBQSxRQUFBLENBQUFkLElBQUEsU0FBQWMsUUFBQSxPQUFBRSxLQUFBLENBQUFGLFFBQUEsQ0FBQUcsTUFBQSxTQUFBQyxDQUFBLE9BQUFsQixJQUFBLFlBQUFBLEtBQUEsYUFBQWtCLENBQUEsR0FBQUosUUFBQSxDQUFBRyxNQUFBLE9BQUExRixNQUFBLENBQUFOLElBQUEsQ0FBQTZGLFFBQUEsRUFBQUksQ0FBQSxVQUFBbEIsSUFBQSxDQUFBeEUsS0FBQSxHQUFBc0YsUUFBQSxDQUFBSSxDQUFBLEdBQUFsQixJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxTQUFBQSxJQUFBLENBQUF4RSxLQUFBLEdBQUFvRSxTQUFBLEVBQUFJLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFlBQUFBLElBQUEsQ0FBQUEsSUFBQSxHQUFBQSxJQUFBLGVBQUFBLElBQUEsRUFBQWQsVUFBQSxlQUFBQSxXQUFBLGFBQUExRCxLQUFBLEVBQUFvRSxTQUFBLEVBQUFGLElBQUEsaUJBQUFuQyxpQkFBQSxDQUFBeEMsU0FBQSxHQUFBeUMsMEJBQUEsRUFBQTVDLGNBQUEsQ0FBQWtELEVBQUEsbUJBQUF0QyxLQUFBLEVBQUFnQywwQkFBQSxFQUFBckIsWUFBQSxTQUFBdkIsY0FBQSxDQUFBNEMsMEJBQUEsbUJBQUFoQyxLQUFBLEVBQUErQixpQkFBQSxFQUFBcEIsWUFBQSxTQUFBb0IsaUJBQUEsQ0FBQTRELFdBQUEsR0FBQWxGLE1BQUEsQ0FBQXVCLDBCQUFBLEVBQUF6QixpQkFBQSx3QkFBQVYsT0FBQSxDQUFBK0YsbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQUUsV0FBQSxXQUFBRCxJQUFBLEtBQUFBLElBQUEsS0FBQS9ELGlCQUFBLDZCQUFBK0QsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQUUsSUFBQSxPQUFBbkcsT0FBQSxDQUFBb0csSUFBQSxhQUFBSixNQUFBLFdBQUExRyxNQUFBLENBQUErRyxjQUFBLEdBQUEvRyxNQUFBLENBQUErRyxjQUFBLENBQUFMLE1BQUEsRUFBQTdELDBCQUFBLEtBQUE2RCxNQUFBLENBQUFNLFNBQUEsR0FBQW5FLDBCQUFBLEVBQUF2QixNQUFBLENBQUFvRixNQUFBLEVBQUF0RixpQkFBQSx5QkFBQXNGLE1BQUEsQ0FBQXRHLFNBQUEsR0FBQUosTUFBQSxDQUFBbUMsTUFBQSxDQUFBZ0IsRUFBQSxHQUFBdUQsTUFBQSxLQUFBaEcsT0FBQSxDQUFBdUcsS0FBQSxhQUFBeEUsR0FBQSxhQUFBc0IsT0FBQSxFQUFBdEIsR0FBQSxPQUFBVyxxQkFBQSxDQUFBSSxhQUFBLENBQUFwRCxTQUFBLEdBQUFrQixNQUFBLENBQUFrQyxhQUFBLENBQUFwRCxTQUFBLEVBQUFjLG1CQUFBLGlDQUFBUixPQUFBLENBQUE4QyxhQUFBLEdBQUFBLGFBQUEsRUFBQTlDLE9BQUEsQ0FBQXdHLEtBQUEsYUFBQXRGLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQTBCLFdBQUEsZUFBQUEsV0FBQSxLQUFBQSxXQUFBLEdBQUEwRCxPQUFBLE9BQUFDLElBQUEsT0FBQTVELGFBQUEsQ0FBQTdCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBMEIsV0FBQSxVQUFBL0MsT0FBQSxDQUFBK0YsbUJBQUEsQ0FBQTVFLE9BQUEsSUFBQXVGLElBQUEsR0FBQUEsSUFBQSxDQUFBL0IsSUFBQSxHQUFBckIsSUFBQSxXQUFBRixNQUFBLFdBQUFBLE1BQUEsQ0FBQWlCLElBQUEsR0FBQWpCLE1BQUEsQ0FBQWpELEtBQUEsR0FBQXVHLElBQUEsQ0FBQS9CLElBQUEsV0FBQWpDLHFCQUFBLENBQUFELEVBQUEsR0FBQTdCLE1BQUEsQ0FBQTZCLEVBQUEsRUFBQS9CLGlCQUFBLGdCQUFBRSxNQUFBLENBQUE2QixFQUFBLEVBQUFuQyxjQUFBLGlDQUFBTSxNQUFBLENBQUE2QixFQUFBLDZEQUFBekMsT0FBQSxDQUFBMkcsSUFBQSxhQUFBQyxHQUFBLFFBQUFDLE1BQUEsR0FBQXZILE1BQUEsQ0FBQXNILEdBQUEsR0FBQUQsSUFBQSxnQkFBQWxILEdBQUEsSUFBQW9ILE1BQUEsRUFBQUYsSUFBQSxDQUFBdEIsSUFBQSxDQUFBNUYsR0FBQSxVQUFBa0gsSUFBQSxDQUFBRyxPQUFBLGFBQUFuQyxLQUFBLFdBQUFnQyxJQUFBLENBQUFmLE1BQUEsU0FBQW5HLEdBQUEsR0FBQWtILElBQUEsQ0FBQUksR0FBQSxRQUFBdEgsR0FBQSxJQUFBb0gsTUFBQSxTQUFBbEMsSUFBQSxDQUFBeEUsS0FBQSxHQUFBVixHQUFBLEVBQUFrRixJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxXQUFBQSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxRQUFBM0UsT0FBQSxDQUFBd0MsTUFBQSxHQUFBQSxNQUFBLEVBQUFiLE9BQUEsQ0FBQWpDLFNBQUEsS0FBQXdHLFdBQUEsRUFBQXZFLE9BQUEsRUFBQTZELEtBQUEsV0FBQUEsTUFBQXdCLGFBQUEsYUFBQUMsSUFBQSxXQUFBdEMsSUFBQSxXQUFBVixJQUFBLFFBQUFDLEtBQUEsR0FBQUssU0FBQSxPQUFBRixJQUFBLFlBQUFQLFFBQUEsY0FBQWxCLE1BQUEsZ0JBQUFiLEdBQUEsR0FBQXdDLFNBQUEsT0FBQWEsVUFBQSxDQUFBekMsT0FBQSxDQUFBMkMsYUFBQSxJQUFBMEIsYUFBQSxXQUFBYixJQUFBLGtCQUFBQSxJQUFBLENBQUFlLE1BQUEsT0FBQWhILE1BQUEsQ0FBQU4sSUFBQSxPQUFBdUcsSUFBQSxNQUFBUixLQUFBLEVBQUFRLElBQUEsQ0FBQWdCLEtBQUEsY0FBQWhCLElBQUEsSUFBQTVCLFNBQUEsTUFBQTZDLElBQUEsV0FBQUEsS0FBQSxTQUFBL0MsSUFBQSxXQUFBZ0QsVUFBQSxRQUFBakMsVUFBQSxJQUFBRyxVQUFBLGtCQUFBOEIsVUFBQSxDQUFBckYsSUFBQSxRQUFBcUYsVUFBQSxDQUFBdEYsR0FBQSxjQUFBdUYsSUFBQSxLQUFBbkQsaUJBQUEsV0FBQUEsa0JBQUFvRCxTQUFBLGFBQUFsRCxJQUFBLFFBQUFrRCxTQUFBLE1BQUE3RixPQUFBLGtCQUFBOEYsT0FBQUMsR0FBQSxFQUFBQyxNQUFBLFdBQUF2RSxNQUFBLENBQUFuQixJQUFBLFlBQUFtQixNQUFBLENBQUFwQixHQUFBLEdBQUF3RixTQUFBLEVBQUE3RixPQUFBLENBQUFpRCxJQUFBLEdBQUE4QyxHQUFBLEVBQUFDLE1BQUEsS0FBQWhHLE9BQUEsQ0FBQWtCLE1BQUEsV0FBQWxCLE9BQUEsQ0FBQUssR0FBQSxHQUFBd0MsU0FBQSxLQUFBbUQsTUFBQSxhQUFBN0IsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLEdBQUExQyxNQUFBLEdBQUE0QixLQUFBLENBQUFRLFVBQUEsaUJBQUFSLEtBQUEsQ0FBQUMsTUFBQSxTQUFBd0MsTUFBQSxhQUFBekMsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLFFBQUFVLFFBQUEsR0FBQXpILE1BQUEsQ0FBQU4sSUFBQSxDQUFBbUYsS0FBQSxlQUFBNkMsVUFBQSxHQUFBMUgsTUFBQSxDQUFBTixJQUFBLENBQUFtRixLQUFBLHFCQUFBNEMsUUFBQSxJQUFBQyxVQUFBLGFBQUFYLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLGdCQUFBZ0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsY0FBQXlDLFFBQUEsYUFBQVYsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEscUJBQUEyQyxVQUFBLFlBQUFoRSxLQUFBLHFEQUFBcUQsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsWUFBQWQsTUFBQSxXQUFBQSxPQUFBcEMsSUFBQSxFQUFBRCxHQUFBLGFBQUE4RCxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLElBQUEvRyxNQUFBLENBQUFOLElBQUEsQ0FBQW1GLEtBQUEsd0JBQUFrQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsUUFBQTJDLFlBQUEsR0FBQTlDLEtBQUEsYUFBQThDLFlBQUEsaUJBQUE3RixJQUFBLG1CQUFBQSxJQUFBLEtBQUE2RixZQUFBLENBQUE3QyxNQUFBLElBQUFqRCxHQUFBLElBQUFBLEdBQUEsSUFBQThGLFlBQUEsQ0FBQTNDLFVBQUEsS0FBQTJDLFlBQUEsY0FBQTFFLE1BQUEsR0FBQTBFLFlBQUEsR0FBQUEsWUFBQSxDQUFBdEMsVUFBQSxjQUFBcEMsTUFBQSxDQUFBbkIsSUFBQSxHQUFBQSxJQUFBLEVBQUFtQixNQUFBLENBQUFwQixHQUFBLEdBQUFBLEdBQUEsRUFBQThGLFlBQUEsU0FBQWpGLE1BQUEsZ0JBQUErQixJQUFBLEdBQUFrRCxZQUFBLENBQUEzQyxVQUFBLEVBQUFqRCxnQkFBQSxTQUFBNkYsUUFBQSxDQUFBM0UsTUFBQSxNQUFBMkUsUUFBQSxXQUFBQSxTQUFBM0UsTUFBQSxFQUFBZ0MsUUFBQSxvQkFBQWhDLE1BQUEsQ0FBQW5CLElBQUEsUUFBQW1CLE1BQUEsQ0FBQXBCLEdBQUEscUJBQUFvQixNQUFBLENBQUFuQixJQUFBLG1CQUFBbUIsTUFBQSxDQUFBbkIsSUFBQSxRQUFBMkMsSUFBQSxHQUFBeEIsTUFBQSxDQUFBcEIsR0FBQSxnQkFBQW9CLE1BQUEsQ0FBQW5CLElBQUEsU0FBQXNGLElBQUEsUUFBQXZGLEdBQUEsR0FBQW9CLE1BQUEsQ0FBQXBCLEdBQUEsT0FBQWEsTUFBQSxrQkFBQStCLElBQUEseUJBQUF4QixNQUFBLENBQUFuQixJQUFBLElBQUFtRCxRQUFBLFVBQUFSLElBQUEsR0FBQVEsUUFBQSxHQUFBbEQsZ0JBQUEsS0FBQThGLE1BQUEsV0FBQUEsT0FBQTdDLFVBQUEsYUFBQVcsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUcsVUFBQSxLQUFBQSxVQUFBLGNBQUE0QyxRQUFBLENBQUEvQyxLQUFBLENBQUFRLFVBQUEsRUFBQVIsS0FBQSxDQUFBSSxRQUFBLEdBQUFHLGFBQUEsQ0FBQVAsS0FBQSxHQUFBOUMsZ0JBQUEseUJBQUErRixPQUFBaEQsTUFBQSxhQUFBYSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLEtBQUFBLE1BQUEsUUFBQTdCLE1BQUEsR0FBQTRCLEtBQUEsQ0FBQVEsVUFBQSxrQkFBQXBDLE1BQUEsQ0FBQW5CLElBQUEsUUFBQWlHLE1BQUEsR0FBQTlFLE1BQUEsQ0FBQXBCLEdBQUEsRUFBQXVELGFBQUEsQ0FBQVAsS0FBQSxZQUFBa0QsTUFBQSxnQkFBQXJFLEtBQUEsOEJBQUFzRSxhQUFBLFdBQUFBLGNBQUF6QyxRQUFBLEVBQUFmLFVBQUEsRUFBQUUsT0FBQSxnQkFBQWQsUUFBQSxLQUFBdkQsUUFBQSxFQUFBaUMsTUFBQSxDQUFBaUQsUUFBQSxHQUFBZixVQUFBLEVBQUFBLFVBQUEsRUFBQUUsT0FBQSxFQUFBQSxPQUFBLG9CQUFBaEMsTUFBQSxVQUFBYixHQUFBLEdBQUF3QyxTQUFBLEdBQUF0QyxnQkFBQSxPQUFBakMsT0FBQTtBQUFBLFNBQUFtSSxRQUFBdEIsTUFBQSxFQUFBdUIsY0FBQSxRQUFBekIsSUFBQSxHQUFBckgsTUFBQSxDQUFBcUgsSUFBQSxDQUFBRSxNQUFBLE9BQUF2SCxNQUFBLENBQUErSSxxQkFBQSxRQUFBQyxPQUFBLEdBQUFoSixNQUFBLENBQUErSSxxQkFBQSxDQUFBeEIsTUFBQSxHQUFBdUIsY0FBQSxLQUFBRSxPQUFBLEdBQUFBLE9BQUEsQ0FBQUMsTUFBQSxXQUFBQyxHQUFBLFdBQUFsSixNQUFBLENBQUFFLHdCQUFBLENBQUFxSCxNQUFBLEVBQUEyQixHQUFBLEVBQUEzSCxVQUFBLE9BQUE4RixJQUFBLENBQUF0QixJQUFBLENBQUFvRCxLQUFBLENBQUE5QixJQUFBLEVBQUEyQixPQUFBLFlBQUEzQixJQUFBO0FBQUEsU0FBQStCLGNBQUFDLE1BQUEsYUFBQTlDLENBQUEsTUFBQUEsQ0FBQSxHQUFBK0MsU0FBQSxDQUFBaEQsTUFBQSxFQUFBQyxDQUFBLFVBQUFnRCxNQUFBLFdBQUFELFNBQUEsQ0FBQS9DLENBQUEsSUFBQStDLFNBQUEsQ0FBQS9DLENBQUEsUUFBQUEsQ0FBQSxPQUFBc0MsT0FBQSxDQUFBN0ksTUFBQSxDQUFBdUosTUFBQSxPQUFBbEcsT0FBQSxXQUFBbEQsR0FBQSxJQUFBcUosZUFBQSxDQUFBSCxNQUFBLEVBQUFsSixHQUFBLEVBQUFvSixNQUFBLENBQUFwSixHQUFBLFNBQUFILE1BQUEsQ0FBQXlKLHlCQUFBLEdBQUF6SixNQUFBLENBQUEwSixnQkFBQSxDQUFBTCxNQUFBLEVBQUFySixNQUFBLENBQUF5Six5QkFBQSxDQUFBRixNQUFBLEtBQUFWLE9BQUEsQ0FBQTdJLE1BQUEsQ0FBQXVKLE1BQUEsR0FBQWxHLE9BQUEsV0FBQWxELEdBQUEsSUFBQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFvSixNQUFBLEVBQUFsSixHQUFBLEVBQUFILE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQXFKLE1BQUEsRUFBQXBKLEdBQUEsaUJBQUFrSixNQUFBO0FBQUEsU0FBQUcsZ0JBQUFoSyxHQUFBLEVBQUFXLEdBQUEsRUFBQVUsS0FBQSxJQUFBVixHQUFBLEdBQUF3SixjQUFBLENBQUF4SixHQUFBLE9BQUFBLEdBQUEsSUFBQVgsR0FBQSxJQUFBUSxNQUFBLENBQUFDLGNBQUEsQ0FBQVQsR0FBQSxFQUFBVyxHQUFBLElBQUFVLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLFFBQUFDLFlBQUEsUUFBQUMsUUFBQSxvQkFBQWpDLEdBQUEsQ0FBQVcsR0FBQSxJQUFBVSxLQUFBLFdBQUFyQixHQUFBO0FBQUEsU0FBQW1LLGVBQUFsSCxHQUFBLFFBQUF0QyxHQUFBLEdBQUF5SixZQUFBLENBQUFuSCxHQUFBLG9CQUFBL0MsT0FBQSxDQUFBUyxHQUFBLGlCQUFBQSxHQUFBLEdBQUEwSixNQUFBLENBQUExSixHQUFBO0FBQUEsU0FBQXlKLGFBQUFFLEtBQUEsRUFBQUMsSUFBQSxRQUFBckssT0FBQSxDQUFBb0ssS0FBQSxrQkFBQUEsS0FBQSxrQkFBQUEsS0FBQSxNQUFBRSxJQUFBLEdBQUFGLEtBQUEsQ0FBQS9JLE1BQUEsQ0FBQWtKLFdBQUEsT0FBQUQsSUFBQSxLQUFBL0UsU0FBQSxRQUFBaUYsR0FBQSxHQUFBRixJQUFBLENBQUExSixJQUFBLENBQUF3SixLQUFBLEVBQUFDLElBQUEsb0JBQUFySyxPQUFBLENBQUF3SyxHQUFBLHVCQUFBQSxHQUFBLFlBQUFoRixTQUFBLDREQUFBNkUsSUFBQSxnQkFBQUYsTUFBQSxHQUFBTSxNQUFBLEVBQUFMLEtBQUE7QUFBQSxTQUFBTSxtQkFBQUMsR0FBQSxFQUFBMUcsT0FBQSxFQUFBQyxNQUFBLEVBQUEwRyxLQUFBLEVBQUFDLE1BQUEsRUFBQXBLLEdBQUEsRUFBQXNDLEdBQUEsY0FBQTBDLElBQUEsR0FBQWtGLEdBQUEsQ0FBQWxLLEdBQUEsRUFBQXNDLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXNFLElBQUEsQ0FBQXRFLEtBQUEsV0FBQXFELEtBQUEsSUFBQU4sTUFBQSxDQUFBTSxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFwQixPQUFBLENBQUE5QyxLQUFBLFlBQUFzRyxPQUFBLENBQUF4RCxPQUFBLENBQUE5QyxLQUFBLEVBQUFtRCxJQUFBLENBQUFzRyxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQWhJLEVBQUEsNkJBQUFWLElBQUEsU0FBQTJJLElBQUEsR0FBQW5CLFNBQUEsYUFBQW5DLE9BQUEsV0FBQXhELE9BQUEsRUFBQUMsTUFBQSxRQUFBeUcsR0FBQSxHQUFBN0gsRUFBQSxDQUFBMkcsS0FBQSxDQUFBckgsSUFBQSxFQUFBMkksSUFBQSxZQUFBSCxNQUFBekosS0FBQSxJQUFBdUosa0JBQUEsQ0FBQUMsR0FBQSxFQUFBMUcsT0FBQSxFQUFBQyxNQUFBLEVBQUEwRyxLQUFBLEVBQUFDLE1BQUEsVUFBQTFKLEtBQUEsY0FBQTBKLE9BQUE3SSxHQUFBLElBQUEwSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUExRyxPQUFBLEVBQUFDLE1BQUEsRUFBQTBHLEtBQUEsRUFBQUMsTUFBQSxXQUFBN0ksR0FBQSxLQUFBNEksS0FBQSxDQUFBckYsU0FBQTtBQWVBLElBQU15RixjQUFjO0VBQUEsSUFBQUMsSUFBQSxHQUFBSCxpQkFBQSxlQUFBL0osbUJBQUEsR0FBQXFHLElBQUEsQ0FBRyxTQUFBOEQsUUFBT0MsR0FBWSxFQUFFWCxHQUFhO0lBQUEsSUFBQVksZ0JBQUEsRUFBQUMsZUFBQSxFQUFBQyxVQUFBLEVBQUFDLE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxLQUFBLEVBQUFDLFFBQUEsRUFBQUMsS0FBQSxFQUFBQyxLQUFBLEVBQUFDLEtBQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxXQUFBLEVBQUFDLFdBQUEsRUFBQTVDLE1BQUEsRUFBQTZDLE1BQUEsRUFBQUMsUUFBQSxFQUFBQyxpQkFBQTtJQUFBLE9BQUF2TCxtQkFBQSxHQUFBa0IsSUFBQSxVQUFBc0ssU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUF2RSxJQUFBLEdBQUF1RSxRQUFBLENBQUE3RyxJQUFBO1FBQUE7VUFBQTZHLFFBQUEsQ0FBQXZFLElBQUE7VUFBQXFELFVBQUEsR0FFaUJILEdBQUcsQ0FBQ3NCLEtBQUssRUFBdkVsQixNQUFNLEdBQUFELFVBQUEsQ0FBTkMsTUFBTSxFQUFFQyxLQUFLLEdBQUFGLFVBQUEsQ0FBTEUsS0FBSyxFQUFFQyxLQUFLLEdBQUFILFVBQUEsQ0FBTEcsS0FBSyxFQUFFQyxRQUFRLEdBQUFKLFVBQUEsQ0FBUkksUUFBUSxFQUFFQyxLQUFLLEdBQUFMLFVBQUEsQ0FBTEssS0FBSyxFQUFFQyxLQUFLLEdBQUFOLFVBQUEsQ0FBTE0sS0FBSyxFQUFFQyxLQUFLLEdBQUFQLFVBQUEsQ0FBTE8sS0FBSyxFQUFFQyxJQUFJLEdBQUFSLFVBQUEsQ0FBSlEsSUFBSTtVQUUzREMsV0FBVyxHQUFHTixLQUFLLEdBQUc7WUFBRWlCLEtBQUssRUFBRTtjQUFFQyxPQUFPLEVBQUVsQixLQUFLLENBQUNtQixRQUFRLENBQUM7WUFBRTtVQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDbkVaLGNBQWMsR0FBR04sUUFBUSxHQUFHO1lBQUVBLFFBQVEsRUFBRUEsUUFBUSxDQUFDa0IsUUFBUSxDQUFDO1VBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUNsRVgsV0FBVyxHQUFHTixLQUFLLEdBQUc7WUFBRUEsS0FBSyxFQUFFQSxLQUFLLENBQUNpQixRQUFRLENBQUM7VUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ3REVixXQUFXLEdBQUdOLEtBQUssR0FBRztZQUFFaUIsTUFBTSxFQUFFO2NBQUVDLEdBQUcsRUFBRSxDQUFDbEIsS0FBSyxDQUFDZ0IsUUFBUSxDQUFDLENBQUM7WUFBRTtVQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDbEVULFdBQVcsR0FBR04sS0FBSyxHQUFHO1lBQUVBLEtBQUssRUFBRTtjQUFFa0IsSUFBSSxFQUFFQyxVQUFVLENBQUNuQixLQUFLLENBQUNlLFFBQVEsQ0FBQyxDQUFDO1lBQUU7VUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQzVFckQsTUFBcUMsR0FBQUcsYUFBQSxDQUFBQSxhQUFBLENBQUFBLGFBQUEsQ0FBQUEsYUFBQSxDQUFBQSxhQUFBLEtBQ3RDcUMsV0FBVyxHQUNYQyxjQUFjLEdBQ2RDLFdBQVcsR0FDWEMsV0FBVyxHQUNYQyxXQUFXO1VBRVpDLE1BQU0sR0FBRyxDQUFDLENBQUM7VUFBQUksUUFBQSxDQUFBUyxFQUFBLEdBQ1BuQixJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRWMsUUFBUSxDQUFDLENBQUM7VUFBQUosUUFBQSxDQUFBN0csSUFBQSxHQUFBNkcsUUFBQSxDQUFBUyxFQUFBLEtBQ2pCQyxvQkFBVyxDQUFDQyxTQUFTLFFBQUFYLFFBQUEsQ0FBQVMsRUFBQSxLQUdyQkMsb0JBQVcsQ0FBQ0UsU0FBUyxRQUFBWixRQUFBLENBQUFTLEVBQUEsS0FHckJDLG9CQUFXLENBQUNHLFFBQVEsUUFBQWIsUUFBQSxDQUFBUyxFQUFBLEtBR3BCQyxvQkFBVyxDQUFDSSxRQUFRO1VBQUE7UUFBQTtVQVJ2QmxCLE1BQU0sR0FBRztZQUFFUCxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQUVKLEtBQUssRUFBRTtVQUFFLENBQUM7VUFBQyxPQUFBZSxRQUFBLENBQUFwSCxNQUFBO1FBQUE7VUFHakNnSCxNQUFNLEdBQUc7WUFBRVAsS0FBSyxFQUFFLENBQUM7WUFBRUosS0FBSyxFQUFFO1VBQUUsQ0FBQztVQUFDLE9BQUFlLFFBQUEsQ0FBQXBILE1BQUE7UUFBQTtVQUdoQ2dILE1BQU0sR0FBRztZQUFFWCxLQUFLLEVBQUUsQ0FBQztVQUFFLENBQUM7VUFBQyxPQUFBZSxRQUFBLENBQUFwSCxNQUFBO1FBQUE7VUFHdkJnSCxNQUFNLEdBQUc7WUFBRVgsS0FBSyxFQUFFO1VBQUUsQ0FBQztVQUFDLE9BQUFlLFFBQUEsQ0FBQXBILE1BQUE7UUFBQTtVQUd0QmdILE1BQU0sR0FBRyxDQUFDLENBQUM7VUFBQyxPQUFBSSxRQUFBLENBQUFwSCxNQUFBO1FBQUE7VUFBQW9ILFFBQUEsQ0FBQTdHLElBQUE7VUFBQSxPQUlPNEgsbUJBQU8sQ0FBQ0MsSUFBSSxDQUFDakUsTUFBTSxDQUFDLENBQ3hDdUMsSUFBSSxDQUFDTSxNQUFNLENBQUMsQ0FDWnFCLElBQUksQ0FBQ0MsUUFBUSxFQUFBdEMsZ0JBQUEsR0FBQ0csTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVxQixRQUFRLENBQUMsQ0FBQyxjQUFBeEIsZ0JBQUEsY0FBQUEsZ0JBQUEsR0FBSSxHQUFHLENBQUMsQ0FBQyxDQUN6Q0ksS0FBSyxDQUFDa0MsUUFBUSxFQUFBckMsZUFBQSxHQUFDRyxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRW9CLFFBQVEsQ0FBQyxDQUFDLGNBQUF2QixlQUFBLGNBQUFBLGVBQUEsR0FBSSxHQUFHLENBQUMsQ0FBQztRQUFBO1VBSHRDZ0IsUUFBUSxHQUFBRyxRQUFBLENBQUF2SCxJQUFBO1VBS1JxSCxpQkFBaUIsR0FBR0QsUUFBUSxDQUFDc0IsR0FBRyxDQUFDLFVBQUNDLE9BQU87WUFBQSxPQUFLLElBQUFDLDhCQUFpQixFQUFDRCxPQUFPLENBQUM7VUFBQSxFQUFDO1VBQUEsT0FBQXBCLFFBQUEsQ0FBQXBILE1BQUEsV0FFeEVvRixHQUFHLENBQUNzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ3pCLGlCQUFpQixDQUFDO1FBQUE7VUFBQUUsUUFBQSxDQUFBdkUsSUFBQTtVQUFBdUUsUUFBQSxDQUFBd0IsRUFBQSxHQUFBeEIsUUFBQTtVQUFBLE9BQUFBLFFBQUEsQ0FBQXBILE1BQUEsV0FFdkNvRixHQUFHLENBQUNzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUF6QixRQUFBLENBQUF3QjtVQUFNLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBeEIsUUFBQSxDQUFBcEUsSUFBQTtNQUFBO0lBQUEsR0FBQThDLE9BQUE7RUFBQSxDQUVoRDtFQUFBLGdCQTlDS0YsY0FBY0EsQ0FBQWtELEVBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFsRCxJQUFBLENBQUF4QixLQUFBLE9BQUFHLFNBQUE7RUFBQTtBQUFBLEdBOENuQjtBQUVELElBQU13RSxtQkFBbUI7RUFBQSxJQUFBQyxLQUFBLEdBQUF2RCxpQkFBQSxlQUFBL0osbUJBQUEsR0FBQXFHLElBQUEsQ0FBRyxTQUFBa0gsU0FBT25ELEdBQVksRUFBRVgsR0FBYTtJQUFBLElBQUErRCxnQkFBQSxFQUFBL0MsS0FBQSxFQUFBZ0QsZ0JBQUEsRUFBQWxDLGlCQUFBO0lBQUEsT0FBQXZMLG1CQUFBLEdBQUFrQixJQUFBLFVBQUF3TSxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXpHLElBQUEsR0FBQXlHLFNBQUEsQ0FBQS9JLElBQUE7UUFBQTtVQUFBK0ksU0FBQSxDQUFBekcsSUFBQTtVQUVsRHVELEtBQUssR0FBS0wsR0FBRyxDQUFDc0IsS0FBSyxDQUFuQmpCLEtBQUs7VUFBQWtELFNBQUEsQ0FBQS9JLElBQUE7VUFBQSxPQUNrQjRILG1CQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQzFDMUIsSUFBSSxDQUFDO1lBQ0osYUFBYSxFQUFFLE1BQU07WUFDckIsb0JBQW9CLEVBQUUsTUFBTTtZQUM1QkQsS0FBSyxFQUFFO1VBQ1QsQ0FBQyxDQUFDLENBQ0RMLEtBQUssQ0FBQ2tDLFFBQVEsRUFBQWEsZ0JBQUEsR0FBQy9DLEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFb0IsUUFBUSxDQUFDLENBQUMsY0FBQTJCLGdCQUFBLGNBQUFBLGdCQUFBLEdBQUksR0FBRyxDQUFDLENBQUM7UUFBQTtVQU50Q0MsZ0JBQWdCLEdBQUFFLFNBQUEsQ0FBQXpKLElBQUE7VUFRaEJxSCxpQkFBaUIsR0FBR2tDLGdCQUFnQixDQUFDYixHQUFHLENBQUMsVUFBQ0MsT0FBTztZQUFBLE9BQUssSUFBQUMsOEJBQWlCLEVBQUNELE9BQU8sQ0FBQztVQUFBLEVBQUM7VUFBQSxPQUFBYyxTQUFBLENBQUF0SixNQUFBLFdBRWhGb0YsR0FBRyxDQUFDc0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUN6QixpQkFBaUIsQ0FBQztRQUFBO1VBQUFvQyxTQUFBLENBQUF6RyxJQUFBO1VBQUF5RyxTQUFBLENBQUF6QixFQUFBLEdBQUF5QixTQUFBO1VBQUEsT0FBQUEsU0FBQSxDQUFBdEosTUFBQSxXQUV2Q29GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBQVMsU0FBQSxDQUFBekI7VUFBTSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQXlCLFNBQUEsQ0FBQXRHLElBQUE7TUFBQTtJQUFBLEdBQUFrRyxRQUFBO0VBQUEsQ0FFaEQ7RUFBQSxnQkFqQktGLG1CQUFtQkEsQ0FBQU8sR0FBQSxFQUFBQyxHQUFBO0lBQUEsT0FBQVAsS0FBQSxDQUFBNUUsS0FBQSxPQUFBRyxTQUFBO0VBQUE7QUFBQSxHQWlCeEI7QUFFRCxJQUFNaUYsVUFBVTtFQUFBLElBQUFDLEtBQUEsR0FBQWhFLGlCQUFBLGVBQUEvSixtQkFBQSxHQUFBcUcsSUFBQSxDQUFHLFNBQUEySCxTQUFPNUQsR0FBWSxFQUFFWCxHQUFhO0lBQUEsSUFBQXdFLEdBQUEsRUFBQXBCLE9BQUE7SUFBQSxPQUFBN00sbUJBQUEsR0FBQWtCLElBQUEsVUFBQWdOLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBakgsSUFBQSxHQUFBaUgsU0FBQSxDQUFBdkosSUFBQTtRQUFBO1VBQUF1SixTQUFBLENBQUFqSCxJQUFBO1VBRTNDK0csR0FBRyxHQUFHN0QsR0FBRyxDQUFDZ0UsTUFBTSxDQUFDQyxFQUFFO1VBQUFGLFNBQUEsQ0FBQXZKLElBQUE7VUFBQSxPQUNINEgsbUJBQU8sQ0FBQzhCLFFBQVEsQ0FBQ0wsR0FBRyxDQUFDO1FBQUE7VUFBckNwQixPQUFPLEdBQUFzQixTQUFBLENBQUFqSyxJQUFBO1VBQUEsS0FDVDJJLE9BQU87WUFBQXNCLFNBQUEsQ0FBQXZKLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQXVKLFNBQUEsQ0FBQTlKLE1BQUEsV0FDRm9GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUFGLDhCQUFpQixFQUFDRCxPQUFPLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQXNCLFNBQUEsQ0FBQTlKLE1BQUEsV0FFaERvRixHQUFHLENBQUNzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUU7VUFBMEIsQ0FBQyxDQUFDO1FBQUE7VUFBQWlCLFNBQUEsQ0FBQXZKLElBQUE7VUFBQTtRQUFBO1VBQUF1SixTQUFBLENBQUFqSCxJQUFBO1VBQUFpSCxTQUFBLENBQUFqQyxFQUFBLEdBQUFpQyxTQUFBO1VBQUEsT0FBQUEsU0FBQSxDQUFBOUosTUFBQSxXQUc5RG9GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBQWlCLFNBQUEsQ0FBQWpDO1VBQU0sQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFpQyxTQUFBLENBQUE5RyxJQUFBO01BQUE7SUFBQSxHQUFBMkcsUUFBQTtFQUFBLENBRWhEO0VBQUEsZ0JBWktGLFVBQVVBLENBQUFTLEdBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFULEtBQUEsQ0FBQXJGLEtBQUEsT0FBQUcsU0FBQTtFQUFBO0FBQUEsR0FZZjtBQUVELElBQU00RixhQUFhO0VBQUEsSUFBQUMsS0FBQSxHQUFBM0UsaUJBQUEsZUFBQS9KLG1CQUFBLEdBQUFxRyxJQUFBLENBQUcsU0FBQXNJLFNBQU92RSxHQUFZLEVBQUVYLEdBQWE7SUFBQSxJQUFBbUYsU0FBQSxFQUFBQyxHQUFBLEVBQUFDLE9BQUEsRUFBQXBFLEtBQUEsRUFBQXFFLFdBQUEsRUFBQXBFLFFBQUEsRUFBQUMsS0FBQSxFQUFBRSxLQUFBLEVBQUFrRSxHQUFBLEVBQUFDLGdCQUFBLEVBQUFuRCxNQUFBLEVBQUFtQyxHQUFBLEVBQUFwQixPQUFBLEVBQUFxQyxZQUFBO0lBQUEsT0FBQWxQLG1CQUFBLEdBQUFrQixJQUFBLFVBQUFpTyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQWxJLElBQUEsR0FBQWtJLFNBQUEsQ0FBQXhLLElBQUE7UUFBQTtVQUFBd0ssU0FBQSxDQUFBbEksSUFBQTtVQUFBMEgsU0FBQSxHQWFuQ3hFLEdBQUcsQ0FBQ2lGLElBQUksRUFWdkJSLEdBQUcsR0FBQUQsU0FBQSxDQUFIQyxHQUFHLEVBQ0hDLE9BQU8sR0FBQUYsU0FBQSxDQUFQRSxPQUFPLEVBQ1BwRSxLQUFLLEdBQUFrRSxTQUFBLENBQUxsRSxLQUFLLEVBQ0xxRSxXQUFXLEdBQUFILFNBQUEsQ0FBWEcsV0FBVyxFQUNYcEUsUUFBUSxHQUFBaUUsU0FBQSxDQUFSakUsUUFBUSxFQUNSQyxLQUFLLEdBQUFnRSxTQUFBLENBQUxoRSxLQUFLLEVBQ0xFLEtBQUssR0FBQThELFNBQUEsQ0FBTDlELEtBQUssRUFDTGtFLEdBQUcsR0FBQUosU0FBQSxDQUFISSxHQUFHLEVBQ0hDLGdCQUFnQixHQUFBTCxTQUFBLENBQWhCSyxnQkFBZ0IsRUFDaEJuRCxNQUFNLEdBQUE4QyxTQUFBLENBQU45QyxNQUFNO1VBRUZtQyxHQUFHLEdBQUcsSUFBSXFCLG9CQUFRLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUM7VUFDbkMzQyxPQUFPLEdBQUcsSUFBSUwsbUJBQU8sQ0FBQztZQUMxQnlCLEdBQUcsRUFBSEEsR0FBRztZQUNIWSxHQUFHLEVBQUhBLEdBQUc7WUFDSEMsT0FBTyxFQUFQQSxPQUFPO1lBQ1BwRSxLQUFLLEVBQUxBLEtBQUs7WUFDTHFFLFdBQVcsRUFBWEEsV0FBVztZQUNYcEUsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLEtBQUssRUFBTEEsS0FBSztZQUNMRSxLQUFLLEVBQUxBLEtBQUs7WUFDTGtFLEdBQUcsRUFBSEEsR0FBRztZQUNIQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtZQUNoQm5ELE1BQU0sRUFBTkE7VUFDRixDQUFDLENBQUM7VUFBQXNELFNBQUEsQ0FBQXhLLElBQUE7VUFBQSxPQUN5QmlJLE9BQU8sQ0FBQzRDLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFBbkNQLFlBQVksR0FBQUUsU0FBQSxDQUFBbEwsSUFBQTtVQUFBLEtBQ2RnTCxZQUFZO1lBQUFFLFNBQUEsQ0FBQXhLLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQXdLLFNBQUEsQ0FBQS9LLE1BQUEsV0FDUG9GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUFGLDhCQUFpQixFQUFDb0MsWUFBWSxDQUFDLENBQUM7UUFBQTtVQUFBLE9BQUFFLFNBQUEsQ0FBQS9LLE1BQUEsV0FFckRvRixHQUFHLENBQUNzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUU7VUFBaUMsQ0FBQyxDQUFDO1FBQUE7VUFBQWtDLFNBQUEsQ0FBQXhLLElBQUE7VUFBQTtRQUFBO1VBQUF3SyxTQUFBLENBQUFsSSxJQUFBO1VBQUFrSSxTQUFBLENBQUFsRCxFQUFBLEdBQUFrRCxTQUFBO1VBQUEsT0FBQUEsU0FBQSxDQUFBL0ssTUFBQSxXQUdyRW9GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBQWtDLFNBQUEsQ0FBQWxEO1VBQU0sQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFrRCxTQUFBLENBQUEvSCxJQUFBO01BQUE7SUFBQSxHQUFBc0gsUUFBQTtFQUFBLENBRWhEO0VBQUEsZ0JBckNLRixhQUFhQSxDQUFBaUIsR0FBQSxFQUFBQyxHQUFBO0lBQUEsT0FBQWpCLEtBQUEsQ0FBQWhHLEtBQUEsT0FBQUcsU0FBQTtFQUFBO0FBQUEsR0FxQ2xCO0FBRUQsSUFBTStHLGFBQWE7RUFBQSxJQUFBQyxLQUFBLEdBQUE5RixpQkFBQSxlQUFBL0osbUJBQUEsR0FBQXFHLElBQUEsQ0FBRyxTQUFBeUosU0FBTzFGLEdBQVksRUFBRVgsR0FBYTtJQUFBLElBQUF3RSxHQUFBLEVBQUE4QixVQUFBLEVBQUFsQixHQUFBLEVBQUFDLE9BQUEsRUFBQXBFLEtBQUEsRUFBQXFFLFdBQUEsRUFBQXBFLFFBQUEsRUFBQUMsS0FBQSxFQUFBRSxLQUFBLEVBQUFrRSxHQUFBLEVBQUFDLGdCQUFBLEVBQUFuRCxNQUFBLEVBQUFrRSxjQUFBO0lBQUEsT0FBQWhRLG1CQUFBLEdBQUFrQixJQUFBLFVBQUErTyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQWhKLElBQUEsR0FBQWdKLFNBQUEsQ0FBQXRMLElBQUE7UUFBQTtVQUFBc0wsU0FBQSxDQUFBaEosSUFBQTtVQUU5QytHLEdBQUcsR0FBRzdELEdBQUcsQ0FBQ2dFLE1BQU0sQ0FBQ0MsRUFBRTtVQUFBMEIsVUFBQSxHQVlSM0YsR0FBRyxDQUFDaUYsSUFBSSxFQVZ2QlIsR0FBRyxHQUFBa0IsVUFBQSxDQUFIbEIsR0FBRyxFQUNIQyxPQUFPLEdBQUFpQixVQUFBLENBQVBqQixPQUFPLEVBQ1BwRSxLQUFLLEdBQUFxRixVQUFBLENBQUxyRixLQUFLLEVBQ0xxRSxXQUFXLEdBQUFnQixVQUFBLENBQVhoQixXQUFXLEVBQ1hwRSxRQUFRLEdBQUFvRixVQUFBLENBQVJwRixRQUFRLEVBQ1JDLEtBQUssR0FBQW1GLFVBQUEsQ0FBTG5GLEtBQUssRUFDTEUsS0FBSyxHQUFBaUYsVUFBQSxDQUFMakYsS0FBSyxFQUNMa0UsR0FBRyxHQUFBZSxVQUFBLENBQUhmLEdBQUcsRUFDSEMsZ0JBQWdCLEdBQUFjLFVBQUEsQ0FBaEJkLGdCQUFnQixFQUNoQm5ELE1BQU0sR0FBQWlFLFVBQUEsQ0FBTmpFLE1BQU07VUFBQW9FLFNBQUEsQ0FBQXRMLElBQUE7VUFBQSxPQUdxQjRILG1CQUFPLENBQUMyRCxnQkFBZ0IsQ0FDbkQ7WUFBRWxDLEdBQUcsRUFBSEE7VUFBSSxDQUFDLEVBQ1A7WUFDRW1DLElBQUksRUFBRTtjQUNKdkIsR0FBRyxFQUFIQSxHQUFHO2NBQ0hDLE9BQU8sRUFBUEEsT0FBTztjQUNQcEUsS0FBSyxFQUFMQSxLQUFLO2NBQ0xxRSxXQUFXLEVBQVhBLFdBQVc7Y0FDWHBFLFFBQVEsRUFBUkEsUUFBUTtjQUNSQyxLQUFLLEVBQUxBLEtBQUs7Y0FDTEUsS0FBSyxFQUFMQSxLQUFLO2NBQ0xrRSxHQUFHLEVBQUhBLEdBQUc7Y0FDSEMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7Y0FDaEJuRCxNQUFNLEVBQU5BO1lBQ0Y7VUFDRixDQUFDLEVBQ0Q7WUFBRSxPQUFLO1VBQUssQ0FDZCxDQUFDO1FBQUE7VUFqQktrRSxjQUFjLEdBQUFFLFNBQUEsQ0FBQWhNLElBQUE7VUFBQSxJQWtCZjhMLGNBQWM7WUFBQUUsU0FBQSxDQUFBdEwsSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBc0wsU0FBQSxDQUFBN0wsTUFBQSxXQUFTb0YsR0FBRyxDQUFDc0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFFO1VBQWlDLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQWdELFNBQUEsQ0FBQTdMLE1BQUEsV0FDeEZvRixHQUFHLENBQUNzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFBRiw4QkFBaUIsRUFBQ2tELGNBQWMsQ0FBQyxDQUFDO1FBQUE7VUFBQUUsU0FBQSxDQUFBaEosSUFBQTtVQUFBZ0osU0FBQSxDQUFBaEUsRUFBQSxHQUFBZ0UsU0FBQTtVQUFBLE9BQUFBLFNBQUEsQ0FBQTdMLE1BQUEsV0FFdkRvRixHQUFHLENBQUNzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUFnRCxTQUFBLENBQUFoRTtVQUFNLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBZ0UsU0FBQSxDQUFBN0ksSUFBQTtNQUFBO0lBQUEsR0FBQXlJLFFBQUE7RUFBQSxDQUVoRDtFQUFBLGdCQXZDS0YsYUFBYUEsQ0FBQVMsR0FBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQVQsS0FBQSxDQUFBbkgsS0FBQSxPQUFBRyxTQUFBO0VBQUE7QUFBQSxHQXVDbEI7QUFFRCxJQUFNMEgsYUFBYTtFQUFBLElBQUFDLEtBQUEsR0FBQXpHLGlCQUFBLGVBQUEvSixtQkFBQSxHQUFBcUcsSUFBQSxDQUFHLFNBQUFvSyxTQUFPckcsR0FBWSxFQUFFWCxHQUFhO0lBQUEsSUFBQXdFLEdBQUE7SUFBQSxPQUFBak8sbUJBQUEsR0FBQWtCLElBQUEsVUFBQXdQLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBekosSUFBQSxHQUFBeUosU0FBQSxDQUFBL0wsSUFBQTtRQUFBO1VBQUErTCxTQUFBLENBQUF6SixJQUFBO1VBRTlDK0csR0FBRyxHQUFHN0QsR0FBRyxDQUFDZ0UsTUFBTSxDQUFDQyxFQUFFO1VBQUFzQyxTQUFBLENBQUEvTCxJQUFBO1VBQUEsT0FDbkI0SCxtQkFBTyxDQUFDb0UsU0FBUyxDQUFDO1lBQUUzQyxHQUFHLEVBQUhBO1VBQUksQ0FBQyxDQUFDO1FBQUE7VUFBQSxPQUFBMEMsU0FBQSxDQUFBdE0sTUFBQSxXQUV6Qm9GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUU2RCxPQUFPLEVBQUU7VUFBSyxDQUFDLENBQUM7UUFBQTtVQUFBRixTQUFBLENBQUF6SixJQUFBO1VBQUF5SixTQUFBLENBQUF6RSxFQUFBLEdBQUF5RSxTQUFBO1VBQUEsT0FBQUEsU0FBQSxDQUFBdE0sTUFBQSxXQUV2Q29GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBQXlELFNBQUEsQ0FBQXpFO1VBQU0sQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUF5RSxTQUFBLENBQUF0SixJQUFBO01BQUE7SUFBQSxHQUFBb0osUUFBQTtFQUFBLENBRWhEO0VBQUEsZ0JBVEtGLGFBQWFBLENBQUFPLElBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFQLEtBQUEsQ0FBQTlILEtBQUEsT0FBQUcsU0FBQTtFQUFBO0FBQUEsR0FTbEI7QUFFRCxJQUFNbUksYUFBYTtFQUFBLElBQUFDLEtBQUEsR0FBQWxILGlCQUFBLGVBQUEvSixtQkFBQSxHQUFBcUcsSUFBQSxDQUFHLFNBQUE2SyxTQUFPOUcsR0FBWSxFQUFFWCxHQUFhO0lBQUEsSUFBQXdFLEdBQUEsRUFBQWtELFVBQUEsRUFBQUMsVUFBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQXpHLEtBQUEsRUFBQTBHLElBQUEsRUFBQUMsUUFBQSxFQUFBQyxZQUFBLEVBQUE1RSxPQUFBLEVBQUE2RSxlQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFNBQUEsRUFBQTVCLGNBQUE7SUFBQSxPQUFBaFEsbUJBQUEsR0FBQWtCLElBQUEsVUFBQTJRLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBNUssSUFBQSxHQUFBNEssU0FBQSxDQUFBbE4sSUFBQTtRQUFBO1VBQUFrTixTQUFBLENBQUE1SyxJQUFBO1VBRTlDK0csR0FBRyxHQUFHLElBQUE4RCxtQkFBWSxFQUFDM0gsR0FBRyxDQUFDO1VBQ3ZCK0csVUFBVSxHQUFHL0csR0FBRyxDQUFDZ0UsTUFBTSxDQUFDQyxFQUFFO1VBQUErQyxVQUFBLEdBQzJCaEgsR0FBRyxDQUFDaUYsSUFBSSxFQUEzRGdDLElBQUksR0FBQUQsVUFBQSxDQUFKQyxJQUFJLEVBQUVDLFdBQVcsR0FBQUYsVUFBQSxDQUFYRSxXQUFXLEVBQUV6RyxLQUFLLEdBQUF1RyxVQUFBLENBQUx2RyxLQUFLO1VBQUFpSCxTQUFBLENBQUFsTixJQUFBO1VBQUEsT0FFYm9OLGdCQUFJLENBQUMxRCxRQUFRLENBQUNMLEdBQUcsQ0FBQztRQUFBO1VBQS9Cc0QsSUFBSSxHQUFBTyxTQUFBLENBQUE1TixJQUFBO1VBQUE0TixTQUFBLENBQUFsTixJQUFBO1VBQUEsT0FDYXFOLG9CQUFRLENBQUMzRCxRQUFRLENBQUNnRCxXQUFXLENBQUM7UUFBQTtVQUEvQ0UsUUFBUSxHQUFBTSxTQUFBLENBQUE1TixJQUFBO1VBQUEsTUFDVnNOLFFBQVEsSUFBSUQsSUFBSTtZQUFBTyxTQUFBLENBQUFsTixJQUFBO1lBQUE7VUFBQTtVQUNaNk0sWUFBWSxHQUFHRCxRQUFRLENBQUNsRyxRQUFRLENBQUM0RyxTQUFTLENBQzlDLFVBQUNDLElBQUk7WUFBQSxPQUFLQSxJQUFJLENBQUNoQixVQUFVLEtBQUtBLFVBQVUsSUFBSWdCLElBQUksQ0FBQ3RILEtBQUssS0FBS0EsS0FBSztVQUFBLENBQ2xFLENBQUM7VUFBQSxNQUNHNEcsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUFBSyxTQUFBLENBQUFsTixJQUFBO1lBQUE7VUFBQTtVQUNuQjRNLFFBQVEsQ0FBQ2xHLFFBQVEsQ0FBQ21HLFlBQVksQ0FBQyxDQUFDVyxNQUFNLEdBQUdmLElBQUk7VUFBQ1MsU0FBQSxDQUFBbE4sSUFBQTtVQUFBLE9BQ3hDNE0sUUFBUSxDQUFDL0IsSUFBSSxDQUFDLENBQUM7UUFBQTtVQUFBcUMsU0FBQSxDQUFBbE4sSUFBQTtVQUFBLE9BQ0M0SCxtQkFBTyxDQUFDOEIsUUFBUSxDQUFDNkMsVUFBVSxDQUFDO1FBQUE7VUFBNUN0RSxPQUFPLEdBQUFpRixTQUFBLENBQUE1TixJQUFBO1VBQUEsS0FDVDJJLE9BQU87WUFBQWlGLFNBQUEsQ0FBQWxOLElBQUE7WUFBQTtVQUFBO1VBQ0hnTixTQUFxQixHQUFHO1lBQzVCUCxJQUFJLEVBQUUsQ0FBQUssZUFBQSxHQUFBN0UsT0FBTyxDQUFDdUYsTUFBTSxjQUFBVixlQUFBLGVBQWRBLGVBQUEsQ0FBZ0JMLElBQUksR0FDdEIsQ0FBQ3hFLE9BQU8sQ0FBQ3VGLE1BQU0sQ0FBQ2YsSUFBSSxHQUFHeEUsT0FBTyxDQUFDdUYsTUFBTSxDQUFDQyxXQUFXLEdBQUdoQixJQUFJLEtBQ3ZEeEUsT0FBTyxDQUFDdUYsTUFBTSxDQUFDQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQ2hDaEIsSUFBSTtZQUNSZ0IsV0FBVyxFQUFFLENBQUFWLGdCQUFBLEdBQUE5RSxPQUFPLENBQUN1RixNQUFNLGNBQUFULGdCQUFBLGVBQWRBLGdCQUFBLENBQWdCVSxXQUFXLEdBQUd4RixPQUFPLENBQUN1RixNQUFNLENBQUNDLFdBQVcsR0FBRyxDQUFDLEdBQUc7VUFDOUUsQ0FBQztVQUFBUCxTQUFBLENBQUFsTixJQUFBO1VBQUEsT0FFNEI0SCxtQkFBTyxDQUFDMkQsZ0JBQWdCLENBQ25EO1lBQUVsQyxHQUFHLEVBQUVrRDtVQUFXLENBQUMsRUFDbkI7WUFDRW1CLFNBQVMsRUFBRTtjQUNUQyxNQUFNLEVBQUU7Z0JBQ05DLE9BQU8sRUFBRWpCLElBQUksQ0FBQ3RELEdBQUc7Z0JBQ2pCN0gsSUFBSSxFQUFFbUwsSUFBSSxDQUFDa0IsUUFBUTtnQkFDbkJDLEtBQUssRUFBRW5CLElBQUksQ0FBQ21CLEtBQUs7Z0JBQ2pCQyxLQUFLLEVBQUVwQixJQUFJLENBQUM3TSxJQUFJLENBQUNpTztjQUNuQjtZQUNGLENBQUM7WUFFRHZDLElBQUksRUFBRTtjQUNKZ0MsTUFBTSxFQUFFUjtZQUNWO1VBQ0YsQ0FBQyxFQUNEO1lBQUUsT0FBSztVQUFLLENBQ2QsQ0FBQztRQUFBO1VBakJLNUIsY0FBYyxHQUFBOEIsU0FBQSxDQUFBNU4sSUFBQTtVQUFBLElBa0JmOEwsY0FBYztZQUFBOEIsU0FBQSxDQUFBbE4sSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBa04sU0FBQSxDQUFBek4sTUFBQSxXQUNWb0YsR0FBRyxDQUFDc0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFFO1VBQWlDLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQTRFLFNBQUEsQ0FBQXpOLE1BQUEsV0FFckVvRixHQUFHLENBQUNzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFNkQsT0FBTyxFQUFFO1VBQUssQ0FBQyxDQUFDO1FBQUE7VUFBQSxPQUFBaUIsU0FBQSxDQUFBek4sTUFBQSxXQUV2Q29GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBRTtVQUFpQyxDQUFDLENBQUM7UUFBQTtVQUFBNEUsU0FBQSxDQUFBbE4sSUFBQTtVQUFBO1FBQUE7VUFBQSxPQUFBa04sU0FBQSxDQUFBek4sTUFBQSxXQUdyRW9GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBRTtVQUEwQixDQUFDLENBQUM7UUFBQTtVQUFBNEUsU0FBQSxDQUFBbE4sSUFBQTtVQUFBO1FBQUE7VUFBQSxPQUFBa04sU0FBQSxDQUFBek4sTUFBQSxXQUc5RG9GLEdBQUcsQ0FBQ3NELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBRTtVQUEyQixDQUFDLENBQUM7UUFBQTtVQUFBNEUsU0FBQSxDQUFBbE4sSUFBQTtVQUFBO1FBQUE7VUFBQWtOLFNBQUEsQ0FBQTVLLElBQUE7VUFBQTRLLFNBQUEsQ0FBQTVGLEVBQUEsR0FBQTRGLFNBQUE7VUFBQSxPQUFBQSxTQUFBLENBQUF6TixNQUFBLFdBRy9Eb0YsR0FBRyxDQUFDc0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsT0FBTyxFQUFBNEUsU0FBQSxDQUFBNUY7VUFBTSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQTRGLFNBQUEsQ0FBQXpLLElBQUE7TUFBQTtJQUFBLEdBQUE2SixRQUFBO0VBQUEsQ0FFaEQ7RUFBQSxnQkEzREtGLGFBQWFBLENBQUE0QixJQUFBLEVBQUFDLElBQUE7SUFBQSxPQUFBNUIsS0FBQSxDQUFBdkksS0FBQSxPQUFBRyxTQUFBO0VBQUE7QUFBQSxHQTJEbEI7QUFFRCxJQUFNaUssaUJBQWlCO0VBQUEsSUFBQUMsS0FBQSxHQUFBaEosaUJBQUEsZUFBQS9KLG1CQUFBLEdBQUFxRyxJQUFBLENBQUcsU0FBQTJNLFNBQU81SSxHQUFZLEVBQUVYLEdBQWE7SUFBQSxJQUFBd0osaUJBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsV0FBQSxFQUFBM0ksTUFBQSxFQUFBQyxLQUFBLEVBQUEySSxNQUFBLEVBQUFDLFlBQUEsRUFBQTdLLE1BQUEsRUFBQThDLFFBQUEsRUFBQWdJLEtBQUEsRUFBQS9ILGlCQUFBO0lBQUEsT0FBQXZMLG1CQUFBLEdBQUFrQixJQUFBLFVBQUFxUyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXRNLElBQUEsR0FBQXNNLFNBQUEsQ0FBQTVPLElBQUE7UUFBQTtVQUFBNE8sU0FBQSxDQUFBdE0sSUFBQTtVQUFBaU0sV0FBQSxHQUV0Qi9JLEdBQUcsQ0FBQ3NCLEtBQUssRUFBbkNsQixNQUFNLEdBQUEySSxXQUFBLENBQU4zSSxNQUFNLEVBQUVDLEtBQUssR0FBQTBJLFdBQUEsQ0FBTDFJLEtBQUssRUFBRTJJLE1BQU0sR0FBQUQsV0FBQSxDQUFOQyxNQUFNO1VBQ3ZCQyxZQUFZLEdBQUdELE1BQU0sR0FBRztZQUFFekgsS0FBSyxFQUFFO2NBQUVDLE9BQU8sRUFBRXdILE1BQU0sQ0FBQ3ZILFFBQVEsQ0FBQztZQUFFO1VBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUN0RXJELE1BQXFDLEdBQUFHLGFBQUEsS0FDdEMwSyxZQUFZO1VBQUFHLFNBQUEsQ0FBQTVPLElBQUE7VUFBQSxPQUdNNEgsbUJBQU8sQ0FBQ0MsSUFBSSxDQUFDakUsTUFBTSxDQUFDLENBQ3hDa0UsSUFBSSxDQUFDQyxRQUFRLEVBQUFzRyxpQkFBQSxHQUFDekksTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVxQixRQUFRLENBQUMsQ0FBQyxjQUFBb0gsaUJBQUEsY0FBQUEsaUJBQUEsR0FBSSxHQUFHLENBQUMsQ0FBQyxDQUN6Q3hJLEtBQUssQ0FBQ2tDLFFBQVEsRUFBQXVHLGdCQUFBLEdBQUN6SSxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRW9CLFFBQVEsQ0FBQyxDQUFDLGNBQUFxSCxnQkFBQSxjQUFBQSxnQkFBQSxHQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQUE7VUFGdEM1SCxRQUFRLEdBQUFrSSxTQUFBLENBQUF0UCxJQUFBO1VBQUFzUCxTQUFBLENBQUE1TyxJQUFBO1VBQUEsT0FHTTRILG1CQUFPLENBQUNDLElBQUksQ0FBQ2pFLE1BQU0sQ0FBQyxDQUFDaUwsS0FBSyxDQUFDLENBQUM7UUFBQTtVQUExQ0gsS0FBSyxHQUFBRSxTQUFBLENBQUF0UCxJQUFBO1VBQ0xxSCxpQkFBaUIsR0FBR0QsUUFBUSxDQUFDc0IsR0FBRyxDQUFDLFVBQUNDLE9BQU87WUFBQSxPQUFLLElBQUFDLDhCQUFpQixFQUFDRCxPQUFPLENBQUM7VUFBQSxFQUFDO1VBQUEsT0FBQTJHLFNBQUEsQ0FBQW5QLE1BQUEsV0FFeEVvRixHQUFHLENBQUNzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQjBHLElBQUksRUFBRW5JLGlCQUFpQjtZQUN2QitILEtBQUssRUFBTEE7VUFDRixDQUErQixDQUFDO1FBQUE7VUFBQUUsU0FBQSxDQUFBdE0sSUFBQTtVQUFBc00sU0FBQSxDQUFBdEgsRUFBQSxHQUFBc0gsU0FBQTtVQUFBLE9BQUFBLFNBQUEsQ0FBQW5QLE1BQUEsV0FFekJvRixHQUFHLENBQUNzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUFzRyxTQUFBLENBQUF0SDtVQUFNLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBc0gsU0FBQSxDQUFBbk0sSUFBQTtNQUFBO0lBQUEsR0FBQTJMLFFBQUE7RUFBQSxDQUVoRDtFQUFBLGdCQXJCS0YsaUJBQWlCQSxDQUFBYSxJQUFBLEVBQUFDLElBQUE7SUFBQSxPQUFBYixLQUFBLENBQUFySyxLQUFBLE9BQUFHLFNBQUE7RUFBQTtBQUFBLEdBcUJ0QjtBQUFDLElBQUFnTCxRQUFBLEdBRWE7RUFDYnhHLG1CQUFtQixFQUFuQkEsbUJBQW1CO0VBQ25CcEQsY0FBYyxFQUFkQSxjQUFjO0VBQ2Q2RCxVQUFVLEVBQVZBLFVBQVU7RUFDVlcsYUFBYSxFQUFiQSxhQUFhO0VBQ2JtQixhQUFhLEVBQWJBLGFBQWE7RUFDYlcsYUFBYSxFQUFiQSxhQUFhO0VBQ2JTLGFBQWEsRUFBYkEsYUFBYTtFQUNiOEIsaUJBQWlCLEVBQWpCQTtBQUNGLENBQUM7QUFBQTdTLE9BQUEsY0FBQTRULFFBQUEifQ==