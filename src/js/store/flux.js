import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      planets: [],
      characters: [],
      favoritos: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      addFavoritos: (item) => {
        let addedToFavoritos = getStore().favoritos;
        addedToFavoritos.push(item);
        setStore({ favoritos: addedToFavoritos });
      },
      deleteFavoritos: (item) => {
        let deleteFromFavoritos = getStore().favoritos;
        let chauFavoritos = deleteFromFavoritos.filter(
          (element, i) => i != index
        );
        setStore({ favoritos: chauFavoritos });
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        fetch("https://www.swapi.tech/api/planets")
          .then((res) => res.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((err) => console.error(err));
        fetch("https://www.swapi.tech/api/people")
          .then((res) => res.json())
          .then((data) => setStore({ characters: data.results }))
          .catch((err) => console.error(err));
      },

      eachCharacter: (uid) => {
        fetch("https://www.swapi.tech/api/people/" + uid)
          .then((resp) => resp.json())
          .then((resp) => setStore({ unicCharacter: resp.result.properties }))
          .catch((err) => console.error(err));
      },
      eachPlanet: (uid) => {
        console.log(uid);
        fetch("https://www.swapi.tech/api/planets/" + uid)
          .then((resp) => resp.json())
          .then((resp) => setStore({ unicPlanet: resp.result.properties }))
          .catch((err) => console.error(err));
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
