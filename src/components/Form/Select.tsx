import { ArticleFormData, InputProps } from '../../interfaces';

interface Props extends InputProps {
  options: object;
}

function Select({ name, value, options, setValue }: Props) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <select
        className="border-2 border-gray-600 p-1 rounded-lg"
        name={name}
        value={value}
        onChange={({ target: { name, value } }) => {
          setValue((data: ArticleFormData) => ({ ...data, [name]: value }));
        }}
      >
        {Object.values(options).map((category: string, i: number) => {
          return (
            <option key={i} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <br />
    </>
  );
}

export default Select;
