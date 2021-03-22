import { ArticleFormData } from '../../interfaces';

interface Props {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<ArticleFormData>>;
}

const TextArea = ({ name, value, setValue }: Props) => {
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
};

export default TextArea;
