import { useEffect, useState } from "react";
import { Cards } from "./components/cards/Cards";
import Loader from "./components/Loader/Loader";

function App() {

  const [data, setData] = useState([]);
  const [loader,setLoader]=useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      const res = await fetch("https://api.punkapi.com/v2/beers");
      const parsedData = await res.json();
      setData(parsedData);
      setLoader(false);
    };
    getData();
  }, []);

  const [searchText, setSearchText] = useState("");

  const search = (events) => {
    setSearchText(events.target.value);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4">

      <section className="w-full flex flex-col items-center gap-4 pb-5 sticky top-0 bg-white">

        <h1 className="text-xl text-black font-semibold">The Good Game Theory</h1>

        <input type="search" className="w-11/12 px-2 py-1 text-lg border-gray-300 border-2 outline-black rounded-md" placeholder="Search using 'name' " value={searchText} onChange={search}></input>

      </section>

      <section className="w-full flex items-center justify-center flex-wrap gap-10 pb-6">

        {loader ? <Loader /> :
          data.filter((d) =>
            d.name.toLowerCase().includes(searchText.toLowerCase() === "" ? "" : searchText.toLowerCase()
            )).map((d) =>
              <Cards
                key={d.id}
                name={d.name}
                tagline={d.tagline}
                imageUrl={d.image_url}
                description={d.description}
                abv={d.abv}
                ibu={d.ibu}
                firstBrewed={d.first_brewed}
                malt={d.ingredients.malt}
                hops={d.ingredients.hops}
                yeast={d.ingredients.yeast}
                mashTemp={d.method.mash_temp}
                fermentationTemperature={d.method.fermentation.temp.value}
                foodPairing={d.food_pairing}
                brewerTips={d.brewers_tips}
                contributed={d.contributed_by}
              />
            )
        }

      </section>

    </div>
  );
}

export default App;
