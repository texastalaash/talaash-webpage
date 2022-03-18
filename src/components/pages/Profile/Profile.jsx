import { useParams } from "react-router-dom";
import "./Profile.css";
import FadeIn from "react-fade-in";

const Profile = () => {
  const { name } = useParams();
  const year = 2;

  let name_split = name.split("-");
  let first = name_split[0];
  let last = name_split[1];
  first = first.charAt(0).toUpperCase() + first.slice(1);
  last = last.charAt(0).toUpperCase() + last.slice(1);

  const full_name = first + " " + last;

  const date_of_birth = "12/06/2001";

  const age = getAge(new Date(date_of_birth));

  return (
    <FadeIn>
      <div className="profile-wrapper">
        <h1 className="profile-name-title">{full_name}</h1>
        <div className="profile-container">
          <div className="profile-left-container">
            <img
              className="profile-image"
              src={`/assets/team-pics/${year}/photoshoot/individual/${full_name}.jpg`}
              alt={`${full_name}`}
            />
            <div className="info-container">
              <div className="details-container">
                <p>
                  Age: <span>{age}</span>
                </p>
                <p>
                  Nickname: <span>alcoholic</span>
                </p>
                <p>
                  Quote: <span>"I'm not an alcoholic"</span>
                </p>
                <p>
                  Favorite Dance: <span>Bhangra</span>
                </p>
                <p>
                  Years: <span>1.0,2.0,3.0</span>
                </p>
              </div>
              <div className="socials-container">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-snapchat-ghost"></i>
                <i class="far fa-envelope"></i>
              </div>
            </div>
          </div>
          <div className="profile-right-container">
            <h2>About</h2>
            <p className="about-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              saepe incidunt ullam eos nemo nostrum cumque explicabo, autem
              sequi dolorem maxime excepturi blanditiis veritatis. Quam, magni
              blanditiis? Ducimus incidunt deserunt, atque dolorem adipisci
              eveniet ratione animi cumque cupiditate quas consequatur iusto
              modi! Deserunt aspernatur, dolor repellat beatae vel magnam
              voluptas.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const getAge = (dob) => {
  var today = new Date();
  var age = today.getFullYear() - dob.getFullYear();
  var m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
};

export default Profile;
