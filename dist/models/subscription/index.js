"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
/*********************TYPE & INTERFACE*****************************/

/*******************************SCHEMA*****************************/
var subscriptionSchema = new _mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phone: String,
  name: String,
  address: String
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Subscription', subscriptionSchema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJyZXF1aXJlIiwic3Vic2NyaXB0aW9uU2NoZW1hIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwaG9uZSIsIm5hbWUiLCJhZGRyZXNzIiwidGltZXN0YW1wcyIsIl9kZWZhdWx0IiwibW9kZWwiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9zdWJzY3JpcHRpb24vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZWwsIFNjaGVtYSwgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XG5cbi8qKioqKioqKioqKioqKioqKioqKipUWVBFICYgSU5URVJGQUNFKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgdHlwZSBTdWJzY3JpcHRpb25UeXBlID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvblJlc3BvbnNlID0gU3Vic2NyaXB0aW9uVHlwZSAmIHtcbiAgX2lkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBTdWJzY3JpcHRpb25Nb2RlbCA9IFN1YnNjcmlwdGlvblR5cGUgJiBEb2N1bWVudDtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipTQ0hFTUEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IHN1YnNjcmlwdGlvblNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcGhvbmU6IFN0cmluZyxcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgYWRkcmVzczogU3RyaW5nXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RlbDxTdWJzY3JpcHRpb25Nb2RlbD4oJ1N1YnNjcmlwdGlvbicsIHN1YnNjcmlwdGlvblNjaGVtYSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtBQUVBOztBQWNBO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsSUFBSUMsZ0JBQU0sQ0FDbkM7RUFDRUMsS0FBSyxFQUFFO0lBQUVDLElBQUksRUFBRUMsTUFBTTtJQUFFQyxRQUFRLEVBQUU7RUFBSyxDQUFDO0VBQ3ZDQyxLQUFLLEVBQUVGLE1BQU07RUFDYkcsSUFBSSxFQUFFSCxNQUFNO0VBQ1pJLE9BQU8sRUFBRUo7QUFDWCxDQUFDLEVBQ0Q7RUFBRUssVUFBVSxFQUFFO0FBQUssQ0FDckIsQ0FBQztBQUFDLElBQUFDLFFBQUEsR0FFYSxJQUFBQyxlQUFLLEVBQW9CLGNBQWMsRUFBRVgsa0JBQWtCLENBQUM7QUFBQVksT0FBQSxjQUFBRixRQUFBIn0=