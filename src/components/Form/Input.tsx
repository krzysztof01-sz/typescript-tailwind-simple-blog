import { ArticleFormData } from '../../interfaces';

interface Props {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<ArticleFormData>>;
}

const TextInput = ({ name, value, setValue }: Props) => {
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
};

export default TextInput;
