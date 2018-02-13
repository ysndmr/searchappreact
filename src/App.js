import React, { Component } from 'react';
import './index.css';
import {SearchApp} from './search';
import {SearchList} from './searchlist';

class App extends Component {
  render() {
    const myResults = [
        {"full_name":"Manuel Perry", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic001.png", "status":"active"},
        {"full_name":"Christopher Hart", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic002.png", "status":"active"},
        {"full_name":"Patricia Williams", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic003.png", "status":"inactive"},
        {"full_name":"Anthony Samuel", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic004.png", "status":"active"},
        {"full_name":"Alan Wagner", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic005.png", "status":"active"},
        {"full_name":"Samantha Lynas", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic006.png", "status":"inactive"},
        {"full_name":"Johnny Blue", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic007.png", "status":"active"},
        {"full_name":"Allan Bowman", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic008.png", "status":"inactive"},
        {"full_name":"Kathryn Sauer" ,"photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic009.png", "status":"active"},
        {"full_name":"Natalie Doe", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic010.png", "status":"inactive"},
        {"full_name":"Dr. Zach", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic011.png", "status":"active"},
        {"full_name":"Melanie Gibson", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic012.png", "status":"active"},
        {"full_name":"Manuel Perry", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic001.png", "status":"active"},
        {"full_name":"Christopher Hart", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic002.png", "status":"active"},
        {"full_name":"Patricia Williams", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic003.png", "status":"inactive"},
        {"full_name":"Anthony Samuel", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic004.png", "status":"active"},
        {"full_name":"Alan Wagner", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic005.png", "status":"active"},
        {"full_name":"Samantha Lynas", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic006.png", "status":"inactive"},
        {"full_name":"Johnny Blue", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic007.png", "status":"active"},
        {"full_name":"Allan Bowman", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic008.png", "status":"inactive"},
        {"full_name":"Kathryn Sauer" ,"photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic009.png", "status":"active"},
        {"full_name":"Natalie Doe", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic010.png", "status":"inactive"},
        {"full_name":"Dr. Zach", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic011.png", "status":"active"},
        {"full_name":"Melanie Gibson", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic012.png", "status":"active"},
        {"full_name":"Manuel Perry", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic001.png", "status":"active"},
        {"full_name":"Christopher Hart", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic002.png", "status":"active"},
        {"full_name":"Patricia Williams", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic003.png", "status":"inactive"},
        {"full_name":"Anthony Samuel", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic004.png", "status":"active"},
        {"full_name":"Alan Wagner", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic005.png", "status":"active"},
        {"full_name":"Samantha Lynas", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic006.png", "status":"inactive"},
        {"full_name":"Johnny Blue", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic007.png", "status":"active"},
        {"full_name":"Allan Bowman", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic008.png", "status":"inactive"},
        {"full_name":"Kathryn Sauer" ,"photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic009.png", "status":"active"},
        {"full_name":"Natalie Doe", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic010.png", "status":"inactive"},
        {"full_name":"Dr. Zach", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic011.png", "status":"active"},
        {"full_name":"Melanie Gibson", "photo_link":"http://www.teachngo.com/jobs/challenges/frontend/avatars/pic012.png", "status":"active"}
      ];
    return (
      <div className="content">
            <SearchApp myResults={myResults} />
            <SearchList myResults={myResults} />

      </div>

    );
  }
}

export default App;
