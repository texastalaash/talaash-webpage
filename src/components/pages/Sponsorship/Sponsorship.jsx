import React from "react";
import "./Sponsorship.css";

const Sponsorship = () => {
  return (
    <section className="sponsorship-container">
      <h1>Sponsorship Package</h1>
      <div className="sponsorship-content">
        <div className="why-help-container sponsor-section">
          <div className="why-help-content">
            <h1>Why Help?</h1>
            <ul>
              <li>
                Social Media
                <ul>
                  <li>
                    Talaash’s Instagram has <span>1300+ followers</span>
                  </li>
                  <li>
                    Team members collectively have{" "}
                    <span>over 10k+ followers</span> on
                    Instagram/Facebook/Snapchat
                  </li>
                  <li>
                    Dances in the DDN circuit are seen by{" "}
                    <span>
                      1000+ live audience members and 4000+ nationwide
                      livestream viewers
                    </span>
                  </li>
                  <li>
                    An end of year dance is performed at UT Austin, with
                    potential to reach up to <span>50,000</span> students on
                    campus
                  </li>
                </ul>
              </li>
              <li>Giving Back to the Community</li>
              <li>
                South Asian culture awareness
                <ul>
                  <li>
                    Indo-Americans represent one of the fastest growing ethnic
                    groups in North America, with the latest census data showing
                    a 69.4% increase in their numbers in the United States
                    between 2000 and 2010
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="phone-image">
            <img src="/assets/sponsorship/insta-phone.png" alt="" />
          </div>
        </div>
        <div className="benefits-container sponsor-section">
          <div className="sponsor-shirt">
            <img src="/assets/sponsorship/sponsorship-shirt.png" alt="" />
          </div>
          <div className="benefits-content">
            <h1>Benefits</h1>
            <ul>
              <li>
                <span>YOUR</span> Logo on our team shirts (100+ sold/worn by UT
                Austin students/friends/family)
              </li>
              <li>
                Social Media Advertising
                <ul>
                  <li>
                    Access to <span>1.3 K (and growing)</span> Austin
                    individuals through our Instagram, Facebook, and YouTube
                  </li>
                  <li>
                    <span>YOUR</span> Logo on the Facebook Cover on Texas
                    Talaash’s Facebook page
                  </li>
                  <li>
                    Instagram Posts/Stories (Social Media Blasts i.e{" "}
                    <span>shoutouts, direct links, etc.</span>)
                  </li>
                </ul>
              </li>
              <li>
                <span>Prominent recognition in backdrop video</span> during
                performances (seen on competition livestream by{" "}
                <span>thousands</span>)
              </li>
              <li>
                Logo on Talaash Banner (used for recruitment/fundraising/other
                Talaash associated events on campus)
              </li>
            </ul>
          </div>
        </div>
        <div className="finances-container sponsor-section">
          <h1>2022-2023 Finances</h1>
          <table className="finances-table">
            <tr>
              <th>Competition Fees: (50/person)</th>
              <th>$6,000 (4 Competitions for 30 Dancers)</th>
            </tr>
            <tr>
              <th>Flight Ticket: (200/person)</th>
              <th>$12,000 (2 out of state competitions)</th>
            </tr>
            <tr>
              <th>In State Travel: (30/person)</th>
              <th>$1,800 (2 in state competitions)</th>
            </tr>
            <tr>
              <th>Production/Equipment:</th>
              <th>$1,500 (Costumes, lighting, props)</th>
            </tr>
            <tr>
              <th>Total Estimated Costs:</th>
              <th>$21,300!!</th>
            </tr>
          </table>
          <p>
            Competing is very expensive as referenced by the chart above.
            However, we still want to put on a great performance for everyone,
            improve as a team, and promote a positive message in our community.
            <span> This is where you come in!</span>
          </p>
        </div>
        <div className="packages-container sponsor-section">
          <h1>Packages</h1>
          <div className="packages-content">
            <div className="package bronze">
              <h2>Bronze</h2>
              <h3>$300 - $400</h3>

              <div className="package-details">
                <ul>
                  <li>Small Logo on shirt and FB cover</li>
                  <li>Small Logo on Backdrop</li>
                  <li>Small Logo on Banner</li>
                  <li>Semesterly Social Media Blasts</li>
                </ul>
              </div>
            </div>
            <div className="package silver">
              <h2>Silver</h2>
              <h3>$600 - $700</h3>

              <div className="package-details">
                <ul>
                  <li>Medium Logo on shirt and FB cover</li>
                  <li>Medium Logo Backdrop</li>
                  <li>Medium Logo on Banner</li>
                  <li>Quarterly Social Media Blasts</li>
                  <li>Member Volunteer (12 man hours)</li>
                </ul>
              </div>
            </div>
            <div className="package gold">
              <h2>Gold</h2>
              <h3>$1,000</h3>
              <div className="package-details">
                <ul>
                  <li>Large Logo on shirt and FB cover</li>
                  <li>Large Logo on Backdrop</li>
                  <li>Large Logo on Banner</li>
                  <li>Monthly Social Media Blasts</li>
                  <li>Member Volunteer (24 man hours)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
