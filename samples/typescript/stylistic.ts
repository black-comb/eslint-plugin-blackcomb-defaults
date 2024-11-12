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
function functionParenNewline(p1: string,
  p2: number
) {
  return 4;
}

// eslint-disable-next-line @stylistic/function-call-spacing
const funcCallSpacing = functionParenNewline ('a', 42);

// eslint-disable-next-line @stylistic/no-extra-semi
const noExtraSemi = 4; ;
