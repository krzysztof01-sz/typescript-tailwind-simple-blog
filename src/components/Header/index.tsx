interface Props {
  message: string;
}

function Header({ message }: Props) {
  return (
    <header className="bg-gray-800 text-gray-300 text-center text-3xl font-bold p-4">
      {message}
    </header>
  );
}

export default Header;
