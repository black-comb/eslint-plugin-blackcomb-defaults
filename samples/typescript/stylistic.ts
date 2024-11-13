const keySpacing: {
  // eslint-disable-next-line @stylistic/key-spacing, @stylistic/type-annotation-spacing
  abc : string;
  def: number;
  ghi: unknown;
} = {
  // eslint-disable-next-line @stylistic/key-spacing
  abc : 'hello world',
  // eslint-disable-next-line @stylistic/object-property-newline
  def: 3, ghi: 5
};

const allPropertiesOnOneLine = { a: 3, b: 4, c: 5 };

const arrayBracketNewline1 = [4, 3];
const arrayBracketNewline2 = [4,
  3];
const arrayBracketNewline3 = [
  4,
  // eslint-disable-next-line @stylistic/array-element-newline
  3, 2
];
const arrayBracketNewline4 = [
  4
];

// @ts-expect-error -- Condition is always truthy, but that's only an example.
// eslint-disable-next-line no-constant-condition
if ('no-constant-condition') {
  // No
// eslint-disable-next-line no-constant-condition, @stylistic/keyword-spacing
}else if (false) {
  // Yes
}

// eslint-disable-next-line @stylistic/space-infix-ops
const spaceInfixOps = 4+3;

// eslint-disable-next-line @stylistic/function-paren-newline
function functionParenNewline1(p1: string,
  p2: number
) {
  return 4;
}

function functionParenNewline2(
  p1: string
): void {
  // Nothing.
}

// eslint-disable-next-line @stylistic/function-call-spacing
const funcCallSpacing = functionParenNewline1 ('a', 42);

// eslint-disable-next-line @stylistic/no-extra-semi
const noExtraSemi = 4; ;

// eslint-disable-next-line @stylistic/generator-star-spacing
function *generatorStarSpacing(x: number): IterableIterator<number, void, number> {
  // eslint-disable-next-line @stylistic/no-extra-parens
  const noExtraParens1 = yield (x);
  const noExtraParens2 = x || (noExtraParens1 && 2);
}

// eslint-disable-next-line @stylistic/arrow-parens
const arrowParens: (input: number) => number = input => input + 1;

// eslint-disable-next-line @stylistic/max-len
// Long comment. Long comment. Long comment. Long comment. Long comment. Long comment. Long comment. Long comment. Long comment. Long comment. Long comment. Long comment. Long comment. Long comment.AB.

const noConfusingArrow: (a: boolean) => number = (a) => a ? 2 : 3;

type IndentForTernary<T> =
  T extends Record<number, number>
    ? (number | {
      a: string;
    })
    : 2;

// This is accepted only due to a workaround for @stylistic/indent (ignoredNodes: ['VariableDeclarator > * > *']).
const indentForFunctionType:
  () => number | undefined =
  () => 3;

const indentForPrimitiveType: number | undefined =
/// eslint-disable-next-line @stylistic/indent -- Currently not working due to the workaround for indentForFunctionType.
3;

const operatorLineBreak =
  5;

const indentBinaryOps =
  noConfusingArrow(true)
  && noConfusingArrow(false)
    // eslint-disable-next-line @stylistic/indent-binary-ops
    && noConfusingArrow(false);

/// eslint-disable-next-line ??? -- No rule for spacing around generics.
type ParensSpacing<T > = Record<string, T>;
