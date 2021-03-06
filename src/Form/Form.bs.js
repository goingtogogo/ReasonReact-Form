// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var ArrayLabels = require("bs-platform/lib/js/arrayLabels.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

function generateValidators(validators) {
  return List.map((function (validator) {
                if (typeof validator === "number") {
                  return /* tuple */[
                          "required",
                          "true"
                        ];
                } else if (validator.tag) {
                  return /* tuple */[
                          "minLength",
                          String(validator[0])
                        ];
                } else {
                  return /* tuple */[
                          "maxLength",
                          String(validator[0])
                        ];
                }
              }), validators);
}

function generateInputs(t, name, validators) {
  var valid = generateValidators(validators);
  var input = React.createElement("input", {
        name: name,
        type: t
      });
  return React.cloneElement(input, Js_dict.fromList(valid));
}

function render(field) {
  switch (field.tag | 0) {
    case 0 : 
        return generateInputs("text", field[0], field[1]);
    case 1 : 
        return generateInputs("number", field[0], field[1]);
    case 2 : 
        return generateInputs("checkbox", field[0], field[1]);
    case 3 : 
        return generateInputs("radio", field[0], field[1]);
    case 4 : 
        return React.createElement("input", {
                    type: "submit",
                    value: field[0]
                  });
    
  }
}

var xs = /* :: */[
  /* Text */Block.__(0, [
      "inputName",
      /* :: */[
        /* Required */0,
        /* :: */[
          /* MaxLength */Block.__(0, [3]),
          /* :: */[
            /* MinLength */Block.__(1, [2]),
            /* [] */0
          ]
        ]
      ]
    ]),
  /* :: */[
    /* Number */Block.__(1, [
        "numberName",
        /* [] */0
      ]),
    /* :: */[
      /* Checkbox */Block.__(2, [
          "checkboxName",
          /* [] */0
        ]),
      /* :: */[
        /* Radio */Block.__(3, [
            "radioName",
            /* [] */0
          ]),
        /* :: */[
          /* Button */Block.__(4, [
              "Send me",
              /* [] */0
            ]),
          /* [] */0
        ]
      ]
    ]
  ]
];

var result = List.map(render, xs);

var component = ReasonReact.statelessComponent("Form");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("form", undefined, ArrayLabels.of_list(result));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.generateValidators = generateValidators;
exports.generateInputs = generateInputs;
exports.render = render;
exports.xs = xs;
exports.result = result;
exports.component = component;
exports.make = make;
/* result Not a pure module */
