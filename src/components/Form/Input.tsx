import { ArticleFormData, InputProps } from '../../interfaces';

function TextInput({ name, value, setValue }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        className="border-2 border-gray-600 rounded-lg"
        type="text"
        name={name}
        value={value}
        onChange={({ target: { name, value } }) => {
          setValue((data: ArticleFormData) => ({ ...data, [name]: value }));
        }}
      />
      <br />
    </>
  );
}

export default TextInput;
