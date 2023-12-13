import { useState } from "react";
import { DropDown } from "../dropdown/DropDown";
import { List } from "../list/List";
import { Section } from "../section/Section";

export const Cards = (props) => {

    const [showDetails, setShowDetails] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);
    const [brewingMethod, setBrewingMethod] = useState(false);
    const [foodPairing, setFoodPairing] = useState(false);
    const [brewerTips, setBrewerTips] = useState(false);

    return (
        <div className="w-11/12 rounded-lg px-3 pt-1 pb-5 shadow-[1px_1px_10px_0_black] hover:shadow-none sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 3xl:w-3/12 4xl:w-1/5">

            <h1 className="text-blue-600 text-lg font-semibold">
                {props.name} - {props.tagline}
            </h1>

            <section className="flex items-center justify-center">
                <img src={props.imageUrl} className="w-2/5 h-80 rounded-lg mt-2">
                </img>
            </section>

            <p className="mt-2 text-lg font-semibold text-blue-700">
                {props.description}
            </p>

            <DropDown heading="Details" click={setShowDetails} />
            {showDetails &&
                <Section text="">
                    <List text={`ABV : ${props.abv}%`} />
                    <List text={`IBU : ${props.ibu}`} />
                    <List text={`First Brewed : ${props.firstBrewed}`} />
                </Section>
            }
            <DropDown heading="Ingredients" click={setShowIngredients} />

            {showIngredients &&
                <>
                    <Section text="Malts (in Kilograms)">
                        {
                            props.malt.map((d, i) =>
                                <List
                                    key={i}
                                    text={`${d.name} (${d.amount.value})`}
                                />
                            )
                        }
                    </Section>

                    <Section text="Hops (in Grams)">
                        {
                            props.hops.map((d, i) =>
                                <List
                                    key={i}
                                    text={`${d.name} (${d.add}, ${d.attribute} - ${d.amount.value})`}
                                />
                            )
                        }
                    </Section>

                    <Section text="Yeast">
                        <List text={props.yeast} />
                    </Section>
                </>
            }

            <DropDown heading="Brewing Methods" click={setBrewingMethod} />
            {brewingMethod &&
                <>
                    <Section text="Mash Temperature">
                        {
                            props.mashTemp.map((d, i) =>
                                <List
                                    key={i}
                                    text={`${d.temp.value}℃ for ${d.duration === null ? 0 : d.duration} minutes`}
                                />
                            )
                        }
                    </Section>

                    <Section text="Fermentation Temperature">
                        <List text={`${props.fermentationTemperature}℃`} />
                    </Section>
                </>
            }

            <DropDown heading="Food Pairing" click={setFoodPairing} />
            {foodPairing &&
                <Section text="">
                    {
                        props.foodPairing.map((d, i) =>
                            <List
                                key={i}
                                text={d}
                            />
                        )
                    }
                </Section>
            }

            <DropDown heading="Brewer's Tips" click={setBrewerTips} />
            {brewerTips &&
                <Section text="">
                    <List text={props.brewerTips} />
                </Section>
            }

            <h1 className="text-xl font-semibold text-purple-900 text-center mt-7">
                {props.contributed}
            </h1>

        </div>
    );
};

