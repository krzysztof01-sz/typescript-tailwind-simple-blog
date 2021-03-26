import { ArticleFormData, InputProps } from '../../interfaces';

function TextArea({ name, value, setValue }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <textarea
        className="w-full border-2 border-gray-600 p-1 rounded-lg resize-none"
        name={name}
        value={value}
        onChange={({ target: { name, value } }) => {
          setValue((data: ArticleFormData) => ({ ...data, [name]: value }));
        }}
      ></textarea>
      <br />
    </>
  );
}

export default TextArea;
