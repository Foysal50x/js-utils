**@0x26e/utils**

A TypeScript Utility Collection Similar to Laravel Helpers.

## Instalation

```bash
npm install @0x26e/utils
```

## Available Methods
<style>
    .collection-method-list > p {
        columns: 10.8em 3; -moz-columns: 10.8em 3; -webkit-columns: 10.8em 3;
    }

    .collection-method-list a {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

<a name="arrays-and-objects-method-list"></a>
### Arrays & Objects

<div class="collection-method-list" markdown="1">

[crossJoin](#method-array-crossJoin)
</div>

<a name="miscellaneous-method-list"></a>
### Miscellaneous

<div class="collection-method-list" markdown="1">

[blank](#method-blank)
[sleep](#method-sleep)
[usleep](#method-usleep)

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