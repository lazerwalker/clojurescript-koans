// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utilities to check the preconditions, postconditions and
 * invariants runtime.
 *
 * Methods in this package should be given special treatment by the compiler
 * for type-inference. For example, <code>replgoog.asserts.assert(foo)</code>
 * will restrict <code>foo</code> to a truthy value.
 *
 * The compiler has an option to disable asserts. So code like:
 * <code>
 * var x = replgoog.asserts.assert(foo()); replgoog.asserts.assert(bar());
 * </code>
 * will be transformed into:
 * <code>
 * var x = foo();
 * </code>
 * The compiler will leave in foo() (because its return value is used),
 * but it will remove bar() because it assumes it does not have side-effects.
 *
 */

replgoog.provide('replgoog.asserts');
replgoog.provide('replgoog.asserts.AssertionError');

replgoog.require('replgoog.debug.Error');
replgoog.require('replgoog.string');


/**
 * @define {boolean} Whether to strip out asserts or to leave them in.
 */
replgoog.asserts.ENABLE_ASSERTS = replgoog.DEBUG;



/**
 * Error object for failed assertions.
 * @param {string} messagePattern The pattern that was used to form message.
 * @param {!Array.<*>} messageArgs The items to substitute into the pattern.
 * @constructor
 * @extends {replgoog.debug.Error}
 */
replgoog.asserts.AssertionError = function(messagePattern, messageArgs) {
  messageArgs.unshift(messagePattern);
  replgoog.debug.Error.call(this, replgoog.string.subs.apply(null, messageArgs));
  // Remove the messagePattern afterwards to avoid permenantly modifying the
  // passed in array.
  messageArgs.shift();

  /**
   * The message pattern used to format the error message. Error handlers can
   * use this to uniquely identify the assertion.
   * @type {string}
   */
  this.messagePattern = messagePattern;
};
replgoog.inherits(replgoog.asserts.AssertionError, replgoog.debug.Error);


/** @override */
replgoog.asserts.AssertionError.prototype.name = 'AssertionError';


/**
 * Throws an exception with the given message and "Assertion failed" prefixed
 * onto it.
 * @param {string} defaultMessage The message to use if givenMessage is empty.
 * @param {Array.<*>} defaultArgs The substitution arguments for defaultMessage.
 * @param {string|undefined} givenMessage Message supplied by the caller.
 * @param {Array.<*>} givenArgs The substitution arguments for givenMessage.
 * @throws {replgoog.asserts.AssertionError} When the value is not a number.
 * @private
 */
replgoog.asserts.doAssertFailure_ =
    function(defaultMessage, defaultArgs, givenMessage, givenArgs) {
  var message = 'Assertion failed';
  if (givenMessage) {
    message += ': ' + givenMessage;
    var args = givenArgs;
  } else if (defaultMessage) {
    message += ': ' + defaultMessage;
    args = defaultArgs;
  }
  // The '' + works around an Opera 10 bug in the unit tests. Without it,
  // a stack trace is added to var message above. With this, a stack trace is
  // not added until this line (it causes the extra garbage to be added after
  // the assertion message instead of in the middle of it).
  throw new replgoog.asserts.AssertionError('' + message, args || []);
};


/**
 * Checks if the condition evaluates to true if replgoog.asserts.ENABLE_ASSERTS is
 * true.
 * @param {*} condition The condition to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {*} The value of the condition.
 * @throws {replgoog.asserts.AssertionError} When the condition evaluates to false.
 */
replgoog.asserts.assert = function(condition, opt_message, var_args) {
  if (replgoog.asserts.ENABLE_ASSERTS && !condition) {
    replgoog.asserts.doAssertFailure_('', null, opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return condition;
};


/**
 * Fails if replgoog.asserts.ENABLE_ASSERTS is true. This function is useful in case
 * when we want to add a check in the unreachable area like switch-case
 * statement:
 *
 * <pre>
 *  switch(type) {
 *    case FOO: doSomething(); break;
 *    case BAR: doSomethingElse(); break;
 *    default: replgoog.assert.fail('Unrecognized type: ' + type);
 *      // We have only 2 types - "default:" section is unreachable code.
 *  }
 * </pre>
 *
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @throws {replgoog.asserts.AssertionError} Failure.
 */
replgoog.asserts.fail = function(opt_message, var_args) {
  if (replgoog.asserts.ENABLE_ASSERTS) {
    throw new replgoog.asserts.AssertionError(
        'Failure' + (opt_message ? ': ' + opt_message : ''),
        Array.prototype.slice.call(arguments, 1));
  }
};


/**
 * Checks if the value is a number if replgoog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {number} The value, guaranteed to be a number when asserts enabled.
 * @throws {replgoog.asserts.AssertionError} When the value is not a number.
 */
replgoog.asserts.assertNumber = function(value, opt_message, var_args) {
  if (replgoog.asserts.ENABLE_ASSERTS && !replgoog.isNumber(value)) {
    replgoog.asserts.doAssertFailure_('Expected number but got %s: %s.',
        [replgoog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {number} */ (value);
};


/**
 * Checks if the value is a string if replgoog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {string} The value, guaranteed to be a string when asserts enabled.
 * @throws {replgoog.asserts.AssertionError} When the value is not a string.
 */
replgoog.asserts.assertString = function(value, opt_message, var_args) {
  if (replgoog.asserts.ENABLE_ASSERTS && !replgoog.isString(value)) {
    replgoog.asserts.doAssertFailure_('Expected string but got %s: %s.',
        [replgoog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {string} */ (value);
};


/**
 * Checks if the value is a function if replgoog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {!Function} The value, guaranteed to be a function when asserts
 *     enabled.
 * @throws {replgoog.asserts.AssertionError} When the value is not a function.
 */
replgoog.asserts.assertFunction = function(value, opt_message, var_args) {
  if (replgoog.asserts.ENABLE_ASSERTS && !replgoog.isFunction(value)) {
    replgoog.asserts.doAssertFailure_('Expected function but got %s: %s.',
        [replgoog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {!Function} */ (value);
};


/**
 * Checks if the value is an Object if replgoog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {!Object} The value, guaranteed to be a non-null object.
 * @throws {replgoog.asserts.AssertionError} When the value is not an object.
 */
replgoog.asserts.assertObject = function(value, opt_message, var_args) {
  if (replgoog.asserts.ENABLE_ASSERTS && !replgoog.isObject(value)) {
    replgoog.asserts.doAssertFailure_('Expected object but got %s: %s.',
        [replgoog.typeOf(value), value],
        opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {!Object} */ (value);
};


/**
 * Checks if the value is an Array if replgoog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {!Array} The value, guaranteed to be a non-null array.
 * @throws {replgoog.asserts.AssertionError} When the value is not an array.
 */
replgoog.asserts.assertArray = function(value, opt_message, var_args) {
  if (replgoog.asserts.ENABLE_ASSERTS && !replgoog.isArray(value)) {
    replgoog.asserts.doAssertFailure_('Expected array but got %s: %s.',
        [replgoog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {!Array} */ (value);
};


/**
 * Checks if the value is a boolean if replgoog.asserts.ENABLE_ASSERTS is true.
 * @param {*} value The value to check.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @return {boolean} The value, guaranteed to be a boolean when asserts are
 *     enabled.
 * @throws {replgoog.asserts.AssertionError} When the value is not a boolean.
 */
replgoog.asserts.assertBoolean = function(value, opt_message, var_args) {
  if (replgoog.asserts.ENABLE_ASSERTS && !replgoog.isBoolean(value)) {
    replgoog.asserts.doAssertFailure_('Expected boolean but got %s: %s.',
        [replgoog.typeOf(value), value], opt_message,
        Array.prototype.slice.call(arguments, 2));
  }
  return /** @type {boolean} */ (value);
};


/**
 * Checks if the value is an instance of the user-defined type if
 * replgoog.asserts.ENABLE_ASSERTS is true.
 *
 * The compiler may tighten the type returned by this function.
 *
 * @param {*} value The value to check.
 * @param {!Function} type A user-defined constructor.
 * @param {string=} opt_message Error message in case of failure.
 * @param {...*} var_args The items to substitute into the failure message.
 * @throws {replgoog.asserts.AssertionError} When the value is not an instance of
 *     type.
 * @return {!Object}
 */
replgoog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {
  if (replgoog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
    replgoog.asserts.doAssertFailure_('instanceof check failed.', null,
        opt_message, Array.prototype.slice.call(arguments, 3));
  }
  return /** @type {!Object} */(value);
};

