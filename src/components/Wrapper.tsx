import Menu from "./Menu";

type Props = { children: React.ReactNode };

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Menu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
