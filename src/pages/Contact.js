import { render } from '@testing-library/react';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
// import HeaderCreator from "../components/HeaderCreator";
import Card from '../components/Card/Card.js';

function Contact() {
  const [unsplash, setUnsplash] = useState([
    {
      url: 'element.urls.full',
      username: 'element.user.username',
      pic: 'element.user.profile_image.small',
    },
  ]);
  const [renderHTML, setRenderHTML] = useState(
    <div>
      <p>image en cours de chargement</p>
    </div>
  );
  // const didMount = useRef(false);

  console.log(unsplash);

  function renderCard() {
    // let res = [];
    // for (let i = 0; i < unsplash.length; i++) {
    //   console.log(unsplash[i].url);
    //   res.push(
    //     <div key={i}>
    //       <Card
    //         src={unsplash[i].url}
    //         icone={unsplash[i].pic}
    //         creator={unsplash[i].username}
    //       />
    //     </div>
    //   );
    // }
    // return res;

    unsplash.map((element) => {
      return (
        <Card
          src={element.url}
          alt="nianiania"
          icone={element.pic}
          creator={element.username}
        />
      );
    });
  }
  useEffect(() => {
    let response = [];
    async function fetchData(url) {
      try {
        const res = await fetch(url);
        let data = await res.json();
        const array = data.results;

        array.forEach((element) => {
          response.push({
            url: element.urls.small,
            username: element.user.username,
            pic: element.user.profile_image.small,
          });
          // console.log(element.urls.small)
          // console.log(element.user.username)
          // console.log(element.user.profile_image.small)
        });
        setUnsplash(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(
      'https://api.unsplash.com/search/photos?query=Art&client_id=NtPmUNSwcDiBLX0gnKItq8QDRjnbOamSfTMqK1E-CYE&per_page=5'
    );
  }, []);
  useEffect(() => {
    setRenderHTML(renderCard());
    console.log('allo ' + unsplash[0]);
  }, [unsplash]);

  return <div id="home">{renderHTML}</div>;
}

export default Contact;
