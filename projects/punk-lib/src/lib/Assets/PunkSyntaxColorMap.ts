import * as PunkSyntax from './PunkSyntax'

// export const SyntaxColorMap:{[key in PunkSyntax.SyntaxPatterns]:string } = 
// {
//     [PunkSyntax.SyntaxPatterns.DataType]:"<span class='syntax-datatype'>",
//     [PunkSyntax.SyntaxPatterns.lparenthesisGrouping]:"",
//     [PunkSyntax.SyntaxPatterns.rparenthesisGrouping]:"",
//     [PunkSyntax.SyntaxPatterns.lcurlybraceGrouping]:"",
//     [PunkSyntax.SyntaxPatterns.rcurlybraceGrouping]:"",
//     [PunkSyntax.SyntaxPatterns.SequenceType]:"",
//     [PunkSyntax.SyntaxPatterns.NumberType]:"",
//     [PunkSyntax.SyntaxPatterns.IdentifierType]:"<span class='syntax-identifier'>",
//     [PunkSyntax.SyntaxPatterns.Surf]:"<span class='syntax-keyword'>",
//     [PunkSyntax.SyntaxPatterns.for]:"<span class='syntax-keyword'>",
//     [PunkSyntax.SyntaxPatterns.while]:"<span class='syntax-keyword'>",
//     [PunkSyntax.SyntaxPatterns.foreach]:"<span class='syntax-keyword'>",
//     [PunkSyntax.SyntaxPatterns.map]:"",
//     [PunkSyntax.SyntaxPatterns.equals]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.gequals]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.lequals]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.lessthan]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.greaterthan]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.add]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.multiply]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.subtract]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.exponential]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.divide]:"<span class='syntax-binary-operator'>",
//     [PunkSyntax.SyntaxPatterns.binaryoperator]:"<span class='syntax-binary-operator'>"
// }

export const SyntaxColorMap = new Map<PunkSyntax.SyntaxPatterns, string>([
    [PunkSyntax.SyntaxPatterns.DataType,"<span class='syntax-datatype'>"],
    [PunkSyntax.SyntaxPatterns.lparenthesisGrouping,""],
    [PunkSyntax.SyntaxPatterns.rparenthesisGrouping,""],
    [PunkSyntax.SyntaxPatterns.lcurlybraceGrouping,""],
    [PunkSyntax.SyntaxPatterns.rcurlybraceGrouping,""],
    [PunkSyntax.SyntaxPatterns.SequenceType,""],
    [PunkSyntax.SyntaxPatterns.NumberType,"<span class='syntax-number'>"],
    [PunkSyntax.SyntaxPatterns.IdentifierType,"<span class='syntax-identifier'>"],
    [PunkSyntax.SyntaxPatterns.Surf,"<span class='syntax-keyword'>"],
    [PunkSyntax.SyntaxPatterns.for,"<span class='syntax-keyword'>"],
    [PunkSyntax.SyntaxPatterns.while,"<span class='syntax-keyword'>"],
    [PunkSyntax.SyntaxPatterns.foreach,"<span class='syntax-keyword'>"],
    [PunkSyntax.SyntaxPatterns.map,""],
    [PunkSyntax.SyntaxPatterns.equals,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.gequals,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.lequals,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.lessthan,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.greaterthan,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.add,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.multiply,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.subtract,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.exponential,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.divide,"<span class='syntax-binary-operator'>"],
    [PunkSyntax.SyntaxPatterns.binaryoperator,"<span class='syntax-binary-operator'>"]
  ]); 
  