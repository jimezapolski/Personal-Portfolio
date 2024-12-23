type PortfolioHeaderProps = {
  media: string;
};
export const PortfolioHeader = ({ media }: PortfolioHeaderProps) => {
  return (
    <div className="project-details-img" data-aos="zoom-in" >
      <img src='/assets/proyectos.svg' alt="banner" />
    </div>
  );
};
