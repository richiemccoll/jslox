const TokenType = {
  LEFT_PAREN: "(",
  RIGHT_PAREN: ")",
  LEFT_BRACE: "{",
  RIGHT_BRACE: "}",
  COMMA: ",",
  DOT: ".",
  MINUS: "-",
  PLUS: "+",
  SEMICOLON: ";",
  SLASH: "/",
  STAR: "*",

  BANG: "!",
  BANG_EQUAL: "!=",
  EQUAL: "=",
  EQUAL_EQUAL: "==",
  GREATER: ">",
  GREATER_EQUAL: ">=",
  LESS: "<",
  LESS_EQUAL: "<=",

  IDENTIFIER: "id",
  STRING: "str",
  NUMBER: "num",

  AND: "and",
  CLASS: "class",
  ELSE: "else",
  FALSE: "false",
  FUN: "fun",
  FOR: "for",
  IF: "if",
  NIL: "nil",
  OR: "or",

  PRINT: "print",
  RETURN: "return",
  SUPER: "super",
  THIS: "this",
  TRUE: "true",
  VAR: "var",
  WHILE: "while",

  EOF: "eof",
};

class Token {
  constructor(type, lexeme, literal, line) {
    this.type = type;
    this.lexeme = lexeme;
    this.literal = literal;
    this.line = line;
  }

  toString(){
    return `${this.type} ${this.lexeme} ${this.literal}`;
  };
}

export {Token, TokenType}
