import { Form } from "react-bootstrap";
import type { AuthFormProps } from "../../types/AuthFormProp.ts";

const AuthForm: React.FC<AuthFormProps> = ({
  value,
  options,
  onChange,
  onSubmit,
}) => (
  <Form onSubmit={onSubmit} className="p-3 border rounded bg-light shadow">
    {options.map((opt) => (
      <Form.Group className="mb-3" key={opt}>
        <Form.Label className="fw-bold">{opt}</Form.Label>
        <Form.Control
          type="text"
          name={opt}
          placeholder={`Enter ${opt}`}
          value={value[opt] || ""}
          onChange={onChange}
        />
      </Form.Group>
    ))}
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </Form>
);

export default AuthForm;
