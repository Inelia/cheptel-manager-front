import React from 'react';

function Img(props) {
  //Créer une variable stockant le nom de l'image
  // const nomImage = "nom de l'image";

  return (
    <>
      <img
        //Mettre la variable nomImage dans l'attribut src
        src={props.src}
        alt={props.alt}
      />
    </>
  );
}

export default Img;
