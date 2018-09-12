type validator =
  | Required
  | MaxLength(int)
  | MinLength(int); /* for test */

type field =
  | Text(string, list(validator))
  | Number(string, list(validator))
  | Checkbox(string, list(validator))
  | Radio(string, list(validator))
  | Button(string, list(validator));

let generateValidators = validators =>
  List.map(
    validator =>
      switch (validator) {
      | Required => ("required", "true")
      | MaxLength(count) => ("maxLength", count->string_of_int)
      | MinLength(count) => ("minLength", count->string_of_int)
      },
    validators,
  );

let generateInputs = (t: string, name: string, validators: list(validator)) => {
  let valid = validators->generateValidators;
  let input = <input name type_=t />;

  ReasonReact.cloneElement(
    input,
    ~props=Obj.magic(Js.Dict.fromList(valid)),
    [||],
  );
};

let render = field =>
  switch (field) {
  | Text(name, validators) => generateInputs("text", name, validators)
  | Number(name, validators) => generateInputs("number", name, validators)
  | Checkbox(name, validators) =>
    generateInputs("checkbox", name, validators)
  | Radio(name, validators) => generateInputs("radio", name, validators)
  | Button(name, validators) => <input type_="submit" value=name />
  };

let xs = [
  Text("inputName", [Required, MaxLength(3), MinLength(2)]),
  Number("numberName", []),
  Checkbox("checkboxName", []),
  Radio("radioName", []),
  Button("Send me", []),
];

let result = List.map(input => input->render, xs);

let component = ReasonReact.statelessComponent("Form");

let make = _children => {
  ...component,
  render: _self =>
    <form> result->ArrayLabels.of_list->ReasonReact.array </form>,
};