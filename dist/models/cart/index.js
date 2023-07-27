"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductCart = void 0;
/*********************TYPE & INTERFACE*****************************/

/*******************************SCHEMA*****************************/
var ProductCart = {
  product_id: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
};
exports.ProductCart = ProductCart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9kdWN0Q2FydCIsInByb2R1Y3RfaWQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJpbWciLCJ0aXRsZSIsInByaWNlIiwiTnVtYmVyIiwiY29sb3IiLCJxdWFudGl0eSIsImJyYW5kIiwiY2F0ZWdvcnkiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9jYXJ0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKipUWVBFICYgSU5URVJGQUNFKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgdHlwZSBQcm9kdWN0Q2FydFR5cGUgPSB7XG4gIHByb2R1Y3RfaWQ6IHN0cmluZztcbiAgaW1nOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHF1YW50aXR5OiBudW1iZXI7XG4gIGJyYW5kOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlNDSEVNQSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGNvbnN0IFByb2R1Y3RDYXJ0ID0ge1xuICBwcm9kdWN0X2lkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgaW1nOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGNvbG9yOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgcXVhbnRpdHk6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBicmFuZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBWUE7QUFDTyxJQUFNQSxXQUFXLEdBQUc7RUFDekJDLFVBQVUsRUFBRTtJQUFFQyxJQUFJLEVBQUVDLE1BQU07SUFBRUMsUUFBUSxFQUFFO0VBQUssQ0FBQztFQUM1Q0MsR0FBRyxFQUFFO0lBQUVILElBQUksRUFBRUMsTUFBTTtJQUFFQyxRQUFRLEVBQUU7RUFBSyxDQUFDO0VBQ3JDRSxLQUFLLEVBQUU7SUFBRUosSUFBSSxFQUFFQyxNQUFNO0lBQUVDLFFBQVEsRUFBRTtFQUFLLENBQUM7RUFDdkNHLEtBQUssRUFBRTtJQUFFTCxJQUFJLEVBQUVNLE1BQU07SUFBRUosUUFBUSxFQUFFO0VBQUssQ0FBQztFQUN2Q0ssS0FBSyxFQUFFO0lBQUVQLElBQUksRUFBRUMsTUFBTTtJQUFFQyxRQUFRLEVBQUU7RUFBSyxDQUFDO0VBQ3ZDTSxRQUFRLEVBQUU7SUFBRVIsSUFBSSxFQUFFTSxNQUFNO0lBQUVKLFFBQVEsRUFBRTtFQUFLLENBQUM7RUFDMUNPLEtBQUssRUFBRTtJQUFFVCxJQUFJLEVBQUVDLE1BQU07SUFBRUMsUUFBUSxFQUFFO0VBQUssQ0FBQztFQUN2Q1EsUUFBUSxFQUFFO0lBQUVWLElBQUksRUFBRUMsTUFBTTtJQUFFQyxRQUFRLEVBQUU7RUFBSztBQUMzQyxDQUFDO0FBQUNTLE9BQUEsQ0FBQWIsV0FBQSxHQUFBQSxXQUFBIn0=