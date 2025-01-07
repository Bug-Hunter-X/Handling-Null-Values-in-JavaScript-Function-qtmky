# Handling Null Values in JavaScript Function

This repository demonstrates a common but easily missed bug in JavaScript when dealing with functions that might receive `null` or `undefined` values as arguments.  The provided code attempts to address null values, but a better approach might be to explicitly check for expected input types or throw errors to indicate invalid input.

## Bug

The original `foo` function returns 0 if either `a` or `b` is `null`.  While seemingly harmless, returning 0 might mask an underlying problem.  A better approach might involve using stricter input validation or more informative error handling.