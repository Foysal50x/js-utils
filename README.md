**@0x26e/utils**

A TypeScript Utility Collection Similar to Laravel Helpers.

## Instalation

```bash
npm install @0x26e/utils
```

## Available Methods


<a name="arrays-and-objects-method-list"></a>

### Arrays & Objects

<div class="collection-method-list" markdown="1">

[crossJoin](#method-array-crossJoin)

<div class="collection-method-list" markdown="1">

[toCssClasses](#method-object-toCssClasses)

</div>

<a name="miscellaneous-method-list"></a>

### Miscellaneous

<div class="collection-method-list" markdown="1">

[blank](#method-blank)
[sleep](#method-sleep)
[usleep](#method-usleep)
[tap](#method-tap)
[until](#method-until)
[clamp](#method-clamp)

</div>

<a name="arrays"></a>

## Arrays & Objects

<a name="method-array-crossJoin"></a>

#### `crossJoin()`

Returns the Cartesian product of the given arrays.
The Cartesian product of multiple sets is a set of all possible combinations where each combination contains one element from each input array.

```typescript
const result = crossJoin([1, 2], ['a', 'b']);
console.log(result);
// Output: [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```

<a name="method-object-toCssClasses"></a>

#### `toCssClasses()`

The toCssClasses function conditionally compiles a CSS class string. The method accepts an object of classes where the object key contains the class or classes you wish to add, while the value is a boolean expression. If the object key has a numeric key, it will always be included in the rendered class list:

```typescript
const isActive = false;
const hasError = true;
const classes = toCssClasses(['p-4', { 'font-bold': isActive, 'bg-red': hasError }]);
console.log(classes);
// Output: 'p-4 bg-red'
```

<a name="miscellaneous"></a>

## Miscellaneous

<a name="method-blank"></a>

#### `blank()`

The `blank` function determines whether the given value is "blank":

    blank('');
    blank('   ');
    blank(null);
    blank(collect());

    // true

    blank(0);
    blank(true);
    blank(false);

    // false

<a name="method-sleep"></a>

#### `sleep()`

Pauses the execution for a specified number of seconds

```typescript
await sleep(2); // Pauses execution for 2 seconds.
```

<a name="method-usleep"></a>

#### `usleep()`

Pauses the execution for a specified number of milliseconds.

```typescript
await usleep(500); // Pauses execution for 500 milliseconds.
```

<a name="method-tap"></a>

#### `tap()`

Invokes an interceptor function with a provided value and returns the result.

```typescript
const tappedValue = tap(5, (n) => n * 2); // tappedValue = 10
```

<a name="method-until"></a>

#### `until()`

Continuously attempts a function until a condition is met.

```typescript
const result = await until(
  () => isConditionTrue(),
  () => fetchData(),
  2,
);
```

<a name="method-clamp"></a>

#### `clamp()`

Returns a value clamped to the inclusive range of min and max. This function ensures that the `value` falls within the specified range. If the `value`
is less than `min`, it returns `min`. If the `value` is greater than `max`, it returns `max`.
Otherwise, it returns the `value` itself.

```typescript
const clamped1 = clamp(5, 1, 10);
console.log(clamped1); // 5

const clamped2 = clamp(15, 1, 10);
console.log(clamped2); // 10 (since 15 is greater than max 10)
const clamped3 = clamp(-5, 1, 10);
console.log(clamped3); // 1 (since -5 is less than min 1)
```
