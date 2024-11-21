import { Layout, getThemedContent } from '@msanvarov/core-components';
import { en } from '@msanvarov/i18n';
import classNames from 'classnames';
import Link from 'next/link';
import { Container } from 'reactstrap';
import { useTheme } from 'next-themes';

const OfferingsPage = () => {
  const { theme } = useTheme();
  return (
    <Layout>
      <section className="service-area">
        <div className="container">
          <h1 className="section-heading" data-aos="fade-up">
            <img src="/assets/star-2.png" alt="Star" /> {en.offerings.heading}{' '}
            <img src="/assets/star-2.png" alt="Star" />
          </h1>
            {/* Content */}
            <div className="col-md-12">
              <h1 className="section-heading" data-aos="fade-up">
                <img src="/assets/star-2.png" alt="Star" />{' '}
                {en.offerings.heading}{' '}
                <img src="/assets/star-2.png" alt="Star" />
              </h1>
              <div className="service-content-wrap" data-aos="zoom-in">
                <div className="service-content-inner shadow-box">
                  <div className="service-items">
                    {en.offerings.offerings.map((item, index) => (
                      <div className="service-item" key={index}>
                        <h3>{item.title}</h3>
                        {item.description.map((item, index) => (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: item,
                            }}
                          ></p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        
            <div className="row mt-24">
            <div className="col-md-12">
              <div className="d-flex profile-contact-credentials-wrap gap-24">
                <div data-aos="zoom-in" className="flex-1">
                  <div className="about-contact-box info-box shadow-box">
                    <Link className="overlay-link" href="/contact" />
                    <img src="/assets/bg1.png" alt="BG" className="bg-img" />
                    <img
                      src="/assets/icons/icon2.png"
                      alt="Icon"
                      className="star-icon"
                    />
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: en.bio.contact.heading,
                      }}
                    ></h1>
                    <Link
                      href={en.bio.contact.button.link}
                      className="about-btn"
                    >
                      <img
                        src={getThemedContent(
                          theme,
                          en.bio.contact.button.icon
                        )}
                        alt="button"
                      />
                    </Link>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="about-profile-box info-box shadow-box h-full">
                    <img src="/assets/bg1.png" alt="BG" className="bg-img" />
                    <div className="inner-profile-icons shadow-box">
                      {en.bio.profiles.profiles.map((item, index) => (
                        <Link href={item.link} key={index}>
                          <i className={item.icon} />
                        </Link>
                      ))}
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>{en.bio.profiles.caption}</h4>
                        <h1>{en.bio.profiles.heading}</h1>
                      </div>
                      <Link
                        href={en.bio.profiles.button.link}
                        className="about-btn"
                      >
                        <img
                          src={getThemedContent(
                            theme,
                            en.bio.profiles.button.icon
                          )}
                          alt="button"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OfferingsPage;
