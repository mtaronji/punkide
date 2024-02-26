import * as PunkSyntax from './PunkSyntax'

export const Ruleset = new Map<PunkSyntax.SyntaxPatterns, RegExp>([
    // [PunkSyntax.SyntaxPatterns.lcurlybraceGrouping, /^\{$/],
    // [PunkSyntax.SyntaxPatterns.rcurlybraceGrouping, /^\}$/],
    // [PunkSyntax.SyntaxPatterns.lparenthesisGrouping, /^\($/],
    // [PunkSyntax.SyntaxPatterns.rparenthesisGrouping, /^\)$/],
    // [PunkSyntax.SyntaxPatterns.DataType, /^\[\s*(([\-]?\d+\s*\.{3}\s*\d+)|(([\-]?\d+(\.\d+)?)(\s*,\s*([\-]?\d+(\.\d+)?))*))\s*\]$/],
    //[PunkSyntax.SyntaxPatterns.SequenceType, /^\{([a-zA-Z]+[a-zA-Z0-9]*)\s*:\s*[\1\+\-\*/\^\s]+\s*\}$/],
    [PunkSyntax.SyntaxPatterns.NumberType, /^[0-9]+(\.[0-9]+)?$/],
    [PunkSyntax.SyntaxPatterns.IdentifierType, /^[a-zA-Z]+[a-zA-Z0-9]*$/],
    [PunkSyntax.SyntaxPatterns.binaryoperator, /^[\+\-=><\^]$/],
    [PunkSyntax.SyntaxPatterns.Surf, /^surf$/],
    [PunkSyntax.SyntaxPatterns.for, /^for$/],
    [PunkSyntax.SyntaxPatterns.while, / /],
    [PunkSyntax.SyntaxPatterns.foreach, / /],
    [PunkSyntax.SyntaxPatterns.map, / /],
    [PunkSyntax.SyntaxPatterns.equals, / /],
    [PunkSyntax.SyntaxPatterns.gequals, / /],
    [PunkSyntax.SyntaxPatterns.lequals, / /],
    [PunkSyntax.SyntaxPatterns.lessthan, / /],
    [PunkSyntax.SyntaxPatterns.greaterthan, / /],
    [PunkSyntax.SyntaxPatterns.add, / /],
    [PunkSyntax.SyntaxPatterns.multiply, / /],
    [PunkSyntax.SyntaxPatterns.subtract, / /],
    [PunkSyntax.SyntaxPatterns.exponential, / /],
    [PunkSyntax.SyntaxPatterns.divide, / /]
]);

// RuleSet[TokenType.PickType] = new Regex(@"^pick$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.SurfType] = new Regex(@"^surf$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.NumberType] = new Regex(@"^[0-9]+\.?[0-9]*$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.StringType] = new Regex(@"^""{1}.*""{1}$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.DataSetType] = new Regex(@"^dataset$", RegexOptions.IgnoreCase);

// //                                               -------========Group 1 ------------------------- ------- group 2------------------------
// RuleSet[TokenType.DataType] = new Regex(@"^\[\s*(([\-]?\d+\s*\.{3}\s*\d+)|(([\-]?\d+(\.\d+)?)(\s*,\s*([\-]?\d+(\.\d+)?))*))\s*\]$", RegexOptions.Compiled);
// RuleSet[TokenType.SequenceType] = new Regex(@"^\{\s*([a-zA-Z]{1}[a-zA-Z0-9]*)+\s*:\s*(\s|\(|\)|\+|\-|\*|\^|/|==|<=|>=|<|>|\1|([\-]?\d+(\.\d+)?))+\s*\}$", RegexOptions.Compiled);
// RuleSet[TokenType.FunctionType] = new Regex(@"^function$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.ReturnType] = new Regex(@"^return$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.ReadType] = new Regex(@"^read$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.OpenType] = new Regex(@"^open$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.GetType] = new Regex(@"^get$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.WhileType] = new Regex(@"^while$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.WalkType] = new Regex(@"^walk$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.PipeType] = new Regex(@"^\|$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.AddType] = new Regex(@"^\+$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.SubtractType] = new Regex(@"^-$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.DivideType] = new Regex(@"^/$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.MultiplicationType] = new Regex(@"^\*$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.ExponentialType] = new Regex(@"^\^$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.ModuloType] = new Regex(@"^%$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.AssignType] = new Regex(@"^=$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.IsEqualType] = new Regex(@"^==$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.IsGreaterThanType] = new Regex(@"^>$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.IsGreaterThanEqualType] = new Regex(@"^>=$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.IsLessThanType] = new Regex(@"^<$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.IsLessThanEqualType] = new Regex(@"^<=$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.MapType] = new Regex(@"^->$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.MapEqualsType] = new Regex(@"^->=$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.LBracketType] = new Regex(@"^\[$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.RBracketType] = new Regex(@"^]$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.LParenthesisType] = new Regex(@"^\($", RegexOptions.IgnoreCase);
// RuleSet[TokenType.RParenthesisType] = new Regex(@"^\)$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.LCurlybraceType] = new Regex(@"^{$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.RcurlybraceType] = new Regex(@"^}$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.CommaType] = new Regex(@"^,$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.SuchThatType] = new Regex(@"^:$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.PeriodType] = new Regex(@"^\.$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.TrailingDotType] = new Regex(@"^\.\.\.$", RegexOptions.IgnoreCase);
// RuleSet[TokenType.UnknownType] = new Regex(@".", RegexOptions.Singleline);
// RuleSet[TokenType.IdentityfierType] = new Regex(@"^[a-zA-Z]+[a-zA-Z0-9]*()$", RegexOptions.Singleline);
