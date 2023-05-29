import Link from "next/link";
const PageHero = ({pageTitle, breadcrumbTitle}) => {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-heading">
              {breadcrumbTitle ? (
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/"> Home </Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      {breadcrumbTitle}
                    </li>
                  </ol>
                </nav>
              ) : (
                ""
              )}

              <div className="page-heading-content">
                <h1>{pageTitle}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
