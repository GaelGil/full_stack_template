export type AuthFormProps = {
  value: Record<string, string>; // each option gets its own input value  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
