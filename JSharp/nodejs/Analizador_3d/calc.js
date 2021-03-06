/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var calc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,27],$V1=[1,28],$V2=[1,18],$V3=[1,26],$V4=[1,25],$V5=[1,24],$V6=[1,23],$V7=[1,21],$V8=[1,20],$V9=[1,22],$Va=[1,17],$Vb=[5,21,26,27,31,35,41,42,44,45,47,48,56],$Vc=[33,55],$Vd=[1,61],$Ve=[1,56],$Vf=[1,55],$Vg=[1,62],$Vh=[1,57],$Vi=[1,58],$Vj=[1,59],$Vk=[1,60],$Vl=[1,66],$Vm=[1,67],$Vn=[1,68],$Vo=[1,69],$Vp=[1,86],$Vq=[1,84],$Vr=[1,85],$Vs=[1,87],$Vt=[1,88],$Vu=[1,89],$Vv=[1,90],$Vw=[1,91],$Vx=[1,92],$Vy=[1,93],$Vz=[1,94],$VA=[20,37,58,59,60,61,62,63,64,65,66,67],$VB=[20,24,34,37,58,59,60,61,62,63,64,65,66,67],$VC=[20,33],$VD=[27,28,29,30,50,51,52,53];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"c3d":4,"EOF":5,"lista_c3d":6,"declaracion_varable":7,"declaracion_varable2":8,"asignacion":9,"salto":10,"saltar":11,"condicion_salto":12,"condicion_salto2":13,"param":14,"declaracion_metodo":15,"invocacion_metodo":16,"imprimir":17,"clean":18,"stack_heap":19,";":20,"stack":21,"[":22,"id_o_valor":23,"]":24,"=":25,"heap":26,"ID":27,"ENTERO":28,"NUMBER":29,"null":30,"$$_clean_scope":31,"(":32,",":33,")":34,"print":35,"\\\"":36,"%":37,"c":38,"i":39,"d":40,"call":41,"proc":42,"begin":43,"end":44,"if":45,"op":46,"goto":47,"ifFalse":48,"valor":49,"STRING_LITERAL":50,"CHAR":51,"true":52,"false":53,"lista_salto":54,":":55,"var":56,"listaIds":57,"+":58,"-":59,"/":60,"*":61,"<>":62,"<=":63,"==":64,"<":65,">=":66,">":67,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",20:";",21:"stack",22:"[",24:"]",25:"=",26:"heap",27:"ID",28:"ENTERO",29:"NUMBER",30:"null",31:"$$_clean_scope",32:"(",33:",",34:")",35:"print",36:"\\\"",37:"%",38:"c",39:"i",40:"d",41:"call",42:"proc",43:"begin",44:"end",45:"if",47:"goto",48:"ifFalse",50:"STRING_LITERAL",51:"CHAR",52:"true",53:"false",55:":",56:"var",58:"+",59:"-",60:"/",61:"*",62:"<>",63:"<=",64:"==",65:"<",66:">=",67:">"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[14,2],[19,7],[19,7],[19,7],[19,7],[23,1],[23,1],[23,1],[23,1],[18,7],[17,10],[17,10],[17,10],[17,10],[17,10],[17,10],[17,10],[17,10],[17,10],[16,3],[15,5],[12,9],[13,9],[9,6],[9,4],[49,1],[49,1],[49,1],[49,1],[49,1],[49,1],[49,1],[49,1],[10,2],[54,3],[54,1],[11,3],[7,3],[7,5],[7,5],[7,5],[8,5],[57,3],[57,1],[46,1],[46,1],[46,1],[46,1],[46,1],[46,1],[46,1],[46,1],[46,1],[46,1],[46,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        var temp ={nombre:'raiz',linea:'',columna:'',hijos:[$$[$0-1]]};
        return temp;
break;
case 2:
this.$={}; $$[$0-1].hijos.push($$[$0]); this.$=$$[$0-1];
break;
case 3:

        this.$={nombre:'lista 3d',linea:'',columna:'',hijos:{}};
        
        this.$.hijos = [$$[$0]];
    
break;
case 17:
this.$={nombre:'param',linea:'',columna:'',hijos:[]};
break;
case 18:

        this.$={nombre:'stack1',linea:'',columna:'',hijos:{}};
        
        this.$.hijos = [$$[$0-4],$$[$0-1]];
    
break;
case 19:

        this.$={nombre:'heap1',linea:'',columna:'',hijos:{}};
        
        this.$.hijos = [$$[$0-4],$$[$0-1]];
    
break;
case 20:

        this.$={nombre:'stack2',linea:'',columna:'',hijos:{}};
        
        var temp2={nombre:$$[$0-6],linea:_$[$0-6].first_line,columna:_$[$0-6].first_column,hijos:{}};

        var temp1={nombre:'id',linea:0,columna:0,hijos:[temp2]};
   
        this.$.hijos = [temp1,$$[$0-2]];
    
break;
case 21:

        this.$={nombre:'heap2',linea:'',columna:'',hijos:{}};
        
        var temp2={nombre:$$[$0-6],linea:_$[$0-6].first_line,columna:_$[$0-6].first_column,hijos:{}};

        var temp1={nombre:'id',linea:0,columna:0,hijos:[temp2]};
   
        this.$.hijos = [temp1,$$[$0-2]];
    
break;
case 22: case 48:

        this.$={nombre:'id',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:{}};
   
        this.$.hijos = [temp1];
    
break;
case 23:

        this.$={nombre:'ENTERO',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:{}};
   
        this.$.hijos = [temp1];
    
break;
case 24: case 25: case 42:

        this.$={nombre:'decimal',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:{}};
   
        this.$.hijos = [temp1];
    
break;
case 26:

        this.$={nombre:'clean scope',linea:'',columna:'',hijos:{}};
        
        var temp1 = {nombre:$$[$0-4],linea:_$[$0-4].first_line,columna:_$[$0-4].first_column,hijos:{}};
        
        var temp2 = {nombre:$$[$01],linea:_$[$01].first_line,columna:_$[$01].first_column,hijos:{}};
        
        this.$.hijos=[temp1,temp2];
    
break;
case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35:

        this.$={nombre:'print',linea:'',columna:'',hijos:{}};
        
        var temp1 = {nombre:$$[$0-5],linea:_$[$0-5].first_line,columna:_$[$0-5].first_column,hijos:{}};
        
        var temp2 = {nombre:$$[$0-2],linea:_$[$0-2].first_line,columna:_$[$0-2].first_column,hijos:{}};
        
        this.$.hijos=[temp1,temp2];
    
break;
case 36:

        this.$={nombre:'invocacion metodo',linea:'',columna:'',hijos:{}};
        
        var temp ={nombre:$$[$0-1],linea:_$[$0-1].first_line,columna:_$[$0-1].first_column,hijos:{}};
        
        this.$.hijos=[temp];
    
break;
case 37:

        this.$={nombre:'declaracion metodo',linea:'',columna:'',hijos:{}};
        
        var temp = {nombre:$$[$0-3],linea:_$[$0-3].first_line,columna:_$[$0-3].first_column,hijos:{}};
        
        this.$.hijos=[temp,$$[$0-1]];
    
break;
case 38:

        this.$={nombre:'if',linea:'',columna:'',hijos:{}};
        
        var temp3={nombre:$$[$0-1],linea:_$[$0-7].first_line,columna:_$[$0-7].first_column,hijos:{}};
        
        var temp2={nombre:$$[$0-5],linea:_$[$0-5].first_line,columna:_$[$0-5].first_column,hijos:{}};

        this.$.hijos = [$$[$0-6],temp2,$$[$0-4],temp3];
    
break;
case 39:

        this.$={nombre:'ifFalse',linea:'',columna:'',hijos:{}};
        
        var temp3={nombre:$$[$0-1],linea:_$[$0-7].first_line,columna:_$[$0-7].first_column,hijos:{}};
        
        var temp2={nombre:$$[$0-5],linea:_$[$0-5].first_line,columna:_$[$0-5].first_column,hijos:{}};

        this.$.hijos = [$$[$0-6],temp2,$$[$0-4],temp3];
    
break;
case 40:

        this.$={nombre:'asignacion2',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0-5],linea:_$[$0-5].first_line,columna:_$[$0-5].first_column,hijos:{}};

        var temp2={nombre:$$[$0-2],linea:_$[$0-2].first_line,columna:_$[$0-2].first_column,hijos:{}};

        this.$.hijos = [temp1,$$[$0-3],temp2,$$[$0-1]];
    
break;
case 41:

        this.$={nombre:'asignacion1',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0-3],linea:_$[$0-3].first_line,columna:_$[$0-3].first_column,hijos:{}};

        this.$.hijos = [temp1,$$[$0-1]];
    
break;
case 43:

        this.$={nombre:'entero',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:{}};
   
        this.$.hijos = [temp1];
    
break;
case 44:

        this.$={nombre:'string',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:{}};
   
        this.$.hijos = [temp1];
    
break;
case 45:

        this.$={nombre:'char',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:{}};
   
        this.$.hijos = [temp1];
    
break;
case 46: case 47:

        this.$={nombre:'booleano',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:{}};
   
        this.$.hijos = [temp1];
    
break;
case 49:

        this.$={nombre:'null',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:{}};
   
        this.$.hijos = [temp1];
    
break;
case 50:

        this.$=$$[$0-1];
    
break;
case 51:

        this.$={};
        var temp={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:[]};
        $$[$0-2].hijos.push(temp);
        this.$=$$[$0-2];
    
break;
case 52:

        var temp1={nombre:$$[$0],linea:_$[$0].first_line,columna:_$[$0].first_column,hijos:[]};
        this.$={nombre:'salto',linea:'',columna:'',hijos:[]};
        this.$.hijos = [temp1];
    
break;
case 53:

        this.$={nombre:'saltar',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0-1],linea:_$[$0-1].first_line,columna:_$[$0-1].first_column,hijos:{}};

        this.$.hijos = [temp1];
    
break;
case 54:

        this.$={nombre:'declaracion variable ',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0-1],linea:_$[$0-1].first_line,columna:_$[$0-1].first_column,hijos:{}};

        this.$.hijos = [temp1];
    
break;
case 55:

        this.$={nombre:'declaracion variable asignacion',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0-3],linea:_$[$0-3].first_line,columna:_$[$0-3].first_column,hijos:{}};

        this.$.hijos = [temp1,$$[$0-1]];
    
break;
case 56: case 57:

        this.$={nombre:'declaracion variable ',linea:'',columna:'',hijos:{}};
        
        var temp1={nombre:$$[$0-3],linea:_$[$0-3].first_line,columna:_$[$0-3].first_column,hijos:{}};

        this.$.hijos = [temp1];
    
break;
case 61: case 62: case 63: case 64: case 65: case 66: case 67: case 68: case 69: case 70: case 71:
this.$=$$[$0];
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,21:$V0,26:$V1,27:$V2,31:$V3,35:$V4,41:$V5,42:$V6,45:$V7,47:$V8,48:$V9,54:19,56:$Va},{1:[3]},{5:[1,29],6:30,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,21:$V0,26:$V1,27:$V2,31:$V3,35:$V4,41:$V5,42:$V6,45:$V7,47:$V8,48:$V9,54:19,56:$Va},o($Vb,[2,3]),o($Vb,[2,4]),o($Vb,[2,5]),o($Vb,[2,6]),o($Vb,[2,7]),o($Vb,[2,8]),o($Vb,[2,9]),o($Vb,[2,10]),o($Vb,[2,11],{20:[1,31]}),o($Vb,[2,12]),o($Vb,[2,13]),o($Vb,[2,14]),o($Vb,[2,15]),o($Vb,[2,16]),{21:[1,33],26:[1,34],27:[1,32]},o($Vc,[2,52],{25:[1,35]}),{33:[1,37],55:[1,36]},{27:[1,38]},{32:[1,39]},{32:[1,40]},{27:[1,41]},{27:[1,42]},{32:[1,43]},{32:[1,44]},{22:[1,45]},{22:[1,46]},{1:[2,1]},o($Vb,[2,2]),o([5,20,21,26,27,31,35,41,42,44,45,47,48,56],[2,17]),{20:[1,47],25:[1,48],33:[1,49]},{22:[1,50]},{22:[1,51]},{21:[1,53],26:[1,54],27:$Vd,28:$Ve,29:$Vf,30:$Vg,49:52,50:$Vh,51:$Vi,52:$Vj,53:$Vk},o($Vb,[2,50]),{27:[1,63]},{20:[1,64]},{23:65,27:$Vl,28:$Vm,29:$Vn,30:$Vo},{23:70,27:$Vl,28:$Vm,29:$Vn,30:$Vo},{43:[1,71]},{20:[1,72]},{36:[1,73]},{28:[1,74]},{23:75,27:$Vl,28:$Vm,29:$Vn,30:$Vo},{23:76,27:$Vl,28:$Vm,29:$Vn,30:$Vo},o($Vb,[2,54]),{27:$Vd,28:$Ve,29:$Vf,30:$Vg,49:77,50:$Vh,51:$Vi,52:$Vj,53:$Vk},{27:[1,79],57:78},{24:[1,80]},{24:[1,81]},{20:[1,83],37:$Vp,46:82,58:$Vq,59:$Vr,60:$Vs,61:$Vt,62:$Vu,63:$Vv,64:$Vw,65:$Vx,66:$Vy,67:$Vz},{22:[1,95]},{22:[1,96]},o($VA,[2,42]),o($VA,[2,43]),o($VA,[2,44]),o($VA,[2,45]),o($VA,[2,46]),o($VA,[2,47]),o($VA,[2,48]),o($VA,[2,49]),o($Vc,[2,51]),o($Vb,[2,53]),{37:$Vp,46:97,58:$Vq,59:$Vr,60:$Vs,61:$Vt,62:$Vu,63:$Vv,64:$Vw,65:$Vx,66:$Vy,67:$Vz},o($VB,[2,22]),o($VB,[2,23]),o($VB,[2,24]),o($VB,[2,25]),{37:$Vp,46:98,58:$Vq,59:$Vr,60:$Vs,61:$Vt,62:$Vu,63:$Vv,64:$Vw,65:$Vx,66:$Vy,67:$Vz},{4:99,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,21:$V0,26:$V1,27:$V2,31:$V3,35:$V4,41:$V5,42:$V6,45:$V7,47:$V8,48:$V9,54:19,56:$Va},o($Vb,[2,36]),{37:[1,100]},{33:[1,101]},{24:[1,102]},{24:[1,103]},{20:[1,104]},{20:[1,105],33:[1,106]},o($VC,[2,60]),{20:[1,107]},{20:[1,108]},{27:$Vd,28:$Ve,29:$Vf,30:$Vg,49:109,50:$Vh,51:$Vi,52:$Vj,53:$Vk},o($Vb,[2,41]),o($VD,[2,61]),o($VD,[2,62]),o($VD,[2,63]),o($VD,[2,64]),o($VD,[2,65]),o($VD,[2,66]),o($VD,[2,67]),o($VD,[2,68]),o($VD,[2,69]),o($VD,[2,70]),o($VD,[2,71]),{23:110,27:$Vl,28:$Vm,29:$Vn,30:$Vo},{23:111,27:$Vl,28:$Vm,29:$Vn,30:$Vo},{23:112,27:$Vl,28:$Vm,29:$Vn,30:$Vo},{23:113,27:$Vl,28:$Vm,29:$Vn,30:$Vo},{6:30,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,21:$V0,26:$V1,27:$V2,31:$V3,35:$V4,41:$V5,42:$V6,44:[1,114],45:$V7,47:$V8,48:$V9,54:19,56:$Va},{38:[1,115],39:[1,116],40:[1,117]},{28:[1,118]},{25:[1,119]},{25:[1,120]},o($Vb,[2,55]),o($Vb,[2,58]),{27:[1,121]},o($Vb,[2,56]),o($Vb,[2,57]),{20:[1,122]},{24:[1,123]},{24:[1,124]},{34:[1,125]},{34:[1,126]},o($Vb,[2,37]),{36:[1,127]},{36:[1,128]},{36:[1,129]},{34:[1,130]},{23:131,27:$Vl,28:$Vm,29:$Vn,30:$Vo},{23:132,27:$Vl,28:$Vm,29:$Vn,30:$Vo},o($VC,[2,59]),o($Vb,[2,40]),{20:[1,133]},{20:[1,134]},{47:[1,135]},{47:[1,136]},{33:[1,137]},{33:[1,138]},{33:[1,139]},{20:[1,140]},{20:[1,141]},{20:[1,142]},o($Vb,[2,20]),o($Vb,[2,21]),{27:[1,143]},{27:[1,144]},{27:[1,145],28:[1,146],29:[1,147]},{27:[1,148],28:[1,149],29:[1,150]},{27:[1,151],28:[1,152],29:[1,153]},o($Vb,[2,26]),o($Vb,[2,18]),o($Vb,[2,19]),{20:[1,154]},{20:[1,155]},{34:[1,156]},{34:[1,157]},{34:[1,158]},{34:[1,159]},{34:[1,160]},{34:[1,161]},{34:[1,162]},{34:[1,163]},{34:[1,164]},o($Vb,[2,38]),o($Vb,[2,39]),{20:[1,165]},{20:[1,166]},{20:[1,167]},{20:[1,168]},{20:[1,169]},{20:[1,170]},{20:[1,171]},{20:[1,172]},{20:[1,173]},o($Vb,[2,27]),o($Vb,[2,30]),o($Vb,[2,33]),o($Vb,[2,28]),o($Vb,[2,31]),o($Vb,[2,34]),o($Vb,[2,29]),o($Vb,[2,32]),o($Vb,[2,35])],
defaultActions: {29:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip over text not in quotes */
break;
case 1:return "EOF";
break;
case 2:/* skip whitespace */
break;
case 3:return 29;
break;
case 4:return '.';
break;
case 5:return 28;
break;
case 6:return 61;
break;
case 7:return 60;
break;
case 8:return 59;
break;
case 9:return 58;
break;
case 10:return '^';
break;
case 11:return 32;
break;
case 12:return 34;
break;
case 13:return '{';
break;
case 14:return '}';
break;
case 15:return 22;
break;
case 16:return 24;
break;
case 17:return 62;
break;
case 18:return 36;
break;
case 19:return 38;
break;
case 20:return 39;
break;
case 21:return 40;
break;
case 22:return 63;
break;
case 23:return 66;
break;
case 24:return 65;
break;
case 25:return 67;
break;
case 26:return 37;
break;
case 27:return '&&';
break;
case 28:return '||';
break;
case 29:return '--';
break;
case 30:return '++';
break;
case 31:return 64;
break;
case 32:return '?';
break;
case 33:return '!';
break;
case 34:return 52;
break;
case 35:return 53;
break;
case 36:return 30;
break;
case 37:return 56;
break;
case 38:return 43;
break;
case 39:return 47;
break;
case 40:return 21;
break;
case 41:return 45;
break;
case 42:return 26;
break;
case 43:return 41;
break;
case 44:return 'then';
break;
case 45:return 42;
break;
case 46:return 35;
break;
case 47:return 48;
break;
case 48:return 44;
break;
case 49:return 'param'
break;
case 50:return 31;
break;
case 51:return 42;
break;
case 52:return 52;
break;
case 53:return 53;
break;
case 54:return 50;
break;
case 55:return 51;
break;
case 56:return 55;
break;
case 57:return 20;
break;
case 58:return 33;
break;
case 59:return 25;
break;
case 60:return 27;
break;
case 61:return 5;
break;
}
},
rules: [/^(?:[.\n]+)/,/^(?:$)/,/^(?:\s+)/,/^(?:[0-9]+\.[0-9]+\b)/,/^(?:\.)/,/^(?:[0-9]+\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:<>)/,/^(?:")/,/^(?:c\b)/,/^(?:i\b)/,/^(?:d\b)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:%)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:--)/,/^(?:\+\+)/,/^(?:==)/,/^(?:\?)/,/^(?:!)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:var\b)/,/^(?:begin\b)/,/^(?:goto\b)/,/^(?:stack\b)/,/^(?:if\b)/,/^(?:heap\b)/,/^(?:call\b)/,/^(?:then\b)/,/^(?:proc\b)/,/^(?:print\b)/,/^(?:ifFalse\b)/,/^(?:end\b)/,/^(?:param\b)/,/^(?:\$\$_clean_scope\b)/,/^(?:proc\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:"([^"]|{BSL})*")/,/^(?:'([^"]|{BSL})?')/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:=)/,/^(?:[_a-zA-Z][_a-zA-Z0-9]*\b)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = calc;
exports.Parser = calc.Parser;
exports.parse = function () { return calc.parse.apply(calc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}