const SectionTitle = ({title, paragraph}) => {
  return (
    <>
      <div className="section-header">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export default SectionTitle;
