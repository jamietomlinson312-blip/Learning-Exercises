export const Header = () => {
  return (
    <header className="flex fixed z-50 top-0 left-0 w-screen justify-between p-5 border-b border-slate-100 shadow-xs">
      <p className="font-semibold text-xl">
        Exercise - Movie Review Application
      </p>
      <div className="flex max-w-3/10">
        <nav className="flex gap-2 font-light">
          <a>Link 1</a>
          <a>Link 2</a>
          <a>Link 3</a>
        </nav>
      </div>
    </header>
  );
};
