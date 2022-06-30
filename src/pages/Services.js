import React from 'react';
import { useState, useEffect } from 'react';

function Services() {
  // const [login, setLogin] = useState(true);
  // useEffect(() => {
  //   document.body.style.backgroundColor = 'rgb(250, 251, 252)';
  // }, []);
  // useEffect(() => {
  //   if (login) {
  //     console.log('User is connected !');
  //     // setLogin(false);
  //   } else {
  //     console.log('User is disconnected');
  //     // setLogin(true);
  //   }
  // }, [login]);
  const [Data, setData] = useState({});

  useEffect(() => {
    // // version avec .then
    // function fetchData(url){
    //   const res = fetch(url)
    //     .then((res) => res.json())
    //     .then((result) => {
    //       console.log(result.results);
    //       let array = result.results;
    //       array.forEach((element) => {
    //         console.log(element.urls.thumb);
    //       });
    //       return result;
    //     })
    //     .catch((error) => console.log(error));
    // }

    // // Version avec async await
    async function fetchData(url) {
      try {
        const res = await fetch(url);
        const result = await res.json();
        // console.log(result.results);
        let array = result.results;
        let arrayResults = [];
        array.forEach((element) => {
          arrayResults.push({
            url: element.urls.thumb,
            username: element.user.username,
            profilePict: element.user.profile_image.small,
          });
        });
        console.log(arrayResults);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(
      'https://api.unsplash.com/search/photos?query=Art&client_id=NtPmUNSwcDiBLX0gnKItq8QDRjnbOamSfTMqK1E-CYE&per_page=5'
    );
  }, []); // le tableau vide évite la réinitialisation de la fonction et son rechargement infini
  return (
    <>
      <button onClick={() => {}}>Log In</button>
      <button onClick={() => {}}>Log Out</button>
    </>
  );
}

export default Services;
