function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}

export { slugify, truncate };

/*
When helpers was a .js file, TypeScript had limited type information
and could not fully verify parameter and return types.

After migrating helpers.js to helpers.ts and adding type annotations,
TypeScript can check function arguments, infer return types, and catch
type errors at compile time.
*/


/*
A .d.ts (declaration) file provides type information for JavaScript code
without containing actual implementation.

It is useful during migration when a project still has JavaScript files
but we want TypeScript to understand their types and provide type checking
and autocompletion.
*/