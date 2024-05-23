import React from "react";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <div className="img">
          <img
            src="https://source.unsplash.com/random/1000x1000?sig=1"
            alt="post"
          />
        </div>
        <div className="single-row">
          <div className="single-cont">
            <div className="profile">
              <div className="info">
                <img
                  src="https://source.unsplash.com/random/50x50?sig=1"
                  alt=""
                />
                <div className="text">
                  <h1>john</h1>
                  <p>posted 2 days ago</p>
                </div>
              </div>
              <div className="action">
                <Link to={`/write/edit=1001`}>edit</Link>
                <button>delete</button>
              </div>
            </div>
            <div className="single-text">
              <h1>Possession her thoroughly remarkably.</h1>
              <p>
                Travelling alteration impression six all uncommonly. Chamber
                hearing inhabit joy highest private ask him our believe. Up
                nature valley do warmly. Entered of cordial do on no hearted.
                Yet agreed whence and unable limits. Use off him gay abilities
                concluded immediate allowance.
                <br />
                <br />
                Was justice improve age article between. No projection as up
                preference reasonably delightful celebrated. Preserved and
                abilities assurance tolerably breakfast use saw. And painted
                letters forming far village elderly compact. Her rest west each
                spot his and you knew. Estate gay wooded depart six far her. Of
                we be have it lose gate bred. Do separate removing or expenses
                in. Had covered but evident chapter matters anxious.
                <br />
                <br />
                One advanced diverted domestic sex repeated bringing you old.
                Possible procured her trifling laughter thoughts property she
                met way. Companions shy had solicitude favourable own. Which
                could saw guest man now heard but. Lasted my coming uneasy
                marked so should. Gravity letters it amongst herself dearest an
                windows by. Wooded ladies she basket season age her uneasy saw.
                Discourse unwilling am no described dejection incommode no
                listening of. Before nature his parish boy.
                <br />
                <br />
                Sportsman delighted improving dashwoods gay instantly happiness
                six. Ham now amounted absolute not mistaken way pleasant
                whatever. At an these still no dried folly stood thing. Rapid it
                on hours hills it seven years. If polite he active county in
                spirit an. Mrs ham intention promotion engrossed assurance
                defective. Confined so graceful building opinions whatever
                trifling in. Insisted out differed ham man endeavor expenses. At
                on he total their he songs. Related compact effects is on
                settled do.
              </p>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Single;
